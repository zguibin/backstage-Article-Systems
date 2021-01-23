let express = require('express');
// 得到路由
let router = express.Router();

// 控制器导入
const CateController = require('../controller/CateController.js')
router.get('/aindex',(req,res)=>{
    res.render('a-index.html')
})
router.get('/',(req,res)=>{
    res.redirect('/admin')
})
// 文章
router.get('/admin',(req,res)=>{
    res.render('layui-index.html')
})
// 渲染后台分类列表页面
// router.get('/column',(req,res)=>{
//     // res.sendFile( path.join(__dirname,'views/article-index.html') )
//     res.render('column.html')
// })
router.get('/catindex',CateController.catindex)

// 渲染添加分类的页面
router.get('/catadd',CateController.catadd)
// router.get('aindex',(req,res)=>{
//     res.render('a-index.html')
// })
// router.get('/add',(req,res)=>{
//     res.render('a-add.html')
// })
// 渲染出编辑分类的页面
router.get('/catedit',CateController.catedit)

// 提交分类的数据
router.post('/postCat',CateController.postCat)
router.get('/artadd',(req,res)=>{
    res.sendFile( './views/layui-index.html' )
    res.render('a-add.html')
})
// 获取所有分类数据的接口
router.get('/getCate',CateController.getCate)
// 获取所有分类数据的接口
router.get('/getOneCate',CateController.getOneCate)
// 删除分类接口
router.post('/delCat',CateController.delCat)
// 编辑分类接口
router.post('/updCate',CateController.updCate)
// 匹配失败路由
router.all('*',(req,res)=>{
    res.json({errcode:10004,message:"错误请求"})
})

// 获取文章的接口
router.get('')
// 暴露出去
modul.exprots = router;