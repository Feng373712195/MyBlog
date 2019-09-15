const mongoose = require('mongoose')
const uilts = require('../../../uilts')
const { dbClient,redisClient } = require('../../../admin/db')

const Lables = require('../lables');

mongoose.Promise = global.Promise;

var articlesSchema = new mongoose.Schema(
    {   
        //标题
        title:String,
        //作者
        author:String,
        //文章内容
        content:String,
        //文章标签
        lables:[String],
        //附件
        files:[],
        //点击量
        clicks:Number,
        //创建时间
        createtime:String,
        //最后修改时间
        lasttime:String
    }
);

let draftsModel = dbClient.model('drafts',articlesSchema);


class Drafts{
    
    constructor(){
        this.draftsModel = {} 
    }
    
    save({title,author = "WUZEFENG",content,lables = [],files = [],clicks = 0,createtime = uilts.getNowFormatDate(),lasttime = uilts.getNowFormatDate() }){

        let that = this;
        this.articlesData = {title,author,content,lables,files,clicks,createtime,lasttime}     

        return  new Promise((res,rej)=>{
                 draftsModel.create(this.articlesData,(err,data)=>{  
                        if(err) return rej({code:-1,error:err})
                        else{
                            // 草稿不用存储标签 等正式发布才把标签存储
                            return res({code:0,data:data})
                        }
                     });    
                 })
    }

    find(query){
        return draftsModel.find(query).exec()
               .then(async data => { 
                    const total = await draftsModel.find().count().exec()
                    return { code:0,data:{data,total} }
               })
               .catch( err => { return {code:-1,eroor:err} } )
    }

    remove(query){
       
       return  draftsModel.remove(query).exec()
               .then(  data => { return {code:0,data:data} } )
               .catch( err => { return {code:-1,eroor:err} } ) 
    }

    update(query,updatedata,multi){
        
        return  draftsModel.update(query,updatedata,{ multi:multi }).exec()
                .then(  data => { return {code:0,data:data} } )
                .catch( err => { return {code:-1,eroor:err} } ) 
    }

}

module.exports = Drafts;







