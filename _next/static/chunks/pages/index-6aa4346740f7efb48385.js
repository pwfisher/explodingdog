_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,a=e.hasQuery,i=void 0!==a&&a;return n||r&&i}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("YFqc"),i=n.n(a),l=n("atfL"),c=n("Gaur"),u=n("vOnD"),s=r.a.createElement,p=u.b.section.withConfig({displayName:"HomePage__Section",componentId:"sc-8n5rwn-0"})(["padding:16px 32px;> h2{font-size:24px;}"]),d=Object(u.b)(p).attrs({className:"Explorer__HomePage__IntroSection"}).withConfig({displayName:"HomePage__IntroSection",componentId:"sc-8n5rwn-1"})(["> p{font-size:19px;margin:16px 0 16px 24px;}"]),f=Object(u.b)(p).attrs({className:"Explorer__HomePage__DrawingsByYearSection"}).withConfig({displayName:"HomePage__DrawingsByYearSection",componentId:"sc-8n5rwn-2"})(["ol{margin-left:8px;}li{display:inline-block;font-size:64px;font-weight:600;margin:6px 12px;}"]),m=Object(u.b)(p).attrs({className:"Explorer__HomePage__SearchSection"}).withConfig({displayName:"HomePage__SearchSection",componentId:"sc-8n5rwn-3"})(["form{margin-left:20px;}"]);t.default=function(){return s(l.a,{title:"explodingdog"},s(d,null,s("h2",null,"hi my name is Sam,"),s("p",null,"From 2000 to 2015 I drew pictures from titles you sent me. It was fun. Thank you."),s("p",null,"You can find my drawings on ",s("a",{href:"https://www.instagram.com/explodingdog_sam/"},"instagram")," right now."),s("p",null,s("a",{href:"http://www.buildingaworld.com"},"The gift shop is open"))),s(f,null,s("h2",null,"drawings by year:"),s("ol",null,c.a.sort().reverse().map((function(e){return s("li",{key:e},s(i.a,{href:"/year/[id]",as:"/year/".concat(e)},s("a",null,e)))})))),s(m,null,s("form",{method:"get",action:"http://www.google.com/search"},s("input",{type:"hidden",name:"sitesearch",value:"explodingdog.com"}),s("input",{type:"hidden",name:"domains",value:"explodingdog.com"}),s("input",{type:"hidden",name:"ie",value:"UTF-8"}),s("input",{type:"hidden",name:"oe",value:"UTF-8"}),s("input",{type:"text",name:"q",size:25,maxLength:255})," ",s("input",{type:"submit",name:"btnG",value:"search drawings with Google"}))))}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var o,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(o=n("Xuae"))&&o.__esModule?o:{default:o},i=n("lwAK"),l=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var l=0,c=d.length;l<c;l++){var u=d[l];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var s=r.props[u],p=o[u]||new Set;p.has(s)?a=!1:(p.add(s),o[u]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),o=(0,r.useContext)(l.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:f,headManager:o,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var g=m;t.default=g},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return o(e)||r(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var o=n("RIqP"),r=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),l=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),p=function(e){i(n,e);var t=u(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(o(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=p},a1gu:function(e,t,n){var o=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?r(e):t}},atfL:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var o=n("q1tI"),r=n.n(o),a=n("8Kt/"),i=n.n(a),l=n("vOnD"),c=n("YFqc"),u=n.n(c),s=r.a.createElement,p=function(){return s(d,null,s(u.a,{href:"/"},s("a",null,"explodingdog ",s(f,null,"explorer"))))},d=l.b.header.attrs({className:"Explorer__PageHeader__Container"}).withConfig({displayName:"PageHeader__Container",componentId:"sc-11ah5sf-0"})(["font-size:48px;font-weight:bold;padding:24px;"]),f=l.b.span.attrs({className:"Explorer__PageHeader__Explorer"}).withConfig({displayName:"PageHeader__Explorer",componentId:"sc-11ah5sf-1"})(["opacity:0.1;"]),m=r.a.createElement,g=function(){return m(h,null,m(_,null,"also at:"),m(y,null,m(w,null,m("a",{href:"http://www.buildingaworld.com"},"gift shop")),m(w,null,m("a",{href:"http://explodingdog.com/mailinglist/"},"emailing list"))),m(y,null,m(w,null,m("a",{href:"https://www.instagram.com/explodingdog_sam/"},"instagram")),m(w,null,m("a",{href:"http://twitter.com/Explodingdog"},"twitter"))),m(x,null,"\xa92020 Sam Brown"))},h=l.b.footer.attrs({className:"Explorer__PageFooter__Container"}).withConfig({displayName:"PageFooter__Container",componentId:"sc-1ckug93-0"})(["margin-top:24px;padding:24px;"]),_=l.b.ul.attrs({className:"Explorer__PageFooter__AlsoAt"}).withConfig({displayName:"PageFooter__AlsoAt",componentId:"sc-1ckug93-1"})(["font-size:24px;font-weight:bold;"]),y=l.b.ul.attrs({className:"Explorer__PageFooter__List"}).withConfig({displayName:"PageFooter__List",componentId:"sc-1ckug93-2"})(["margin-left:24px;"]),w=l.b.li.attrs({className:"Explorer__PageFooter__ListItem"}).withConfig({displayName:"PageFooter__ListItem",componentId:"sc-1ckug93-3"})(["display:inline-block;font-size:32px;font-weight:bold;margin:8px 12px;"]),x=l.b.div.attrs({className:"Explorer__PageFooter__Copyright"}).withConfig({displayName:"PageFooter__Copyright",componentId:"sc-1ckug93-4"})(["color:lightGrey;font-size:14px;margin:16px 24px 0;"]),v=n("SJUX"),b=r.a.createElement,P=function(e){var t=e.children,n=e.title,o=void 0===n?"explodingdog explorer":n,a=e.description,l=void 0===a?"explodingdog explorer. An alternate explodingdog experience.":a;return b(r.a.Fragment,null,b(i.a,null,b("title",null,o),b("meta",{charSet:"utf-8"}),b("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),b("link",{rel:"icon",href:"".concat(v.a,"/favicon.ico")}),b("link",{rel:"apple-touch-icon",href:"".concat(v.a,"/apple-touch-icon.png")}),b("meta",{name:"theme-color",content:"#000000"}),b("meta",{name:"description",content:l}),b("link",{rel:"manifest",href:"".concat(v.a,"/manifest.json")})),b(p,null),t,b(g,null))}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r}},[["/EDR",0,2,1,3,4]]]);