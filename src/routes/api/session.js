/*
 * 用户验证
 *  
 */

// 用户数据库表
const user = require("../../database/user");

//  接收用户验证的数据
module.exports = function (req,res) {
	// sesssion 验证
	if(req.session.isVisit) {
		req.session.isVisit++;
		res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>');
	  } else {
		req.session.isVisit = 1;
		res.send("欢迎第一次来这里");    console.log(req.session);
	  }

} 