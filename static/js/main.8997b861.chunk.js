(this.webpackJsonpfilter=this.webpackJsonpfilter||[]).push([[0],{10:function(e,n,r){},11:function(e,n,r){"use strict";r.r(n);var t=r(1),a=r.n(t),c=r(3),i=r.n(c),o=r(4),s=r(0),u=function(e){var n=e.Users;return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("img",{src:n.img,style:{width:250,backgroundColor:"aqua"},alt:"here is image"}),Object(s.jsx)("h2",{children:n.name}),Object(s.jsx)("h2",{children:n.age}),Object(s.jsx)("h2",{children:n.country})]})})},l=r.p+"static/media/bgI.368eff62.png",m=[{img:l,name:"Abyssinian cat",age:22,country:"Swedish"},{img:l,name:"Australian mist",age:20,country:"Australia"},{img:l,name:"Korat",age:21,country:"korat"},{img:l,name:"Asian cat",age:24,country:"Asian"},{img:l,name:"American bobtail",age:20,country:"America"},{img:l,name:"American wirehair",age:15,country:"America"},{img:l,name:"Brazilian shorthair",age:26,country:"Brazilia"},{img:l,name:"Bombay cat",age:25,country:"Bombay"},{name:"American curl",img:l,age:28,country:"America"},{name:"British longhair",img:l,age:29,country:"UK"},{name:"Egyptian mau",img:l,age:29,country:"Egypt"},{img:l,name:"California spangled cat",age:25,country:"California "}],g=(r(10),function(){var e=Object(t.useState)("24"),n=Object(o.a)(e,2),r=n[0],a=n[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{className:"btn-group",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return a("18")},style:r>"18"?{backgroundColor:"green"}:{backgroundColor:"none"},children:"teenagers"}),Object(s.jsx)("button",{className:"btn",onClick:function(){return a("24")},style:r>"18"&&r>"24"?{backgroundColor:"yellow"}:{backgroundColor:"none"},children:"mid.age"}),Object(s.jsx)("button",{className:"btn",onClick:function(){return a("25")},style:r>="25"?{backgroundColor:"purple"}:{backgroundColor:"none"},children:"more 25"}),Object(s.jsx)("button",{className:"btn",onClick:function(){return a("29")},style:r<"29"?{backgroundColor:"aquin"}:{backgroundColor:"none"},children:"all users"})]}),Object(s.jsx)("div",{className:"block",children:function(){switch(r){case"18":return m.filter((function(e){return e.age<="18"})).map((function(e,n){return Object(s.jsx)(u,{Users:e},n)}));case"24":return m.filter((function(e){return e.age>"18"&&e.age<"24"})).map((function(e,n){return Object(s.jsx)(u,{Users:e},n)}));case"25":return m.filter((function(e){return e.age>"25"})).map((function(e,n){return Object(s.jsx)(u,{Users:e},n)}));case"29":return m.filter((function(e){return e.age<="29"})).map((function(e,n){return Object(s.jsx)(u,{Users:e},n)}));default:return""}}()})]})});i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.8997b861.chunk.js.map