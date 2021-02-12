const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/entry-animation.js',
  output: {
    filename: 'entry-animation.min.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
};