const mongoose = require('mongoose')
const uilts = require('../../../uilts')
const { dbClient } = require('../../../db')

mongoose.Promise = global.Promise;

const lableSchema = new mongoose.Schema({
    //标签内容
    text:String,
    //相关文章数量
    relationNum:Number
});

let lablesModel = mongoose.model('lable',lableSchema);

class lables{
    constructor(){
        this.lables = {}
    }

    save(lables,relation = 1){
        if(lables.length == 0) return Promise.resolve({ code:0,data:lables });
        const saveLable = (text) => new Promise((resolve,reject)=>{
            lablesModel.update({ text },{ $inc: { relationNum: relation } },{ upsert:true })
            .then(async res=>{
                // 如果没有标签关联文章则删除标签
                if( relation == -1 ){
                    const lable = await lablesModel.find({ text })
                    if(lable.length && lable[0].relationNum == 0){
                        await lablesModel.remove({ text })
                    }
                    return resolve(res);
                }
                return resolve(res);
            })
            .catch(reject)
        })
        return Promise.all(lables.map(lable=>saveLable(lable)))
        .then(data=>{ return { code:0,data } })
        .catch(error=>{ return { code:-1,error } })
    }

    rmeove(lable){
        lablesModel.remove({ text:lable }).exec()
        .then(  data => { return {code:0,data:data} } )
        .catch( err => { return {code:-1,eroor:err} } )
    }

    find(lable){
        return lablesModel.find({ text:lable }).exec();
    }

    findAll(){
        return lablesModel.find().exec();
    }

}

module.exports =  new lables();

