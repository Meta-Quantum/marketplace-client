const path = require("path");
const { baseWebpack, appRoot } = require("./base.config");

module.exports = {
  ...baseWebpack,
  entry: path.resolve(appRoot, "src", "client", "index.tsx"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(appRoot, "public"),
    publicPath: "",
  },
  mode: "development",
};
