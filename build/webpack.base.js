require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BUILD_ENV } = process.env

module.exports = {
	entry: path.resolve(__dirname, '..', 'src'),
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, '..', 'dist')
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'~': path.resolve(__dirname, '..', 'src')
		},
		mainFiles: ['index']
	},
	plugins: [
		new WebpackBar(),
		new CopyPlugin([
			{
				from: path.resolve(__dirname, '../static'),
				to: path.resolve(__dirname, '../dist')
			}
		]),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(BUILD_ENV)
		}),
		new HtmlWebpackPlugin({
			title: 'Prerender',
			filename: 'index.html',
			template: path.resolve(__dirname, '../src/index.html'),
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
