
const path = require('path');

const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const webpackBaseConfig = require('./webpack.base.js');
const AddAssetHtmlPlugin = require( 'add-asset-html-webpack-plugin' );
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sourcePath = path.join(config.rootDirPath, 'src');
const outputPath = path.join(config.rootDirPath, 'dist');


const reactHotLoaderConfig = {
    "plugins": [
        "react-hot-loader/babel",
    ],
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
            path.resolve(config.rootDirPath,'./src/views/index/index.js')
        ],
        manage:[
            'eventsource-polyfill',
            'react-hot-loader/patch',
            `webpack-hot-middleware/client?http://localhost:${config.dev.port}/`,
            path.resolve(config.rootDirPath,'./src/views/manage/index.js')
        ],
    },
    output:{
        path: outputPath,
        publicPath: '/dist/',
        filename: 'js/[id]_[hash:8].js',    
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)/,
                exclude: /node_modules/,
                use: [
                    {
                      loader: 'babel-loader?cacheDirectory',
                      query:{  ...reactHotLoaderConfig }
                    },
                    'lazyload-loader'
                ]       
            }
        ]
    },
    resolve:{
        // 解决Antd的一个issus css-animation/es/Event es文件夹更名为dist-src依赖模块没有更新
        alias: { 
            "models":path.join(__dirname,'../..','./models'),
            "store":path.join(__dirname,'../..','./src/store')
        } 
    },
    devServer:{
		contentBase:`http://127.0.0.1:${config.dev.port}/dist/`,
		hot:true
    },
    devtool:'inline-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin( {
            context: __dirname,
            manifest: require(  path.resolve( config.rootDirPath,'./build/vendor-manifest.json' ) )
        } ),
        new AddAssetHtmlPlugin( {
            filepath: require.resolve( path.resolve( config.rootDirPath,'./build/vendor.dll.js') ),
            includeSourcemap: false
        }),
        new HtmlWebpackPlugin({
            title:'WUZEFENG 博客',
            filename:'home.html',
            template:path.resolve( sourcePath, 'index.html' ),
            chunks:['home']
        }),
        new HtmlWebpackPlugin({
            title:'管理后台',
            filename:'manage.html',
            template:path.resolve( sourcePath, 'index.html' ),
            chunks:['manage']
        }),
        new CleanWebpackPlugin(
            ['dist'],
            {
                root:config.rootDirPath,       
                verbose:true,    
                dry:false 
            }
        )
    ]
})