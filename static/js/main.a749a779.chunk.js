(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),a=n(2),c=n.n(a);n(9);function i(){var e=Object(r.useRef)(),t=function(){e.current&&(console.log(e.current.offsetTop),"none"===document.querySelector("#topPopUp").style.display?window.scrollY>=100?(e.current.style.position="fixed",e.current.style.top=0):e.current.style.position="static":window.scrollY>=142?(e.current.style.position="fixed",e.current.style.top=0):e.current.style.position="static")};return Object(r.useEffect)(function(){return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}},[]),l.a.createElement("header",null,l.a.createElement("div",{id:"headerTop"},l.a.createElement("div",{id:"headerDeli"}),l.a.createElement("ul",{id:"userMenu"},l.a.createElement("li",{className:"userItem strong"},"\ud68c\uc6d0\uac00\uc785"),l.a.createElement("li",{className:"userItem"},"\ub85c\uadf8\uc778"),l.a.createElement("li",{className:"userItem"},"\uace0\uac1d\uc13c\ud130"),l.a.createElement("li",{className:"userItem"},"\ubc30\uc1a1\uc9c0\uc5ed \uac80\uc0c9"))),l.a.createElement("div",{id:"headerCen"},l.a.createElement("img",{id:"logoImg",src:"./image/logo.png",alt:"\ub85c\uace0\uc774\ubbf8\uc9c0"})),l.a.createElement("div",{id:"headerBott",ref:e},l.a.createElement("div",{id:"headerBottWrap"},l.a.createElement("ul",{id:"mainMenu"},l.a.createElement("li",{className:"strong"},l.a.createElement("img",{src:"./image/menuIcon.png",alt:""}),"\uc804\uccb4 \uce74\ud14c\uace0\ub9ac"),l.a.createElement("li",null,"\uc2e0\uc0c1\ud488"),l.a.createElement("li",null,"\ubca0\uc2a4\ud2b8"),l.a.createElement("li",null,"\uc54c\ub730\uc1fc\ud551"),l.a.createElement("li",null,"\uc774\ubca4\ud2b8")),l.a.createElement("div",{id:"searchWrap"},l.a.createElement("input",{id:"search",type:"text",placeholder:"\uc785\ub825\ud574\uc8fc\uc138\uc694~~"}),l.a.createElement("img",{src:"./image/searchIcon@2x.png",alt:"\uac80\uc0c9\uc544\uc774\ucf58"})),l.a.createElement("img",{src:"./image/shoppingCartIcon@2x.png",width:"30px",alt:"\uc1fc\ud551\uce74\ud2b8\uc544\uc774\ucf58",id:"shoppingCartImg"}))))}function o(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=function(){if(e.current)if(window.innerWidth>1050){for(var t=0;t<e.current.children.length;t+=1)document.querySelectorAll(".slideImg")[t].style.width="".concat(window.innerWidth,"px");e.current.style.width="".concat(e.current.children.length*window.innerWidth,"px")}else{for(var n=0;n<e.current.children.length;n+=1)document.querySelectorAll(".slideImg")[n].style.width="1050px";e.current.style.width="".concat(1050*e.current.children.length,"px")}},a=function(){e.current&&(e.current.style.left="".concat(parseInt(e.current.style.left)+parseInt(e.current.children[0].style.width),"px"))},c=function(){e.current&&(e.current.style.left="".concat(parseInt(e.current.style.left)-parseInt(e.current.children[0].style.width),"px"))};return Object(r.useEffect)(function(){return n(),window.addEventListener("resize",n),t.current&&(e.current.style.left=0,t.current.children[0].addEventListener("click",a),t.current.children[1].addEventListener("click",c)),function(){window.removeEventListener("resize",n)}},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"mainSlideWrap"},l.a.createElement("div",{id:"mainSlide",ref:e},l.a.createElement("div",{className:"slideImg",style:{backgroundImage:"url(./image/slide1.jpg)"}}),l.a.createElement("div",{className:"slideImg",style:{backgroundImage:"url(./image/slide2.jpg)"}}),l.a.createElement("div",{className:"slideImg",style:{backgroundImage:"url(./image/slide3.jpg)"}}),l.a.createElement("div",{className:"slideImg",style:{backgroundImage:"url(./image/slide4.jpg)"}})),l.a.createElement("div",{id:"slideControl",ref:t},l.a.createElement("img",{src:"./image/ico_prev1_x2_v2.png",alt:"\uc2ac\ub77c\uc774\ub4dc \uc67c\ucabd\uc73c\ub85c"}),l.a.createElement("img",{src:"./image/ico_next1_x2_v2.png",alt:"\uc2ac\ub77c\uc774\ub4dc \uc624\ub978\ucabd\uc73c\ub85c"}))),l.a.createElement("div",null,"hello"))}function s(){document.querySelector("#topPopUp").style.opacity=0,setTimeout(function(){document.querySelector("#topPopUp").style.display="none"},1e3)}c.a.render(l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"topPopUp"},l.a.createElement("div",{id:"topPopWrap"},"\uc9c0\uae08 \uac00\uc785\ud558\uace0 \uc778\uae30 \uc0c1\ud488 100\uc6d0\uc5d0 \ubc1b\uc544\uac00\uc138\uc694!",l.a.createElement("div",{id:"topPopCls",onClick:s},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"white"}),l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))),l.a.createElement(i,null),l.a.createElement(o,null),l.a.createElement("div",{style:{height:"1000vh"}}))},null),document.getElementById("root"))},3:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[3,1,2]]]);
//# sourceMappingURL=main.a749a779.chunk.js.map