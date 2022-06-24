(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6185],{9729:function(e,n,t){var i={"./HorizontalScroll/angularComponent.txt":2438,"./InfiniteScroll/angularComponent.txt":5740,"./Methods/angularComponent.txt":6338,"./ReactiveProperties/angularComponent.txt":8698,"./SideWheel/angularComponent.txt":5318,"./VerticalScroll/angularComponent.txt":5388};function s(e){var n=a(e);return t(n)}function a(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=a,e.exports=s,s.id=9729},4227:function(e,n,t){var i={"./HorizontalScroll/angularHTML.txt":8557,"./InfiniteScroll/angularHTML.txt":7649,"./Methods/angularHTML.txt":2502,"./ReactiveProperties/angularHTML.txt":9398,"./SideWheel/angularHTML.txt":2139,"./VerticalScroll/angularHTML.txt":6240};function s(e){var n=a(e);return t(n)}function a(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=a,e.exports=s,s.id=4227},9877:function(e,n,t){var i={"./HorizontalScroll/html.txt":7274,"./InfiniteScroll/html.txt":8822,"./Methods/html.txt":8352,"./ReactiveProperties/html.txt":427,"./SideWheel/html.txt":6147,"./VerticalScroll/html.txt":7075};function s(e){var n=a(e);return t(n)}function a(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=a,e.exports=s,s.id=9877},9563:function(e,n,t){var i={"./HorizontalScroll/js.txt":3411,"./InfiniteScroll/js.txt":4447,"./Methods/js.txt":8183,"./ReactiveProperties/js.txt":786,"./SideWheel/js.txt":5324,"./VerticalScroll/js.txt":7914};function s(e){var n=a(e);return t(n)}function a(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=a,e.exports=s,s.id=9563},976:function(e,n,t){var i={"./HorizontalScroll/svelte.txt":1700,"./InfiniteScroll/svelte.txt":6642,"./Methods/svelte.txt":8547,"./ReactiveProperties/svelte.txt":3146,"./SideWheel/svelte.txt":3873,"./VerticalScroll/svelte.txt":6543};function s(e){var n=a(e);return t(n)}function a(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=a,e.exports=s,s.id=976},9068:function(e,n,t){var i={"./HorizontalScroll/vue.txt":6441,"./InfiniteScroll/vue.txt":8584,"./Methods/vue.txt":6424,"./ReactiveProperties/vue.txt":8014,"./SideWheel/vue.txt":215,"./VerticalScroll/vue.txt":3e3};function s(e){var n=a(e);return t(n)}function a(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=a,e.exports=s,s.id=9068},8887:function(e,n,t){"use strict";var i=t(7294),s=t(6396),a=t(8215),r=t(7743);n.C=function(e){var n=t(9877)("./"+e.folder+"/html.txt").default,l=t(9563)("./"+e.folder+"/js.txt").default,d=e.reactCode,c=t(9068)("./"+e.folder+"/vue.txt").default,o=c.replace("vue-conveyer","vue2-conveyer").replace("vue3-infinitegrid","vue-infinitegrid"),v=t(4227)("./"+e.folder+"/angularHTML.txt").default,m=t(9729)("./"+e.folder+"/angularComponent.txt").default,u=t(976)("./"+e.folder+"/svelte.txt").default;return i.createElement(s.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue2"},{label:"Vue@3",value:"vue"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}]},i.createElement(a.Z,{value:"js"},i.createElement(r.Z,{className:"language-html"},n),i.createElement(r.Z,{className:"language-js"},l)),i.createElement(a.Z,{value:"react"},i.createElement(r.Z,{className:"language-jsx"},d)),i.createElement(a.Z,{value:"vue2"},i.createElement(r.Z,{className:"language-html"},o)),i.createElement(a.Z,{value:"vue"},i.createElement(r.Z,{className:"language-html"},c)),i.createElement(a.Z,{value:"angular"},i.createElement(r.Z,{className:"language-html"},v),m&&i.createElement(r.Z,{className:"language-ts"},m)),i.createElement(a.Z,{value:"svelte"},i.createElement(r.Z,{className:"language-html"},u)))}},3784:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var i=t(7294),s=t(4381);function a(){var e=i.useRef(),n=(0,s.H)(e,{horizontal:!0}).scrollIntoView;return i.createElement("div",{className:"examples"},i.createElement("div",{className:"buttons"},i.createElement("button",{className:"prev",onClick:function(){n("start",{align:"end",duration:500,excludeStand:!0})}},"Prev"),i.createElement("button",{className:"next",onClick:function(){n("end",{align:"start",duration:500,excludeStand:!0})}},"Next")),i.createElement("div",{className:"items horizontal",ref:e},i.createElement("div",{className:"item"},"1"),i.createElement("div",{className:"item"},"2"),i.createElement("div",{className:"item"},"3"),i.createElement("div",{className:"item"},"4"),i.createElement("div",{className:"item"},"5"),i.createElement("div",{className:"item"},"6"),i.createElement("div",{className:"item"},"7"),i.createElement("div",{className:"item"},"8"),i.createElement("div",{className:"item"},"9"),i.createElement("div",{className:"item"},"10")))}},1675:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(7294),s=t(4381);function a(e,n,t,i,s){i?(e[parseFloat(i.innerHTML)-1].classList.add(s),t.style.transform="translateX("+(i.getBoundingClientRect().left-n.getBoundingClientRect().left)+"px)",t.style.display="block"):t.style.display="none"}function r(){var e=i.useRef(),n=i.useRef(),t=(0,s.H)(e,{horizontal:!0}),r=t.findElement,l=t.scrollIntoView,d=i.useCallback((function(){requestAnimationFrame((function(){var t=n.current,i=document.querySelector(".mark.prev"),s=document.querySelector(".mark.start"),l=document.querySelector(".mark.end"),d=document.querySelector(".mark.next"),c=document.querySelectorAll(".item"),o=document.querySelectorAll(".background-items .item");o.forEach((function(n){n.style.transform="translateX("+-e.current.scrollLeft+"px)"})),c.forEach((function(e){e.classList.remove("prev","start","end","next")}));var v=r("prev"),m=r("start"),u=r("end"),p=r("next");null==v||v.classList.add("prev"),null==m||m.classList.add("start"),null==u||u.classList.add("end"),null==p||p.classList.add("next"),a(o,t,i,v,"prev"),a(o,t,s,m,"start"),a(o,t,l,u,"end"),a(o,t,d,p,"next")}))}),[]);return i.useEffect((function(){d(),l("next",{align:"center",duration:500})}),[]),i.createElement("div",{className:"scroll-into-view-target",ref:n},i.createElement("p",{className:"top"},"target"),i.createElement("div",{className:"background-items"},i.createElement("div",{className:"item"},"1"),i.createElement("div",{className:"item"},"2"),i.createElement("div",{className:"item"},"3"),i.createElement("div",{className:"item"},"4"),i.createElement("div",{className:"item"},"5"),i.createElement("div",{className:"item"},"6"),i.createElement("div",{className:"item"},"7"),i.createElement("div",{className:"item"},"8"),i.createElement("div",{className:"item"},"9"),i.createElement("div",{className:"item"},"10")),i.createElement("div",{className:"items",ref:e,onScroll:d},i.createElement("div",{className:"item"},"1"),i.createElement("div",{className:"item"},"2"),i.createElement("div",{className:"item"},"3"),i.createElement("div",{className:"item"},"4"),i.createElement("div",{className:"item"},"5"),i.createElement("div",{className:"item"},"6"),i.createElement("div",{className:"item"},"7"),i.createElement("div",{className:"item"},"8"),i.createElement("div",{className:"item"},"9"),i.createElement("div",{className:"item"},"10")),i.createElement("div",{className:"mark prev"}),i.createElement("div",{className:"mark next"}),i.createElement("div",{className:"mark start"}),i.createElement("div",{className:"mark end"}),i.createElement("p",{className:"bottom"},"align"))}},1398:function(e,n,t){"use strict";t.r(n),t.d(n,{contentTitle:function(){return v},default:function(){return f},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var i=t(7462),s=t(3366),a=(t(7294),t(3905)),r=t(3784),l=t(1675),d=t(8887),c=["components"],o={title:"Use Methods",custom_edit_url:null},v=void 0,m={unversionedId:"examples/Methods",id:"version-1.2.0/examples/Methods",title:"Use Methods",description:"You can use the conveyer's methods via instance or result.",source:"@site/versioned_docs/version-1.2.0/examples/Methods.mdx",sourceDirName:"examples",slug:"/examples/Methods",permalink:"/egjs-conveyer/ko/docs/1.2.0/examples/Methods",editUrl:null,tags:[],version:"1.2.0",frontMatter:{title:"Use Methods",custom_edit_url:null},sidebar:"examples",previous:{title:"Use Reactive properties",permalink:"/egjs-conveyer/ko/docs/1.2.0/examples/Properties"},next:{title:"Infinite Scroll",permalink:"/egjs-conveyer/ko/docs/1.2.0/examples/InfiniteScroll"}},u=[{value:"scrollIntoView",id:"scrollintoview",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],p={toc:u};function f(e){var n=e.components,o=(0,s.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the conveyer's methods via instance or result."),(0,a.kt)("p",null,"You can also use scroll-related functions through methods."),(0,a.kt)("h3",{id:"scrollintoview"},"scrollIntoView"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Conveyer#scrollIntoView"},"scrollIntoView")," method scrolls an element or an item in that direction into the view."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"target"),(0,a.kt)("td",{parentName:"tr",align:"center"},"HTMLElement ","|",' "start" ',"|",' "end" ',"|",' "prev" ',"|",' "next"'),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("p",null,"direction of the element. ",'"',"start",'"'," and ",'"',"end",'"'," find inside. ",'"',"prev",'"'," and ",'"',"next",'"'," find outside. "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"options"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"/docs/api/ScrollIntoViewOptions"},"ScrollIntoViewOptions")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("p",null,"Options for the ",(0,a.kt)("code",null,"scrollIntoView")," method. "))))),(0,a.kt)(l.Z,{mdxType:"ScrollIntoViewTarget"}),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you click the ",(0,a.kt)("inlineCode",{parentName:"li"},"prev")," button, you can align the items in the ",(0,a.kt)("inlineCode",{parentName:"li"},"start"),"(target) direction to ",(0,a.kt)("inlineCode",{parentName:"li"},"end"),"(align)."),(0,a.kt)("li",{parentName:"ul"},"If you click the ",(0,a.kt)("inlineCode",{parentName:"li"},"next")," button, you can align the items in the ",(0,a.kt)("inlineCode",{parentName:"li"},"end"),"(target) direction to ",(0,a.kt)("inlineCode",{parentName:"li"},"start"),"(align).")),(0,a.kt)(r.Z,{mdxType:"Methods"}),(0,a.kt)(d.C,{folder:"Methods",reactCode:t(5845).Z,mdxType:"ConveyerCodeTabs"}))}f.isMDXComponent=!0},2438:function(e,n,t){"use strict";t.r(n),n.default=""},8557:function(e,n,t){"use strict";t.r(n),n.default='<div class="examples">\n  <div class="items horizontal" ngxConveyer>\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},7274:function(e,n,t){"use strict";t.r(n),n.default='<div class="examples">\n  <div class="items horizontal">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},3411:function(e,n,t){"use strict";t.r(n),n.default='import Conveyer from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".items");\n'},1700:function(e,n,t){"use strict";t.r(n),n.default='<script>\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const {\n    ref,\n  } = useConveyer();\n<\/script>\n<div class="examples">\n  <div class="items horizontal" use:ref>\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},6441:function(e,n,t){"use strict";t.r(n),n.default='<template>\n<div class="examples">\n  <div class="items horizontal" ref="ref">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n</template>\n<script lang="ts">\nimport { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n    const { ref } = useConveyer();\n\n    return {\n      ref,\n    };\n  },\n};\n<\/script>\n'},5740:function(e,n,t){"use strict";t.r(n),n.default="import { Component, ViewChild } from '@angular/core';\nimport { NgxInfiniteGridComponent } from '@egjs/ngx-infinitegrid';\nimport { OnRequestAppend, OnRenderComplete } from '@egjs/infinitegrid';\nimport { NgxConveyerDirective } from '@egjs/ngx-conveyer';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: [\n    \"./app.component.css\",\n  ],\n})\nexport class AppComponent {\n  @ViewChild('ig', { static: false }) ig!: NgxInfiniteGridComponent;\n  @ViewChild('conveyer', { static: false }) conveyer!: NgxConveyerDirective;\n  items = this.getItems(0, 10);\n  getItems(nextGroupKey: number, count: number) {\n    const nextItems = [];\n    const nextKey = nextGroupKey * count;\n\n    for (let i = i; i < count; ++i) {\n      nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });\n    }\n    return nextItems;\n  }\n  groupBy(_: any, item: any) {\n    return item.groupKey;\n  }\n  trackBy(_: any, item: any) {\n    return item.key;\n  }\n  onRequestAppend(e: OnRequestAppend) {\n    const nextGroupKey = (+e.groupKey! || 0) + 1;\n\n    this.items = [\n      ...this.items,\n      ...this.getItems(nextGroupKey, 10),\n    ];\n  }\n  onRenderComplete(e: OnRenderComplete) {\n    this.conveyer.setItems(e.currentTarget.getItems().map((item) => ({\n      element: item.element,\n      pos: item.computedContentPos,\n      size: item.contentSize,\n    })));\n    this.conveyer.updateContainer();\n  }\n  prev() {\n    this.conveyer.scrollIntoView(\"start\", {\n      align: \"end\",\n      duration: 500,\n      excludeStand: true,\n    });\n  }\n  next() {\n    this.conveyer.scrollIntoView(\"end\", {\n      align: \"start\",\n      duration: 500,\n      excludeStand: true,\n    });\n  }\n}\n"},7649:function(e,n,t){"use strict";t.r(n),n.default='<div class="examples">\n  <div class="buttons">\n    <button class="prev" [disabled]="conveyer?.isReachStart" (click)="prev()">\n      prev\n    </button>\n    <button class="next" [disabled]="conveyer?.isReachEnd" (click)="next()">\n      next\n    </button>\n  </div>\n  <div\n    NgxMasonryInfiniteGrid\n    class="items"\n    [gap]="5"\n    [align]="\'justify\'"\n    [items]="items"\n    [trackBy]="trackBy"\n    [groupBy]="groupBy"\n    (requestAppend)="onRequestAppend($event)"\n    (renderComplete)="onRenderComplete($event)"\n    [horizontal]="false"\n    [container]="true"\n    [ngxConveyer]="{ horizontal: false }"\n    #conveyer="ngxConveyer"\n    #ig\n  >\n    <div class="item" *ngFor="let item of ig.visibleItems; trackBy: trackBy;">\n      {{item.key}}\n    </div>\n  </div>\n</div>\n'},8822:function(e,n,t){"use strict";t.r(n),n.default='<div class="examples">\n  <div class="buttons">\n    <button class="prev">prev</button>\n    <button class="next">next</button>\n  </div>\n  <div class="items"></div>\n</div>\n'},4447:function(e,n,t){"use strict";t.r(n),n.default='import { MasonryInfiniteGrid } from "@egjs/infinitegrid";\nimport Conveyer from "@egjs/conveyer";\n\nconst grid = new MasonryInfiniteGrid(".items", {\n  container: true,\n  gap: 5,\n  autoInit: false,\n});\n\ngrid.on("renderComplete", () => {\n  // conveyer.updateItems();\n  conveyer.setItems(grid.getItems().map((item) => ({\n    element: item.element,\n    pos: item.cssContentPos || item.contentPos,\n    size: item.contentSize,\n  })));\n  conveyer.updateContainer();\n});\nlet i = 0;\ngrid.on("requestAppend", () => {\n  ++i;\n  grid.append(`<div class="item">${i}</div>`)\n});\n\nconst conveyer = new Conveyer(".items", {\n  preventClickOnDrag: true,\n  horizontal: false,\n  itemSelector: ".item",\n});\n\nconst prev = document.querySelector(".prev");\nconst next = document.querySelector(".next");\n\n// subscribe reactive properties\nconveyer.subscribe("isReachStart", (isReachStart) => {\n  prev.disabled = isReachStart;\n});\n\nconveyer.subscribe("isReachEnd", (isReachEnd) => {\n  next.disabled = isReachEnd;\n});\n\n// scrollIntoView\nprev.addEventListener("click", () => {\n  // start to end\n  conveyer.scrollIntoView("start", {\n    align: "end",\n    duration: 500,\n    excludeStand: true,\n  });\n});\nnext.addEventListener("click", () => {\n  // end to start\n  conveyer.scrollIntoView("end", {\n    align: "start",\n    duration: 500,\n    excludeStand: true,\n  });\n});\n\ngrid.renderItems();\nconveyer.init();\n'},6642:function(e,n,t){"use strict";t.r(n),n.default='<script>\n  import { MasonryInfiniteGrid } from "@egjs/svelte-infinitegrid";\n  import { useConveyer } from "@egjs/svelte-conveyer";\n  import { onMount } from "svelte";\n\n  let ig;\n  let items = getItems(0, 10);\n\n  function getItems(nextGroupKey, count) {\n    const nextItems = [];\n\n    for (let i = i; i < count; ++i) {\n      const nextKey = nextGroupKey * count + i;\n\n      nextItems.push({ groupKey: nextGroupKey, key: nextKey });\n    }\n    return nextItems;\n  }\n  const {\n    isReachStart,\n    isReachEnd,\n    setItems,\n    updateContainer,\n    scrollIntoView,\n    ref,\n    init,\n  } = useConveyer({\n    horizontal: false,\n    autoInit: false,\n  });\n  onMount(() => {\n    ref.current = ig.getScrollContainerElement();\n    init();\n  })\n<\/script>\n<div class="examples">\n  <div className="buttons">\n    <button className="prev" disabled={$isReachStart} on:click={() => {\n      // start to end\n      scrollIntoView("start", {\n        align: "end",\n        duration: 500,\n        excludeStand: true,\n      });\n    }}>Prev</button>\n    <button className="next" disabled={$isReachEnd} on:click={() => {\n      // end to start\n      scrollIntoView("end", {\n        align: "start",\n        duration: 500,\n        excludeStand: true,\n      });\n    }}>Next</button>\n  </div>\n  <MasonryInfiniteGrid\n    class="items"\n    gap={5}\n    {items}\n    on:requestAppend={({ detail: e }) => {\n      const nextGroupKey = (+e.groupKey || 0) + 1;\n\n      items = [...items, ...getItems(nextGroupKey, 10)];\n    }}\n    on:renderComplete={({ detail: e }) => {\n      setItems(e.currentTarget.getItems().map((item) => ({\n        element: item.element,\n        pos: item.computedContentPos,\n        size: item.contentSize,\n      })));\n      updateContainer();\n    }}\n    bind:this={ig}\n    let:visibleItems\n  >\n    {#each visibleItems as item (item.key)}\n      <div class="item">${item.key}</div>\n    {/each}\n  </MasonryInfiniteGrid>\n</div>\n'},8584:function(e,n,t){"use strict";t.r(n),n.default='<template>\n<div class="examples">\n  <div class="buttons">\n    <button class="prev" :disabled="isReachStart" @click="prev">prev</button>\n    <button class="next" :disabled="isReachEnd" @click="next">next</button>\n  </div>\n  <masonry-infinite-grid\n    class="items"\n    v-bind:gap="5"\n    ref="ig"\n    v-on:request-append="onRequestAppend"\n  >\n    <div\n      class="item"\n      v-for="item in items"\n      :key="item.key"\n      :data-grid-groupkey="item.groupKey"\n    >{item.key}</div>\n  </masonry-infinite-grid>\n</div>\n</template>\n<script lang="ts">\nimport { MasonryInfiniteGrid } from "@egjs/vue3-infinitegrid";\nimport { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  components: {\n    MasonryInfiniteGrid,\n  },\n  setup() {\n    const { ref, scrollIntoView, isReachStart, isReachEnd, updateContainersetItems, init } = useConveyer({\n      horizontal: false,\n    });\n\n    return {\n      ref,\n      scrollIntoView,\n      isReachStart,\n      isReachEnd,\n      updateContainer,\n      setItems,\n      init,\n    };\n  },\n  data() {\n    return {\n      items: this.getItems(0, 10),\n    };\n  },\n  mounted() {\n    this.ref.value = this.ig.getScrollContainerElement();\n    this.init();\n  }\n  methods: {\n    getItems(nextGroupKey: nextGroupKey, count: number) {\n      const nextItems: any[] = [];\n\n      for (let i = 0; i < count; ++i) {\n        const nextKey = nextGroupKey * count + i;\n\n        nextItems.push({ groupKey: groupKey, key: nextKey });\n      }\n      return nextItems;\n    },\n    onRequestAppend(e) {\n      const nextGroupKey = (+e.groupKey! || 0) + 1;\n\n      this.items = [...this.items, ...this.getItems(nextGroupKey, 10)];\n    },\n    onRenderComplete(e) {\n      this.setItems(e.currentTarget.getItems().map((item) => ({\n        element: item.element,\n        pos: item.computedContentPos,\n        size: item.contentSize,\n      })));\n      this.updateContainer();\n    },\n    prev() {\n      this.scrollIntoView("start", {\n        align: "end",\n        duration: 500,\n        excludeStand: true,\n      });\n    },\n    next() {\n      this.scrollIntoView("end", {\n        align: "start",\n        duration: 500,\n        excludeStand: true,\n      });\n    },\n  },\n};\n<\/script>\n'},6338:function(e,n,t){"use strict";t.r(n),n.default="import { Component, Input } from '@angular/core';\nimport { NgxConveyerDirective } from 'ngx-conveyer';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: [\n    \"./app.component.css\",\n  ],\n})\nexport class AppComponent {\n  @ViewChild('conveyer', { static: false }) conveyer!: NgxConveyerDirective;\n  prev() {\n    this.conveyer.scrollIntoView(\"start\", {\n      align: \"end\",\n      duration: 500,\n      excludeStand: true,\n    });\n  }\n  next() {\n    this.conveyer.scrollIntoView(\"end\", {\n      align: \"start\",\n      duration: 500,\n      excludeStand: true,\n    });\n  }\n}\n"},2502:function(e,n,t){"use strict";t.r(n),n.default='<div class="examples">\n  <div class="buttons">\n    <button class="prev" (click)="prev()">prev</button>\n    <button class="next" (click)="next()">next</button>\n  </div>\n  <div class="items horizontal" ngxConveyer #conveyer="ngxConveyer">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},8352:function(e,n,t){"use strict";t.r(n),n.default='<div class="examples">\n  <div class="buttons">\n    <button class="prev">prev</button>\n    <button class="next">next</button>\n  </div>\n  <div class="items horizontal">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},8183:function(e,n,t){"use strict";t.r(n),n.default='import Conveyer from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".items", {\n  horizontal: false,\n});\n\nconst prev = document.querySelector(".prev");\nconst next = document.querySelector(".next");\n\n// scrollIntoView\nprev.addEventListener("click", () => {\n  // start to end\n  conveyer.scrollIntoView("start", {\n    align: "end",\n    duration: 500,\n    excludeStand: true,\n  });\n});\nnext.addEventListener("click", () => {\n  // end to start\n  conveyer.scrollIntoView("end", {\n    align: "start",\n    duration: 500,\n    excludeStand: true,\n  });\n});\n'},8547:function(e,n,t){"use strict";t.r(n),n.default='<script>\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const {\n    scrollIntoView,\n    ref,\n  } = useConveyer({\n    horizontal: false,\n    autoInit: false,\n  });\n<\/script>\n<div class="examples">\n  <div className="buttons">\n    <button className="prev" disabled={$isReachStart} on:click={() => {\n      // start to end\n      scrollIntoView("start", {\n        align: "end",\n        duration: 500,\n        excludeStand: true,\n      });\n    }}>Prev</button>\n    <button className="next" disabled={$isReachEnd} on:click={() => {\n      // end to start\n      scrollIntoView("end", {\n        align: "start",\n        duration: 500,\n        excludeStand: true,\n      });\n    }}>Next</button>\n  </div>\n  <div class="items horizontal" use:ref>\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},6424:function(e,n,t){"use strict";t.r(n),n.default='<template>\n<div class="examples">\n  <div class="buttons">\n    <button class="prev" :disabled="isReachStart" @click="prev">prev</button>\n    <button class="next" :disabled="isReachEnd" @click="next">next</button>\n  </div>\n  <div class="items horizontal" ref="ref">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n</template>\n<script lang="ts">\nimport { MasonryInfiniteGrid } from "@egjs/vue3-infinitegrid";\nimport { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  components: {\n    MasonryInfiniteGrid,\n  },\n  setup() {\n    const { ref, scrollIntoView } = useConveyer({\n      horizontal: false,\n    });\n\n    return {\n      ref,\n      scrollIntoView,\n    };\n  },\n  methods: {\n    prev() {\n      this.scrollIntoView("start", {\n        align: "end",\n        duration: 500,\n        excludeStand: true,\n      });\n    },\n    next() {\n      this.scrollIntoView("end", {\n        align: "start",\n        duration: 500,\n        excludeStand: true,\n      });\n    },\n  },\n};\n<\/script>\n'},8698:function(e,n,t){"use strict";t.r(n),n.default=""},9398:function(e,n,t){"use strict";t.r(n),n.default='<div class="examples">\n  <div class="buttons">\n    <button class="prev" [disabled]="conveyer.isReachStart">Start</button>\n    <button class="next" [disabled]="conveyer.isReachEnd">End</button>\n  </div>\n  <div class="items horizontal" ngxConveyer #conveyer="ngxConveyer">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},427:function(e,n,t){"use strict";t.r(n),n.default='<div class="examples">\n  <div class="buttons">\n    <button class="prev">Start</button>\n    <button class="next">End</button>\n  </div>\n  <div class="items horizontal">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},786:function(e,n,t){"use strict";t.r(n),n.default='import Conveyer from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".items");\n\nconst prev = document.querySelector(".prev");\nconst next = document.querySelector(".next");\n\n// subscribe reactive properties\nconveyer.subscribe("isReachStart", (isReachStart) => {\n  prev.disabled = isReachStart;\n});\n\nconveyer.subscribe("isReachEnd", (isReachEnd) => {\n  next.disabled = isReachEnd;\n});\n'},3146:function(e,n,t){"use strict";t.r(n),n.default='<script>\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const {\n    ref,\n    isReachStart,\n    isReachEnd,\n  } = useConveyer();\n<\/script>\n<div class="examples">\n  <div class="buttons">\n    <button class="prev" disabled={$isReachStart}>Start</button>\n    <button class="next" disabled={$isReachEnd}>End</button>\n  </div>\n  <div class="items horizontal" use:ref>\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},8014:function(e,n,t){"use strict";t.r(n),n.default='<template>\n<div class="examples">\n  <div class="buttons">\n    <button class="prev" :disabled="isReachStart">Start</button>\n    <button class="next" :disabled="isReachEnd">End</button>\n  </div>\n  <div class="items horizontal" ref="ref">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n</template>\n<script lang="ts">\nimport { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n    const {\n      ref,\n      isReachStart,\n      isReachEnd,\n    } = useConveyer();\n\n    return {\n      ref,\n      isReachStart,\n      isReachEnd,\n    };\n  },\n};\n<\/script>\n'},5318:function(e,n,t){"use strict";t.r(n),n.default=""},2139:function(e,n,t){"use strict";t.r(n),n.default='<div class="examples">\n  <div class="items horizontal" [ngxConveyer]="{ useSideWheel: true }">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},6147:function(e,n,t){"use strict";t.r(n),n.default='<div class="examples">\n  <div class="items horizontal">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},5324:function(e,n,t){"use strict";t.r(n),n.default='import Conveyer from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".items", {\n  useSideWheel: true,\n});\n'},3873:function(e,n,t){"use strict";t.r(n),n.default='<script>\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const {\n    ref,\n  } = useConveyer({\n    horizontal: false,\n  });\n<\/script>\n<div class="examples">\n  <div class="items horizontal" use:ref>\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},215:function(e,n,t){"use strict";t.r(n),n.default='<template>\n<div class="examples">\n  <div class="items horizontal" ref="ref">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n</template>\n<script lang="ts">\nimport { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n    const { ref } = useConveyer({\n      useSideWheel: true,\n    });\n\n    return {\n      ref,\n    };\n  },\n};\n<\/script>\n'},5388:function(e,n,t){"use strict";t.r(n),n.default=""},6240:function(e,n,t){"use strict";t.r(n),n.default='<div class="examples">\n  <div class="items vertical" [ngxConveyer]="{ horizontal: false }">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},7075:function(e,n,t){"use strict";t.r(n),n.default='<div class="examples">\n  <div class="items vertical">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},7914:function(e,n,t){"use strict";t.r(n),n.default='import Conveyer from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".items", {\n  horizontal: false,\n});\n'},6543:function(e,n,t){"use strict";t.r(n),n.default='<script>\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const {\n    ref,\n  } = useConveyer({\n    horizontal: false,\n  });\n<\/script>\n<div class="examples">\n  <div class="items vertical" use:ref>\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n'},3e3:function(e,n,t){"use strict";t.r(n),n.default='<template>\n<div class="examples">\n  <div class="items vertical" ref="ref">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n</template>\n<script lang="ts">\nimport { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n    const { ref } = useConveyer({\n      horizontal: false,\n    });\n\n    return {\n      ref,\n    };\n  },\n};\n<\/script>\n'},5845:function(e,n){"use strict";n.Z='import * as React from "react";\nimport { useConveyer } from "@egjs/react-conveyer";\n\nexport default function HorizontalScroll() {\n  const ref = React.useRef<HTMLDivElement>();\n  const {\n    scrollIntoView,\n  } = useConveyer(ref, {\n    horizontal: true,\n  });\n  return <div className="examples">\n    <div className="buttons">\n      <button className="prev" onClick={() => {\n        // start to end\n        scrollIntoView("start", {\n          align: "end",\n          duration: 500,\n          excludeStand: true,\n        });\n      }}>Prev</button>\n      <button className="next" onClick={() => {\n        // end to start\n        scrollIntoView("end", {\n          align: "start",\n          duration: 500,\n          excludeStand: true,\n        });\n      }}>Next</button>\n    </div>\n    <div className="items horizontal" ref={ref}>\n      <div className="item">1</div>\n      <div className="item">2</div>\n      <div className="item">3</div>\n      <div className="item">4</div>\n      <div className="item">5</div>\n      <div className="item">6</div>\n      <div className="item">7</div>\n      <div className="item">8</div>\n      <div className="item">9</div>\n      <div className="item">10</div>\n    </div>\n  </div>;\n}\n'}}]);