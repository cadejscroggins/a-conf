const appRootPath = require('app-root-path');
const fs = require('fs');
const withTm = require('next-transpile-modules');

const cdkOutputsFile = `${appRootPath}/cdk.outputs.json`;
const cdkOutputsExist = fs.existsSync(cdkOutputsFile);
const cdkOutputs = cdkOutputsExist ? require(cdkOutputsFile) : {};

module.exports = withTm(['a-ui', 'a-util'])({
  devIndicators: { autoPrerender: false },
  env: cdkOutputs[Object.keys(cdkOutputs)[0]],
});
