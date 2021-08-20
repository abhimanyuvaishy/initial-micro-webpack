//const webpack = require('webpack');
const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    mode:'production',
   entry: path.resolve(__dirname, '../index.js'),
   output:{
       filename: 'index.js',
       path: path.resolve(__dirname, '../', 'dist')
   },
   module:{
      rules: [
        {
            test: /\.(jsx|js)$/,
            exclude: /(node_modules)/,
            use:{
                loader:'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
            }

        }
    ]
},
    resolve:{
        extensions:['.jsx', '.js']
    }

}

