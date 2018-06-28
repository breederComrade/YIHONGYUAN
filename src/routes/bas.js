const express = require('express')
	 , router = express.Router();

	 router.get('/',(req,res)=>{
		 console.log('====================================');
		 console.log(req.body);
		 console.log('====================================');
		 res.send('bas')
	 })


	 router.post('/',(req,res)=>{
		console.log('====================================');
		console.log(req);
		console.log('====================================');
		res.send('bas')
	})

module.exports = router




