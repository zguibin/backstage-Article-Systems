const nprogress = require("./nprogress");

// 定义工具函数，为了其他地方用
(function(window,undefined){
    let util = {
    date_format:function(date,format="YYYY-MM-DD HH:mm:ss"){
        return moment(date).format(format)
    }
}



function startNprogress(){
    nprogress.configure({
        showSpinner: false;
    })

}
// 暴露给全局
window.util = util;
})(window)
