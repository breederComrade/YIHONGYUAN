/*
 * 入口文件 
 */


/**
 * 依赖与引入路由文件
 */
const express = require('express'),
  config = require('./src/config/index'),
  app = module.exports = express(), //导出给启动项使用健康debug
  routes = require('./src/routes'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  path = require('path'),
 
  db = require('./src/database/db');
//  通过将当前app传入路由来启用路由分组

// 解析请求主体
app.use(bodyParser());
app.use(cookieParser());

// 注意： 如果要这么操作 需要先usebody 否则在routes调用时body还没有传入routes
routes(app)
//  启动服务器
app.listen(config.port||8888, () => {
  console.log('怡红院开门了！！！')
})
