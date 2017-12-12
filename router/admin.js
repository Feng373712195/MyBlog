const koa = require('koa');
const router = require('koa-router');

const articles = require('../models/manage/articles')

const Articles = new articles();

const admin = new router();

admin.post('/admin/login',(ctx)=>{
    const adminName = '';
    const adminPassword = 0;

    ctx.body = { code: 0 }

    console.log('admin/login')
})

admin.get('/admin/manage',async(ctx)=>{
    await ctx.render('manage');
})

admin.get('/admin/manage/publish/edit',async(ctx)=>{
    await ctx.render('manage');
})

admin.post('/admin/publish/articles/save',async(ctx)=>{

    let articleData = {
        title:'测试文章',
        content:'测试内容123',
        lables:[],
        flise:[]
    }

    let results;
    
    await Articles.save(articleData,(p) =>{
                p.then((data) => { results = {code:0 , data:data } })
                .catch((err) =>  { results = {code:-1 , error:err } })
           });

    ctx.body = results
})

admin.post('/admin/publish/articles/find',async(ctx)=>{
   
    let results;

   await  Articles.find((p) =>{
             p.then((data) => { results = {code:0 , data:data } })
             .catch((err) => {  results = {code:-1 , error:err } })
          });
    
    ctx.body = results;
})

admin.post('/admin/publish/articles/remove',async(ctx)=>{

    let results;

    await  Articles.remove((p) =>{
              p.then((data) => { results = {code:0 , data:data } })
              .catch((err) =>  { results = {code:-1 , error:err } })
           });

    ctx.body = results;

})


module.exports = admin;