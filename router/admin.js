const koa = require('koa');
const path = require('path')
const router = require('koa-router');
const busboy = require('busboy')

const articles = require('../models/manage/articles')
const config = require('../admin/config')
const { uploadFile } = require('../src/js/upload')

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

admin.post('/admin/publish/articles/upload',async(ctx)=>{
    
    let result = { success: false }
    let serverFilePath = path.join(config.rootDirPath , 'upload-files' )

    // 上传文件事件
    result = await uploadFile( ctx, {
      fileType: 'album', // common or album
      path: serverFilePath
    })

    ctx.body = result
    
})


module.exports = admin;