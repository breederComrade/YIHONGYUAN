const express = require('express')
	 , router = express.Router();

	 router.get('/',(req,res)=>{
		
		 res.send('bas')
	 })


	 router.post('/',(req,res)=>{

		res.send('bas')
	})

module.exports = router




