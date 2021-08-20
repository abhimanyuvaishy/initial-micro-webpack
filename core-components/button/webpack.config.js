const path = require('path');

module.exports= {
    entry: {
         button: path.resolve(__dirname, './index.js') 
    },
    output:{
        path: path.resolve(__dirname, '../', 'dist/button'),
        filename: '[name].js',
        libraryTarget: 'umd',
        publicPath: './dist'
    }
};
