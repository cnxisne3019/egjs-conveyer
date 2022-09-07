"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9063],{876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=c(n),d=r,h=k["".concat(p,".").concat(d)]||k[d]||s[d]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4593:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7896),r=(n(2784),n(876));const o={custom_edit_url:null},l=void 0,i={unversionedId:"api/Component",id:"version-1.4.3/api/Component",title:"Component",description:"A class used to manage events in a component",source:"@site/versioned_docs/version-1.4.3/api/Component.mdx",sourceDirName:"api",slug:"/api/Component",permalink:"/egjs-conveyer/docs/api/Component",editUrl:null,tags:[],version:"1.4.3",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Conveyer",permalink:"/egjs-conveyer/docs/api/Conveyer"},next:{title:"IS_IE",permalink:"/egjs-conveyer/docs/api/IS_IE"}},p=[{value:"Properties",id:"properties",children:[{value:"VERSION",id:"VERSION",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"trigger",id:"trigger",children:[],level:3},{value:"once",id:"once",children:[],level:3},{value:"hasOn",id:"hasOn",children:[],level:3},{value:"on",id:"on",children:[],level:3},{value:"off",id:"off",children:[],level:3}],level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Component\n")),(0,r.kt)("div",null),(0,r.kt)("p",null,"A class used to manage events in a component"),(0,r.kt)("div",{className:"container"},(0,r.kt)("div",{className:"row mb-2"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Properties")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Methods"))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#VERSION"},"VERSION"),(0,r.kt)("span",{className:"badge badge--info margin-left--sm"},"static")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#trigger"},"trigger"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#once"},"once"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#hasOn"},"hasOn"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#on"},"on"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#off"},"off")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"VERSION"},"VERSION"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"static")),(0,r.kt)("p",null,"Version info string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": string"),(0,r.kt)("p",null,"Component.VERSION;  // ex) 3.0.0"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"trigger"},"trigger"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Trigger a custom event."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",null,"An instance of the component itself"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"event"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string ","|"," ComponentEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("p",null,"The name of the custom event to be triggered or an instance of the ComponentEvent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"params"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Array","<","any",">"," ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("p",null,"Event data to be sent when triggering a custom event "))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  beforeHi: ComponentEvent<{ foo: number; bar: string }>;\n  hi: { foo: { a: number; b: boolean } };\n  someEvent: (foo: number, bar: string) => void;\n  someOtherEvent: void; // When there\'s no event argument\n}> {\n  some(){\n    if(this.trigger("beforeHi")){ // When event call to stop return false.\n      this.trigger("hi");// fire hi event.\n    }\n  }\n}\n\nconst some = new Some();\nsome.on("beforeHi", e => {\n  if(condition){\n    e.stop(); // When event call to stop, `hi` event not call.\n  }\n  // `currentTarget` is component instance.\n  console.log(some === e.currentTarget); // true\n\n  typeof e.foo; // number\n  typeof e.bar; // string\n});\nsome.on("hi", e => {\n  typeof e.foo.b; // boolean\n});\n// If you want to more know event design. You can see article.\n// https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F\n')),(0,r.kt)("h3",{id:"once"},"once"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Executed event just one time."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",null,"An instance of the component itself"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("p",null,"The name of the event to be attached or an event name - event handler mapped object."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"handlerToAttach"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("p",null,"The handler function of the event to be attached "))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: ComponentEvent;\n}> {\n  hi() {\n    alert("hi");\n  }\n  thing() {\n    this.once("hi", this.hi);\n  }\n}\n\nvar some = new Some();\nsome.thing();\nsome.trigger(new ComponentEvent("hi"));\n// fire alert("hi");\nsome.trigger(new ComponentEvent("hi"));\n// Nothing happens\n')),(0,r.kt)("h3",{id:"hasOn"},"hasOn"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Checks whether an event has been attached to a component."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",null,"Indicates whether the event is attached. "))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("p",null,"The name of the event to be attached "))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Component from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  some() {\n    this.hasOn("hi");// check hi event.\n  }\n}\n')),(0,r.kt)("h3",{id:"on"},"on"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Attaches an event to a component."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",null,"An instance of a component itself"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("p",null,"The name of the event to be attached or an event name - event handler mapped object."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"handlerToAttach"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("p",null,"The handler function of the event to be attached "))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.on("hi",this.hi); //attach event\n  }\n}\n')),(0,r.kt)("h3",{id:"off"},"off"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Detaches an event from the component.",(0,r.kt)("br",null),"If the ",(0,r.kt)("code",null,"eventName")," is not given this will detach all event handlers attached.",(0,r.kt)("br",null),"If the ",(0,r.kt)("code",null,"handlerToDetach")," is not given, this will detach all event handlers for ",(0,r.kt)("code",null,"eventName"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",null,"An instance of a component itself "))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("p",null,"The name of the event to be detached "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"handlerToDetach"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("p",null,"The handler function of the event to be detached "))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.off("hi",this.hi); //detach event\n  }\n}\n')))}m.isMDXComponent=!0}}]);