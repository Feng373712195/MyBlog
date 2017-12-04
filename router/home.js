const koa = require('koa');
const router = require('koa-router');

let home = new router();



home.get('/',async(ctx)=>{
     await ctx.render('home');
})

home.get('/index',async(ctx)=>{
    await ctx.render('home');
})
home.get('/artice',async(ctx)=>{
    await ctx.render('home');
})
home.get('/writeArticle',async(ctx)=>{
    await ctx.render('home');
})
home.get('/label',async(ctx)=>{
    await ctx.render('home');
})
home.get('/about',async(ctx)=>{
    await ctx.render('home');
}) 


module.exports = home;