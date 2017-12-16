const koa = require('koa');
const router = require('koa-router');

const articles = require('../models/manage/articles')


const Articles = new articles();

const admin = new router();



function resultsHandle(p){
     new Promise((res,rej)=>{
          p.then( data => res(data) )
          .catch(error => rej(error) )
    })
}

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

    let { title,content,lables,flies } = ctx.request.body; 

    ctx.body = await Articles.save({ title,content,lables,flies });

})

admin.post('/admin/publish/articles/find',async(ctx)=>{

    let { query } = ctx.request.body; 

    ctx.body = await  Articles.find(query)
})

admin.post('/admin/publish/articles/remove',async(ctx)=>{

    let { query } = ctx.request.body;
    
    ctx.body = await  Articles.remove(query)

})


module.exports = admin;