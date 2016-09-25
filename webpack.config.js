const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'public/dist')
};

module.exports = {
  resolve: {
    extensions: ['', '.js']
  },
  entry: {
    app: PATHS.src,
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style/url', 'file?name=[name].css', 'extract', 'css'],
        include: PATHS.src
      },
      {
        test: /\.less$/,
        loaders: ['style/url', 'file?name=[name].css', 'extract', 'css', 'less'],
        include: PATHS.src
      },
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: PATHS.src
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
    outputPath: PATHS.dist,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      publicPath: '/'
    })
  ]
};
