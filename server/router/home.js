const koa = require('koa');
const router = require('koa-router');

let home = new router();

// home.get('/',async(ctx)=>{
//     await ctx.render('dist/home');
// })
// home.get('/index',async(ctx)=>{
//     await ctx.render('dist/home');
// })
// home.get('/article',async(ctx)=>{
//     await ctx.render('dist/home');
// })
// home.get('/article/:id',async(ctx)=>{
//     await ctx.render('dist/home');
// })
// home.get('/labels',async(ctx)=>{
//     await ctx.render('dist/home');
// })
// home.get('/about',async(ctx)=>{
//     await ctx.render('dist/home');
// })

module.exports = home;
