const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'public/dist')
};

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js']
  },
  entry: {
    app: PATHS.src,
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: PATHS.dist,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/public/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style/url', 'file?name=[name].[hash].css', 'extract', 'css'],
        include: PATHS.src
      },
      {
        test: /\.less$/,
        loaders: ['style/url', 'file?name=[name].[hash].css', 'extract', 'css', 'less'],
        include: PATHS.src
      },
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: PATHS.src
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      publicPath: '/public/dist/'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};
