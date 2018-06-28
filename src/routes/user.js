const express = require('express')
	 , router = express.Router();

	 router.get('/',(req,res)=>{

        console.log('====================================');
		console.log(req.body);
		console.log('====================================');

		 res.send('你居然成功了')
	 })

	 router.post('/',(req,res)=>{

        console.log('====================================');
		console.log(req.body);
		console.log('====================================');

		 res.send('你居然成功了')
	 })



module.exports = router




