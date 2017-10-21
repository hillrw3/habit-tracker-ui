const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

function apiUrl() {
    const urlArgument = process.argv.filter((arg) => arg.includes('API_URL'))[0]
    let apiUrl = 'http://localhost:3000'

    if (urlArgument) {
        apiUrl = urlArgument.split('=')[1]
    }
    return JSON.stringify(apiUrl)
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.DefinePlugin({API_URL: apiUrl()})
    ]
}