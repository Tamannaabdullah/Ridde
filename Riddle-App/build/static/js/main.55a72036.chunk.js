(this["webpackJsonpriddle-app"]=this["webpackJsonpriddle-app"]||[]).push([[0],{40:function(e,t,s){},41:function(e,t,s){},47:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(2),a=s.n(c),r=s(32),i=s.n(r),l=(s(40),s(10)),j=s(5),o=s(16),b=s(12),d=s(33),h=[{title:"Home",path:"/",icon:Object(n.jsx)(o.b,{}),cName:"nav-text"},{title:"Riddles",path:"/riddles",icon:Object(n.jsx)(d.a,{}),cName:"nav-text"},{title:"Leaderboard",path:"/leaderboard",icon:Object(n.jsx)(o.a,{}),cName:"nav-text"}],u=(s(41),s(0));var x=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),s=t[0],a=t[1],r=function(){return a(!s)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(u.b.Provider,{value:{color:"#fff"},children:[Object(n.jsx)("div",{className:"navbar",children:Object(n.jsx)(b.b,{to:"#",className:"menu-bars",children:Object(n.jsx)(j.a,{onClick:r})})}),Object(n.jsx)("nav",{className:s?"nav-menu active":"nav-menu",children:Object(n.jsxs)("ul",{className:"nav-menu-items",onClick:r,children:[Object(n.jsx)("li",{className:"navbar-toggle",children:Object(n.jsx)(b.b,{to:"#",className:"menu-bars",children:Object(n.jsx)(o.c,{})})}),h.map((function(e,t){return Object(n.jsx)("li",{className:e.cName,children:Object(n.jsxs)(b.b,{to:e.path,children:[e.icon,Object(n.jsx)("span",{children:e.title})]})},t)}))]})})]})})},O=s(3);s(47);var m=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"titleStyle",children:"Are you the Riddle Master?"}),Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",color:"#8874a3"},children:[Object(n.jsx)(j.b,{size:75}),Object(n.jsx)(j.b,{size:85}),Object(n.jsx)(j.b,{size:100}),Object(n.jsx)(j.b,{size:85}),Object(n.jsx)(j.b,{size:75})]}),Object(n.jsxs)("div",{className:"homeContainer",children:[Object(n.jsx)("p",{className:"hack",children:"Hackathon 2020"}),Object(n.jsx)("p",{className:"intro",children:"During the next 24 hours riddles will be added onto this site one per hour, they will appear at random so make sure to keep checking the site!"}),Object(n.jsx)("p",{className:"intro",children:"Gain Gems by being one of the first four people to answer these riddles!"}),Object(n.jsx)("p",{className:"intro",children:"The person with the most gems will win a prize, will that be you?"})]}),Object(n.jsx)("p",{className:"start",children:"Let the Games Begin!"})]})},p=s(13),f=s.n(p),v=s(17),y=s(18),w=s.n(y),N=(s(66),"Q7");var g=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(N),i=Object(l.a)(r,2),o=i[0],b=i[1],d=Object(c.useState)(""),h=Object(l.a)(d,2),u=h[0],x=h[1],O=function(){var e=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.a.post("/api/answer",{name:s,question:o,answer:u});case 4:200===e.sent.status?alert("You're response has been submitted for validation by our expert team!"):alert("Sorry something went wrong!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Sorry, something went wrong!!!");case 11:return e.prev=11,a(""),x(""),b(N),e.abrupt("return");case 17:case"end":return e.stop()}}),e,null,[[1,8,11,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"title",children:"Riddles"}),Object(n.jsx)("div",{className:"containerRiddle",children:Object(n.jsx)("p",{className:"riddlestyles",children:"Q7: There are 2 people near the river and both of them want to get on the other side. The boat can only take one of them but they got across, how?"})}),Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:["\u200b\u200b\u200b\u200b\u200b",Object(n.jsx)("h1",{className:"answer",children:" SUBMIT YOUR ANSWER HERE"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("label",{htmlFor:"name",className:"name",children:"Name:"}),Object(n.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)},value:s,name:"name"}),Object(n.jsx)("label",{htmlFor:"question",className:"name",children:"  Question number"}),Object(n.jsx)("select",{name:"question",children:Object(n.jsx)("option",{value:N,onClick:function(e){return b(e.target.value)},children:N})}),Object(n.jsx)("label",{htmlFor:"answer",className:"name",children:"  Answer:"}),Object(n.jsx)("input",{type:"text",onChange:function(e){return x(e.target.value)},value:u}),Object(n.jsx)("button",{type:"submit",onClick:function(e){return O(e)},children:"Submit!"})]}),Object(n.jsxs)("p",{className:"pastAnswer",children:["Q6:Because it has Greece at the bottom",Object(n.jsx)("br",{}),"Q5: The taxi driver was walking!",Object(n.jsx)("br",{}),"Q4: The couples and the married people!",Object(n.jsx)("br",{}),"Q3: Keyboard",Object(n.jsx)("br",{}),"Q2 Answer: Take the letters F and E off of the word five. This leaves you with IV which is four in roman numerals.",Object(n.jsx)("br",{}),"Q1 Answer: At that moment, the time and day could be written as: 12:34, 5/6/78.",Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{className:"gems",children:[Object(n.jsx)(j.b,{size:75}),Object(n.jsx)(j.b,{size:85}),Object(n.jsx)(j.b,{size:100}),Object(n.jsx)(j.b,{size:85}),Object(n.jsx)(j.b,{size:75})]})]})]})},k=s(14);s(67);var z=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(v.a)(f.a.mark((function e(){var t,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("/api/scores");case 3:t=e.sent,s=t.data,console.log(s),a(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsxs)("div",{className:"leaderboard",children:[Object(n.jsx)("h1",{className:"titleStyles",children:"Leaderboard"}),Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",color:"#B2A1D3"},children:[Object(n.jsx)(k.a,{size:45}),Object(n.jsx)(k.a,{size:50}),Object(n.jsx)(k.a,{size:60}),Object(n.jsx)(k.a,{size:50}),Object(n.jsx)(k.a,{size:45})]}),Object(n.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:s.map((function(e){return Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsxs)("p",{children:[e.name," : ",e.score]})})}))})]})};var S=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(x,{}),Object(n.jsxs)(O.c,{children:[Object(n.jsx)(O.a,{path:"/",exact:!0,component:m}),Object(n.jsx)(O.a,{path:"/riddles",component:g}),Object(n.jsx)(O.a,{path:"/leaderboard",component:z})]})]})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.55a72036.chunk.js.map