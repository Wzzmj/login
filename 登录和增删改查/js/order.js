//显示订单元素
function getDataPage_order(page, per_page) {
    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/order/getInfoByPage_order",
        data: {
            page,
            per_page
        },
        success: function (data) {
            let res = data.data
            //将页面数据清空
            tableBody_order.innerHTML = null;
            for (let i = 0; i < res.length; i++) {
                //将获取到的元素分别填入单元格
                tableBody_order.innerHTML +=
                    "<tr>" +
                    "<td style='display: none;'>" + res[i]._id + "</td>" +
                    "<td>" + res[i].us + "</td>" +
                    "<td>" + res[i].amount + "</td>" +
                    "<td>" + res[i].phone + "</td>" +
                    "<td>" + res[i].pay + "</td>" +
                    "<td>" + res[i].time + "</td>" +
                    "<td style='display: none;'>" + res[i].ps + "</td>" +
                    "<td>" +
                    //使用a标签，并绑定单击事件，点击的时候分别触发删除，修改函数
                    "<a class='del_order' href='javascript:void(0)' onclick='Delete_order(\"" + res[i]._id + "\")' >删除</a>" +
                    "<a class='mod_order' href='javascript:void(0)' onclick='Modify_order(\"" + res[i].us + "\",\"" + res[i].amount + "\",\"" + res[i].phone + "\",\"" + res[i].pay + "\",\"" + res[i]._id + "\")' >修改</a>" +
                    "</td>" +
                    "</tr>"
            }
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
}
//调用函数，显示订单
getDataPage_order(1, 5)
//底部换页部分

//获取  X条/页  的所有id
var fiveBar_order = document.getElementById("fiveBar_order")
var tenBar_order = document.getElementById("tenBar_order")
var fifteenBar_order = document.getElementById("fifteenBar_order")
var twentyBar_order = document.getElementById("twentyBar_order")
var tableBody_order = document.getElementById('tableBody_order')
//获取按钮PerPage_bar_users
var PerPage_bar_order = document.getElementById("PerPage_bar_order")
//获取装列表的盒子
var Select_bar_order = document.getElementById("Select_bar_order")
var changeBar_order = 5;
//点击5条/页,调用函数
// document.addEventListener('click', function () {
//     Select_bar_users.style.display = 'none'
// })
function showSelect_bar_order() {
    if (Select_bar_order.style.display == 'none' || !Select_bar_order.style.display) {
        Select_bar_order.style.display = 'block'
    } else {
        Select_bar_order.style.display = 'none'
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
fiveBar_order.style.fontWeight = "Bold";
fiveBar_order.style.color = "rgb(70, 106, 121)";
function changeTofive_order() {
    getDataPage_order(1, 5)
    changeBar_order = 5;
    fiveBar_order.style.fontWeight = "Bold";
    fiveBar_order.style.color = "rgb(70, 106, 121)";
    PerPage_bar_order.innerHTML = "5条/页"
    tenBar_order.style.color = "black";
    tenBar_order.style.fontWeight = "normal";
    fifteenBar_order.style.color = "black";
    fifteenBar_order.style.fontWeight = "normal";
    twentyBar_order.style.color = "black";
    twentyBar_order.style.fontWeight = "normal";
    totalNum_order();//重新计算有多少有页
    //初始化显示页数的小按钮和到多少页的value为1
    input_order.value = 1;
    inputOne_order.value = 1;
    Select_bar_order.style.display = "none";//列表隐藏
}
function changeToten_order() {
    getDataPage_order(1, 10)
    changeBar_order = 10;
    tenBar_order.style.fontWeight = "Bold";
    tenBar_order.style.color = "rgb(70, 106, 121)";
    PerPage_bar_order.innerHTML = "10条/页"
    fiveBar_order.style.color = "black";
    fiveBar_order.style.fontWeight = "normal";
    fifteenBar_order.style.color = "black";
    fifteenBar_order.style.fontWeight = "normal";
    twentyBar_order.style.color = "black";
    twentyBar_order.style.fontWeight = "normal";
    totalNum_order();//重新计算有多少有页
    //初始化显示页数的小按钮和到多少页的value为1
    input_order.value = 1;
    inputOne_order.value = 1;
    Select_bar_order.style.display = "none";//列表隐藏

}
function changeTofifteen_order() {
    getDataPage_order(1, 15)
    changeBar_order = 15;
    fifteenBar_order.style.fontWeight = "Bold";
    fifteenBar_order.style.color = "rgb(70, 106, 121)";
    PerPage_bar_order.innerHTML = "15条/页"
    fiveBar_order.style.color = "black";
    fiveBar_order.style.fontWeight = "normal";
    tenBar_order.style.color = "black";
    tenBar_order.style.fontWeight = "normal";
    twentyBar_order.style.color = "black";
    twentyBar_order.style.fontWeight = "normal";
    totalNum_order();//重新计算有多少有页
    //初始化显示页数的小按钮和到多少页的value为1
    input_order.value = 1;
    inputOne_order.value = 1;
    Select_bar_order.style.display = "none";//列表隐藏

}
function changeTotwenty_order() {
    getDataPage_order(1, 20)
    changeBar_order = 20;
    twentyBar_order.style.fontWeight = "Bold";
    twentyBar_order.style.color = "rgb(70, 106, 121)";
    PerPage_bar_order.innerHTML = "20条/页"
    fiveBar_order.style.color = "black";
    fiveBar_order.style.fontWeight = "normal";
    fifteenBar_order.style.color = "black";
    fifteenBar_order.style.fontWeight = "normal";
    tenBar_order.style.color = "black";
    tenBar_order.style.fontWeight = "normal";
    totalNum_order();//重新计算有多少有页
    //初始化显示页数的小按钮和到多少页的value为1
    input_order.value = 1;
    inputOne_order.value = 1;
    Select_bar_order.style.display = "none";//列表隐藏

}
//查询菜品总数
var len_order;
//获取HTML中的sumpages
let sumpages_order = document.getElementById("sumpages_order");
function totalNum_order() {
    $.ajax({
        type: "get",
        url: "http://118.195.129.130:3000/order/allpage_order",
        params: {
        },
        success: function (data) {
            //len_users即页面中所有数据的个数
            len_order = data.pages;
            //向页面中显示 Math.ceil(len_order / changeBar_order)，除于changeBar_order，向上取整，即为总页数
            sumpages_order.innerHTML = Math.ceil(len_order / changeBar_order);
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
}
//在这儿调用显示共多少页的函数，保证页面显示时，页数就能显示出来
totalNum_order()
//获取HTML中第X页和左右按钮中间按钮的表单，
//因为两者的页数是同步的
//要使用表单中属性value
let inputOne_order = document.getElementById('inOne_order')
let input_order = document.getElementById('in_order')
//获取左右按钮
var leftBtn_order = document.getElementById("leftBtn_order")
var rightBtn_order = document.getElementById("rightBtn_order")
document.getElementById("leftBtn_order").onclick = function () {
    let num_order = Number(input_order.value)
    num_order--
    if (num_order < 1) {
        //当页数为1时，鼠标光标显示禁用
        leftBtn_order.style.cursor = "no-drop";
    }
    else {
        getDataPage_order(num_order, changeBar_order)
        input_order.value = num_order
        inputOne_order.value = num_order
    }
}
document.getElementById("rightBtn_order").onclick = function () {
    //当页数为最大时，鼠标光标显示禁用
    let num_order = Number(input_order.value)
    num_order++
    if (num_order > Math.ceil(len_order / changeBar_order)) {
        rightBtn_order.style.cursor = "no-drop";
    }
    else {
        getDataPage_order(num_order, changeBar_order)
        input_order.value = num_order
        inputOne_order.value = num_order
    }
}
//到指定的那一页
//点击go调用的函数
function goPage_order() {
    var RegPage_order = /^[1-9]\d*$/;
    if (RegPage_order.test(input_order.value) && input_order.value <= Math.ceil(len_order / changeBar_order)) {
        getDataPage_order(input_order.value, changeBar_order)
        inputOne_order.value = input_order.value
    }
    else input_order.value = inputOne_order.value

}

//模糊查询
//在HTML中为查询绑定了一个searchShow_order()函数
//点击时，弹出查询窗口，确认后查看查询结果
let searchData_order = document.querySelector(".searchData_order")
function searchShow_order() {
    searchData_order.style.display = "block";
    zhezhao.style.display = "block";
}
//点击弹窗中的查询，实现接口
var searchContent_order = document.getElementById('searchContent_order')
function confirmSearchBtn_order() {
    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/order/getInfoByKw_order",
        data: {
            kw: searchContent_order.value
        },
        success: function (data) {
            let res = data.data
            tableBody_order.innerHTML = ""
            for (let i = 0; i < res.length; i++) {
                //将获取到的元素分别填入单元格
                tableBody_order.innerHTML +=
                    "<tr>" +
                    "<td style='display: none;'>" + res[i]._id + "</td>" +
                    "<td>" + res[i].us + "</td>" +
                    "<td>" + res[i].amount + "</td>" +
                    "<td>" + res[i].phone + "</td>" +
                    "<td>" + res[i].pay + "</td>" +
                    "<td>" + res[i].time + "</td>" +
                    "<td style='display: none;'>" + res[i].ps + "</td>" +
                    "<td>" +
                    //使用a标签，并绑定单击事件，点击的时候分别触发删除，修改函数
                    "<a class='del_order' href='javascript:void(0)' onclick='Delete_order(\"" + res[i]._id + "\")' >删除</a>" +
                    "<a class='mod_order' href='javascript:void(0)' onclick='Modify_order(\"" + res[i].us + "\",\"" + res[i].amount + "\",\"" + res[i].phone + "\",\"" + res[i].pay + "\",\"" + res[i]._id + "\")' >修改</a>" +
                    "</td>" +
                    "</tr>"
            }
            if (data.data == "") {
                alert("菜单中没有该菜品和相应的描述")
                getDataPage_order(1, changeBar_order)
            }
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
    searchData_order.style.display = "none";
    zhezhao.style.display = "none";
}
//重置页面
function resetShow_order() {
    getDataPage_order(1, changeBar_order)
}

//遮罩获取一下
var zhezhao = document.getElementById("zhezhao")
// 删除订单
var del_order = document.querySelector(".del_order")
function Delete_order(id) {
    if (confirm("你确定要删除订单吗？删除后不可恢复") == true) {
        $.ajax({
            type: "post",
            url: "http://118.195.129.130:3000/order/del_order",
            data: {
                _id: id,
            },
            success: function (data) {
                totalNum_order()
                getDataPage_order(1, changeBar_order)
                alert("删除成功！")
            },
            error: function (err) {
                console.log("操作失败！")
            }
        });
    }
}
//修改用户
var mod_order = document.querySelector(".mod_order")//获取a标签
var modData_order = document.querySelector(".modData_order")//获取修改弹窗
//获取表单的id
var modname_order = document.querySelector("#name_order")
var modamount_order = document.querySelector("#amount_order")
var modphone_order = document.querySelector("#phone_order")
var modpay_order = document.querySelector("#pay_order")
var mod_id_order = document.querySelector("#_id_order")
function Modify_order(us, amount, phone, pay, _id) {
    //点击修改时，传参并让修改弹窗显示
    modData_order.style.display = "block";
    zhezhao.style.display = "block";
    // 两个名字一样,就可能认为是一个变量
    //避免出现name.value=name的情况
    //将菜品原本的信息传入
    mod_id_order.value = _id,
        modname_order.value = us,
        modamount_order.value = amount,
        modphone_order.value = phone,
        modpay_order.value = pay
    // console.log(us)
}

//为弹窗中的修改绑定一个单击函数，点击时，弹窗消失          !(/^1[3456789]d{9}$/.test(modphone_order.value))
function confirmModBtn_order() {
    var regOrder = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
    if (mod_id_order.value != "" && modname_order.value != "" && modamount_order.value != "" && modphone_order.value != "" && regOrder.test(modphone_order.value) && (modpay_order.value == 0 || modpay_order.value == 1)) {
        console.log("=======>");
        $.ajax({
            type: "post",
            url: "http://118.195.129.130:3000/order/update_order",
            data: {
                _id: mod_id_order.value,
                us: modname_order.value,
                amount: modamount_order.value,
                phone: modphone_order.value,
                pay: modpay_order.value
            },
            success: function (data) {
                getDataPage_order(inputOne_order.value, changeBar_order)
                alert("修改成功！")
            },
            error: function (err) {
                console.log("操作失败！")
            }
        });
        modData_order.style.display = "none";
        zhezhao.style.display = "none";
    }
    if (modname_order.value == "") { modname_order.style.borderColor = "red"; }
    if (modamount_order.value == "") { modamount_order.style.borderColor = "red"; }
    if (modphone_order.value == "" || !(regOrder.test(modphone_order.value))) { modphone_order.style.borderColor = "red"; }
    if (modpay_order.value == "" || (modpay_order.value != 0 && modpay_order.value != 1)) { modpay_order.style.borderColor = "red"; }
    function RemoveRed_mod_order() {
        setTimeout(function () { modname_order.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { modamount_order.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { modphone_order.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { modpay_order.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
    }
    RemoveRed_mod_order();
}
//为所有取消按钮绑定一个使弹窗隐藏的函数
function cancelBtn_order() {
    modData_order.style.display = "none";
    searchData_order.style.display = "none";
    zhezhao.style.display = "none";
}

//获取添加窗口
var addData_order = document.querySelector(".addData_order")
//在HTML中为新建绑定了一个函数，点击新建时，显示addData的弹窗
function addShow_order() {
    addData_order.style.display = "block";
    zhezhao.style.display = "block";
}
//获取一下添加弹窗中的所有表单的id
var addname_order = document.querySelector("#addname_order")
var addamount_order = document.querySelector("#addamount_order")
var addphone_order = document.querySelector("#addphone_order")
var addpay_order = document.querySelector("#addpay_order")
// var add_id_order = document.querySelector("#add_id_order")
// var add_id= document.querySelector("#add_id")
//为弹窗中的添加绑定一个单击函数，点击时实现功能，弹窗消失
function confirmAddBtn_order() {
    if (addname_order.value != "" && addamount_order.value != "" && addphone_order.value != "" && /^1[3456789]d{9}$/.test(addphone_order.value) && (addpay_order.value == 0 || addpay_order.value == 1)) {
        $.ajax({
            type: "post",
            url: "http://118.195.129.130:3000/order/add_order",
            data: {
                // _id: mod_id_order.value,
                us: addname_order.value,
                amount: addamount_order.value,
                phone: addphone_order.value,
                pay: addpay_order.value
            },
            success: function (data) {
                totalNum_order()
                getDataPage_order(1, changeBar_order)
                console.log("添加成功")
                alert("添加成功！")
            },
            error: function (err) {
                console.log("操作失败！")
            }
        });
        addData_order.style.display = "none";
        zhezhao.style.display = "none";
    }
    if (addname_order.value == "") { addname_order.style.borderColor = "red"; }
    if (addamount_order.value == "") { addamount_order.style.borderColor = "red"; }
    if (addphone_order.value == "" || !(/^1[3456789]d{9}$/.test(addphone_order.value))) { addphone_order.style.borderColor = "red"; }
    if (addpay_order.value == "" || (addpay_order.value != 0 && addpay_order.value != 1)) { addpay_order.style.borderColor = "red"; }
    function RemoveRed_add_order() {
        setTimeout(function () { addname_order.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { addamount_order.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { addphone_order.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { addpay_order.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
    }
    RemoveRed_add_order();
}
