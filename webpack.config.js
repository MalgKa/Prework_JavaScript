const path = require("path");
const entryPath = "05_Konfiguracja_srodowiska/01_Projekt_testowy";

module.exports = {
  mode: "development",
  entry: `./${entryPath}/js/app.js`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`),
    publicPath: "/build/",
  },
  devServer: {
    static: path.join(__dirname, `${entryPath}`),
    compress: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
