const koa = require('koa');
const path = require('path')
const router = require('koa-router');

const config = require('../admin/config')

const admin = new router();

admin.post('/admin/login',(ctx)=>{
    const adminName = '';
    const adminPassword = 0;

    ctx.body = { code: 0 }

    console.log('admin/login')
})

admin.get('/admin/manage/publish/edit',async(ctx)=>{
    await ctx.render('manage');
})



module.exports = admin;