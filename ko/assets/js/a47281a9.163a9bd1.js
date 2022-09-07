"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5500],{876:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>s});var r=n(2784);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),d=c(n),s=a,g=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(g,i(i({ref:e},k),{},{components:n})):r.createElement(g,i({ref:e},k))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2610:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7896),a=(n(2784),n(876));const l={custom_edit_url:null},i=void 0,o={unversionedId:"api/Conveyer",id:"version-1.4.3/api/Conveyer",title:"Conveyer",description:"Conveyer\ub294 \ub124\uc774\ud2f0\ube0c \uc2a4\ud06c\ub864\uc5d0 \ub4dc\ub798\uadf8 \uc81c\uc2a4\ucc98\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-1.4.3/api/Conveyer.mdx",sourceDirName:"api",slug:"/api/Conveyer",permalink:"/egjs-conveyer/ko/docs/api/Conveyer",editUrl:null,tags:[],version:"1.4.3",frontMatter:{custom_edit_url:null},sidebar:"api",next:{title:"Component",permalink:"/egjs-conveyer/ko/docs/api/Component"}},p=[{value:"constructor",id:"constructor",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"isReachStart",id:"isReachStart",children:[],level:3},{value:"isReachEnd",id:"isReachEnd",children:[],level:3},{value:"scrollPos",id:"scrollPos",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"findElement",id:"findElement",children:[],level:3},{value:"findItem",id:"findItem",children:[],level:3},{value:"scrollIntoView",id:"scrollIntoView",children:[],level:3},{value:"scrollBy",id:"scrollBy",children:[],level:3},{value:"scrollTo",id:"scrollTo",children:[],level:3},{value:"setItems",id:"setItems",children:[],level:3},{value:"updateItems",id:"updateItems",children:[],level:3},{value:"updateContainer",id:"updateContainer",children:[],level:3},{value:"update",id:"update",children:[],level:3},{value:"init",id:"init",children:[],level:3},{value:"destroy",id:"destroy",children:[],level:3},{value:"trigger",id:"trigger",children:[],level:3},{value:"once",id:"once",children:[],level:3},{value:"hasOn",id:"hasOn",children:[],level:3},{value:"on",id:"on",children:[],level:3},{value:"off",id:"off",children:[],level:3}],level:2},{value:"Events",id:"events",children:[{value:"reachStart",id:"event-reachStart",children:[],level:3},{value:"leaveStart",id:"event-leaveStart",children:[],level:3},{value:"reachEnd",id:"event-reachEnd",children:[],level:3},{value:"leaveEnd",id:"event-leaveEnd",children:[],level:3},{value:"beginScroll",id:"event-beginScroll",children:[],level:3},{value:"finishScroll",id:"event-finishScroll",children:[],level:3}],level:2}],c={toc:p};function k(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Conveyer extends Component\n")),(0,a.kt)("div",null),(0,a.kt)("p",null,"Conveyer\ub294 \ub124\uc774\ud2f0\ube0c \uc2a4\ud06c\ub864\uc5d0 \ub4dc\ub798\uadf8 \uc81c\uc2a4\ucc98\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,a.kt)("div",{className:"container"},(0,a.kt)("div",{className:"row mb-2"},(0,a.kt)("div",{className:"col col--4"},(0,a.kt)("strong",null,"Properties")),(0,a.kt)("div",{className:"col col--4"},(0,a.kt)("strong",null,"Methods")),(0,a.kt)("div",{className:"col col--4"},(0,a.kt)("strong",null,"Events"))),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col col--4"},(0,a.kt)("a",{href:"#isReachStart"},"isReachStart"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#isReachEnd"},"isReachEnd"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#scrollPos"},"scrollPos")),(0,a.kt)("div",{className:"col col--4"},(0,a.kt)("a",{href:"#findElement"},"findElement"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#findItem"},"findItem"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#scrollIntoView"},"scrollIntoView"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#scrollBy"},"scrollBy"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#scrollTo"},"scrollTo"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#setItems"},"setItems"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#updateItems"},"updateItems"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#updateContainer"},"updateContainer"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#update"},"update"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#init"},"init"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#destroy"},"destroy"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#trigger"},"trigger"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#once"},"once"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#hasOn"},"hasOn"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#on"},"on"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#off"},"off")),(0,a.kt)("div",{className:"col col--4"},(0,a.kt)("a",{href:"#event-reachStart"},"reachStart"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#event-leaveStart"},"leaveStart"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#event-reachEnd"},"reachEnd"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#event-leaveEnd"},"leaveEnd"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#event-beginScroll"},"beginScroll"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#event-finishScroll"},"finishScroll")))),(0,a.kt)("h2",{id:"constructor"},"constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new Conveyer(scrollArea, options)\n")),(0,a.kt)("div",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"scrollArea"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string ","|"," HTMLElement ","|"," Ref","<","HTMLElement",">"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ubaa8\ub4c8\uc744 \uc801\uc6a9\ud560 \uae30\uc900 \uc5d8\ub9ac\uba3c\ud2b8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"options"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"ConveyerOptions"},"ConveyerOptions")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,a.kt)("td",{parentName:"tr",align:"center"},"eg.InfiniteGrid \ubaa8\ub4c8\uc758 \uc635\uc158 \uac1d\uccb4")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="items">\n  <div class="item"></div>\n  <div class="item"></div>\n  <div class="item"></div>\n</div>\n<script>\nimport Conveyer from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".items");\n<\/script>\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"isReachStart"},"isReachStart"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--warning"},"readonly")),(0,a.kt)("p",null,"\uc2a4\ud06c\ub864\uc774 \uc2dc\uc791\uc5d0 \ub2ff\uc558\ub294\uc9c0 \uc5ec\ubd80."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default"),": true"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Conveyer } from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".container");\n\nconveyer.isReachStart\n')),(0,a.kt)("h3",{id:"isReachEnd"},"isReachEnd"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--warning"},"readonly")),(0,a.kt)("p",null,"\uc2a4\ud06c\ub864\uc774 \ub05d\uc5d0 \ub2ff\uc558\ub294\uc9c0 \uc5ec\ubd80."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default"),": false"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Conveyer } from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".container");\n\nconveyer.isReachEnd\n')),(0,a.kt)("h3",{id:"scrollPos"},"scrollPos"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--warning"},"readonly")),(0,a.kt)("p",null,"\ucee8\ud14c\uc774\ub108\uc758 \uc2a4\ud06c\ub864 \uc704\uce58"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": number"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default"),": 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Conveyer } from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".container");\n\nconveyer.scrollPos\n')),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"findElement"},"findElement"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\ud574\ub2f9 \ubc29\ud5a5\uc5d0 \ub300\ud574 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ucc3e\ub294\ub2e4.]"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"direction"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"start" ',"|",' "end" ',"|",' "prev" ',"|",' "next"'),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\uc5d8\ub9ac\uba3c\ud2b8\uc758 \ubc29\ud5a5. ",'"',"start",'"',", ",'"',"end",'"',"\ub294 \uc548\ucabd\uc73c\ub85c \ucc3e\ub294\ub2e4. ",'"',"prev",'"',", ",'"',"next",'"',"\ub294 \ubc14\uae65\ucabd\uc73c\ub85c \ucc3e\ub294\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"options"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"FindItemOptions"},"FindItemOptions")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,a.kt)("td",{parentName:"tr",align:"center"},"findElement \uba54\uc11c\ub4dc\uc758 \uc635\uc158")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/examples/Methods"},"direction's example")," page for detailed information",(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://naver.github.io/egjs-conveyer/img/scrollIntoView1.png",height:"200"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://naver.github.io/egjs-conveyer/img/scrollIntoView2.png",height:"210"})))),(0,a.kt)("h3",{id:"findItem"},"findItem"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\uc5d8\ub9ac\uba3c\ud2b8 \ub610\ub294 \ud574\ub2f9 \ubc29\ud5a5\uc5d0 \ub300\ud574 \uc544\uc774\ud15c\uc744 \ucc3e\ub294\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("a",{parentName:"p",href:"ConveyerItem"},"ConveyerItem")," ","|"," null"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"target"),(0,a.kt)("td",{parentName:"tr",align:"center"},"HTMLElement ","|",' "start" ',"|",' "end" ',"|",' "prev" ',"|",' "next"'),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\uc5d8\ub9ac\uba3c\ud2b8\uc758 \ubc29\ud5a5. ",'"',"start",'"',", ",'"',"end",'"',"\ub294 \uc548\ucabd\uc73c\ub85c \ucc3e\ub294\ub2e4. ",'"',"prev",'"',", ",'"',"next",'"',"\ub294 \ubc14\uae65\ucabd\uc73c\ub85c \ucc3e\ub294\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"options"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"FindItemOptions"},"FindItemOptions")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"findItem")," \uba54\uc11c\ub4dc\uc758 \uc635\uc158")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/examples/Methods"},"direction's example")," page for detailed information",(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://naver.github.io/egjs-conveyer/img/scrollIntoView1.png",height:"200"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://naver.github.io/egjs-conveyer/img/scrollIntoView2.png",height:"210"})))),(0,a.kt)("h3",{id:"scrollIntoView"},"scrollIntoView"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\uc5d8\ub9ac\uba3c\ud2b8\ub098 \ud574\ub2f9 \ubc29\ud5a5\uc5d0 \uc788\ub294 \uc544\uc774\ud15c\uc744 \ubdf0\uc548\uc73c\ub85c \uc2a4\ud06c\ub864\uc744 \ud55c\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"target"),(0,a.kt)("td",{parentName:"tr",align:"center"},"HTMLElement ","|",' "start" ',"|",' "end" ',"|",' "prev" ',"|",' "next"'),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\uc5d8\ub9ac\uba3c\ud2b8\uc758 \ubc29\ud5a5. ",'"',"start",'"',", ",'"',"end",'"',"\ub294 \uc548\ucabd\uc73c\ub85c \ucc3e\ub294\ub2e4. ",'"',"prev",'"',", ",'"',"next",'"',"\ub294 \ubc14\uae65\ucabd\uc73c\ub85c \ucc3e\ub294\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"options"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"ScrollIntoViewOptions"},"ScrollIntoViewOptions")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"scrollIntoView")," \uba54\uc11c\ub4dc\uc758 \uc635\uc158")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/examples/Methods"},"target's example")," page for detailed information",(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://naver.github.io/egjs-conveyer/img/scrollIntoView1.png",height:"200"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://naver.github.io/egjs-conveyer/img/scrollIntoView2.png",height:"210"})))),(0,a.kt)("h3",{id:"scrollBy"},"scrollBy"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc704\uce58 \uc591\ub9cc\ud07c \uc2a4\ud06c\ub864\ud55c\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"pos"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\uc2a4\ud06c\ub864\ud560 \uc704\uce58\uc758 \uc591.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud574\ub2f9 \uc704\uce58\ub9cc\ud07c \uc2a4\ud06c\ub864\ud558\ub294 \uc2dc\uac04")))),(0,a.kt)("h3",{id:"scrollTo"},"scrollTo"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc704\uce58\ub85c \uc2a4\ud06c\ub864\ud55c\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"pos"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\uc2a4\ud06c\ub864\ud560 \uc704\uce58\uc758 \uc591.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud574\ub2f9 \uc704\uce58\ub85c \uc2a4\ud06c\ub864\ud558\ub294 \uc2dc\uac04")))),(0,a.kt)("h3",{id:"setItems"},"setItems"),(0,a.kt)("div",null),(0,a.kt)("p",null,"Conveyer\uc5d0 \uc544\uc774\ud15c\ub4e4\uc744 \uc9c1\uc811 \uc124\uc815\ud55c\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"items"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"ConveyerItem"},"ConveyerItem"),"[]"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"Conveyer\uc5d0 \uc124\uc815\ud560 \uc544\uc774\ud15c\ub4e4")))),(0,a.kt)("h3",{id:"updateItems"},"updateItems"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\uc544\uc774\ud15c\ub4e4\uc758 \ud3ec\uc9c0\uc158, \uc0ac\uc774\uc988 \uc815\ubcf4\ub97c \uc5c5\ub370\uc774\ud2b8 \ud55c\ub2e4."),(0,a.kt)("h3",{id:"updateContainer"},"updateContainer"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\ucee8\ud14c\uc774\ub108\uc758 \ud06c\uae30, \uc2a4\ud06c\ub864 \uc0ac\uc774\uc988\ub97c \uc5c5\ub370\uc774\ud2b8 \ud55c\ub2e4."),(0,a.kt)("h3",{id:"update"},"update"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\ucee8\ud14c\uc774\ub108\uc640 \uc544\uc774\ud15c\ub4e4\uc744 \uc5c5\ub370\uc774\ud2b8 \ud55c\ub2e4."),(0,a.kt)("h3",{id:"init"},"init"),(0,a.kt)("div",null),(0,a.kt)("p",null,"autoInit \uc635\uc158\uc744 false\ub85c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc9c1\uc811 init \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \ucd08\uae30\ud654 \ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h3",{id:"destroy"},"destroy"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\uc778\uc2a4\ud134\uc2a4\uc640 \uc774\ubca4\ud2b8\ub97c \ud574\uc81c\ud55c\ub2e4."),(0,a.kt)("h3",{id:"trigger"},"trigger"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--danger"},"inherited")),(0,a.kt)("p",null,"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\ub97c \ubc1c\uc0dd\uc2dc\ud0a8\ub2e4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \uc790\uc2e0\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"event"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string ","|"," ComponentEvent"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ubc1c\uc0dd\ud560 \ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\uc758 \uc774\ub984 \ub610\ub294 ComponentEvent\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"params"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Array","<","any",">"," ","|"," $ts:..."),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c \uc804\ub2ec\ud560 \ub370\uc774\ud130")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  beforeHi: ComponentEvent<{ foo: number; bar: string }>;\n  hi: { foo: { a: number; b: boolean } };\n  someEvent: (foo: number, bar: string) => void;\n  someOtherEvent: void; // When there\'s no event argument\n}> {\n  some(){\n    if(this.trigger("beforeHi")){ // When event call to stop return false.\n      this.trigger("hi");// fire hi event.\n    }\n  }\n}\n\nconst some = new Some();\nsome.on("beforeHi", e => {\n  if(condition){\n    e.stop(); // When event call to stop, `hi` event not call.\n  }\n  // `currentTarget` is component instance.\n  console.log(some === e.currentTarget); // true\n\n  typeof e.foo; // number\n  typeof e.bar; // string\n});\nsome.on("hi", e => {\n  typeof e.foo.b; // boolean\n});\n// If you want to more know event design. You can see article.\n// https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F\n')),(0,a.kt)("h3",{id:"once"},"once"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--danger"},"inherited")),(0,a.kt)("p",null,"\uc774\ubca4\ud2b8\uac00 \ud55c\ubc88\ub9cc \uc2e4\ud589\ub41c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \uc790\uc2e0\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8\uc758 \uc774\ub984 \ub610\ub294 \uc774\ubca4\ud2b8 \uc774\ub984-\ud578\ub4e4\ub7ec \uc624\ube0c\uc81d\ud2b8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"handlerToAttach"),(0,a.kt)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8\uc758 \ud578\ub4e4\ub7ec \ud568\uc218")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: ComponentEvent;\n}> {\n  hi() {\n    alert("hi");\n  }\n  thing() {\n    this.once("hi", this.hi);\n  }\n}\n\nvar some = new Some();\nsome.thing();\nsome.trigger(new ComponentEvent("hi"));\n// fire alert("hi");\nsome.trigger(new ComponentEvent("hi"));\n// Nothing happens\n')),(0,a.kt)("h3",{id:"hasOn"},"hasOn"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--danger"},"inherited")),(0,a.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc774\ubca4\ud2b8\uac00 \ub4f1\ub85d\ub410\ub294\uc9c0 \ud655\uc778\ud55c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \ub4f1\ub85d \uc5ec\ubd80")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d \uc5ec\ubd80\ub97c \ud655\uc778\ud560 \uc774\ubca4\ud2b8\uc758 \uc774\ub984")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import Component from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  some() {\n    this.hasOn("hi");// check hi event.\n  }\n}\n')),(0,a.kt)("h3",{id:"on"},"on"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--danger"},"inherited")),(0,a.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc774\ubca4\ud2b8\ub97c \ub4f1\ub85d\ud55c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \uc790\uc2e0\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8\uc758 \uc774\ub984 \ub610\ub294 \uc774\ubca4\ud2b8 \uc774\ub984-\ud578\ub4e4\ub7ec \uc624\ube0c\uc81d\ud2b8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"handlerToAttach"),(0,a.kt)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8\uc758 \ud578\ub4e4\ub7ec \ud568\uc218")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.on("hi",this.hi); //attach event\n  }\n}\n')),(0,a.kt)("h3",{id:"off"},"off"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--danger"},"inherited")),(0,a.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub4f1\ub85d\ub41c \uc774\ubca4\ud2b8\ub97c \ud574\uc81c\ud55c\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"p"},"eventName"),"\uc774 \uc8fc\uc5b4\uc9c0\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0 \ubaa8\ub4e0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc81c\uac70\ud55c\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"p"},"handlerToAttach"),"\uac00 \uc8fc\uc5b4\uc9c0\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"eventName"),"\uc5d0 \ud574\ub2f9\ud558\ub294 \ubaa8\ub4e0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc81c\uac70\ud55c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \uc790\uc2e0\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud574\uc81c\ud560 \uc774\ubca4\ud2b8\uc758 \uc774\ub984")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"handlerToDetach"),(0,a.kt)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud574\uc81c\ud560 \uc774\ubca4\ud2b8\uc758 \ud578\ub4e4\ub7ec \ud568\uc218")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.off("hi",this.hi); //detach event\n  }\n}\n')),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"event-reachStart"},"reachStart"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\uc2a4\ud06c\ub864\uc774 \uc55e\uc5d0 \ub2ff\uc73c\uba74 \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\uc774\ub2e4."),(0,a.kt)("h3",{id:"event-leaveStart"},"leaveStart"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\uc2a4\ud06c\ub864\uc774 \uc55e\uc5d0\uc11c \ub5a0\ub098\uba74 \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\uc774\ub2e4."),(0,a.kt)("h3",{id:"event-reachEnd"},"reachEnd"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\uc2a4\ud06c\ub864\uc774 \ub05d\uc5d0 \ub2ff\uc73c\uba74 \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\uc774\ub2e4."),(0,a.kt)("h3",{id:"event-leaveEnd"},"leaveEnd"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\uc2a4\ud06c\ub864\uc774 \ub05d\uc5d0\uc11c \ub5a0\ub098\uba74 \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\uc774\ub2e4."),(0,a.kt)("h3",{id:"event-beginScroll"},"beginScroll"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\uc2a4\ud06c\ub864\uc774 \uc2dc\uc791\ud558\uba74 \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\uc774\ub2e4."),(0,a.kt)("h3",{id:"event-finishScroll"},"finishScroll"),(0,a.kt)("div",null),(0,a.kt)("p",null,"\uc2a4\ud06c\ub864\uc774 \ub05d\ub098\uba74 \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\uc774\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"e"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"OnFinishScroll"},"OnFinishScroll")),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8\uc5d0 \uc804\ub2ec\ub418\ub294 \ub370\uc774\ud130 \uac1d\uccb4")))))}k.isMDXComponent=!0}}]);