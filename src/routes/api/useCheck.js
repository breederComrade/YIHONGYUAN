/*
 * 用户验证
 *  
 */

// 用户数据库表
const user = require("../../database/user");

//  接收用户验证的数据
module.exports = function (req,res) {
	// 验证已经登录的用户是否有效
	// session-cookie验证



	
	//  token验证
	//  Passpost 确保验证

	// 数据库中查找师傅存在该账号密码
      user.find({
		  'name':'fuck'
	  },{_id:0},(err,data)=>{
		  if(err) {
			  console.log('====================================');
			  console.log(err);
			  console.log('====================================');
			};
          if(data.length){
			 res.send({
				 message:"登入成功",
				 status:200,
				 data:data[0].name
			 })
		  }

	  })





} 