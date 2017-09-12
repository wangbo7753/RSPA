// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const ENTRY_FILE = path.resolve(SRC_PATH, 'index');
const BUILD_PATH = path.resolve(ROOT_PATH, 'public/dist');

module.exports = {
    entry: {
        bundle: ENTRY_FILE
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /^node_modules$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.DefinePlugin({
            __DEV__: process.env.NODE_ENV
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ] : []
};