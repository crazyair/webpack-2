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
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "primary-color": "red",
                },
                javascriptEnabled: true,
              },
            },
          },
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
      remotes: {
        host: "host@http://localhost:8083/remoteEntry.js",
      },
      exposes: {
        "./NewsList": "./src/NewsList",
        "./Modal1": "./src/Modal1",
        "./Popconfirm1": "./src/Popconfirm1",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
