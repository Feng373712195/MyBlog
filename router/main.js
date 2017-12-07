const koa = require('koa');
const router = require('koa-router');

let routers = [
    require('./home'),
    require('./admin')
]

let main = new router();

routers.forEach( async (router,index)=>{
    await main.use('',router.routes(),router.allowedMethods())
})



module.exports = main;


