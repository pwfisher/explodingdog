_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"1IHz":function(n,t,e){"use strict";e.r(t),e.d(t,"__N_SSG",(function(){return y}));var r=e("q1tI"),a=e.n(r),i=e("atfL"),o=e("vOnD"),c=e("xlsZ"),l=e("YFqc"),s=e.n(l),u=a.a.createElement,p=function(n){var t=n.activeYear;return u(d,null,c.d.sort().reverse().map((function(n){return u(_,{key:n,isActive:n===t},n===t?u("b",null,n):u(s.a,{href:"/year/[id]",as:"/year/".concat(n)},u("a",null,n)))})))},d=o.c.ol.attrs({className:"Explorer__YearBar__YearList"}).withConfig({displayName:"YearBar__YearList",componentId:"ab59nw-0"})(["background:white;padding:0 16px;position:sticky;top:0;z-index:100;"]),_=o.c.li.attrs({className:"Explorer__YearBar__YearItem"}).withConfig({displayName:"YearBar__YearItem",componentId:"ab59nw-1"})(["display:inline-block;font-size:12px;margin:8px 10px;position:relative;",""],(function(n){return n.isActive&&"\n    &::after {\n      background: currentColor;\n      bottom: -2px;\n      display: block;\n      content: '';\n      height: 2px;\n      left: 0;\n      opacity: 0.8;\n      position: absolute;\n      right: 0;\n    }\n  "})),f=e("Og4Q"),g=e("Cn7l"),m=a.a.createElement,w=o.c.h1.attrs({className:"Explorer__YearPage__YearHeading"}).withConfig({displayName:"YearPage__YearHeading",componentId:"sc-9d1mdc-0"})(["font-size:64px;text-indent:48px;"]),y=!0;t.default=function(n){var t=n.year,e=c.i[t].filter((function(n){return!Object(g.a)(n,"DoNotList")}));return m(i.a,{title:"explodingdog ".concat(t)},m(p,{activeYear:t}),m(w,null,t),m(f.a,{drawings:e}))}},Cn7l:function(n,t,e){"use strict";e.d(t,"d",(function(){return i})),e.d(t,"a",(function(){return o})),e.d(t,"e",(function(){return c})),e.d(t,"b",(function(){return l})),e.d(t,"c",(function(){return s}));var r=e("KQm4"),a=e("xlsZ");function i(n){return a.h.filter((function(t){return o(n,t)}))}function o(n,t){var e;return(null!==(e=a.g[t])&&void 0!==e?e:[]).some((function(t){return t.id===n.id}))}function c(){return JSON.parse(localStorage.getItem("tagDrawingSets")||"{}")}function l(n){return Object.keys(n).reduce((function(t,e){return t[e]=Object(r.a)(n[e]),t}),{})}function s(n){return n.toLocaleLowerCase().trim().replace(/\s+/g,"-")}},Og4Q:function(n,t,e){"use strict";e.d(t,"a",(function(){return y}));var r=e("wx14");function a(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var i=e("q1tI"),o=e.n(i),c=e("vOnD"),l=e("SJUX"),s=e("YFqc"),u=e.n(s),p=o.a.createElement,d=function(n){var t=n.date,e=n.title,r=n.slug,a=n.image;return p(_,null,p(g,null,e),p(u.a,{href:"/drawing/".concat(r)},p("a",null,p(m,{src:"".concat(l.a,"/images/").concat(a),alt:e,loading:"lazy"}))),p(u.a,{href:"/day/".concat(t)},p(f,null,t)))},_=c.c.div.attrs({className:"Explorer__DrawingTile__Container"}).withConfig({displayName:"DrawingTile__Container",componentId:"sc-17ryjrm-0"})(["display:inline-block;padding:24px 12px;position:relative;width:250px;"]),f=c.c.div.attrs({className:"Explorer__DrawingTile__Date"}).withConfig({displayName:"DrawingTile__Date",componentId:"sc-17ryjrm-1"})(["bottom:8px;cursor:pointer;font-size:12px;opacity:0.1;position:absolute;right:12px;"]),g=c.c.h3.attrs({className:"Explorer__DrawingTile__Title"}).withConfig({displayName:"DrawingTile__Title",componentId:"sc-17ryjrm-2"})(["font-size:18px;font-weight:bold;margin:0 0 12px;"]),m=c.c.img.attrs({className:"Explorer__DrawingTile__Image"}).withConfig({displayName:"DrawingTile__Image",componentId:"sc-17ryjrm-3"})(["display:block;width:100%;"]),w=o.a.createElement,y=function(n){var t=n.drawings,e=a(n,["drawings"]);return w(x,e,t&&t.map((function(n){return w(d,Object(r.a)({key:"".concat(n.date," ").concat(n.slug)},n))})))},x=c.c.section.attrs({className:"Explorer__DrawingSection__Container"}).withConfig({displayName:"DrawingSection__Container",componentId:"sc-164dmyq-0"})(["text-align:center;"])},knjb:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/year/[id]",function(){return e("1IHz")}])}},[["knjb",0,2,1,3,4]]]);