const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const webpack = require('webpack')
const chalk = require('chalk')
const address = require('address')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')
const { HOST, PORT } = process.env

module.exports = merge(webpackBaseConfig, {
	mode: 'development',
	devtool: 'eval',
	devServer: {
		host: HOST,
		port: PORT,
		public: `localhost:${PORT}`,
		open: true,
		hot: true,
		quiet: true,
		overlay: {
			warnings: true,
			errors: true
		},
		historyApiFallback: true,
		clientLogLevel: 'warning'
	},
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
				test: /\.(jpe?g|png|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10 * 1024
						}
					}
				]
			}
		]
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: [
					`App running at: \n
          - Local: ${chalk.cyan(`http://localhost:${PORT}`)}\n
          - Network: ${chalk.cyan(`http://${address.ip()}:${PORT}`)} \n`
				],
				notes: [
					'Some additionnal notes to be displayed unpon successful compilation!'
				]
			},
			clearConsole: true,
			onErrors: (severity, errors) => {
				if (severity !== 'error') return
				const { name, file } = errors[0]
				notifier.notify({
					title: 'Webpack error',
					message: `${severity} : ${name}`,
					subtitle: file || ''
				})
			}
		}),
		new webpack.HotModuleReplacementPlugin()
	]
})
