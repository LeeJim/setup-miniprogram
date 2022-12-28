const path = require('path');
const core = require('@actions/core');
// const github = require('@actions/github');
const fs = require('fs-extra');
const ci = require('miniprogram-ci');
const artifact = require('@actions/artifact');

async function getRobot() {
  const { GITHUB_WORKSPACE } = process.env;
  const artifactClient = artifact.create()
  const artifactName = 'miniprogram-robot';
  const filepath = path.resolve(GITHUB_WORKSPACE, 'miniprogram-robot.text');
  let id = 1;

  try {
    await artifactClient.downloadArtifact(artifactName);
    
    if (fs.existsSync(filepath)) {
      const nextId = parseInt(fs.readFileSync(filepath, { encoding: 'utf-8' }) + 1, 10);
      id = nextId % 30;
    }
  } catch(err) {
    console.log('upload artifact failed: ', err)
  } finally {
    fs.writeFileSync(filepath, id.toString(), { encoding: 'utf-8'});
  
    await artifactClient.uploadArtifact(artifactName, [filepath], GITHUB_WORKSPACE)
  }

  console.log('current robot is', id);

  return id;
}

async function run() {
  try {
    const projectType = core.getInput('project_type') || 'miniProgram';
    const actionType = core.getInput('action_type') || 'preview';
    const needPackNpm = core.getInput('need-pack-npm') || false;
    const projectPath = core.getInput('project_path') || './';
    const version = core.getInput('version') || '1.0.0';
    const ignores = core.getInput('ignores') || [];
    const desc = core.getInput('desc') || '自动上传版本';
    const robot = core.getInput('robot') || await getRobot();
    const { MINI_APP_ID, MINI_APP_PRIVATE_KEY, GITHUB_WORKSPACE: sourceDir = '' } = process.env;
    const uploadDir = path.join(sourceDir, projectPath);

    const timestamp = new Date().getTime();
    const privateKeyPath = `./private.${timestamp}.key`;
    await fs.outputFile(privateKeyPath, MINI_APP_PRIVATE_KEY);

    const project = new ci.Project({
      appid: MINI_APP_ID,
      projectPath: uploadDir,
      privateKeyPath,
      type: projectType,
      ignores,
    });
    const optional = {};
    const qrcodeDesc = path.resolve(sourceDir, 'preview.jpg');

    if (actionType == 'preview') {
      optional.qrcodeFormat = core.getInput('qrcodeFormat') || 'base64';
      optional.qrcodeOutputDest = qrcodeDesc;
    }

    if (needPackNpm) {
      const warning = await ci.packNpm(project, {
        ignores: core.getInput('pack_npm_ignore_list') || [],
      })
      console.warn(warning);
    }

    const ans = await ci[actionType]({
      project,
      version,
      desc,
      ...optional,
      setting: {
        es6: core.getInput('es6'),
        es7: core.getInput('es7'),
        minify: core.getInput('minify'),
      },
    });

    console.log('ci result: ', ans);
    if (actionType == 'preview') {
      core.setOutput('preview-qrcode', fs.readFileSync(qrcodeDesc, { encoding: 'utf-8'}));
    }
  } catch (error) {
    console.log('catch error', error);
    core.setFailed(error);
  }
}

run();
