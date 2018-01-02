const koa = require('koa');
const path = require('path')
const router = require('koa-router');
const busboy = require('busboy')

const articles = require('../models/manage/articles')

const config = require('../admin/config')
const { uploadFile } = require('../src/js/upload')

const Articles = new articles();

const articlesRouter = new router();


articlesRouter.post('/articles/save',async(ctx)=>{

    let { title,content,lables,files } = ctx.request.body; 

    ctx.body = await Articles.save({ title,content,lables,files });

})

articlesRouter.post('/articles/find',async(ctx)=>{

    let { query } = ctx.request.body; 

    ctx.body = await  Articles.find(query)
})

articlesRouter.post('/articles/remove',async(ctx)=>{

    let { query } = ctx.request.body;
    
    ctx.body = await  Articles.remove(query)

})

articlesRouter.post('/articles/update',async(ctx)=>{
    
    let { query,update,muilt } = ctx.request.body;

    ctx.body = await  Articles.update(query,update,muilt)

})

articlesRouter.post('/articles/read',async(ctx)=>{
    
    let { query } = ctx.request.body;

    ctx.body = await  Articles.update(query,{$inc:{clicks:1}},false)

})

articlesRouter.post('/articles/upload/:id',async(ctx)=>{
    
    let result = { success: false }
    let serverFilePath = path.join(config.rootDirPath , 'upload-files' )

    // 上传文件事件
    result = await uploadFile( ctx, {
      _id:ctx.params.id,
      fileType: 'album', // common or album
      path: serverFilePath
    })

    ctx.body = result
    
})


module.exports = articlesRouter;