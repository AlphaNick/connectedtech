_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"GB4+":function(e,i,t){"use strict";var s=t("vJKn"),c=t.n(s),a=t("rg98"),r=t("cpVT"),n=t("nKUr"),l=t("q1tI"),o=t("NKCw"),d=t("vDqi"),u=t.n(d),j=t("PSD3"),m=t.n(j),b=t("2BYM"),h=t.n(b),x=t("rjN7");function p(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,s)}return t}function O(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?p(Object(t),!0).forEach((function(i){Object(r.a)(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}var g=h()(m.a),v={name:"",email:"",number:"",subject:"",text:""};i.a=function(){var e=Object(l.useState)(v),i=e[0],t=e[1],s=Object(o.a)(),d=s.register,j=s.handleSubmit,m=s.errors,b=function(e){var s=e.target,c=s.name,a=s.value;t((function(e){return O(O({},e),{},Object(r.a)({},c,a))})),console.log(i)},h=function(){var e=Object(a.a)(c.a.mark((function e(s){var a,r,n,l,o,d,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(x.a,"/api/contact"),r=i.name,n=i.email,l=i.number,o=i.subject,d=i.text,j={name:r,email:n,number:l,subject:o,text:d},e.next=6,u.a.post(a,j);case 6:console.log(a),t(v),g.fire({title:"Congratulations!",text:"Your message was successfully send and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(i){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"get-in-touch-area get-in-touch-area-two bg-color ptb-100",children:[Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("span",{children:"Get In Touch"}),Object(n.jsx)("h2",{children:"Contact Us Today To Speak With An Expert About Your Specific Needs"})]}),Object(n.jsx)("form",{id:"contactForm",onSubmit:j(h),className:"get-in-touch-form",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Name"}),Object(n.jsx)("input",{type:"text",name:"name",value:i.name,onChange:b,className:"form-control",ref:d({required:!0})}),Object(n.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:m.name&&"Name is required."})]})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)("input",{type:"text",name:"email",value:i.email,onChange:b,className:"form-control",ref:d({required:!0,pattern:/^\S+@\S+$/i})}),Object(n.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:m.email&&"Email is required."})]})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Phone"}),Object(n.jsx)("input",{type:"text",name:"number",value:i.number,onChange:b,className:"form-control",ref:d({required:!0})}),Object(n.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:m.number&&"Number is required."})]})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Subject"}),Object(n.jsx)("input",{type:"text",name:"subject",value:i.subject,onChange:b,className:"form-control",ref:d({required:!0})}),Object(n.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:m.subject&&"Subject is required."})]})}),Object(n.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Message"}),Object(n.jsx)("textarea",{name:"text",cols:"30",rows:"5",value:i.text,onChange:b,className:"form-control",ref:d({required:!0})}),Object(n.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:m.text&&"Text body is required."})]})}),Object(n.jsx)("div",{className:"col-lg-12 col-sm-12",children:Object(n.jsx)("button",{type:"submit",className:"default-btn",children:"Submit"})})]})})]}),Object(n.jsx)("div",{className:"get-in-touch-shape",children:Object(n.jsx)("img",{src:"/images/get-in-touch-shape.png",alt:"Image"})})]})}},csvi:function(e,i,t){"use strict";t.r(i);var s=t("nKUr"),c=t("q1tI"),a=t.n(c),r=t("kT/7"),n=t("Ix5F"),l=t("mdYk"),o=t("GB4+"),d=t("jPax");i.default=function(){return Object(s.jsxs)(a.a.Fragment,{children:[Object(s.jsx)(r.a,{}),Object(s.jsx)(n.a,{pageTitle:"Faq's",homePageUrl:"/",homePageText:"Home",activePageText:"Faq's"}),Object(s.jsxs)("div",{className:"faq-area white-bg ptb-100",children:[Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row align-items-center",children:[Object(s.jsx)("div",{className:"col-lg-6",children:Object(s.jsx)("div",{className:"faq-img",children:Object(s.jsx)("img",{src:"/images/faq-img.png",alt:"Image"})})}),Object(s.jsx)("div",{className:"col-lg-6",children:Object(s.jsxs)("div",{className:"faq-accordion",children:[Object(s.jsxs)("div",{className:"faq-title",children:[Object(s.jsx)("h2",{children:"Frequently Asked Questions"}),Object(s.jsx)("span",{children:"Just Find Your Answers Below"})]}),Object(s.jsxs)(d.a,{allowZeroExpanded:!0,preExpanded:["a"],children:[Object(s.jsxs)(d.b,{uuid:"a",children:[Object(s.jsx)(d.d,{children:Object(s.jsx)(d.c,{children:"What is a managed security service?"})}),Object(s.jsx)(d.e,{children:Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis"})})]}),Object(s.jsxs)(d.b,{uuid:"b",children:[Object(s.jsx)(d.d,{children:Object(s.jsx)(d.c,{children:"Why do we need cybersecurity?"})}),Object(s.jsx)(d.e,{children:Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis"})})]}),Object(s.jsxs)(d.b,{uuid:"c",children:[Object(s.jsx)(d.d,{children:Object(s.jsx)(d.c,{children:"What is theaa best way to learn cybersecurity?"})}),Object(s.jsx)(d.e,{children:Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis"})})]}),Object(s.jsxs)(d.b,{uuid:"d",children:[Object(s.jsx)(d.d,{children:Object(s.jsx)(d.c,{children:"How do i secure my computer?"})}),Object(s.jsx)(d.e,{children:Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis"})})]}),Object(s.jsxs)(d.b,{uuid:"e",children:[Object(s.jsx)(d.d,{children:Object(s.jsx)(d.c,{children:"What are theaa costs of a cyber attack?"})}),Object(s.jsx)(d.e,{children:Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis"})})]}),Object(s.jsxs)(d.b,{uuid:"f",children:[Object(s.jsx)(d.d,{children:Object(s.jsx)(d.c,{children:"How can i safely browse the internet?"})}),Object(s.jsx)(d.e,{children:Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis"})})]})]})]})})]})}),Object(s.jsx)("div",{className:"faq-right-shape shape-three",children:Object(s.jsx)("img",{src:"/images/faq-right-shape.png",alt:"Image"})})]}),Object(s.jsx)(o.a,{}),Object(s.jsx)(l.a,{})]})}},"l//U":function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return t("csvi")}])}},[["l//U",0,2,1,3,4,5,10]]]);