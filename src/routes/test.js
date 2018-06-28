var express = require('express');

var router = express.Router();
// 加密模块
var crypto = require('crypto');
//登录
router.post('/',function(req,res) {
    console.log('====================================');
	console.log(req.body);
	console.log('====================================');
    res.send('2222')

});
module.exports = router;