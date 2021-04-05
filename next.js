const appRootPath = require('app-root-path');
const fs = require('fs');

const withComposePlugins = require('next-compose-plugins');
const withTranspileModules = require('next-transpile-modules')(['a-uik']);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const cdkOutputsFile = `${appRootPath}/cdk.outputs.json`;
const cdkOutputsExist = fs.existsSync(cdkOutputsFile);
const cdkOutputs = cdkOutputsExist ? require(cdkOutputsFile) : {};

module.exports = withComposePlugins(
  [withTranspileModules, withBundleAnalyzer],
  {
    devIndicators: { autoPrerender: false },
    env: cdkOutputs[Object.keys(cdkOutputs)[0]],
    future: { webpack5: true },
  }
);
