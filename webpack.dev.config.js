const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');
const autoprefixer = require('autoprefixer');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options:  {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        "plugins": ["@babel/plugin-proposal-class-properties"]
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            // For css modules
                            //  options: {
                            //    importLoaders: 1,
                            //    modules: true,
                            //    localIdentName: '[name]__[local]__[hash:base64:5]'
                            //  }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    autoprefixer({
                                        browsers: [
                                            "> 1%",
                                            "last 2 versions"
                                        ]
                                    })
                                ]
                            }
                        }]
                }),
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=./images/[name].[ext]'
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
        new ExtractTextPlugin("styles.css")
    ]
};