import{_ as q,o as L,c as M,r as Cn,d as tt,a as B,w as ft,h as Nn,b as Mt,e as P,f as ae,v as He,g as W,u as be,t as ct,n as Tn,F as Ge,i as Xe,j as qe,k as Ln,p as Ke,l as Qe,m as Mn}from"./index-xDOoR2Fm.js";const zn={},Rn={class:"wrapper-text-input form-field-space form-bg"};function jn(t,e){return L(),M("div",Rn,[Cn(t.$slots,"default")])}const $n=q(zn,[["render",jn]]);function he(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?he(Object(n),!0).forEach(function(a){_(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ct(t){"@babel/helpers - typeof";return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ct(t)}function Fn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ye(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Dn(t,e,n){return e&&ye(t.prototype,e),n&&ye(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function re(t,e){return Vn(t)||Wn(t,e)||Ze(t,e)||Hn()}function gt(t){return Yn(t)||Un(t)||Ze(t)||Bn()}function Yn(t){if(Array.isArray(t))return Bt(t)}function Vn(t){if(Array.isArray(t))return t}function Un(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Wn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(t);!(r=(i=n.next()).done)&&(a.push(i.value),!(e&&a.length===e));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function Ze(t,e){if(t){if(typeof t=="string")return Bt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bt(t,e)}}function Bt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Bn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var we=function(){},ie={},Je={},tn=null,en={mark:we,measure:we};try{typeof window<"u"&&(ie=window),typeof document<"u"&&(Je=document),typeof MutationObserver<"u"&&(tn=MutationObserver),typeof performance<"u"&&(en=performance)}catch{}var Gn=ie.navigator||{},ke=Gn.userAgent,xe=ke===void 0?"":ke,H=ie,w=Je,Ae=tn,yt=en;H.document;var Y=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",nn=~xe.indexOf("MSIE")||~xe.indexOf("Trident/"),wt,kt,xt,At,_t,$="___FONT_AWESOME___",Ht=16,an="fa",rn="svg-inline--fa",Z="data-fa-i2svg",Gt="data-fa-pseudo-element",Xn="data-fa-pseudo-element-pending",oe="data-prefix",se="data-icon",_e="fontawesome-i2svg",qn="async",Kn=["HTML","HEAD","STYLE","SCRIPT"],on=function(){try{return!0}catch{return!1}}(),y="classic",k="sharp",le=[y,k];function bt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[y]}})}var ut=bt((wt={},_(wt,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),_(wt,k,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),wt)),mt=bt((kt={},_(kt,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_(kt,k,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),kt)),dt=bt((xt={},_(xt,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_(xt,k,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),xt)),Qn=bt((At={},_(At,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_(At,k,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),At)),Zn=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,sn="fa-layers-text",Jn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ta=bt((_t={},_(_t,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_(_t,k,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),_t)),ln=[1,2,3,4,5,6,7,8,9,10],ea=ln.concat([11,12,13,14,15,16,17,18,19,20]),na=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vt=new Set;Object.keys(mt[y]).map(vt.add.bind(vt));Object.keys(mt[k]).map(vt.add.bind(vt));var aa=[].concat(le,gt(vt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",K.GROUP,K.SWAP_OPACITY,K.PRIMARY,K.SECONDARY]).concat(ln.map(function(t){return"".concat(t,"x")})).concat(ea.map(function(t){return"w-".concat(t)})),st=H.FontAwesomeConfig||{};function ra(t){var e=w.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ia(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(w&&typeof w.querySelector=="function"){var oa=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];oa.forEach(function(t){var e=re(t,2),n=e[0],a=e[1],r=ia(ra(n));r!=null&&(st[a]=r)})}var fn={styleDefault:"solid",familyDefault:"classic",cssPrefix:an,replacementClass:rn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);var rt=u(u({},fn),st);rt.autoReplaceSvg||(rt.observeMutations=!1);var m={};Object.keys(fn).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(n){rt[t]=n,lt.forEach(function(a){return a(m)})},get:function(){return rt[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){rt.cssPrefix=e,lt.forEach(function(n){return n(m)})},get:function(){return rt.cssPrefix}});H.FontAwesomeConfig=m;var lt=[];function sa(t){return lt.push(t),function(){lt.splice(lt.indexOf(t),1)}}var U=Ht,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function la(t){if(!(!t||!Y)){var e=w.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=w.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return w.head.insertBefore(e,a),t}}var fa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pt(){for(var t=12,e="";t-- >0;)e+=fa[Math.random()*62|0];return e}function it(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function fe(t){return t.classList?it(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function cn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ca(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(cn(t[n]),'" ')},"").trim()}function zt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ce(t){return t.size!==R.size||t.x!==R.x||t.y!==R.y||t.rotate!==R.rotate||t.flipX||t.flipY}function ua(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function ma(t){var e=t.transform,n=t.width,a=n===void 0?Ht:n,r=t.height,o=r===void 0?Ht:r,i=t.startCentered,s=i===void 0?!1:i,l="";return s&&nn?l+="translate(".concat(e.x/U-a/2,"em, ").concat(e.y/U-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/U,"em), calc(-50% + ").concat(e.y/U,"em)) "):l+="translate(".concat(e.x/U,"em, ").concat(e.y/U,"em) "),l+="scale(".concat(e.size/U*(e.flipX?-1:1),", ").concat(e.size/U*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var da=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function un(){var t=an,e=rn,n=m.cssPrefix,a=m.replacementClass,r=da;if(n!==t||a!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Se=!1;function Dt(){m.autoAddCss&&!Se&&(la(un()),Se=!0)}var va={mixout:function(){return{dom:{css:un,insertCss:Dt}}},hooks:function(){return{beforeDOMElementCreation:function(){Dt()},beforeI2svg:function(){Dt()}}}},F=H||{};F[$]||(F[$]={});F[$].styles||(F[$].styles={});F[$].hooks||(F[$].hooks={});F[$].shims||(F[$].shims=[]);var T=F[$],mn=[],pa=function t(){w.removeEventListener("DOMContentLoaded",t),Nt=1,mn.map(function(e){return e()})},Nt=!1;Y&&(Nt=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),Nt||w.addEventListener("DOMContentLoaded",pa));function ga(t){Y&&(Nt?setTimeout(t,0):mn.push(t))}function ht(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?cn(t):"<".concat(e," ").concat(ca(a),">").concat(o.map(ht).join(""),"</").concat(e,">")}function Oe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ba=function(e,n){return function(a,r,o,i){return e.call(n,a,r,o,i)}},Yt=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=r!==void 0?ba(n,r):n,l,c,f;for(a===void 0?(l=1,f=e[o[0]]):(l=0,f=a);l<i;l++)c=o[l],f=s(f,e[c],c,e);return f};function ha(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Xt(t){var e=ha(t);return e.length===1?e[0].toString(16):null}function ya(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Pe(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function qt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=Pe(e);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,Pe(e)):T.styles[t]=u(u({},T.styles[t]||{}),o),t==="fas"&&qt("fa",e)}var St,Ot,Pt,et=T.styles,wa=T.shims,ka=(St={},_(St,y,Object.values(dt[y])),_(St,k,Object.values(dt[k])),St),ue=null,dn={},vn={},pn={},gn={},bn={},xa=(Ot={},_(Ot,y,Object.keys(ut[y])),_(Ot,k,Object.keys(ut[k])),Ot);function Aa(t){return~aa.indexOf(t)}function _a(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Aa(r)?r:null}var hn=function(){var e=function(o){return Yt(et,function(i,s,l){return i[l]=Yt(s,o,{}),i},{})};dn=e(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),vn=e(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),bn=e(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var n="far"in et||m.autoFetchSvg,a=Yt(wa,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});pn=a.names,gn=a.unicodes,ue=Rt(m.styleDefault,{family:m.familyDefault})};sa(function(t){ue=Rt(t.styleDefault,{family:m.familyDefault})});hn();function me(t,e){return(dn[t]||{})[e]}function Sa(t,e){return(vn[t]||{})[e]}function Q(t,e){return(bn[t]||{})[e]}function yn(t){return pn[t]||{prefix:null,iconName:null}}function Oa(t){var e=gn[t],n=me("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function G(){return ue}var de=function(){return{prefix:null,iconName:null,rest:[]}};function Rt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?y:n,r=ut[a][t],o=mt[a][t]||mt[a][r],i=t in T.styles?t:null;return o||i||null}var Ee=(Pt={},_(Pt,y,Object.keys(dt[y])),_(Pt,k,Object.keys(dt[k])),Pt);function jt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,o=(e={},_(e,y,"".concat(m.cssPrefix,"-").concat(y)),_(e,k,"".concat(m.cssPrefix,"-").concat(k)),e),i=null,s=y;(t.includes(o[y])||t.some(function(c){return Ee[y].includes(c)}))&&(s=y),(t.includes(o[k])||t.some(function(c){return Ee[k].includes(c)}))&&(s=k);var l=t.reduce(function(c,f){var d=_a(m.cssPrefix,f);if(et[f]?(f=ka[s].includes(f)?Qn[s][f]:f,i=f,c.prefix=f):xa[s].indexOf(f)>-1?(i=f,c.prefix=Rt(f,{family:s})):d?c.iconName=d:f!==m.replacementClass&&f!==o[y]&&f!==o[k]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var g=i==="fa"?yn(c.iconName):{},b=Q(c.prefix,c.iconName);g.prefix&&(i=null),c.iconName=g.iconName||b||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!et.far&&et.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},de());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===k&&(et.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=Q(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=G()||"fas"),l}var Pa=function(){function t(){Fn(this,t),this.definitions={}}return Dn(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),i[s]),qt(s,i[s]);var l=dt[y][s];l&&qt(l,i[s]),hn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,c=i.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),t}(),Ie=[],nt={},at={},Ea=Object.keys(at);function Ia(t,e){var n=e.mixoutsTo;return Ie=t,nt={},Object.keys(at).forEach(function(a){Ea.indexOf(a)===-1&&delete at[a]}),Ie.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),Ct(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){nt[i]||(nt[i]=[]),nt[i].push(o[i])})}a.provides&&a.provides(at)}),n}function Kt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=nt[t]||[];return o.forEach(function(i){e=i.apply(null,[e].concat(a))}),e}function J(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=nt[t]||[];r.forEach(function(o){o.apply(null,n)})}function D(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return at[t]?at[t].apply(null,e):void 0}function Qt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||G();if(e)return e=Q(n,e)||e,Oe(wn.definitions,n,e)||Oe(T.styles,n,e)}var wn=new Pa,Ca=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,J("noAuto")},Na={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(J("beforeI2svg",e),D("pseudoElements2svg",e),D("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ga(function(){La({autoReplaceSvgRoot:n}),J("watch",e)})}},Ta={icon:function(e){if(e===null)return null;if(Ct(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Rt(e[0]);return{prefix:a,iconName:Q(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Zn))){var r=jt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||G(),iconName:Q(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var o=G();return{prefix:o,iconName:Q(o,e)||e}}}},C={noAuto:Ca,config:m,dom:Na,parse:Ta,library:wn,findIconDefinition:Qt,toHtml:ht},La=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?w:n;(Object.keys(T.styles).length>0||m.autoFetchSvg)&&Y&&m.autoReplaceSvg&&C.dom.i2svg({node:a})};function $t(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ht(a)})}}),Object.defineProperty(t,"node",{get:function(){if(Y){var a=w.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ma(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(ce(i)&&n.found&&!a.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=zt(u(u({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function za(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:i}),children:a}]}]}function ve(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,d=t.extra,g=t.watchable,b=g===void 0?!1:g,S=a.found?a:n,O=S.width,E=S.height,v=r==="fak",p=[m.replacementClass,o?"".concat(m.cssPrefix,"-").concat(o):""].filter(function(V){return d.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(d.classes).join(" "),h={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":o,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(E)})},x=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(O/E*16*.0625,"em")}:{};b&&(h.attributes[Z]=""),l&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(f||pt())},children:[l]}),delete h.attributes.title);var A=u(u({},h),{},{prefix:r,iconName:o,main:n,mask:a,maskId:c,transform:i,symbol:s,styles:u(u({},x),d.styles)}),z=a.found&&n.found?D("generateAbstractMask",A)||{children:[],attributes:{}}:D("generateAbstractIcon",A)||{children:[],attributes:{}},N=z.children,Ft=z.attributes;return A.children=N,A.attributes=Ft,s?za(A):Ma(A)}function Ce(t){var e=t.content,n=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,l=s===void 0?!1:s,c=u(u(u({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(c[Z]="");var f=u({},i.styles);ce(r)&&(f.transform=ma({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var d=zt(f);d.length>0&&(c.style=d);var g=[];return g.push({tag:"span",attributes:c,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Ra(t){var e=t.content,n=t.title,a=t.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=zt(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var Vt=T.styles;function Zt(t){var e=t[0],n=t[1],a=t.slice(4),r=re(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(K.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(K.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(K.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:i}}var ja={found:!1,width:512,height:512};function $a(t,e){!on&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Jt(t,e){var n=e;return e==="fa"&&m.styleDefault!==null&&(e=G()),new Promise(function(a,r){if(D("missingIconAbstract"),n==="fa"){var o=yn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Vt[e]&&Vt[e][t]){var i=Vt[e][t];return a(Zt(i))}$a(t,e),a(u(u({},ja),{},{icon:m.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}var Ne=function(){},te=m.measurePerformance&&yt&&yt.mark&&yt.measure?yt:{mark:Ne,measure:Ne},ot='FA "6.5.1"',Fa=function(e){return te.mark("".concat(ot," ").concat(e," begins")),function(){return kn(e)}},kn=function(e){te.mark("".concat(ot," ").concat(e," ends")),te.measure("".concat(ot," ").concat(e),"".concat(ot," ").concat(e," begins"),"".concat(ot," ").concat(e," ends"))},pe={begin:Fa,end:kn},Et=function(){};function Te(t){var e=t.getAttribute?t.getAttribute(Z):null;return typeof e=="string"}function Da(t){var e=t.getAttribute?t.getAttribute(oe):null,n=t.getAttribute?t.getAttribute(se):null;return e&&n}function Ya(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Va(){if(m.autoReplaceSvg===!0)return It.replace;var t=It[m.autoReplaceSvg];return t||It.replace}function Ua(t){return w.createElementNS("http://www.w3.org/2000/svg",t)}function Wa(t){return w.createElement(t)}function xn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Ua:Wa:n;if(typeof t=="string")return w.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(xn(i,{ceFn:a}))}),r}function Ba(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var It={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(xn(r),n)}),n.getAttribute(Z)===null&&m.keepOriginalSource){var a=w.createComment(Ba(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~fe(n).indexOf(m.replacementClass))return It.replace(e);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return ht(s)}).join(`
`);n.setAttribute(Z,""),n.innerHTML=i}};function Le(t){t()}function An(t,e){var n=typeof e=="function"?e:Et;if(t.length===0)n();else{var a=Le;m.mutateApproach===qn&&(a=H.requestAnimationFrame||Le),a(function(){var r=Va(),o=pe.begin("mutate");t.map(r),o(),n()})}}var ge=!1;function _n(){ge=!0}function ee(){ge=!1}var Tt=null;function Me(t){if(Ae&&m.observeMutations){var e=t.treeCallback,n=e===void 0?Et:e,a=t.nodeCallback,r=a===void 0?Et:a,o=t.pseudoElementsCallback,i=o===void 0?Et:o,s=t.observeMutationsRoot,l=s===void 0?w:s;Tt=new Ae(function(c){if(!ge){var f=G();it(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Te(d.addedNodes[0])&&(m.searchPseudoElements&&i(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&Te(d.target)&&~na.indexOf(d.attributeName))if(d.attributeName==="class"&&Da(d.target)){var g=jt(fe(d.target)),b=g.prefix,S=g.iconName;d.target.setAttribute(oe,b||f),S&&d.target.setAttribute(se,S)}else Ya(d.target)&&r(d.target)})}}),Y&&Tt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ha(){Tt&&Tt.disconnect()}function Ga(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Xa(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=jt(fe(t));return r.prefix||(r.prefix=G()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Sa(r.prefix,t.innerText)||me(r.prefix,Xt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function qa(t){var e=it(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||pt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ka(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ze(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Xa(t),a=n.iconName,r=n.prefix,o=n.rest,i=qa(t),s=Kt("parseNodeAttributes",{},t),l=e.styleParser?Ga(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var Qa=T.styles;function Sn(t){var e=m.autoReplaceSvg==="nest"?ze(t,{styleParser:!1}):ze(t);return~e.extra.classes.indexOf(sn)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}var X=new Set;le.map(function(t){X.add("fa-".concat(t))});Object.keys(ut[y]).map(X.add.bind(X));Object.keys(ut[k]).map(X.add.bind(X));X=gt(X);function Re(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();var n=w.documentElement.classList,a=function(d){return n.add("".concat(_e,"-").concat(d))},r=function(d){return n.remove("".concat(_e,"-").concat(d))},o=m.autoFetchSvg?X:le.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Qa));o.includes("fa")||o.push("fa");var i=[".".concat(sn,":not([").concat(Z,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(Z,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=it(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=pe.begin("onTree"),c=s.reduce(function(f,d){try{var g=Sn(d);g&&f.push(g)}catch(b){on||b.name==="MissingIcon"&&console.error(b)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(g){An(g,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(g){l(),d(g)})})}function Za(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sn(t).then(function(n){n&&An([n],e)})}function Ja(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Qt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Qt(r||{})),t(a,u(u({},n),{},{mask:r}))}}var tr=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?R:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,g=d===void 0?null:d,b=n.titleId,S=b===void 0?null:b,O=n.classes,E=O===void 0?[]:O,v=n.attributes,p=v===void 0?{}:v,h=n.styles,x=h===void 0?{}:h;if(e){var A=e.prefix,z=e.iconName,N=e.icon;return $t(u({type:"icon"},e),function(){return J("beforeDOMElementCreation",{iconDefinition:e,params:n}),m.autoA11y&&(g?p["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(S||pt()):(p["aria-hidden"]="true",p.focusable="false")),ve({icons:{main:Zt(N),mask:l?Zt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:z,transform:u(u({},R),r),symbol:i,title:g,maskId:f,titleId:S,extra:{attributes:p,styles:x,classes:E}})})}},er={mixout:function(){return{icon:Ja(tr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Re,n.nodeCallback=Za,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?w:a,o=n.callback,i=o===void 0?function(){}:o;return Re(r,i)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,l=a.transform,c=a.symbol,f=a.mask,d=a.maskId,g=a.extra;return new Promise(function(b,S){Promise.all([Jt(r,s),f.iconName?Jt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var E=re(O,2),v=E[0],p=E[1];b([n,ve({icons:{main:v,mask:p},prefix:s,iconName:r,transform:l,symbol:c,maskId:d,title:o,titleId:i,extra:g,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,l=zt(s);l.length>0&&(r.style=l);var c;return ce(i)&&(c=D("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(c||o.icon),{children:a,attributes:r}}}},nr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return $t({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(gt(o)).join(" ")},children:i}]})}}}},ar={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,c=l===void 0?{}:l,f=a.styles,d=f===void 0?{}:f;return $t({type:"counter",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),Ra({content:n.toString(),title:o,extra:{attributes:c,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(gt(s))}})})}}}},rr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?R:r,i=a.title,s=i===void 0?null:i,l=a.classes,c=l===void 0?[]:l,f=a.attributes,d=f===void 0?{}:f,g=a.styles,b=g===void 0?{}:g;return $t({type:"text",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),Ce({content:n,transform:u(u({},R),o),title:s,extra:{attributes:d,styles:b,classes:["".concat(m.cssPrefix,"-layers-text")].concat(gt(c))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,l=null;if(nn){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return m.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Ce({content:n.innerHTML,width:s,height:l,transform:o,title:r,extra:i,watchable:!0})])}}},ir=new RegExp('"',"ug"),je=[1105920,1112319];function or(t){var e=t.replace(ir,""),n=ya(e,0),a=n>=je[0]&&n<=je[1],r=e.length===2?e[0]===e[1]:!1;return{value:Xt(r?e[0]:e),isSecondary:a||r}}function $e(t,e){var n="".concat(Xn).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var o=it(t.children),i=o.filter(function(N){return N.getAttribute(Gt)===e})[0],s=H.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Jn),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(i&&!l)return t.removeChild(i),a();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?k:y,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?mt[g][l[2].toLowerCase()]:ta[g][c],S=or(d),O=S.value,E=S.isSecondary,v=l[0].startsWith("FontAwesome"),p=me(b,O),h=p;if(v){var x=Oa(O);x.iconName&&x.prefix&&(p=x.iconName,b=x.prefix)}if(p&&!E&&(!i||i.getAttribute(oe)!==b||i.getAttribute(se)!==h)){t.setAttribute(n,h),i&&t.removeChild(i);var A=Ka(),z=A.extra;z.attributes[Gt]=e,Jt(p,b).then(function(N){var Ft=ve(u(u({},A),{},{icons:{main:N,mask:de()},prefix:b,iconName:h,extra:z,watchable:!0})),V=w.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(V,t.firstChild):t.appendChild(V),V.outerHTML=Ft.map(function(In){return ht(In)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function sr(t){return Promise.all([$e(t,"::before"),$e(t,"::after")])}function lr(t){return t.parentNode!==document.head&&!~Kn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Gt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fe(t){if(Y)return new Promise(function(e,n){var a=it(t.querySelectorAll("*")).filter(lr).map(sr),r=pe.begin("searchPseudoElements");_n(),Promise.all(a).then(function(){r(),ee(),e()}).catch(function(){r(),ee(),n()})})}var fr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fe,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?w:a;m.searchPseudoElements&&Fe(r)}}},De=!1,cr={mixout:function(){return{dom:{unwatch:function(){_n(),De=!0}}}},hooks:function(){return{bootstrap:function(){Me(Kt("mutationObserverCallbacks",{}))},noAuto:function(){Ha()},watch:function(n){var a=n.observeMutationsRoot;De?ee():Me(Kt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ye=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},ur={mixout:function(){return{parse:{transform:function(n){return Ye(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Ye(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},g={transform:"translate(".concat(i/2*-1," -256)")},b={outer:s,inner:d,path:g};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),b.path)}]}]}}}},Ut={x:0,y:0,width:"100%",height:"100%"};function Ve(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mr(t){return t.tag==="g"?t.children:[t]}var dr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?jt(r.split(" ").map(function(i){return i.trim()})):de();return o.prefix||(o.prefix=G()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,l=n.transform,c=o.width,f=o.icon,d=i.width,g=i.icon,b=ua({transform:l,containerWidth:d,iconWidth:c}),S={tag:"rect",attributes:u(u({},Ut),{},{fill:"white"})},O=f.children?{children:f.children.map(Ve)}:{},E={tag:"g",attributes:u({},b.inner),children:[Ve(u({tag:f.tag,attributes:u(u({},f.attributes),b.path)},O))]},v={tag:"g",attributes:u({},b.outer),children:[E]},p="mask-".concat(s||pt()),h="clip-".concat(s||pt()),x={tag:"mask",attributes:u(u({},Ut),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,v]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:mr(g)},x]};return a.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},Ut)}),{children:a,attributes:r}}}},vr={provides:function(e){var n=!1;H.matchMedia&&(n=H.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=u(u({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},pr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},gr=[va,er,nr,ar,rr,fr,cr,ur,dr,vr,pr];Ia(gr,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;var ne=C.parse;C.findIconDefinition;C.toHtml;var br=C.icon;C.layer;C.text;C.counter;function Ue(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ue(Object(n),!0).forEach(function(a){I(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ue(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Lt(t){"@babel/helpers - typeof";return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lt(t)}function I(t,e,n){return e=kr(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function yr(t,e){if(t==null)return{};var n=hr(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function wr(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function kr(t){var e=wr(t,"string");return typeof e=="symbol"?e:String(e)}var xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},On={exports:{}};(function(t){(function(e){var n=function(v,p,h){if(!c(p)||d(p)||g(p)||b(p)||l(p))return p;var x,A=0,z=0;if(f(p))for(x=[],z=p.length;A<z;A++)x.push(n(v,p[A],h));else{x={};for(var N in p)Object.prototype.hasOwnProperty.call(p,N)&&(x[v(N,h)]=n(v,p[N],h))}return x},a=function(v,p){p=p||{};var h=p.separator||"_",x=p.split||/(?=[A-Z])/;return v.split(x).join(h)},r=function(v){return S(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(p,h){return h?h.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},o=function(v){var p=r(v);return p.substr(0,1).toUpperCase()+p.substr(1)},i=function(v,p){return a(v,p).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},g=function(v){return s.call(v)=="[object RegExp]"},b=function(v){return s.call(v)=="[object Boolean]"},S=function(v){return v=v-0,v===v},O=function(v,p){var h=p&&"process"in p?p.process:p;return typeof h!="function"?v:function(x,A){return h(x,v,A)}},E={camelize:r,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(v,p){return n(O(r,p),v)},decamelizeKeys:function(v,p){return n(O(i,p),v,p)},pascalizeKeys:function(v,p){return n(O(o,p),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=E:e.humps=E})(xr)})(On);var Ar=On.exports,_r=["class","style"];function Sr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Ar.camelize(n.slice(0,a)),o=n.slice(a+1).trim();return e[r]=o,e},{})}function Or(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Pn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return Pn(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.class=Or(f);break;case"style":l.style=Sr(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var o=n.style,i=o===void 0?{}:o,s=yr(n,_r);return Nn(t.tag,j(j(j({},e),{},{class:r.class,style:j(j({},r.style),i)},r.attrs),s),a)}var En=!1;try{En=!0}catch{}function Pr(){if(!En&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Wt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?I({},t,e):{}}function Er(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},I(e,"fa-".concat(t.size),t.size!==null),I(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),I(e,"fa-pull-".concat(t.pull),t.pull!==null),I(e,"fa-swap-opacity",t.swapOpacity),I(e,"fa-bounce",t.bounce),I(e,"fa-shake",t.shake),I(e,"fa-beat",t.beat),I(e,"fa-fade",t.fade),I(e,"fa-beat-fade",t.beatFade),I(e,"fa-flash",t.flash),I(e,"fa-spin-pulse",t.spinPulse),I(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function We(t){if(t&&Lt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ne.icon)return ne.icon(t);if(t===null)return null;if(Lt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Ir=tt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=B(function(){return We(e.icon)}),o=B(function(){return Wt("classes",Er(e))}),i=B(function(){return Wt("transform",typeof e.transform=="string"?ne.transform(e.transform):e.transform)}),s=B(function(){return Wt("mask",We(e.mask))}),l=B(function(){return br(r.value,j(j(j(j({},o.value),i.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});ft(l,function(f){if(!f)return Pr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=B(function(){return l.value?Pn(l.value.abstract[0],{},a):null});return function(){return c.value}}}),Cr={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]};const Nr={class:"wrapper-text-input form-bg form-field-space py-3"},Tr={class:"row"},Lr=tt({__name:"TextInputCopyable",props:{modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,a=Mt(""),r=i=>{i.preventDefault();const s=document.querySelector("#input-text-password");s&&(s.select(),s.setSelectionRange(0,99999),document.execCommand("copy"))},o=e;return ft(()=>a.value,i=>o("update:modelValue",i)),ft(()=>n.modelValue,i=>a.value=i),(i,s)=>(L(),M("div",Nr,[P("div",Tr,[ae(P("input",{class:"col-10 col-lg-11 form-base-text-color","onUpdate:modelValue":s[0]||(s[0]=l=>a.value=l),type:"text",name:"input-text-password",id:"input-text-password",placeholder:"P4$5W0rD !"},null,512),[[He,a.value]]),P("button",{onClick:r,class:"form-highlight-text col-2 col-lg-1"},[W(be(Ir),{icon:be(Cr)},null,8,["icon"])])])]))}}),Mr=q(Lr,[["__scopeId","data-v-080bf07d"]]),zr={class:"labels row align-items-center mb-2"},Rr=["for"],jr={class:"range-val form-highlight-text col-2 col-lg-1"},$r=["name","min","max"],Fr=tt({__name:"RangeInput",props:{label:{type:String,required:!0},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,a=Mt(n.min),r=B(()=>{const i=a.value-n.min,s=n.max-n.min;return`${i/s*100}%`}),o=e;return ft(()=>a.value,i=>o("update:modelValue",i),{immediate:!0}),(i,s)=>(L(),M("div",{class:"wrapper-range-input",style:Tn(`--current-range: ${r.value}`)},[P("div",zr,[P("label",{for:t.label,class:"col-10 col-lg-11 form-base-text-color"},ct(t.label),9,Rr),P("div",jr,ct(a.value),1)]),ae(P("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>a.value=l),type:"range",name:t.label,min:t.min,max:t.max},null,8,$r),[[He,a.value]])],4))}}),Dr=q(Fr,[["__scopeId","data-v-c9a689af"]]),Yr=["onUpdate:modelValue","id","name"],Vr={class:"form-base-text-color",for:"coding"},Ur=tt({__name:"CheckboxInput",props:{options:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:e}){const n=Mt({}),a=t,r=e;return ft(()=>n.value,o=>{if(Object.values(n.value).filter(i=>i).length)r("update:modelValue",o);else{const i={};a.options.forEach(s=>{i[s.id]=!0}),setTimeout(()=>n.value=i,5)}},{deep:!0,immediate:!0}),(o,i)=>(L(),M("div",null,[(L(!0),M(Ge,null,Xe(t.options,(s,l)=>(L(),M("div",{key:s.id,class:qe(["checkbox-option d-flex align-items-center",{"mt-2":l}])},[ae(P("input",{"onUpdate:modelValue":c=>n.value[s.id]=c,id:s.id.toString(),name:s.label,type:"checkbox",class:"me-3"},null,8,Yr),[[Ln,n.value[s.id]]]),P("label",Vr,ct(s.label),1)],2))),128))]))}}),Wr=q(Ur,[["__scopeId","data-v-235d7ca4"]]),Br=t=>(Ke("data-v-0feb39d9"),t=t(),Qe(),t),Hr={class:"form-item wrapper-password-strength form-black-highlight d-flex flex-lg-row flex-column align-items-lg-center justify-content-between px-4 py-3"},Gr=Br(()=>P("div",{class:"mb-2 mb-lg-0"}," STRENGTH ",-1)),Xr={class:"d-flex align-items-center justify-content-between"},qr={class:"form-base-text-color text-uppercase security-level-label me-2 me-lg-3"},Kr={class:"strength-chips d-flex align-items-center"},Qr=tt({__name:"PasswordStrength",props:{passwordSecurities:{type:Object,required:!1,default:()=>({})}},setup(t){const e=t,n=B(()=>Object.values(e.passwordSecurities).filter(r=>r).length),a={0:"weak",1:"weak",2:"medium",3:"safe",4:"great"};return(r,o)=>(L(),M("div",Hr,[Gr,P("div",Xr,[P("div",qr,ct(a[n.value]),1),P("div",Kr,[(L(),M(Ge,null,Xe(4,i=>P("span",{key:i,class:qe([{"ms-2":i>1,active:i<=n.value},"chip"])},null,2)),64))])])]))}}),Zr=q(Qr,[["__scopeId","data-v-0feb39d9"]]),Jr={},ti={class:"fw-bold wrapper-submit-button w-100 p-3 text-uppercase"};function ei(t,e){return L(),M("button",ti," Generate ")}const ni=q(Jr,[["render",ei],["__scopeId","data-v-e28ae1f5"]]),ai={class:"wrapper-page-title"},ri=tt({__name:"PageTitle",props:{pageTitle:{type:String,required:!0}},setup(t){return(e,n)=>(L(),M("div",ai,[P("h1",null,ct(t.pageTitle),1)]))}}),ii=q(ri,[["__scopeId","data-v-26395a90"]]),Be=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,oi=({characterLength:t,securityLevels:e})=>{const n=["!","@","#","$","%","^","&","*"],a="abcdefghijklmnopqrstuvwxyz".split(""),r=a.map(l=>l.toUpperCase()),o=[0,1,2,3,4,5,6,7,8,9],i=[];e[1]&&i.push(r),e[2]&&i.push(a),e[3]&&i.push(o),e[4]&&i.push(n);let s="";if(!i.length)return s;for(let l=0;l<t;l++){const c=Be(0,i.length-1),f=Be(0,i[c].length-1);s+=i[c][f]}return s},si=t=>(Ke("data-v-ab2d4527"),t=t(),Qe(),t),li=si(()=>P("div",{class:"py-4"},null,-1)),fi=tt({__name:"PasswordGenerationView",setup(t){const e=[{id:1,label:"Include Uppercase Letters"},{id:2,label:"Include Lowercase Letters"},{id:3,label:"Include Numbers"},{id:4,label:"Include Symbols"}],n=Mt({password:"",characterLength:10,securityLevels:{},passwordSecurityLevel:0}),a=r=>{r.preventDefault(),n.value.password=oi(n.value)};return(r,o)=>(L(),M("form",{class:"wrapper-password-generation mt-4 mt-lg-0",onSubmit:a},[W(ii,{"page-title":"Password Generator"}),W(Mr,{modelValue:n.value.password,"onUpdate:modelValue":o[0]||(o[0]=i=>n.value.password=i),class:"mb-4"},null,8,["modelValue"]),W($n,null,{default:Mn(()=>[W(Dr,{modelValue:n.value.characterLength,"onUpdate:modelValue":o[1]||(o[1]=i=>n.value.characterLength=i),label:"Character Length",min:5,max:50,class:"mb-4"},null,8,["modelValue"]),W(Wr,{modelValue:n.value.securityLevels,"onUpdate:modelValue":o[2]||(o[2]=i=>n.value.securityLevels=i),options:e,class:"mb-4"},null,8,["modelValue"]),W(Zr,{modelValue:n.value.passwordSecurityLevel,"onUpdate:modelValue":o[3]||(o[3]=i=>n.value.passwordSecurityLevel=i),"password-securities":n.value.securityLevels,class:"mb-5 mb-lg-4"},null,8,["modelValue","password-securities"]),W(ni)]),_:1}),li],32))}}),ui=q(fi,[["__scopeId","data-v-ab2d4527"]]);export{ui as default};
