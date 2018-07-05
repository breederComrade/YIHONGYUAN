/*
 * 用户数据模型
 */
// 加密模块
const crypto = require('crypto');
var jwt = require('jsonwebtoken');
 const mongoose =require('mongoose');
//  创建骨架
 const  user = new  mongoose.Schema({
	name: { type: String, required: true },//必须值
    email: { type: String, unique: true, required: true },//必须值-唯一性
    hash: String,
    salt:String,
    createdOn: {
        type: Date,
        default: Date.now
    }
 });

//  密码加密存储
user.methods.setPassword = function (password) {
	this.salt = crypto.randomBytes(16).toString('hex');
    //1000代表迭代次数 64代表长度
    this.hash = crypto.pbkdf2Sync(password, this.salt,1000,64).toString('hex');
}

// 验证密码
user.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
};
//  生成令牌
//  hash算法和类型+jsontoken+签名
user.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp:parseInt(expiry.getTime()/1000)}, process.env.JWT_SECRET);
};

 module.exports = mongoose.model('user',user);