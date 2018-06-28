/**
 *  数据库处理文件 
 */

var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/yhy';

// 链接数据库
mongoose.connect(url)
var db = mongoose.connection;
// 监控数据库
db.on('open',function() {
    console.log('姑娘们准备好了');
});

db.on('error',function() {
    console.log('姑娘们找不到了');
})
