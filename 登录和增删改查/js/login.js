<<<<<<< HEAD
var count=0;
function loginBtn(us,ps) {    
=======
var count = 0;
var usercode_login = document.getElementById('usercode_login')
var usepassword_login = document.getElementById('usepassword_login')
function loginBtn() {
    //点击登录按钮，但是表单中有内容为空的时候，框框变红
    function showUserRed() {
        if (usercode_login.value == "") {
            usercode_login.style.borderColor = "red"
        }
        else {
            usercode_login.style.borderColor = "#e1e1e1"
        }
    }
    function showPsRed() {
        if (usepassword_login.value == "") {
            usepassword_login.style.borderColor = "red"
        }
        else {
            usepassword_login.style.borderColor = "#e1e1e1"
        }
    }
    //恢复原来的颜色
    function recoverColor() {
        setTimeout(function () { usercode_login.style.borderColor = "#e1e1e1" }, 5000)
        setTimeout(function () { usepassword_login.style.borderColor = "#e1e1e1" }, 5000)
    }
    showUserRed();
    showPsRed();
    recoverColor();
>>>>>>> f19f73a (second登录和增删改查)
    // ajax读取本地的文件
    $.ajax({
        //type规定请求类型，只有GET和POST两种
        type: "POST",
        //url是请求的路径,这里因为请求的是本地文件使用了相对路径
        url: "http://118.195.129.130:3000/user/login",
        //dataType规定返回数据格式，有时候我们请求没有错误但是他依然进入error里边可以就是因为返回的数据格式不是JSON格式
        dataType: "JSON",
        data: {
<<<<<<< HEAD
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
=======
            us: usercode_login.value,
            ps: usepassword_login.value
        },
        //success是请求成功后执行的函数
        success: function (result) {
            // alert(data._id)
            if (result.msg == '用户名或密码不正确') {
                var fail_login = document.getElementById('fail_login')//获取一下HTML中的fail
                if (count == 0) {
                    fail_login.innerHTML += "用户名或密码输入错误！"
                    //"用户名或密码输入错误！" 设置5秒后显示为空，方便对后续操作的判断
                    setTimeout(function () {
                        fail_login.innerHTML = ''
                    }, 2000)
                    count++;
                }
            }
            else if (result.msg == '登录成功') {
                //页面跳转
                window.location.href = "../登录和增删改查/home.html"
                let id_myInfo=result.data[0]._id;
                localStorage.setItem('UserId',id_myInfo);
>>>>>>> f19f73a (second登录和增删改查)
            }
        },
        //error是请求失败之后执行的函数
        error: function (err) {
            console.log("登陆失败！请重新登录！")
<<<<<<< HEAD
    
        }
    })
}
=======

        }
    })
}
//改变密码显示与隐藏的功能
//获取一下眼睛eye_login
var eye_login = document.getElementById("eye_login")
var eyeChange_login = document.getElementById("eyeChange_login")
//获取一下密码框usepassword_login
var usepassword_login = document.getElementById("usepassword_login")
function changeStatus_login() {
    if (usepassword_login.type == "password") {
        usepassword_login.type = "text"
        eyeChange_login.src = "./img/显示.png"

    }
    else {
        usepassword_login.type = "password"
        eyeChange_login.src = "./img/隐藏.png"
    }
}
//标题登录和注册
//点击登录时：注册页面none，登录页面block
//点击注册时：登录页面none，注册页面block
//获取登录界面
var login = document.querySelector(".login")
//获取注册界面
var register = document.querySelector(".register")
function login_to_register() {
    register.style.display = "block";
    login.style.display = "none";
}
function register_to_login() {
    login.style.display = "block";
    register.style.display = "none";
}

//记住密码部分，用localStorage永久保存
$(document).ready(function(){
    var strName = localStorage.getItem('UserName');
    var strPass = localStorage.getItem('UserPass');
    if(strName){
        $('#usercode_login').val(strName);
    }if(strPass){
        $('#usepassword_login').val(strPass);
    }

});
function loginBtn_click(){
    debugger
        var strName = $('#usercode_login').val();
        var strPass = $('#usepassword_login').val();
        localStorage.setItem('UserName',strName);
        if($('#rem').is(':checked')){
            localStorage.setItem('UserPass',strPass);
        }else{
            localStorage.removeItem('UserPass');
        }
        window.location.reload();
    }
    
>>>>>>> f19f73a (second登录和增删改查)
