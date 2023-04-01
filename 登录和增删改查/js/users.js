//显示菜单元素
function getDataPage_users(page, per_page) {
    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/users/getInfoByPage_users",
        data: {
            page,
            per_page
        },
        success: function (data) {
            let res = data.data
            //将页面数据清空
            tableBody_users.innerHTML = null;
            for (let i = 0; i < res.length; i++) {
                //将获取到的元素分别填入单元格
                tableBody_users.innerHTML +=
                    "<tr>" +
                    "<td style='display: none;'>" + res[i]._id + "</td>" +
                    "<td>" + res[i].us + "</td>" +
                    "<td>" + res[i].sex + "</td>" +
                    "<td>" + res[i].age+ "</td>" +
                    "<td>" + res[i].phone + "</td>" +
                    "<td>" + res[i].integral+ "</td>" +
                    "<td style='display: none;'>" + res[i].ps + "</td>" +
                    "<td>" +
                    //使用a标签，并绑定单击事件，点击的时候分别触发删除，修改函数
                    "<a class='del_users' href='javascript:void(0)' onclick='Delete_users(\"" + res[i]._id + "\")' >删除</a>" +
                    "<a class='mod_users' href='javascript:void(0)' onclick='Modify_users(\"" + res[i].us + "\",\"" + res[i].sex + "\",\"" + res[i].age + "\",\"" + res[i]._id + "\")' >修改</a>" +
                    "</td>" +
                    "</tr>"
            }
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
}
//调用函数，显示菜品
getDataPage_users(1, 5)

//底部换页部分

//获取  X条/页  的所有id
var fiveBar_users = document.getElementById("fiveBar_users")
var tenBar_users = document.getElementById("tenBar_users")
var fifteenBar_users = document.getElementById("fifteenBar_users")
var twentyBar_users = document.getElementById("twentyBar_users")
var tableBody_users = document.getElementById('tableBody_users')
//获取按钮PerPage_bar_users
var PerPage_bar_users = document.getElementById("PerPage_bar_users")
//获取装列表的盒子
var Select_bar_users = document.getElementById("Select_bar_users")
var changeBar_users = 5;
//点击5条/页,调用函数
// document.addEventListener('click', function () {
//     Select_bar_users.style.display = 'none'
// })
function showSelect_bar_users() {
    if (Select_bar_users.style.display == 'none' || !Select_bar_users.style.display) {
        Select_bar_users.style.display = 'block'
    } else {
        Select_bar_users.style.display = 'none'
    }
}
// PerPage_bar.removeEventListener("mousemove",function(){ Select_bar.style.display='block'});
// PerPage_bar.addEventListener('click',function(event){
//     var e=event||window.event;
//     if(e.cancelBubble){
//         e.cancelBubble=true;//ie 阻止事件冒泡
//     }else{
//         e.stopPropagation();// 其余浏览器 阻止事件冒泡
//     }
// })
// PerPage_bar.removeEventListener('click', function () { Select_bar.style.display = 'block' })
// PerPage_bar.stopPropagation();
//设置5条/页为默认选中，并设置样式
fiveBar_users.style.fontWeight = "Bold";
fiveBar_users.style.color = "rgb(70, 106, 121)";
function changeTofive_users() {
    getDataPage_users(1, 5)
    changeBar_users = 5;
    fiveBar_users.style.fontWeight = "Bold";
    fiveBar_users.style.color = "rgb(70, 106, 121)";
    PerPage_bar_users.innerHTML = "5条/页"
    tenBar_users.style.color = "black";
    tenBar_users.style.fontWeight = "normal";
    fifteenBar_users.style.color = "black";
    fifteenBar_users.style.fontWeight = "normal";
    twentyBar_users.style.color = "black";
    twentyBar_users.style.fontWeight = "normal";
    totalNum_users();//重新计算有多少有页
    //初始化显示页数的小按钮和到多少页的value为1
    input_users.value = 1;
    inputOne_users.value = 1;
    Select_bar_users.style.display = "none";//列表隐藏
}
function changeToten_users() {
    getDataPage_users(1, 10)
    changeBar_users = 10;
    tenBar_users.style.fontWeight = "Bold";
    tenBar_users.style.color = "rgb(70, 106, 121)";
    PerPage_bar_users.innerHTML = "10条/页"
    fiveBar_users.style.color = "black";
    fiveBar_users.style.fontWeight = "normal";
    fifteenBar_users.style.color = "black";
    fifteenBar_users.style.fontWeight = "normal";
    twentyBar_users.style.color = "black";
    twentyBar_users.style.fontWeight = "normal";
    totalNum_users();//重新计算有多少有页
    //初始化显示页数的小按钮和到多少页的value为1
    input_users.value = 1;
    inputOne_users.value = 1;
    Select_bar_users.style.display = "none";//列表隐藏

}
function changeTofifteen_users() {
    getDataPage_users(1, 15)
    changeBar_users = 15;
    fifteenBar_users.style.fontWeight = "Bold";
    fifteenBar_users.style.color = "rgb(70, 106, 121)";
    PerPage_bar_users.innerHTML = "15条/页"
    fiveBar_users.style.color = "black";
    fiveBar_users.style.fontWeight = "normal";
    tenBar_users.style.color = "black";
    tenBar_users.style.fontWeight = "normal";
    twentyBar_users.style.color = "black";
    twentyBar_users.style.fontWeight = "normal";
    totalNum_users();//重新计算有多少有页
    //初始化显示页数的小按钮和到多少页的value为1
    input_users.value = 1;
    inputOne_users.value = 1;
    Select_bar_users.style.display = "none";//列表隐藏

}
function changeTotwenty_users() {
    getDataPage_users(1, 20)
    changeBar_users = 20;
    twentyBar_users.style.fontWeight = "Bold";
    twentyBar_users.style.color = "rgb(70, 106, 121)";
    PerPage_bar_users.innerHTML = "20条/页"
    fiveBar_users.style.color = "black";
    fiveBar_users.style.fontWeight = "normal";
    fifteenBar_users.style.color = "black";
    fifteenBar_users.style.fontWeight = "normal";
    tenBar_users.style.color = "black";
    tenBar_users.style.fontWeight = "normal";
    totalNum_users();//重新计算有多少有页
    //初始化显示页数的小按钮和到多少页的value为1
    input_users.value = 1;
    inputOne_users.value = 1;
    Select_bar_users.style.display = "none";//列表隐藏

}
//查询菜品总数
var len_users;
//获取HTML中的sumpages
let sumpages_users = document.getElementById("sumpages_users");
function totalNum_users() {
    $.ajax({
        type: "get",
        url: "http://118.195.129.130:3000/users/allpage_users",
        params: {
        },
        success: function (data) {
            //len_users即页面中所有数据的个数
            len_users = data.pages;
            //向页面中显示 Math.ceil(len_users / changeBar_users)，除于changeBar_users，向上取整，即为总页数
            sumpages_users.innerHTML = Math.ceil(len_users / changeBar_users);
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
}
//在这儿调用显示共多少页的函数，保证页面显示时，页数就能显示出来
totalNum_users()
//获取HTML中第X页和左右按钮中间按钮的表单，
//因为两者的页数是同步的
//要使用表单中属性value
let inputOne_users = document.getElementById('inOne_users')
let input_users = document.getElementById('in_users')
//获取左右按钮
var leftBtn_users=document.getElementById("leftBtn_users")
var rightBtn_users=document.getElementById("rightBtn_users")
document.getElementById("leftBtn_users").onclick = function () {
    let num_users = Number(input_users.value)
    num_users--
    if (num_users < 1) {
        //当页数为1时，鼠标光标显示禁用
        leftBtn_users.style.cursor = "no-drop";
    }
    else {
        getDataPage_users(num_users, changeBar_users)
        input_users.value = num_users
        inputOne_users.value = num_users
    }
}
document.getElementById("rightBtn_users").onclick = function () {
    //当页数为最大时，鼠标光标显示禁用
    let num_users = Number(input_users.value)
    num_users++
    if (num_users > Math.ceil(len_users / changeBar_users)) {
        rightBtn_users.style.cursor = "no-drop";
    }
    else {
        getDataPage_users(num_users, changeBar_users)
        input_users.value = num_users
        inputOne_users.value = num_users
    }
}
//到指定的那一页
//点击go调用的函数
function goPage_users() {
    var RegPage_users = /^[1-9]\d*$/;
    if (RegPage_users.test(input_users.value) && input_users.value <= Math.ceil(len_users / changeBar_users)) {
        getDataPage_users(input_users.value, changeBar_users)
        inputOne_users.value = input_users.value
    }
    else input_users.value = inputOne_users.value

}

//模糊查询
//在HTML中为查询绑定了一个searchShow_users()函数
//点击时，弹出查询窗口，确认后查看查询结果
let searchData_users = document.querySelector(".searchData_users")
function searchShow_users() {
    searchData_users.style.display = "block";
    zhezhao.style.display = "block";
}
//点击弹窗中的查询，实现接口
var searchContent_users = document.getElementById('searchContent_users')
function confirmSearchBtn_users() {
    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/users/getInfoByKw_users",
        data: {
            kw: searchContent_users.value
        },
        success: function (data) {
            let res = data.data
            tableBody_users.innerHTML = ""
            for (let i = 0; i < res.length; i++) {
                //将获取到的元素分别填入单元格
                tableBody_users.innerHTML +=
                "<tr>" +
                "<td style='display: none;'>" + res[i]._id + "</td>" +
                "<td>" + res[i].us + "</td>" +
                "<td>" + res[i].sex + "</td>" +
                "<td>" + res[i].age+ "</td>" +
                "<td>" + res[i].phone + "</td>" +
                "<td>" + res[i].integral+ "</td>" +
                "<td style='display: none;'>" + res[i].ps + "</td>" +
                "<td>" +
                //使用a标签，并绑定单击事件，点击的时候分别触发删除，修改函数
                "<a class='del_users' href='javascript:void(0)' onclick='Delete_users(\"" + res[i]._id + "\")' >删除</a>" +
                "<a class='mod_users' href='javascript:void(0)' onclick='Modify_users(\"" + res[i].us + "\",\"" + res[i].sex + "\",\"" + res[i].age + "\",\"" + res[i]._id + "\")' >修改</a>" +
                "</td>" +
                "</tr>"
            }
            if (data.data == "") {
                alert("菜单中没有该菜品和相应的描述")
                getDataPage_users(1, changeBar_users)
            }
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
    searchData_users.style.display = "none";
    zhezhao.style.display = "none";
}
//重置页面
function resetShow_users() {
    getDataPage_users(1, changeBar_users)
}

//遮罩获取一下
var zhezhao = document.getElementById("zhezhao")

// 删除用户
var del_users = document.querySelector(".del_users")
function Delete_users(id) {
    if (confirm("你确定要删除用户吗？删除后不可恢复") == true) {
        $.ajax({
            type: "post",
            url: "http://118.195.129.130:3000/users/del_users",
            data: {
                _id: id,
            },
            success: function (data) {
                totalNum_users()
                getDataPage_users(1, changeBar_users)
                alert("删除成功！")
            },
            error: function (err) {
                console.log("操作失败！")
            }
        });
    }
}

//修改用户
var mod_users = document.querySelector(".mod_users")//获取a标签
var modData_users = document.querySelector(".modData_users")//获取修改弹窗
//获取表单的id
var modname_users = document.querySelector("#name_users")
var modage_users = document.querySelector("#age_users")
var modsex_users = document.querySelector("#sex_users")
var mod_id_users = document.querySelector("#_id_users")
function Modify_users(us,sex,age,_id) {
    //点击修改时，传参并让修改弹窗显示
    modData_users.style.display = "block";
    zhezhao.style.display = "block";
    // 两个名字一样,就可能认为是一个变量
    //避免出现name.value=name的情况
    //将菜品原本的信息传入
        mod_id_users.value = _id,
       modname_users.value = us,
        modage_users.value = age,
        modsex_users.value = sex
        // console.log(us)
}

//为弹窗中的修改绑定一个单击函数，点击时，弹窗消失
function confirmModBtn_users() {
    if (modname_users.value != ""  && modage_users.value != "" && modsex_users.value != "" && (modsex_users.value == 0 || modsex_users.value == 1 )) {
        $.ajax({
            type: "post",
            url: "http://118.195.129.130:3000/users/update_users",
            data: {
                _id: mod_id_users.value,
                us:modname_users.value,
                age: modage_users.value,
                sex: modsex_users.value,
            },
            success: function (data) {
                getDataPage_users(inputOne_users.value, changeBar_users)
                alert("修改成功！")
            },
            error: function (err) {
                console.log("操作失败！")
            }
        });
        modData_users.style.display = "none";
        zhezhao.style.display = "none";
    }
    if (modname_users.value == "") { modname_users.style.borderColor = "red"; }
    if (modage_users.value == "") { modage_users.style.borderColor = "red"; }
    if (modsex_users.value == "" || (modsex_users.value != 0 && modsex_users.value != 1 )) { modsex_users.style.borderColor = "red"; }
    function RemoveRed_mod_users() {
        setTimeout(function () { modname_users.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { modage_users.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { modsex_users.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
    }
    RemoveRed_mod_users();
}
//为所有取消按钮绑定一个使弹窗隐藏的函数
function cancelBtn_users() {
    modData_users.style.display = "none";
    searchData_users.style.display = "none";
    zhezhao.style.display = "none";
}
