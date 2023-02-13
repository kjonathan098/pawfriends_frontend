const Dotenv = require('dotenv-webpack')

module.exports = {
	// ...
	plugins: [
		new Dotenv({
			path: path.resolve(__dirname, 'src/.env'),
		}),
	],
}
