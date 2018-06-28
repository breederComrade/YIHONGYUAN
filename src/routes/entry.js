const express = require('express')
	 , router = express.Router();

	 router.get('/',(req,res)=>{

      

		 res.send('你居然成功了')
	 })

	 router.post('/',(req,res)=>{

       

		 res.send('你居然成功了')
	 })



module.exports = router




