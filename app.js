const koa = require('koa');
// const router = require('koa-router');
const sever = require('koa-static');
const view = require('koa-view');
const path = require('path');

//总路由
const router = require('./router/main');

let app = new koa();

//开发环境
 console.log(process.env.NODE_ENV)

app.use( sever(path.resolve(__dirname,'src')) )
app.use( view(path.resolve(__dirname,'src/html'),{extensions:'html'}) )

app.use(router.routes(),router.allowedMethods());

app.listen('8000',function(){
    console.log('open 8000');
})