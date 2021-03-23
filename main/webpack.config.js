const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: { publicPath: "http://localhost:8084/" },
  devtool: false,
  devServer: { port: 8084 },
  externals: {
    // react: "React",
    // "react-dom": "ReactDOM",
    // antd: "antd@4.14.0",
    react: "React",
    "react-dom": "ReactDOM",
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
              plugins: [],
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
  // resolve: {
  //   alias: {
  //     // Needed when library is linked via `npm link` to app
  //     react: path.resolve("./node_modules/react"),
  //   },
  // },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "main-[name].css",
      // ignoreOrder: true,
    }),
    new ModuleFederationPlugin({
      name: "main",
      filename: "remoteEntry.js",
      remotes: {
        // remote: "remote@http://localhost:8082/remoteEntry.js",
        host: "host@http://localhost:8083/remoteEntry.js",
      },
      exposes: {},
      // shared: { react: "^16.4.0", "react-dom": "^16.4.0" },
    }),
  ],
};
