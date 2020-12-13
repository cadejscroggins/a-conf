const appRootPath = require('app-root-path');
const fs = require('fs');
const withComposePlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withTranspileModules = require('next-transpile-modules');

const cdkOutputsFile = `${appRootPath}/cdk.outputs.json`;
const cdkOutputsExist = fs.existsSync(cdkOutputsFile);
const cdkOutputs = cdkOutputsExist ? require(cdkOutputsFile) : {};

module.exports = withComposePlugins(
  [
    [withTranspileModules, ['a-uik', 'a-util']],
    [withOptimizedImages, {}],
  ],
  {
    devIndicators: { autoPrerender: false },
    env: cdkOutputs[Object.keys(cdkOutputs)[0]],
    webpack: (config) => {
      const newConfig = config;

      newConfig.module.rules = [
        ...config.module.rules,
        { test: /\.txt$/i, use: 'raw-loader' },
      ];

      return newConfig;
    },
  }
);
