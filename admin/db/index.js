let mongoose = require('mongoose');
var redisStore = require('koa-redis');
let redis = require('redis');

mongoose.Promise = global.Promise;
let dbClient = mongoose.createConnection('localhost:27017','blog')
let redisClient = redis.createClient('6379','localhost')

module.exports =  { dbClient,redisClient };