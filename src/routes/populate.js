/*
 * 关联表 
 */



var mongoose = require('mongoose');
var express = require('express')
var app = express(),router = express.Router();

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/yhy')

router.get('/',(req,res)=>{
	
  // 定义学生模式
var StudentSchema = new mongoose.Schema({
    name: String,
    clazzID : {
        type : mongoose.Schema.ObjectId,
        ref : 'Clazz'    // clazz的Model名
    }
})
// 连表查询方法
StudentSchema.statics = {
    findClazzNameByStudentId:function(studentId, callback){
            return this
                .findOne({_id : studentId}).populate('clazzID')  // 关联查询
                .exec(callback)
        }
}

// 定义班级模式
var ClazzSchema = new mongoose.Schema({
    clazzName: String
});

// 模型
var Student = mongoose.model('Student',StudentSchema)
var Clazz = mongoose.model('Clazz',ClazzSchema)

// // 新建班级文档并保存
// var clazz = new Clazz(
//     {
//         clazzName:'体育9班'
//     }
// );
// clazz.save(function  (argument){
//     console.log('true');
// });

// // 新建学生文档并保存
// var student = new Student({
//     name : '马冬梅',
//     clazzID : '56e1440f508c947b0f32c16b'  //体育3班的_id
// })
// student.save(function (err){
//     console.log('true');
// })


Student.findClazzNameByStudentId('5b34b838d4b9b5345a7151e3', function (err, student){
	if(err) console.log(err);
	console.log('ffff',student)
    // console.log(student.name + " 在的班级: "+student.clazzID.clazzName);  
    /*通过studentID查询到对应的学生对象，并通过关联属性clazzID获取到对应classID的班级对象，
	通过对象的clazzName属性返回班级名称*/
	res.send(student.name + " 在的班级: "+student.clazzID.clazzName)
})












})




// var logger = require('morgan');
// if('development' === app.get('env')){
//     app.set('showStackError', true);          // 输出报错信息
//     app.use(logger(':method :url :status'));  // 输出信息领域
//     app.locals.pretty = true;                 // 源代码格式化
//     mongoose.set('debug', true);              // 数据库报错信息
// }

module.exports = router