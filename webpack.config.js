const path = require('path');

module.exports = {
    entry: './public/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public/dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    'style-loader', 'css-loader', 'postcss-loader'
                ]
            }
        ]
    }
}
