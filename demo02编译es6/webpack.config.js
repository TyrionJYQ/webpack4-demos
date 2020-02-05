const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './app.js'
    },
     output: {
        filename: "[name].bundle.js",
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    // options: {   
                    //     presets: [['@babel/preset-env', {
                    //         targets: {
                    //             browsers: [' > 1%', 'last 2 versions']
                    //             // chrome:'52'
                    //         }
                    //     }]]
                    // }
                },
                exclude: '/node_modules/'
            }
        ]
    }
}