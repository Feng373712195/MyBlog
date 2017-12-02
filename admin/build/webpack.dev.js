const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const webpackBaseConfig = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const sourcePath = path.join(config.rootDirPath, 'src/js');
const outputPath = path.join(config.rootDirPath, 'dist/js');

const ReactHotConfig = {
    "plugins": ["react-hot-loader/babel"],
    "env": {
        "production":{
          "preset":["react-optimize"]
        }
      }
};



module.exports = merge(webpackBaseConfig,{
    entry:{
        home:[
            'eventsource-polyfill',
            'react-hot-loader/patch',
            `webpack-hot-middleware/client?http://localhost:${config.dev.port}/`,
            path.resolve(config.rootDirPath,'./src/js/home.js')
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
    devServer:{
		contentBase:`http://127.0.0.1:${config.dev.port}/dist/`,
		hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(
            ['dist/js/*.js'],　 //匹配删除的文件
            {
                root:config.rootDirPath,       　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        )

    ]
})