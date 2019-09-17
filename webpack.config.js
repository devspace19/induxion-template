const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HWPPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/index.html"),
    filename: "./index.html"
});

let args = process.argv.find(arg => arg.search(/\"?--example=.+\"?/) > -1) || '--example=normal-redux';
args = args.split('=');
if (args.length < 1) {
  console.error('Please provide a target examples folder.');
  process.exit();
}
const targetPath = args[1];

module.exports = {
  entry: path.join(__dirname, `examples/${targetPath}/index.jsx`),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [HWPPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3000
  }
};