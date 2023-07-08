const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.(scss|css|less)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@api": path.resolve(__dirname, "src", "control", "api"),
      "@components": path.resolve(__dirname, "src", "components"),
      "@common": path.resolve(__dirname, "src", "control", "common"),
      "@hook": path.resolve(__dirname, "src", "control", "hook"),
      "@static": path.resolve(__dirname, "src", "static"),
      "@src": path.resolve(__dirname, "src"),
      "@state": path.resolve(__dirname, "src", "state"),
      "@style": path.resolve(__dirname, "src", "style"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
  },
};
