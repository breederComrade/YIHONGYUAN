const express = require('express')
	 , router = express.Router();
	 router.post('/',auth,(req,res)=>{
		 res.send('你居然成功了')
	 })






	 
module.exports = router




