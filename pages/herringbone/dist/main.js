(()=>{var n=[function(n,t,r){var e;!function(o,i,a){var c,u=256,s=a.pow(u,6),f=a.pow(2,52),l=2*f,d=255;function x(n,t,r){var e=[],d=w(p((t=1==t?{entropy:!0}:t||{}).entropy?[n,m(i)]:null==n?function(){try{var n;return c&&(n=c.randomBytes)?n=n(u):(n=new Uint8Array(u),(o.crypto||o.msCrypto).getRandomValues(n)),m(n)}catch(n){var t=o.navigator,r=t&&t.plugins;return[+new Date,o,r,o.screen,m(i)]}}():n,3),e),x=new h(e),g=function(){for(var n=x.g(6),t=s,r=0;n<f;)n=(n+r)*u,t*=u,r=x.g(1);for(;n>=l;)n/=2,t/=2,r>>>=1;return(n+r)/t};return g.int32=function(){return 0|x.g(4)},g.quick=function(){return x.g(4)/4294967296},g.double=g,w(m(x.S),i),(t.pass||r||function(n,t,r,e){return e&&(e.S&&v(e,x),n.state=function(){return v(x,{})}),r?(a.random=n,t):n})(g,d,"global"in t?t.global:this==a,t.state)}function h(n){var t,r=n.length,e=this,o=0,i=e.i=e.j=0,a=e.S=[];for(r||(n=[r++]);o<u;)a[o]=o++;for(o=0;o<u;o++)a[o]=a[i=d&i+n[o%r]+(t=a[o])],a[i]=t;(e.g=function(n){for(var t,r=0,o=e.i,i=e.j,a=e.S;n--;)t=a[o=d&o+1],r=r*u+a[d&(a[o]=a[i=d&i+t])+(a[i]=t)];return e.i=o,e.j=i,r})(u)}function v(n,t){return t.i=n.i,t.j=n.j,t.S=n.S.slice(),t}function p(n,t){var r,e=[],o=typeof n;if(t&&"object"==o)for(r in n)try{e.push(p(n[r],t-1))}catch(n){}return e.length?e:"string"==o?n:n+"\0"}function w(n,t){for(var r,e=n+"",o=0;o<e.length;)t[d&o]=d&(r^=19*t[d&o])+e.charCodeAt(o++);return m(t)}function m(n){return String.fromCharCode.apply(0,n)}if(w(a.random(),i),n.exports){n.exports=x;try{c=r(9)}catch(n){}}else void 0===(e=function(){return x}.call(t,r,t,n))||(n.exports=e)}("undefined"!=typeof self?self:this,[],Math)},function(n,t,r){var e;!function(n,o,i){function a(n){var t,r=this,e=(t=4022871197,function(n){n=String(n);for(var r=0;r<n.length;r++){var e=.02519603282416938*(t+=n.charCodeAt(r));e-=t=e>>>0,t=(e*=t)>>>0,t+=4294967296*(e-=t)}return 2.3283064365386963e-10*(t>>>0)});r.next=function(){var n=2091639*r.s0+2.3283064365386963e-10*r.c;return r.s0=r.s1,r.s1=r.s2,r.s2=n-(r.c=0|n)},r.c=1,r.s0=e(" "),r.s1=e(" "),r.s2=e(" "),r.s0-=e(n),r.s0<0&&(r.s0+=1),r.s1-=e(n),r.s1<0&&(r.s1+=1),r.s2-=e(n),r.s2<0&&(r.s2+=1),e=null}function c(n,t){return t.c=n.c,t.s0=n.s0,t.s1=n.s1,t.s2=n.s2,t}function u(n,t){var r=new a(n),e=t&&t.state,o=r.next;return o.int32=function(){return 4294967296*r.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,e&&("object"==typeof e&&c(e,r),o.state=function(){return c(r,{})}),o}o&&o.exports?o.exports=u:r.amdD&&r.amdO?void 0===(e=function(){return u}.call(t,r,t,o))||(o.exports=e):this.alea=u}(0,n=r.nmd(n),r.amdD)},function(n,t,r){var e;!function(n,o,i){function a(n){var t=this,r="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var n=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^n^n>>>8},n===(0|n)?t.x=n:r+=n;for(var e=0;e<r.length+64;e++)t.x^=0|r.charCodeAt(e),t.next()}function c(n,t){return t.x=n.x,t.y=n.y,t.z=n.z,t.w=n.w,t}function u(n,t){var r=new a(n),e=t&&t.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var n=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===n);return n},o.int32=r.next,o.quick=o,e&&("object"==typeof e&&c(e,r),o.state=function(){return c(r,{})}),o}o&&o.exports?o.exports=u:r.amdD&&r.amdO?void 0===(e=function(){return u}.call(t,r,t,o))||(o.exports=e):this.xor128=u}(0,n=r.nmd(n),r.amdD)},function(n,t,r){var e;!function(n,o,i){function a(n){var t=this,r="";t.next=function(){var n=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^n^n<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,n===(0|n)?t.x=n:r+=n;for(var e=0;e<r.length+64;e++)t.x^=0|r.charCodeAt(e),e==r.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function c(n,t){return t.x=n.x,t.y=n.y,t.z=n.z,t.w=n.w,t.v=n.v,t.d=n.d,t}function u(n,t){var r=new a(n),e=t&&t.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var n=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===n);return n},o.int32=r.next,o.quick=o,e&&("object"==typeof e&&c(e,r),o.state=function(){return c(r,{})}),o}o&&o.exports?o.exports=u:r.amdD&&r.amdO?void 0===(e=function(){return u}.call(t,r,t,o))||(o.exports=e):this.xorwow=u}(0,n=r.nmd(n),r.amdD)},function(n,t,r){var e;!function(n,o,i){function a(n){var t=this;t.next=function(){var n,r,e=t.x,o=t.i;return n=e[o],r=(n^=n>>>7)^n<<24,r^=(n=e[o+1&7])^n>>>10,r^=(n=e[o+3&7])^n>>>3,r^=(n=e[o+4&7])^n<<7,n=e[o+7&7],r^=(n^=n<<13)^n<<9,e[o]=r,t.i=o+1&7,r},function(n,t){var r,e=[];if(t===(0|t))e[0]=t;else for(t=""+t,r=0;r<t.length;++r)e[7&r]=e[7&r]<<15^t.charCodeAt(r)+e[r+1&7]<<13;for(;e.length<8;)e.push(0);for(r=0;r<8&&0===e[r];++r);for(8==r?e[7]=-1:e[r],n.x=e,n.i=0,r=256;r>0;--r)n.next()}(t,n)}function c(n,t){return t.x=n.x.slice(),t.i=n.i,t}function u(n,t){null==n&&(n=+new Date);var r=new a(n),e=t&&t.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var n=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===n);return n},o.int32=r.next,o.quick=o,e&&(e.x&&c(e,r),o.state=function(){return c(r,{})}),o}o&&o.exports?o.exports=u:r.amdD&&r.amdO?void 0===(e=function(){return u}.call(t,r,t,o))||(o.exports=e):this.xorshift7=u}(0,n=r.nmd(n),r.amdD)},function(n,t,r){var e;!function(n,o,i){function a(n){var t=this;t.next=function(){var n,r,e=t.w,o=t.X,i=t.i;return t.w=e=e+1640531527|0,r=o[i+34&127],n=o[i=i+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,r=o[i]=r^n,t.i=i,r+(e^e>>>16)|0},function(n,t){var r,e,o,i,a,c=[],u=128;for(t===(0|t)?(e=t,t=null):(t+="\0",e=0,u=Math.max(u,t.length)),o=0,i=-32;i<u;++i)t&&(e^=t.charCodeAt((i+32)%t.length)),0===i&&(a=e),e^=e<<10,e^=e>>>15,e^=e<<4,e^=e>>>13,i>=0&&(a=a+1640531527|0,o=0==(r=c[127&i]^=e+a)?o+1:0);for(o>=128&&(c[127&(t&&t.length||0)]=-1),o=127,i=512;i>0;--i)e=c[o+34&127],r=c[o=o+1&127],e^=e<<13,r^=r<<17,e^=e>>>15,r^=r>>>12,c[o]=e^r;n.w=a,n.X=c,n.i=o}(t,n)}function c(n,t){return t.i=n.i,t.w=n.w,t.X=n.X.slice(),t}function u(n,t){null==n&&(n=+new Date);var r=new a(n),e=t&&t.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var n=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===n);return n},o.int32=r.next,o.quick=o,e&&(e.X&&c(e,r),o.state=function(){return c(r,{})}),o}o&&o.exports?o.exports=u:r.amdD&&r.amdO?void 0===(e=function(){return u}.call(t,r,t,o))||(o.exports=e):this.xor4096=u}(0,n=r.nmd(n),r.amdD)},function(n,t,r){var e;!function(n,o,i){function a(n){var t=this,r="";t.next=function(){var n=t.b,r=t.c,e=t.d,o=t.a;return n=n<<25^n>>>7^r,r=r-e|0,e=e<<24^e>>>8^o,o=o-n|0,t.b=n=n<<20^n>>>12^r,t.c=r=r-e|0,t.d=e<<16^r>>>16^o,t.a=o-n|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,n===Math.floor(n)?(t.a=n/4294967296|0,t.b=0|n):r+=n;for(var e=0;e<r.length+20;e++)t.b^=0|r.charCodeAt(e),t.next()}function c(n,t){return t.a=n.a,t.b=n.b,t.c=n.c,t.d=n.d,t}function u(n,t){var r=new a(n),e=t&&t.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var n=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===n);return n},o.int32=r.next,o.quick=o,e&&("object"==typeof e&&c(e,r),o.state=function(){return c(r,{})}),o}o&&o.exports?o.exports=u:r.amdD&&r.amdO?void 0===(e=function(){return u}.call(t,r,t,o))||(o.exports=e):this.tychei=u}(0,n=r.nmd(n),r.amdD)},(n,t,r)=>{var e=r(1),o=r(2),i=r(3),a=r(4),c=r(5),u=r(6),s=r(0);s.alea=e,s.xor128=o,s.xorwow=i,s.xorshift7=a,s.xor4096=c,s.tychei=u,n.exports=s},,()=>{}],t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{"use strict";var n=r(7),t=r.n(n);const e=(n,t)=>(n%t+t)%t,o=(()=>{const n={};return document.addEventListener("keydown",(t=>n[t.code]=!0)),document.addEventListener("keyup",(t=>n[t.code]=!1)),n})(),i=t()("hello."),a=((n,t)=>{const r=100*n/t,e=document.createElement("style");e.textContent=`\nbody { \n    background-color : black;\n    margin:0;\n    border:0;\n    padding : 0;\n}\ncanvas.fullscreen {\n    background-color : black;\n    image-rendering: pixelated;\n    image-rendering: crisp-edges;\n    width : min(100vw,${r}vh);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);    \n}\n`,document.head.appendChild(e);const o=document.createElement("canvas");return o.width=n,o.height=t,o.classList.add("fullscreen"),document.body.appendChild(o),o})(128,128),c=a.getContext("2d"),u=({stride:n,tw:t,th:r,sx:e,sy:o,ox:i,oy:a},c)=>[i+c%n*(t+e),a+Math.floor(c/n)*(r+o),t,r],s={vertical:new Array(64).fill(0).map(((n,t)=>u({stride:16,tw:10,th:20,sx:2,sy:4,ox:1,oy:2},t))),horizontal:new Array(64).fill(0).map(((n,t)=>u({stride:8,tw:20,th:10,sx:4,sy:2,ox:2,oy:97},t)))};(async()=>{const n=await(t="assets/chunks.png",new Promise(((n,r)=>{const e=new Image;e.onload=()=>n(e),e.onerror=r,e.src=t})));var t;const r=(t,r,e,o)=>{const i=s[0===e?"vertical":"horizontal"][o];c.drawImage(n,...i,t,r,...i.slice(2,4))};class u{constructor(n,t,r,e,o){Object.assign(this,{x:n,y:t,type:r,index:e,props:o})}getRect(){const n=0===type?10:20,t=0===type?20:10;return[x,y,n,t]}}const f={rows:9,columns:9,tiles:{}};function l(n,t){const r=function(n,t){const r=n,o=t,i=e(t,4),a=e(n,4);return i===a?{orientation:"vertical",origin:{i:r,j:o},which:"up"}:e(n+1,4)===i?{orientation:"vertical",origin:{i:r,j:o-1},which:"low"}:a===e(t+1,4)?{orientation:"horizontal",origin:{i:r,j:o},which:"left"}:a===e(t+2,4)?{orientation:"horizontal",origin:{i:r-1,j:o},which:"right"}:void 0}(n,t),o=`${r.origin.i}_${r.origin.j}`,a=f.tiles[o];if(a)return a;{const n=s[r.orientation],t=Math.floor(i()*n.length),e=new u(10*r.origin.i,10*r.origin.j,"vertical"===r.orientation?0:1,t,r);return f.tiles[o]=e,e}}const d={x:0,y:0};(n=>{const t=()=>{const e=performance.now();n((e-r)/1e3,e/1e3),r=e,requestAnimationFrame(t)};let r=performance.now();requestAnimationFrame(t)})(((n,t)=>{const e=o.ArrowRight?1:o.ArrowLeft?-1:0,i=o.ArrowDown?1:o.ArrowUp?-1:0;d.x+=e,d.y+=i,c.fillStyle="white",c.fillRect(0,0,a.width,a.height),((n,t)=>{Math.floor(n/10),Math.floor(t/10);const e=Math.ceil(a.width/10),o=Math.ceil(a.height/10);for(let i=0;i<=o;i++)for(let o=0;o<=e;o++){const e=n+10*o,a=t+10*i,c=l(Math.floor(e/10),Math.floor(a/10));r(-n+c.x,-t+c.y,c.type,c.index)}})(d.x,d.y)}))})()})()})();