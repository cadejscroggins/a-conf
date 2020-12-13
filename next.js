const appRootPath = require('app-root-path');
const fs = require('fs');
const withComposePlugins = require('next-compose-plugins');
const withTranspileModules = require('next-transpile-modules');

const cdkOutputsFile = `${appRootPath}/cdk.outputs.json`;
const cdkOutputsExist = fs.existsSync(cdkOutputsFile);
const cdkOutputs = cdkOutputsExist ? require(cdkOutputsFile) : {};

module.exports = withComposePlugins(
  [[withTranspileModules(['a-uik', 'a-util'])]],
  {
    devIndicators: { autoPrerender: false },
    env: cdkOutputs[Object.keys(cdkOutputs)[0]],
  }
);
