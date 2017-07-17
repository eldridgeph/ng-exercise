let path = require('path');
let webpack = require('webpack');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const WebpackConfig = {
    entry: {
        app: './src/app/app.module.js'
    },
    output: {
        path: __dirname + '/client/',
        filename: 'scripts/[name].bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.js$/, loader: 'babel-loader', exclude: [/(dist|node_modules)/], query: {presets: ['es2015']}},
            {test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader',
                query: {
                    outputPath: './icons/'
                }
            },
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
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            "d3": "d3"
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url: 'http://localhost:3333'}),
    ]
};

module.exports = WebpackConfig;