const path = require('path') // генерация абсолютного пути из относительного
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
							["@babel/plugin-proposal-decorators", {"legacy": true}],
							["@babel/plugin-proposal-class-properties", {"loose": true}]
						]
					}
				}
			},
			{
				test: /\.module\.css$/,
				exclude: /node_modules/,
				use: [
					{
			            loader: MiniCssExtractPlugin.loader,
			            options: {
			              hmr: process.env.NODE_ENV === 'development',
			            },
			        },
			        {
			        	loader: 'css-loader',
			        	options: {
			        		importLoaders: 1,
			        		modules: {
			        			localIdentName: '[local]__[sha1:hash:hex:7]'
			        		},
			        	}
			        }
				]
			},
			{
				test: /^((?!\.module).)*css$/,
				use: [
			        {
			        	loader: MiniCssExtractPlugin.loader,
			        	options: {
			              hmr: process.env.NODE_ENV === 'development',
			            }
			        },
			        'css-loader'
				]
			}
		]
	},
	plugins: [
	    new MiniCssExtractPlugin({
	      filename: 'styles.css',
	    }),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@c': path.resolve(__dirname, 'src/components'),
			'@p': path.resolve(__dirname, 'src/pages'),
			'@s': path.resolve(__dirname, 'src/store'),
		}
	},
	devServer: {
		historyApiFallback: true
	}
}

module.exports = conf