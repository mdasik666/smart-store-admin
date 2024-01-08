"use strict";(self.webpackChunkss_react=self.webpackChunkss_react||[]).push([[31],{9092:(s,e,a)=>{a.d(e,{Z:()=>n});var t=a(3543),o=a(9658),r=a(184);const n=s=>{const{snackopen:e,setSnackOpen:a}=s,n=(s,e)=>{"clickaway"!==e&&a({open:!1,severity:void 0,message:""})};return e.open&&(0,r.jsx)(t.Z,{open:e.open,autoHideDuration:6e3,onClose:n,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,r.jsx)(o.Z,{onClose:n,severity:e.severity,sx:{width:"100%"},children:e.message})})}},9031:(s,e,a)=>{a.r(e),a.d(e,{default:()=>d});var t=a(2791),o=a(4270),r=a(7689),n=a(1134),c=a(2267),i=a(9092),l=a(184);const d=()=>{var s,e,a,d;const m=(0,r.s0)(),{handleSubmit:u,register:g,formState:{errors:p,isValid:w},getValues:y}=(0,n.cI)({mode:"onChange"}),[h,f]=(0,t.useState)({}),[v,x]=(0,t.useState)(!1),[j,Z]=(0,t.useState)({open:!1,severity:void 0,message:""});(0,t.useEffect)((()=>{!async function(){if(localStorage.getItem("forgottoken"))try{x(!0);const s=await(0,c.RE)(String(localStorage.getItem("forgottoken")));if("Failed"===s.data.status)m("/user/forgotpassword");else{const{email:e}=s.data.userData;f({email:e})}x(!1)}catch(s){x(!1),Z({open:!0,severity:"warning",message:s.message})}else m("/user/forgotpassword")}()}),[m]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.q,{children:[(0,l.jsx)("title",{children:"Reset"}),(0,l.jsx)("link",{rel:"stylesheet",href:"/assets/css/Reset.css"})]}),(0,l.jsx)("section",{id:"login",children:(0,l.jsx)("div",{className:"logWrapper",children:(0,l.jsxs)("div",{className:"login-wrap pt-5 pb-3",children:[(0,l.jsx)("div",{className:"img d-flex align-items-center justify-content-center",style:{backgroundImage:'url("/assets/images/logo.png")'}}),(0,l.jsx)("h1",{className:"text-left mb-0",children:"Reset Password"}),(0,l.jsx)("form",{onSubmit:u((async s=>{try{const e=await(0,c.ul)({email:h.email,password:s.password});"Success"===e.data.status?(localStorage.removeItem("forgottoken"),m("/")):Z({open:!0,severity:"error",message:e.data.messsage})}catch(e){Z({open:!0,severity:"warning",message:e.message})}})),className:"login-form",children:(0,l.jsxs)("div",{className:"Wrap_white",children:[(0,l.jsx)("div",{className:"form-group",children:(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{htmlFor:"forgotMail",className:"form-label text-bold",children:"New Password"}),(0,l.jsx)("input",{...g("password",{required:"Password is mandatory"}),type:"password",className:"form-control",id:"newPass",placeholder:"***************"}),Boolean(null===p||void 0===p?void 0:p.password)&&(0,l.jsx)("small",{className:"form-text text-danger",style:{color:"red 1important"},children:(null===p||void 0===p?void 0:p.password)&&(null===(s=p.password)||void 0===s||null===(e=s.message)||void 0===e?void 0:e.toString())})]})}),(0,l.jsx)("div",{className:"form-group",children:(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{htmlFor:"forgotMail",className:"form-label text-bold",children:"Confirm New Password"}),(0,l.jsx)("input",{...g("confirmPassword",{required:"Confirm password is mandatory",validate:s=>{if(s!==y("password"))return"Password not matched"}}),type:"password",className:"form-control",id:"newConPass",placeholder:"***************"}),Boolean(null===p||void 0===p?void 0:p.confirmPassword)&&(0,l.jsx)("small",{className:"form-text text-danger",style:{color:"red 1important"},children:(null===p||void 0===p?void 0:p.confirmPassword)&&(null===(a=p.confirmPassword)||void 0===a||null===(d=a.message)||void 0===d?void 0:d.toString())})]})}),(0,l.jsx)("div",{className:"d-flex justify-content-center align-items-center mt-4 pt-2",id:"btnsWrap",children:(0,l.jsx)("button",{type:"submit",disabled:!w||v,className:"btn btn-primary btn-lg",children:"Reset Password"})})]})})]})})}),(0,l.jsx)(i.Z,{snackopen:j,setSnackOpen:Z})]})}},2267:(s,e,a)=>{a.d(e,{$H:()=>y,A4:()=>P,H1:()=>n,J9:()=>w,Ml:()=>h,N$:()=>o,N_:()=>m,O9:()=>d,Of:()=>u,QX:()=>i,RE:()=>b,S:()=>S,UH:()=>j,UK:()=>g,X1:()=>Z,_K:()=>p,hv:()=>v,k3:()=>f,kq:()=>x,n$:()=>r,rn:()=>l,uH:()=>k,ul:()=>N,vo:()=>c});var t=a(3878);const o=async(s,e)=>await t.Z.post("/user/register/".concat(s),e),r=async s=>await t.Z.post("/user/login",s),n=async s=>await t.Z.get("/user/dashboard/".concat(s)),c=async()=>await t.Z.get("/user/getproducts"),i=async s=>await t.Z.get("/user/getproducts/".concat(s)),l=async s=>await t.Z.get("/user/verifyotp/".concat(s)),d=async()=>await t.Z.get("/user/productcategory"),m=async(s,e)=>await t.Z.get("/user/addordeletewishlist/".concat(s,"/").concat(e)),u=async(s,e)=>await t.Z.get("/user/addordeletecart/".concat(s,"/").concat(e)),g=async s=>await t.Z.get("/user/getcart/".concat(s)),p=async(s,e)=>await t.Z.put("/user/profileupdate/".concat(s),e),w=async(s,e)=>await t.Z.post("/user/checkout/".concat(s),e),y=async s=>await t.Z.get("/user/checkout/".concat(s)),h=async()=>await t.Z.get("https://restcountries.com/v3.1/all"),f=async s=>await t.Z.get("/user/shipping/".concat(s)),v=async(s,e)=>await t.Z.post("/user/shipping/".concat(s),e),x=async s=>await t.Z.post("/user/payment/orders",s),j=async(s,e)=>await t.Z.post("/user/payment/verify/".concat(s),e),Z=async s=>await t.Z.get("/user/forgotpassword/".concat(s)),b=async s=>await t.Z.get("/user/verifyforgotpassword/".concat(s)),N=async s=>await t.Z.post("/user/updatepassword/",s),k=async s=>await t.Z.get("/user/orderlist/".concat(s)),S=async s=>await t.Z.get("/user/getorder/".concat(s)),P=async s=>await t.Z.post("/user/downloadinvoice",{orderData:s},{responseType:"blob"})}}]);
//# sourceMappingURL=31.3292715b.chunk.js.map