const { dbClient,redisClient } = require('../db')
const config = require('../config');
const koa = require('koa')
const sever = require('koa-static')
const view = require('koa-view')
const error = require('koa-onerror')
const bodyParser = require('koa-bodyparser');
const path = require('path')

// default port 
let port = process.env.PORT || config.pro.port
let app = new koa();

error(app);

//总路由
app.use(bodyParser());
const router = require('../../router/main');
app.use( sever(path.resolve(config.rootDirPath,'dist' )) )
app.use( view(path.resolve(config.rootDirPath,'dist'),{extensions:'html'}) )
app.use(router.routes(),router.allowedMethods());
/* 处理 404 */

const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
};
app.use(handler);
app.use( async (ctx,next)=>{
    ctx.throw(404);
})

app.listen(port,() => {
    console.log(`${process.env.NODE_ENV}`)
    console.log(`open ${port}`);
},'127.0.0.1');

dbClient.on('error',(err)=> console.error(`MongoDB 链接错误:${err}`) )
dbClient.once('open',console.log.bind(console,'MongoDB 链接成功！') )