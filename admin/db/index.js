const mongoose = require('mongoose');
const redisStore = require('koa-redis');
const redis = require('redis');
const config = require('../config');

mongoose.Promise = global.Promise;
let dbClient = mongoose.createConnection('106.52.59.218','blog')
// let redisClient = redis.createClient(config.redisPort,'localhost')

// ,redisClient
module.exports =  { dbClient };