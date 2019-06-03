const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const chalk = require('chalk')
const address = require('address')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')
const { HOST = '0.0.0.0', PORT = 9528 } = process.env

module.exports = merge(webpackBaseConfig, {
	mode: 'development',
	devtool: 'eval-source-map',
	output: {
		publicPath: '/'
	},
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
