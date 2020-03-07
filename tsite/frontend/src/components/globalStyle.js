import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{padding:0;margin:0;border:0;}
    *,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}
    :focus,:active{outline:none;}
    a:focus,a:active{outline:none;}
    nav,footer,header,aside{display:block;}
    html,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
    input,button,textarea{font-family:inherit;}
    input::-ms-clear{display:none;}
    button{cursor:pointer;}
    button::-moz-focus-inner{padding:0;border:0;}
    a,a:visited{text-decoration:none;}
    a:hover{text-decoration:none;}
    ul li{list-style:none;}
    img{vertical-align:top;}
    h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;}
    /* Custom settings */
    html { overflow-y: scroll; scroll-behavior: smooth; } /* static scrollbar */

    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: rgba(191, 180, 180, 50%);
    }
    #root {height: 100%; width: 100%}
`

export default GlobalStyle;

//// Import new fonts
// @font-face{
//     font-family: "${name}";
//     src: url(${require('../../../../fonts/' + src + '.eot')});
//     src: url(${require('../../../../fonts/' + src + '.eot')}?#iefix) format("embedded-opentype"),
//          url(${require('../../../../fonts/' + src + '.woff')}) format("woff"),
//          url(${require('../../../../fonts/' + src + '.ttf')}) format("truetype"),
//          url(${require('../../../../fonts/' + src + '.svg')}#${name}) format("svg");

//     font-style: ${fontStyle};
//     font-weight: ${fontWeight};
// }

// const GlobalStyle = createGlobalStyle`
//     *{padding:0;margin:0;border:0;}
//     *,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}
//     :focus,:active{outline:none;}
//     a:focus,a:active{outline:none;}
//     nav,footer,header,aside{display:block;}
//     html,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
//     input,button,textarea{font-family:inherit;}
//     input::-ms-clear{display:none;}
//     button{cursor:pointer;}
//     button::-moz-focus-inner{padding:0;border:0;}
//     a,a:visited{text-decoration:none;}
//     a:hover{text-decoration:none;}
//     ul li{list-style:none;}
//     img{vertical-align:top;}
//     h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;}
//     #root {height: 100%;}
// `