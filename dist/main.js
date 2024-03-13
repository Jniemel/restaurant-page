(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(601),r=n.n(o),i=n(314),a=n.n(i),c=n(417),s=n.n(c),d=new URL(n(264),n.b),u=new URL(n(675),n.b),l=a()(r()),m=s()(d),p=s()(u);l.push([e.id,`@font-face {\n    font-family: 'Teko';\n    src: url(${m}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n:root {\n    font-family: 'Teko', 'Times New Roman', Times, serif;\n    font-size: 16px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: fit-content;\n    background: url(${p});\n    background-size: cover;\n    \n}\n\nheader {\n    width: fill;    \n    height: auto;    \n    background-color: rgba(0, 0, 0, 0.95);       \n    padding: 0.75em;\n    position: sticky;\n    top: 0;       \n}\n\nnav {      \n    display: flex;\n    justify-content: space-around;\n}\n\n#content {    \n    flex-grow: 1;       \n    color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 1.5em 0 1.5em 0; \n    gap: 1.5em;            \n}\n\n.nav-button {\n    font-family: 'Teko', 'Times New Roman', Times, serif;    \n    background-color: rgb(129, 52, 22);\n    border-radius: 5px;\n    box-shadow: rgb(255, 255, 255) -2px 4px 0px 0px;\n    padding: 0.3em 1.2em 0.3em 1.2em;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    box-sizing: border-box;\n    color: #fff;\n    border: none;\n    font-size: 1.6rem;\n    transition: all 0.3s ease-in-out;\n    z-index: 1;\n    overflow: hidden;    \n}\n\n.content-container {\n    background-color: rgba(0, 0, 0, 0.75);\n    flex-grow: 1;   \n    display: flex;\n    overflow: auto;\n}\n\n.content-container div {    \n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;   \n    padding: 0.5em;    \n    height: 400px;\n    min-width: 400px;\n    font-size: 2.5rem;\n    font-style: italic;       \n    overflow: auto;    \n}\n\n.content-container img {        \n    height: 400px;      \n}\n\n.menu {\n    flex-grow: 1;\n    background-color: hsla(0, 0%, 0%, 0.75);\n    font-size: 2.5rem;\n    margin: 0 1em 0 1em;\n    padding: 1em;\n    align-self: stretch;    \n    display: flex;\n    flex-direction: column;\n    gap: 0.5em;\n    overflow: auto;\n}\n\n.menu h1 {\n    border-bottom: 2px solid white;\n}\n\n.menu h1,\n.menu h3,\n.menu h4,\n.menu h5 {   \n    line-height: 1.15em;\n}\n\n.menu-item {   \n    display: flex;\n    flex-direction: column;    \n    align-items: center;\n    \n}\n\n.name-and-price {\n    display: flex;\n    align-items: center;\n    gap: 1em;\n    margin-bottom: 0;\n}\n\n.name-and-price h3 {\n    text-decoration: underline;\n}\n\n.description {\n    color: antiquewhite;\n}\n\n.description h5 {\n    font-style: italic;\n}\n\n#about {\n    max-height: 500px;    \n}\n\n#about.content-container div {      \n    min-width: 800px;\n    font-size: 2.2rem;\n    font-style: italic;        \n    overflow: auto;    \n}\n\n#about img {        \n    max-height: 100%;    \n}\n\n#contact.content-container {\n    background: rgba(0, 0, 0, 0.85);\n    flex-direction: column;\n    padding: 1em;\n    align-items: center;\n}\n\n#contact h2 {\n    text-decoration: underline;\n}\n\n#contact h1 {\n    font-style: italic;\n    color: antiquewhite;\n}`,""]);const f=l},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var m=n(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),d=0;d<i.length;d++){var u=n(i[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},264:(e,t,n)=>{e.exports=n.p+"f7f091c5d5372c407f69.ttf"},675:(e,t,n)=>{e.exports=n.p+"1922569b85c8b5fc0c5f.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),r=n.n(o),i=n(659),a=n.n(i),c=n(56),s=n.n(c),d=n(540),u=n.n(d),l=n(113),m=n.n(l),p=n(365),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),t()(p.A,f),p.A&&p.A.locals&&p.A.locals;const h=n.p+"bf0a07ff052bafde9a30.jpg",v=n.p+"7facb4c5eaf834211f8d.jpg",g=n.p+"f34df757ed5567a409ca.jpg",b=function(){const e=document.querySelector("#content"),t=e.querySelectorAll("div");t.length>0&&t.forEach((e=>{e.remove()}));const n=document.createElement("div");n.classList.add("content-container");const o=new Image;o.src=h;const r=document.createElement("div");r.textContent="Here is a picture of a burger-meal. This text would describe how great of a meal it is. The patty is surely 100% beef. Maybe. The fries are there too. There is no ketchup in the cup. Sad. Then some more text, and more, and more... Until there is no more text. But this is not that point yet. One more row, and we are done with this one. Here it is.",n.append(r,o);const i=document.createElement("div");i.classList.add("content-container");const a=new Image;a.src=v;const c=document.createElement("div");c.textContent='Here is another picture of food. Nice. Then there is yet another filler text right here, followed by even more filler. Then, a quote from a customer: "Here, there would exist a very real review of the food".',i.append(a,c);const s=document.createElement("div");s.classList.add("content-container");const d=new Image;d.src=g;const u=document.createElement("div");u.textContent="Lastly, let us add some lorem ipsum: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut.",s.append(u,d),e.append(n,i,s)},x=JSON.parse('{"j7":[{"name":"Burger-meal","price":"12","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."},{"name":"Spaghetti","price":"10","description":"Lorem ipsum dolor sit amet, consectetur adipiscing."},{"name":"Steak","price":"25","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."},{"name":"Pizza","price":"15","description":"Lorem ipsum dolor sit amet, consectetur."}],"cu":[{"name":"Cupcakes","price":"3","description":"Lorem ipsum dolor"},{"name":"Pancakes","price":"5","description":"Lorem ipsum dolor sit amet."}],"Yy":[{"name":"Soda","price":"2","description":"Lorem ipsum dolor"},{"name":"Beer","price":"4","description":"Lorem ipsum dolor sit amet, consectetur adipiscing."},{"name":"Wine","price":"6","description":"Lorem ipsum dolor sit amet."}]}');function y(e,t){let n=document.querySelector(".menu");const o=document.createElement("h1");o.textContent=e,n.appendChild(o);for(let e=0;e<t.length;e++){let o=document.createElement("div");o.classList.add("menu-item");let r=document.createElement("div");r.classList.add("name-and-price");let i=document.createElement("div");i.classList.add("description");let a=document.createElement("h3");a.textContent=t[e].name;let c=document.createElement("h4");c.textContent=t[e].price+"€";let s=document.createElement("h5");s.textContent=t[e].description,r.append(a,c),i.appendChild(s),o.append(r,i),n.appendChild(o)}}const w=function(){const e=document.querySelector("#content");e.querySelectorAll("div").forEach((e=>{e.remove()}));const t=document.createElement("div");t.classList.add("menu"),e.appendChild(t),y("Food",x.j7),y("Desserts",x.cu),y("Drinks",x.Yy)},E=n.p+"ef6a6534f8af5a134f52.jpg",C=function(){const e=document.querySelector("#content");e.querySelectorAll("div").forEach((e=>{e.remove()}));const t=document.createElement("div");t.id="about",t.classList.add("content-container"),e.appendChild(t);const n=document.createElement("div");n.textContent="A very passionate text about food: At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem";const o=new Image;o.src=E,t.append(n,o);const r=document.createElement("div");r.id="contact",r.classList.add("content-container"),e.appendChild(r);const i=document.createElement("h2");i.textContent="Address:";const a=document.createElement("h1");a.textContent="Lorem road 55, Ipsum City, Dolor";const c=document.createElement("h2");c.textContent="Phone:";const s=document.createElement("h1");s.textContent="987 6543 210";const d=document.createElement("h2");d.textContent="Open:";const u=document.createElement("h1");u.textContent="Monday - Thursday: 09 - 20";const l=document.createElement("h1");l.textContent="Friday - Sunday: 12 - 24",r.append(i,a,c,s,d,u,l)};!function(){const e=document.querySelector("header"),t=e.querySelector("nav"),n=(document.querySelector("#content"),document.createElement("button"));n.id="home-btn",n.textContent="HOME",n.addEventListener("click",b);const o=document.createElement("button");o.id="menu-btn",o.textContent="MENU",o.addEventListener("click",w);const r=document.createElement("button");r.id="about-btn",r.textContent="ABOUT",r.addEventListener("click",C),t.append(n,o,r),t.querySelectorAll("button").forEach((e=>{e.classList.add("nav-button")})),e.appendChild(t),b()}()})()})();