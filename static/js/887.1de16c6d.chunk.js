"use strict";(self.webpackChunksindhi_front=self.webpackChunksindhi_front||[]).push([[887],{56862:function(e,n,t){t.r(n);var i=t(1413),s=t(29439),a=t(72791),r=t(59741),c=t.n(r),o=t(53202),l=t(87309),u=t(4149),d=t(51797),m=t(59434),f=t(84914),h=t(16871),j=t(54502),x=t(1352),g=t(56971),v=t.n(g),p=t(80184);n.default=function(){var e=(0,a.useState)("otp"),n=(0,s.Z)(e,2),t=n[0],r=n[1],N=(0,a.useState)(),Z=(0,s.Z)(N,2),T=Z[0],b=Z[1],C=(0,a.useState)(),Y=(0,s.Z)(C,2),k=Y[0],P=Y[1],y=(0,a.useState)(0),O=(0,s.Z)(y,2),F=O[0],S=O[1],w=(0,m.I0)(),I=(0,h.s0)(),R=function(e){!function(e){return(0,x.yf)(e)}(e)?(0,d.Y)("Not a valid phone number"):(0,u.j0)("/otp-login/".concat(e)).then((function(e){if(e.userNotFound)return(0,d.Y)("User Not Found");(0,d.Y)(e.message),r("otp-verification")}))},L=function(e){(0,u.j0)("/otp-verification/".concat(T,"/").concat(e)).then((function(e){var n;e.varified?((0,d.Y)("Verification successful"),n={mobile:T},(0,u.j0)("/login",n).then((function(e){w((0,j.ur)(e)),(0,d.Y)("Logged In"),w((0,f.bO)()),I("/",{replace:!0})})).catch((function(e){var n,t=null===(n=e.response)||void 0===n?void 0:n.data;(0,d.Y)(t.error.message)}))):(0,d.Y)("Invalid OTP")}))};return(0,p.jsx)("div",{className:"container my-5",children:(0,p.jsxs)("div",{className:"row align-items-center",children:[(0,p.jsx)("div",{className:"col-md-6",children:"otp"===t?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x.ZP,{placeholder:"Enter phone number",value:T,onChange:b,defaultCountry:"IN"}),(0,p.jsxs)("div",{className:"text-end",children:[(0,p.jsx)(l.Z,{className:"mt-4",onClick:function(){return R(T)},children:"Send OTP"}),(0,p.jsx)("span",{children:"\xa0or\xa0"}),(0,p.jsx)(l.Z,{className:"mt-4",onClick:function(){return I("/auth/register")},children:"Register"})]})]}):(0,p.jsxs)("div",{className:"d-flex align-items-center flex-column ",children:[(0,p.jsx)(v(),{value:k,onChange:P,autoFocus:!0,OTPLength:4,otpType:"number",disabled:!1}),(0,p.jsxs)("div",{className:"d-flex align-items-center",children:[(0,p.jsx)(g.ResendOTP,{onResendClick:function(){F>=3?(0,d.Y)("Too many Attepmts","Please try again later"):(0,u.j0)("/otp-send/".concat(T)).then((function(e){(0,d.Y)(e.message),S(F+1)}))},renderButton:function(e){return(0,p.jsx)(l.Z,(0,i.Z)((0,i.Z)({disabled:F>=3,className:"mt-4"},e),{},{children:0!==e.remainingTime?"Please wait for ".concat(e.remainingTime," sec"):"Resend"}))},renderTime:function(){return a.Fragment}}),(0,p.jsx)(l.Z,{className:"mt-4 ms-3",onClick:function(){return L(k)},children:"Verify OTP"})]})]})}),(0,p.jsx)("div",{className:"col-md-6",children:(0,p.jsx)(c(),{animationData:o,loop:!1})})]})})}}}]);
//# sourceMappingURL=887.1de16c6d.chunk.js.map