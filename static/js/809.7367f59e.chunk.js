(self.webpackChunkss_react=self.webpackChunkss_react||[]).push([[809],{9092:(e,s,a)=>{"use strict";a.d(s,{Z:()=>n});var t=a(3543),r=a(9658),o=a(184);const n=e=>{const{snackopen:s,setSnackOpen:a}=e,n=(e,s)=>{"clickaway"!==s&&a({open:!1,severity:void 0,message:""})};return s.open&&(0,o.jsx)(t.Z,{open:s.open,autoHideDuration:6e3,onClose:n,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,o.jsx)(r.Z,{onClose:n,severity:s.severity,sx:{width:"100%"},children:s.message})})}},8997:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>h});var t=a(2791),r=a(2267),o=a(7689),n=a(1087),c=a(1134),i=a(4270),l=a(9092),d=a(9704),m=a.n(d),u=a(184);const g=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ss_user";return m().AES.encrypt(e,s).toString()},p=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ss_user";const a=m().AES.decrypt(e,s);return JSON.parse(a.toString(m().enc.Utf8))},h=()=>{var e,s,a,d;const{register:m,handleSubmit:h,formState:{errors:y,isValid:w},setValue:v}=(0,c.cI)({mode:"onChange"}),x=(0,o.s0)(),[f,b]=(0,t.useState)(!1),[j,N]=(0,t.useState)(!1),[S,Z]=(0,t.useState)({open:!1,severity:void 0,message:""});(0,t.useEffect)((()=>{!async function(){if(localStorage.getItem("usertoken"))try{"Success"===(await(0,r.H1)(String(localStorage.getItem("usertoken")))).data.status&&x("/user/dashboard/")}catch(e){Z({open:!0,severity:"warning",message:e.message})}else if(localStorage.getItem("ss_user_data")){N(!0);const e=p(String(localStorage.getItem("ss_user_data")));v("email",e.email),v("password",e.password)}else N(!1)}()}),[x]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(i.q,{children:[(0,u.jsx)("title",{children:"Login"}),(0,u.jsx)("link",{rel:"stylesheet",href:"/assets/css/Login.css"})]}),(0,u.jsx)("section",{id:"login",children:(0,u.jsx)("div",{className:"logWrapper",children:(0,u.jsxs)("div",{className:"login-wrap pt-5 pb-3",children:[(0,u.jsx)("div",{className:"img d-flex align-items-center justify-content-center",style:{backgroundImage:"url(/assets/images/logo.png)"}}),(0,u.jsx)("h1",{className:"text-left mb-0",children:"Login"}),(0,u.jsx)("p",{className:"text-left",children:"Enter your username and password to get access your account"}),(0,u.jsxs)("form",{onSubmit:h((async e=>{try{b(!0);const s=await(0,r.n$)(e);"Success"===s.data.status?(j?localStorage.setItem("ss_user_data",g(JSON.stringify({email:e.email,password:e.password}))):localStorage.removeItem("ss_user_data"),localStorage.setItem("usertoken",s.data.token),x("/user/dashboard/")):Z({open:!0,severity:"error",message:s.data.message}),b(!1)}catch(s){Z({open:!0,severity:"warning",message:s.message}),b(!1)}})),className:"login-form",children:[(0,u.jsxs)("div",{className:"Wrap_white",children:[(0,u.jsx)("div",{className:"form-group",children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{htmlFor:"usermail",className:"form-label text-bold",children:"Login"}),(0,u.jsx)("input",{type:"email",...m("email",{required:"Email is mandatory"}),className:"form-control",id:"usermail",placeholder:"youremail@mail.com"}),Boolean(null===y||void 0===y?void 0:y.email)&&(0,u.jsx)("small",{className:"form-text text-danger",style:{color:"red 1important"},children:(null===y||void 0===y?void 0:y.email)&&(null===(e=y.email)||void 0===e||null===(s=e.message)||void 0===s?void 0:s.toString())})]})}),(0,u.jsx)("div",{className:"form-group",children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{htmlFor:"userpass",className:"form-label text-bold",children:"Password"}),(0,u.jsx)("input",{type:"password",...m("password",{required:"Password is mandatory"}),className:"form-control",id:"userpass",placeholder:"********"}),Boolean(null===y||void 0===y?void 0:y.password)&&(0,u.jsx)("small",{className:"form-text text-danger",style:{color:"red !important"},children:(null===y||void 0===y?void 0:y.password)&&(null===(a=y.password)||void 0===a||null===(d=a.message)||void 0===d?void 0:d.toString())})]})}),(0,u.jsxs)("div",{className:"d-flex justify-content-between align-items-center rememberWrap",children:[(0,u.jsxs)("div",{className:"form-check mb-0",children:[(0,u.jsx)("input",{className:"form-check-input me-2",type:"checkbox",checked:j,id:"rememberMe",onChange:e=>N(e.target.checked)}),(0,u.jsx)("label",{className:"form-check-label",htmlFor:"rememberMe",children:"Remember me"})]}),(0,u.jsx)(n.rU,{to:"/user/forgotpassword",className:"text-body",children:"Forgot password"})]})]}),(0,u.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-4 pt-2",id:"btnsWrap",children:[(0,u.jsx)(n.rU,{to:"/user/register",className:"btn btn-secondary btn-lg",children:"Sign Up"}),(0,u.jsx)("button",{type:"submit",id:"loginBrn",disabled:f||!w,className:"btn btn-primary btn-lg",children:"Login"})]})]})]})})}),(0,u.jsx)(l.Z,{snackopen:S,setSnackOpen:Z})]})}},2267:(e,s,a)=>{"use strict";a.d(s,{$H:()=>y,A4:()=>_,H1:()=>n,J9:()=>h,Ml:()=>w,N$:()=>r,N_:()=>m,O9:()=>d,Of:()=>u,QX:()=>i,RE:()=>N,S:()=>k,UH:()=>b,UK:()=>g,X1:()=>j,_K:()=>p,hv:()=>x,k3:()=>v,kq:()=>f,n$:()=>o,rn:()=>l,uH:()=>Z,ul:()=>S,vo:()=>c});var t=a(3878);const r=async(e,s)=>await t.Z.post("/user/register/".concat(e),s),o=async e=>await t.Z.post("/user/login",e),n=async e=>await t.Z.get("/user/dashboard/".concat(e)),c=async()=>await t.Z.get("/user/getproducts"),i=async e=>await t.Z.get("/user/getproducts/".concat(e)),l=async e=>await t.Z.get("/user/verifyotp/".concat(e)),d=async()=>await t.Z.get("/user/productcategory"),m=async(e,s)=>await t.Z.get("/user/addordeletewishlist/".concat(e,"/").concat(s)),u=async(e,s)=>await t.Z.get("/user/addordeletecart/".concat(e,"/").concat(s)),g=async e=>await t.Z.get("/user/getcart/".concat(e)),p=async(e,s)=>await t.Z.put("/user/profileupdate/".concat(e),s),h=async(e,s)=>await t.Z.post("/user/checkout/".concat(e),s),y=async e=>await t.Z.get("/user/checkout/".concat(e)),w=async()=>await t.Z.get("https://restcountries.com/v3.1/all"),v=async e=>await t.Z.get("/user/shipping/".concat(e)),x=async(e,s)=>await t.Z.post("/user/shipping/".concat(e),s),f=async e=>await t.Z.post("/user/payment/orders",e),b=async(e,s)=>await t.Z.post("/user/payment/verify/".concat(e),s),j=async e=>await t.Z.get("/user/forgotpassword/".concat(e)),N=async e=>await t.Z.get("/user/verifyforgotpassword/".concat(e)),S=async e=>await t.Z.post("/user/updatepassword/",e),Z=async e=>await t.Z.get("/user/orderlist/".concat(e)),k=async e=>await t.Z.get("/user/getorder/".concat(e)),_=async e=>await t.Z.post("/user/downloadinvoice",{orderData:e},{responseType:"blob"})},2480:()=>{}}]);
//# sourceMappingURL=809.7367f59e.chunk.js.map