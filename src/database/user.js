/*
 * yon'h
 */
const mongoose =require('mongoose');
//  创建骨架
 const  user = new  mongoose.Schema({
	   name:String,
	   password:String
 });

 module.exports = mongoose.model('user',user);