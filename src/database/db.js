/**
 *  数据库处理文件 
 */

const mongoose = require('mongoose'),
config = require('../config/index');
// 链接数据库
mongoose.connect(config.db)
var db = mongoose.connection;
// 监控数据库
db.on('open',function() {
    console.log('姑娘们准备好了');
});

db.on('error',function() {
    console.log('姑娘们找不到了');
})
