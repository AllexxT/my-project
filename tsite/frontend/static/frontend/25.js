(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(104),r=n(3),i=n(22),d=n.n(i),u=n(15);t.default=function(e){var t=e.page,n=(e.home,Object(u.b)()),i=Object(u.c)((function(e){return e.headReducer}));return Object(a.useEffect)((function(){n(function(e){return function(t){d.a.get("/api/page/".concat(e,"/")).then((function(e){t({type:r.g,payload:e.data})})).catch((function(e){return console.log(e)}))}}(t))}),[]),i&&c.a.createElement(o.a,null,c.a.createElement("meta",{name:"theme-color",content:"r#de9c2a"}),c.a.createElement("meta",{name:"description",content:i.head.description?i.head.description:""}),c.a.createElement("meta",{name:"keywords",content:i.head.keywords?i.head.keywords:""}),c.a.createElement("title",null,i.head.title))}}}]);