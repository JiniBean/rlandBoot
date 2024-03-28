// // WARNING: For GET requests, body is set to null by browsers.
//
// // var xhr = new XMLHttpRequest(); //비주얼베이직을 위한 라이브러리가 브라우저를 위해 카피본이 되었음
// // xhr.withCredentials = true;
//
// //비동기적인 방법으로 처리하는 것
// // xhr.addEventListener("readystatechange", function() { //비동기를 위한 콜백
// //     if(this.readyState === 4) {
// //         var list = JSON.parse(this.responseText);
// //         alert(list[2].engName);
// //     }
// // });
//
// //이벤트에 function 을 add 하는게 아니라 대체해버림, on(때) load
// // xhr.onload = function () {
// //     var queryInput = document.getElementById("query-input");//객체를 이름으로 담기
// //     var list = JSON.parse(this.responseText);
// //     // alert(list[2].engName);
// //     queryInput.value = list[0].korName;
// //
// // }
// // window.onload = function () {
// //     console.log("Script");
// // }
//
// window.addEventListener("load", function () {
//
//     var queryForm = this.document.getElementById("query-form");
//     var queryButton = queryForm.getElementsByClassName("icon-find");
//
//     queryButton.onclick = function (e){
//         e.preventDefault();
//
//         var xhr = new XMLHttpRequest(); //비주얼베이직을 위한 라이브러리가 브라우저를 위해 카피본이 되었음
//         xhr.withCredentials = true;
//
//         xhr.onload = function () {
//             var queryInput = document.getElementById("query-input");//객체를 이름으로 담기
//             var list = JSON.parse(this.responseText);
//             alert(list[2].engName);
//             queryInput.value = list[0].korName;
//
//         }
//
//         xhr.open("GET", "http://localhost:8080/api/menus?p=&c=&q=");
//
//         xhr.send(); //요청 보냄, 엔터
//
//     }
//
//
// })
// window.addEventListener("load", function () {
//     console.log("Script2");
// })
//

// xhr.onload = function () {
//     var list = JSON.parse(this.responseText);
//     alert(list[3].korName);
// }

// xhr.open("GET", "http://localhost:8080/api/menus?p=&c=&q=");
//
// xhr.send(); //요청 보냄, 엔터
//
// // alert(xhr.responseText); //데이터 받은거 담고 있음
// console.log("됏음?")

// WARNING: For GET requests, body is set to null by browsers.
// Array.prototype.ahaha = function (){
//     console.log("야호");
// };
//
// var ar = [1,2,3,4,5];
// ar.ahaha();
//
// ar.forEach(n => console.log(n));

// var h1Txt = document.createTextNode(list[0].korName);
//
// var menuSection = document.createElement("section");
// menuSection.className = "menu-card";
//
// var h1 = document.createElement("h1");
//
// h1.appendChild(h1Txt);
// menuSection.appendChild(h1);
// menuContent.appendChild(menuSection);


function Cookie() {
    this.map = {};

    if(document.cookie!=null){
        var cookieDecoded = decodeURIComponent(document.cookie);
        var tokens = cookieDecoded.split(";");

        for (c of tokens){
            var tmp = c.split("=");
            var key = tmp[0];
            var value = JSON.parse(tmp[1]);

            this.map[key] = value;
        }
    }

}

Cookie.prototype = {
    get: function (name){
        return this.map[name];
    },

    save: function () {
        // document.cookie = "menus=hh; path=/;";
        var list = this.map["menus"];
        var size = list.length;
        var lastIdx = size -1;

        var str = "[";

        for(m of list){
            str += JSON.stringify(m);
            if(m !== list[lastIdx])
                str += ",";
        }

        str += "]";
        var encoded = encodeURIComponent(str);
        document.cookie = `menus=${encoded}; path=/;`;

        console.log(document.cookie);
    },

    remove : function (name){

    },

    add: function (name, value) {

    },

    addItem: function (name, item) {
        var list = this.map[name];
        list.push(item);
    },

    set: function (name, value) {

    }

}
window.addEventListener("load", function (){




    var categoryFilter = this.document.querySelector(".category-filter");

    // var li1 = categoryFilter.querySelector("ul>li:nth-child(2)");
    // var a = categoryFilter.querySelector("ul>li>a");

    var queryForm = this.document.getElementById("query-form");
    var queryButton = queryForm.getElementsByClassName("icon-find")[0];
    var queryInput = queryForm.getElementsByClassName("query-input")[0];

    var menuCardList = document.getElementById("menu-card-list");
    var menuContent = menuCardList.getElementsByClassName("content")[0];

    // var cartBtn = menuContent.querySelector(".btn-cart");

    menuContent.onclick = function (e) {

        if(!e.target.classList.contains("btn-cart"))
            return;

        alert("담겻습니다");

        var cookie = new Cookie();

        var item = {};
        item.id = e.target.dataset.id;

        item.korName = e.target.dataset.kor;
        item.engName = e.target.dataset.eng;
        item.price = e.target.dataset.price;
        item.regDate = e.target.dataset.reg;
        item.img = e.target.dataset.img;
        item.likeCount = e.target.dataset.likeCnt;
        item.categoryId = e.target.dataset.ctgrid;

        
        cookie.addItem("menus", item);

        console.log("item = ", item);

        cookie.save();


        e.preventDefault();

        // alert("담기 누름");
    }


    categoryFilter.onclick = function (e){

        e.preventDefault();

        if(e.target.tagName != "A"){
            return;
        }

        // e.target.classList.add("current");
        var c = e.target.dataset.id;
        var url = `http://localhost:8080/api/menus?c=${c}`;

        request(url, function (list) {
            bind(list);
            console.log("카테고리");
        });
    };

    queryButton.onclick = function(e){

        e.preventDefault();

        var q = queryInput.value;
        var url = `http://localhost:8080/api/menus?q=${q}&p=1`;

        request(url, function (list){
            bind(list);
            console.log("검색어");
        });
    };

    function request(url, callback, method) {

        method = method || "GET";

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.onload = function(){
            var list = JSON.parse(this.responseText);
            callback(list);
        };

        xhr.open(method, url);
        xhr.send();
    }

    function bind(list){
        menuContent.classList.add("fade-out");

        // setTimeout(function (){
        menuContent.ontransitionend = function () {

            menuContent.classList.remove("fade-out");
            menuContent.ontransitionend = null;

            menuContent.innerHTML="";

            for(var menu of list){

                var sectionHTML = `
            <section class="menu-card">
                <h1>
                    <a class="heading-3">${menu.korName}</a>
                </h1>
                <h2 class="heading-2 font-weight:normal color:base-5">${menu.engName}</h2>
                <div class="price-block d:flex align-items:flex-end">
                    <spanclass="font-weight:bold">${menu.price}</span>원
                        <span class="soldout-msg ml:auto mr:auto md:d:none">SOLD OUT</span></div>
                <div class="img-block">
                    <a href="detail.html?id=1"><img src="/image/menu/8.jpg"></a>
                </div>
                <div class="like-block d:flex justify-content:flex-end">
                    <a class="icon icon-heart-fill icon-color:base-4" href="">좋아요</a>
                    <span class="font-weight:bold ml:1" >2</span>
                </div>
                <form  class="pay-block d:flex" action="/cart/add-menu" method="post">
                    <input type="hidden" name="id">
                    <button class="icon md:icon:none icon-cart icon-color:base-0 color:base-0 btn-type:icon btn-cart md:btn-type:text">담기</button>
                    <button class="icon md:icon:none icon-card icon-color:base-0 color:base-0 btn-type:icon btn-card md:btn-type:text"> 주문하기</button>
                </form>
            </section>`;

                menuContent.insertAdjacentHTML("beforeend",sectionHTML);

            }
        };


    }

});





