const koa = require('koa')
const fs = require('fs')
const path = require('path')
const router = require('koa-router');
const send = require('koa-send')
const busboy = require('busboy')

const articles = require('../models/manage/articles')
const config = require('../admin/config')
const { uploadFile,removeUploadFile } = require('../models/upload')

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
    
    await removeUploadFile(path.join(config.rootDirPath , 'uploadfiles' ),query._id)
          .catch( e => console.log(e) )
    
    ctx.body = await  Articles.remove(query)

})

articlesRouter.post('/articles/update',async(ctx)=>{
    
    let { query,update,muilt } = ctx.request.body;

    ctx.body = await  Articles.update(query,update,muilt)

})

articlesRouter.post('/articles/read',async(ctx)=>{
    
    let { _id } = ctx.request.body;
    ctx.body = await  Articles.update({_id},{$inc:{clicks:1}},false)

})

articlesRouter.post('/articles/updateUpload/:id',async(ctx)=>{
    
    let result = { success: false }
    let serverFilePath = path.join(config.rootDirPath , 'uploadfiles' )

    await removeUploadFile(path.join(config.rootDirPath , 'uploadfiles' ),ctx.params.id)
          .catch( e => console.log(e) )
    
    // 上传文件事件
    result = await uploadFile( ctx, {
      _id:ctx.params.id,
      fileType: 'album', // common or album
      path: serverFilePath
    })

    ctx.body = result
    
})

articlesRouter.post('/articles/upload/:id',async(ctx)=>{
    
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

articlesRouter.post('/articles/cacheuploadImg/:id',async(ctx)=>{
    
    let result = { success: false }
    let serverFilePath = path.join(config.rootDirPath , 'cacheuploadImg' )
    
    // 上传文件事件
    result = await uploadFile( ctx, {
      _id:ctx.params.id,
      fileType: 'album', // common or album
      path: serverFilePath
    })

    ctx.body = result
})


articlesRouter.get('/articles/down/:id/:fileName',async(ctx)=>{
    
    console.log(ctx.params.id)
    console.log(ctx.params.fileName)

    let id = ctx.params.id
    let fileName = ctx.params.fileName

    ctx.attachment(fileName);
    await send(ctx, fileName, { root: path.join(config.rootDirPath , `uploadfiles/${id}` ) });
    
})

articlesRouter.post('/articles/uploadImg',async(ctx)=>{

    console.log( ctx.request.body )
    let {timeStamp,_id} = ctx.request.body;
    let cacheImgFilePath = path.join(config.rootDirPath , `cacheuploadImg` );
    let uploadImgFilePath = path.join(config.rootDirPath ,`uploadImg` );

    if(!fs.existsSync(uploadImgFilePath)){
        fs.mkdirSync(uploadImgFilePath);
    }

    if(fs.existsSync( `${cacheImgFilePath}/${timeStamp}` )){
 
      ctx.body =  new Promise((res,rej)=>{
                    fs.rename(`${cacheImgFilePath}/${timeStamp}`,`${uploadImgFilePath}/${_id}`, function (error) {
                        if (error){
                           console.log(error) 
                           return rej({code:-1,error});
                        }
                        return res({code:0,data:'成功上传图片'})
                    });
                 })
    }else{
        ctx.body = { code:0 , data:'无上传图片文件夹'}
    }
})

articlesRouter.get('/articles/cacheuploadImg/:timeStamp/:fileName',async(ctx)=>{

    console.log(ctx.params)
    let timeStamp = ctx.params.timeStamp
    let fileName = ctx.params.fileName

    ctx.attachment(fileName);
    await send(ctx, fileName, { root: path.join(config.rootDirPath ,`cacheuploadImg/${timeStamp}` ) });  
})

articlesRouter.get('/articles/uploadImg/:id/:fileName',async(ctx)=>{

    let id = ctx.params.id
    let fileName = ctx.params.fileName

    ctx.attachment(fileName);
    await send(ctx, fileName, { root: path.join(config.rootDirPath ,`uploadImg/${id}` ) });  
})



module.exports = articlesRouter;