const koa = require('koa');
const sever = require('koa-static');
const view = require('koa-view');
const path = require('path');

const webpack = require('webpack');
let webpackConfig = require(`./config/webpack.${process.env.NODE_ENV === 'dev' ?'dev':'pro'}.js`);

// default port 
let port = process.env.PORT || config.dev.port

//总路由
const router = require('./router/main');

let app = new koa();
app.use( sever(path.resolve(__dirname,'src')) )
app.use( view(path.resolve(__dirname,'src/html'),{extensions:'html'}) )

app.use(router.routes(),router.allowedMethods());

app.listen('8000',function(){
    console.log('open 8000');
})