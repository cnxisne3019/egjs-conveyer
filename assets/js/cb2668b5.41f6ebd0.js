"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67],{3905:function(e,n,a){a.d(n,{Zo:function(){return i},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):u(u({},n),e)),a},i=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?t.createElement(v,u(u({ref:n},i),{},{components:a})):t.createElement(v,u({ref:n},i))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var c=2;c<l;c++)u[c]=a[c];return t.createElement.apply(null,u)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,n,a){var t=a(7294);n.Z=function(e){var n=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},9877:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(7462),r=a(7294),l=a(2389),u=a(9548),o=a(6010),s="tabItem_LplD";function c(e){var n,a,l,c=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,u.lx)(f,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(l=g[0])?void 0:l.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,u.UB)(),h=k.tabGroupChoices,T=k.setTabGroupChoices,N=(0,r.useState)(b),j=N[0],x=N[1],w=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=h[m];null!=I&&I!==j&&f.some((function(e){return e.value===I}))&&x(I)}var E=function(e){var n=e.currentTarget,a=w.indexOf(n),t=f[a].value;t!==j&&(O(n),x(t),null!=m&&T(m,t))},Z=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=w.indexOf(e.currentTarget)+1;a=w[t]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;a=w[r]||w[w.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},f.map((function(e){var n=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return w.push(e)},onKeyDown:Z,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":j===n})}),null!=a?a:n)}))),c?(0,r.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function i(e){var n=(0,l.Z)();return r.createElement(c,(0,t.Z)({key:String(n)},e))}},535:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var t=a(7462),r=a(3366),l=(a(7294),a(3905)),u=a(9877),o=a(8215),s=["components"],c={title:"Installation",id:"installation",slug:"/",custom_edit_url:null},i=void 0,p={unversionedId:"installation",id:"version-1.0.2/installation",title:"Installation",description:"Using the package managers (recommended)",source:"@site/versioned_docs/version-1.0.2/installation.mdx",sourceDirName:".",slug:"/",permalink:"/egjs-conveyer/docs/",editUrl:null,tags:[],version:"1.0.2",frontMatter:{title:"Installation",id:"installation",slug:"/",custom_edit_url:null},sidebar:"started",next:{title:"Quick Start",permalink:"/egjs-conveyer/docs/quick-start"}},d=[{value:"Using the package managers (recommended)",id:"using-the-package-managers-recommended",children:[{value:"npm",id:"npm",children:[],level:3},{value:"yarn",id:"yarn",children:[],level:3}],level:2},{value:"CDN Links",id:"cdn-links",children:[{value:"packaged(with dependencies)",id:"packagedwith-dependencies",children:[],level:3}],level:2}],m={toc:d};function v(e){var n=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"using-the-package-managers-recommended"},"Using the package managers (recommended)"),(0,l.kt)("p",null,"You can easily install @egjs/Conveyer with package managers like ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," or ",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/"},"yarn")),(0,l.kt)("h3",{id:"npm"},"npm"),(0,l.kt)(u.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@3",value:"vue"},{label:"Vue@2",value:"vue2"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/conveyer\n"))),(0,l.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/react-conveyer\n"))),(0,l.kt)(o.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue-conveyer\n"))),(0,l.kt)(o.Z,{value:"vue2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue2-conveyer\n"))),(0,l.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/ngx-conveyer\n"))),(0,l.kt)(o.Z,{value:"svelte",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/svelte-conveyer\n")))),(0,l.kt)("h3",{id:"yarn"},"yarn"),(0,l.kt)(u.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@3",value:"vue"},{label:"Vue@2",value:"vue2"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/conveyer\n"))),(0,l.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/react-conveyer\n"))),(0,l.kt)(o.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue-conveyer\n"))),(0,l.kt)(o.Z,{value:"vue2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue2-conveyer\n"))),(0,l.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/ngx-conveyer\n"))),(0,l.kt)(o.Z,{value:"svelte",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/svelte-conveyer\n")))),(0,l.kt)("h2",{id:"cdn-links"},"CDN Links"),(0,l.kt)("h3",{id:"packagedwith-dependencies"},"packaged(with dependencies)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- github --\x3e\n<script src="https://naver.github.io/egjs-conveyer/release/latest/dist/conveyer.min.js" crossorigin="anonymous"><\/script>\n\x3c!-- unpkg --\x3e\n<script src="https://unpkg.com/conveyer/dist/conveyer.min.js" crossorigin="anonymous"><\/script>\n')))}v.isMDXComponent=!0}}]);