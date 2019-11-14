const path = require("path");
const ZipPlugin = require("./plugins/zip-plugins");
module.exports = {
  entry: {
    "./pages/home/index.js": "./pages/home/index.js",
    "./pages/product/detail.js": "./pages/product/detail.js",
    "./pages/search/index.js": "./pages/search/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]",
    chunkFilename: "[name].js"
  },
  plugins: [new ZipPlugin({})],
  mode: "production",
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      cacheGroups: {
        default: false,
        vendors: false,
        commons: {
          name: "commons",
          chunks: "all",
          minChunks: 2
        },
        react: {
          name: "commons",
          chunks: "all",
          minChunks: 2,
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/
        }
      }
    }
  }
};
