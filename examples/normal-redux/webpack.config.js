const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HWPPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, '../index.html'),
  filename: './index.html'
});

module.exports = {
  entry: path.join(__dirname, `src/index.jsx`),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [HWPPlugin],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3000
  }
};
