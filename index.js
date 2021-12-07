const path = require('path');
const core = require('@actions/core');
// const github = require('@actions/github');
const fs = require('fs-extra');
const ci = require('miniprogram-ci');

async function run() {
  try {
    const projectType = core.getInput('project_type') || 'miniProgram';
    const actionType = core.getInput('action_type') || 'preview';
    const projectPath = core.getInput('project_path') || './';
    const version = core.getInput('version') || '1.0.0';
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
    });
    const ans = await project[actionType]({
      project,
      version,
      setting: {
        es6: core.getInput('es6'),
        es7: core.getInput('es7'),
        minify: core.getInput('minify'),
        onProgressUpdate: console.log,
      }
    });

    console.log('ci result: ', ans);
  } catch (error) {
    core.setFailed(error);
  }
}

run();
