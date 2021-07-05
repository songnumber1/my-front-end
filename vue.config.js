module.exports = {
	transpileDependencies: ['vuetify'],
	runtimeCompiler: true,
	devServer: {
		//proxy: 'http://localhost:8089'
		proxy: {
			'/': {
				target: 'http://localhost:8089/',
				pathRewrite: { '^/': '' },
				changeOrigin: true,
				secure: false
			}
		}
	}
};
