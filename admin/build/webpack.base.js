const path = require('path');
const webpack = require('webpack');
const config = require('../config');

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
    }
}