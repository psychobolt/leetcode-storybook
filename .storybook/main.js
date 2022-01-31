const { getStories } = require('./utils');

module.exports = {
  stories: getStories(['../src']),
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true }
    },
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}