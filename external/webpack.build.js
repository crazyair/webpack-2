const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  // mode: "production",
  entry: "./src/demo.js",
  // entry: ["./src/index.js", "./src/demo.js"],
  entry: {
    demo: "./src/demo.js",
    // yzhd: "./src/yzhd.js",
  },
  output: {
    libraryTarget: "var",
    library: "demo",
  },
  // devtool: false,
  // externals: {
  //   // react: "React",
  //   // "react-dom": "ReactDOM",
  //   // antd: "antd",
  //   // "yforms-provider": "var yforms",
  //   demo2: "./src/demo.js",
  // },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    modules: [path.resolve(__dirname), "node_modules"],
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
        use: [{ loader: "file-loader" }],
      },
    ],
  },
};
