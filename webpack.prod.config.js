const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    entry: ['babel-regenerator-runtime', './src/index.js'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[chunkhash].js',
        publicPath: './'
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
                use: [
                    {
                        loader: 'style-loader'
                    },
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
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=100000&name=./images/[name].[ext]'
            }
        ]
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/index.html',
            to: '',
        }]),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            files: {
                js: ['bundle.js'],
            },
        }),
        new ExtractTextPlugin("styles.css")
    ]
};