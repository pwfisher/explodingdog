_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"1mfO":function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var r=t("q1tI"),a=t.n(r),i=function(){return(i=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}).apply(this,arguments)},o=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]])}return t},c=!1;function l(n){var e=n.style,t=void 0===e?{}:e,l=o(n,["style"]),d=function(){var n=Object(r.useState)(s),e=n[0],t=n[1],a=function(){var n=Object(r.useState)(!1),e=n[0],t=n[1];return Object(r.useEffect)((function(){u()&&t(!0)}),[]),e}();return Object(r.useEffect)((function(){if(a)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){var n=s();t(n)}}),[a]),a?e:null}();!c&&t.height&&(c=!0,console.warn("<ReactDiv100vh /> overrides the height property of the style prop"));var f=i(i({},t),{height:d?d+"px":"100vh"});return a.a.createElement("div",i({style:f},l))}function s(){var n;return u()?(null===(n=document.documentElement)||void 0===n?void 0:n.clientHeight)||window.innerHeight:null}function u(){return"undefined"!==typeof window&&"undefined"!==typeof document}},L025:function(n,e,t){"use strict";t.r(e),t.d(e,"__N_SSG",(function(){return b}));var r=t("wx14"),a=t("q1tI"),i=t.n(a),o=t("atfL"),c=t("NoK1"),l=t("YFqc"),s=t.n(l),u=t("vOnD"),d=t("imp1"),f=t("nOHt"),p=t("1mfO"),g=i.a.createElement,_=u.b.main.attrs({className:"Explorer__DrawingPage__Container"}).withConfig({displayName:"DayPage__Container",componentId:"sc-1o36mv1-0"})(["display:flex;flex-direction:column;justify-content:space-between;height:100%;max-height:100%;"]),w=u.b.h1.attrs({className:"Explorer__DayPage__DayHeading"}).withConfig({displayName:"DayPage__DayHeading",componentId:"sc-1o36mv1-1"})(["font-size:32px;padding:12px 16px;text-align:center;"]),m=u.b.section.attrs({className:"Explorer__DayPage__DrawingSection"}).withConfig({displayName:"DayPage__DrawingSection",componentId:"sc-1o36mv1-2"})(["overflow:scroll;text-align:center;"]),y=u.b.nav.attrs({className:"Explorer__DrawingPage__Header"}).withConfig({displayName:"DayPage__NavBar",componentId:"sc-1o36mv1-3"})(["color:#BBB;display:flex;justify-content:space-between;font-size:18px;font-weight:bold;height:80px;line-height:80px;"]),h=u.b.div.attrs({className:"Explorer__DrawingPage__Arrow"}).withConfig({displayName:"DayPage__Arrow",componentId:"sc-1o36mv1-4"})(["color:black;cursor:pointer;font-size:36px;line-height:74px;padding:0 5%;user-select:none;&:hover{background:#f8f8f8;}"]),v=u.b.a.attrs({className:"Explorer__DrawingPage__YearLink"}).withConfig({displayName:"DayPage__YearLink",componentId:"sc-1o36mv1-5"})(["cursor:pointer;"]),b=!0;e.default=function(n){var e=n.drawings,t=n.day,a=parseInt(t.slice(0,4),10),i=Object(f.useRouter)(),l=function(){return i.push("/day/".concat(Object(d.c)(t)))},u=function(){return i.push("/day/".concat(Object(d.a)(t)))};return g(o.a,{title:"explodingdog ".concat(t),showHeader:!1,showFooter:!1},g(p.a,null,g(_,{onKeyDown:function(n){var e={ArrowUp:l,ArrowDown:u,ArrowLeft:l,ArrowRight:u}[n.key];null===e||void 0===e||e()},tabIndex:-1},g(w,null,t),g(m,null,e&&e.map((function(n){return g(c.a,Object(r.a)({key:"".concat(n.date," ").concat(n.slug)},n))}))),g(y,null,g(s.a,{href:"/day/[id]",as:"/day/".concat(Object(d.c)(t))},g(h,null,"<")),g(s.a,{href:"/"},g("a",null,"Home")),g(s.a,{href:"/year/[id]",as:"/year/".concat(a)},g(v,null,a)),g(s.a,{href:"/day/[id]",as:"/day/".concat(Object(d.a)(t))},g(h,null,">"))))))}},NoK1:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t("q1tI"),a=t.n(r),i=t("vOnD"),o=t("SJUX"),c=t("YFqc"),l=t.n(c),s=a.a.createElement,u=function(n){var e=n.date,t=n.title,r=n.slug,a=n.image;return s(d,null,s(p,null,t),s(l.a,{href:"/drawing/[id]",as:"/drawing/".concat(r)},s("a",null,s(g,{src:"".concat(o.a,"/images/").concat(a),alt:t}))),s(l.a,{href:"/day/[id]",as:"/day/".concat(e)},s(f,null,e)))},d=i.b.div.attrs({className:"Explorer__DrawingTile__Container"}).withConfig({displayName:"DrawingTile__Container",componentId:"sc-17ryjrm-0"})(["display:inline-block;padding:24px 12px;position:relative;width:250px;"]),f=i.b.div.attrs({className:"Explorer__DrawingTile__Date"}).withConfig({displayName:"DrawingTile__Date",componentId:"sc-17ryjrm-1"})(["bottom:8px;cursor:pointer;font-size:12px;opacity:0.1;position:absolute;right:12px;"]),p=i.b.h3.attrs({className:"Explorer__DrawingTile__Title"}).withConfig({displayName:"DrawingTile__Title",componentId:"sc-17ryjrm-2"})(["font-size:18px;font-weight:bold;margin:0 0 12px;"]),g=i.b.img.attrs({className:"Explorer__DrawingTile__Image"}).withConfig({displayName:"DrawingTile__Image",componentId:"sc-17ryjrm-3"})(["display:block;width:100%;"])},dwPp:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/day/[id]",function(){return t("L025")}])},imp1:function(n,e,t){"use strict";t.d(e,"d",(function(){return i})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return l}));var r=t("Gaur"),a=function(n){return r.c.find((function(e){return e.slug===n}))},i=function(n){var e=a(n);if(!e)return"something";var t=r.c.indexOf(e);return(r.c[t-1]||r.c.slice(-1)[0]).slug},o=function(n){var e=a(n);if(!e)return"something";var t=r.c.indexOf(e);return(r.c[t+1]||r.c[0]).slug},c=function(n){var e=r.a.indexOf(n);return r.a[e-1]||r.a.slice(-1)[0]},l=function(n){var e=r.a.indexOf(n);return r.a[e+1]||r.a[0]}},wx14:function(n,e,t){"use strict";function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return r}))}},[["dwPp",0,2,1,3,4]]]);