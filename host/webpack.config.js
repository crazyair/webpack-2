const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: { publicPath: "http://localhost:8083/" },
  devtool: false,
  devServer: { port: 8083 },
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
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        remote: "remote@http://localhost:8082/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
