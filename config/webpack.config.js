/*
 * Create by suliang on 2018.01.02
 * */
var webpack = require('webpack');
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: '../bundle.js'
    },
    devtool:"source-map",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
