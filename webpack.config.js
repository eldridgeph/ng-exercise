
let webpack = require('webpack');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app/app.js'
    },
    output: {
        path: __dirname,
        filename: './dist/[name].bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.js$/, loader: 'babel-loader', exclude: [/(dist|node_modules)/], query: {presets: ['es2015']}},
            {test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader'},
            {test: /\.csv$/, loader: 'csv-loader', options: {dynamicTyping: true, header: true, skipEmptyLines: true}}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: "jQuery",
            jQuery: "jQuery",
            "window.jQuery": "jQuery",
            "d3": "d3"
        }),
        new webpack.IgnorePlugin(/^(jsdom|fs|child_process|cookie|xmlhttprequest|navigator)$/),
        new OpenBrowserPlugin({url: 'http://localhost:3333'})
    ]
};