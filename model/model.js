var mysql = require('mysql');

// 导入数据库配置参数
let config = require('../config/db.json');


var connection = mysql.createConnection({
    ...config
})
// 连接mysql
connection.connect(function(err){
    if(err){
        throw err;
    }
    console.log('连接成功');
});

function dbquery(sql){
    return new Promise((resolve,reject)=>{
        connection.query(sql,(err,data)=>{
            if(err){ reject(err); }
            resolve(data)
        })
    })
}
module.exports = dbquery;