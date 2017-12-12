let mongoose = require('mongoose');
let db = mongoose.createConnection('localhost','blog')

module.exports =  db;