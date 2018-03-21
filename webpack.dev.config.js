// 用于处理目录的对象
const path = require('path');
const webpack = require('webpack');
// 提取css样式
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// HTML模版
const HtmlwebpackPlugin = require('html-webpack-plugin');
//复制 插件
const CopyWebpackPlugin= require('copy-webpack-plugin');
//加载基本配置文件
var config = require('./webpack.base.config');
//api
const api=require('./src/config/api/development');
config.devtool = '#source-map';  // source-map
config.output.filename = '[name].js'; 
config.output.chunkFilename = '[name].chunk.js'; 
//配置插件
config.plugins = (config.plugins || []).concat([
	new webpack.ProvidePlugin({
	    "Vue":"vue",
	    "VueRouter":"vue-router",
	    "vueResource":"vue-resource"
	}),
	new ExtractTextPlugin("[name].css", {
		allChunks: true,
		resolve: ['modules']
	}), 
	new webpack.optimize.CommonsChunkPlugin({
		name:['lib/jquery/vendors','lib/gojs/vendors','lib/vue/vendors','lib/common'],
		minChuncks : 3
	}),
	new HtmlwebpackPlugin({
		template: 'template/index.html',
		filename: '../index.html',
		inject: 'body'
	}),
	new webpack.DefinePlugin({
	  "process.env": {
	    NODE_ENV: api
	  }
	}),
	/*new CopyWebpackPlugin([{
    	from: __dirname + '/src/index.js',
    	to:  __dirname+'/build/'
	}])*/
]);
module.exports = config;