const { dbClient,redisClient } = require('./db')
const koa = require('koa')
const sever = require('koa-static')
const view = require('koa-view')
const error = require('koa-onerror')
const bodyParser = require('koa-bodyparser');
const path = require('path')

const config = require('./config');

// default port 
let port = process.env.PORT || config.dev.port

let app = new koa();

error(app)

//总路由
app.use(bodyParser());
const router = require('../router/main');
app.use( sever(path.resolve(config.rootDirPath,'dist')) )
app.use( view(path.resolve(config.rootDirPath,'src/html'),{extensions:'html'}) )
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
})

dbClient.on('error',(err)=> console.error(`MongoDB 链接错误:${err}`) )
dbClient.once('open',console.log.bind(console,'MongoDB 链接成功！') )

redisClient.on('error',(err)=> console.error(`Redis 链接错误:${err}`) )
redisClient.on('ready',console.log.bind(console,`Redis 链接成功 `) )