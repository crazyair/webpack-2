const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // output: { publicPath: "http://localhost:8083/" },
  output: {
    publicPath: "http://localhost:8083/",
    libraryTarget: "window",
  },
  devtool: false,
  devServer: { port: 8083 },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    antd: "antd@4.14.0",
    "yforms-provider": "yforms-provider@1.0.3",
  },
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
                  "primary-color": "#1DA57A",
                  "link-color": "#1DA57A",
                  "border-radius-base": "2px",
                  "ant-prefix": "ant-v4-host",
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
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "host-[name].css",
      // ignoreOrder: true,
    }),
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote: "remote@http://localhost:8082/remoteEntry.js",
      },
      exposes: {
        "./Provider": "./src/Provider",
        "./Demo": "./src/demo",
      },
      // shared: ["react", "react-dom"],
      // shared: {
      //   react: "^16.4.0",
      //   "react-dom": "^16.4.0",
      //   antd: "^4.13.1",
      //   ["yforms-provider"]: "^1.0.1",
      // },
    }),
  ],
};
