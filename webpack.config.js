const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/App.js"],
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ["style-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.md$/,
        use: "raw-loader"
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: true,
      minify: true,
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./build"),
    },
    host: "localhost",
    port: 3000,
    historyApiFallback: true, //缺少该配置，会出现上面的错误
  }
};
