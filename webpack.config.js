let path = require('path');

module.exports = {
   entry:{
        home:['/src/js/home.js']
   },
   output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'/dist/js'),
        publicPath:'/dist/js'
    },
   modules:{
      rules:[
          {
            test:/\.(js|jsx)/,
            exclude:/node_modules/,
            use:[
                {
                    loader:'babel-loader',
                    query:{
                        paesets:['2015','react'],
                        cacheDirectory: true
                    }
                 }
            ]
          }
      ]
   }
   
}
