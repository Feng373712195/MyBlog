const mongoose = require('mongoose');
// const config = require('../config');

mongoose.Promise = global.Promise;

let dbClient = mongoose.connect('mongodb://106.52.59.218:27017/blog',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports =  { dbClient };
