const router = require('koa-router');
const games = new router();
const path = require('path');

games.get('/game/200302133145',async (ctx)=>{
    await ctx.render( 'games/200302133145/index' );
})


module.exports = games;