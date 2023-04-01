//显示菜单元素
<<<<<<< HEAD
var tableBody = document.getElementById('tableBody')
=======
>>>>>>> f19f73a (second登录和增删改查)
function getDataPage(page, per_page) {
    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/food/getInfoByPage",
        data: {
            page,
            per_page
        },
        success: function (data) {
            let res = data.data
<<<<<<< HEAD
             //将页面数据清空
=======
            //将页面数据清空
>>>>>>> f19f73a (second登录和增删改查)
            tableBody.innerHTML = null;
            for (let i = 0; i < res.length; i++) {
                //将获取到的元素分别填入单元格
                tableBody.innerHTML +=
                    "<tr>" +
                    "<td style='display: none;'>" + res[i]._id + "</td>" +
<<<<<<< HEAD
                    "<td>" + res[i].name + "</td>" +
=======
                    "<td>" + res[i].name.replace(/<[^<>]+>/g,"") + "</td>" +
>>>>>>> f19f73a (second登录和增删改查)
                    "<td>" + res[i].price + "</td>" +
                    "<td>" + res[i].desc + "</td>" +
                    "<td>" + res[i].typename + "</td>" +
                    // "<td>" + res[i].typeid + "</td>" +
                    "<td>" +
                    //使用a标签，并绑定单击事件，点击的时候分别触发删除，修改函数
                    "<a class='del' href='javascript:void(0)' onclick='Delete(\"" + res[i]._id + "\")' >删除</a>" +
                    "<a class='mod' href='javascript:void(0)' onclick='Modify(\"" + res[i].name + "\",\"" + res[i].price + "\",\"" + res[i].desc + "\",\"" + res[i].typename + "\",\"" + res[i].typeid + "\",\"" + res[i]._id + "\")' >修改</a>" +
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
getDataPage(1, 5)
<<<<<<< HEAD

//查询菜品总数
var len;
//获取HTML中的sumpages
let sumpages = document.getElementById("sumpages");
function totalNum() {
    $.ajax({
        type: "get",
        url: "http://118.195.129.130:3000/food/allpage",
        dataparams: {
        },
        success: function (data) {
            //len即页面中所有数据的个数
            len = data.pages;
            //向页面中显示 Math.ceil(len / 5)，除与5，向上取整，即为总页数
            sumpages.innerHTML = Math.ceil(len / 5);
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
}
//在这儿调用显示共多少页的函数，保证页面显示时，页数就能显示出来
totalNum()

//获取HTML中第X页和左右按钮中间按钮的表单，
//因为两者的页数是同步的
//要使用表单中属性value
let input = document.getElementById('in')
let inputOne = document.getElementById('inOne')
document.getElementById("leftBtn").onclick = function () {
    let num=Number(input.value)
    num--
    if (num < 1) {
        //当页数为1时，鼠标光标显示禁用
        leftBtn.style.cursor = "no-drop";
    }
    else{
        getDataPage(num,5)
        input.value=num
        inputOne.value=num
    }

}
document.getElementById("rightBtn").onclick = function () {
    //当页数为最大时，鼠标光标显示禁用
    let num=Number(input.value)
    num++
    if (num > Math.ceil(len / 5)) {
        rightBtn.style.cursor = "no-drop";
    }
    else{
        getDataPage(num,5)
         input.value=num
        inputOne.value=num
    }
       
}

=======
//获取  X条/页  的所有id
var fiveBar = document.getElementById("fiveBar")
var tenBar = document.getElementById("tenBar")
var fifteenBar = document.getElementById("fifteenBar")
var twentyBar = document.getElementById("twentyBar")
var tableBody = document.getElementById('tableBody')
//获取按钮PerPage_bar
var PerPage_bar = document.getElementById("PerPage_bar")
//获取装列表的盒子
var Select_bar = document.getElementById("Select_bar")
var changeBar = 5;
//点击5条/页,调用函数
// document.addEventListener('click', function () {
//     Select_bar.style.display = 'none'
// })
function showSelect_bar() {
    if (Select_bar.style.display == 'none' || !Select_bar.style.display) {
        Select_bar.style.display = 'block'
    } else {
        Select_bar.style.display = 'none'
    }
}
// PerPage_bar.removeEventListener("mousemove",function(){ Select_bar.style.display='block'});
PerPage_bar.addEventListener('click',function(event){
    var e=event||window.event;
    if(e.cancelBubble){
        e.cancelBubble=true;//ie 阻止事件冒泡
    }else{
        e.stopPropagation();// 其余浏览器 阻止事件冒泡
    }
})
// PerPage_bar.removeEventListener('click', function () { Select_bar.style.display = 'block' })
// PerPage_bar.stopPropagation();
//设置5条/页为默认选中，并设置样式
fiveBar.style.fontWeight = "Bold";
fiveBar.style.color = "rgb(70, 106, 121)";
function changeTofive() {
    getDataPage(1, 5)
    changeBar = 5;
    fiveBar.style.fontWeight = "Bold";
    fiveBar.style.color = "rgb(70, 106, 121)";
    PerPage_bar.innerHTML = "5条/页"
    tenBar.style.color = "black";
    tenBar.style.fontWeight = "normal";
    fifteenBar.style.color = "black";
    fifteenBar.style.fontWeight = "normal";
    twentyBar.style.color = "black";
    twentyBar.style.fontWeight = "normal";
    totalNum();//重新计算有多少有页
    //初始化显示页数的小按钮和到多少页的value为1
    input.value = 1;
    inputOne.value = 1;
    Select_bar.style.display = "none";//列表隐藏
}
function changeToten() {
    getDataPage(1, 10)
    changeBar = 10;
    tenBar.style.fontWeight = "Bold";
    tenBar.style.color = "rgb(70, 106, 121)";
    PerPage_bar.innerHTML = "10条/页"
    fiveBar.style.color = "black";
    fiveBar.style.fontWeight = "normal";
    fifteenBar.style.color = "black";
    fifteenBar.style.fontWeight = "normal";
    twentyBar.style.color = "black";
    twentyBar.style.fontWeight = "normal";
    totalNum();//重新计算有多少有页
    //初始化显示页数的小按钮和到多少页的value为1
    input.value = 1;
    inputOne.value = 1;
    Select_bar.style.display = "none";//列表隐藏

}
function changeTofifteen() {
    getDataPage(1, 15)
    changeBar = 15;
    fifteenBar.style.fontWeight = "Bold";
    fifteenBar.style.color = "rgb(70, 106, 121)";
    PerPage_bar.innerHTML = "15条/页"
    fiveBar.style.color = "black";
    fiveBar.style.fontWeight = "normal";
    tenBar.style.color = "black";
    tenBar.style.fontWeight = "normal";
    twentyBar.style.color = "black";
    twentyBar.style.fontWeight = "normal";
    totalNum();//重新计算有多少有页
    //初始化显示页数的小按钮和到多少页的value为1
    input.value = 1;
    inputOne.value = 1;
    Select_bar.style.display = "none";//列表隐藏

}
function changeTotwenty() {
    getDataPage(1, 20)
    changeBar = 20;
    twentyBar.style.fontWeight = "Bold";
    twentyBar.style.color = "rgb(70, 106, 121)";
    PerPage_bar.innerHTML = "20条/页"
    fiveBar.style.color = "black";
    fiveBar.style.fontWeight = "normal";
    fifteenBar.style.color = "black";
    fifteenBar.style.fontWeight = "normal";
    tenBar.style.color = "black";
    tenBar.style.fontWeight = "normal";
    totalNum();//重新计算有多少有页
    //初始化显示页数的小按钮和到多少页的value为1
    input.value = 1;
    inputOne.value = 1;
    Select_bar.style.display = "none";//列表隐藏

}
>>>>>>> f19f73a (second登录和增删改查)


// 删除菜品
var del = document.querySelector(".del")
function Delete(id) {
    if (confirm("你确定要删除吗？") == true) {
        $.ajax({
            type: "post",
            url: "http://118.195.129.130:3000/food/del",
            data: {
                _id: id,
            },
            success: function (data) {
<<<<<<< HEAD
                totalNum() 
                getDataPage(1, 5)
=======
                totalNum()
                getDataPage(1, changeBar)
                alert("删除成功！")
>>>>>>> f19f73a (second登录和增删改查)
            },
            error: function (err) {
                console.log("操作失败！")
            }
        });
    }
}


//修改菜单
var mod = document.querySelector(".mod")//获取a标签
var modData = document.querySelector(".modData")//获取修改弹窗
//获取表单的id
<<<<<<< HEAD
var name1 = document.querySelector("#name")
var price1 = document.querySelector("#price")
var desc1 = document.querySelector("#desc")
var typename1 = document.querySelector("#typename")
var typeid1 = document.querySelector("#typeid")
var _id1= document.querySelector("#_id")
function Modify(name, price, desc, typename, typeid, _id) {
//点击修改时，传参并让修改弹窗显示
modData.style.display = "block";
// 两个名字一样,就可能认为是一个变量
//避免出现name.value=name的情况
//将菜品原本的信息传入
    name1.value = name,
        price1.value = price,
        desc1.value = desc,
        typename1.value = typename,
        typeid1.value = typeid,
        _id1.value = _id
}
//为所有取消按钮绑定一个使弹窗隐藏的函数
//添加窗口还没有获取过，在这里获取一下
var addData = document.querySelector(".addData")
function cancelBtn() {
    modData.style.display = "none";
    addData.style.display = "none";
    searchData.style.display = "none";
}

//为弹窗中的修改绑定一个单击函数，点击时，弹窗消失
function confirmModBtn() {
    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/food/update",
        data: {
            name: name1.value,
            price:price1.value,
            desc:desc1.value,
            typename:typename1.value,
            typeid:typeid1.value,
            _id:_id1.value,
        },
        success: function (data) {
            getDataPage(1, 5)
            console.log("修改成功")
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
    modData.style.display = "none";

=======
var modname = document.querySelector("#name")
var modprice = document.querySelector("#price")
var moddesc = document.querySelector("#desc")
var modtypename = document.querySelector("#typename")
var modtypeid = document.querySelector("#typeid")
var mod_id = document.querySelector("#_id")
function Modify(name, price, desc, typename, typeid, _id) {
    //点击修改时，传参并让修改弹窗显示
    modData.style.display = "block";
    zhezhao.style.display = "block";
    // 两个名字一样,就可能认为是一个变量
    //避免出现name.value=name的情况
    //将菜品原本的信息传入
    modname.value = name,
        modprice.value = price,
        moddesc.value = desc,
        modtypename.value = typename,
        modtypeid.value = typeid,
        mod_id.value = _id
}

//为弹窗中的修改绑定一个单击函数，点击时，弹窗消失  !(!(/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(addprice.value)))
function confirmModBtn() {
    if (modname.value != "" && modprice.value != "" && !(/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(addprice.value)) && moddesc.value != "" && modtypename.value != "" && (modtypeid.value == 0 || modtypeid.value == 1 || modtypeid.value == 2 || modtypeid.value == 3) && modtypeid.value != "") {
        $.ajax({
            type: "post",
            url: "http://118.195.129.130:3000/food/update",
            data: {
                name: modname.value,
                price: modprice.value,
                desc: moddesc.value,
                typename: modtypename.value,
                typeid: modtypeid.value,
                _id: mod_id.value,
            },
            success: function (data) {
                getDataPage(inputOne.value, changeBar)
                console.log("修改成功")
                alert("修改成功！")
            },
            error: function (err) {
                console.log("操作失败！")
            }
        });
        modData.style.display = "none";
        zhezhao.style.display = "none";
    }
    if (modname.value == "") { modname.style.borderColor = "red"; }
    if (modprice.value == ""|| !(/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(addprice.value))) { modprice.style.borderColor = "red"; }
    if (moddesc.value == "") { moddesc.style.borderColor = "red"; }
    if (modtypename.value == "") { modtypename.style.borderColor = "red"; }
    if (modtypeid.value == "" || (modtypeid.value != 0 && modtypeid.value != 1 && modtypeid.value != 2 && modtypeid.value != 3)) { modtypeid.style.borderColor = "red"; }
    function RemoveRed_mod() {
        setTimeout(function () { modname.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { modprice.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { moddesc.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { modtypename.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { modtypeid.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
    }
    RemoveRed_mod();
>>>>>>> f19f73a (second登录和增删改查)
}


//在HTML中为新建绑定了一个函数，点击新建时，显示addData的弹窗
<<<<<<< HEAD
function addShow(){
    addData.style.display = "block";
}
//获取一下修改弹窗中的所有表单的id
=======
function addShow() {
    addData.style.display = "block";
    zhezhao.style.display = "block";
}
//获取一下添加弹窗中的所有表单的id
>>>>>>> f19f73a (second登录和增删改查)
var addname = document.querySelector("#addname")
var addprice = document.querySelector("#addprice")
var adddesc = document.querySelector("#adddesc")
var addtypename = document.querySelector("#addtypename")
var addtypeid = document.querySelector("#addtypeid")
// var add_id= document.querySelector("#add_id")
<<<<<<< HEAD
//为弹窗中的添加绑定一个单击函数，点击时实现功能，弹窗消失
function confirmAddBtn() {
    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/food/add",
        data: {
            name:addname.value,
            price:addprice.value,
            desc:adddesc.value,
            typename:addtypename.value,
            typeid:addtypeid.value,
            // add_id
        },
        success: function (data) {
            totalNum() 
            getDataPage(1, 5)
            console.log("添加成功")
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
    addData.style.display = "none";
=======
//为弹窗中的添加绑定一个单击函数，点击时实现功能，弹窗消失     !(/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(addprice.value))
function confirmAddBtn() {
    var reg=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
    console.log(reg.test(addprice.value));
    if (addname.value != "" && addprice.value != ""&& reg.test(addprice.value)&& adddesc.value != "" && addtypename.value != "" && (addtypeid.value == 0 || addtypeid.value == 1 || addtypeid.value == 2 || addtypeid.value == 3) && addtypeid.value != "") {
        $.ajax({
            type: "post",
            url: "http://118.195.129.130:3000/food/add",
            data: {
                name: addname.value,
                price: addprice.value,
                desc: adddesc.value,
                typename: addtypename.value,
                typeid: addtypeid.value,
                // add_id
            },
            success: function (data) {
                totalNum()
                getDataPage(1, changeBar)
                console.log("添加成功")
                alert("添加成功！")
            },
            error: function (err) {
                console.log("操作失败！")
            }
        });
        addData.style.display = "none";
        zhezhao.style.display = "none";
    }

    if (addname.value == "") { addname.style.borderColor = "red"; }
    if (addprice.value == ""||!(reg.test(addprice.value))) { addprice.style.borderColor = "red"; }
    if (adddesc.value == "") { adddesc.style.borderColor = "red"; }
    if (addtypename.value == "") { addtypename.style.borderColor = "red"; }
    if (addtypeid.value == "" || (addtypeid.value != 0 && addtypeid.value != 1 && addtypeid.value != 2 && addtypeid.value != 3)) { addtypeid.style.borderColor = "red"; }
    function RemoveRed_add() {
        setTimeout(function () { addname.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { addprice.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { adddesc.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { addtypename.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
        setTimeout(function () { addtypeid.style.borderColor = " rgb(148, 139, 139)"; }, 2000)
    }
    RemoveRed_add();
>>>>>>> f19f73a (second登录和增删改查)
}

//模糊查询
//在HTML中为查询绑定了一个searchShow()函数
//点击时，弹出查询窗口，确认后查看查询结果
<<<<<<< HEAD
let searchData=document.querySelector(".searchData")
 function searchShow(){
    searchData.style.display = "block";
 }
 //点击弹窗中的查询，实现接口
 var searchContent=document.getElementById('searchContent')
 function confirmSearchBtn(){
=======
let searchData = document.querySelector(".searchData")
function searchShow() {
    searchData.style.display = "block";
    zhezhao.style.display = "block";
}
//点击弹窗中的查询，实现接口
var searchContent = document.getElementById('searchContent')
function confirmSearchBtn() {
>>>>>>> f19f73a (second登录和增删改查)
    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/food/getInfoByKw",
        data: {
<<<<<<< HEAD
          kw:searchContent.value
        },
        success: function (data) {
            console.log("分页查询", data);
            let res = data.data
            tableBody.innerHTML=""
=======
            kw: searchContent.value
        },
        success: function (data) {
            let res = data.data
            tableBody.innerHTML = ""
>>>>>>> f19f73a (second登录和增删改查)
            for (let i = 0; i < res.length; i++) {
                //将获取到的元素分别填入单元格
                tableBody.innerHTML +=
                    "<tr>" +
                    "<td style='display: none;'>" + res[i]._id + "</td>" +
                    "<td>" + res[i].name + "</td>" +
                    "<td>" + res[i].price + "</td>" +
                    "<td>" + res[i].desc + "</td>" +
                    "<td>" + res[i].typename + "</td>" +
                    // "<td>" + res[i].typeid + "</td>" +
                    "<td>" +
                    //使用a标签，并绑定单击事件，点击的时候分别触发删除，修改函数
                    "<a class='del' href='javascript:void(0)' onclick='Delete(\"" + res[i]._id + "\")' >删除</a>" +
                    "<a class='mod' href='javascript:void(0)' onclick='Modify(\"" + res[i].name + "\",\"" + res[i].price + "\",\"" + res[i].desc + "\",\"" + res[i].typename + "\",\"" + res[i].typeid + "\",\"" + res[i]._id + "\")' >修改</a>" +
                    "</td>" +
                    "</tr>"
            }
<<<<<<< HEAD
=======
            if (data.data == "") {
                alert("菜单中没有该菜品和相应的描述")
                getDataPage(1, changeBar)
            }
>>>>>>> f19f73a (second登录和增删改查)
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
    searchData.style.display = "none";
<<<<<<< HEAD
 }
 //重置页面
 function resetShow(){
    getDataPage(1, 5)
 }
 //到指定的那一页
//点击go调用的函数
function goPage(){
getDataPage(input.value,5)
}
=======
    zhezhao.style.display = "none";
}
//重置页面
function resetShow() {
    getDataPage(1, changeBar)
}

//遮罩获取一下
var zhezhao = document.getElementById("zhezhao")

//查询菜品总数
var len;
//获取HTML中的sumpages
let sumpages = document.getElementById("sumpages");
function totalNum() {
    $.ajax({
        type: "get",
        url: "http://118.195.129.130:3000/food/allpage",
        dataparams: {
        },
        success: function (data) {
            //len即页面中所有数据的个数
            len = data.pages;
            //向页面中显示 Math.ceil(len / changeBar)，除与changeBar，向上取整，即为总页数
            sumpages.innerHTML = Math.ceil(len / changeBar);
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
}
//在这儿调用显示共多少页的函数，保证页面显示时，页数就能显示出来
totalNum()
//获取HTML中第X页和左右按钮中间按钮的表单，
//因为两者的页数是同步的
//要使用表单中属性value
let inputOne = document.getElementById('inOne')
let input = document.getElementById('in')
document.getElementById("leftBtn").onclick = function () {
    let num = Number(input.value)
    num--
    if (num < 1) {
        //当页数为1时，鼠标光标显示禁用
        leftBtn.style.cursor = "no-drop";
    }
    else {
        getDataPage(num, changeBar)
        input.value = num
        inputOne.value = num
    }
}
document.getElementById("rightBtn").onclick = function () {
    //当页数为最大时，鼠标光标显示禁用
    let num = Number(input.value)
    num++
    if (num > Math.ceil(len / changeBar)) {
        rightBtn.style.cursor = "no-drop";
    }
    else {
        getDataPage(num, changeBar)
        input.value = num
        inputOne.value = num
    }
}
//到指定的那一页
//点击go调用的函数
function goPage() {
    var RegPage = /^[1-9]\d*$/;
    if (RegPage.test(input.value) && input.value <= Math.ceil(len / changeBar)) {
        getDataPage(input.value, changeBar)
        inputOne.value = input.value
    }
    else input.value = inputOne.value

}
//为所有取消按钮绑定一个使弹窗隐藏的函数
//添加窗口还没有获取过，在这里获取一下
var addData = document.querySelector(".addData")
function cancelBtn() {
    modData.style.display = "none";
    addData.style.display = "none";
    searchData.style.display = "none";
    zhezhao.style.display = "none";
}
>>>>>>> f19f73a (second登录和增删改查)
