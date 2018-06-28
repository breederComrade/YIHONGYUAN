/*
 * 姑娘api
 */
const mongoose =require('mongoose');
//  创建骨架
 const  girls = new  mongoose.Schema({
	   name:String,
	   description:String,
	   arg:Number,
	   height:Number,
	   country:String,
 });

 module.exports = mongoose.model('girls',girls);