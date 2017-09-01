
//wx配置
var AppId = "wx69aeabb0b36102d1";// "wx7148296902760247";
var AppSecret = "d83b4dda065400f09926314ffdf2b191";//"6400c962d8c115c2fac6b06e0710ef23";
var HomeUrl = "http://www.isoftsmart.com/bagWeb/Main/groupinfo.html";
//var HomeUrl = "http://localhost/bagWeb/Main/groupinfo.html";
//请求API后台地址

//var Apiurl = "http://localhost/bagAPI/";
//var Weburl = "http://localhost/bagWeb/";
//var Signalr = "http://localhost/";
var Apiurl = "http://www.isoftsmart.com/bagAPI/";
var Weburl = "http://www.isoftsmart.com/bagWeb/";
var Signalr = "http://www.isoftsmart.com/";
    //调用后台链接，json字符串，请求类型：post，get
    function callBackFuncJson(url, jsonVal, type) {
        var resdata;
        var json= jsonVal;
        if (type == "") { 
            type = "Post";   
        }
        $.ajax({
            url: Apiurl + url, // url  action是方法的名称
            type: type,
            data: json,
            //async: false,
            xhrFields: { 
                withCredentials: true
            },
            crossDomain: true,//新增cookie跨域配置
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                resdata = data;
                console.log(data);
            }
        });
        return resdata;
    }
   