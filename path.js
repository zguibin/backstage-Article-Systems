const express = require('express');
const path = require('path');
const app = express();

// 导入路由模板
const router= require('./router/router.js')
// var mysql = require('mysql')
// 连接中间件配置的参数
// var connection = mysql.createConnection({
//     host :"localhost",
//     port:"3306",
//     user:"root", 
//     password:"root",
//     database:"study2021" //数据库
// })
// 连接mysql
// connection.connect(function(err){
//     if(err){
//         throw err;
//     }
//     console.log('连接成功');
// });
// 中间件
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

// 托管静态资源
app.use('/public',express.static(path.join(__dirname,'public')))
// 引用模板引擎
const artTemplate = require('art-template');
const express_template = require("express-art-template");
// 配置模板引擎
app.set('views',__dirname +'/views/');
// 设置express——template静态托管文件拓展名为html
app.engine('html',express_template)
// 使用模板引擎拓展名为html
app.set('views engine','html');

// app.get('/aindex',(req,res)=>{
//     res.render('a-index.html')
// })

// app.get('/',(req,res)=>{
//     res.redirect('/admin')
// })
// app.get('/admin',(req,res)=>{
//     res.render('layui-index.html')
// })


// // 渲染后台分类列表页面
// app.get('/column',(req,res)=>{
//     // res.sendFile( path.join(__dirname,'views/article-index.html') )
//     res.render('column.html')
// })
// app.get('aindex',(req,res)=>{
//     res.render('a-index.html')
// })

// app.get('/add',(req,res)=>{
//     res.render('a-add.html')
// })
// // 获取数据分类
// app.get('/getCate',(req,res)=>{
//     // 数据库
//     let sql ="select * from category order by sort"
//     connection.query(sql,(err,rows)=>{
//         if(err){throw err;}
//         // json转换为字符串形式
//         res.json(rows)
//     })
// })

// 使用路由中间件
app.use(router)
// 监听
app.listen(4000,_=>{
    console.log("你好端口号为4000");
})