require('dotenv').config()
const { resolve, join } = require('path')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BUILD_ENV } = process.env

module.exports = {
	entry: resolve(__dirname, '../src/index.tsx'),
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'~': resolve(__dirname, '..', 'src'),
			layouts: resolve(__dirname, '..', 'src/layouts'),
			assets: resolve(__dirname, '..', 'src/assets'),
			components: resolve(__dirname, '..', 'src/components'),
			pages: resolve(__dirname, '..', 'src/pages'),
			routes: resolve(__dirname, '..', 'src/routes'),
			utils: resolve(__dirname, '..', 'src/utils')
		},
		mainFiles: ['index']
	},
	output: {
		path: join(__dirname, '../dist'),
		filename: '[name].[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|ts|jsx|tsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.html$/,
				use: [{ loader: 'html-loader' }]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							javascriptEnabled: true
						}
					}
				]
			},
			{
				test: /\.svg$/,
				use: 'file-loader'
			},
			{ test: /\.(eot|woff|ttf)$/, loader: 'file-loader' },
			{
				test: /\.(jpe?g|png|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8 * 1024
						}
					}
				]
			}
		]
	},
	plugins: [
		new WebpackBar(),
		new CopyPlugin([
			{
				from: resolve(__dirname, '../static'),
				to: resolve(__dirname, '../dist/static')
			}
		]),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(BUILD_ENV)
		}),
		new HtmlWebpackPlugin({
			title: '登录',
			filename: 'index.html',
			template: resolve(__dirname, '../src/index.html'),
			minify: {
				removeRedundantAttributes: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				removeComments: true,
				collapseBooleanAttributes: true
			},
			favicon: ''
		})
	]
}
