/**
 *   数据库配置文件
 */

 module.exports = {
	 port: 8888,//端口
	 db:'mongodb://localhost:27017/yhy',//数据库地址
	 dbUser:"",//用户账号
	 dbUserPossword:"",//用户密码
	 dir:__dirname,//目录
	 sessionName:"test",//session名字
 }