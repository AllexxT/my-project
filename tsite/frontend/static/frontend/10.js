(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{135:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),i=t(3),a=t(22),l=t.n(a),c=t(15),u=t(1),d=t.n(u),p=t(2);function s(){var n=d()(["\n  width: 80%;\n  text-align:center;\n  background: whitesmoke;\n  padding: 7pt 0 3pt 0;\n  box-shadow: 0px 2px 5px gray;\n  /* overflow: scroll; for mobile */\n  p {\n\n  }\n"]);return s=function(){return n},n}function f(){var n=d()(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  flex: 0 0 25%;\n  margin: 5pt;\n  align-items: center;\n  /* filter: drop-shadow(0px 5px 10px gray); */\n  &>div:first-child {\n    box-shadow: 0px 5px 10px gray;\n  }\n  &&& .image-gallery-image {\n    max-height: 100vh;\n  }\n  @media only screen and (max-width: 480px) {\n    flex: 0 0 90%;\n  }\n  @media (min-width: 481px) and (max-width: 900px) {\n    flex: 0 0 40.5%;\n  }\n"]);return f=function(){return n},n}function m(){var n=d()(["\n  display: flex;\n  flex-wrap: wrap;\n  @media only screen and (max-width: 480px) {\n    justify-content: center;\n  }\n  @media (min-width: 481px) and (max-width: 900px) {\n    justify-content: space-between;\n    margin: 0 4%;\n  }\n"]);return m=function(){return n},n}function b(){var n=d()(["\n  display: block;\n  margin: 10px 0;\n  font-size: 27px;\n  font-weight: bold;\n  color: #333333;\n"]);return b=function(){return n},n}function h(){var n=d()(["\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  margin-bottom: 10pt;\n"]);return h=function(){return n},n}function g(){var n=d()(["\n  position: relative;\n  margin: 10px 0 20px 0;\n  padding: 0 0 20px;\n  position: relative;\n  font-size: 36px;\n  font-weight: 900;\n  line-height: 100%;\n  color: #333;\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 75px;\n    height: 10px;\n    display: block;\n    bottom: 0;\n    left: 0;\n    background-color: #F3CB55;\n  }\n"]);return g=function(){return n},n}function x(){var n=d()(["\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  padding: 0 5pt;\n"]);return x=function(){return n},n}var v={PageWrapper:p.c.div(x()),PageTitle:p.c.div(g()),CategoryWrapper:p.c.div(h()),Title:p.c.h3(b()),GalleryWrapper:p.c.div(m()),ItemWrapper:p.c.div(f()),ItemDescription:p.c.div(s())},y=t(23),w=t.n(y),k=t(98),E=t.n(k),O=(t(99),function(n){var e=n.places,t=Object(r.useState)([]),i=w()(t,2),a=i[0],l=i[1];return Object(r.useEffect)((function(){l(e.photos.map((function(n){return{fullscreen:n.photo.full_size,original:n.photo.medium_square_crop,thumbnail:n.photo.small_square_crop,description:n.description}})))}),[e]),o.a.createElement(v.ItemWrapper,null,a.length>0&&o.a.createElement(E.a,{lazyLoad:!0,showThumbnails:!1,showBullets:!0,showIndex:!0,showPlayButton:!1,items:a}),o.a.createElement(v.ItemDescription,null,o.a.createElement("p",null,e.address)))}),j={sett:"Тротуарная плитка",fence:"Еврозабор",brick:"Колотый блок и кирпич",parapet:"Крышки и парапеты",monuments:"Памятники"},z=function(n){var e=n.data;return o.a.createElement(v.CategoryWrapper,null,o.a.createElement(v.Title,null,o.a.createElement("p",null,j[e[0].category])),o.a.createElement(v.GalleryWrapper,null,e.map((function(n,e){return o.a.createElement(O,{key:e,places:n})}))))},I=t(92),B=function(n){var e=n.expositionArray,t=[];return["sett","fence","brick","parapet","monuments"].forEach((function(n){e.forEach((function(e){e[0].category==n&&t.push(e)}))})),Object(r.useEffect)((function(){window.scroll({top:0,left:0,behavior:"smooth"})})),o.a.createElement(o.a.Fragment,null,o.a.createElement(v.PageWrapper,null,o.a.createElement(v.PageTitle,null,o.a.createElement("h1",null,"Наши работы")),e.length>0&&t.map((function(n,e){return o.a.createElement(z,{key:e,data:n})}))||o.a.createElement("p",{style:{color:"darkgoldenrod",fontSize:"16px"}},"Работы не добавлены")),o.a.createElement(I.a,null))},T=function(){return o.a.createElement("div",null,"ЗАГРУЗКА...")},R=function(){return o.a.createElement("div",null,"404:PAGE NOT FOUND")};e.default=function(){var n=Object(c.b)(),e=Object(c.c)((function(n){return n.expositionReducer})),t=404==e.fetching?o.a.createElement(R,null):o.a.createElement(T,null);Object(r.useEffect)((function(){n((function(n){n({type:i.e}),l.a.get("/api/exposition/").then((function(e){n({type:i.f,payload:e.data})})).catch((function(e){console.log(e),n({type:i.d,payload:e})}))}))}),[]);var a=e.exposition,u=[],d=[];return a.forEach((function(n){var e=n.category;!u.includes(e)&&u.push(e)})),u.forEach((function(n){var e=[];a.forEach((function(t){var r=t.category;n==r&&e.push(t)})),d.push(e)})),e.fetching?t:o.a.createElement(B,{expositionArray:d})}},92:function(n,e,t){"use strict";var r=t(23),o=t.n(r),i=t(0),a=t.n(i),l=t(15),c=t(1),u=t.n(c),d=t(2),p=t(7),s=t(93);function f(){var n=u()(["\n  background-color: whitesmoke;\n  margin: 20px 10px 10px 10px;\n  border-left: 5px solid #f3cb55;\n  border-top: 5px solid #f3cb55;\n  border-bottom: 5px solid #535252;\n  border-right: 5px solid #535252;\n  animation: "," 1s ease-in;\n  padding: 10px;\n  font-size: 16px;\n  line-height: 22px;\n  box-shadow: 0px 5px 10px grey;\n  @media (max-width: 570px) {\n    max-height: 250px;\n    overflow: scroll;\n  }\n  h1 {\n    padding-bottom: 15px;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n  }\n  & ul li {\n    list-style: inside;\n    font-weight: bold;\n  }\n  ul {\n    margin-bottom: 10px;\n  }\n"]);return f=function(){return n},n}function m(){var n=u()(["\n    from {\n        opacity: 0;\n        top: -20px;\n    }\n\n    to {\n        opacity: 1;\n        top: 0px;\n    }\n"]);return m=function(){return n},n}var b=Object(p.default)((function(){return t.e(5).then(t.t.bind(null,133,7))})),h=Object(d.d)(m()),g=d.c.div(f(),h),x=function(n){var e=n.textOfPage,t=n.callBack,r=Object(l.c)((function(n){return n.authReducer})),c=Object(i.useRef)(null),u=Object(i.useState)(!1),d=o()(u,2),p=d[0],f=d[1],m=Object(i.useState)(""),h=o()(m,2),x=h[0],v=h[1];Object(i.useEffect)((function(){null!=r.user&&"admin"==r.user.username?f(!0):f(!1),v(e)}),[r.user,e]);return a.a.createElement(s.a,null,null!=e&&null!=e&&""!=e&&a.a.createElement(g,{dangerouslySetInnerHTML:{__html:e}}),p&&a.a.createElement(a.a.Fragment,null,a.a.createElement(b,{ref:c,value:x,config:{readonly:!1,toolbarButtonSize:"large",processPasteHTML:"false"},tabIndex:1,onBlur:function(n){return v(n)},onChange:function(n){}}),a.a.createElement("button",{onClick:function(){return t(x)}},"Сохранить")))},v=t(22),y=t.n(v),w=t(16);e.a=function(){var n=Object(l.c)((function(n){return n.headReducer})),e=Object(i.useState)(null),t=o()(e,2),r=t[0],c=t[1],u=n.head.body;Object(w.h)();var d=function(n){var e=null;if(document.cookie&&""!==document.cookie)for(var t=document.cookie.split(";"),r=0;r<t.length;r++){var o=t[r].trim();if(o.substring(0,n.length+1)===n+"="){e=decodeURIComponent(o.substring(n.length+1));break}}return e}("csrftoken");Object(i.useEffect)((function(){c(null)}),[r]);return a.a.createElement(x,{textOfPage:u,callBack:function(e){var t=n.head,r=e.replace(/&nbsp;/g," ");t.body=r,y.a.put("/api/page/".concat(n.head.page,"/"),JSON.stringify(n.head),{headers:{"Content-Type":"application/json","X-CSRFToken":d}}).then((function(n){console.log(n.status),c(n.status)})).catch((function(n){return console.log(n)}))}})}},93:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t(1),o=t.n(r),i=t(2);function a(){var n=o()(['\nhtml, address,\nblockquote,\nbody, dd,\ndl, dt, fieldset, form,\nframe, frameset,\nh1, h2, h3, h4,\nh5, h6, noframes,\ncenter,\ndir, hr, menu, pre  { display: block; unicode-bidi: embed }       \nli              { display: list-item }\nul li           { list-style: square outside; margin-left: 3% }\nol li           { list-style: decimal; margin-left: 3% }\nh1              { font-size: 2em; margin: .67em 0 }\nh2              { font-size: 1.5em; margin: .75em 0 }\nh3              { font-size: 1.17em; margin: .83em 0 }\nh4, p,\nblockquote, ul,\nfieldset, form,\nol, dl, dir,\nmenu            { margin-bottom: 10px}\nh5              { font-size: .83em; margin: 1.5em 0 }\nh6              { font-size: .75em; margin: 1.67em 0 }\nh1, h2, h3, h4,\nh5, h6, b,\nstrong          { font-weight: bolder }\nblockquote      { margin-left: 40px; margin-right: 40px; }\ni, cite, em,\nvar, address    { font-style: italic }\nbutton, textarea,\ninput, select   { display: inline-block }\nbig             { font-size: 1.17em }\nsmall, sub, sup { font-size: .83em }\nsub             { vertical-align: sub }\nsup             { vertical-align: super }\nhr              { border: 1px solid gray }\nol, ul, dir,\nol              { list-style-type: decimal }\nol ul, ul ol,\nul ul, ol ol    { margin-top: 0; margin-bottom: 0 }\np, div          { font-size: 16px; line-height: 22px }\n/* strong          { overflow-wrap: break-word; } */\n\n\n/* ###################################################### */\n/* ######################### Tables ##################### */\n\ntable {\n    border-collapse: collapse;\n    border: 1px solid black;\n    margin-bottom: 1em;\n    width: auto;\n}\ntable tr {\n    page-break-inside: avoid;\n}\ntable thead tr td {\n    background-color: #F0F0F0;\n    border: 1px solid black;\n    min-width: 0.6em;\n    padding: 5px;\n    text-align: left;\n    vertical-align: top;\n    font-weight: bold;\n}\ntable tbody tr td {\n    border: 1px solid black;\n    min-width: 0.6em;\n    padding: 5px;\n    vertical-align: top;\n}\ntbody tr.even td {\n    background-color: transparent;\n}\n/* ###################################################### */\n/* Begin bidirectionality settings (do not change) */\nBDO[DIR="ltr"]  { direction: ltr; unicode-bidi: bidi-override }\nBDO[DIR="rtl"]  { direction: rtl; unicode-bidi: bidi-override }\n\n*[DIR="ltr"]    { direction: ltr; unicode-bidi: embed }\n*[DIR="rtl"]    { direction: rtl; unicode-bidi: embed }\n\n@media print {\n  h1            { page-break-before: always }\n  h1, h2, h3,\n  h4, h5, h6    { page-break-after: avoid }\n  ul, ol, dl    { page-break-before: avoid }\n}\n']);return a=function(){return n},n}function l(){var n=o()(["\n    padding: 3px;\n    border: 1px solid #000;\n    height: 30px;\n    user-select: none;\n    white-space: pre;\n    align-items: flex-start;\n    text-align: center;\n    cursor: default;\n    color: buttontext;\n    box-sizing: border-box;\n    padding: 1px 6px;\n    border-width: 2px;\n    border-style: outset;\n    border-color: buttonface;\n    border-image: initial;\n"]);return l=function(){return n},n}var c={Btn:i.c.button(l())};e.b=c;var u=i.c.div(a())}}]);