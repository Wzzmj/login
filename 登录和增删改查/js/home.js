//显示菜单元素
var tableBody = document.getElementById('tableBody')
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
             //将页面数据清空
            tableBody.innerHTML = null;
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
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
}
//调用函数，显示菜品
getDataPage(1, 5)

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
                totalNum() 
                getDataPage(1, 5)
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

}


//在HTML中为新建绑定了一个函数，点击新建时，显示addData的弹窗
function addShow(){
    addData.style.display = "block";
}
//获取一下修改弹窗中的所有表单的id
var addname = document.querySelector("#addname")
var addprice = document.querySelector("#addprice")
var adddesc = document.querySelector("#adddesc")
var addtypename = document.querySelector("#addtypename")
var addtypeid = document.querySelector("#addtypeid")
// var add_id= document.querySelector("#add_id")
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
}

//模糊查询
//在HTML中为查询绑定了一个searchShow()函数
//点击时，弹出查询窗口，确认后查看查询结果
let searchData=document.querySelector(".searchData")
 function searchShow(){
    searchData.style.display = "block";
 }
 //点击弹窗中的查询，实现接口
 var searchContent=document.getElementById('searchContent')
 function confirmSearchBtn(){
    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/food/getInfoByKw",
        data: {
          kw:searchContent.value
        },
        success: function (data) {
            console.log("分页查询", data);
            let res = data.data
            tableBody.innerHTML=""
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
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
    searchData.style.display = "none";
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