(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{132:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),a=t(12),o=t(3),l=t(18),c=t.n(l),u=t(1),d=t.n(u),f=t(2);function p(){var n=d()(["\n    color: #474651;\n    margin: 5px 0 5px 20pt;\n"]);return p=function(){return n},n}function s(){var n=d()(["\n    font-size: 16px;\n    padding: 0 0 0 5pt;\n\n"]);return s=function(){return n},n}function m(){var n=d()(["\n    font-size: 21px;\n    padding: 0 0 0 5pt;\n\n"]);return m=function(){return n},n}function w(){var n=d()(["\n    display: flex;\n    flex-direction: column;\n    min-width: 1px;\n    /* word-break: break-all;  */  /*use this*/\n    /* word-wrap: break-word; */\n    margin: 5px;\n    @media (max-width: 576px) {\n        display: inline;\n    }\n"]);return w=function(){return n},n}function x(){var n=d()(["\n    position: relative;\n    margin: 5px;\n    @media (max-width: 576px) {\n        float: right;\n        align-items: flex-start;\n    }\n"]);return x=function(){return n},n}function v(){var n=d()(["\n    background-color: #f1f0ef;\n    display: flex;\n    width: 100%;\n    @media (max-width: 420px) {\n        display: flex;\n        flex-direction: column-reverse;\n    }\n"]);return v=function(){return n},n}function h(){var n=d()(["\n    line-height: 16pt;\n    position: relative;\n    display: flex;\n    padding: 10px;\n    max-width: 1060px;\n    flex: 0 1 50%;\n    justify-self: center;\n    min-width: 360px;\n"]);return h=function(){return n},n}var g={Container:f.c.div(h()),Container__row:f.c.div(v()),Card:f.c.div(x()),News:f.c.div(w()),News__title:f.c.div(m()),News__body:f.c.div(s()),News__time:f.c.time(p())},b=t(53),E=function(n){var e=n.newsItem,t=(e.id,e.title),r=e.body,a=e.product,o=e.created;e.changed;return i.a.createElement(g.Container,null,i.a.createElement(g.Container__row,null,i.a.createElement(g.Card,null,i.a.createElement(b.a,{card:a})),i.a.createElement(g.News,null,i.a.createElement(g.News__title,null,t),i.a.createElement(g.News__time,null,o),i.a.createElement(g.News__body,null,r))))};E.defaultProps={product:{name:"test",discount:!0,sertificate:!0,photos:[],prices:[],id:"test"}};var y=E,_=t(39);function k(){var n=d()(['\n  position: relative;\n  margin: 10px 0 20px 0;\n  padding: 0 0 20px;\n  position: relative;\n  font-size: 36px;\n  font-weight: 900;\n  line-height: 100%;\n  color: #333;\n\n  &:before {\n    content: "";\n    position: absolute;\n    width: 75px;\n    height: 10px;\n    display: block;\n    bottom: 0;\n    left: 0;\n    background-color: #f3cb55;\n  }\n']);return k=function(){return n},n}function N(){var n=d()(["\n  display: flex;\n  /* z-index:-50; */\n  flex-wrap: wrap;\n  @media (max-width: 950px) {\n    flex-direction: column;\n  }\n"]);return N=function(){return n},n}function C(){var n=d()(["\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  padding: 0 5pt;\n"]);return C=function(){return n},n}var j=f.c.div(C()),z=f.c.div(N()),O=f.c.div(k()),I=function(n){var e=n.news;return Object(r.useEffect)((function(){window.scroll({top:0,left:0,behavior:"smooth"})})),i.a.createElement(i.a.Fragment,null,i.a.createElement(j,null,i.a.createElement(O,null,i.a.createElement("h1",null,"Новости и новинки")),i.a.createElement(z,null,e.news.length>0&&e.news.map((function(n){return i.a.createElement(y,{key:n.id,newsItem:n})}))||i.a.createElement("p",{style:{color:"darkgoldenrod",fontSize:"16px"}},"Нет новостей"))),i.a.createElement(_.a,null))};e.default=function(){var n=Object(a.c)((function(n){return n.newsReducer})),e=Object(a.b)();return Object(r.useEffect)((function(){e((function(n){c.a.get("api/news/").then((function(e){n({type:o.h,payload:e.data})})).catch((function(n){return console.log(n)}))}))}),[n.length]),i.a.createElement(I,{news:n})}}}]);