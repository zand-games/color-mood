if(!self.define){let e,i={};const t=(t,n)=>(t=new URL(t+".js",n).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const d=e=>t(e,o),c={module:{uri:o},exports:s,require:d};i[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),s)))}}define(["./workbox-3dd7a3c1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"69ad3111.css",revision:"a030013b99de2eeddc5ce730d31013e4"},{url:"731d9d02.js",revision:"2c1b2009a03cfab9102107adf2778d72"},{url:"index.html",revision:"486ff401969bfa9b03b6283a57cd58ff"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
