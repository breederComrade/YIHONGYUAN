/*
 * 用户验证
 *  
 */

// 用户数据库表
const user = require("../../database/user");

//  接收用户验证的数据
module.exports = function (req,res) {
	// 验证已经登录的用户是否有效

    //  cookie 验证
	let messages = 'fuck';

   let isS = req.secret?req.signedCookies.isVisit:req.cookies.isVisit;
   console.log('====================================');
   console.log('req.cookies.isVisit',req.signed,isS);
   console.log('====================================');
	 if(isS){
		
		 messages = '王公子您来了啊 快请进'
	 }else{
		 res.cookie('isVisit',1,{maxAge:600*1000,signed: true});
		 messages = '大爷第一次来啊！'
	 }

	 res.send({messages})







} 