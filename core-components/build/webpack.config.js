const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const CopywebpackPlugin = require('copy-webpack-plugin');


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

        },
        {
            test: /\.(scss|css)$/,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }
    ]
},
    resolve:{
        extensions:['.jsx', '.js'],
        enforceExtension: false,
        modules: [
            path.join(__dirname, '../', 'node_modules')
        ],

    },

    externals:[
        {
            react: 'umd react',
            'react-dom': 'umd react-dom'
        },
        /bootstrap\/*/,
        'prop-type'
    ],
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]

}

