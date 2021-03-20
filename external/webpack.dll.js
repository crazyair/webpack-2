const { resolve } = require("path");
const webpack = require("webpack");
module.exports = {
  entry: {
    //最终打包生成的是[name]--jquery
    //['jquery']-->要打包的库是jquery
    yforms: ["yforms-provider"],
  },
  // output: {
  //   filename: "[name].js",
  //   path: resolve(__dirname, "dll"),
  //   //打包的库里面向外暴露出去的内容叫做什么名字
  //   library: "[name]",
  //   libraryTarget: "var",
  // },
  output: {
    path: resolve(__dirname, "dll"),
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
        use: [{ loader: "file-loader" }],
      },
    ],
  },
  plugins: [
    // 打包生成一个manifest.json提供jquery映射关系
    new webpack.DllPlugin({
      name: "[name]", //映射库的暴露的内容名称
      path: resolve(__dirname, "dll/manifest.json"),
    }),
  ],
  // mode: "production",
  mode: "development",
};
