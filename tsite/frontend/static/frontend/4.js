(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{92:function(n,e,t){"use strict";var r=t(23),l=t.n(r),a=t(0),i=t.n(a),o=t(15),c=t(1),u=t.n(c),d=t(2),p=t(7),s=t(93);function m(){var n=u()(["\n  background-color: whitesmoke;\n  margin: 20px 10px 10px 10px;\n  border-left: 5px solid #f3cb55;\n  border-top: 5px solid #f3cb55;\n  border-bottom: 5px solid #535252;\n  border-right: 5px solid #535252;\n  animation: "," 1s ease-in;\n  padding: 10px;\n  font-size: 16px;\n  line-height: 22px;\n  box-shadow: 0px 5px 10px grey;\n  @media (max-width: 570px) {\n    max-height: 250px;\n    overflow: scroll;\n  }\n  h1 {\n    padding-bottom: 15px;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n  }\n  & ul li {\n    list-style: inside;\n    font-weight: bold;\n  }\n  ul {\n    margin-bottom: 10px;\n  }\n"]);return m=function(){return n},n}function f(){var n=u()(["\n    from {\n        opacity: 0;\n        top: -20px;\n    }\n\n    to {\n        opacity: 1;\n        top: 0px;\n    }\n"]);return f=function(){return n},n}var x=Object(p.default)((function(){return t.e(5).then(t.t.bind(null,133,7))})),g=Object(d.d)(f()),b=d.c.div(m(),g),h=function(n){var e=n.textOfPage,t=n.callBack,r=Object(o.c)((function(n){return n.authReducer})),c=Object(a.useRef)(null),u=Object(a.useState)(!1),d=l()(u,2),p=d[0],m=d[1],f=Object(a.useState)(""),g=l()(f,2),h=g[0],v=g[1];Object(a.useEffect)((function(){null!=r.user&&"admin"==r.user.username?m(!0):m(!1),v(e)}),[r.user,e]);return i.a.createElement(s.a,null,null!=e&&null!=e&&""!=e&&i.a.createElement(b,{dangerouslySetInnerHTML:{__html:e}}),p&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{ref:c,value:h,config:{readonly:!1,toolbarButtonSize:"large",processPasteHTML:"false"},tabIndex:1,onBlur:function(n){return v(n)},onChange:function(n){}}),i.a.createElement("button",{onClick:function(){return t(h)}},"Сохранить")))},v=t(22),E=t.n(v),y=t(16);e.a=function(){var n=Object(o.c)((function(n){return n.headReducer})),e=Object(a.useState)(null),t=l()(e,2),r=t[0],c=t[1],u=n.head.body;Object(y.h)();var d=function(n){var e=null;if(document.cookie&&""!==document.cookie)for(var t=document.cookie.split(";"),r=0;r<t.length;r++){var l=t[r].trim();if(l.substring(0,n.length+1)===n+"="){e=decodeURIComponent(l.substring(n.length+1));break}}return e}("csrftoken");Object(a.useEffect)((function(){c(null)}),[r]);return i.a.createElement(h,{textOfPage:u,callBack:function(e){var t=n.head,r=e.replace(/&nbsp;/g," ");t.body=r,E.a.put("/api/page/".concat(n.head.page,"/"),JSON.stringify(n.head),{headers:{"Content-Type":"application/json","X-CSRFToken":d}}).then((function(n){console.log(n.status),c(n.status)})).catch((function(n){return console.log(n)}))}})}},93:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t(1),l=t.n(r),a=t(2);function i(){var n=l()(['\nhtml, address,\nblockquote,\nbody, dd,\ndl, dt, fieldset, form,\nframe, frameset,\nh1, h2, h3, h4,\nh5, h6, noframes,\ncenter,\ndir, hr, menu, pre  { display: block; unicode-bidi: embed }       \nli              { display: list-item }\nul li           { list-style: square outside; margin-left: 3% }\nol li           { list-style: decimal; margin-left: 3% }\nh1              { font-size: 2em; margin: .67em 0 }\nh2              { font-size: 1.5em; margin: .75em 0 }\nh3              { font-size: 1.17em; margin: .83em 0 }\nh4, p,\nblockquote, ul,\nfieldset, form,\nol, dl, dir,\nmenu            { margin-bottom: 10px}\nh5              { font-size: .83em; margin: 1.5em 0 }\nh6              { font-size: .75em; margin: 1.67em 0 }\nh1, h2, h3, h4,\nh5, h6, b,\nstrong          { font-weight: bolder }\nblockquote      { margin-left: 40px; margin-right: 40px; }\ni, cite, em,\nvar, address    { font-style: italic }\nbutton, textarea,\ninput, select   { display: inline-block }\nbig             { font-size: 1.17em }\nsmall, sub, sup { font-size: .83em }\nsub             { vertical-align: sub }\nsup             { vertical-align: super }\nhr              { border: 1px solid gray }\nol, ul, dir,\nol              { list-style-type: decimal }\nol ul, ul ol,\nul ul, ol ol    { margin-top: 0; margin-bottom: 0 }\np, div          { font-size: 16px; line-height: 22px }\n/* strong          { overflow-wrap: break-word; } */\n\n\n/* ###################################################### */\n/* ######################### Tables ##################### */\n\ntable {\n    border-collapse: collapse;\n    border: 1px solid black;\n    margin-bottom: 1em;\n    width: auto;\n}\ntable tr {\n    page-break-inside: avoid;\n}\ntable thead tr td {\n    background-color: #F0F0F0;\n    border: 1px solid black;\n    min-width: 0.6em;\n    padding: 5px;\n    text-align: left;\n    vertical-align: top;\n    font-weight: bold;\n}\ntable tbody tr td {\n    border: 1px solid black;\n    min-width: 0.6em;\n    padding: 5px;\n    vertical-align: top;\n}\ntbody tr.even td {\n    background-color: transparent;\n}\n/* ###################################################### */\n/* Begin bidirectionality settings (do not change) */\nBDO[DIR="ltr"]  { direction: ltr; unicode-bidi: bidi-override }\nBDO[DIR="rtl"]  { direction: rtl; unicode-bidi: bidi-override }\n\n*[DIR="ltr"]    { direction: ltr; unicode-bidi: embed }\n*[DIR="rtl"]    { direction: rtl; unicode-bidi: embed }\n\n@media print {\n  h1            { page-break-before: always }\n  h1, h2, h3,\n  h4, h5, h6    { page-break-after: avoid }\n  ul, ol, dl    { page-break-before: avoid }\n}\n']);return i=function(){return n},n}function o(){var n=l()(["\n    padding: 3px;\n    border: 1px solid #000;\n    height: 30px;\n    user-select: none;\n    white-space: pre;\n    align-items: flex-start;\n    text-align: center;\n    cursor: default;\n    color: buttontext;\n    box-sizing: border-box;\n    padding: 1px 6px;\n    border-width: 2px;\n    border-style: outset;\n    border-color: buttonface;\n    border-image: initial;\n"]);return o=function(){return n},n}var c={Btn:a.c.button(o())};e.b=c;var u=a.c.div(i())},96:function(n,e,t){"use strict";var r=t(0),l=t.n(r),a=t(15),i=t(3),o=t(22),c=t.n(o),u=t(1),d=t.n(u),p=t(2);function s(){var n=d()(["\n  @media (max-width:755px){\n    display: flex;\n    flex-flow: column;\n  }\n  a {\n      display: flex;\n      justify-content: center;\n      border: 3px solid #383844;\n      border-radius: 5px;\n      padding: 0 10px;\n      font-weight: bold;\n      color: #333333;\n      transition: all 0.2s linear;\n      span {\n          padding: 10px 0 10px 0;\n          font-size: 16px;\n      }\n  }\n  a:hover {\n      background: #383844;\n      span {\n        color: #F5CB55;\n      }\n  }\n"]);return s=function(){return n},n}function m(){var n=d()(["\n  text-align: center;\n  span {\n    font-size: 25px;\n    font-weight: bold;\n    color: #373333;\n  }\n"]);return m=function(){return n},n}function f(){var n=d()(["\n  display: flex;\n  justify-content: space-around;\n  background-color: #EBD4A1;\n  min-height: 75px;\n  align-items: center;\n  line-height: 1.3;\n  margin: 40px 0 60px 0;\n\n  @media (max-width:577px){\n    flex-flow: column;\n    padding: 10px;\n  }\n"]);return f=function(){return n},n}function x(){var n=d()(["\n  position: relative;\n  margin: 0 0 13px 0;\n  /* padding: 0 0 20px; */\n  position: relative;\n  font-size: 26px;\n  font-weight: 900;\n  line-height: 100%;\n  color: #333;\n  text-align: center;\n"]);return x=function(){return n},n}function g(){var n=d()(["\n  display: flex;\n  flex-flow: column;\n  padding: 0 10px 20px 10px;\n  p {\n    font-size: ",";\n    line-height: ",";\n  }\n  ul {\n    padding-left: 18px;\n    li {\n      list-style: circle outside;\n    }\n   }\n"]);return g=function(){return n},n}function b(){var n=d()(["\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  padding: 0 5pt;\n  h2 {\n    font-size: 20px;\n    font-weight: bold;\n    margin-bottom: 15px;\n    text-align: center;\n  }\n  table {\n    border-collapse: collapse;\n    font-size: 16px;\n    color: #484340;\n    margin: 0 30px;\n    @media (max-width:469px){\n        margin: 0;\n    }\n  }\n  tr, td, th {\n    padding: 7px;\n  }\n  thead {\n    tr {\n      th:not(:first-child){\n        text-align: start;\n      }\n    }\n  }\n  tr {\n    border-bottom: 1px solid gray;\n    td {\n      text-align: start;\n    }\n  }\n  th {\n    font-size: 18px;\n  }\n  td {\n    text-align: center;\n  }\n"]);return b=function(){return n},n}var h=p.c.div(b()),v=p.c.div(g(),"16px","1.3"),E={PageWrapper:h,Title:p.c.h1(x()),Block:v,DiscoverPriceRow:p.c.div(f()),DiscoverText:p.c.p(m()),DiscoverNumbers:p.c.p(s())},y=t(6),w=t(92),k=function(n){var e=n.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.PageWrapper,null,l.a.createElement(E.Block,null,l.a.createElement(E.Title,null,"Укладка тротуарной плитки"),l.a.createElement("p",null,'Наши специалисты, компании "ЧП Джас" осуществляют оперативный просчёт и ',l.a.createElement("b",null,"недорогую укладку тротуарной плитки в Запорожье и Запорожской области,")," по минимальной цене. ",l.a.createElement("b",null,"Стоимость работ по мощению брусчатки,")," будет зависеть от следующих параметров:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Месторасположение объекта;"),l.a.createElement("li",null,"Площадь мощения;"),l.a.createElement("li",null,"Объем подготовительных работ;"),l.a.createElement("li",null,"Тип тротуарной плитки, ее размер и толщина;"),l.a.createElement("li",null,"Сложность реализуемого дизайнерского проекта;"),l.a.createElement("li",null,"Количество тротуарных и дорожных бордюров;"),l.a.createElement("li",null,"Дополнительные работы по благоустройству территории;")),l.a.createElement("p",null,"Наша фирма выполняет все необходимые работы и услуги под ключ в Запорожье и области.")),l.a.createElement("h2",null,"Расценки на укладку тротуарной плитки, прайс-лист на 2020 год."),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"№"),l.a.createElement("th",null,"Наименование работ"),l.a.createElement("th",null,"Цена"))),l.a.createElement("tbody",null,e.servprices.map((function(n,e){return l.a.createElement("tr",{key:e},l.a.createElement("th",null,e+1),l.a.createElement("td",null,n.description),l.a.createElement("td",null,n.price))})))),l.a.createElement(E.DiscoverPriceRow,null,l.a.createElement(E.DiscoverText,null,l.a.createElement("span",null,"Выбрать тротуарную плитку →")),l.a.createElement(E.DiscoverNumbers,null,l.a.createElement(y.b,{to:"/products/sett"},l.a.createElement("span",null,"Подробнее"))))),l.a.createElement(w.a,null))};function z(){var n=d()(["\n  @media (max-width:755px){\n    display: flex;\n    flex-flow: column;\n  }\n  a {\n      display: flex;\n      justify-content: center;\n      border: 3px solid #383844;\n      border-radius: 5px;\n      padding: 0 10px;\n      font-weight: bold;\n      color: #333333;\n      transition: all 0.2s linear;\n      span {\n          padding: 10px 0 10px 0;\n          font-size: 16px;\n      }\n  }\n  a:hover {\n      background: #383844;\n      span {\n        color: #F5CB55;\n      }\n  }\n"]);return z=function(){return n},n}function D(){var n=d()(["\n  text-align: center;\n  span {\n    font-size: 25px;\n    font-weight: bold;\n    color: #373333;\n  }\n"]);return D=function(){return n},n}function j(){var n=d()(["\n  display: flex;\n  justify-content: space-around;\n  background-color: #EBD4A1;\n  min-height: 75px;\n  align-items: center;\n  line-height: 1.3;\n  margin: 40px 0 60px 0;\n\n  @media (max-width:577px){\n    flex-flow: column;\n    padding: 10px;\n  }\n"]);return j=function(){return n},n}function B(){var n=d()(["\n  position: relative;\n  margin: 0 0 13px 0;\n  /* padding: 0 0 20px; */\n  position: relative;\n  font-size: 26px;\n  font-weight: 900;\n  line-height: 100%;\n  color: #333;\n  text-align: center;\n"]);return B=function(){return n},n}function O(){var n=d()(["\n  display: flex;\n  flex-flow: column;\n  padding-bottom: 20px;\n  p {\n    font-size: ",";\n    line-height: ",";\n  }\n"]);return O=function(){return n},n}function P(){var n=d()(["\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  padding: 0 5pt;\n  h2 {\n    font-size: 20px;\n    font-weight: bold;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  table {\n    border-collapse: collapse;\n    font-size: 16px;\n    color: #484340;\n    margin: 0 30px;\n    @media (max-width:469px){\n        margin: 0;\n    }\n  }\n  tr, td, th {\n    padding: 7px;\n  }\n  thead {\n    tr {\n      th:not(:first-child){\n        text-align: start;\n      }\n    }\n  }\n  tr {\n    border-bottom: 1px solid gray;\n    td {\n      text-align: start;\n    }\n  }\n  th {\n    font-size: 18px;\n  }\n  td {\n    text-align: center;\n  }\n"]);return P=function(){return n},n}var T=p.c.div(P()),R=p.c.div(O(),"16px","1.3"),F={PageWrapper:T,Title:p.c.h1(B()),Block:R,DiscoverPriceRow:p.c.div(j()),DiscoverText:p.c.p(D()),DiscoverNumbers:p.c.p(z())},C=function(n){var e=n.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.PageWrapper,null,l.a.createElement(F.Block,null,l.a.createElement(F.Title,null,"Установка еврозабора цена в Запорожье, прайс-лист на 2020 год.")),l.a.createElement("h2",null),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"№"),l.a.createElement("th",null,"Наименование работ"),l.a.createElement("th",null,"Цена"))),l.a.createElement("tbody",null,e.servprices.map((function(n,e){return l.a.createElement("tr",{key:e},l.a.createElement("th",null,e+1),l.a.createElement("td",null,n.description),l.a.createElement("td",null,n.price))})))),l.a.createElement(F.DiscoverPriceRow,null,l.a.createElement(F.DiscoverText,null,l.a.createElement("span",null,"Выбрать еврозабор →")),l.a.createElement(F.DiscoverNumbers,null,l.a.createElement(y.b,{to:"/products/fence"},l.a.createElement("span",null,"Подробнее"))))),l.a.createElement(w.a,null))};function I(){var n=d()(["\n  @media (max-width:755px){\n    display: flex;\n    flex-flow: column;\n  }\n  a {\n      display: flex;\n      justify-content: center;\n      border: 3px solid #383844;\n      border-radius: 5px;\n      padding: 0 10px;\n      font-weight: bold;\n      color: #333333;\n      transition: all 0.2s linear;\n      span {\n          padding: 10px 0 10px 0;\n          font-size: 16px;\n      }\n  }\n  a:hover {\n      background: #383844;\n      span {\n        color: #F5CB55;\n      }\n  }\n"]);return I=function(){return n},n}function N(){var n=d()(["\n  text-align: center;\n  span {\n    font-size: 25px;\n    font-weight: bold;\n    color: #373333;\n  }\n"]);return N=function(){return n},n}function S(){var n=d()(["\n  display: flex;\n  justify-content: space-around;\n  background-color: #EBD4A1;\n  min-height: 75px;\n  align-items: center;\n  line-height: 1.3;\n  margin: 40px 0 60px 0;\n\n  @media (max-width:577px){\n    flex-flow: column;\n    padding: 10px;\n  }\n"]);return S=function(){return n},n}function W(){var n=d()(["\n  position: relative;\n  margin: 0 0 13px 0;\n  /* padding: 0 0 20px; */\n  position: relative;\n  font-size: 26px;\n  font-weight: 900;\n  line-height: 100%;\n  color: #333;\n  text-align: center;\n"]);return W=function(){return n},n}function q(){var n=d()(["\n  display: flex;\n  flex-flow: column;\n  padding-bottom: 20px;\n  p {\n    font-size: ",";\n    line-height: ",";\n  }\n"]);return q=function(){return n},n}function A(){var n=d()(["\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  padding: 0 5pt;\n  h2 {\n    font-size: 20px;\n    font-weight: bold;\n    margin-bottom: 15px;\n    text-align: center;\n  }\n  table {\n    border-collapse: collapse;\n    font-size: 16px;\n    color: #484340;\n    margin: 0 30px;\n    @media (max-width:469px){\n        margin: 0;\n    }\n  }\n  tr, td, th {\n    padding: 7px;\n  }\n  thead {\n    tr {\n      th:not(:first-child){\n        text-align: start;\n      }\n    }\n  }\n  tr {\n    border-bottom: 1px solid gray;\n    td {\n      text-align: start;\n    }\n  }\n  th {\n    font-size: 18px;\n  }\n  td {\n    text-align: center;\n  }\n"]);return A=function(){return n},n}var J=p.c.div(A()),H=p.c.div(q(),"16px","1.3"),L={PageWrapper:J,Title:p.c.h1(W()),Block:H,DiscoverPriceRow:p.c.div(S()),DiscoverText:p.c.p(N()),DiscoverNumbers:p.c.p(I())},M=function(n){var e=n.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(L.PageWrapper,null,l.a.createElement(L.Block,null,l.a.createElement(L.Title,null,"Установка памятников цена в Запорожье, прайс-лист на 2020 год.")),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"№"),l.a.createElement("th",null,"Наименование работ"),l.a.createElement("th",null,"Цена"))),l.a.createElement("tbody",null,e.servprices.map((function(n,e){return l.a.createElement("tr",{key:e},l.a.createElement("th",null,e+1),l.a.createElement("td",null,n.description),l.a.createElement("td",null,n.price))})))),l.a.createElement(L.DiscoverPriceRow,null,l.a.createElement(L.DiscoverText,null,l.a.createElement("span",null,"Каталог памятников →")),l.a.createElement(L.DiscoverNumbers,null,l.a.createElement(y.b,{to:"/products/monuments"},l.a.createElement("span",null,"Подробнее"))))),l.a.createElement(w.a,null))};e.a=function(n){var e=n.page,t=Object(a.c)((function(n){return n.servicesReducer})),o=Object(a.b)();return Object(r.useEffect)((function(){o(function(n){return function(e){e({type:i.o}),c.a.get("/api/serviceprices/?page=".concat(n)).then((function(n){e({type:i.q,payload:n.data})})).catch((function(n){console.log(n),e({type:i.p,payload:n})}))}}(e))}),[]),l.a.createElement(l.a.Fragment,null,t.fetching&&l.a.createElement("p",null,"loading")||l.a.createElement(l.a.Fragment,null,"sett"==e&&l.a.createElement(k,{data:t.servicesPage[0]}),"fence"==e&&l.a.createElement(C,{data:t.servicesPage[0]}),"monuments"==e&&l.a.createElement(M,{data:t.servicesPage[0]})))}}}]);