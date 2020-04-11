const path = require('path');
var glob = require('glob');

console.log(glob.sync('./components/**/*.yoink.tsx'));

module.exports = {
	mode: 'production',
	entry: glob
		.sync('./components/**/*.yoink.{js,jsx,ts,tsx}')
		.reduce(
			(entries, entry) =>
				Object.assign(entries, { [entry.split('/').pop().replace(/.yoink.[jt]sx?/, '')]: entry }),
			{}
		),
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
};
