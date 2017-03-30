module.exports = {
	entry: ["./src/app.js","./src/util.js"],
	output: {
		filename: "bundle.js"
	},
	watch: true,
	module:{
		rules: [
		
			{
				test: /\.js/, 
				exclude: '/node_modules/',
				loaders: ['babel-loader']
			}
		],	
	} 
}