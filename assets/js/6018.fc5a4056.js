/*! For license information please see 6018.fc5a4056.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6018],{5161:(e,n,r)=>{function i(e,n){for(var r=e.length,i=0;i<r;++i)if(n(e[i],i))return!0;return!1}function t(e,n){for(var r=e.length,i=0;i<r;++i)if(n(e[i],i))return e[i];return null}function o(e){var n=e;if(void 0===n){if("undefined"==typeof navigator||!navigator)return"";n=navigator.userAgent||""}return n.toLowerCase()}function s(e,n){try{return new RegExp(e,"g").exec(n)}catch(r){return null}}function a(){if("undefined"==typeof navigator||!navigator||!navigator.userAgentData)return!1;var e=navigator.userAgentData,n=e.brands||e.uaList;return!(!n||!n.length)}function v(e){return e.replace(/_/g,".")}function u(e,n){var r=null,t="-1";return i(e,(function(e){var i=s("("+e.test+")((?:\\/|\\s|:)([0-9|\\.|_]+))?",n);return!(!i||e.brand)&&(r=e,t=i[3]||"-1",e.versionAlias?t=e.versionAlias:e.versionTest&&(t=function(e,n){var r=s("("+e+")((?:\\/|\\s|:)([0-9|\\.|_]+))",n);return r?r[3]:""}(e.versionTest.toLowerCase(),n)||t),t=v(t),!0)})),{preset:r,version:t}}function f(e,n){var r={brand:"",version:"-1"};return i(e,(function(e){var i=d(n,e);return!!i&&(r.brand=e.id,r.version=e.versionAlias||i.version,"-1"!==r.version)})),r}function d(e,n){return t(e,(function(e){var r=e.brand;return s(""+n.test,r.toLowerCase())}))}r.d(n,{ZP:()=>y});var c=[{test:"phantomjs",id:"phantomjs"},{test:"whale",id:"whale"},{test:"edgios|edge|edg",id:"edge"},{test:"msie|trident|windows phone",id:"ie",versionTest:"iemobile|msie|rv"},{test:"miuibrowser",id:"miui browser"},{test:"samsungbrowser",id:"samsung internet"},{test:"samsung",id:"samsung internet",versionTest:"version"},{test:"chrome|crios",id:"chrome"},{test:"firefox|fxios",id:"firefox"},{test:"android",id:"android browser",versionTest:"version"},{test:"safari|iphone|ipad|ipod",id:"safari",versionTest:"version"}],l=[{test:"(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",id:"chrome",versionTest:"chrome"},{test:"chromium",id:"chrome"},{test:"whale",id:"chrome",versionAlias:"-1",brand:!0}],h=[{test:"applewebkit",id:"webkit",versionTest:"applewebkit|safari"}],m=[{test:"(?=(iphone|ipad))(?!(.*version))",id:"webview"},{test:"(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",id:"webview"},{test:"webview",id:"webview"}],w=[{test:"windows phone",id:"windows phone"},{test:"windows 2000",id:"window",versionAlias:"5.0"},{test:"windows nt",id:"window"},{test:"win32|windows",id:"window"},{test:"iphone|ipad|ipod",id:"ios",versionTest:"iphone os|cpu os"},{test:"macos|macintel|mac os x",id:"mac"},{test:"android|linux armv81",id:"android"},{test:"tizen",id:"tizen"},{test:"webos|web0s",id:"webos"}];function p(e){return!!u(m,e).preset}function b(e){var n=navigator.userAgentData,r=(n.uaList||n.brands).slice(),s=e&&e.fullVersionList,a=n.mobile||!1,u=r[0],b=(e&&e.platform||n.platform||navigator.platform).toLowerCase(),g={name:u.brand,version:u.version,majorVersion:-1,webkit:!1,webkitVersion:"-1",chromium:!1,chromiumVersion:"-1",webview:!!f(m,r).brand||p(o())},y={name:"unknown",version:"-1",majorVersion:-1};g.webkit=!g.chromium&&i(h,(function(e){return d(r,e)}));var k=f(l,r);if(g.chromium=!!k.brand,g.chromiumVersion=k.version,!g.chromium){var V=f(h,r);g.webkit=!!V.brand,g.webkitVersion=V.version}var x=t(w,(function(e){return new RegExp(""+e.test,"g").exec(b)}));if(y.name=x?x.id:"",e&&(y.version=e.platformVersion),s&&s.length){var _=f(c,s);g.name=_.brand||g.name,g.version=_.version||g.version}else{var j=f(c,r);g.name=j.brand||g.name,g.version=j.brand&&e?e.uaFullVersion:j.version}return g.webkit&&(y.name=a?"ios":"mac"),"ios"===y.name&&g.webview&&(g.version="-1"),y.version=v(y.version),g.version=v(g.version),y.majorVersion=parseInt(y.version,10),g.majorVersion=parseInt(g.version,10),{browser:g,os:y,isMobile:a,isHints:!0}}function g(e){return void 0===e&&a()?b():function(e){var n=o(e),r=!!/mobi/g.exec(n),i={name:"unknown",version:"-1",majorVersion:-1,webview:p(n),chromium:!1,chromiumVersion:"-1",webkit:!1,webkitVersion:"-1"},t={name:"unknown",version:"-1",majorVersion:-1},s=u(c,n),a=s.preset,v=s.version,f=u(w,n),d=f.preset,m=f.version,b=u(l,n);if(i.chromium=!!b.preset,i.chromiumVersion=b.version,!i.chromium){var g=u(h,n);i.webkit=!!g.preset,i.webkitVersion=g.version}return d&&(t.name=d.id,t.version=m,t.majorVersion=parseInt(m,10)),a&&(i.name=a.id,i.version=v,i.webview&&"ios"===t.name&&"safari"!==i.name&&(i.webview=!1)),i.majorVersion=parseInt(i.version,10),{browser:i,os:t,isMobile:r,isHints:!1}}(e)}const y=g},1588:(e,n,r)=>{function i(e){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&e[n],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function t(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,t,o=r.call(e),s=[];try{for(;(void 0===n||n-- >0)&&!(i=o.next()).done;)s.push(i.value)}catch(a){t={error:a}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return s}function o(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(t(arguments[n]));return e}r.d(n,{L:()=>v,Z:()=>u});var s=function(e){return void 0===e},a=function(){function e(e,n){var r,t;if(this._canceled=!1,n)try{for(var o=i(Object.keys(n)),s=o.next();!s.done;s=o.next()){var a=s.value;this[a]=n[a]}}catch(v){r={error:v}}finally{try{s&&!s.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}this.eventType=e}var n=e.prototype;return n.stop=function(){this._canceled=!0},n.isCanceled=function(){return this._canceled},e}(),v=a;const u=function(){function e(){this._eventHandler={}}var n=e.prototype;return n.trigger=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=e instanceof a?e.eventType:e,t=o(this._eventHandler[i]||[]);return t.length<=0||(e instanceof a?(e.currentTarget=this,t.forEach((function(n){n(e)}))):t.forEach((function(e){e.apply(void 0,o(n))}))),this},n.once=function(e,n){var r=this;if("object"==typeof e&&s(n)){var i=e;for(var t in i)this.once(t,i[t]);return this}if("string"==typeof e&&"function"==typeof n){var a=function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];n.apply(void 0,o(i)),r.off(e,a)};this.on(e,a)}return this},n.hasOn=function(e){return!!this._eventHandler[e]},n.on=function(e,n){if("object"==typeof e&&s(n)){var r=e;for(var i in r)this.on(i,r[i]);return this}if("string"==typeof e&&"function"==typeof n){var t=this._eventHandler[e];s(t)&&(this._eventHandler[e]=[],t=this._eventHandler[e]),t.push(n)}return this},n.off=function(e,n){var r,t;if(s(e))return this._eventHandler={},this;if(s(n)){if("string"==typeof e)return delete this._eventHandler[e],this;var o=e;for(var a in o)this.off(a,o[a]);return this}var v=this._eventHandler[e];if(v){var u=0;try{for(var f=i(v),d=f.next();!d.done;d=f.next()){if(d.value===n){v.splice(u,1),v.length<=0&&delete this._eventHandler[e];break}u++}}catch(c){r={error:c}}finally{try{d&&!d.done&&(t=f.return)&&t.call(f)}finally{if(r)throw r.error}}}return this},e.VERSION="3.0.2",e}()}}]);