let webpack = require('webpack');
let path = require('path');

module.exports = {
    mode:'development', 
    entry:'F:/Projects/js/vue/vue-appEp19/resources/js/app.js',    
    output:{
        path:path.resolve(__dirname,'public/js'),
        filename: 'app.js',
        publicPath: './public'
    }
    ,

    module:{
      rules:[
        {
          test: /\.js$/,
          exclude:/node-modules/,
          loader:'babel-loader'
        }
      ]
    },
        // ...
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
      }
    },
    plugins:[]
      
};   

if(process.env.NODE_ENV==='production'){
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap:true,
      compress:{
        warnings:false
      }
    }
    )
  )
}


