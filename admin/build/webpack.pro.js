const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const webpackBaseConfig = require('./webpack.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sourcePath = path.join(config.rootDirPath, 'src/views');
const outputPath = path.join(config.rootDirPath, 'dist');

if(true) {
    const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
    webpackBaseConfig.plugins.push(
        new BundleAnalyzerPlugin()
    );
}

// 异步加载组件 ok
// http缓存 ok
// 文章图片地址修改 ok
// 关于页 头像加载默认图 ok
// 关于页 跳转设置 ok
// 文章页 lable参数处理 
// 响应式导航
// 响应式字体
// 隐藏文章列表滚动条
// 文章图片预览图
// 管理页权限进入
// 页面底部

module.exports = merge(webpackBaseConfig,{
    entry:{
        home:path.join(sourcePath,'index/index.js'),
        manage:path.join(sourcePath,'manage/index.js'),
        vendor:['react','react-dom','react-router-dom','jquery/dist/jquery.min.js'],
    },
    output:{
        path: outputPath,
        publicPath:'http://wuzefeng.cn/',
        //业务逻辑代码经常变动 文件名加上hash 防止webpack 缓存
        filename:'js/[name]_[chunkhash:8].min.js',    
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'lazyload-loader'
                ]       
            }
        ]
    },
    devtool: 'false',
    plugins:[
        // new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin(
            {
                name: 'vendor',
                filename: 'js/vendor.min.js',
            }
        ),
        new UglifyJsPlugin({
            parallel: true,
            exclude: /\/node_modules/,
            uglifyOptions: {
              ecma: 8,
              mangle: true,
              compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
              },
              output: {
                comments: false,
                beautify: false
              }
            }
        }),
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