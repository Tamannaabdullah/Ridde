(this["webpackJsonpriddle-app"]=this["webpackJsonpriddle-app"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},47:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(2),a=n.n(c),r=n(32),i=n.n(r),l=(n(40),n(10)),j=n(5),o=n(16),b=n(12),d=n(33),u=[{title:"Home",path:"/",icon:Object(s.jsx)(o.b,{}),cName:"nav-text"},{title:"Riddles",path:"/riddles",icon:Object(s.jsx)(d.a,{}),cName:"nav-text"},{title:"Leaderboard",path:"/leaderboard",icon:Object(s.jsx)(o.a,{}),cName:"nav-text"}],h=(n(41),n(0));var x=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],r=function(){return a(!n)};return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(h.b.Provider,{value:{color:"#fff"},children:[Object(s.jsx)("div",{className:"navbar",children:Object(s.jsx)(b.b,{to:"#",className:"menu-bars",children:Object(s.jsx)(j.a,{onClick:r})})}),Object(s.jsx)("nav",{className:n?"nav-menu active":"nav-menu",children:Object(s.jsxs)("ul",{className:"nav-menu-items",onClick:r,children:[Object(s.jsx)("li",{className:"navbar-toggle",children:Object(s.jsx)(b.b,{to:"#",className:"menu-bars",children:Object(s.jsx)(o.c,{})})}),u.map((function(e,t){return Object(s.jsx)("li",{className:e.cName,children:Object(s.jsxs)(b.b,{to:e.path,children:[e.icon,Object(s.jsx)("span",{children:e.title})]})},t)}))]})})]})})},O=n(3);n(47);var m=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"titleStyle",children:"Are you the Riddle Master?"}),Object(s.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",color:"#8874a3"},children:[Object(s.jsx)(j.b,{size:75}),Object(s.jsx)(j.b,{size:85}),Object(s.jsx)(j.b,{size:100}),Object(s.jsx)(j.b,{size:85}),Object(s.jsx)(j.b,{size:75})]}),Object(s.jsxs)("div",{className:"homeContainer",children:[Object(s.jsx)("p",{className:"hack",children:"Hackathon 2020"}),Object(s.jsx)("p",{className:"intro",children:"During the next 24 hours riddles will be added onto this site one per hour, they will appear at random so make sure to keep checking the site!"}),Object(s.jsx)("p",{className:"intro",children:"Gain Gems by being one of the first four people to answer these riddles!"}),Object(s.jsx)("p",{className:"intro",children:"The person with the most gems will win a prize, will that be you?"})]}),Object(s.jsx)("p",{className:"start",children:"Let the Games Begin!"})]})},p=n(13),v=n.n(p),f=n(17),y=n(18),N=n.n(y),g=(n(66),"Q1");var w=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(g),i=Object(l.a)(r,2),o=i[0],b=i[1],d=Object(c.useState)(""),u=Object(l.a)(d,2),h=u[0],x=u[1],O=function(){var e=Object(f.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,N.a.post("/api/answer",{name:n,question:o,answer:h});case 4:200===e.sent.status?alert("You're response has been submitted for validation by our expert team!"):alert("Sorry something went wrong!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Sorry, something went wrong!!!");case 11:return e.prev=11,a(""),x(""),b(g),e.abrupt("return");case 17:case"end":return e.stop()}}),e,null,[[1,8,11,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"title",children:"Riddles"}),Object(s.jsx)("div",{className:"containerRiddle",children:Object(s.jsx)("p",{className:"riddlestyles",children:"First Riddle: Something very extraordinary happened on the 6th of May, 1978 at 12:34 a.m. What was it?"})}),Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:["\u200b\u200b\u200b\u200b\u200b",Object(s.jsx)("h1",{className:"answer",children:" SUBMIT YOUR ANSWER HERE"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("label",{htmlFor:"name",className:"name",children:"Name:"}),Object(s.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)},value:n,name:"name"}),Object(s.jsx)("label",{htmlFor:"question",className:"name",children:"  Question number"}),Object(s.jsx)("select",{name:"question",children:Object(s.jsx)("option",{value:g,onClick:function(e){return b(e.target.value)},children:g})}),Object(s.jsx)("label",{htmlFor:"answer",className:"name",children:"  Answer:"}),Object(s.jsx)("input",{type:"text",onChange:function(e){return x(e.target.value)},value:h}),Object(s.jsx)("button",{type:"submit",onClick:function(e){return O(e)},children:"Submit!"})]}),Object(s.jsx)("p",{className:"pastAnswer",children:"Previous answer:"}),Object(s.jsxs)("div",{className:"gems",children:[Object(s.jsx)(j.b,{size:75}),Object(s.jsx)(j.b,{size:85}),Object(s.jsx)(j.b,{size:100}),Object(s.jsx)(j.b,{size:85}),Object(s.jsx)(j.b,{size:75})]})]})]})},z=n(14);n(67);var k=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(f.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("/api/scores");case 3:t=e.sent,n=t.data,console.log(n),a(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.jsxs)("div",{className:"leaderboard",children:[Object(s.jsx)("h1",{className:"titleStyles",children:"Leaderboard"}),Object(s.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",color:"#B2A1D3"},children:[Object(s.jsx)(z.a,{size:45}),Object(s.jsx)(z.a,{size:50}),Object(s.jsx)(z.a,{size:60}),Object(s.jsx)(z.a,{size:50}),Object(s.jsx)(z.a,{size:45})]}),Object(s.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:n.map((function(e){return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(s.jsxs)("p",{children:[e.name," : ",e.score]})})}))})]})};var S=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(b.a,{children:[Object(s.jsx)(x,{}),Object(s.jsxs)(O.c,{children:[Object(s.jsx)(O.a,{path:"/",exact:!0,component:m}),Object(s.jsx)(O.a,{path:"/riddles",component:w}),Object(s.jsx)(O.a,{path:"/leaderboard",component:k})]})]})})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.b623f394.chunk.js.map