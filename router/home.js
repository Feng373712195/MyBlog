const koa = require('koa');
const router = require('koa-router');

let home = new router();



home.get('/',async(ctx)=>{
     await ctx.render('home');
})

home.redirect('/index','/')
home.redirect('/artice','/')
home.redirect('/writeArticle','/')
home.redirect('/label','/')
home.redirect('/about','/')

module.exports = home;