"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[167],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=c(n),p=r,m=v["".concat(o,".").concat(p)]||v[p]||d[p]||s;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=v;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},1846:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(2784);const r=function(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},582:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7896),r=n(2784),s=n(9741),i=n(4253);const l=function(){const e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var o=n(9645),c=n(6277);const u="tabItem_ngMb";function d(e){var t,n,s;const{lazy:i,block:d,defaultValue:v,values:p,groupId:m,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.lx)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===v?v:null!=(t=null!=v?v:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(s=f[0])?void 0:s.props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:x}=l(),[N,w]=(0,r.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&h.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==N&&(T(t),w(a),null!=m&&x(m,a))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]||E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]||E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},b)},h.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:R,onFocus:j,onClick:j},s,{className:(0,c.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function v(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},6029:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>v});var a=n(7896),r=(n(2784),n(876)),s=n(9817),i=n(77),l=n(582),o=n(1846);const c={title:"Subscribe to Reactive Properties",id:"subscribe-to-reactive-properties",slug:"/subscribe-to-reactive-properties",custom_edit_url:null},u=void 0,d={unversionedId:"subscribe-to-reactive-properties",id:"version-1.1.0/subscribe-to-reactive-properties",title:"Subscribe to Reactive Properties",description:"You can subscribe by detecting only changes in properties instead of events.",source:"@site/versioned_docs/version-1.1.0/subscribe-to-reactive-properties.mdx",sourceDirName:".",slug:"/subscribe-to-reactive-properties",permalink:"/egjs-conveyer/ko/docs/1.1.0/subscribe-to-reactive-properties",editUrl:null,tags:[],version:"1.1.0",frontMatter:{title:"Subscribe to Reactive Properties",id:"subscribe-to-reactive-properties",slug:"/subscribe-to-reactive-properties",custom_edit_url:null},sidebar:"started",previous:{title:"Listen to Events",permalink:"/egjs-conveyer/ko/docs/1.1.0/listen-to-events"}},v=[],p={toc:v};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can subscribe by detecting only changes in ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/api/Conveyer#properties"},"properties")," instead of events."),(0,r.kt)("p",null,"You can use reactive properties as a hook."),(0,r.kt)(l.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue2"},{label:"Vue@3",value:"vue"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'conveyer.subscribe("isReachStart", value => {\n  console.log(value);\n});\n'))),(0,r.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import * as React from "react";\nimport { useConveyer } from "@egjs/react-conveyer";\n\nexport default () => {\n  const ref = useRef();\n  const { isReachStart, isReachEnd } = useConveyer(ref);\n\n  return <div className="container">\n    <div className="buttons">\n      <button className="prev" disabled={isReachStart}>Prev</button>\n      <button className="next" disabled={isReachEnd}>Next</button>\n    </div>\n    <div className="items" ref={ref}>\n      <div className="item">1</div>\n      <div className="item">2</div>\n      <div className="item">3</div>\n    </div>\n  </div>;\n};\n'))),(0,r.kt)(o.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="container">\n  <button id="prev" :disabled="isReachStart">prev</button>\n  <button id="next" :disabled="isReachEnd">next</button>\n  <div class="items" ref="ref">\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n  </div>\n</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n      const { ref, isReachStart, isReachEnd } = useConveyer();\n      return {\n        ref,\n        scrollIntoView,\n        isReachStart,\n        isReachEnd,\n      };\n    },\n  });\n};\n'))),(0,r.kt)(o.Z,{value:"vue2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="container">\n  <button id="prev" :disabled="isReachStart">prev</button>\n  <button id="next" :disabled="isReachEnd">next</button>\n  <div class="items" ref="ref">\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n  </div>\n</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue2-conveyer";\n\nexport default {\n  setup() {\n      const { ref, isReachStart, isReachEnd } = useConveyer();\n      return {\n        ref,\n        scrollIntoView,\n        isReachStart,\n        isReachEnd,\n      };\n    },\n  });\n};\n'))),(0,r.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("p",null,"There're few ways to interact with child component in Angular.",(0,r.kt)("br",{parentName:"p"}),"\n","See ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with Conveyer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},'<div class="container">\n  <button id="prev" [disabled]="conveyer?.isReachStart">prev</button>\n  <button id="next" [disabled]="conveyer?.isReachEnd">next</button>\n  <div\n    class="items"\n    ngxConveyer\n    #conveyer="ngxConveyer"\n    >\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n    <div class="item"><a href="#4">4</a></div>\n    <div class="item"><a href="#5">5</a></div>\n    <div class="item"><a href="#6">6</a></div>\n    <div class="item"><a href="#7">7</a></div>\n    <div class="item"><a href="#8">8</a></div>\n    <div class="item"><a href="#9">9</a></div>\n    <div class="item"><a href="#10">10</a></div>\n    <div class="item"><a href="#11">11</a></div>\n    <div class="item"><a href="#12">12</a></div>\n  </div>\n</div>\n'))),(0,r.kt)(o.Z,{value:"svelte",mdxType:"TabItem"},(0,r.kt)("p",null,"You need to use $-prefix to read reactiver properties in svelte."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values"},"https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const { ref, isReachStart, isReachEnd } = useConveyer();\n\n<\/script>\n<div class="container">\n  <div class="buttons">\n    <button class="prev" disabled={$isReachStart}>Prev</button>\n    <button class="next" disabled={$isReachEnd}>Next</button>\n  </div>\n  <div class="items" use:ref>\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n  </div>\n</div>\n')))),(0,r.kt)("p",null,"See all available events at ",(0,r.kt)(s.Z,{to:(0,i.Z)("docs/api/Conveyer#events"),mdxType:"Link"},"Conveyer#events"),"."))}m.isMDXComponent=!0}}]);