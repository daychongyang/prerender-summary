/* eslint-disable no-useless-escape */
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.html$/,
				use: [{ loader: 'html-loader' }]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.styl$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
			},
			{
				test: /\.svg$/,
				use: 'file-loader'
			},
			{ test: /\.(eot|woff|ttf)$/, loader: 'file-loader' },
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5 * 1024,
							name: 'images/[name].[ext]'
						}
					}
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					warnings: false,
					parse: {},
					compress: {
						drop_console: true
					}
				}
			})
		],
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/](react|react-dom|react-reval|react-loading|react-router|react-router-config|react-router-dom|react-bootstrap)[\\/]/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.BUILD_ENV': JSON.stringify(process.env.BUILD_ENV)
		}),
		new CleanWebpackPlugin()
	]
})
