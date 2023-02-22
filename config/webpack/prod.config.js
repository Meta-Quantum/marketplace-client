const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { baseWebpack, appRoot } = require("./base.config");

module.exports = {
  ...baseWebpack,
  entry: path.resolve(appRoot, "src", "client", "index.tsx"),
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(appRoot, "dist", "build"),
    publicPath: "",
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      automaticNameDelimiter: "_",
    },
  },
  module: {
    rules: [
      ...baseWebpack.module.rules.slice(0, 5),
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    ...baseWebpack.plugins,
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      title: "NFT Launchpad",
      description: "the launchpad ...",
      template: path.resolve(appRoot, "src", "client", "index.html"),
    }),
  ],
};
