"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1522],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),v=a,d=m["".concat(s,".").concat(v)]||m[v]||p[v]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),o=n(2389),l=n(9548),i=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,m=e.values,v=e.groupId,d=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),h=k.tabGroupChoices,N=k.setTabGroupChoices,j=(0,a.useState)(b),C=j[0],x=j[1],T=[],w=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var O=h[v];null!=O&&O!==C&&g.some((function(e){return e.value===O}))&&x(O)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),r=g[n].value;r!==C&&(w(t),x(r),null!=v&&N(v,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},d)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:S,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},4627:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(9877),i=n(8215),s=["components"],u={title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null},c=void 0,p={unversionedId:"quick-start",id:"version-1.0.2/quick-start",title:"Quick Start",description:"Native Scroll is the most basic and best scrolling function that a browser can support.",source:"@site/versioned_docs/version-1.0.2/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/egjs-conveyer/ko/docs/quick-start",editUrl:null,tags:[],version:"1.0.2",frontMatter:{title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null},sidebar:"started",previous:{title:"Installation",permalink:"/egjs-conveyer/ko/docs/"},next:{title:"Use the Methods",permalink:"/egjs-conveyer/ko/docs/use-the-methods"}},m=[],v={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Native Scroll is the most basic and best scrolling function that a browser can support.",(0,o.kt)("br",{parentName:"p"}),"\n","Conveyer adds Drag gestures to your Native Scroll."),(0,o.kt)(l.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@3",value:"vue"},{label:"Vue@2",value:"vue2"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the script/CSS to the page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- https://naver.github.io/egjs-conveyer/release/latest/dist/conveyer.min.js --\x3e\n<script src="https://unpkg.com/conveyer/dist/conveyer.min.js" crossorigin="anonymous"><\/script>\n')),(0,o.kt)("p",null,"Or, you can rather import them if you're using a bundler like ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," or ",(0,o.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"rollup"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import Conveyer from "@egjs/conveyer";\n')),(0,o.kt)("p",null,"Then, add some basic HTML layout of Conveyer to your page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="items">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')),(0,o.kt)("p",null,"Then initialize Conveyer instance with JavaScript after."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import Conveyer from "@egjs/react-conveyer";\n\nconst ig = new Conveyer(".items");\n'))),(0,o.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("p",null,"You can import & use Conveyer as a React Component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeComponent.jsx"',title:'"SomeComponent.jsx"'},'import * as React from "@egjs/react";\nimport { useConveyer } from "@egjs/@egjs/react-conveyer";\n\nexport default () => {\n  const ref = useRef();\n  useConveyer(ref);\n\n  return <div className="items" ref={ref}>\n    <div className="item">1</div>\n    <div className="item">2</div>\n    <div className="item">3</div>\n  </div>;\n}\n'))),(0,o.kt)(i.Z,{value:"vue",mdxType:"TabItem"},"You can import & use Conveyer as a Vue Component.",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="items" ref="ref">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n    const { ref } = useConveyer();\n\n    return {\n      ref,\n    };\n  },\n};\n'))),(0,o.kt)(i.Z,{value:"vue2",mdxType:"TabItem"},(0,o.kt)("b",null,"@vue/composition-api")," is required to use vue2-conveyer.",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import Vue from "vue";\nimport VueCompositionAPI from "@vue/composition-api";\n\nVue.use(VueCompositionAPI);\n')),(0,o.kt)("p",null,"You can import & use Conveyer as a Vue Component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="items" ref="ref">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue2-conveyer";\n\nexport default {\n  setup() {\n    const { ref } = useConveyer();\n\n    return {\n      ref,\n    };\n  },\n};\n'))),(0,o.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("p",null,"You can add ",(0,o.kt)("inlineCode",{parentName:"p"},"NgxConveyerModule")," at ",(0,o.kt)("inlineCode",{parentName:"p"},"imports")," of your app module to use Conveyer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.module.ts"',title:'"app.module.ts"'},"import { NgxConveyerModule } from '@egjs/ngx-conveyer';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    NgxConveyerModule /* Add in imports */\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { } /* Your app */\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},'<div class="items" NgxConveyer #conveyer="ngxConveyer">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n'))),(0,o.kt)(i.Z,{value:"svelte",mdxType:"TabItem"},(0,o.kt)("p",null,"You can import ",(0,o.kt)("inlineCode",{parentName:"p"},"Conveyer"),' from the "svelte-conveyer" package.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.svelte"',title:'"App.svelte"'},'<script lang="ts">\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const { ref } = useConveyer();\n<\/script>\n<div class="items" use:ref>\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')))))}d.isMDXComponent=!0}}]);