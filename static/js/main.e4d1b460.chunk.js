(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(5),s=(c(18),c(19),c(2)),r=c(6),i=c.n(r),j=(c(20),c(0)),l=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},o=c(4),d=c(1);function b(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(22);var h=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},x=function(){var e=Object(d.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(d.useState)([]),l=Object(o.a)(r,2),x=l[0],O=l[1],u=Object(d.useState)(!1),m=Object(o.a)(u,2),p=m[0],f=m[1];Object(d.useEffect)((function(){n(!0),b().then((function(e){O(e)})).catch((function(){f(!0)})).finally((function(){n(!1)}))}),[]);var v=Object(s.h)().slug,g=function(e){return x.find((function(t){return t.name===e.motherName}))},N=function(e){return x.find((function(t){return t.name===e.fatherName}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)("div",{className:"box table-container",children:c?Object(j.jsx)(h,{}):Object(j.jsxs)(j.Fragment,{children:[x.length>0&&!1===p&&Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:x.map((function(e){var t,c,n,s;return Object(j.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":v===e.slug}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(a.b,{to:"../".concat(e.slug),className:i()({"has-text-danger":"f"===e.sex}),children:e.name})}),Object(j.jsx)("td",{children:e.sex}),Object(j.jsx)("td",{children:e.born}),Object(j.jsx)("td",{children:e.died}),Object(j.jsx)("td",{children:g(e)?Object(j.jsx)(a.b,{to:"../".concat(null===(t=g(e))||void 0===t?void 0:t.slug),className:"has-text-danger",children:"".concat(null===(c=g(e))||void 0===c?void 0:c.name)}):e.motherName||"-"}),Object(j.jsx)("td",{children:N(e)?Object(j.jsx)(a.b,{to:"../".concat(null===(n=N(e))||void 0===n?void 0:n.slug),children:"".concat(null===(s=N(e))||void 0===s?void 0:s.name)}):e.fatherName||"-"})]})}))})]}),p&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===x.length&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})})]})},O=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},u=function(){var e=function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})};return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(a.c,{to:"/",className:e,children:"Home"}),Object(j.jsx)(a.c,{to:"/people",className:e,children:"People"})]})})}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(s.d,{children:Object(j.jsxs)(s.b,{path:"/",children:[Object(j.jsx)(s.b,{index:!0,element:Object(j.jsx)(l,{})}),Object(j.jsxs)(s.b,{path:"people",children:[Object(j.jsx)(s.b,{index:!0,element:Object(j.jsx)(x,{})}),Object(j.jsx)(s.b,{path:":slug",element:Object(j.jsx)(x,{})})]}),Object(j.jsx)(s.b,{path:"home",element:Object(j.jsx)(s.a,{to:"..",replace:!0})}),Object(j.jsx)(s.b,{path:"*",element:Object(j.jsx)(O,{})})]})})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(u,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.e4d1b460.chunk.js.map