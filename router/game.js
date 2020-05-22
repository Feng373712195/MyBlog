const router = require('koa-router');
const games = new router();
const path = require('path');

games.get('/games/1/v1',async (ctx)=>{
    await ctx.render( 'games/1/index' );
})

games.get('/games/2/v1',async (ctx)=>{
    await ctx.render( 'games/2/index' );
})

games.get('/games/3/v1',async (ctx)=>{
    await ctx.render( 'games/3/index' );
})

module.exports = games;