const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/entry-animation.js',
  output: {
    filename: 'entry-animation.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
};