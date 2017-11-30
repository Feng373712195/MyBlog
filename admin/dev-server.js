const koa = require('koa')
const sever = require('koa-static')
const view = require('koa-view')
const error = require('koa-onerror')
const { devMiddleware, hotMiddleware } =  require('koa-webpack-middleware')
const path = require('path')

const webpack = require('webpack');
const config = require('./config');
let webpackConfig = require(`./build/webpack.dev.js`);
let compiler = webpack(webpackConfig);

// default port 
let port = process.env.PORT || config.dev.port

let app = new koa();

error(app)

//总路由
const router = require('../router/main');

app.use( sever(path.resolve(config.rootDirPath,'src')) )
app.use( view(path.resolve(config.rootDirPath,'src/html'),{extensions:'html'}) )
app.use(router.routes(),router.allowedMethods());

app.use(devMiddleware(compiler,
    {
        publicPath:webpackConfig.output.publicPath,
        stats: {colors: true},
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        }
    }
))

app.use(hotMiddleware(compiler,{
    reload:true 
}))

app.listen(port,function(){
    console.log(`${process.env.NODE_ENV}`)
    console.log(`open ${port}`);
})