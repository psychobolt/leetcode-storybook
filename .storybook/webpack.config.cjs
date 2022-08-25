const path = require('path');

module.exports = {
  resolve: {
    alias: {
      // Workaround. MDX files do no support babel alias. See https://github.com/storybookjs/storybook/issues/17692
      'linked-list': path.resolve(__dirname, '../src/DataStructure/LinkedList/Medium/MyLinkedList/Singly/javascript/MyLinkedList.es3.cjs'),
    },
  },
  module: {
    rules: [
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
      {
        resourceQuery: /file/,
        type: 'asset/resource',
        generator: {
          filename: '[file]',
        },
      },
    ],
  },
};
