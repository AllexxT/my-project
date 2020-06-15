(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,t,n){var r=n(95),i=n(96),o=n(97);e.exports=function(e){return r(e)||i(e)||o()}},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ellipsis=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=u(o),l=n(17),c=u(n(5));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.ellipsis=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...",u=function(o){function c(e){s(this,c);var t=f(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));return t.checkEllipsis=t.checkEllipsis.bind(t),t.getDOMNodeProperty=t.getDOMNodeProperty.bind(t),t.startsWith=t.startsWith.bind(t),t.state={text:""+e.text,originalText:""+e.text},t}return p(c,o),i(c,[{key:"componentDidMount",value:function(){this.checkEllipsis()}},{key:"componentDidUpdate",value:function(){this.checkEllipsis()}},{key:"getDOMNodeProperty",value:function(e,t){return document.defaultView.getComputedStyle(e,null).getPropertyValue(t)}},{key:"checkEllipsis",value:function(){var e=(0,l.findDOMNode)(this.refs.component),r=this.getDOMNodeProperty(e,"line-height").replace("px","");if(this.getDOMNodeProperty(e,"height").replace("px","")/r>t){var i=this.state.text,o=i.substring(0,i.lastIndexOf(" "));this.startsWith(n," ")&&(o=o.substring(0,o.lastIndexOf(" "))),this.setState({text:""+o+n})}else this.hasTextChanges()&&this.setState({originalText:""+this.props.text,text:""+this.props.text})}},{key:"hasTextChanges",value:function(){return this.props.text!==this.state.originalText}},{key:"startsWith",value:function(e,t){return e.startsWith?e.startsWith(t):0===e.indexOf(t,0)}},{key:"render",value:function(){return a.default.createElement(e,r({ref:"component"},this.props,this.state))}}]),c}(o.Component);return u.propTypes={text:c.default.string.isRequired},u}},134:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(15),a=n(3),l=n(22),c=n.n(l),u=n(1),s=n.n(u),f=n(2);function p(){var e=s()(["\n    color: #474651;\n    margin: 5px 0 5px 20pt;\n"]);return p=function(){return e},e}function d(){var e=s()(["\n    font-size: 16px;\n    padding: 0 0 0 5pt;\n\n"]);return d=function(){return e},e}function h(){var e=s()(["\n    font-size: 21px;\n    padding: 0 0 0 5pt;\n\n"]);return h=function(){return e},e}function x(){var e=s()(["\n    display: flex;\n    flex-direction: column;\n    min-width: 1px;\n    /* word-break: break-all;  */  /*use this*/\n    /* word-wrap: break-word; */\n    margin: 5px;\n    @media (max-width: 576px) {\n        display: inline;\n    }\n"]);return x=function(){return e},e}function m(){var e=s()(["\n    position: relative;\n    margin: 5px;\n    @media (max-width: 576px) {\n        float: right;\n        align-items: flex-start;\n    }\n"]);return m=function(){return e},e}function v(){var e=s()(["\n    background-color: #f1f0ef;\n    display: flex;\n    width: 100%;\n    @media (max-width: 420px) {\n        display: flex;\n        flex-direction: column-reverse;\n    }\n"]);return v=function(){return e},e}function w(){var e=s()(["\n    line-height: 16pt;\n    position: relative;\n    display: flex;\n    padding: 10px;\n    max-width: 1060px;\n    flex: 0 1 50%;\n    justify-self: center;\n    min-width: 360px;\n"]);return w=function(){return e},e}var y={Container:f.c.div(w()),Container__row:f.c.div(v()),Card:f.c.div(m()),News:f.c.div(x()),News__title:f.c.div(h()),News__body:f.c.div(d()),News__time:f.c.time(p())},g=n(93),b=function(e){var t=e.newsItem,n=(t.id,t.title),r=t.body,o=t.product,a=t.created;t.changed;return i.a.createElement(y.Container,null,i.a.createElement(y.Container__row,null,i.a.createElement(y.Card,null,i.a.createElement(g.a,{card:o})),i.a.createElement(y.News,null,i.a.createElement(y.News__title,null,n),i.a.createElement(y.News__time,null,a),i.a.createElement(y.News__body,null,r))))};b.defaultProps={product:{name:"test",discount:!0,sertificate:!0,photos:[],prices:[],id:"test"}};var E=b,_=n(89);function O(){var e=s()(['\n  position: relative;\n  margin: 10px 0 20px 0;\n  padding: 0 0 20px;\n  position: relative;\n  font-size: 36px;\n  font-weight: 900;\n  line-height: 100%;\n  color: #333;\n\n  &:before {\n    content: "";\n    position: absolute;\n    width: 75px;\n    height: 10px;\n    display: block;\n    bottom: 0;\n    left: 0;\n    background-color: #f3cb55;\n  }\n']);return O=function(){return e},e}function k(){var e=s()(["\n  display: flex;\n  /* z-index:-50; */\n  flex-wrap: wrap;\n  @media (max-width: 950px) {\n    flex-direction: column;\n  }\n"]);return k=function(){return e},e}function j(){var e=s()(["\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  padding: 0 5pt;\n"]);return j=function(){return e},e}var N=f.c.div(j()),P=f.c.div(k()),C=f.c.div(O()),M=function(e){var t=e.news;return Object(r.useEffect)((function(){window.scroll({top:0,left:0,behavior:"smooth"})})),i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null,i.a.createElement(C,null,i.a.createElement("h1",null,"Новости и новинки")),i.a.createElement(P,null,t.news.length>0&&t.news.map((function(e){return i.a.createElement(E,{key:e.id,newsItem:e})}))||i.a.createElement("p",{style:{color:"darkgoldenrod",fontSize:"16px"}},"Нет новостей"))),i.a.createElement(_.a,null))};t.default=function(){var e=Object(o.c)((function(e){return e.newsReducer})),t=Object(o.b)();return Object(r.useEffect)((function(){t((function(e){c.a.get("api/news/").then((function(t){e({type:a.h,payload:t.data})})).catch((function(e){return console.log(e)}))}))}),[e.length]),i.a.createElement(M,{news:e})}},95:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},96:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},97:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}}]);