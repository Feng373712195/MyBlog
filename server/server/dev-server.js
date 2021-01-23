
const koa = require('koa')
const convert = require('koa-convert')
const sever = require('koa-static')
const view = require('koa-view')
const error = require('koa-onerror')
const bodyParser = require('koa-bodyparser');
const path = require('path')

const { dbClient } = require('../db')
const config = require('../../config');

// // default port
let port = process.env.PORT || config.dev.server.port

let app = new koa();

error(app)

app.use(bodyParser());
// 总路由
const router = require('../router/main');
app.use( router.routes(),router.allowedMethods() );

app.use(async (ctx,next)=>{
    console.log(ctx.req.url , 'req.url')
    await next();
})

// /* 处理 404 */
const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // 重定向到首页
    //   ctx.redirect('/article');
    //   ctx.response.status = err.statusCode || err.status || 500;
    //   ctx.response.body = {
    //     message: err.message
    //   };
  }
};

app.use(handler);
app.use( async (ctx,next)=>{
    ctx.throw(404);
})

app.listen(port,() => {
    console.log(`${process.env.NODE_ENV}`)
    console.log(`open ${port}`);
})

dbClient
.then(()=>{
  console.log('MongoDB 链接成功！')
})
.catch(err=>{
  console.error(`MongoDB 链接错误:${err}`)
})

// dbClient.on('error',(err)=> console.error(`MongoDB 链接错误:${err}`) )
// dbClient.once('open',console.log.bind(console,'MongoDB 链接成功！') )

// redisClient.on('error',(err)=> console.error(`Redis 链接错误:${err}`) )
// redisClient.on('ready',console.log.bind(console,`Redis 链接成功 `) )
