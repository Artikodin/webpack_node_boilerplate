const webpack = require("webpack");
const NodemonPlugin = require("nodemon-webpack-plugin");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  externals: [nodeExternals()],
  plugins: [
    new NodemonPlugin(),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: "sourcemap"
};
