const koa = require('koa');
const path = require('path')
const router = require('koa-router');
const busboy = require('busboy')

const drafts = require('../models/manage/drafts')

const config = require('../admin/config')
const { uploadFile,removeUploadFile } = require('../src/js/upload')

const Drafts = new drafts();

const draftsRouter = new router();


draftsRouter.post('/drafts/save',async(ctx)=>{

    let { title,content,lables,files } = ctx.request.body; 

    ctx.body = await Drafts.save({ title,content,lables,files });

})

draftsRouter.post('/drafts/find',async(ctx)=>{

    let { query } = ctx.request.body; 

    ctx.body = await Drafts.find(query)
})

draftsRouter.post('/drafts/remove',async(ctx)=>{

    let { query } = ctx.request.body;
    
    ctx.body = await Drafts.remove(query)

})

draftsRouter.post('/drafts/update',async(ctx)=>{
    
    let { query,update,muilt } = ctx.request.body;

    await removeUploadFile(path.join(config.rootDirPath , 'uploadfiles' ),query._id)
          .catch( e => console.log(e) )

    ctx.body = await Drafts.update(query,update,muilt)
    

})

draftsRouter.post('/drafts/updateUpload/:id',async(ctx)=>{
    
    let result = { success: false }
    let serverFilePath = path.join(config.rootDirPath , 'uploadfiles' )

    // 上传文件事件
    result = await uploadFile( ctx, {
      _id:ctx.params.id,
      fileType: 'album', // common or album
      path: serverFilePath
    })

    ctx.body = result
    
})


module.exports = draftsRouter;