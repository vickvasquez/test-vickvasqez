const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production'

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve('./frontend/public/index.html'),
    filename: 'index.html',
    inject: true,
})

module.exports = {
    entry: ['babel-polyfill', path.resolve('./frontend/src/index.js')],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            }, { loader: 'eslint-loader' }],

        }, {
            test: /\.(css|scss)/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'sass-loader' },
            ],
        }],
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        alias: {
            components: './frontend/src/components',
        },
        extensions: ['.js', '.jsx'],
    },
}
