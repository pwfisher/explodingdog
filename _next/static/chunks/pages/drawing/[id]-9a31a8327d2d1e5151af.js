_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{bC2U:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/drawing/[id]",function(){return e("eZbN")}])},eZbN:function(a,n,e){"use strict";e.r(n),e.d(n,"__N_SSG",(function(){return D}));var i=e("q1tI"),t=e.n(i),r=e("YFqc"),o=e.n(r),s=e("SJUX"),l=e("vOnD"),g=e("Gaur"),c=function(a){return g.b.find((function(n){return n.slug===a}))},_=function(a){var n=c(a);if(!n)return"something";var e=g.b.indexOf(n);return(g.b[e-1]||g.b.slice(-1)[0]).slug},d=function(a){var n=c(a);if(!n)return"something";var e=g.b.indexOf(n);return(g.b[e+1]||g.b[0]).slug},p=t.a.createElement,w=l.b.main.attrs({className:"Explorer__DrawingPage__Container"}).withConfig({displayName:"DrawingPage__Container",componentId:"sc-1qbzvd7-0"})(["display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;max-height:100vh;"]),u=l.b.h1.attrs({className:"Explorer__DrawingPage__Title"}).withConfig({displayName:"DrawingPage__Title",componentId:"sc-1qbzvd7-1"})(["font-size:32px;font-weight:bold;padding:16px 24px;"]),f=l.b.figure.attrs({className:"Explorer__DrawingPage__ImageWrap"}).withConfig({displayName:"DrawingPage__ImageWrap",componentId:"sc-1qbzvd7-2"})(["flex-grow:1;position:relative;"]),m=l.b.img.attrs({className:"Explorer__DrawingPage__Image"}).withConfig({displayName:"DrawingPage__Image",componentId:"sc-1qbzvd7-3"})(["display:block;height:100%;object-fit:contain;position:absolute;width:100%;"]),b=l.b.nav.attrs({className:"Explorer__DrawingPage__Header"}).withConfig({displayName:"DrawingPage__NavBar",componentId:"sc-1qbzvd7-4"})(["color:#BBB;display:flex;justify-content:space-between;font-size:14px;font-weight:bold;height:40px;line-height:40px;"]),h=l.b.div.attrs({className:"Explorer__DrawingPage__Arrow"}).withConfig({displayName:"DrawingPage__Arrow",componentId:"sc-1qbzvd7-5"})(["color:black;cursor:pointer;font-size:24px;padding:0 32px;user-select:none;&:hover{background:#f8f8f8;}"]),N=l.b.a.attrs({className:"Explorer__DrawingPage__YearLink"}).withConfig({displayName:"DrawingPage__YearLink",componentId:"sc-1qbzvd7-6"})(["cursor:pointer;color:black;"]),x=l.b.span.attrs({className:"Explorer__DrawingPage__DrawingId"}).withConfig({displayName:"DrawingPage__DrawingId",componentId:"sc-1qbzvd7-7"})([""]),v=l.b.span.attrs({classNamne:"Explorer__DrawingPage__Date"}).withConfig({displayName:"DrawingPage__Date",componentId:"sc-1qbzvd7-8"})([""]),D=!0;n.default=function(a){var n=a.drawing,e=a.year;return p(w,null,p(u,null,n.title),p(f,null,p(m,{src:"".concat(s.a,"/images/").concat(n.image),alt:n.title})),p(b,null,p(o.a,{href:"/drawing/[id]",as:"/drawing/".concat(_(n.slug))},p(h,null,"<")),p(o.a,{href:"/year/[id]",as:"/year/".concat(e)},p(N,null,e)),p("a",{href:"http://explodingdog.com/title/".concat(n.slug,".html")},p(x,null,"#",n.id.split(".").slice(-1))),p(v,null,n.date),p(o.a,{href:"/drawing/[id]",as:"/drawing/".concat(d(n.slug))},p(h,null,">"))))}}},[["bC2U",0,2,1,3,4]]]);