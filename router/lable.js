const koa = require('koa');
const path = require('path')
const router = require('koa-router');
const { redisClient } = require('../admin/db')


const lable = new router();

lable.post('/lable/getAllLable',async(ctx)=>{

    ctx.body = await new Promise((reslove,reject)=>{
                        redisClient.smembers('lables',(err,data)=>{
                            if(err) return reject({code:1,error:err})
                            return reslove({code:0,lables:data})
                        })
                     })
})

lable.post('/lable/getRelevant/:lable',async(ctx)=>{

    let lable = ctx.params.lable;

    console.log(lable)
    
    ctx.body = await new Promise((reslove,reject)=>{
                        redisClient.smembers(lable,(err,data)=>{
                            if(err) return reject({code:1,error:err})
                            return reslove({code:0,articleIDs:data})
                        })
                    })
})

module.exports = lable;