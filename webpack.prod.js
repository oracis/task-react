const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'none',
	optimization: {
    minimizer: [
      new UglifyJSPlugin({
			sourceMap: true,
			uglifyOptions: {
			  compress: {
				inline: false
			  }
			}
		  })
	  ]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
});
