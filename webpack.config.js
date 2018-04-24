const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'eval',
	
	entry: './app/main',

	output: {
		filename: 'bundle.js',
		path    : path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					 presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(scss|css)$/,

				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					],
					fallback: 'style-loader'
				})
			}
		]
	},
	  resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new ExtractTextPlugin('main.css')
	]
};
