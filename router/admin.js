const koa = require('koa');
const router = require('koa-router');

const admin = new router();

admin.post('/admin/login',(ctx)=>{
    const adminName = '';
    const adminPassword = 0;

    // ctx.res.json = { code:0 }
    ctx.body = { code: 0 }

    console.log('admin/login')
})

admin.get('/admin/manage',async(ctx)=>{
    await ctx.render('manage');
})

module.exports = admin;