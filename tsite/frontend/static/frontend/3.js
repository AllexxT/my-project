(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{95:function(e,n,t){"use strict";var o=t(23),r=t.n(o),a=t(0),i=t.n(a),l=t(15),c=t(3),u=t(22),s=t.n(u),p=t(16),d=t(101),f=t(1),m=t.n(f),h=t(2);function g(){var e=m()(["\n  z-index: 0;\n  display: flex;\n  flex-wrap: wrap;\n  & > div {\n    /* Cards margin */\n    margin: 15px 15px 15px 15px;\n  }\n  @media (max-width:800px){\n    justify-content: center;\n  }\n"]);return g=function(){return e},e}function x(){var e=m()(["\n  display: flex;\n  @media (max-width:800px){\n        justify-content: center;\n    }\n"]);return x=function(){return e},e}function b(){var e=m()(["\n  padding: 10px 0 10px 13px;\n  font-size: 32px;\n  line-height: 28px;\n  animation: "," 1s linear;\n  @media (max-width: 576px) {\n    text-align: center;\n    padding-left: 0;\n    /* font-size: 32px; */\n  }\n"]);return b=function(){return e},e}function E(){var e=m()(["\n    from {\n        opacity: 0;\n        top: -20px;\n    }\n    to {\n        opacity: 1;\n        top: 0px;\n    }\n"]);return E=function(){return e},e}function v(){var e=m()(["\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  position: relative;\n"]);return v=function(){return e},e}var A=h.c.div(v()),w=Object(h.d)(E()),y={PWrapper:A,PTitle:h.c.h2(b(),w),PContentWrapper:h.c.div(x()),PContent:h.c.ul(g())},C=t(5),S=t.n(C),j=t(17),k=t.n(j),O=t(97),P=t.n(O),D=["accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","challenge","charSet","checked","cite","classID","className","colSpan","cols","content","contentEditable","contextMenu","controls","controlsList","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","encType","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","height","hidden","high","href","hrefLang","htmlFor","httpEquiv","icon","id","inputMode","integrity","is","keyParams","keyType","kind","label","lang","list","loop","low","manifest","marginHeight","marginWidth","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","nonce","open","optimum","pattern","placeholder","poster","preload","profile","radioGroup","readOnly","rel","required","reversed","role","rowSpan","rows","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","spellCheck","src","srcDoc","srcLang","srcSet","start","step","style","summary","tabIndex","target","title","type","useMap","value","width","wmode","wrap"],I=["about","datatype","inlist","prefix","property","resource","typeof","vocab"],B=["onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onReset","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onError","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onToggle"],T=/data-([a-zA-Z0-9\-]*)/,q=/aria-([a-zA-Z0-9\-]*)/,M=function(e,n,t){void 0===e&&(e={}),void 0===n&&(n=[]),void 0===t&&(t=[]);var o=Object.assign({},e),r=Object.keys(o).filter((function(e){return-1===n.indexOf(e)&&(t.indexOf(e)>-1||(-1!==D.indexOf(e)||(-1!==I.indexOf(e)||(!!T.test(e)||(!!q.test(e)||-1!==B.indexOf(e))))))}));return Object.keys(o).forEach((function(e){-1===r.indexOf(e)&&delete o[e]})),o};function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){G(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function G(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var K=function(e){var n,t;function o(n){var t;return(t=e.call(this,n)||this).onScrollThrottled=P()(t.onScroll.bind(L(t)),n.throttleScroll,{trailing:!1}),t.onResizeThrottled=P()(t.onResize.bind(L(t)),n.throttleResize,{trailing:!1}),t.state={inViewport:!1,progress:0,lastScrollPosition:null,lastScrollTime:null},t}t=e,(n=o).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var r=o.prototype;return r.componentDidMount=function(){addEventListener("resize",this.onResizeThrottled),addEventListener("scroll",this.onScrollThrottled),this.props.triggerOnLoad&&this.checkStatus()},r.componentDidUpdate=function(e,n){e.throttleScroll!==this.props.throttleScroll&&(removeEventListener("scroll",this.onScrollThrottled),this.onScrollThrottled=P()(this.onScroll.bind(this),this.props.throttleScroll,{trailing:!1}),addEventListener("scroll",this.onScrollThrottled)),e.throttleResize!==this.props.throttleResize&&(removeEventListener("resize",this.onResizeThrottled),this.onResizeThrottled=P()(this.onResize.bind(this),this.props.throttleResize,{trailing:!1}),addEventListener("resize",this.onResizeThrottled))},r.componentWillUnmount=function(){removeEventListener("resize",this.onResizeThrottled),removeEventListener("scroll",this.onScrollThrottled)},r.onResize=function(){this.checkStatus()},r.onScroll=function(){this.checkStatus()},r.checkStatus=function(){var e=this.props,n=e.containerRef,t=e.onEnter,o=e.onExit,r=e.onProgress,a=this.state,i=a.lastScrollPosition,l=a.lastScrollTime,c=k.a.findDOMNode(this.element).getBoundingClientRect(),u="string"==typeof n?document.querySelector(n):n,s=n===document.documentElement?Math.max(n.clientHeight,window.innerHeight||0):u.clientHeight,p=c.top<=s&&c.bottom>=0,d=window.scrollY,f=i&&l?Math.abs((i-d)/(l-Date.now())):null;if(p){var m=Math.max(0,Math.min(1,1-c.bottom/(s+c.height)));return this.state.inViewport||(this.setState({inViewport:p}),t({progress:m,velocity:f},this)),r({progress:m,velocity:f},this),void this.setState({lastScrollPosition:d,lastScrollTime:Date.now()})}if(this.state.inViewport){var h=c.top<=s?1:0;this.setState({lastScrollPosition:d,lastScrollTime:Date.now(),inViewport:p,progress:h}),r({progress:h,velocity:f},this),o({progress:h,velocity:f},this)}},r.render=function(){var e=this,n=this.props,t=n.children,o=n.component,r=i.a.isValidElement(o)?"cloneElement":"createElement";return i.a[r](o,z(z({},M(this.props,["onProgress"])),{},{ref:function(n){e.element=n}}),t)},o}(a.Component);K.propTypes={component:S.a.oneOfType([S.a.element,S.a.node]),containerRef:S.a.oneOfType([S.a.object,S.a.string]),throttleResize:S.a.number,throttleScroll:S.a.number,triggerOnLoad:S.a.bool,onEnter:S.a.func,onExit:S.a.func,onProgress:S.a.func},K.defaultProps={component:"div",containerRef:"undefined"!=typeof document?document.documentElement:"html",throttleResize:100,throttleScroll:100,triggerOnLoad:!0,onEnter:function(){},onExit:function(){},onProgress:function(){}};var Y=function(e){var n=e.data,t=Object(p.h)(),o=n.products[0].article,r=o.title,l=o.article;return Object(a.useEffect)((function(){t.hash?window.location.href=t.hash:window.scroll({top:0,left:0,behavior:"smooth"})}),[]),i.a.createElement(y.PWrapper,null,i.a.createElement(y.PTitle,{id:l},r),i.a.createElement(y.PContentWrapper,null,i.a.createElement(y.PContent,null,n.products.map((function(e){return i.a.createElement(d.b,{key:e.id,card:e})})))))};function F(){var e=m()(["\n    max-width: 100vw;\n    padding: 10pt 5pt 0 5pt;\n"]);return F=function(){return e},e}function Z(){var e=m()(["\n    align-self: center;\n    padding: 5pt 0 5pt 0;\n    font-size: 12pt;\n    flex: 1 1 auto;\n    text-align: center;\n"]);return Z=function(){return e},e}function Q(){var e=m()(["\n    display: flex;\n    justify-content: center;\n    padding-bottom: 5pt;\n    @media (min-width: 950px){\n            padding-bottom: 15pt;\n        }\n    h1 {\n        font-size: 24pt;\n        color: rgb(35, 32, 32);\n        line-height:2.5rem;\n        text-align: center;\n    }\n"]);return Q=function(){return e},e}function W(){var e=m()(["\n"]);return W=function(){return e},e}function J(){var e=m()(["\n    display: flex;\n    flex-direction: column;\n    flex: 1 3 auto;\n    padding: 0 2pt 0 2pt;\n"]);return J=function(){return e},e}function H(){var e=m()(["\n    position: relative;\n    display: flex;\n    flex: 1 1 70%;\n\n    @media (max-width: 768px){\n        flex: 1 1 auto;\n        justify-items: center;\n        width: 100%;\n    }\n"]);return H=function(){return e},e}function U(){var e=m()(["\n    display: flex;\n    @media (max-width: 768px){\n        display: block;\n    }\n"]);return U=function(){return e},e}function N(){var e=m()(["\n    padding: 0 0 15pt 0;\n"]);return N=function(){return e},e}var V={Wrapper:h.c.div(N()),Gallery_Table__row:h.c.div(U()),GalleryWrapper:h.c.div(H()),TableWrapper:h.c.div(J()),TitleWrapper:h.c.div(W()),Title__row:h.c.div(Q()),Sizes:h.c.div(Z()),DescriptionWrapper:h.c.div(F())};function X(){var e=m()(["\n    display: flex;\n    box-shadow: 0px 10px 8px -8px gray;\n    width: fit-content;\n    caption {\n        font-weight: bold;\n        font-size: 17pt;\n        color: #3D3511;\n        margin-bottom: 15pt;\n        display: none;\n        @media (min-width: 950px){\n            display: table-caption;\n        }\n    }\n    table {\n        border-spacing: 0;\n        empty-cells: hide;\n        }\n    td {\n        padding: 10px 10px;\n        text-align: center;\n        border-bottom: 1px solid gray;\n        transition: all 0.3s linear;\n        box-shadow: 0px 5px 10px gray;\n\n    }\n    td:first-child {\n        text-align: left;\n        color: #3D3511;\n        font-weight: bold;\n    }\n    th {\n        padding: 10px 10px;\n        color: #3D3511;\n        border-bottom: 1px solid gray;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        box-shadow: 0px 5px 10px gray;\n\n    }\n    td:nth-child(even) {\n        background: whitesmoke;\n    }\n    td:nth-child(odd) {\n        background: whitesmoke;\n    }\n    td:first-child {\n        background: whitesmoke;\n    }\n    th:nth-child(even)  {\n        background: rgb(225, 225, 225);\n        font-size: 14pt;\n        color: black;\n    }\n    th:nth-child(odd)  {\n        background: rgb(225, 225, 225);\n        font-size: 14pt;\n        color: black;\n    }\n    tr:nth-child(1) td:first-child {\n        /* border-top-left-radius: 5px; */\n    }\n    tr:last-child td:first-child {\n        /* border-bottom-left-radius: 5px; */\n    }\n    tr:hover td{\n        background: rgba(255, 241, 135, 0.7);\n        font-weight: bold;\n    }\n"]);return X=function(){return e},e}function _(){var e=m()(["\n    display: flex;\n    flex: 1 1 auto;\n    flex-direction: column;\n"]);return _=function(){return e},e}function $(){var e=m()(["\n    display: flex;\n    flex-flow: column;\n    flex: 1 1 auto;\n    padding-left: 5px;\n    align-items: center;\n"]);return $=function(){return e},e}var ee={Wrapper:h.c.div($()),Press:h.c.div(_()),Content__row:h.c.div(X())},ne=function(e){var n=e.prices,t=0!=n.length&&n[0].depthPrice.length>0&&i.a.createElement("table",null,i.a.createElement("caption",null,"Стоимость"),i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Цвет"),n[0].depthPrice.map((function(e,n){return i.a.createElement("th",{key:n},e.depth.size)})))),i.a.createElement("tbody",null,n.map((function(e,n){return i.a.createElement("tr",{key:n},i.a.createElement("td",{key:e.id},e.color),e.depthPrice.map((function(e,n){return i.a.createElement("td",{key:n},e.price)})))}))));return i.a.createElement(ee.Wrapper,null,i.a.createElement(ee.Press,null),i.a.createElement(ee.Content__row,null,t))};ne.defaultProps={sizes:"sizes",prices:[{depthPrice:[]}]};var te=ne,oe=t(98),re=t.n(oe);t(99);function ae(){var e=m()(["\n    display: flex;\n    justify-content: flex-start;\n    padding: 6px 6px 6px 0;\n    box-shadow: 0px 5px 10px gray;\n    background-color: rgba(255, 255, 255, 0.7);\n    &>div {\n    }\n    @media (max-width: 768px){\n        justify-content: center;\n        margin-bottom: 10px;\n        width: fit-content;\n    }\n    & .image-gallery{\n        display: flex;\n        flex-flow: column;\n        justify-content: center;\n    }\n    & .image-gallery-content.fullscreen {\n        z-index: 2000;\n    }\n"]);return ae=function(){return e},e}function ie(){var e=m()(["\n    @media (max-width: 768px){\n        display: flex;\n        justify-content: center;\n    }\n"]);return ie=function(){return e},e}function le(){var e=m()(["\n    display: flex;\n    flex: ",";\n    display: inherit;\n"]);return le=function(){return e},e}var ce={Wrapper:h.c.div(le(),(function(e){return e.isMonument?"1":"auto"})),MainFrame:h.c.div(ie()),MainF__row:h.c.div(ae())},ue=function(e){var n=e.photos,t=void 0===n?[]:n,o=e.isMonument,l=Object(a.useState)([]),c=r()(l,2),u=c[0],s=c[1];return Object(a.useEffect)((function(){s(t.map((function(e){return{fullscreen:e.photo.full_size,original:o?e.photo.full_size:e.photo.medium_square_crop,thumbnail:e.photo.small_square_crop}})))}),[]),i.a.createElement(ce.Wrapper,{isMonument:o},i.a.createElement(ce.MainFrame,null,u.length>0&&i.a.createElement(ce.MainF__row,null,i.a.createElement(re.a,{thumbnailPosition:"left",showIndex:!0,showPlayButton:!1,items:u}))))};ue.defaultProps={photos:[{photo:{}}]};var se=ue,pe=t(7),de=t(93),fe=Object(pe.default)((function(){return t.e(5).then(t.t.bind(null,133,7))})),me=function(e){var n=e.description,t=e.callBack,o=Object(l.c)((function(e){return e.authReducer})),c=Object(a.useRef)(null),u=Object(a.useState)(!1),s=r()(u,2),p=s[0],d=s[1],f=Object(a.useState)(""),m=r()(f,2),h=m[0],g=m[1];Object(a.useEffect)((function(){null!=o.user&&"admin"==o.user.username?d(!0):d(!1),g(n)}),[o.user]);return i.a.createElement(de.a,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),p&&i.a.createElement(i.a.Fragment,null,i.a.createElement(fe,{ref:c,value:h,config:{toolbarButtonSize:"large",processPasteHTML:"false"},tabIndex:1,onBlur:function(e){return g(e)},onChange:function(e){}}),i.a.createElement(de.b.Btn,{onClick:function(){return t(h)}},"Сохранить")))};function he(){var e=m()(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 15px 5px 10px 5px;\n\n    p {\n        font-size: 18px;\n        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);\n        span {\n            font-weight: bolder;\n            text-shadow: 1px 1px 1px rgba(0,0,0,0.5);\n        }\n    }\n"]);return he=function(){return e},e}function ge(){var e=m()(["\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid #afaaa6;\n  text-align: center;\n  height: 100%;\n  &:first-child {\n      padding-top: 15px;\n  }\n  &:last-child {\n      padding-bottom: 10px;\n      border-bottom: 0;\n  }\n  div:first-child {\n      border-right: 1px solid #afaaa6;\n  }\n"]);return ge=function(){return e},e}function xe(){var e=m()(["\n  padding: 0 15px 0 15px;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-around;\n"]);return xe=function(){return e},e}function be(){var e=m()(["\n    display: flex;\n    flex-flow: column;\n    flex: 1 1 auto;\n    /* margin: 0 20px 0 20px; */\n    width: 70%;\n    align-self: center;\n    border-top: 5px solid #E8B718;\n    border-bottom: 5px solid rgba(55, 55, 66, 0.6);\n    background-color: #ccc7c7;\n    box-shadow: 0px 5px 10px gray;\n"]);return be=function(){return e},e}var Ee={Wrapper:h.c.div(be()),PricesBox:h.c.div(xe()),TitleRow:h.c.div(ge()),TitleLabels:h.c.div(he())},ve=function(e){var n=e.prices;return i.a.createElement(Ee.Wrapper,null,i.a.createElement(Ee.PricesBox,null,i.a.createElement(Ee.TitleRow,null,i.a.createElement(Ee.TitleLabels,null,i.a.createElement("p",null,i.a.createElement("span",null,"Цвет"))),i.a.createElement(Ee.TitleLabels,null,i.a.createElement("p",null,i.a.createElement("span",null,"Цена")))),null!=n&&n.length>0&&n.map((function(e){return i.a.createElement(Ee.TitleRow,{key:e.id},i.a.createElement(Ee.TitleLabels,null,i.a.createElement("p",null,e.color)),i.a.createElement(Ee.TitleLabels,null,i.a.createElement("p",null,e.noDepthPrice)))}))||i.a.createElement(Ee.TitleRow,null,i.a.createElement(Ee.TitleLabels,null,i.a.createElement("p",null,"Серый")),i.a.createElement(Ee.TitleLabels,null,i.a.createElement("p",null,"Уточните по телефону")))))},Ae=t(100),we=function(e){var n=e.product,t=e.callBack,o=Object(a.useRef)(),r=(n.id,n.name),l=n.article,c=(n.sertificate,n.sizes),u=n.description,s=(n.discount,n.lowerPriceNoTable,n.prices),p=n.photos,d=n.seoDescription,f=n.keywords;Object(a.useEffect)((function(){window.scroll({top:o.current.offsetTop-500,left:0,behavior:"smooth"})}),[]);var m=null!=l&&"monuments"==l.page.page&&"coverplate"!=l.article&&"nameplate"!=l.article,h=document.location.href.replace("www.","");return i.a.createElement(i.a.Fragment,null,i.a.createElement(Ae.a,null,i.a.createElement("meta",{name:"theme-color",content:"r#de9c2a"}),d&&i.a.createElement("meta",{name:"description",content:d}),f&&i.a.createElement("meta",{name:"keywords",content:f}),i.a.createElement("title",null,"".concat(r," Купить в Запорожье Цена — ЧП Джас")),i.a.createElement("link",{rel:"canonical",href:h})),i.a.createElement(V.Wrapper,{ref:o},i.a.createElement(V.Gallery_Table__row,null,i.a.createElement(se,{photos:p,isMonument:m}),i.a.createElement(V.TableWrapper,null,i.a.createElement(V.TitleWrapper,null,i.a.createElement(V.Title__row,null,i.a.createElement("h1",null,r))),i.a.createElement(V.Sizes,null,c),null!=l&&"vibropressed"==l.article&&i.a.createElement(te,{sizes:c,prices:s})||i.a.createElement(ve,{prices:s}))),i.a.createElement(V.DescriptionWrapper,null,i.a.createElement(me,{description:u,callBack:t}))))};we.defaultProps={product:{photos:[]}};var ye=we,Ce=function(e){var n=e.product,t=Object(a.useState)(null),o=r()(t,2),l=o[0],c=o[1],u=Object(p.i)().productId;var d=function(e){var n=null;if(document.cookie&&""!==document.cookie)for(var t=document.cookie.split(";"),o=0;o<t.length;o++){var r=t[o].trim();if(r.substring(0,e.length+1)===e+"="){n=decodeURIComponent(r.substring(e.length+1));break}}return n}("csrftoken");Object(a.useEffect)((function(){c(null)}),[l]);return i.a.createElement(ye,{product:n,callBack:function(e){var t=n,o=e.replace(/&nbsp;/g," ");t.description=o,s.a.put("/api/products/".concat(u,"/"),JSON.stringify(n),{headers:{"Content-Type":"application/json","X-CSRFToken":d}}).then((function(e){console.log(e.status),c(e.status)})).catch((function(e){return console.log(e)}))}})},Se=function(){return i.a.createElement("div",{style:{height:"100vh"}},"LOADING...")},je=function(){return i.a.createElement("div",null,"404:PAGE NOT FOUND")},ke=function(){var e=Object(p.i)().productId,n=Object(l.b)(),t=Object(l.c)((function(e){return e.productReducer})),o=404==t.fetching?i.a.createElement(je,null):i.a.createElement(Se,null);return Object(a.useEffect)((function(){var t;n((t=e,function(e){e({type:c.l}),s.a.get("/api/product/".concat(t,"/")).then((function(n){e({type:c.m,payload:n.data})})).catch((function(n){console.log(n),e({type:c.k,payload:n})}))}))}),[]),t.fetching?o:i.a.createElement(Ce,{product:t.product})},Oe=t(92);function Pe(){var e=m()(["\n  margin-bottom: 10px;\n  font-size: 12px;\n  line-height: 13px;\n  border-bottom: 1px solid rgba(30, 29, 28, 0.3);\n  &:first-child {\n      padding-top: 50px;\n  }\n  &:last-child {\n      border: unset;\n  }\n  a {\n      display: inline-block;\n      color: whitesmoke;\n      letter-spacing: 1px;\n      text-transform: uppercase;\n      height: 100%;\n      width: 100%;\n        padding: 10px;\n  }\n"]);return Pe=function(){return e},e}function De(){var e=m()(["\n  visibility: hidden;\n  position: absolute;\n  /* display: flex;\n  flex-flow: column; */\n  overflow: scroll;\n  top: 0px;\n  box-shadow: gray 0px 5px 10px;\n  background: rgba(82, 82, 82, 0.8);  /* #525252; */\n  /* @media(min-height: 553px) {\n      overflow: scroll;\n  } */\n"]);return De=function(){return e},e}function Ie(){var e=m()(['\n  @media (min-width: 901px) {\n    display: none;\n  }\n  position: fixed;\n  top: 50%;\n  left: 3px;\n  z-index: 20;\n  background: rgba(239, 156, 27, 0.8);\n  /* backdrop-filter: blur(2px); */\n  /* text-shadow: 1px 1px 0px white; */\n  font-weight: bold;\n  height: 30px;\n  padding-top: 8px;\n  span {\n    padding-left: 2px;\n  }\n  &:after {\n    content: " ";\n    top: 0px;\n    position: absolute;\n    border: 15px solid transparent;\n    border-right-width: 0;\n    border-left: 14px solid rgba(239, 156, 27, 0.8);\n  }\n  &:hover {\n      visibility: hidden;\n      width: auto;\n      ul {\n        visibility: visible;\n        left: unset;\n        z-index: 1;\n      }\n  }\n']);return Ie=function(){return e},e}function Be(){var e=m()(['\n  width: 40px;\n  height: 50px;\n  position: fixed;\n  right: 10px;\n  top: 50%;\n  z-index: 1;\n  font-size: 12px;\n  cursor: pointer;\n  color: gray;\n  &:before {\n      position: absolute;\n      content: "»";\n      font-size: 55px;\n      transform: rotate(-90deg);\n      left: 0px;\n  }\n']);return Be=function(){return e},e}var Te={GoUp:h.c.div(Be()),MenuIcon:h.c.nav(Ie()),MenuList:h.c.ul(De()),Item:h.c.li(Pe())},qe=function(e){var n=e.anchor,t=n[0].article.article,o=n[0].article.title;return i.a.createElement(Te.Item,null,i.a.createElement("a",{href:"#".concat(t)},o))},Me=function(e){var n=e.items;return i.a.createElement(i.a.Fragment,null,i.a.createElement(Te.GoUp,{onClick:function(){return window.scroll({top:0,left:0,behavior:"smooth"})}},"ВВЕРХ"),i.a.createElement(Te.MenuIcon,null,i.a.createElement("span",null,"ТИП"),i.a.createElement(Te.MenuList,null,n.map((function(e,n){return i.a.createElement(qe,{key:n,anchor:e})})))))},Re=function(){return i.a.createElement("div",{style:{position:"relative",height:"100vh"}},i.a.createElement("div",{style:{position:"relative",width:"100%",fontSize:"40px",textAlign:"center",margin:"40px 0 0 0",color:"#525252"}},"ЗАГРУЗКА ..."))},ze=function(){var e=Object(a.useState)(!1),n=r()(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){o(!0)}),200);return function(){clearTimeout(e)}}),[t]),i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},t&&i.a.createElement("img",{src:"data:image/gif;base64,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",style:{maxWidth:"100%"},alt:"no data available"}))};n.a=function(e){var n=e.page,t=e.categories,o=(e.textOfPage,Object(l.c)((function(e){return e.productsReducer}))),r=Object(l.b)(),u=Object(p.j)(),d=Object(p.h)();Object(a.useEffect)((function(){r(function(e){return function(n){n({type:c.i}),s.a.get("/api/products/?page=".concat(e)).then((function(e){n({type:c.j,payload:e.data})})).catch((function(e){return console.log(e)}))}}(n))}),[o.length]);var f=o.products,m=[],h=[];f.forEach((function(e){var n=e.article.article;!m.includes(n)&&m.push(n)})),m.forEach((function(e){var n=[];f.forEach((function(t){var o=t.article.article;e==o&&n.push(t)})),h.push(n)}));var g=[];return t.forEach((function(e){h.forEach((function(n){n[0].article.article==e&&g.push(n)}))})),i.a.createElement(i.a.Fragment,null,d.pathname.split("/").length<=3&&i.a.createElement(Me,{items:g}),i.a.createElement(p.d,null,i.a.createElement(p.b,{path:"".concat(u.path,"/:productId"),component:ke}),i.a.createElement(p.b,{path:u.path},o.fetching?i.a.createElement(Re,null):o.products.length>0&&g.map((function(e,n){return i.a.createElement(Y,{key:n,data:{products:e}})}))||i.a.createElement(ze,null),i.a.createElement(Oe.a,null))))}}}]);