const koa = require('koa');
const router = require('koa-router');

let home = new router();


home.get('/',async(ctx)=>{
     await ctx.render('home',{body:"welcommon my bolg"});
})

module.exports = home;