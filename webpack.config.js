var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: { // Adding loaders
		rules: [
			{
				test: /\.css$/, // Which files should loaders use
				use: ['style-loader', 'css-loader'] // Which loaders use the files above
				// npm install css-loader
				// npm install style-loader
				// uses loaders from right to left
			},
			{
				test: /\.js$/,
				exclude: /node-modules/,
				loader: 'babel-loader'
			}
		]
	}
};