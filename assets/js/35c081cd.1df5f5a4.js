"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5424],{876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,m=p["".concat(s,".").concat(d)]||p[d]||v[d]||l;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1846:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(2784);const a=function(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},582:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(7896),a=t(2784),l=t(9741),o=t(4253);const i=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=t(9645),c=t(6277);const u="tabItem_ngMb";function v(e){var n,t,l;const{lazy:o,block:v,defaultValue:p,values:d,groupId:m,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:g.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),h=(0,s.lx)(b,((e,n)=>e.value===n.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===p?p:null!=(n=null!=p?p:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(l=g[0])?void 0:l.props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:C}=i(),[N,w]=(0,a.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,s.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&b.some((n=>n.value===e))&&w(e)}const j=e=>{const n=e.currentTarget,t=x.indexOf(n),r=b[t].value;r!==N&&(I(n),w(r),null!=m&&C(m,r))},T=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]||x[x.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":v},f)},b.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>x.push(e),onKeyDown:T,onFocus:j,onClick:j},l,{className:(0,c.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function p(e){const n=(0,l.Z)();return a.createElement(v,(0,r.Z)({key:String(n)},e))}},2879:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>v,toc:()=>p});var r=t(7896),a=(t(2784),t(876)),l=t(9817),o=t(77),i=t(582),s=t(1846);const c={title:"Listen to Events",id:"listen-to-events",slug:"/listen-to-events",custom_edit_url:null},u=void 0,v={unversionedId:"listen-to-events",id:"version-1.4.3/listen-to-events",title:"Listen to Events",description:"Conveyer has scroll related events.",source:"@site/versioned_docs/version-1.4.3/listen-to-events.mdx",sourceDirName:".",slug:"/listen-to-events",permalink:"/egjs-conveyer/docs/listen-to-events",editUrl:null,tags:[],version:"1.4.3",frontMatter:{title:"Listen to Events",id:"listen-to-events",slug:"/listen-to-events",custom_edit_url:null},sidebar:"started",previous:{title:"Use the Methods",permalink:"/egjs-conveyer/docs/use-the-methods"},next:{title:"Subscribe to Reactive Properties",permalink:"/egjs-conveyer/docs/subscribe-to-reactive-properties"}},p=[],d={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Conveyer has scroll related ",(0,a.kt)("a",{parentName:"p",href:"api/Conveyer#events"},"events"),"."),(0,a.kt)("p",null,"You can refer to the documentation and use it according to each framework."),(0,a.kt)(i.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue2"},{label:"Vue@3",value:"vue"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("p",null,"You can listen to Conveyer's events with ",(0,a.kt)("a",{parentName:"p",href:"api/Conveyer#on"},"Conveyer#on")),(0,a.kt)("p",null,"Since events occur during initialization, set ",(0,a.kt)("a",{parentName:"p",href:"api/ConveyerOptions"},"autoInit")," to false if you want to register events."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import Conveyer from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".items", {\n  autoInit: false,\n});\n\nconveyer.on("scrollStart", evt => {\n  console.log(evt);\n});\n\nconveyer.init();\n'))),(0,a.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("p",null,"You can use events of Conveyer by getting a result of ",(0,a.kt)("inlineCode",{parentName:"p"},"useConveyer"),"."),(0,a.kt)("p",null,"All events are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import * as React from "react";\nimport { useConveyer } from "@egjs/react-conveyer";\n\nexport default () => {\n  const ref = useRef();\n  const {\n    scrollIntoView,\n    onBeginScroll,\n  } = useConveyer(ref);\n\n  onBeginScroll(() => {\n    console.log("begin scroll");\n  }, []);\n\n  return <div className="container">\n    <div className="buttons">\n      <button className="prev" onClick={() => {\n        // start to end\n        scrollIntoView("start", {\n          align: "end",\n          duration: 500,\n        });\n      }}>Prev</button>\n      <button className="next" onClick={() => {\n        // end to start\n        scrollIntoView("end", {\n          align: "start",\n          duration: 500,\n        });\n      }}>Next</button>\n    </div>\n    <div className="items" ref={ref}>\n      <div className="item">1</div>\n      <div className="item">2</div>\n      <div className="item">3</div>\n    </div>\n  </div>;\n};\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),(0,a.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,a.kt)("p",null,"You can use events of Conveyer by getting a result of ",(0,a.kt)("inlineCode",{parentName:"p"},"useConveyer"),"."),(0,a.kt)("p",null,"All events are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="items" ref="ref">\n  <button id="prev" @click="prev">prev</button>\n  <button id="next" @click="next">next</button>\n  <div class="items" ref="ref">\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n  </div>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n    const {\n      ref,\n      scrollIntoView,\n      // events\n      onBeginScroll,\n    } = useConveyer({\n      horizontal: false,\n    });\n\n    onBeginScroll(() => {\n      console.log("begin scroll");\n    });\n\n    return {\n      ref,\n      scrollIntoView,\n  };\n  },\n  methods: {\n    prev() {\n      this.scrollIntoView("start", {\n        align: "end",\n        duration: 500,\n      });\n    },\n    next() {\n      this.scrollIntoView("end", {\n        align: "start",\n        duration: 500,\n      });\n    },\n  },\n};\n'))),(0,a.kt)(s.Z,{value:"vue2",mdxType:"TabItem"},(0,a.kt)("p",null,"You can call methods of Conveyer by getting a result of ",(0,a.kt)("inlineCode",{parentName:"p"},"useConveyer"),"."),(0,a.kt)("p",null,"All events are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="items" ref="ref">\n  <button id="prev" @click="prev">prev</button>\n  <button id="next" @click="next">next</button>\n  <div class="items" ref="ref">\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n  </div>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue2-conveyer";\n\nexport default {\n  setup() {\n    const {\n      ref,\n      scrollIntoView,\n      // events\n      onBeginScroll,\n    } = useConveyer({\n      horizontal: false,\n    });\n\n    onBeginScroll(() => {\n      console.log("begin scroll");\n    });\n\n    return {\n      ref,\n      scrollIntoView,\n  };\n  },\n  methods: {\n    prev() {\n      this.scrollIntoView("start", {\n        align: "end",\n        duration: 500,\n      });\n    },\n    next() {\n      this.scrollIntoView("end", {\n        align: "start",\n        duration: 500,\n      });\n    },\n  },\n};\n'))),(0,a.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)("p",null,"There're few ways to interact with child component in Angular.",(0,a.kt)("br",{parentName:"p"}),"\n","See ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with Conveyer."),(0,a.kt)("p",null,"You can listen events of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ngx-conveyer")," using Angular's ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/event-binding"},"event binding"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},'<div class="container">\n  <button id="prev" (click)="prev()">prev</button>\n  <button id="next" (click)="next()">next</button>\n  <div\n    class="items"\n    ngxConveyer\n    (beginScroll)="onBeginScroll"\n    #conveyer="ngxConveyer"\n    >\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n    <div class="item"><a href="#4">4</a></div>\n    <div class="item"><a href="#5">5</a></div>\n    <div class="item"><a href="#6">6</a></div>\n    <div class="item"><a href="#7">7</a></div>\n    <div class="item"><a href="#8">8</a></div>\n    <div class="item"><a href="#9">9</a></div>\n    <div class="item"><a href="#10">10</a></div>\n    <div class="item"><a href="#11">11</a></div>\n    <div class="item"><a href="#12">12</a></div>\n  </div>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.component.ts"',title:'"app.component.ts"'},'import { Component, Input, AfterViewInit } from \'@angular/core\';\n\nimport { NgxConveyerDirective } from \'ngx-conveyer\';\n@Component({\n  selector: \'app-root\',\n  templateUrl: \'./app.component.html\',\n})\nexport class AppComponent implements AfterViewInit {\n  @ViewChild("conveyer") conveyer!: NgxConveyerDirective;\n  onBeginScroll() {\n    console.log("begin scroll");\n  }\n  prev() {\n    this.conveyer.scrollIntoView("start", {\n      align: "end",\n      duration: 500,\n    });\n  }\n  next() {\n    this.conveyer.scrollIntoView("end", {\n      align: "start",\n      duration: 500,\n    });\n  }\n}\n'))),(0,a.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,a.kt)("p",null,"All events are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const {\n    ref,\n    scrollIntoView,\n    // events\n    onBeginScroll,\n  } = useConveyer();\n\n  onBeginScroll(() => {\n    console.log("begin scroll");\n  });\n<\/script>\n<div class="container">\n  <div class="buttons">\n    <button class="prev" on:click={() => {\n      // start to end\n      scrollIntoView("start", {\n        align: "end",\n        duration: 500,\n      });\n    }}>Prev</button>\n    <button class="next" on:click={() => {\n      // end to start\n      scrollIntoView("end", {\n        align: "start",\n        duration: 500,\n      });\n    }}>Next</button>\n  </div>\n  <div class="items" use:ref>\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n  </div>\n</div>\n')))),(0,a.kt)("p",null,"See all available events at ",(0,a.kt)(l.Z,{to:(0,o.Z)("docs/api/Conveyer#events"),mdxType:"Link"},"Conveyer#events"),"."))}m.isMDXComponent=!0}}]);