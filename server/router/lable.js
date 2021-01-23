const koa = require('koa');
const path = require('path')
const router = require('koa-router');

const articles = require('../models/manage/articles')
const Lables = require('../models/manage/lables');
const Articles = new articles();


const lable = new router();

lable.post('/lable/getAllLable',async(ctx)=>{
    ctx.body  =  await Lables.findAll()
    .then( lables =>({code:0,data:lables.map(lable=>lable.text) }) )
    .catch( error =>({code:-1,error}) )
})

lable.post('/lable/removeLable',async(ctx)=>{

    let { lable } = ctx.request.body;
    try{
        await Lables.rmeove(lable);
        ctx.body  = await Articles.update({lables:lable},{"$pull":{lables:lable}},true)
    }catch(error){
        console.log( error )
        ctx.body = { code:-1,error }
    }

})

module.exports = lable;