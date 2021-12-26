module.exports = {
  stories: [
    '../src/__stories__/*.stories.mdx',
    '../src/__stories__/*.stories.js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
}
