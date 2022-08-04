/*! For license information please see 6698.15242f74.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6698],{6698:(t,e,n)=>{n.d(e,{Ju:()=>Pt,HA:()=>Tt,ZP:()=>Ot});var i=n(1588);function r(t,e){for(var n=t.length,i=0;i<n;++i)if(e(t[i],i))return!0;return!1}function s(t,e){for(var n=t.length,i=0;i<n;++i)if(e(t[i],i))return t[i];return null}function o(t){var e=t;if(void 0===e){if("undefined"==typeof navigator||!navigator)return"";e=navigator.userAgent||""}return e.toLowerCase()}function a(t,e){try{return new RegExp(t,"g").exec(e)}catch(n){return null}}function u(){if("undefined"==typeof navigator||!navigator||!navigator.userAgentData)return!1;var t=navigator.userAgentData,e=t.brands||t.uaList;return!(!e||!e.length)}function c(t){return t.replace(/_/g,".")}function h(t,e){var n=null,i="-1";return r(t,(function(t){var r=a("("+t.test+")((?:\\/|\\s|:)([0-9|\\.|_]+))?",e);return!(!r||t.brand)&&(n=t,i=r[3]||"-1",t.versionAlias?i=t.versionAlias:t.versionTest&&(i=function(t,e){var n=a("("+t+")((?:\\/|\\s|:)([0-9|\\.|_]+))",e);return n?n[3]:""}(t.versionTest.toLowerCase(),e)||i),i=c(i),!0)})),{preset:n,version:i}}function v(t,e){var n={brand:"",version:"-1"};return r(t,(function(t){var i=l(e,t);return!!i&&(n.brand=t.id,n.version=t.versionAlias||i.version,"-1"!==n.version)})),n}function l(t,e){return s(t,(function(t){var n=t.brand;return a(""+e.test,n.toLowerCase())}))}var f=[{test:"phantomjs",id:"phantomjs"},{test:"whale",id:"whale"},{test:"edgios|edge|edg",id:"edge"},{test:"msie|trident|windows phone",id:"ie",versionTest:"iemobile|msie|rv"},{test:"miuibrowser",id:"miui browser"},{test:"samsungbrowser",id:"samsung internet"},{test:"samsung",id:"samsung internet",versionTest:"version"},{test:"chrome|crios",id:"chrome"},{test:"firefox|fxios",id:"firefox"},{test:"android",id:"android browser",versionTest:"version"},{test:"safari|iphone|ipad|ipod",id:"safari",versionTest:"version"}],d=[{test:"(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",id:"chrome",versionTest:"chrome"},{test:"chromium",id:"chrome"},{test:"whale",id:"chrome",versionAlias:"-1",brand:!0}],_=[{test:"applewebkit",id:"webkit",versionTest:"applewebkit|safari"}],p=[{test:"(?=(iphone|ipad))(?!(.*version))",id:"webview"},{test:"(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",id:"webview"},{test:"webview",id:"webview"}],g=[{test:"windows phone",id:"windows phone"},{test:"windows 2000",id:"window",versionAlias:"5.0"},{test:"windows nt",id:"window"},{test:"win32|windows",id:"window"},{test:"iphone|ipad|ipod",id:"ios",versionTest:"iphone os|cpu os"},{test:"macos|macintel|mac os x",id:"mac"},{test:"android|linux armv81",id:"android"},{test:"tizen",id:"tizen"},{test:"webos|web0s",id:"webos"}];function m(t){return!!h(p,t).preset}function E(t){var e=navigator.userAgentData,n=(e.uaList||e.brands).slice(),i=t&&t.fullVersionList,a=e.mobile||!1,u=n[0],h=(t&&t.platform||e.platform||navigator.platform).toLowerCase(),E={name:u.brand,version:u.version,majorVersion:-1,webkit:!1,webkitVersion:"-1",chromium:!1,chromiumVersion:"-1",webview:!!v(p,n).brand||m(o())},b={name:"unknown",version:"-1",majorVersion:-1};E.webkit=!E.chromium&&r(_,(function(t){return l(n,t)}));var x=v(d,n);if(E.chromium=!!x.brand,E.chromiumVersion=x.version,!E.chromium){var y=v(_,n);E.webkit=!!y.brand,E.webkitVersion=y.version}var M=s(g,(function(t){return new RegExp(""+t.test,"g").exec(h)}));if(b.name=M?M.id:"",t&&(b.version=t.platformVersion),i&&i.length){var w=v(f,i);E.name=w.brand||E.name,E.version=w.version||E.version}else{var P=v(f,n);E.name=P.brand||E.name,E.version=P.brand&&t?t.uaFullVersion:P.version}return E.webkit&&(b.name=a?"ios":"mac"),"ios"===b.name&&E.webview&&(E.version="-1"),b.version=c(b.version),E.version=c(E.version),b.majorVersion=parseInt(b.version,10),E.majorVersion=parseInt(E.version,10),{browser:E,os:b,isMobile:a,isHints:!0}}function b(t){return void 0===t&&u()?E():function(t){var e=o(t),n=!!/mobi/g.exec(e),i={name:"unknown",version:"-1",majorVersion:-1,webview:m(e),chromium:!1,chromiumVersion:"-1",webkit:!1,webkitVersion:"-1"},r={name:"unknown",version:"-1",majorVersion:-1},s=h(f,e),a=s.preset,u=s.version,c=h(g,e),v=c.preset,l=c.version,p=h(d,e);if(i.chromium=!!p.preset,i.chromiumVersion=p.version,!i.chromium){var E=h(_,e);i.webkit=!!E.preset,i.webkitVersion=E.version}return v&&(r.name=v.id,r.version=l,r.majorVersion=parseInt(l,10)),a&&(i.name=a.id,i.version=u,i.webview&&"ios"===r.name&&"safari"!==i.name&&(i.webview=!1)),i.majorVersion=parseInt(i.version,10),{browser:i,os:r,isMobile:n,isHints:!1}}(t)}const x=b;var y=function(t,e){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},y(t,e)};function M(t,e){function n(){this.constructor=t}y(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var w=function(){return w=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},w.apply(this,arguments)};var P,T=function(){function t(t){this._emitter=new i.Z,this._current=t}var e=t.prototype;return Object.defineProperty(e,"current",{get:function(){return this._current},set:function(t){var e=t!==this._current;this._current=t,e&&this._emitter.trigger("update",t)},enumerable:!1,configurable:!0}),e.subscribe=function(t){this._emitter.on("update",t)},e.unsubscribe=function(t){this._emitter.off("update",t)},t}();function O(t){return t.__observers__||(t.__observers__={}),t.__observers__}function A(t,e,n){var i=O(t);return i[e]||(i[e]=new T(n)),i[e]}function I(t){var e=t.prototype;e.subscribe=function(t,e){A(this,t).subscribe(e)},e.unsubscribe=function(t,e){var n,i=this;t?t in this&&A(this,t).unsubscribe(e):(n=O(this),Object.keys(n)).forEach((function(t){i.unsubscribe(t)}))}}P="undefined"==typeof window?{navigator:{userAgent:""}}:window;var D=24,R="left",C="right",S="middle",k="ontouchstart"in P&&"safari"===x().browser.name,j=function(){if("undefined"==typeof document)return"";for(var t=(document.head||document.getElementsByTagName("head")[0]).style,e=["transform","webkitTransform","msTransform","mozTransform"],n=0,i=e.length;n<i;n++)if(e[n]in t)return e[n];return""}(),L={"user-select":"none","-webkit-user-drag":"none"},B=function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e},V=function(t,e){var n;if(void 0===e&&(e=!1),"string"==typeof t){if(t.match(/^<([a-z]+)\s*([^>]*)>/)){var i=document.createElement("div");i.innerHTML=t,n=B(i.childNodes)}else n=B(document.querySelectorAll(t));e||(n=n.length>=1?n[0]:void 0)}else t===P?n=t:"value"in t||"current"in t?n=t.value||t.current:!t.nodeName||1!==t.nodeType&&9!==t.nodeType?"jQuery"in P&&t instanceof jQuery||t.constructor.prototype.jquery?n=e?t.toArray():t.get(0):Array.isArray(t)&&(n=t.map((function(t){return V(t)})),e||(n=n.length>=1?n[0]:void 0)):n=t;return n},X=P.requestAnimationFrame||P.webkitRequestAnimationFrame,Y=P.cancelAnimationFrame||P.webkitCancelAnimationFrame;if(X&&!Y){var N={},F=X;X=function(t){var e=F((function(n){N[e]&&t(n)}));return N[e]=!0,e},Y=function(t){delete N[t]}}else X&&Y||(X=function(t){return P.setTimeout((function(){t(P.performance&&P.performance.now&&P.performance.now()||(new Date).getTime())}),16)},Y=P.clearTimeout);var H=function(t,e){var n={};for(var i in t)i&&(n[i]=e(t[i],i));return n},W=function(t,e){var n={};for(var i in t)i&&e(t[i],i)&&(n[i]=t[i]);return n},U=function(t,e){for(var n in t)if(n&&!e(t[n],n))return!1;return!0},q=function(t,e){return U(t,(function(t,n){return t===e[n]}))},z={},Z=function(t,e){return z[e]||(z[e]=J(e)),z[e](t)},Q=function(t,e){return t&&e?H(t,(function(t,n){return Z(t,"number"==typeof e?e:e[n])})):t},G=function(t){if(!isFinite(t))return 0;var e="".concat(t);if(e.indexOf("e")>=0){for(var n=0,i=1;Math.round(t*i)/i!==t;)i*=10,n++;return n}return e.indexOf(".")>=0?e.length-e.indexOf(".")-1:0},J=function(t){var e=t<1?Math.pow(10,G(t)):1;return function(n){return 0===t?0:Math.round(Math.round(n/t)*t*e)/e}},K=function(t,e){return 180*Math.atan2(e,t)/Math.PI},$=function(t){var e=!0;return Object.keys(L).forEach((function(n){t&&t[n]===L[n]||(e=!1)})),e},tt=function(t,e){return t&&e?30:t?6:e?D:1},et=function(t,e,n){return n?!!(30===e||e&t&&n&t):!!(e&t)},nt=function(t,e,n){var i,r=((i={})[1]="auto",i[30]="none",i[24]="pan-x",i[6]="pan-y",i),s={};if(t&&t.style){var o=e.touchAction?e.touchAction:r[n],a=w(w({},L),{"touch-action":"none"===t.style["touch-action"]?"none":o});Object.keys(a).forEach((function(e){s[e]=t.style[e],t.style[e]=a[e]}))}return s},it=function(t,e){t&&t.style&&e&&Object.keys(e).forEach((function(n){t.style[n]=e[n]}))},rt=function(){function t(t){this._axes=t}var e=t.prototype;return e.hold=function(t,e){var n=this._getRoundPos(t).roundPos;this._axes.trigger(new i.L("hold",{pos:n,input:e.input||null,inputEvent:e.event||null,isTrusted:!0}))},e.triggerRelease=function(t){var e=this._getRoundPos(t.destPos,t.depaPos),n=e.roundPos,r=e.roundDepa;t.destPos=n,t.depaPos=r,t.setTo=this._createUserControll(t.destPos,t.duration),this._axes.trigger(new i.L("release",w(w({},t),{bounceRatio:this._getBounceRatio(n)})))},e.triggerChange=function(t,e,n,r){var s=this;void 0===r&&(r=!1);var o=this.animationManager,a=o.axisManager,u=o.getEventInfo(),c=this._getRoundPos(t,e),h=c.roundPos,v=c.roundDepa,l=a.moveTo(h,v),f=(null==n?void 0:n.event)||(null==u?void 0:u.event)||null,d={pos:l.pos,delta:l.delta,bounceRatio:this._getBounceRatio(l.pos),holding:r,inputEvent:f,isTrusted:!!f,input:(null==n?void 0:n.input)||(null==u?void 0:u.input)||null,set:f?this._createUserControll(l.pos):function(){}},_=new i.L("change",d);return this._axes.trigger(_),Object.keys(l.pos).forEach((function(t){var e=l.pos[t];A(s._axes,t,e).current=e})),f&&a.set(d.set().destPos),!_.isCanceled()},e.triggerAnimationStart=function(t){var e=this._getRoundPos(t.destPos,t.depaPos),n=e.roundPos,r=e.roundDepa;t.destPos=n,t.depaPos=r,t.setTo=this._createUserControll(t.destPos,t.duration);var s=new i.L("animationStart",t);return this._axes.trigger(s),!s.isCanceled()},e.triggerAnimationEnd=function(t){void 0===t&&(t=!1),this._axes.trigger(new i.L("animationEnd",{isTrusted:t}))},e.triggerFinish=function(t){void 0===t&&(t=!1),this._axes.trigger(new i.L("finish",{isTrusted:t}))},e.setAnimationManager=function(t){this.animationManager=t},e.destroy=function(){this._axes.off()},e._createUserControll=function(t,e){void 0===e&&(e=0);var n={destPos:w({},t),duration:e};return function(t,e){return t&&(n.destPos=w({},t)),void 0!==e&&(n.duration=e),n}},e._getRoundPos=function(t,e){var n=this._axes.options.round;return{roundPos:Q(t,n),roundDepa:Q(e,n)}},e._getBounceRatio=function(t){return this._axes.axisManager.map(t,(function(t,e){return t<e.range[0]&&0!==e.bounce[0]?(e.range[0]-t)/e.bounce[0]:t>e.range[1]&&0!==e.bounce[1]?(t-e.range[1])/e.bounce[1]:0}))},t}(),st=function(){function t(t){this._options=t,this._prevented=!1}var e=t.prototype;return e.isInterrupting=function(){return this._options.interruptable||this._prevented},e.isInterrupted=function(){return!this._options.interruptable&&this._prevented},e.setInterrupt=function(t){this._options.interruptable||(this._prevented=t)},t}(),ot=function(t,e,n,i){var r=t,s=[n[0]?e[0]:i?e[0]-i[0]:e[0],n[1]?e[1]:i?e[1]+i[1]:e[1]];return r=Math.max(s[0],r),r=Math.min(s[1],r)},at=function(t,e){return t<e[0]||t>e[1]},ut=function(t,e,n){return n[1]&&t>e[1]||n[0]&&t<e[0]},ct=function(t,e,n){var i=t,r=e[0],s=e[1],o=s-r;return n[1]&&t>s&&(i=(i-s)%o+r),n[0]&&t<r&&(i=(i-r)%o+s),i},ht=function(){function t(t){var e=this;this._axis=t,this._complementOptions(),this._pos=Object.keys(this._axis).reduce((function(t,n){return t[n]=e._axis[n].range[0],t}),{})}var e=t.prototype;return e.getDelta=function(t,e){var n=this.get(t);return H(this.get(e),(function(t,e){return t-n[e]}))},e.get=function(t){var e=this;return t&&Array.isArray(t)?t.reduce((function(t,n){return n&&n in e._pos&&(t[n]=e._pos[n]),t}),{}):w(w({},this._pos),t||{})},e.moveTo=function(t,e){void 0===e&&(e=this._pos);var n=H(this._pos,(function(n,i){return i in t&&i in e?t[i]-e[i]:0}));return this.set(this.map(t,(function(t,e){return e?ct(t,e.range,e.circular):0}))),{pos:w({},this._pos),delta:n}},e.set=function(t){for(var e in t)e&&e in this._pos&&(this._pos[e]=t[e])},e.every=function(t,e){var n=this._axis;return U(t,(function(t,i){return e(t,n[i],i)}))},e.filter=function(t,e){var n=this._axis;return W(t,(function(t,i){return e(t,n[i],i)}))},e.map=function(t,e){var n=this._axis;return H(t,(function(t,i){return e(t,n[i],i)}))},e.isOutside=function(t){return!this.every(t?this.get(t):this._pos,(function(t,e){return!at(t,e.range)}))},e.getAxisOptions=function(t){return this._axis[t]},e._complementOptions=function(){var t=this;Object.keys(this._axis).forEach((function(e){t._axis[e]=w({range:[0,100],bounce:[0,0],circular:[!1,!1],startPos:t._axis[e].range[0]},t._axis[e]),["bounce","circular"].forEach((function(n){var i=t._axis,r=i[e][n];/string|number|boolean/.test(typeof r)&&(i[e][n]=[r,r])}))}))},t}(),vt="ontouchstart"in P,lt="PointerEvent"in P,ft=lt||"MSPointerEvent"in P,dt=function(){function t(){var t=this;this._stopContextMenu=function(e){e.preventDefault(),P.removeEventListener("contextmenu",t._stopContextMenu)}}var e=t.prototype;return e.extendEvent=function(t){var e,n=this.prevEvent,i=this._getCenter(t),r=n?this._getMovement(t):{x:0,y:0},s=n?this._getScale(t):1,o=n?K(i.x-n.center.x,i.y-n.center.y):0,a=n?n.deltaX+r.x:r.x,u=n?n.deltaY+r.y:r.y,c=r.x,h=r.y,v=this._latestInterval,l=Date.now(),f=v?l-v.timestamp:0,d=n?n.velocityX:0,_=n?n.velocityY:0;return(!v||f>=16)&&(v&&(d=(e=[(a-v.deltaX)/f,(u-v.deltaY)/f])[0],_=e[1]),this._latestInterval={timestamp:l,deltaX:a,deltaY:u}),{srcEvent:t,scale:s,angle:o,center:i,deltaX:a,deltaY:u,offsetX:c,offsetY:h,velocityX:d,velocityY:_,preventSystemEvent:!0}},e._getDistance=function(t,e){var n=e.clientX-t.clientX,i=e.clientY-t.clientY;return Math.sqrt(n*n+i*i)},e._getButton=function(t){var e={1:R,2:C,4:S},n=this._isTouchEvent(t)?R:e[t.buttons];return n||null},e._isTouchEvent=function(t){return t.type.indexOf("touch")>-1},e._isValidButton=function(t,e){return e.indexOf(t)>-1},e._preventMouseButton=function(t,e){e===C?P.addEventListener("contextmenu",this._stopContextMenu):e===S&&t.preventDefault()},t}(),_t=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.start=["mousedown"],e.move=["mousemove"],e.end=["mouseup"],e}M(e,t);var n=e.prototype;return n.onEventStart=function(t,e){var n=this._getButton(t);return e&&!this._isValidButton(n,e)?null:(this._preventMouseButton(t,n),this.extendEvent(t))},n.onEventMove=function(t,e){return e&&!this._isValidButton(this._getButton(t),e)?null:this.extendEvent(t)},n.onEventEnd=function(){},n.onRelease=function(){this.prevEvent=null},n.getTouches=function(){return 0},n._getScale=function(){return 1},n._getCenter=function(t){return{x:t.clientX,y:t.clientY}},n._getMovement=function(t){var e=this.prevEvent.srcEvent;return{x:t.clientX-e.clientX,y:t.clientY-e.clientY}},e}(dt),pt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.start=["touchstart"],e.move=["touchmove"],e.end=["touchend","touchcancel"],e}M(e,t);var n=e.prototype;return n.onEventStart=function(t){return this._baseTouches=t.touches,this.extendEvent(t)},n.onEventMove=function(t){return this.extendEvent(t)},n.onEventEnd=function(t){this._baseTouches=t.touches},n.onRelease=function(){this.prevEvent=null,this._baseTouches=null},n.getTouches=function(t){return t.touches.length},n._getScale=function(t){return 2!==t.touches.length||this._baseTouches.length<2?null:this._getDistance(t.touches[0],t.touches[1])/this._getDistance(this._baseTouches[0],this._baseTouches[1])},n._getCenter=function(t){return{x:t.touches[0].clientX,y:t.touches[0].clientY}},n._getMovement=function(t){var e=this.prevEvent.srcEvent;return t.touches[0].identifier!==e.touches[0].identifier?{x:0,y:0}:{x:t.touches[0].clientX-e.touches[0].clientX,y:t.touches[0].clientY-e.touches[0].clientY}},e}(dt),gt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.start=lt?["pointerdown"]:["MSPointerDown"],e.move=lt?["pointermove"]:["MSPointerMove"],e.end=lt?["pointerup","pointercancel"]:["MSPointerUp","MSPointerCancel"],e._firstInputs=[],e._recentInputs=[],e}M(e,t);var n=e.prototype;return n.onEventStart=function(t,e){var n=this._getButton(t);return e&&!this._isValidButton(n,e)?null:(this._preventMouseButton(t,n),this._updatePointerEvent(t),this.extendEvent(t))},n.onEventMove=function(t,e){return e&&!this._isValidButton(this._getButton(t),e)?null:(this._updatePointerEvent(t),this.extendEvent(t))},n.onEventEnd=function(t){this._removePointerEvent(t)},n.onRelease=function(){this.prevEvent=null,this._firstInputs=[],this._recentInputs=[]},n.getTouches=function(){return this._recentInputs.length},n._getScale=function(){return 2!==this._recentInputs.length?null:this._getDistance(this._recentInputs[0],this._recentInputs[1])/this._getDistance(this._firstInputs[0],this._firstInputs[1])},n._getCenter=function(t){return{x:t.clientX,y:t.clientY}},n._getMovement=function(t){var e=this.prevEvent.srcEvent;return t.pointerId!==e.pointerId?{x:0,y:0}:{x:t.clientX-e.clientX,y:t.clientY-e.clientY}},n._updatePointerEvent=function(t){var e=this,n=!1;this._recentInputs.forEach((function(i,r){i.pointerId===t.pointerId&&(n=!0,e._recentInputs[r]=t)})),n||(this._firstInputs.push(t),this._recentInputs.push(t))},n._removePointerEvent=function(t){this._firstInputs=this._firstInputs.filter((function(e){return e.pointerId!==t.pointerId})),this._recentInputs=this._recentInputs.filter((function(e){return e.pointerId!==t.pointerId}))},e}(dt),mt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.start=["mousedown","touchstart"],e.move=["mousemove","touchmove"],e.end=["mouseup","touchend","touchcancel"],e}M(e,t);var n=e.prototype;return n.onEventStart=function(t,e){var n=this._getButton(t);return this._isTouchEvent(t)&&(this._baseTouches=t.touches),e&&!this._isValidButton(n,e)?null:(this._preventMouseButton(t,n),this.extendEvent(t))},n.onEventMove=function(t,e){return e&&!this._isValidButton(this._getButton(t),e)?null:this.extendEvent(t)},n.onEventEnd=function(t){this._isTouchEvent(t)&&(this._baseTouches=t.touches)},n.onRelease=function(){this.prevEvent=null,this._baseTouches=null},n.getTouches=function(t){return this._isTouchEvent(t)?t.touches.length:0},n._getScale=function(t){return this._isTouchEvent(t)?2!==t.touches.length||this._baseTouches.length<2?1:this._getDistance(t.touches[0],t.touches[1])/this._getDistance(this._baseTouches[0],this._baseTouches[1]):this.prevEvent.scale},n._getCenter=function(t){return this._isTouchEvent(t)?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:t.clientX,y:t.clientY}},n._getMovement=function(t){var e=this,n=[t,this.prevEvent.srcEvent].map((function(t){return e._isTouchEvent(t)?{id:t.touches[0].identifier,x:t.touches[0].clientX,y:t.touches[0].clientY}:{id:null,x:t.clientX,y:t.clientY}})),i=n[0],r=n[1];return i.id===r.id?{x:i.x-r.x,y:i.y-r.y}:{x:0,y:0}},e}(dt),Et=function(t,e){return e.reduce((function(e,n,i){return t[i]&&(e[t[i]]=n),e}),{})},bt=function(t){void 0===t&&(t=[]);var e=!1,n=!1,i=!1;return t.forEach((function(t){switch(t){case"mouse":n=!0;break;case"touch":e=vt;break;case"pointer":i=ft}})),i?new gt:e&&n?new mt:e?new pt:n?new _t:null},xt=function(){function t(t){var e=t.options,n=t.interruptManager,i=t.eventManager,r=t.axisManager,s=t.animationManager;this._isOutside=!1,this._moveDistance=null,this._isStopped=!1,this.options=e,this._interruptManager=n,this._eventManager=i,this._axisManager=r,this._animationManager=s}var e=t.prototype;return e.get=function(t){return this._axisManager.get(t.axes)},e.hold=function(t,e){if(!this._interruptManager.isInterrupted()&&t.axes.length){var n={input:t,event:e};this._isStopped=!1,this._interruptManager.setInterrupt(!0),this._animationManager.stopAnimation(n),this._moveDistance||this._eventManager.hold(this._axisManager.get(),n),this._isOutside=this._axisManager.isOutside(t.axes),this._moveDistance=this._axisManager.get(t.axes)}},e.change=function(t,e,n,i){if(!this._isStopped&&this._interruptManager.isInterrupting()&&!this._axisManager.every(n,(function(t){return 0===t}))){var r=e.srcEvent?e.srcEvent:e;if(!r.__childrenAxesAlreadyChanged){var s,o=this._moveDistance||this._axisManager.get(t.axes);s=H(o,(function(t,e){return t+(n[e]||0)})),this._moveDistance&&(this._moveDistance=this._axisManager.map(s,(function(t,e){var n=e.circular,i=e.range;return n&&(n[0]||n[1])?ct(t,i,n):t}))),this._isOutside&&this._axisManager.every(o,(function(t,e){return!at(t,e.range)}))&&(this._isOutside=!1),o=this._atOutside(o),s=this._atOutside(s),this.options.nested&&this._isEndofAxis(n,o,s)||(r.__childrenAxesAlreadyChanged=!0);var a={input:t,event:e};if(i){var u=this._animationManager.getDuration(s,o);this._animationManager.animateTo(s,u,a)}else{!this._eventManager.triggerChange(s,o,a,!0)&&(this._isStopped=!0,this._moveDistance=null,this._animationManager.finish(!1))}}}},e.release=function(t,e,n,i){if(!this._isStopped&&this._interruptManager.isInterrupting()&&this._moveDistance){var r=e.srcEvent?e.srcEvent:e;r.__childrenAxesAlreadyReleased&&(n=n.map((function(){return 0})));var s=this._axisManager.get(t.axes),o=this._axisManager.get(),a=this._animationManager.getDisplacement(n),u=Et(t.axes,a),c=this._axisManager.get(this._axisManager.map(u,(function(t,e,n){return e.circular&&(e.circular[0]||e.circular[1])?s[n]+t:ot(s[n]+t,e.range,e.circular,e.bounce)})));r.__childrenAxesAlreadyReleased=!0;var h=this._animationManager.getDuration(c,s,i);0===h&&(c=w({},o));var v={depaPos:o,destPos:c,duration:h,delta:this._axisManager.getDelta(o,c),inputEvent:e,input:t,isTrusted:!0};this._eventManager.triggerRelease(v),this._moveDistance=null;var l=this._animationManager.getUserControl(v),f=q(l.destPos,o),d={input:t,event:e};f||0===l.duration?(f||this._eventManager.triggerChange(l.destPos,o,d,!0),this._interruptManager.setInterrupt(!1),this._axisManager.isOutside()?this._animationManager.restore(d):this._eventManager.triggerFinish(!0)):this._animationManager.animateTo(l.destPos,l.duration,d)}},e._atOutside=function(t){var e=this;return this._isOutside?this._axisManager.map(t,(function(t,e){var n=e.range[0]-e.bounce[0],i=e.range[1]+e.bounce[1];return t>i?i:t<n?n:t})):this._axisManager.map(t,(function(t,n){var i=n.range[0],r=n.range[1],s=n.bounce,o=n.circular;return o&&(o[0]||o[1])?t:t<i?i-e._animationManager.interpolate(i-t,s[0]):t>r?r+e._animationManager.interpolate(t-r,s[1]):t}))},e._isEndofAxis=function(t,e,n){return this._axisManager.every(e,(function(i,r,s){return 0===t[s]||e[s]===n[s]&&(o=i,a=r.range,u=r.bounce,!(c=r.circular)[0]&&o===a[0]-u[0]||!c[1]&&o===a[1]+u[1]);var o,a,u,c}))},t}(),yt=function(t,e,n){return Math.max(Math.min(t,n),e)},Mt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._useDuration=!0,e}M(e,t);var n=e.prototype;return n.interpolate=function(t,e){var n=this._easing(1e-5)/1e-5;return this._easing(t/(e*n))*e},n.updateAnimation=function(t){var e=this._animateParam;if(e){var n=(new Date).getTime()-e.startTime,i=(null==t?void 0:t.destPos)||e.destPos,r=(null==t?void 0:t.duration)||e.duration;if((null==t?void 0:t.restart)||r<=n)this.setTo(i,r-n);else{if(null==t?void 0:t.destPos){var s=this.axisManager.get();this._initialEasingPer=this._prevEasingPer,e.delta=this.axisManager.getDelta(s,i),e.destPos=i}if(null==t?void 0:t.duration){var o=(n+this._durationOffset)/e.duration;this._durationOffset=o*r-n,e.duration=r}}}},n._initState=function(t){return this._initialEasingPer=0,this._prevEasingPer=0,this._durationOffset=0,{pos:t.depaPos,easingPer:0,finished:!1}},n._getNextState=function(t){var e=this,n=this._animateParam,i=t.pos,r=n.destPos,s=H(i,(function(t,e){return t<=r[e]?1:-1})),o=((new Date).getTime()-n.startTime+this._durationOffset)/n.duration,a=this._easing(o),u=this.axisManager.map(i,(function(t,u,c){var h=o>=1?r[c]:t+n.delta[c]*(a-e._prevEasingPer)/(1-e._initialEasingPer),v=ct(h,u.range,u.circular);if(h!==v){var l=s[c]*(u.range[1]-u.range[0]);r[c]-=l,i[c]-=l}return v}));return this._prevEasingPer=a,{pos:u,easingPer:a,finished:a>=1}},n._easing=function(t){return t>1?1:this._options.easing(t)},e}(function(){function t(t){var e=t.options,n=t.interruptManager,i=t.eventManager,r=t.axisManager;this._options=e,this.interruptManager=n,this.eventManager=i,this.axisManager=r,this.animationEnd=this.animationEnd.bind(this)}var e=t.prototype;return e.getDuration=function(t,e,n){var i,r=this;if(void 0!==n)i=n;else{var s=H(e,(function(e,n){return function(t,e){var n=Math.sqrt(t/e*2);return n<100?0:n}(Math.abs(e-t[n]),r._options.deceleration)}));i=Object.keys(s).reduce((function(t,e){return Math.max(t,s[e])}),-1/0)}return yt(i,this._options.minimumDuration,this._options.maximumDuration)},e.getDisplacement=function(t){var e=Math.pow(t.reduce((function(t,e){return t+e*e}),0),1/t.length),n=Math.abs(e/-this._options.deceleration);return t.map((function(t){return t/2*n}))},e.stopAnimation=function(t){if(this._animateParam){var e=this.axisManager.get(),n=this.axisManager.map(e,(function(t,e){return ct(t,e.range,e.circular)}));U(n,(function(t,n){return e[n]===t}))||this.eventManager.triggerChange(n,e,t,!!t),this._animateParam=null,this._raf&&(i=this._raf,Y(i)),this._raf=null,this.eventManager.triggerAnimationEnd(!!(null==t?void 0:t.event))}var i},e.getEventInfo=function(){return this._animateParam&&this._animateParam.input&&this._animateParam.inputEvent?{input:this._animateParam.input,event:this._animateParam.inputEvent}:null},e.restore=function(t){var e=this.axisManager.get(),n=this.axisManager.map(e,(function(t,e){return Math.min(e.range[1],Math.max(e.range[0],t))}));this.stopAnimation(),this.animateTo(n,this.getDuration(e,n),t)},e.animationEnd=function(){var t=this.getEventInfo();this._animateParam=null;var e=this.axisManager.filter(this.axisManager.get(),(function(t,e){return ut(t,e.range,e.circular)}));Object.keys(e).length>0&&this.setTo(this.axisManager.map(e,(function(t,e){return ct(t,e.range,e.circular)}))),this.interruptManager.setInterrupt(!1),this.eventManager.triggerAnimationEnd(!!t),this.axisManager.isOutside()?this.restore(t):this.finish(!!t)},e.finish=function(t){this._animateParam=null,this.interruptManager.setInterrupt(!1),this.eventManager.triggerFinish(t)},e.getUserControl=function(t){var e=t.setTo();return e.destPos=this.axisManager.get(e.destPos),e.duration=yt(e.duration,this._options.minimumDuration,this._options.maximumDuration),e},e.animateTo=function(t,e,n){var i=this;this.stopAnimation();var r=this._createAnimationParam(t,e,n),s=w({},r.depaPos),o=this.eventManager.triggerAnimationStart(r),a=this.getUserControl(r);if(!o&&this.axisManager.every(a.destPos,(function(t,e){return ut(t,e.range,e.circular)}))&&console.warn("You can't stop the 'animation' event when 'circular' is true."),o&&!q(a.destPos,s)){var u=(null==n?void 0:n.event)||null;this._animateLoop({depaPos:s,destPos:a.destPos,duration:a.duration,delta:this.axisManager.getDelta(s,a.destPos),isTrusted:!!u,inputEvent:u,input:(null==n?void 0:n.input)||null},(function(){return i.animationEnd()}))}},e.setTo=function(t,e){void 0===e&&(e=0);var n=Object.keys(t),i=this.axisManager.get(n);if(q(t,i))return this;this.interruptManager.setInterrupt(!0);var r=W(t,(function(t,e){return i[e]!==t}));return Object.keys(r).length?(r=this.axisManager.map(r,(function(t,e){var n=e.range,i=e.circular;return i&&(i[0]||i[1])?t:ot(t,n,i)})),q(r,i)||(e>0?this.animateTo(r,e):(this.stopAnimation(),this.eventManager.triggerChange(r),this.finish(!1))),this):this},e.setBy=function(t,e){return void 0===e&&(e=0),this.setTo(H(this.axisManager.get(Object.keys(t)),(function(e,n){return e+t[n]})),e)},e._createAnimationParam=function(t,e,n){var i=this.axisManager.get(),r=t,s=(null==n?void 0:n.event)||null;return{depaPos:i,destPos:r,duration:yt(e,this._options.minimumDuration,this._options.maximumDuration),delta:this.axisManager.getDelta(i,r),inputEvent:s,input:(null==n?void 0:n.input)||null,isTrusted:!!s,done:this.animationEnd}},e._animateLoop=function(t,e){var n=this;if(t.duration){this._animateParam=w(w({},t),{startTime:(new Date).getTime()});var i=H(t.destPos,(function(t){return t})),r=this._initState(this._animateParam),s=function(){n._raf=null;var t=n._animateParam,o=n._getNextState(r),a=!n.eventManager.triggerChange(o.pos,r.pos);if(r=o,o.finished)return t.destPos=n._getFinalPos(t.destPos,i),q(t.destPos,n.axisManager.get(Object.keys(t.destPos)))||n.eventManager.triggerChange(t.destPos,o.pos),void e();a?n.finish(!1):n._raf=X(s)};s()}else this.eventManager.triggerChange(t.destPos),e()},e._getFinalPos=function(t,e){var n=this,i=1e-6;return H(t,(function(t,r){if(t>=e[r]-i&&t<=e[r]+i)return e[r];var s=n._getRoundUnit(t,r);return Z(t,s)}))},e._getRoundUnit=function(t,e){var n,i=this._options.round,r=null;if(!i){var s=this.axisManager.getAxisOptions(e);n=Math.max(G(s.range[0]),G(s.range[1]),G(t)),r=1/Math.pow(10,n)}return r||i},t}()),wt=function(t){function e(e,n,i){void 0===e&&(e={}),void 0===n&&(n={}),void 0===i&&(i=null);var r=t.call(this)||this;return r.axis=e,r._inputs=[],r.options=w({easing:function(t){return 1-Math.pow(1-t,3)},interruptable:!0,maximumDuration:1/0,minimumDuration:0,deceleration:6e-4,round:null,nested:!1},n),r.interruptManager=new st(r.options),r.axisManager=new ht(r.axis),r.eventManager=new rt(r),r.animationManager=new Mt(r),r.inputObserver=new xt(r),r.eventManager.setAnimationManager(r.animationManager),r.eventManager.triggerChange(function(t,e){return w(w({},Object.keys(t).reduce((function(e,n){var i,r,s;return Object.assign(e,((i={})[n]=null!==(s=null!==(r=t[n].startPos)&&void 0!==r?r:t[n].range[0])&&void 0!==s?s:0,i))}),{})),e)}(e,i)),r}M(e,t);var n=e.prototype;return n.connect=function(t,e){var n;return n="string"==typeof t?t.split(" "):t.concat(),~this._inputs.indexOf(e)&&this.disconnect(e),e.mapAxes(n),e.connect(this.inputObserver),this._inputs.push(e),this},n.disconnect=function(t){if(t){var e=this._inputs.indexOf(t);e>=0&&(this._inputs[e].disconnect(),this._inputs.splice(e,1))}else this._inputs.forEach((function(t){return t.disconnect()})),this._inputs=[];return this},n.get=function(t){return this.axisManager.get(t)},n.setTo=function(t,e){return void 0===e&&(e=0),this.animationManager.setTo(t,e),this},n.setBy=function(t,e){return void 0===e&&(e=0),this.animationManager.setBy(t,e),this},n.stopAnimation=function(){return this.animationManager.stopAnimation(),this},n.updateAnimation=function(t){return this.animationManager.updateAnimation(t),this},n.isBounceArea=function(t){return this.axisManager.isOutside(t)},n.destroy=function(){this.disconnect(),this.eventManager.destroy()},e.VERSION="3.5.0",e.TRANSFORM=j,e.DIRECTION_NONE=1,e.DIRECTION_LEFT=2,e.DIRECTION_RIGHT=4,e.DIRECTION_UP=8,e.DIRECTION_DOWN=16,e.DIRECTION_HORIZONTAL=6,e.DIRECTION_VERTICAL=D,e.DIRECTION_ALL=30,e=function(t,e,n,i){var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o}([I],e),e}(i.Z),Pt=function(){function t(t,e){var n=this;this.axes=[],this.element=null,this._enabled=!1,this._activeEvent=null,this._atRightEdge=!1,this._rightEdgeTimer=0,this._forceRelease=function(){var t=n._activeEvent,e=t.prevEvent;t.onRelease(),n._observer.release(n,e,[0,0]),n._detachWindowEvent(t)},this._voidFunction=function(){},this.element=V(t),this.options=w({inputType:["touch","mouse","pointer"],inputButton:[R],scale:[1,1],thresholdAngle:45,threshold:0,iOSEdgeSwipeThreshold:30,releaseOnScroll:!1,touchAction:null},e),this._onPanstart=this._onPanstart.bind(this),this._onPanmove=this._onPanmove.bind(this),this._onPanend=this._onPanend.bind(this)}var e=t.prototype;return e.mapAxes=function(t){this._direction=tt(!!t[0],!!t[1]),this.axes=t},e.connect=function(t){return this._activeEvent&&(this._detachElementEvent(),this._detachWindowEvent(this._activeEvent)),this._attachElementEvent(t),this._originalCssProps=nt(this.element,this.options,this._direction),this},e.disconnect=function(){return this._detachElementEvent(),this._detachWindowEvent(this._activeEvent),$(this._originalCssProps)||it(this.element,this._originalCssProps),this._direction=1,this},e.destroy=function(){this.disconnect(),this.element=null},e.enable=function(){return this._enabled=!0,this},e.disable=function(){return this._enabled=!1,this},e.isEnabled=function(){return this._enabled},e._onPanstart=function(t){var e=this._activeEvent,n=e.onEventStart(t,this.options.inputButton);if(n&&this._enabled&&!(e.getTouches(t)>1)&&!1!==n.srcEvent.cancelable){var i=this.options.iOSEdgeSwipeThreshold;this._observer.hold(this,n),this._atRightEdge=k&&n.center.x>window.innerWidth-i,this._attachWindowEvent(e),e.prevEvent=n}},e._onPanmove=function(t){var e=this,n=this._activeEvent,i=n.onEventMove(t,this.options.inputButton);if(i&&this._enabled&&!(n.getTouches(t)>1)){var r=this.options,s=r.iOSEdgeSwipeThreshold,o=r.releaseOnScroll,a=function(t,e){if(e<0||e>90)return 1;var n=Math.abs(t);return n>e&&n<180-e?D:6}(i.angle,this.options.thresholdAngle);if(!o||i.srcEvent.cancelable){if(n.prevEvent&&k){if(i.center.x<0)return void this._forceRelease();this._atRightEdge&&(clearTimeout(this._rightEdgeTimer),i.deltaX<-s?this._atRightEdge=!1:this._rightEdgeTimer=window.setTimeout((function(){return e._forceRelease()}),100))}var u=this._getOffset([i.offsetX,i.offsetY],[et(6,this._direction,a),et(D,this._direction,a)]),c=u.some((function(t){return 0!==t}));c&&(!1!==i.srcEvent.cancelable&&i.srcEvent.preventDefault(),i.srcEvent.stopPropagation()),i.preventSystemEvent=c,c&&this._observer.change(this,i,Et(this.axes,u)),n.prevEvent=i}else this._onPanend(t)}},e._onPanend=function(t){var e=this._activeEvent;if(e.onEventEnd(t),this._enabled&&0===e.getTouches(t)){this._detachWindowEvent(e),clearTimeout(this._rightEdgeTimer);var n=e.prevEvent,i=this._getOffset([Math.abs(n.velocityX)*(n.offsetX<0?-1:1),Math.abs(n.velocityY)*(n.offsetY<0?-1:1)],[et(6,this._direction),et(D,this._direction)]);e.onRelease(),this._observer.release(this,n,i)}},e._attachWindowEvent=function(t){var e=this;null==t||t.move.forEach((function(t){window.addEventListener(t,e._onPanmove,{passive:!1})})),null==t||t.end.forEach((function(t){window.addEventListener(t,e._onPanend,{passive:!1})}))},e._detachWindowEvent=function(t){var e=this;null==t||t.move.forEach((function(t){window.removeEventListener(t,e._onPanmove)})),null==t||t.end.forEach((function(t){window.removeEventListener(t,e._onPanend)}))},e._getOffset=function(t,e){var n=this.options.scale;return[e[0]?t[0]*n[0]:0,e[1]?t[1]*n[1]:0]},e._attachElementEvent=function(t){var e=this,n=bt(this.options.inputType);n&&(this._observer=t,this._enabled=!0,this._activeEvent=n,n.start.forEach((function(t){var n;null===(n=e.element)||void 0===n||n.addEventListener(t,e._onPanstart)})),n.move.forEach((function(t){var n;null===(n=e.element)||void 0===n||n.addEventListener(t,e._voidFunction)})))},e._detachElementEvent=function(){var t=this,e=this._activeEvent;null==e||e.start.forEach((function(e){var n;null===(n=t.element)||void 0===n||n.removeEventListener(e,t._onPanstart)})),null==e||e.move.forEach((function(e){var n;null===(n=t.element)||void 0===n||n.removeEventListener(e,t._voidFunction)})),this._enabled=!1,this._observer=null},t}(),Tt=function(){function t(t,e){this.axes=[],this.element=null,this._enabled=!1,this._holding=!1,this._timer=null,this.element=V(t),this.options=w({scale:1,releaseDelay:300,useNormalized:!0,useAnimation:!1},e),this._onWheel=this._onWheel.bind(this)}var e=t.prototype;return e.mapAxes=function(t){this._direction=tt(!!t[1],!!t[0]),this.axes=t},e.connect=function(t){return this._detachEvent(),this._attachEvent(t),this},e.disconnect=function(){return this._detachEvent(),this},e.destroy=function(){this.disconnect(),this.element=null},e.enable=function(){return this._enabled=!0,this},e.disable=function(){return this._enabled=!1,this},e.isEnabled=function(){return this._enabled},e._onWheel=function(t){var e=this;if(this._enabled){var n=this._getOffset([t.deltaY,t.deltaX],[et(D,this._direction),et(6,this._direction)]);0===n[0]&&0===n[1]||(t.preventDefault(),this._holding||(this._observer.hold(this,t),this._holding=!0),this._observer.change(this,t,Et(this.axes,n),this.options.useAnimation),clearTimeout(this._timer),this._timer=setTimeout((function(){e._holding&&(e._holding=!1,e._observer.release(e,t,[0]))}),this.options.releaseDelay))}},e._getOffset=function(t,e){var n=this.options.scale,i=this.options.useNormalized;return[e[0]&&t[0]?(t[0]>0?-1:1)*(i?1:Math.abs(t[0]))*n:0,e[1]&&t[1]?(t[1]>0?-1:1)*(i?1:Math.abs(t[1]))*n:0]},e._attachEvent=function(t){this._observer=t,this.element.addEventListener("wheel",this._onWheel),this._enabled=!0},e._detachEvent=function(){this.element.removeEventListener("wheel",this._onWheel),this._enabled=!1,this._observer=null,this._timer&&(clearTimeout(this._timer),this._timer=null)},t}();const Ot=wt},1588:(t,e,n)=>{function i(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,s=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(i=s.next()).done;)o.push(i.value)}catch(a){r={error:a}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return o}function s(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t}n.d(e,{L:()=>u,Z:()=>c});var o=function(t){return void 0===t},a=function(){function t(t,e){var n,r;if(this._canceled=!1,e)try{for(var s=i(Object.keys(e)),o=s.next();!o.done;o=s.next()){var a=o.value;this[a]=e[a]}}catch(u){n={error:u}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}this.eventType=t}var e=t.prototype;return e.stop=function(){this._canceled=!0},e.isCanceled=function(){return this._canceled},t}(),u=a;const c=function(){function t(){this._eventHandler={}}var e=t.prototype;return e.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=t instanceof a?t.eventType:t,r=s(this._eventHandler[i]||[]);return r.length<=0||(t instanceof a?(t.currentTarget=this,r.forEach((function(e){e(t)}))):r.forEach((function(t){t.apply(void 0,s(e))}))),this},e.once=function(t,e){var n=this;if("object"==typeof t&&o(e)){var i=t;for(var r in i)this.once(r,i[r]);return this}if("string"==typeof t&&"function"==typeof e){var a=function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];e.apply(void 0,s(i)),n.off(t,a)};this.on(t,a)}return this},e.hasOn=function(t){return!!this._eventHandler[t]},e.on=function(t,e){if("object"==typeof t&&o(e)){var n=t;for(var i in n)this.on(i,n[i]);return this}if("string"==typeof t&&"function"==typeof e){var r=this._eventHandler[t];o(r)&&(this._eventHandler[t]=[],r=this._eventHandler[t]),r.push(e)}return this},e.off=function(t,e){var n,r;if(o(t))return this._eventHandler={},this;if(o(e)){if("string"==typeof t)return delete this._eventHandler[t],this;var s=t;for(var a in s)this.off(a,s[a]);return this}var u=this._eventHandler[t];if(u){var c=0;try{for(var h=i(u),v=h.next();!v.done;v=h.next()){if(v.value===e){u.splice(c,1),u.length<=0&&delete this._eventHandler[t];break}c++}}catch(l){n={error:l}}finally{try{v&&!v.done&&(r=h.return)&&r.call(h)}finally{if(n)throw n.error}}}return this},t.VERSION="3.0.2",t}()}}]);