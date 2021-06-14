module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'plugin:prettier/recommended'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true, //"가 아닌, '
				semi: true, // ;가 무조건 포함되어 있어야 함.
				useTabs: true, //tab을 사용
				tabWidth: 2 // tab 간격은 2
			}
		]
	}
};
