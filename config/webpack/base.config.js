const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const extraPath = path.join("config", "webpack");

module.exports.appRoot = __dirname.split(extraPath)[0];

module.exports.baseWebpack = {
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|gif)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
      {
        test: /\.svg$/,
        use: "@svgr/webpack",
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
  },
  plugins: [new CleanWebpackPlugin()],
};
