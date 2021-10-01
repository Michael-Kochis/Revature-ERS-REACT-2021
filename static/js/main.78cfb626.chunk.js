(this["webpackJsonprevature-ers-react-2021"]=this["webpackJsonprevature-ers-react-2021"]||[]).push([[0],{221:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(35),a=r.n(s),o=(r(96),r(5)),i=(r(97),r(9)),j=r(4),l=r(13),b=r(2),d=r(17),u=r.n(d),O=function(){var e=localStorage.getItem("token");return u.a.create({headers:{authorization:JSON.parse(e)},baseURL:"https://revature-ers-api-2021.herokuapp.com/api"})},h=O,m=(r(23),r(0)),p=function(){return Object(m.jsxs)("div",{id:"nav-bar",children:[Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{type:"Button",onClick:function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("userID"),window.localStorage.removeItem("userRole")},children:"Logout"})}),Object(m.jsx)(i.b,{to:"/dashboard",children:Object(m.jsx)("button",{type:"button",children:"Dashboard"})}),Object(m.jsx)(i.b,{to:"/addreimb",children:Object(m.jsx)("button",{type:"button",children:"New Reimbursement"})}),Object(m.jsx)(i.b,{to:"/pendingreimb",children:Object(m.jsx)("button",{type:"button",children:"Approve/Deny"})})]})},g={REIMB_DESCRIPTION:"",REIMB_AMOUNT:"",REIMB_TYPE_ID:0},x=function(e){var t=Object(n.useState)(g),r=Object(o.a)(t,2),c=r[0],s=r[1],a=Object(j.g)(),i=e.trigger,d=e.setTrigger,u=function(e){s(Object(b.a)(Object(b.a)({},c),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(p,{}),Object(m.jsxs)("div",{className:"list_div",children:[Object(m.jsx)("h2",{children:"Please Add Reimb"}),Object(m.jsx)("p",{children:"Fill out your Reimbursement's information"}),Object(m.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),c.REIMB_AUTHOR=localStorage.getItem("user").USER_ID,c.REIMB_SUBMITTED=Date.now(),c.REIMB_STATUS_ID=0,h().post("reimb/",c).then((function(e){d(!i)})).catch((function(e){console.log("err: ",e.response)})),a.push("./dashboard")},children:[Object(m.jsx)("label",{htmlFor:"description"}),"Description",Object(m.jsx)("input",{id:"description",type:"text",name:"REIMB_DESCRIPTION",placeholder:"stuff for business",value:c.REIMB_DESCRIPTION,onChange:u}),Object(m.jsx)("label",{htmlFor:"amount"})," Amount",Object(m.jsx)("input",{id:"amount",type:"number",name:"REIMB_AMOUNT",placeholder:"0.00",value:c.REIMB_AMOUNT,onChange:u}),Object(m.jsx)("label",{htmlFor:"type"}),"Type",Object(m.jsxs)("select",{id:"type",name:"REIMB_TYPE_ID",value:c.REIMB_TYPE_ID,onChange:u,children:[Object(m.jsx)("option",{value:"0",children:"Other"}),Object(m.jsx)("option",{value:"1",children:"Lodging"}),Object(m.jsx)("option",{value:"2",children:"Travel"}),Object(m.jsx)("option",{value:"3",children:"Food"})]}),Object(m.jsx)("button",{type:"submit",children:"Save"})]})]})]})},f=r(51),v=r.n(f),S=r(86),E=function(){return"1"==localStorage.getItem("userRole")},I=r(52);function R(e){var t=e.el,r=e.trigger,n=e.setTrigger,c=(new Date).setTime(t.REIMB_SUBMITTED),s=(new Date).setTime(t.REIMB_RESOLVED),a=function(){var e=Object(S.a)(v.a.mark((function e(c){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().put("/reimb/".concat(t.REIMB_ID),t).then((function(e){t=e.data,n(!r)})).catch((function(e){console.log("Update error:",e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t.REIMB_ID}),Object(m.jsx)("td",{children:t.REIMB_DESCRIPTION}),Object(m.jsx)("td",{children:t.REIMB_AMOUNT}),Object(m.jsx)("td",{children:Object(I.TypeToString)(t.REIMB_TYPE_ID)}),Object(m.jsx)("td",{children:Object(I.StatusToString)(t.REIMB_STATUS_ID)}),Object(m.jsx)("td",{children:t.REIMB_AUTHOR}),Object(m.jsx)("td",{children:t.REIMB_RESOLVER}),Object(m.jsx)("td",{children:new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit"}).format(c)}),Object(m.jsx)("td",{children:t.REIMB_RESOLVED&&new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit"}).format(s)}),0==t.REIMB_STATUS_ID&&E()&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),t.REIMB_RESOLVED=Date.now(),t.REIMB_RESOLVER=localStorage.getItem("userID"),t.REIMB_STATUS_ID=1,a(t)},children:"Approve"}),Object(m.jsx)("button",{onClick:function(e){t.REIMB_RESOLVED=Date.now(),t.REIMB_RESOLVER=localStorage.getItem("userID"),t.REIMB_STATUS_ID=2,a(t)},children:"Deny"})]})]})}var _=function(e){var t=Object(n.useState)(null),r=Object(o.a)(t,2),c=r[0],s=r[1],a=e.trigger,i=e.setTrigger;return Object(j.g)(),Object(n.useEffect)((function(){var e=localStorage.getItem("userID");h().get("https://revature-ers-api-2021.herokuapp.com/api/reimb/user/".concat(e)).then((function(e){return s(e.data)}))}),[a]),Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsx)("h2",{children:"My Reimbursements"}),Object(m.jsxs)("div",{className:"tablecontainer",children:[console.log(c),Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Reimb ID"}),Object(m.jsx)("th",{children:"Description"}),Object(m.jsx)("th",{children:"Amount"}),Object(m.jsx)("th",{children:"Type"}),Object(m.jsx)("th",{children:"Status"}),Object(m.jsx)("th",{children:"Author"}),Object(m.jsx)("th",{children:"Resolved By"}),Object(m.jsx)("th",{children:"Submitted"}),Object(m.jsx)("th",{children:"Resolved"})]}),c&&c.map((function(e){return Object(m.jsx)(R,{el:e,trigger:a,setTrigger:i},e.REIMB_ID)}))]})]})]})},w=r(14),D=w.a().shape({username:w.c().required("username is required").min(3,"username must be at least three characters"),password:w.c().required("password is required"),confirmPassword:w.c().required("password confirmation is required")}),T=w.a().shape({username:w.c().required("username is required").min(3,"username must be at least three characters"),password:w.c().required("password is required")});var M=function(e){var t=Object(n.useState)(!0),r=Object(o.a)(t,2),c=r[0],s=r[1],a=Object(n.useState)({username:"",password:""}),i=Object(o.a)(a,2),d=i[0],O=i[1],h=Object(n.useState)({}),g=Object(o.a)(h,2),x=g[0],f=g[1],v=Object(j.g)(),S=function(e){var t=e.target,r=t.name,n=t.type,c=t.value,a=t.checked,o="checkbox"===n?a:c;O(Object(b.a)(Object(b.a)({},d),{},Object(l.a)({},r,o))),function(e,t){w.b(T,e).validate(t).then((function(){f(Object(b.a)(Object(b.a)({},x),{},Object(l.a)({},e,"")))})).catch((function(t){t.errors&&f(Object(b.a)(Object(b.a)({},x),{},Object(l.a)({},e,t.errors[0])))})),T.isValid(d).then((function(e){s(!e)}))}(r,o)};return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsxs)("div",{id:"form-login",className:"form form-login",children:[Object(m.jsx)("h1",{children:"Login Form"}),Object(m.jsx)("div",{id:"error-login",className:"error error-login",children:x.username}),Object(m.jsx)("div",{id:"error-username",className:"error error-username"}),Object(m.jsxs)("label",{id:"label-username",htmlFor:"username",children:["Username",Object(m.jsx)("input",{id:"username",name:"username",type:"text",onChange:S,value:d.username})]}),Object(m.jsx)("div",{id:"error-password",className:"error error-password",children:x.password}),Object(m.jsxs)("label",{id:"label-password",htmlFor:"password",children:["Password",Object(m.jsx)("input",{id:"password",name:"password",type:"password",onChange:S,value:d.password})]}),Object(m.jsx)("button",{id:"button-login",className:"btn btn-login",disabled:c,onClick:function(){!function(e){var t={ERS_USERNAME:e.username,ERS_PASSWORD:e.password};u.a.post("https://revature-ers-api-2021.herokuapp.com/api/auth/login",t).then((function(e){var t=e.data.token,r=e.data.user;localStorage.setItem("token",'"'.concat(t,'"')),localStorage.setItem("userID","".concat(r.ERS_USER_ID)),localStorage.setItem("userRole","".concat(r.USER_ROLE_ID)),v.push("/dashboard")})).catch((function(e){console.log({err:e}),alert(e.response.data.message)}))}(d)},children:"Login"}),Object(m.jsx)("button",{id:"button-nav-register",className:"btn btn-nav btn-nav-register",onClick:function(){v.push("/register")},children:"Register"}),e.children]})]})};var y=function(e){var t=Object(n.useState)(null),r=Object(o.a)(t,2),c=r[0],s=r[1],a=e.trigger,i=e.setTrigger,l=Object(j.g)();return Object(n.useEffect)((function(){E()?h().get("https://revature-ers-api-2021.herokuapp.com/api/reimb/status/0").then((function(e){return s(e.data)})):l.push("/dashboard")}),[a]),Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsx)("h2",{children:"My Reimbursements"}),Object(m.jsxs)("div",{className:"tablecontainer",children:[console.log(c),Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Reimb ID"}),Object(m.jsx)("th",{children:"Description"}),Object(m.jsx)("th",{children:"Amount"}),Object(m.jsx)("th",{children:"Type"}),Object(m.jsx)("th",{children:"Status"}),Object(m.jsx)("th",{children:"Author"}),Object(m.jsx)("th",{children:"Resolved By"}),Object(m.jsx)("th",{children:"Submitted"}),Object(m.jsx)("th",{children:"Resolved"})]}),c&&c.map((function(e){return Object(m.jsx)(R,{el:e,trigger:a,setTrigger:i},e.REIMB_ID)}))]})]})]})},B=r(38),N="FETCH_START",A="FETCH_SUCCESS",C="FETCH_FAIL",U="EDIT_CLASS",k="DELETE_CLASS",F="ADD_CLASS",P="ADD_USER";var L=Object(B.b)(null,{createUser:function(e){return{type:P,payload:e}}})((function(e){var t=Object(n.useState)(!0),r=Object(o.a)(t,2),c=(r[0],r[1]),s=Object(n.useState)({username:"",password:"",confirmPassword:""}),a=Object(o.a)(s,2),i=a[0],d=a[1],O=Object(n.useState)({}),h=Object(o.a)(O,2),g=h[0],x=h[1],f=Object(j.g)(),v=function(e){var t=e.target,r=t.name,n=t.type,s=t.value,a=t.checked,o="checkbox"===n?a:s;d(Object(b.a)(Object(b.a)({},i),{},Object(l.a)({},r,o))),function(e,t){w.b(D,e).validate(t).then((function(){x(Object(b.a)(Object(b.a)({},g),{},Object(l.a)({},e,"")))})).catch((function(t){t.errors&&x(Object(b.a)(Object(b.a)({},g),{},Object(l.a)({},e,t.errors[0])))})),D.isValid(i).then((function(e){return c(!e)}))}(r,o)};return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsxs)("div",{id:"form-register",className:"form form-register",children:[Object(m.jsx)("h1",{children:"Register Form"}),Object(m.jsx)("div",{id:"error-register",className:"error error-register"}),Object(m.jsx)("div",{id:"error-username",className:"error error-username",children:g.username}),Object(m.jsxs)("label",{id:"label-username",htmlFor:"username",children:["Username",Object(m.jsx)("input",{id:"username",name:"username",type:"text",onChange:v,value:i.username})]}),Object(m.jsx)("div",{id:"error-password",className:"error error-password",children:g.password}),Object(m.jsxs)("label",{id:"label-password",htmlFor:"password",children:["Password",Object(m.jsx)("input",{id:"password",name:"password",type:"password",onChange:v,value:i.password})]}),Object(m.jsx)("div",{id:"error-confirm-password",className:"error error-confirm-password",children:g.confirmPassword}),Object(m.jsxs)("label",{id:"label-confirm-password",htmlFor:"confirmPassword",children:["Confirm Password",Object(m.jsx)("input",{id:"confirmPassword",name:"confirmPassword",type:"password",onChange:v,value:i.confirmPassword})]}),Object(m.jsx)("button",{id:"button-register",className:"btn btn-register",onClick:function(){!function(e){var t={ERS_USERNAME:e.username,ERS_PASSWORD:e.password,USER_ROLE_ID:0};u.a.post("https://revature-ers-api-2021.herokuapp.com/api/auth/register",t).then((function(e){console.log(e.data),f.push("/login")})).catch((function(e){console.log({err:e})}))}(i)},children:"Register"}),Object(m.jsx)("button",{id:"button-nav-login",className:"btn nav-btn nav-login",onClick:function(){f.push("/login")},children:"Login"}),e.children]})]})})),q=r(91),V=["component"],H=function(e){var t=e.component,r=Object(q.a)(e,V);return Object(m.jsx)(j.b,Object(b.a)(Object(b.a)({},r),{},{render:function(e){return localStorage.getItem("token")?Object(m.jsx)(t,Object(b.a)({},e)):Object(m.jsx)(j.a,{to:"/login"})}}))};var Y=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),r=t[0],c=t[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)("div",{className:"logoAndHeading"}),Object(m.jsxs)(j.d,{children:[Object(m.jsx)(H,{path:"/dashboard",children:Object(m.jsx)(_,{trigger:r,setTrigger:c})}),Object(m.jsx)(H,{path:"/addreimb",component:x}),Object(m.jsx)(j.b,{path:"/login",children:Object(m.jsx)(M,{})}),Object(m.jsx)(H,{path:"/pendingreimb",component:y}),Object(m.jsx)(j.b,{path:"/register",component:L}),Object(m.jsx)(j.b,{exact:!0,path:"/",component:M})]})]})})},J=r(39),G=r(90),W=r(10),X={user:{username:"",password:"",role:"",skip:!1},classes:[],isFetching:!1,error:""},z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.b,K=Object(J.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!0});case A:return Object(b.a)(Object(b.a)({},e),{},{classes:t.payload,isFetching:!1});case C:return Object(b.a)(Object(b.a)({},e),{},{error:t.payload,isFetching:!1});case U:var r=e.item.find((function(e){return e.id===t.payload}));return Object(b.a)(Object(b.a)({},e),{},{classes:r});case k:var n=e.classes.filter((function(e){return t.payload!==e.id}));return Object(b.a)(Object(b.a)({},e),{},{classes:n});case F:return Object(b.a)(Object(b.a)({},e),{},{classes:[].concat(Object(W.a)(e.classes),[t.payload])});case P:return Object(b.a)(Object(b.a)({},e),{},{user:t.payload});default:return e}}),z(Object(J.a)(G.a)));a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(B.a,{store:K,children:Object(m.jsx)(Y,{})})}),document.getElementById("root"))},23:function(e,t,r){},52:function(e,t){e.exports={StatusToString:function(e){switch(e=parseInt(e)){case 1:return"Approved";case 2:return"Denied";default:return"Pending"}},TypeToString:function(e){switch(e=parseInt(e)){case 1:return"Lodging";case 2:return"Travel";case 3:return"Food";default:return"Other"}}}},96:function(e,t,r){},97:function(e,t,r){}},[[221,1,2]]]);
//# sourceMappingURL=main.78cfb626.chunk.js.map