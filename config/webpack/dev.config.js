const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { baseWebpack, appRoot } = require("./base.config");

module.exports = {
  ...baseWebpack,
  entry: path.resolve(appRoot, "src", "client", "index.tsx"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(appRoot, "dist", "dev"),
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(appRoot, "dist", "dev"),
    },
    devMiddleware: {
      index: "client/index.html",
      writeToDisk: true,
    },
  },
  plugins: [
    ...baseWebpack.plugins,
    new HtmlWebpackPlugin({
      title: "NFT Launchpad",
      description: "the launchpad ...",
      template: path.join(appRoot, "src", "client", "index.html"),
    }),
  ],
};
