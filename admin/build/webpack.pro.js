const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const webpackBaseConfig = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sourcePath = path.join(config.rootDirPath, 'src/views');
const outputPath = path.join(config.rootDirPath, 'dist');

console.log( path.join(sourcePath,'home/index/index.js') )

module.exports = merge(webpackBaseConfig,{
    entry:{
        home:path.join(sourcePath,'index/index.js'),
        manage:path.join(sourcePath,'manage/index.js'),
        vendor:['react','react-dom','react-router-dom','jquery/dist/jquery.min.js'],
    },
    output:{
        path: outputPath,
        //业务逻辑代码经常变动 文件名加上hash 防止webpack 缓存
        filename: 'js/[name]_[chunkhash:8].min.js',    
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)/,
                exclude: /node_modules/,
                use: [
                    {
                      loader: 'babel-loader',
                      options: {
                        presets: ['env']
                      }              
                    }
                  ]       
            }
        ]
    },
    devtool: 'false',
    plugins:[
        // new webpack.optimize.ModuleConcatenationPlugin(),
        
    ]
})