# YIHONGYUAN怡红院
> 完整的node服务器工作项目。提供用户验证，api接口和数据库操作。以简单的实际场景展示使用node作为后端服务器会使用到的功能
> 实景模拟node服务器请求APi;使用nodeJs+mongodb+expres/koa2
## 用户验证
> 用户通过何种方式验证权限和登陆
> [用户验证项目实战](http://note.youdao.com/noteshare?id=f88d8684dabc0ce692b7b578e804d795) 参考

### 路由分配
> 一共有几个路由页面，路由页面的资源请求
 
## API接口
> 定义api接口文件，处理所有的api接口请求


### 数据库操作
> 成功连接数据库，数据库表的创建和设计.使用mongoose模块对连接和增删改查操作

数据库的连接
~~~
 const  mongoose = require('mongoose');
   //  'mongodb://数据库地址：端口/数据库的名字'
   const url = 'mongodb://localhost:27017/yhy';
   // 链接数据库
   const db = mongoose.connect(url)
   
   // 监控数据库链接情况
   db.connection.on('open',function(){
       // 数据库成功打开 连接成功
   })
   db.connection.on('error',function(){
       // 数据库链接出错
   })
  
~~~

数据库的增删改查  
> 请查看productNOde项目笔记和mongodb操作笔记

~~~
// 导入依赖
var mongoose = require('mongoose');
//  创建Schema框架
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name : String,
    description : String,
    price : Number,
    user : String,
    createTime : Number,
    image : String
});
//  创建模型
var product = mongoose.model('product',productSchema);
//  导出模型 就可以使用这个表了
module.exports = product;
~~~

## 前端小程序
> 这个项目的前端我暂时使用的是小程序页面，项目地址：[怡红院小程序前端](https://github.com/breederComrade/YIHONGYUAN_FONT_END)

## 使用方法

克隆仓库
> git clone https://github.com/breederComrade/YIHONGYUAN.git  

安装依赖
> npm i 或 cnpm   
> npm i -g nodemon
> npm i -g mongodb

运行脚本
> npm start

**NOTE:** 数据库配置为默认配置，可通过修改db/config文件来修改成你自己的配置项目


## License

MIT













