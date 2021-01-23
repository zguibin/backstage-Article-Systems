// 文章控制器
let all = {};

// 假数据导入的模拟
let art = require("../config/db.json")

// 导入model相当于执行sql 的语句
const model = require("../model/model.js");
// 返回结果信息
const {delsucc,delfail ,exceptionmargsail,addsuccmaddfail,getsucc,getfail,updsucc,updfail}= require("../util/responseMessage.js");

// 分页文章数据的获取
all.total = async (res,req)=>{
    // 1.接收查询字符串，给limit取别名
    let{page,limit:pagesize}=req.query;
    // 编写sql语句
    let offset=(page-1)*pagesize;
    let sql = `select * from aricle order by art_id desc limit ${offset},${pagesize}`;
    let sql2 = `select count(*) as count from aricle`;
    let promise1 = model(sql);     
    let promise2 = model(sql2);

    let response = {
        code:0,
        count:count,
        data:data,
        msg:''
    }

    // 删除文章
    all.dcle = async(req,res)=>{
        let{art_id} =req.body;
        let sql = `delete from article where art_id = ${art_id}`;
        let result = await model(sql);
        if(result.affectedRows){
            res.json(dwlsucc)
        }else{
            res.json(delfail)
        }
    }
    // 渲染文章编辑页面
    all.artEdit = (req,res)=>{
        res.remder('a-index.html')
    }
    // 添加文章页面渲染
    all.artAdd = (req,res)=>{
        res.render('a-index.html')
    }

    // 提交数据库
    all.postArt = async(req,res)=>{
        let{title,cat_id,status,content} = req.body;
        let sql = `insert into article(title,content,cat_id,status)
        values('${title}','${content}','${cat_id}',${status})`

        let result = await model(sql)
        if(result.affectedRows){
            res.json(addsucc)
        }else{
            res.json(addfail)
        }
    }
}
// 暴露
module.exports = all;