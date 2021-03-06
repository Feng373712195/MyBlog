const koa = require('koa');
const router = require('koa-router');
const send = require('koa-send')
const config = require('../admin/config')

let routers = [
    require('./home'),
    require('./lable'),
    require('./articles'),
    require('./drafts'),
    require('./admin'),
    require('./game')
]

let main = new router();

routers.forEach( async (router,index)=>{
    await main.use('',router.routes(),router.allowedMethods())
})



module.exports = main;


