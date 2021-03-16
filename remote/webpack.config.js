const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
              plugins: [
                [
                  "import",
                  { libraryName: "antd", libraryDirectory: "es", style: true },
                  "antd",
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "primary-color": "red",
                  "ant-prefix": "ant-v4-remote",
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
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "remote-[name].css",
      // ignoreOrder: true,
    }),
    new ModuleFederationPlugin({
      filename: "remoteEntry.js",
      name: "remote",
      remotes: {
        host: "host@http://localhost:8083/remoteEntry.js",
      },
      exposes: {
        "./Modal1": "./src/Modal1",
        "./Provider": "./src/Provider",
      },
      // shared: ["react", "react-dom"],
      shared: {
        react: "^16.4.0",
        "react-dom": "^16.4.0",
        antd: "^4.13.1",
        ["yforms-provider"]: "1.0.0",
      },
    }),
  ],
};
