const koa = require('koa');
const path = require('path')
const router = require('koa-router');

const config = require('../admin/config')

const admin = new router();

admin.post('/admin/login',(ctx)=>{
    const adminName = '';
    const adminPassword = 0;
    ctx.body = { code: 0 }
})

admin.get('/manage',async(ctx)=>{
    await ctx.render('dist/manage');
})

module.exports = admin;