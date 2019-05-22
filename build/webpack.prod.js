const { join } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = merge(webpackBaseConfig, {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	output: {
		publicPath: '/'
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
					test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-config|react-router-dom)[\\/]/,
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
		new CleanWebpackPlugin(),
		new PrerenderSPAPlugin({
			routes: ['/', '/empty'],
			staticDir: join(__dirname, '../dist'),
			renderer: new Renderer({
				renderAfterTime: 5000,
				headless: false
			})
		})
	]
})
