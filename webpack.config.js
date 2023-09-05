const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'react-app', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'src', 'public', 'js'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
