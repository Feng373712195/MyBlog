const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const assetsPath = (src) => path.join(config.rootDirPath, 'src' , src );


module.exports = {
    module:{
        rules:[
            {
                test: /\.css$/,                
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader','postcss-loader']
                })
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader' ,'sass-loader']
                })
            },
            {
                test:/\.less$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader' ,{
                        loader:'less-loader',
                        options:{
                            javascriptEnabled:true
                        }
                    }]
                })
            },
            {
                // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                // 如下配置，将小于8192byte的图片转成base64码
                test: /\.(jpe?g|png|gif)$/i,
                loaders:'url-loader?limit=10000&name=../../dist/img/[hash].[ext]'
            },
            {
                // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/i,
                loader: 'url-loader?limit=10000&name=../../dist/font/[hash].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
          assetsPath('js'),
          'node_modules'
        ],
        alias:{
            '@uilts':path.join(config.rootDirPath,'uilts'),
            '@semantic':path.join(config.rootDirPath,'semantic'),
            '@views':assetsPath('views'),
            '@components':assetsPath('components'),
            '@containers':assetsPath('containers'),
            '@assets':assetsPath('assets'),
            '@api':assetsPath('api'),
            '@store':assetsPath('store')
        }
    },
    plugins: [
        new ExtractTextPlugin({ 
            filename:'./../css/[name].css',
            disable: process.env.NODE_ENV === "dev"
        }),
        new webpack.ProvidePlugin({
            //  $函数会自动添加到当前模块的上下文，无需显示声明
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery":"jquery"
        })
    ]
}