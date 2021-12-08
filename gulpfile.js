const { rollup } = require('rollup');

// Rollup's promise API works great in an `async` task
exports.default = async function() {
  const bundle = await rollup({
    input: './index.js'
  });

  return bundle.write({
    file: 'output/bundle.js',
    format: 'cjs'
  });
}