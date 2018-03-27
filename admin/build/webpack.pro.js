const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const webpackBaseConfig = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sourcePath = path.join(config.rootDirPath, 'src/js');
const outputPath = path.join(config.rootDirPath, 'dist/js');
//按需引入semantic Commpont 
const semanticComponts = [
    path.join(config.rootDirPath, '/semantic/dist/components/visibility.min.js'),
    path.join(config.rootDirPath, '/semantic/dist/components/state.min.js'),
    path.join(config.rootDirPath, '/semantic/dist/components/transition.min.js'),
    path.join(config.rootDirPath, '/semantic/dist/components/api.min.js'),
    path.join(config.rootDirPath, '/semantic/dist/components/dimmer.min.js'),
    path.join(config.rootDirPath, '/semantic/dist/components/form.min.js'),
    path.join(config.rootDirPath, '/semantic/dist/components/modal.min.js'),
    path.join(config.rootDirPath, '/semantic/dist/components/sticky.min.js' )
]

module.exports = merge(webpackBaseConfig,{
    entry:{
        home:path.join(config.rootDirPath,'./src/js/home.js'),
        manage:path.join(config.rootDirPath,'./src/js/manage.js'),
        vendor:semanticComponts.concat(['react','react-dom','react-router-dom','jquery/dist/jquery.min.js']),
    },
    output:{
        path: outputPath,
        publicPath: '/dist/js/',
        //业务逻辑代码经常变动 文件名加上hash 防止webpack 缓存
        filename: '[name]_[chunkhash:8].min.js',    
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
        new webpack.optimize.CommonsChunkPlugin(
            {
                name: 'vendor',
                filename: 'vendor.min.js',
            }
        ),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
              /*remove console*/
              drop_debugger: true,  
              drop_console: true  
            }
        }),
        new HtmlWebpackPlugin({
            title:'WUZEFENG 博客',
            filename:path.join(config.rootDirPath,'src/html/home.html'),
            template:path.join(config.rootDirPath,'src/html/template.html'),
            //让style和JavaScript注入 交给模板
            inject:false,
            hash:true,
            chunks:['home','jquery','vendor']
        }),
        new HtmlWebpackPlugin({
            title:'管理页面',
            filename:path.join(config.rootDirPath,'src/html/manage.html'),
            template:path.join(config.rootDirPath,'src/html/template.html'),
            //让style和JavaScript注入 交给模板
            inject:false,
            hash:true,
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