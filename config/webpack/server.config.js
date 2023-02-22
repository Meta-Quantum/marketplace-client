const webpackNodeExternals = require("webpack-node-externals");
const path = require("path");
const { baseWebpack, appRoot } = require("./base.config");

module.exports = {
  ...baseWebpack,
  entry: path.resolve(appRoot, "src", "server", "index.jsx"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(appRoot, "dist", "buildServer"),
    publicPath: "",
  },
  mode: "development",
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [webpackNodeExternals()], // in order to ignore all modules in node_modules folder
};
