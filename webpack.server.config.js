const fs = require('fs');
const path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'server.js'),

    output: {
        filename: 'server.bundle.js'
    },

    target: 'node',

    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
        'react-dom/server', 'react/addons'
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod;
        return ext;
    }, {}),

    node: {
        __filename: true,
        __dirname: true
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
    }
};