"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514,2489],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||l;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7065:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var a=n(2784),r=n(876),l=n(7647),o=n(9297),c=n(6277),i=n(9645),s=n(1233),d=n(3578),m=n(7896);const u=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};var p=n(1077),b=n(9817),h=n(1344),f=n(2410);const E="menuLinkText_NDe2",g="hasHref_krNk";var v=n(9741);const y=(0,a.memo)((e=>{let{items:t,...n}=e;return a.createElement(a.Fragment,null,t.map(((e,t)=>a.createElement(k,(0,m.Z)({key:t,item:e},n)))))}));function k(e){let{item:t,...n}=e;return"category"===t.type?0===t.items.length?null:a.createElement(Z,(0,m.Z)({item:t},n)):a.createElement(_,(0,m.Z)({item:t},n))}function Z(e){let{item:t,onItemClick:n,activePath:r,level:l,...o}=e;const{items:s,label:d,collapsible:u,className:h,href:f}=t,k=function(e){const t=(0,v.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),Z=(0,i._F)(t,r),{collapsed:_,setCollapsed:N,toggleCollapsed:T}=(0,i.uR)({initialState:()=>!!u&&(!Z&&t.collapsed)});return function(e){let{isActive:t,collapsed:n,setCollapsed:r}=e;const l=(0,i.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:Z,collapsed:_,setCollapsed:N}),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":_},h)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(b.Z,(0,m.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":u&&!f,"menu__link--active":Z,[E]:!u,[g]:!!k}),onClick:u?e=>{null==n||n(t),f?N(!1):(e.preventDefault(),T())}:()=>{null==n||n(t)},href:u?null!=k?k:"#":k},o),d),f&&u&&a.createElement("button",{"aria-label":(0,p.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:d}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),T()}})),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(y,{items:s,tabIndex:_?-1:0,onItemClick:n,activePath:r,level:l+1})))}function _(e){let{item:t,onItemClick:n,activePath:r,level:l,...o}=e;const{href:s,label:d,className:u}=t,p=(0,i._F)(t,r);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",u),key:d},a.createElement(b.Z,(0,m.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:n?()=>n(t):void 0},o),(0,h.Z)(s)?d:a.createElement("span",null,d,a.createElement(f.Z,null))))}const N="sidebar_AypA",T="sidebarWithHideableNavbar_prCM",C="sidebarHidden_Yff9",S="sidebarLogo_2Z43",I="menu_y54V",O="menuWithAnnouncementBar_U-Wh",w="collapseSidebarButton_2giT",M="collapseSidebarButtonIcon_ps+2";function P(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",w),onClick:t},a.createElement(u,{className:M}))}function x(e){let{path:t,sidebar:n,onCollapse:r,isHidden:l}=e;const o=function(){const{isActive:e}=(0,i.nT)(),[t,n]=(0,a.useState)(e);return(0,i.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}(),{navbar:{hideOnScroll:s},hideableSidebar:m}=(0,i.LU)();return a.createElement("div",{className:(0,c.Z)(N,{[T]:s,[C]:l})},s&&a.createElement(d.Z,{tabIndex:-1,className:S}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",I,{[O]:o})},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:n,activePath:t,level:1}))),m&&a.createElement(P,{onClick:r}))}const A=e=>{let{toggleSidebar:t,sidebar:n,path:r}=e;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:n,activePath:r,onItemClick:e=>{"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function F(e){return a.createElement(i.Cv,{component:A,props:e})}const L=a.memo(x),D=a.memo(F);function j(e){const t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(L,e),r&&a.createElement(D,e))}var B=n(5195),R=n(6347),H=n(2700);const W="details_U733";function V(e){let{...t}=e;return a.createElement(i.PO,(0,m.Z)({},t,{className:(0,c.Z)("alert alert--info",W,t.className)}))}const U={head:e=>{const t=a.Children.map(e.children,(e=>function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e)));return a.createElement(B.Z,e,t)},code:e=>{const{children:t}=e;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(R.Z,e):a.createElement("code",e)},a:e=>a.createElement(b.Z,e),pre:e=>{var t;const{children:n}=e;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(R.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:{...e})},details:e=>{const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(V,(0,m.Z)({},e,{summary:n}),r)},h1:(0,H.Z)("h1"),h2:(0,H.Z)("h2"),h3:(0,H.Z)("h3"),h4:(0,H.Z)("h4"),h5:(0,H.Z)("h5"),h6:(0,H.Z)("h6")};var q=n(2489);const Y="backToTopButton_TxAF",z="backToTopButtonShow_0UMP";function X(){const e=(0,a.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const n=document.documentElement.scrollTop;n>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*n)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>null==e.current?void 0:e.current()}}const G=function(){const[e,t]=(0,a.useState)(!1),n=(0,a.useRef)(!1),{smoothScrollTop:r,cancelScrollToTop:l}=X();return(0,i.RF)(((e,a)=>{let{scrollY:r}=e;const o=null==a?void 0:a.scrollY;if(!o)return;if(n.current)return void(n.current=!1);const c=r<o;if(c||l(),r<300)t(!1);else if(c){const e=document.documentElement.scrollHeight;r+window.innerHeight<e&&t(!0)}else t(!1)})),(0,i.SL)((e=>{e.location.hash&&(n.current=!0,t(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,Y,{[z]:e}),type:"button",onClick:()=>r()})};var J=n(3181);const K={docPage:"docPage_wTKs",docMainContainer:"docMainContainer_Xp3-",docSidebarContainer:"docSidebarContainer_dA-J",docMainContainerEnhanced:"docMainContainerEnhanced_m3x4",docSidebarContainerHidden:"docSidebarContainerHidden_XOjB",collapsedDocSidebar:"collapsedDocSidebar_Y5+V",expandSidebarButtonIcon:"expandSidebarButtonIcon_qrGM",docItemWrapperEnhanced:"docItemWrapperEnhanced_BqSJ"};function Q(e){let{currentDocRoute:t,versionMetadata:n,children:l,sidebarName:s}=e;const d=(0,i.Vq)(),{pluginId:m,version:b}=n,[h,f]=(0,a.useState)(!1),[E,g]=(0,a.useState)(!1),v=(0,a.useCallback)((()=>{E&&g(!1),f((e=>!e))}),[E]);return a.createElement(o.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:b,tag:(0,i.os)(m,b)}},a.createElement("div",{className:K.docPage},a.createElement(G,null),d&&a.createElement("aside",{className:(0,c.Z)(K.docSidebarContainer,{[K.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(K.docSidebarContainer)&&h&&g(!0)}},a.createElement(j,{key:s,sidebar:d,path:t.path,onCollapse:v,isHidden:E}),E&&a.createElement("div",{className:K.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:v,onClick:v},a.createElement(u,{className:K.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(K.docMainContainer,{[K.docMainContainerEnhanced]:h||!d})},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",K.docItemWrapper,{[K.docItemWrapperEnhanced]:h})},a.createElement(r.Zo,{components:U},l)))))}const $=function(e){const{route:{routes:t},versionMetadata:n,location:r}=e,o=t.find((e=>(0,J.LX)(r.pathname,e)));if(!o)return a.createElement(q.default,null);const c=o.sidebar,s=c?n.docsSidebars[c]:null;return a.createElement(a.Fragment,null,a.createElement(B.Z,null,a.createElement("html",{className:n.className})),a.createElement(i.qu,{version:n},a.createElement(i.bT,{sidebar:s},a.createElement(Q,{currentDocRoute:o,versionMetadata:n,sidebarName:c},(0,l.Z)(t,{versionMetadata:n})))))}},2700:(e,t,n)=>{n.d(t,{N:()=>d,Z:()=>m});var a=n(7896),r=n(2784),l=n(6277),o=n(1077),c=n(9645);const i="anchorWithStickyNavbar_+3TR",s="anchorWithHideOnScrollNavbar_GOm7",d=e=>{let{...t}=e;return r.createElement("header",null,r.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,e=>{let{id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,c.LU)();return n?r.createElement(t,(0,a.Z)({},d,{className:(0,l.Z)("anchor",{[s]:m,[i]:!m}),id:n}),d.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,d)});var t}},2489:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(2784),r=n(9297),l=n(1077);const o=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);