const { dbClient,redisClient } = require('../db')
const config = require('../config');
const koa = require('koa')
const favicon = require('koa-favicon');
const sever = require('koa-static')
const view = require('koa-view')
const error = require('koa-onerror')
const bodyParser = require('koa-bodyparser');
const compression = require("koa-compress");
const path = require('path')


// default port
let port = process.env.PORT || config.pro.port
let app = new koa();

error(app);

// favicon
app.use(favicon(path.join( __dirname, '../../favicon.ico')) );
// gzip
app.use(compression({
  threshold: 0
}));
// 设置缓存
app.use(async (ctx,next)=>{
  ctx.set("Cache-Control",`max-age=${ 60 * 60 * 24 }`);
  await next();
})
//总路由
app.use(bodyParser());
const router = require('../../router/main');
app.use( sever(path.resolve(config.rootDirPath )) )
app.use( view(path.resolve(config.rootDirPath ),{extensions:'html'}) )
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

// dbClient.on('error',(err)=> console.error(`MongoDB 链接错误:${err}`) )
// dbClient.once('open',console.log.bind(console,'MongoDB 链接成功！') )

dbClient
.then(()=>{
  console.log('MongoDB 链接成功！')
})
.catch(err=>{
  console.error(`MongoDB 链接错误:${err}`)
})
