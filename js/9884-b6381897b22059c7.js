(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9884],{88874:function(e,t,n){"use strict";var r=n(50044),a=n(68143),o=n.n(a),i=n(2265),u=n(79588),l=n(75169),s=n(84526),c=n(73250);t.Z=function(e,t){c.Z&&!(0,s.mf)(e)&&console.error("useDebounceFn expected parameter is a function, got ".concat(typeof e));var n,a=(0,u.Z)(e),f=null!==(n=null==t?void 0:t.wait)&&void 0!==n?n:1e3,d=(0,i.useMemo)(function(){return o()(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.current.apply(a,(0,r.ev)([],(0,r.CR)(e),!1))},f,t)},[]);return(0,l.Z)(function(){d.cancel()}),{run:d,cancel:d.cancel,flush:d.flush}}},79588:function(e,t,n){"use strict";var r=n(2265);t.Z=function(e){var t=(0,r.useRef)(e);return t.current=e,t}},75169:function(e,t,n){"use strict";var r=n(2265),a=n(79588),o=n(84526),i=n(73250);t.Z=function(e){i.Z&&!(0,o.mf)(e)&&console.error("useUnmount expected parameter is a function, got ".concat(typeof e));var t=(0,a.Z)(e);(0,r.useEffect)(function(){return function(){t.current()}},[])}},84526:function(e,t,n){"use strict";n.d(t,{G7:function(){return o},hj:function(){return a},mf:function(){return r}});var r=function(e){return"function"==typeof e},a=function(e){return"number"==typeof e},o=function(e){return void 0===e}},73250:function(e,t){"use strict";t.Z=!1},2390:function(e,t,n){"use strict";var r=n(25809),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,i,u,l,s,c,f,d=!1;t||(t={}),i=t.debug||!1;try{if(l=r(),s=document.createRange(),c=document.getSelection(),(f=document.createElement("span")).textContent=e,f.ariaHidden="true",f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(f),s.selectNodeContents(f),c.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(r){i&&console.error("unable to copy using execCommand: ",r),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(r){i&&console.error("unable to copy using clipboardData: ",r),i&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",u=n.replace(/#{\s*key\s*}/g,o),window.prompt(u,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),f&&document.body.removeChild(f),l()}return d}},64370:function(e,t,n){var r,a;e.exports=(r=n(74548),a={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,t){return"W"===t?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,t){var n=100*e+t;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}},(r&&"object"==typeof r&&"default"in r?r:{default:r}).default.locale(a,null,!0),a)},6537:function(e){e.exports=function(e,t,n){e=e||{};var r=t.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,n,a){return r.fromToBase(e,t,n,a)}n.en.relativeTime=a,r.fromToBase=function(t,r,o,i,u){for(var l,s,c,f=o.$locale().relativeTime||a,d=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=d.length,m=0;m<p;m+=1){var v=d[m];v.d&&(l=i?n(t).diff(o,v.d,!0):o.diff(t,v.d,!0));var h=(e.rounding||Math.round)(Math.abs(l));if(c=l>0,h<=v.r||!v.r){h<=1&&m>0&&(v=d[m-1]);var g=f[v.l];u&&(h=u(""+h)),s="string"==typeof g?g.replace("%d",h):g(h,r,v.l,c);break}}if(r)return s;var y=c?f.future:f.past;return"function"==typeof y?y(s):y.replace("%s",s)},r.to=function(e,t){return o(e,t,this,!0)},r.from=function(e,t){return o(e,t,this)};var i=function(e){return e.$u?n.utc():n()};r.toNow=function(e){return this.to(i(this),e)},r.fromNow=function(e){return this.from(i(this),e)}}},79029:function(e,t,n){var r=n(42242).Symbol;e.exports=r},86714:function(e,t,n){var r=n(79029),a=n(35078),o=n(76276),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?a(e):o(e)}},13225:function(e,t,n){var r=n(20121),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},66503:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},35078:function(e,t,n){var r=n(79029),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var a=i.call(e);return r&&(t?e[u]=n:delete e[u]),a}},76276:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},42242:function(e,t,n){var r=n(66503),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},20121:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},68143:function(e,t,n){var r=n(36905),a=n(14752),o=n(71573),i=Math.max,u=Math.min;e.exports=function(e,t,n){var l,s,c,f,d,p,m=0,v=!1,h=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function y(t){var n=l,r=s;return l=s=void 0,m=t,f=e.apply(r,n)}function b(e){var n=e-p,r=e-m;return void 0===p||n>=t||n<0||h&&r>=c}function x(){var e,n,r,o=a();if(b(o))return w(o);d=setTimeout(x,(e=o-p,n=o-m,r=t-e,h?u(r,c-n):r))}function w(e){return(d=void 0,g&&l)?y(e):(l=s=void 0,f)}function _(){var e,n=a(),r=b(n);if(l=arguments,s=this,p=n,r){if(void 0===d)return m=e=p,d=setTimeout(x,t),v?y(e):f;if(h)return clearTimeout(d),d=setTimeout(x,t),y(p)}return void 0===d&&(d=setTimeout(x,t)),f}return t=o(t)||0,r(n)&&(v=!!n.leading,c=(h="maxWait"in n)?i(o(n.maxWait)||0,t):c,g="trailing"in n?!!n.trailing:g),_.cancel=function(){void 0!==d&&clearTimeout(d),m=0,l=p=s=d=void 0},_.flush=function(){return void 0===d?f:w(a())},_}},36905:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},12387:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},71087:function(e,t,n){var r=n(86714),a=n(12387);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},14752:function(e,t,n){var r=n(42242);e.exports=function(){return r.Date.now()}},71573:function(e,t,n){var r=n(13225),a=n(36905),o=n(71087),i=0/0,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return i;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):u.test(e)?i:+e}},35143:function(){},61396:function(e,t,n){e.exports=n(25250)},83724:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,u)}l((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.ReactMultiEmail=void 0;let u=o(n(2265)),l=n(20010),s=e=>void 0===e?[]:e.filter(e=>(0,l.isEmail)(e));t.ReactMultiEmail=function(e){let{id:t,style:n,className:r="",noClass:a,placeholder:o,autoFocus:c,allowDisplayName:f=!1,stripDisplayName:d=!1,allowDuplicate:p=!1,delimiter:m=`[${f?"":" "},;]`,initialInputValue:v="",inputClassName:h,autoComplete:g,getLabel:y,enable:b,onDisabled:x,validateEmail:w,onChange:_,onChangeInput:R,onFocus:E,onBlur:M,onKeyDown:D,onKeyUp:F,spinner:k,disableOnBlurValidation:I=!1}=e,T=u.useRef(null),[C,S]=u.useState(!1),[O,j]=u.useState([]),[P,L]=u.useState(v),[Y,z]=u.useState(!1),A=u.useCallback((e,t)=>i(this,void 0,void 0,function*(){var n;let r=[],a="",o=RegExp(m,"g"),i=w||l.isEmail,u=e=>{if(!p){for(let t=0,n=O.length;t<n;t++)if(O[t]===e)return!1}return r.push(e),!0};if(""!==e){if(o.test(e)){let t=[...new Set(e.split(o).filter(e=>e))];do{let r=i(""+t[0]);"boolean"==typeof r?r?u(""+t.shift()):1===t.length?f?i(""+t[0],{allowDisplayName:f})?u(""+(d?null===(n=t.shift())||void 0===n?void 0:n.split("<")[1].split(">")[0]:t.shift())):1===t.length?a=""+t.shift():t.shift():a=""+t.shift():t.shift():(z(!0),(yield null==w?void 0:w(e))===!0?(u(""+t.shift()),z(!1)):1===t.length?a=""+t.shift():t.shift())}while(t.length)}else{if(b&&!b({emailCnt:O.length})){null==x||x();return}if(t){let t=i(e);"boolean"==typeof t?t?u(e):f&&i(e,{allowDisplayName:f})?u(d?e.split("<")[1].split(">")[0]:e):a=e:(z(!0),(yield null==w?void 0:w(e))===!0?(u(e),z(!1)):a=e)}else a=e}}j([...O,...r]),L(a),r.length&&(null==_||_([...O,...r])),a!=a&&(null==R||R(a))}),[f,p,m,O,b,_,R,x,d,w]),N=u.useCallback(e=>i(this,void 0,void 0,function*(){yield A(e),null==R||R(e)}),[A,R]),$=u.useCallback((e,t)=>{if(t)return;let n=[...O.slice(0,e),...O.slice(e+1)];j(n),null==_||_(n)},[O,_]),U=u.useCallback(e=>{switch(null==D||D(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||$(O.length-1,!1)}},[O.length,D,$]),Z=u.useCallback(e=>i(this,void 0,void 0,function*(){null==F||F(e),"Enter"===e.key&&(yield A(e.currentTarget.value,!0))}),[A,F]),B=u.useCallback(e=>i(this,void 0,void 0,function*(){return yield N(e.currentTarget.value)}),[N]),H=u.useCallback(e=>i(this,void 0,void 0,function*(){S(!1),I||(yield A(e.currentTarget.value,!0)),null==M||M()}),[I,A,M]),W=u.useCallback(()=>{S(!0),null==E||E()},[E]);return u.useEffect(()=>{j(s(e.emails))},[e.emails]),u.createElement("div",{className:`${r} ${a?"":"react-multi-email"} ${C?"focused":""} ${""===P&&0===O.length?"empty":""}`,style:n,onClick:()=>{var e;return null===(e=T.current)||void 0===e?void 0:e.focus()}},Y&&(null==k?void 0:k()),o?u.createElement("span",{"data-placeholder":!0},o):null,u.createElement("div",{className:"data-labels",style:{opacity:Y?.45:1,display:"contents",flexWrap:"inherit"}},O.map((e,t)=>y(e,t,$))),u.createElement("input",{id:t,style:{opacity:Y?.45:1},ref:T,type:"text",value:P,onFocus:W,onBlur:H,onChange:B,onKeyDown:U,onKeyUp:Z,autoFocus:c,className:h,autoComplete:g}))}},64339:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(20010),t),a(n(83724),t)},20010:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEmail=void 0;let n={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},r={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},a=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,i=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,u=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,l=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function s(e,t){let n,r=0,a=encodeURI(e).split(/%..|./).length-1;return t&&(r=Number(t.min)||0,n=Number(t.max)),a>=r&&(void 0===n||a<=n)}t.isEmail=function(e,t){if((t=Object.assign(Object.assign({},r),t)).requireDisplayName||t.allowDisplayName){let n=e.match(a);if(n)e=n[1];else if(t.requireDisplayName)return!1}let c=e.split("@"),f=""+c.pop(),d=f.toLowerCase(),p=c.join("@");if(("gmail.com"===d||"googlemail.com"===d)&&(p=p.replace(/\./g,"").toLowerCase()),!s(p,{max:64})||!s(f,{max:254})||!function(e,t){(t=Object.assign(Object.assign({},n),t)).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));let r=e.split(".");if(t.requireTld){let e=""+r.pop();if(!r.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e)||/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let e,n=0;n<r.length;n++)if(e=r[n],t.allowUnderscores&&(e=e.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(e)||/[\uff01-\uff5e]/.test(e)||"-"===e[0]||"-"===e[e.length-1])return!1;return!0}(f,{requireTld:t.requireTld}))return!1;if('"'===p[0])return p=p.slice(1,p.length-1),t.allowUtf8LocalPart?l.test(p):i.test(p);let m=t.allowUtf8LocalPart?u:o,v=p.split(".");for(let e=0;e<v.length;e++)if(!m.test(v[e]))return!1;return!0}},25809:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},58459:function(e,t,n){"use strict";n.d(t,{v:function(){return Y}});var r,a,o,i=n(2265),u=n(60597),l=n(11931),s=n(85390),c=n(82769),f=n(32600),d=n(46618),p=n(75606),m=n(93850),v=n(53891),h=n(35863),g=n(65410),y=n(90583),b=n(50926),x=n(25306),w=n(8076),_=n(57728),R=n(12950),E=n(13995),M=n(19426),D=((r=D||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),F=((a=F||{})[a.Pointer=0]="Pointer",a[a.Other=1]="Other",a),k=((o=k||{})[o.OpenMenu=0]="OpenMenu",o[o.CloseMenu=1]="CloseMenu",o[o.GoToItem=2]="GoToItem",o[o.Search=3]="Search",o[o.ClearSearch=4]="ClearSearch",o[o.RegisterItem=5]="RegisterItem",o[o.UnregisterItem=6]="UnregisterItem",o);function I(e,t=e=>e){let n=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,r=(0,g.z2)(t(e.items.slice()),e=>e.dataRef.current.domRef.current),a=n?r.indexOf(n):null;return -1===a&&(a=null),{items:r,activeItemIndex:a}}let T={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,__demoMode:!1,menuState:0},2:(e,t)=>{var n;let r=I(e),a=(0,v.d)(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:a,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),a=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))&&!e.dataRef.current.disabled}),o=a?e.items.indexOf(a):-1;return -1===o||o===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:o,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let n=I(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=I(e,e=>{let n=e.findIndex(e=>e.id===t.id);return -1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}}},C=(0,i.createContext)(null);function S(e){let t=(0,i.useContext)(C);if(null===t){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,S),t}return t}function O(e,t){return(0,u.E)(t.type,T,e,t)}C.displayName="MenuContext";let j=i.Fragment,P=l.AN.RenderStrategy|l.AN.Static,L=i.Fragment,Y=Object.assign((0,l.yV)(function(e,t){let{__demoMode:n=!1,...r}=e,a=(0,i.useReducer)(O,{__demoMode:n,menuState:n?0:1,buttonRef:(0,i.createRef)(),itemsRef:(0,i.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:o,itemsRef:s,buttonRef:c},f]=a,p=(0,d.T)(t);(0,y.O)([c,s],(e,t)=>{var n;f({type:1}),(0,g.sP)(t,g.tJ.Loose)||(e.preventDefault(),null==(n=c.current)||n.focus())},0===o);let m=(0,R.z)(()=>{f({type:1})}),v=(0,i.useMemo)(()=>({open:0===o,close:m}),[o,m]);return i.createElement(C.Provider,{value:a},i.createElement(x.up,{value:(0,u.E)(o,{0:x.ZM.Open,1:x.ZM.Closed})},(0,l.sY)({ourProps:{ref:p},theirProps:r,slot:v,defaultTag:j,name:"Menu"})))}),{Button:(0,l.yV)(function(e,t){var n;let r=(0,p.M)(),{id:a=`headlessui-menu-button-${r}`,...o}=e,[u,s]=S("Menu.Button"),f=(0,d.T)(u.buttonRef,t),g=(0,c.G)(),y=(0,R.z)(e=>{switch(e.key){case m.R.Space:case m.R.Enter:case m.R.ArrowDown:e.preventDefault(),e.stopPropagation(),s({type:0}),g.nextFrame(()=>s({type:2,focus:v.T.First}));break;case m.R.ArrowUp:e.preventDefault(),e.stopPropagation(),s({type:0}),g.nextFrame(()=>s({type:2,focus:v.T.Last}))}}),b=(0,R.z)(e=>{e.key===m.R.Space&&e.preventDefault()}),x=(0,R.z)(t=>{if((0,h.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===u.menuState?(s({type:1}),g.nextFrame(()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),s({type:0})))}),_=(0,i.useMemo)(()=>({open:0===u.menuState}),[u]),E={ref:f,id:a,type:(0,w.f)(e,u.buttonRef),"aria-haspopup":"menu","aria-controls":null==(n=u.itemsRef.current)?void 0:n.id,"aria-expanded":0===u.menuState,onKeyDown:y,onKeyUp:b,onClick:x};return(0,l.sY)({ourProps:E,theirProps:o,slot:_,defaultTag:"button",name:"Menu.Button"})}),Items:(0,l.yV)(function(e,t){var n,r;let a=(0,p.M)(),{id:o=`headlessui-menu-items-${a}`,...u}=e,[f,h]=S("Menu.Items"),y=(0,d.T)(f.itemsRef,t),w=(0,_.i)(f.itemsRef),E=(0,c.G)(),M=(0,x.oJ)(),D=null!==M?(M&x.ZM.Open)===x.ZM.Open:0===f.menuState;(0,i.useEffect)(()=>{let e=f.itemsRef.current;e&&0===f.menuState&&e!==(null==w?void 0:w.activeElement)&&e.focus({preventScroll:!0})},[f.menuState,f.itemsRef,w]),(0,b.B)({container:f.itemsRef.current,enabled:0===f.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let F=(0,R.z)(e=>{var t,n;switch(E.dispose(),e.key){case m.R.Space:if(""!==f.searchQuery)return e.preventDefault(),e.stopPropagation(),h({type:3,value:e.key});case m.R.Enter:if(e.preventDefault(),e.stopPropagation(),h({type:1}),null!==f.activeItemIndex){let{dataRef:e}=f.items[f.activeItemIndex];null==(n=null==(t=e.current)?void 0:t.domRef.current)||n.click()}(0,g.wI)(f.buttonRef.current);break;case m.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),h({type:2,focus:v.T.Next});case m.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),h({type:2,focus:v.T.Previous});case m.R.Home:case m.R.PageUp:return e.preventDefault(),e.stopPropagation(),h({type:2,focus:v.T.First});case m.R.End:case m.R.PageDown:return e.preventDefault(),e.stopPropagation(),h({type:2,focus:v.T.Last});case m.R.Escape:e.preventDefault(),e.stopPropagation(),h({type:1}),(0,s.k)().nextFrame(()=>{var e;return null==(e=f.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case m.R.Tab:e.preventDefault(),e.stopPropagation(),h({type:1}),(0,s.k)().nextFrame(()=>{(0,g.EO)(f.buttonRef.current,e.shiftKey?g.TO.Previous:g.TO.Next)});break;default:1===e.key.length&&(h({type:3,value:e.key}),E.setTimeout(()=>h({type:4}),350))}}),k=(0,R.z)(e=>{e.key===m.R.Space&&e.preventDefault()}),I=(0,i.useMemo)(()=>({open:0===f.menuState}),[f]),T={"aria-activedescendant":null===f.activeItemIndex||null==(n=f.items[f.activeItemIndex])?void 0:n.id,"aria-labelledby":null==(r=f.buttonRef.current)?void 0:r.id,id:o,onKeyDown:F,onKeyUp:k,role:"menu",tabIndex:0,ref:y};return(0,l.sY)({ourProps:T,theirProps:u,slot:I,defaultTag:"div",features:P,visible:D,name:"Menu.Items"})}),Item:(0,l.yV)(function(e,t){let n=(0,p.M)(),{id:r=`headlessui-menu-item-${n}`,disabled:a=!1,...o}=e,[u,c]=S("Menu.Item"),m=null!==u.activeItemIndex&&u.items[u.activeItemIndex].id===r,h=(0,i.useRef)(null),y=(0,d.T)(t,h);(0,f.e)(()=>{if(u.__demoMode||0!==u.menuState||!m||0===u.activationTrigger)return;let e=(0,s.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=h.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[u.__demoMode,h,m,u.menuState,u.activationTrigger,u.activeItemIndex]);let b=(0,M.x)(h),x=(0,i.useRef)({disabled:a,domRef:h,get textValue(){return b()}});(0,f.e)(()=>{x.current.disabled=a},[x,a]),(0,f.e)(()=>(c({type:5,id:r,dataRef:x}),()=>c({type:6,id:r})),[x,r]);let w=(0,R.z)(()=>{c({type:1})}),_=(0,R.z)(e=>{if(a)return e.preventDefault();c({type:1}),(0,g.wI)(u.buttonRef.current)}),D=(0,R.z)(()=>{if(a)return c({type:2,focus:v.T.Nothing});c({type:2,focus:v.T.Specific,id:r})}),F=(0,E.g)(),k=(0,R.z)(e=>F.update(e)),I=(0,R.z)(e=>{F.wasMoved(e)&&(a||m||c({type:2,focus:v.T.Specific,id:r,trigger:0}))}),T=(0,R.z)(e=>{F.wasMoved(e)&&(a||m&&c({type:2,focus:v.T.Nothing}))}),C=(0,i.useMemo)(()=>({active:m,disabled:a,close:w}),[m,a,w]);return(0,l.sY)({ourProps:{id:r,ref:y,role:"menuitem",tabIndex:!0===a?void 0:-1,"aria-disabled":!0===a||void 0,disabled:void 0,onClick:_,onFocus:D,onPointerEnter:k,onMouseEnter:k,onPointerMove:I,onMouseMove:I,onPointerLeave:T,onMouseLeave:T},theirProps:o,slot:C,defaultTag:L,name:"Menu.Item"})})})},67805:function(e,t,n){"use strict";var r=n(2265);let a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"}))});t.Z=a},84164:function(e,t,n){"use strict";var r=n(2265);let a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))});t.Z=a},3217:function(e,t,n){"use strict";var r=n(2265);let a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))});t.Z=a},74020:function(e,t,n){"use strict";var r=n(2265);let a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}))});t.Z=a},29538:function(e,t,n){"use strict";var r=n(2265);let a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}))});t.Z=a},82569:function(e,t,n){"use strict";var r=n(2265);let a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"}))});t.Z=a},70432:function(e,t,n){"use strict";var r=n(2265);let a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"}))});t.Z=a},1609:function(e,t,n){"use strict";var r=n(2265);let a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",clipRule:"evenodd"}))});t.Z=a},12066:function(e,t,n){"use strict";var r=n(2265);let a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z",clipRule:"evenodd"}))});t.Z=a}}]);