const mongoose = require('mongoose')
const uilts = require('../../../uilts')
const { dbClient } = require('../../../admin/db')

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

let articlesModel = dbClient.model('articles',articlesSchema);


class Articles{
    
    constructor(){
        this.articlesData = {} 
    }
    
    save({title,author = "WUZEFENG",content,lables = [],files = [],clicks = 0,createtime = uilts.getNowFormatDate(),lasttime = uilts.getNowFormatDate() }){

        let that = this;
        this.articlesData = {title,author,content,lables,files,clicks,createtime,lasttime}     
   
        return  new Promise((res,rej)=>{
                    articlesModel.create(this.articlesData,
                    async (err,data)=>{  
                        if(err) return rej({code:-1,error:err})
                        else{
                            if(lables.length > 0){
                                await Lables.save(lables)
                                return res({code:0,data});
                            }else{
                                return res({code:0,data})
                            }
                        }
                    });    
                 })
        
    }

    find(query,skip = 1,limlt = 10,filter = {}){
        return articlesModel.find(query,filter)
               .skip( (skip - 1) * limlt )
               .limit(limlt)
               .sort({createtime:-1})
               .exec()
               .then(async data => { 
                    const total = await articlesModel.find().count().exec()
                    return { code:0,data:{ data,total } }
                })
               .catch( err => { 
                   return {code:-1,eroor:err} } )
    }

    remove(query){
       return  articlesModel.remove(query).exec()
               .then(  data => { return {code:0,data:data} } )
               .catch( err => { return {code:-1,eroor:err} } ) 
    }

    update(query,updatedata,multi){
        return  articlesModel.update(query,updatedata,{ multi:multi }).exec()
                .then(  data => { return {code:0,data:data} } )
                .catch( err => { return {code:-1,eroor:err} } ) 
    }

}

module.exports = Articles;







