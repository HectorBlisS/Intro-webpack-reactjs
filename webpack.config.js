var webpack = require('webpack');

module.exports = {
	entry: ["./src/index.js","./src/util.js"],
	output: {
		filename: "docs/bundle.min.js"
	},
	watch: false,
	module:{
		rules: [
		
			{
				test: /\.js/, 
				exclude: '/node_modules/',
				loaders: ['babel-loader']
			}
		],	
	},
	devServer: {
		contentBase: 'docs'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
}