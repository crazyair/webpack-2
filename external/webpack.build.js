const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  // mode: "production",
  // entry: ["./src/index.js", "./src/demo.js"],
  entry: {
    demo: "./src/demo.js",
    // yzhd: "./src/yzhd.js",
  },
  output: {
    libraryTarget: "var",
    library: "demo",
  },
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "babel-loader",
      //       options: { presets: ["@babel/preset-react"] },
      //     },
      //   ],
      // },
      {
        test: /\.less$/,
        use: [{ loader: "null-loader" }],
      },
    ],
  },
};
