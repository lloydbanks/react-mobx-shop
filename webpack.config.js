const path = require('path') // генерация абсолютного пути из относительного

const conf = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: 'main.js',
		publicPath: 'dist/' // чтобы система в dev режиме понимала где лежит js файл
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					// то же самое, что можно описать в .babelrc
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							"@babel/plugin-transform-react-jsx",
							"@babel/plugin-proposal-class-properties"
						]
					}
				}
			}
		]
	}
}

module.exports = conf