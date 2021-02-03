const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: { publicPath: "http://localhost:8082/" },
  devtool: false,
  devServer: { port: 8082 },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 } },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MomentLocalesPlugin({ localesToKeep: ["zh_cn"] }),
    new ModuleFederationPlugin({
      filename: "remoteEntry.js",
      name: "remote",
      exposes: { "./NewsList": "./src/NewsList", "./Modal1": "./src/Modal1" },
      shared: ["react", "react-dom"],
    }),
  ],
};
