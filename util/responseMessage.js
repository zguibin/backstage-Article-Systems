const resposeMessage = {
    argsfail:{errcode:10001,message:'参数错误'},
    delsucc:{errcode:0,message:'成功删除'},
    delfail:{errcode:10002,message:"重新尝试"},
    exception: {errcode:10003,message:"服务器繁忙"},
    notfound:{errcode:10004,message:"url请求错误"},
    addsucc: {errcode:0,message:'成功添加'},
    addfail:{errcode:10005,message:'添加失败'},
    getsucc: {errcode:0,message:'获取成功'},
    getfail:{errcode:10006,message:'失败获取'},
    updsucc: {errcode:0,message:'成功编辑'},
    updfail:{errcode:10007,message:'编辑失败'},
}
module.exprots = responseMessage;