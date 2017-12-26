const koa = require('koa');
const path = require('path')
const router = require('koa-router');
const { redisClient } = require('../admin/db')

const articles = require('../models/manage/articles')

const Articles = new articles();


const lable = new router();

lable.post('/lable/getAllLable',async(ctx)=>{

    ctx.body = await new Promise((reslove,reject)=>{
                        redisClient.smembers('lables',(err,data)=>{
                            if(err) return reject({code:1,error:err})
                            return reslove({code:0,lables:data})
                        })
                     })
})

lable.post('/lable/removeLable',async(ctx)=>{
    
    let { lable } = ctx.request.body;

    console.log(lable)
    
    await Articles.update({lables:lable.lable},{"$pull":{lables:lable.lable}},true)
    ctx.body =  await new Promise((reslove,reject)=>{
                    redisClient.srem('lables',lable.lable,(err,data)=>{
                        if(err) return reject({code:1,error:err})
                        return reslove({code:0,data:data})
                    })
                })
})

module.exports = lable;