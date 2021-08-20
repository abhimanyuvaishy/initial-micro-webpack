const path = require('path');

module.exports= {
    entry: {
       form : path.resolve(__dirname, './index.js') 
    },
    output:{
        path: path.resolve(__dirname, '../', 'dist/form'),
        filename: '[name].js',
        libraryTarget: 'umd',
        publicPath:'/dist'
    }
}
