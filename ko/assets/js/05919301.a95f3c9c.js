"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3893],{876:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>m});var n=t(2784);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=n.createContext({}),c=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},i=function(e){var a=c(e.components);return n.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return t?n.createElement(v,s(s({ref:a},i),{},{components:t})):n.createElement(v,s({ref:a},i))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=d;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1846:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(2784);const l=function(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:l},a)}},582:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(7896),l=t(2784),r=t(9741),s=t(4253);const o=function(){const e=(0,l.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=t(9645),c=t(6277);const i="tabItem_ngMb";function p(e){var a,t,r;const{lazy:s,block:p,defaultValue:d,values:m,groupId:v,className:g}=e,y=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:y.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),k=(0,u.lx)(b,((e,a)=>e.value===a.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===d?d:null!=(a=null!=d?d:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(r=y[0])?void 0:r.props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:T}=o(),[N,j]=(0,l.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=v){const e=f[v];null!=e&&e!==N&&b.some((a=>a.value===e))&&j(e)}const O=e=>{const a=e.currentTarget,t=x.indexOf(a),n=b[t].value;n!==N&&(w(a),j(n),null!=v&&T(v,n))},E=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},g)},b.map((e=>{let{value:a,label:t,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>x.push(e),onKeyDown:E,onFocus:O,onClick:O},r,{className:(0,c.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":N===a})}),null!=t?t:a)}))),s?(0,l.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},y.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function d(e){const a=(0,r.Z)();return l.createElement(p,(0,n.Z)({key:String(a)},e))}},1478:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=t(7896),l=(t(2784),t(876)),r=t(582),s=t(1846);const o={title:"Installation",id:"installation",slug:"/",custom_edit_url:null},u=void 0,c={unversionedId:"installation",id:"version-1.4.1/installation",title:"Installation",description:"Using the package managers (recommended)",source:"@site/versioned_docs/version-1.4.1/installation.mdx",sourceDirName:".",slug:"/",permalink:"/egjs-conveyer/ko/docs/",editUrl:null,tags:[],version:"1.4.1",frontMatter:{title:"Installation",id:"installation",slug:"/",custom_edit_url:null},sidebar:"started",next:{title:"Quick Start",permalink:"/egjs-conveyer/ko/docs/quick-start"}},i=[{value:"Using the package managers (recommended)",id:"using-the-package-managers-recommended",children:[{value:"npm",id:"npm",children:[],level:3},{value:"yarn",id:"yarn",children:[],level:3}],level:2},{value:"CDN Links",id:"cdn-links",children:[{value:"packaged(with dependencies)",id:"packagedwith-dependencies",children:[],level:3}],level:2}],p={toc:i};function d(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"using-the-package-managers-recommended"},"Using the package managers (recommended)"),(0,l.kt)("p",null,"You can easily install @egjs/Conveyer with package managers like ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," or ",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/"},"yarn")),(0,l.kt)("h3",{id:"npm"},"npm"),(0,l.kt)(r.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@3",value:"vue"},{label:"Vue@2",value:"vue2"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/conveyer\n"))),(0,l.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/react-conveyer\n"))),(0,l.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue-conveyer\n"))),(0,l.kt)(s.Z,{value:"vue2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue2-conveyer\n"))),(0,l.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/ngx-conveyer\n"))),(0,l.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/svelte-conveyer\n")))),(0,l.kt)("h3",{id:"yarn"},"yarn"),(0,l.kt)(r.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@3",value:"vue"},{label:"Vue@2",value:"vue2"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/conveyer\n"))),(0,l.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/react-conveyer\n"))),(0,l.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue-conveyer\n"))),(0,l.kt)(s.Z,{value:"vue2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue2-conveyer\n"))),(0,l.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/ngx-conveyer\n"))),(0,l.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/svelte-conveyer\n")))),(0,l.kt)("h2",{id:"cdn-links"},"CDN Links"),(0,l.kt)("h3",{id:"packagedwith-dependencies"},"packaged(with dependencies)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- github --\x3e\n<script src="https://naver.github.io/egjs-conveyer/release/latest/dist/conveyer.min.js" crossorigin="anonymous"><\/script>\n\x3c!-- unpkg --\x3e\n<script src="https://unpkg.com/conveyer/dist/conveyer.min.js" crossorigin="anonymous"><\/script>\n')))}d.isMDXComponent=!0}}]);