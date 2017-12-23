let mongoose = require('mongoose');
var redisStore = require('koa-redis');
let redis = require('redis');

let dbClient = mongoose.createConnection('localhost','blog')
let redisClient = redis.createClient('6379','localhost')

module.exports =  { dbClient,redisClient };