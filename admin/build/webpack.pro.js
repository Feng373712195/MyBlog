const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const webpackBaseConfig = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const sourcePath = path.join(config.rootDirPath, 'src/views');
const outputPath = path.join(config.rootDirPath, 'dist');

console.log( path.join(sourcePath,'home/index/index.js') )

module.exports = merge(webpackBaseConfig,{
    devtool: 'false',
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
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap:isProd ? true : false
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins:[
        // new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin(
            {
                name: 'vendor',
                filename: 'js/vendor.min.js',
            }
        ),
        new HtmlWebpackPlugin({
            title:'WUZEFENG 博客',
            filename:'home.html',
            template:path.join(sourcePath,'../index.html'),
            //让style和JavaScript注入 交给模板
            inject:true,
            hash:true,
            chunks:['home','vendor']
        }),
        new HtmlWebpackPlugin({
            title:'管理页面',
            filename:'manage.html',
            template:path.join(sourcePath,'../index.html'),
            //让style和JavaScript注入 交给模板
            inject:true,
            hash:true,
            chunks:['manage','vendor']
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