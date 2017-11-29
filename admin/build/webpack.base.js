const path = require('path');
const webpack = require('webpack');
const config = require('../config');

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const sourcePath = path.join(config.rootDirPath, 'src/js');

module.exports = {
    module:{
        rules:[
            {
                test:/\.(js|jsx)/,
                exclude: /node_modules/,
                use: [
                    {
                      loader: 'babel-loader',
                      query: {
                        presets: ['es2015', 'react']
                        // cacheDirectory: true
                      }
                    }
                  ]       
            },
            {
                test: /\.css$/,                
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader']
                })
          
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
          
            }
        ]
    },
    devtool:'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
          sourcePath,
          'node_modules'
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:'css/[name].css',
            disable: process.env.NODE_ENV === "dev"
        })
    ]
}