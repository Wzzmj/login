//显示用户信息
var tableBody_myInfo = document.getElementById('tableBody_myInfo')
function obtain_myInfo() {
    console.log(localStorage.getItem('UserId'));
    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/user/inquire",
        data: {
            _id: localStorage.getItem('UserId')
        },
        success: function (data) {
            let res = data.data
            console.log(res);
            //将页面数据清空
            tableBody_myInfo.innerHTML = null;
            for (let i = 0; i < res.length; i++) {
                //将获取到的元素分别填入单元格
                tableBody_myInfo.innerHTML +=
                    "<tr>" +
                    "<td style='display: none;'>" + res[i]._id + "</td>" +
                    "<td>" + "用户名" + "</td>" +
                    "<td>" + res[i].us + "</td>" +
                    "<td style='display: none;'>" + res[i].ps + "</td>" +
                    "</tr>" +
                    "<tr>" + "<td>" + "性别" + "</td>" + "<td>" + res[i].sex + "</td>" + "</tr>" +
                    "<tr>" + "<td>" + "年龄" + "</td>" + "<td>" + res[i].age + "</td>" + "</tr>" +
                    "<tr>" + "<td>" + "电话" + "</td>" + "<td>" + res[i].phone + "</td>" + "</tr>" +
                    "<tr>" + "<td>" + "积分" + "</td>" + "<td>" + res[i].integral + "</td>" + "</tr>"
            }
        },
        error: function (err) {
            console.log("操作失败！")
        }
    });
}
obtain_myInfo();
//为菜单每个li绑定一个函数
//点击哪一个，显示那个页面，其他隐藏,同时li的背景变色，其他恢复原色
//现获取四个页面
var main = document.querySelector(".main")
var UserInfo = document.querySelector(".UserInfo")
var MyInfo = document.querySelector(".MyInfo")
var order = document.querySelector(".order")
//再获取四个li,头像和个人信息相同的单击事件
/*   <ul>
            <li class="userMe">
                <div id="imgMe" onclick="showMyInfo()">
                    <img src="./img/favorite.jpg" alt="">
                </div>
            </li>
            <li class="father" id="Vergetable" onclick="showVergetable()">菜单管理</li>
            <li class="father" id="Users" onclick="showUsers()">用户管理</li>
            <li class="father" id="Order" onclick="showOrder()">订单管理</li>
            <li class="father" id="MyInfo" onclick="showMyInfo()">个人信息</li>
            <li class="father" id="Exit" onclick="exit()">退出登录</li>
        </ul> */
var imgMe = document.getElementById("imgMe")
var Vergetable = document.getElementById("Vergetable")
var Users = document.getElementById("Users")
var Order = document.getElementById("Order")
var MyInfo = document.getElementById("MyInfo")
var Exit = document.getElementById("Exit")
function showVergetable() {
    main.style.display = "block"
    UserInfo.style.display = "none"
    MyInfo.style.display = "none"
    order.style.display = "none"
    Vergetable.style.backgroundColor="rgb(54, 78, 88)"
    Users.style.backgroundColor="rgb(70, 106, 121)"
    Order.style.backgroundColor="rgb(70, 106, 121))"
    MyInfo.style.backgroundColor="rgb(70, 106, 121)"
}
function show(evt, cityName,bool) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    if(bool!=true){
    evt.currentTarget.className += " active";
    }
    
}
function exit(){
    if (confirm("你确定要退出登录吗？") == true) {
    $.ajax({
        type: "POST",
        url: "http://118.195.129.130:3000/user/out",
        dataType: "JSON",
        data: {
        },
        success: function (result) {
                window.location.href = "../登录和增删改查/login.html"
                localStorage.removeItem('UserId')

        },
        error: function (err) {
            console.log("退出失败")

        }
    })
}}