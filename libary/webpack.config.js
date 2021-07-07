const path = require("path");

module.exports = {
  // mode: "development",
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    libraryTarget: "umd",
    globalObject: "this", // 为了使 UMD 构建在浏览器和 Node.js 上均可用，应将 output.globalObject 选项设置为 'this'
    library: "webpackNumbers",
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
  module: {
    // rules: [
    //   {
    //     test: /\.(js)$/,
    //     exclude: /(node_modules|bower_components)/,
    //     use: "babel-loader",
    //   },
    // ],
  },
};
