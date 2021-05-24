const path = require('path')

module.exports = {
  stories: [
    '../src/__stories__/*.stories.mdx',
    '../src/__stories__/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('../src'),
    ]
    return config
  },
  // webpackFinal: (webpackConfig) => {
  //   const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
  //     ({ constructor }) =>
  //       constructor && constructor.name === 'ModuleScopePlugin',
  //   )

  //   webpackConfig.resolve.plugins.splice(scopePluginIndex, 1)
  //   return webpackConfig
  // },
}
