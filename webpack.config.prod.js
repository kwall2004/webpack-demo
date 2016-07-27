const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// The drive letter is lower case in VS Code.
const dirname = __dirname.replace(/^([A-Z]:)/, function (x) { return x.toLowerCase(); });

const PATHS = {
    src: path.join(dirname, 'src'),
    build: path.join(dirname, 'build')
};

module.exports = {
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: {
        app: path.join(PATHS.src, 'main'),
        vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: PATHS.build,
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js',
        publicPath: '/'
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
            template: './index.html',
            publicPath: '/'
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
