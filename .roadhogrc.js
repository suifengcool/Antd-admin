export default {
	"entry": "src/index.js",
	// 接口代理示例
	// proxy: {
	//     "/api/v1": {
	//         "target": "http://192.168.0.110",
	//         "changeOrigin": true,
	//         "pathRewrite": { "^/api/v1" : "/api/v1" }
	//     }
 //    },
	"env": {
		"development": {
			"extraBabelPlugins": [
				"dva-hmr",
				"transform-runtime",
				[
		            "import", {
			            "libraryName": "antd",
			            "style": true
		            }
		        ]
			]
		},
		"production": {
			"extraBabelPlugins": [
				"transform-runtime",
				[
		            "import", {
			            "libraryName": "antd",
			            "style": true
		            }
		        ]
			]
		}
	}
}