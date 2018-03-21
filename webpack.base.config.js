// 用于处理目录的对象
const path = require('path');
/**
 * webpack 基本配置信息
 * 
 */
module.exports = {
	entry: {
		'lib/jquery/vendors':['./src/lib/td_heatmap/js/layer/jquery-1.7.1.min.js','./src/lib/td_heatmap/js/layer/layer.js'],
		'lib/gojs/vendors':['gojs-cracked-dys','./src/lib/gojs/bpmn.js'],
		'lib/vue/vendors': ['vue', 'vue-resource', 'vue-router','iview','radon-ui','vue-multiselect'],
		'index': path.resolve(__dirname, 'src'),
	},
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath:'/data_atm/build/',
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style!css'
		}, 
		{   test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
			loader: 'url-loader?limit=50000&name=[name].[ext]'
		},
		{
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		}, 
		{
			test: /\.(html|tpl)$/,
			loader: 'html-loader'
		}, {
			test: /\.json$/,
			loader: 'json'
		}, {
			test: /\.vue$/,
			loader: 'vue'
		}]
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {}
	},
	plugins: []
}