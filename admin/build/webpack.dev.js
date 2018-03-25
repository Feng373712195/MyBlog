
const path = require('path');

const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const webpackBaseConfig = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')



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
            path.resolve(config.rootDirPath,'./src/js/home-dev.js')
        ],
        manage:[
            'eventsource-polyfill',
            'react-hot-loader/patch',
            `webpack-hot-middleware/client?http://localhost:${config.dev.port}/`,
            path.resolve(config.rootDirPath,'./src/js/manage-dev.js')
        ],
        jquery:[
            'eventsource-polyfill',
            'react-hot-loader/patch',
            `webpack-hot-middleware/client?http://localhost:${config.dev.port}/`,
            'jquery/dist/jquery.min.js'
        ],
        semantic:[
            'eventsource-polyfill',
            'react-hot-loader/patch',
            `webpack-hot-middleware/client?http://localhost:${config.dev.port}/`,
            path.resolve(config.rootDirPath,'semantic/dist/semantic.min.js')
        ] 
    },
    output:{
        path: outputPath,
        publicPath: '/dist/js/',
        filename: '[name].js',    
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)/,
                exclude: /node_modules/,
                use: [
                    {
                      loader: 'babel-loader',
                      query:{
                        "presets": ["es2015","react"],
                        "plugins": ["react-hot-loader/babel"],
                        "env": {
                            "production":{
                              "preset":["react-optimize"]
                            }
                          }
                      }
                    }
                  ]       
            }
        ]
    },
    devServer:{
		contentBase:`http://127.0.0.1:${config.dev.port}/dist/`,
		hot:true
    },
    devtool:'inline-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(
            ['dist/js/*.js'],

            {
                root:config.rootDirPath,       
                verbose:  true,    
                dry:      false 

            }
        )
    ]

})