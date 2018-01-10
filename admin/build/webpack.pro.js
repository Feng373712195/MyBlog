const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const webpackBaseConfig = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const sourcePath = path.join(config.rootDirPath, 'src/js');
const outputPath = path.join(config.rootDirPath, 'dist/js');

module.exports = merge(webpackBaseConfig,{
    entry:{
        home:[
            path.resolve(config.rootDirPath,'./src/js/home.js')
        ],
        manage:[
            path.resolve(config.rootDirPath,'./src/js/manage.js')
        ]
    },
    output:{
        path: outputPath,
        publicPath: '/dist/js/',
        filename: '[name].js',    
    },
    module:{
        rules:[
            
        ]
    },
    plugins:[
        // new CleanWebpackPlugin(
        //     ['dist/js/*.js'],　 //匹配删除的文件
        //     {
        //         root:config.rootDirPath,       　　　　　　//根目录
        //         verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        //         dry:      false        　　　　　　　　　　//启用删除文件
        //     }
        // )
    ]
})