var count=0;
function loginBtn(us,ps) {    
    // ajax读取本地的文件
    $.ajax({
        //type规定请求类型，只有GET和POST两种
        type: "POST",
        //url是请求的路径,这里因为请求的是本地文件使用了相对路径
        url: "http://118.195.129.130:3000/user/login",
        //dataType规定返回数据格式，有时候我们请求没有错误但是他依然进入error里边可以就是因为返回的数据格式不是JSON格式
        dataType: "JSON",
        data: {
            us,
            ps
        },
        //success是请求成功后执行的函数
        success: function (result) {
            if(result.msg=='用户名或密码不正确'){
                var fail=document.getElementById('fail')
                if(count==0){
                    fail.innerHTML+="用户名或密码输入错误！"
                    //"用户名或密码输入错误！" 设置5秒后显示为空，方便对后续操作的判断
                    setTimeout(function(){
                        fail.innerHTML=''
                    },2000)
                    count++;
                }
            }
            else if(result.msg=='登录成功'){
                //页面跳转
                window.location.href='http://127.0.0.1:5500/home.html'
            }
        },
        //error是请求失败之后执行的函数
        error: function (err) {
            console.log("登陆失败！请重新登录！")
    
        }
    })
}
