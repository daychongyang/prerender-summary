const { join, resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Prerenering = require('./prerendering')

module.exports = merge(webpackBaseConfig, {
	mode: 'production',
	devtool: 'none',
	output: {
		publicPath: '/'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.BUILD_ENV': JSON.stringify(process.env.BUILD_ENV)
		}),
		new CleanWebpackPlugin(),
		new Prerenering({
			port: 9527,
			headless: false,
			staticDir: resolve(__dirname, '../dist'),
			routes: ['/', '/400']
		})
	]
})
