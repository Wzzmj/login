var count = 0;
//获取所有表单内容
var usercode_register = document.getElementById('usercode_register')
var usepassword_register = document.getElementById('usepassword_register')
var mailcode_register = document.getElementById("mailcode_register")
var safecode_register = document.getElementById("safecode_register")
//获取元素，显示格式不对的元素
var usercode_register_check = document.getElementById("usercode_register_check")
var passwordcode_register_check = document.getElementById("passwordcode_register_check")
var mailcode_register_check = document.getElementById("mailcode_register_check")
//判断用户名格式是否正确
function checkUserCode() {
    var UsernameReg = /^[\u4e00-\u9fa5a-zA-Z0-9]{6,12}$/;
    var userNameCheck = usercode_register.value.trim();
    //格式正确和内容为空时，都不显示
    if (UsernameReg.test(userNameCheck) || userNameCheck == "") {
        usercode_register_check.style.display = "none"
        usercode_register.style.borderColor = "#e1e1e1"
    }
    else {
        usercode_register_check.style.display = "block"
        usercode_register.style.borderColor = "red"
    }
}
//判断密码格式是否正确
function checkPsCode() {
    var passWordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var passWordCheck = usepassword_register.value.trim();
    //格式正确和内容为空时，都不显示
    if (passWordReg.test(passWordCheck) || passWordCheck == "") {
        passwordcode_register_check.style.display = "none"
        usepassword_register.style.borderColor = "#e1e1e1"
    }
    else {
        passwordcode_register_check.style.display = "block"
        usepassword_register.style.borderColor = "red"
    }
}
//判断邮箱格式是否正确
var flag;//用于后面点击发送是否做出回应
function checkMailCode() {
    var mailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
    var mailCheck = mailcode_register.value.trim();
    //格式正确和内容为空时，都不显示
    if (mailReg.test(mailCheck) || mailCheck == "") {
        mailcode_register_check.style.display = "none"
        mailcode_register.style.borderColor = "#e1e1e1"
        flag = mailReg.test(mailCheck)
    }
    else {
        mailcode_register_check.style.display = "block"
        mailcode_register.style.borderColor = "red"
        flag = false;
    }
}


function registerBtn() {
    //点击注册按钮，但是表单中有内容为空的时候，框框变红
    function showUserRed_register() {
        if (usercode_register.value == "") {
            usercode_register.style.borderColor = "red"
        }
        else {
            usercode_register.style.borderColor = "#e1e1e1"
        }
    }
    function showPsRed_register() {
        if (usepassword_register.value == "") {
            usepassword_register.style.borderColor = "red"
        }
        else {
            usepassword_register.style.borderColor = "#e1e1e1"
        }
    }
    function showMailRed_register() {
        if (mailcode_register.value == "") {
            mailcode_register.style.borderColor = "red"
        }
        else {
            mailcode_register.style.borderColor = "#e1e1e1"
        }
    }
    //恢复原来的颜色
    function recoverColor_register() {
        setTimeout(function () { usercode_register.style.borderColor = "#e1e1e1" }, 5000)
        setTimeout(function () { usepassword_register.style.borderColor = "#e1e1e1" }, 5000)
        setTimeout(function () { mailcode_register.style.borderColor = "#e1e1e1" }, 5000)
    }
    showUserRed_register();
    showPsRed_register();
    showMailRed_register();
    recoverColor_register();
    $.ajax({
        type: "POST",
        url: "http://118.195.129.130:3000/user/reg",
        dataType: "JSON",
        data: {
            us: usercode_register.value,
            ps: usepassword_register.value,
            mail: mailcode_register.value,
            code: safecode_register.value
        },
        success: function () {
            
        },
        error: function () {
            console.log("操作失败！")

        }
    })
}



//改变密码显示与隐藏的功能
//获取一下眼睛eye_register
var eye_register = document.getElementById("eye_register")
var eyeChange_register = document.getElementById("eyeChange_register")
//获取一下密码框usepassword_register
var usepassword_register = document.getElementById("usepassword_register")
function changeStatus_register() {
    if (usepassword_register.type == "password") {
        usepassword_register.type = "text"
        eyeChange_register.src = "./img/显示.png"

    }
    else {
        usepassword_register.type = "password"
        eyeChange_register.src = "./img/隐藏.png"
    }
}




//验证码部分     
//点击发送按钮，倒计时60s
//遮罩层出现，验证码不为空时，遮罩层消失
//先获取遮罩层
var zhezhao_register = document.getElementById("zhezhao_register")
var sendcode_register = document.getElementById("sendcode_register")
var safeReg = /^\d{4}$/;
var safecode = safecode_register.value.trim();
var waitTime = 60;
function countDown() {
    if (flag) {
        time();

    }
}

function time() {
    if (waitTime == 0) {
        sendcode_register.disabled = false;
        sendcode_register.innerHTML = "发送";
        waitTime = 60;// 恢复计时
        sendcode_register.style.backgroundColor = " #67b7e5";
        sendcode_register.style.cursor='pointer';

    } else {
        sendcode_register.disabled = true;
        sendcode_register.innerHTML = waitTime + "秒后重试";
        waitTime--;
        setTimeout(function () {
            time()// 关键处-定时循环调用
        }, 1000)
        sendcode_register.style.backgroundColor = "#c1e1f3";
        sendcode_register.style.cursor='no-drop';
    }
}

//获取一下发送验证码失败后显示的区域
var fail_sendcode = document.getElementById("fail_sendcode")
// fail_sendcode.innerHTML = "发送失败，请稍后重试！"
function sendCodeFunc() {
    console.log("111");
    if (flag) {
        $.ajax({
            type: "POST",
            url: "http://118.195.129.130:3000/user/getMailCode",
            dataType: "JSON",
            data: {
                mail: mailcode_register
            },
            success: function (result) {
                if (result.msg == '发送失败，请稍后再试') {
                    fail_sendcode.innerHTML = "发送失败，请稍后再试"
                }
                else{
                }
            },
            error: function () {
                console.log("操作失败")

            }
        })
    }
}
