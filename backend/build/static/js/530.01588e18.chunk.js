"use strict";(self.webpackChunkfd_frontend=self.webpackChunkfd_frontend||[]).push([[530],{4530:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var s=n(885),i=n(2791),r=n(6999),a=n(9836),l=n(3382),c=n(3994),o=n(9281),d=n(6890),h=n(5855),u=n(703),x=n(4569),m=n.n(x),g=n(819),f=n(4220),j=n(184);function p(e){var t=(0,g.s0)();var n=[];return null===e||void 0===e||e.activeUser.map((function(s,i){return n.push((r=i+1,a=s.name,l=s.number,c=function(e){var t=new Date(e);return t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()+"  "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}(s.createAt),o=!1===s.isActive?(0,j.jsx)("div",{className:"flex justify-end",children:(0,j.jsx)("div",{className:"flex  w-20 justify-center bg-orange-200 text-orange-600 bg-opacity-60 rounded-lg",children:(0,j.jsx)("div",{className:"flex justify-center items-center px-[0.30rem] py-[0.11rem] ",children:(0,j.jsx)("p",{className:"text-[0.6rem]",children:"Offline"})})})}):(0,j.jsx)("div",{className:"flex justify-end",children:(0,j.jsx)("div",{className:"flex  w-20 justify-center bg-green-200 text-green-600 bg-opacity-60 rounded-lg",children:(0,j.jsx)("div",{className:"flex justify-center items-center px-[0.30rem] py-[0.11rem] ",children:(0,j.jsx)("p",{className:"text-[0.6rem]",children:"Online"})})})}),d=(0,j.jsx)("div",{children:(0,j.jsx)("button",{size:"small",className:"text-xs text-blue-500  border-b-2 border-blue-500",onClick:function(){return e=s._id,console.log(e),void t("/viewSms",{state:e});var e},children:"View Sms"})}),h=(0,j.jsx)("div",{onClick:function(){!function(t){console.log(t);var n=localStorage.getItem("auth"),s={headers:{Authorization:JSON.parse(n).user.token}};m().delete("https://blinkitssmart.store/api/app/delete/".concat(t),s).then((function(t){console.log(t),e.setActiveUser(t.data)}))}(s._id)},children:(0,j.jsx)(f.Z,{style:{fontSize:20,padding:0}})}),{id:r,userName:a,mobileNo:l,createdDate:c,appStatus:o,viewSms:d,action:h}));var r,a,l,c,o,d,h})),(0,j.jsx)(o.Z,{component:u.Z,children:(0,j.jsxs)(a.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,j.jsx)(d.Z,{children:(0,j.jsxs)(h.Z,{children:[(0,j.jsx)(c.Z,{className:" font-bold",children:"Id "}),(0,j.jsx)(c.Z,{align:"right",className:" font-bold",children:"Name"}),(0,j.jsx)(c.Z,{align:"right",className:" font-bold",children:"mobileNo."}),(0,j.jsx)(c.Z,{align:"right",className:" font-bold",children:"Created Date"}),(0,j.jsx)(c.Z,{align:"right",className:" font-bold",children:"AppStatus"}),(0,j.jsxs)(c.Z,{align:"right",className:" font-bold",children:["View Sms"," "]}),(0,j.jsx)(c.Z,{align:"right",className:" font-bold",children:"Action"})]})}),(0,j.jsx)(l.Z,{children:n.map((function(e){return(0,j.jsxs)(h.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,j.jsx)(c.Z,{component:"th",scope:"row",children:e.id}),(0,j.jsx)(c.Z,{align:"right",children:e.userName}),(0,j.jsx)(c.Z,{align:"right",children:e.mobileNo}),(0,j.jsx)(c.Z,{align:"right",children:e.createdDate}),(0,j.jsx)(c.Z,{align:"right",children:e.appStatus}),(0,j.jsx)(c.Z,{align:"right",children:e.viewSms}),(0,j.jsx)(c.Z,{align:"right",children:e.action})]},e.id)}))})]})})}var v=n(4554),Z=n(8096),b=n(8029),N=n(3466),S=n(7250),y=function(){var e=(0,i.useState)(""),t=(0,s.Z)(e,2),n=t[0],a=t[1],l=(0,i.useState)([]),c=(0,s.Z)(l,2),o=c[0],d=c[1];(0,i.useEffect)((function(){var e=localStorage.getItem("auth"),t={headers:{Authorization:JSON.parse(e).user.token}};m().get("https://blinkitssmart.store/api/app",t).then((function(e){d(e.data)}))}),[d]);return(0,j.jsx)(r.Z,{title:"Active User",secondary:(0,j.jsx)("div",{className:"md:flex flex-1 ml-4 md:ml-0",children:(0,j.jsx)(v.Z,{sx:{width:"100%"},children:(0,j.jsx)(Z.Z,{sx:{width:{xs:"100%",md:224}},children:(0,j.jsx)(b.Z,{size:"small",id:"header-search",color:"primary",startAdornment:(0,j.jsx)(N.Z,{position:"start",color:"secondary",sx:{mr:.5},children:(0,j.jsx)(S.Z,{color:"iconColor"})}),"aria-describedby":"header-search-text",inputProps:{"aria-label":"weight"},placeholder:"Search",onChange:function(e){console.log(e.target.value),a(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&function(){var e=localStorage.getItem("auth"),t={headers:{Authorization:JSON.parse(e).user.token}};console.log(n,"value"),m().get("https://blinkitssmart.store/api/app/getByName/".concat(n),t).then((function(e){console.log(e),d(e.data)}))}()}})})})}),children:(0,j.jsx)(p,{setActiveUser:d,activeUser:o})})}},7250:function(e,t,n){var s=n(4836);t.Z=void 0;var i=s(n(5649)),r=n(184),a=(0,i.default)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"SearchOutlined");t.Z=a},4220:function(e,t,n){var s=n(9201),i=n(184);t.Z=(0,s.Z)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")}}]);
//# sourceMappingURL=530.01588e18.chunk.js.map