const mongoose = require('mongoose');
const db = require('../../../admin/db')

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
        flise:[String],
        //创建时间
        createtime:String,
        //最后修改时间
        lasttime:String
    }
);

let articlesModel = db.model('articles',articlesSchema);


class Articles{
    
    constructor(){
        this.articlesData = {} 
    }
    
    save({title,author = "WUZEFENG",content,lables,flise,createtime = Date.now(),lasttime = Date.now() },cb){

        this.articlesData = {title,author,content,lables,flise,createtime,lasttime}
        
        articlesModel.create(this.articlesData,(err,data)=>{
             var p =  new Promise((res,rej)=>{
                        if(err) rej(err)
                          res(data)
                      })
             cb(p)
        });
    }

    find(cb){
       cb( articlesModel.find({}).exec() )
    }

    remove(cb){
        
       cb( articlesModel.remove({}).exec() )
    }

}

module.exports = Articles;







