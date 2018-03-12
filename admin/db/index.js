const mongoose = require('mongoose');
const redisStore = require('koa-redis');
const redis = require('redis');
const config = require('../config');

mongoose.Promise = global.Promise;
let dbClient = mongoose.createConnection('localhost','blog')
let redisClient = redis.createClient(config.redisPort,'localhost')

module.exports =  { dbClient,redisClient };