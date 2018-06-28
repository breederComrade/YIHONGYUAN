/** 
 *  请求姑娘列表接口
 */


// 链接的姑娘数据库
const db_girls = require('../database/girls');
const express = require('express')
	 , router = express.Router();
	 router.post('/list',(req,res)=>{
		//   姑娘列表
		// 查询girls 数据库 返回数据
		
        db_girls.find({},function (err,data) {
			if(err){
			
               res.send({
				   status:500,
				   message:"获取姑娘列表失败",
				   data:[],
			   })

			}else{
				res.send({
					status:200,
					data,
					message:"成功获取姑娘列表"
				})
			}

		})



	 })

module.exports = router




