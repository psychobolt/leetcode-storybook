const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'linked-list': path.resolve(__dirname, '../src/DataStructure/LinkedList/Medium/MyLinkedList/javascript/MyLinkedList.es3.cjs'),
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
