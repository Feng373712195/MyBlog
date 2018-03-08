const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const webpackBaseConfig = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sourcePath = path.join(config.rootDirPath, 'src/js');
const outputPath = path.join(config.rootDirPath, 'dist/js');

module.exports = merge(webpackBaseConfig,{
    entry:{
        jquery:'jquery/dist/jquery.min.js',
        home:path.join(config.rootDirPath,'./src/js/home.js'),
        manage:path.join(config.rootDirPath,'./src/js/manage.js'),
        vendor:['react','react-dom','react-router-dom','whatwg-fetch']
    },
    output:{
        path: outputPath,
        publicPath: '/dist/js/',
        filename: '[name].min.js',    
    },
    module:{
        rules:[
            
        ]
    },
    devtool: 'false',
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.min.js' }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            title:'WUZEFENG 博客',
            filename:path.join(config.rootDirPath,'src/html/home.html'),
            template:path.join(config.rootDirPath,'src/html/template.html'),
            //让style和JavaScript注入 交给模板
            inject:false,
            chunks:['home','jquery','vendor']
        }),
        new HtmlWebpackPlugin({
            title:'管理页面',
            filename:path.join(config.rootDirPath,'src/html/manage.html'),
            template:path.join(config.rootDirPath,'src/html/template.html'),
            //让style和JavaScript注入 交给模板
            inject:false,
            chunks:['manage','jquery','vendor']
        }),
        new CleanWebpackPlugin(
            ['dist'],　 //匹配删除的文件
            {
                root:config.rootDirPath,       　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        )
    ]
})