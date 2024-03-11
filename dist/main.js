(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>f});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),s=t.n(c),u=new URL(t(264),t.b),d=new URL(t(675),t.b),l=i()(r()),p=s()(u),m=s()(d);l.push([e.id,`@font-face {\n    font-family: 'Teko';\n    src: url(${p}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n:root {\n    font-family: 'Teko', 'Times New Roman', Times, serif;\n    font-size: 16px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: fit-content;\n    background: url(${m});\n    background-size: cover;\n    \n}\n\nheader {\n    width: fill;    \n    height: auto;    \n    background-color: rgba(0, 0, 0, 0.75);       \n    padding: 0.75em;\n    position: sticky;\n    top: 0;       \n}\n\nnav {      \n    display: flex;\n    justify-content: space-around;\n}\n\n#content {    \n    flex-grow: 1;       \n    color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 1.5em; \n    gap: 1.5em;            \n}\n\n.nav-button {\n    font-family: 'Teko', 'Times New Roman', Times, serif;    \n    background-color: rgb(129, 52, 22);\n    border-radius: 5px;\n    box-shadow: rgb(255, 255, 255) -2px 4px 0px 0px;\n    padding: 0.3em 1.2em 0.3em 1.2em;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    box-sizing: border-box;\n    color: #fff;\n    border: none;\n    font-size: 1.6rem;\n    transition: all 0.3s ease-in-out;\n    z-index: 1;\n    overflow: hidden;    \n}\n\n.content-container {\n    flex-grow: 1;       \n    padding: 0.5%;\n    display: flex;\n    align-items: center;       \n    font-size: 1.8em;\n    overflow: auto;\n}\n\n.content-container div {    \n    background-color: rgba(0, 0, 0, 0.75);\n    padding: 0.5em;    \n    height: 400px;\n    min-width: 400px;\n    overflow: auto;\n}\n\n.content-container img {        \n    height: 400px;      \n}\n`,""]);const f=l},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=o.base?s[0]+o.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},264:(e,n,t)=>{e.exports=t.p+"f7f091c5d5372c407f69.ttf"},675:(e,n,t)=>{e.exports=t.p+"1922569b85c8b5fc0c5f.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),o=t(825),r=t.n(o),a=t(659),i=t.n(a),c=t(56),s=t.n(c),u=t(540),d=t.n(u),l=t(113),p=t.n(l),m=t(365),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(m.A,f),m.A&&m.A.locals&&m.A.locals;const v=t.p+"bf0a07ff052bafde9a30.jpg",g=t.p+"7facb4c5eaf834211f8d.jpg",h=t.p+"f34df757ed5567a409ca.jpg",b="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";!function(){const e=document.querySelector("header"),n=e.querySelector("nav"),t=(document.querySelector("#content"),document.createElement("button"));t.id="#home-btn",t.textContent="HOME";const o=document.createElement("button");o.id="#menu-btn",o.textContent="MENU";const r=document.createElement("button");r.id="#about-btn",r.textContent="ABOUT",n.append(t,o,r),n.querySelectorAll("button").forEach((e=>{e.classList.add("nav-button")})),e.appendChild(n),function(){const e=document.createElement("div");e.classList.add("content-container");const n=new Image;n.src=v;const t=document.createElement("div");t.textContent=b,e.append(t,n);const o=document.createElement("div");o.classList.add("content-container");const r=new Image;r.src=g;const a=document.createElement("div");a.textContent=b,o.append(r,a);const i=document.createElement("div");i.classList.add("content-container");const c=new Image;c.src=h;const s=document.createElement("div");s.textContent=b,i.append(s,c),document.querySelector("#content").append(e,o,i)}()}()})()})();