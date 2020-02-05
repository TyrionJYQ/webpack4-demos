const path = require('path');

module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./dist')
    }
}