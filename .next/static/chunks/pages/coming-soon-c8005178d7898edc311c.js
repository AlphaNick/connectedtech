_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),c=n("7KCV");t.__esModule=!0,t.default=void 0;var o=c(n("q1tI")),a=n("elyg"),s=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,r){if((0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),c=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),n=r(t,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,a.resolveHref)(c,e.as):s||o}}),[c,e.href,e.as]),d=f.href,p=f.as,b=e.children,h=e.replace,v=e.shallow,j=e.scroll,m=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var y=o.Children.only(b),x=y&&"object"===typeof y&&y.ref,g=(0,i.useIntersection)({rootMargin:"200px"}),O=r(g,2),w=O[0],N=O[1],E=o.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,o.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof m?m:n&&n.locale,c=l[d+"%"+p+(r?"%"+r:"")];e&&!c&&u(n,d,p,{locale:r})}),[p,d,N,m,t,n]);var M={ref:E,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o,locale:i}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,h,v,j,m)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};return(e.passHref||"a"===y.type&&!("href"in y.props))&&(M.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof m?m:n&&n.locale,n&&n.defaultLocale))),o.default.cloneElement(y,M)};t.default=f},grO0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coming-soon",function(){return n("w/X4")}])},vNVm:function(e,t,n){"use strict";var r=n("zoAU"),c=n("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){o.unobserve(e),0===a.size&&(o.disconnect(),i.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){s||f||(0,a.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("q1tI"),a=c(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var i=new Map},"w/X4":function(e,t,n){"use strict";n.r(t);var r=n("xvhg"),c=n("nKUr"),o=n("q1tI"),a=n.n(o),s=n("YFqc"),i=n.n(s);t.default=function(){var e=a.a.useState(""),t=Object(r.a)(e,2),n=t[0],o=t[1],s=a.a.useState(""),l=Object(r.a)(s,2),u=l[0],f=l[1],d=a.a.useState(""),p=Object(r.a)(d,2),b=p[0],h=p[1],v=a.a.useState(""),j=Object(r.a)(v,2),m=j[0],y=j[1];a.a.useEffect((function(){var e=setInterval((function(){x()}),1e3);return function(){return clearInterval(e)}}),[]);var x=function(){var e=new Date("August 23, 2022 17:00:00 PDT"),t=Date.parse(e)/1e3,n=new Date,r=t-Date.parse(n)/1e3,c=Math.floor(r/86400),a=Math.floor((r-86400*c)/3600),s=Math.floor((r-86400*c-3600*a)/60),i=Math.floor(r-86400*c-3600*a-60*s);a<"10"&&(a="0"+a),s<"10"&&(s="0"+s),i<"10"&&(i="0"+i),o(c),f(a),h(s),y(i)};return Object(c.jsx)("div",{className:"coming-soon-area",children:Object(c.jsx)("div",{className:"d-table",children:Object(c.jsx)("div",{className:"d-table-cell",children:Object(c.jsxs)("div",{className:"coming-soon-content",children:[Object(c.jsx)(i.a,{href:"/",children:Object(c.jsx)("a",{className:"logo",children:Object(c.jsx)("img",{src:"/images/black-logo.png",alt:"image"})})}),Object(c.jsx)("h2",{children:"We are launching soon"}),Object(c.jsxs)("div",{id:"timer",className:"flex-wrap d-flex justify-content-center",children:[Object(c.jsxs)("div",{id:"days",className:"align-items-center flex-column d-flex justify-content-center",children:[n," ",Object(c.jsx)("span",{children:"Days"})]}),Object(c.jsxs)("div",{id:"hours",className:"align-items-center flex-column d-flex justify-content-center",children:[u," ",Object(c.jsx)("span",{children:"Hours"})]}),Object(c.jsxs)("div",{id:"minutes",className:"align-items-center flex-column d-flex justify-content-center",children:[b," ",Object(c.jsx)("span",{children:"Minutes"})]}),Object(c.jsxs)("div",{id:"seconds",className:"align-items-center flex-column d-flex justify-content-center",children:[m," ",Object(c.jsx)("span",{children:"Seconds"})]})]}),Object(c.jsxs)("form",{className:"newsletter-form",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"email",className:"input-newsletter",placeholder:"Enter your email",name:"EMAIL",required:!0}),Object(c.jsx)("span",{className:"label-title",children:Object(c.jsx)("i",{className:"bx bx-envelope"})})]}),Object(c.jsx)("button",{type:"submit",className:"default-btn",children:Object(c.jsx)("span",{children:"Subscribe"})}),Object(c.jsx)("p",{children:"If you would like to be notified when your app is live, Please subscribe to our mailing list."})]})]})})})})}},xvhg:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(i){c=!0,o=i}finally{try{r||null==s.return||s.return()}finally{if(c)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return c}))}},[["grO0",0,2,1]]]);