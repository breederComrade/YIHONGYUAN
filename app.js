/*
 * 入口文件 
 */


/**
 * 依赖与引入路由文件
 */
require('dotenv').load()
const express = require('express'),
  passport = require('passport'),//验证
  config = require('./src/config/index'),
  app = module.exports = express(), //导出给启动项使用健康debug
  routes = require('./src/routes'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  path = require('path'),
  db = require('./src/database/db');

  require('./src/routes/api/config/passport')
  app.use(passport.initialize());
//   错误处理
  app.use(function(err, req, res, next) {
    if (err.name == 'UnauthorizedError') {
        res.status(401);
        res.json({ message: err.name + ":" + err.message });
    }
});
// 解析请求主体
app.use(bodyParser());
app.use(cookieParser('qqqqqqqwwqwqwqwqwqwqf9293923dsaf',{}));
app.use(session({name:"jsessionId",secret:"recommand 128 bytes random string",cookie: { maxAge: 60 * 1000 }}))

// 注意： 如果要这么操作 需要先usebody 否则在routes调用时body还没有传入routes
routes(app)
//  启动服务器
app.listen(config.port||8888, () => {
  console.log('怡红院开门了！！！')
})
