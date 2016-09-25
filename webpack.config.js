const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    app: path.join(PATHS.src, 'index'),
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: PATHS.build,
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
    port: process.env.PORT
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
