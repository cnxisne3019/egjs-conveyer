"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7918],{132:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var n=a(2784),l=a(6277),s=a(1233),i=a(1077),o=a(9817);const r=function(e){const{navLink:t,next:a}=e;return n.createElement(o.Z,{className:(0,l.Z)("pagination-nav__link"),to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},a?n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))};const c=function(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(r,{navLink:t})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(r,{navLink:a,next:!0})))};var d=a(7614),m=a(5200),u=a(9645);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=v[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(o.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,d.Z)(),{pluginId:i}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,u.J)(i),{latestDocSuggestion:r,latestVersionSuggestion:c}=(0,m.Jo)(i),v=null!=r?r:(g=c).docs.find((e=>e.id===g.mainDocId));var g;return n.createElement("div",{className:(0,l.Z)(t,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:c.label,to:v.path,onClick:()=>o(c.name)})))}function E(e){let{className:t}=e;const a=(0,u.E6)();return a.banner?n.createElement(g,{className:t,versionMetadata:a}):null}function b(e){let{className:t}=e;const a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var f=a(759);function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function k(e){let{lastUpdatedBy:t}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(k,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(7896);const Z="iconEdit_LiF+";const T=function(e){let{className:t,...a}=e;return n.createElement("svg",(0,_.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(Z,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function U(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(T,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const C="tag_GZvk",y="tagRegular_o89a",w="tagWithCount_T9I9";const M=function(e){const{permalink:t,name:a,count:s}=e;return n.createElement(o.Z,{href:t,className:(0,l.Z)(C,{[y]:!s,[w]:s})},a,s&&n.createElement("span",null,s))},A="tags_V6B8",x="tag_l6em";function H(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(A,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:x},n.createElement(M,{name:t,permalink:a}))}))))}const B="lastUpdated_ihkw";function V(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(H,e)))}function S(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(U,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",B)},(a||s)&&n.createElement(L,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function D(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:i,formattedLastUpdatedAt:o,lastUpdatedBy:r,tags:c}=a,d=c.length>0,m=!!(s||i||r);return d||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(V,{tags:c}),m&&n.createElement(S,{editUrl:s,lastUpdatedAt:i,lastUpdatedBy:r,formattedLastUpdatedAt:o})):null}function I(e){let{toc:t,className:a,linkClassName:l,isChild:s}=e;return t.length?n.createElement("ul",{className:s?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(I,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function O(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:o,...r}=e;const c=(0,u.LU)(),d=null!=i?i:c.tableOfContents.minHeadingLevel,m=null!=o?o:c.tableOfContents.maxHeadingLevel,v=(0,u.DA)({toc:t,minHeadingLevel:d,maxHeadingLevel:m}),h=(0,n.useMemo)((()=>{if(l&&s)return{linkClassName:l,linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:m}}),[l,s,d,m]);return(0,u.Si)(h),n.createElement(I,(0,_.Z)({toc:v,className:a,linkClassName:l},r))}const F="tableOfContents_bk8p";const R=function(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,l.Z)(F,"thin-scrollbar",t)},n.createElement(O,(0,_.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},z="tocCollapsible_oVL4",P="tocCollapsibleButton_x6ep",W="tocCollapsibleContent_sdt9",q="tocCollapsibleExpanded_ThEt";function G(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:c}=(0,u.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(z,{[q]:!r},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",P),onClick:c},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:W,collapsed:r},n.createElement(O,{toc:t,minHeadingLevel:s,maxHeadingLevel:o})))}var J=a(2700);const j="docItemContainer_TM23",K="docItemCol_pvyS",Q="tocMobile_H80b";function X(e){const{content:t}=e,{metadata:a,frontMatter:i}=t,{image:o,keywords:r,hide_title:d,hide_table_of_contents:m,toc_min_heading_level:v,toc_max_heading_level:h}=i,{description:p,title:g}=a,N=!d&&void 0===t.contentTitle,k=(0,s.Z)(),L=!m&&t.toc&&t.toc.length>0,_=L&&("desktop"===k||"ssr"===k);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:g,description:p,keywords:r,image:o}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[K]:!m})},n.createElement(E,null),n.createElement("div",{className:j},n.createElement("article",null,n.createElement(b,null),L&&n.createElement(G,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:h,className:(0,l.Z)(u.kM.docs.docTocMobile,Q)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},N&&n.createElement(J.N,null,g),n.createElement(t,null)),n.createElement(D,e)),n.createElement(c,{previous:a.previous,next:a.next}))),_&&n.createElement("div",{className:"col col--3"},n.createElement(R,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:h,className:u.kM.docs.docTocDesktop}))))}},2700:(e,t,a)=>{a.d(t,{N:()=>d,Z:()=>m});var n=a(7896),l=a(2784),s=a(6277),i=a(1077),o=a(9645);const r="anchorWithStickyNavbar_+3TR",c="anchorWithHideOnScrollNavbar_GOm7",d=e=>{let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,e=>{let{id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,o.LU)();return a?l.createElement(t,(0,n.Z)({},d,{className:(0,s.Z)("anchor",{[c]:m,[r]:!m}),id:a}),d.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)});var t}}}]);