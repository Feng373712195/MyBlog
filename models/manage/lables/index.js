const mongoose = require('mongoose');
const db = require('../../../admin/db')

mongoose.Promise = global.Promise;

//数据结构
// lables
// [
//     {
//         lablename:'one',
//         relevant:[
            
//         ] 
//     },
//     {
//         lablename:'two',
//         relevant:[
            
//         ] 
//     }
//     ...
// ]
//lablesGroup
//[one,two,...]

var lableSchema = new mongoose.Schema(
    {   
        lables:[Object],
        lablesGroup:[String]
    }
);