/*
 * 用户验证
 *  
 */

// 用户数据库表


const user = require("../../database/user");

//  接收用户验证的数据
module.exports = function (req,res) {
	// 验证用户是否需要登录
	//  在数据库中查找用户 
	var userOne = new user({
		"name":"fuck",
		"password":"1",
   });
	userOne.save((err,data)=>{
       
       console.log('====================================');
	   console.log('注册成功');
	   console.log('====================================');


	}) 

    res.send({
		status:200,
		messages:"创建用户成功"
	})




} 