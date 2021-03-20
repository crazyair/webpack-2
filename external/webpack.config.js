const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: { publicPath: "http://localhost:8085/" },
  devtool: false,
  devServer: { port: 8085 },
  // externals: { antd: "antd" },
  // output: {
  //   // library: "MyLibrary",
  //   libraryTarget: "umd",
  // },
  // externals: {
  //   moment: {
  //     root: "moment",
  //     commonjs2: "moment",
  //     commonjs: "moment",
  //     amd: "moment",
  //   },
  //   jquery: "jQuery",
  // },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    antd: "antd",
    // "yforms-provider": "var yforms",
    "yforms-provider": "demo",
    // "yforms-provider": "yformsProvider",
    // "yforms-provider": {
    //   commonjs2: "demo1",
    //   commonjs: "demo2",
    //   // amd: "moment",
    // },
    // moment: {
    //   root: "moment",
    //   commonjs2: "moment",
    //   commonjs: "moment",
    //   amd: "moment",
    // },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-react"] },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
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
      chunkFilename: "main-[name].css",
    }),
  ],
};
