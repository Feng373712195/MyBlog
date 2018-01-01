const koa = require('koa');
const path = require('path')
const router = require('koa-router');
const busboy = require('busboy')

const drafts = require('../models/manage/drafts')

const config = require('../admin/config')
const { uploadFile } = require('../src/js/upload')

const Drafts = new drafts();

const draftsRouter = new router();


draftsRouter.post('/drafts/save',async(ctx)=>{

    let { title,content,lables,files } = ctx.request.body; 

    ctx.body = await Articles.save({ title,content,lables,files });

})

draftsRouter.post('/drafts/find',async(ctx)=>{

    let { query } = ctx.request.body; 

    ctx.body = await  Articles.find(query)
})

draftsRouter.post('/drafts/remove',async(ctx)=>{

    let { query } = ctx.request.body;
    
    ctx.body = await  Articles.remove(query)

})

draftsRouter.post('/drafts/update',async(ctx)=>{
    
    let { query,update,muilt } = ctx.request.body;

    ctx.body = await  Articles.update(query,update,muilt)

})

draftsRouter.post('/drafts/upload/:id',async(ctx)=>{
    
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


module.exports = Drafts;