// 用于处理目录的对象
const path = require('path');
const webpack = require('webpack');
// 提取css样式
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// HTML模版
const HtmlwebpackPlugin = require('html-webpack-plugin');
//加载基本配置文件
let config = require('./webpack.base.config');
//api
const api=require('./src/config/api/production');

config.output.filename = '[name].[hash].js'; 
config.output.chunkFilename = '[name].chunk.[hash].js'; 

//配置插件
config.plugins = (config.plugins || []).concat([
	new webpack.ProvidePlugin({
	    "Vue":"vue",
	    "VueRouter":"vue-router",
	    "vueResource":"vue-resource"
	}),
	new ExtractTextPlugin("[name].[hash].css", {
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
	new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
]);

module.exports = config;