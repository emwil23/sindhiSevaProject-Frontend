"use strict";(self.webpackChunksindhi_front=self.webpackChunksindhi_front||[]).push([[843],{60843:function(e,r,s){s.r(r);var a=s(1413),l=s(44925),n=s(29439),t=s(72791),i=s(59741),c=s.n(i),d=s(53202),o=s(91541),m=s(80177),u=s(57123),h=s(83734),x=s(87309),j=s(68747),p=s(79286),v=s(66023),g=s(13248),f=s(4149),Z=s(51797),b=s(54502),P=s(84914),w=s(59434),y=s(16871),N=s(80184),D=["key","name"];r.default=function(){var e=(0,t.useState)(!0),r=(0,n.Z)(e,2),s=r[0],i=r[1],I=(0,w.I0)(),E=(0,y.s0)();return(0,N.jsx)("div",{className:"container my-5",children:(0,N.jsxs)("div",{className:"row align-items-center",children:[(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsxs)(o.Z,{onFinish:function(e){if(e.dob){var r=new Date(null===e||void 0===e?void 0:e.dob);e.dob="".concat(r.getFullYear(),"-").concat(r.getMonth()<10?"0".concat(r.getMonth()):r.getMonth(),"-").concat(r.getDate()<10?"0".concat(r.getDate()):r.getDate())}if(e.anniversary){var s=new Date(e.anniversary);e.anniversary="".concat(s.getFullYear(),"-").concat(s.getMonth()<10?"0".concat(s.getMonth()):s.getMonth(),"-").concat(s.getDate()<10?"0".concat(s.getDate()):s.getDate())}delete e.confirmPassword,(0,f.j0)("/signup",e).then((function(e){if(e.isExisting)return(0,Z.Y)("User with Email already exists");I((0,P.bO)()),I((0,b.ur)(e)),(0,Z.Y)("SignUp Successful"),E("/",{replace:!0})})).catch((function(){return(0,Z.Y)("Problem occured while signup","Retry after some time.")}))},layout:"vertical",children:[(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(o.Z.Item,{label:"First Name",name:"firstName",rules:[{required:!0,message:"Please enter first name",type:"string"}],children:(0,N.jsx)(m.Z,{placeholder:"Enter your first name"})})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(o.Z.Item,{label:"Last Name",name:"lastName",rules:[{required:!0,message:"Please enter last name",type:"string"}],children:(0,N.jsx)(m.Z,{placeholder:"Enter your last name"})})})]}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(o.Z.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please enter the password",type:"string"},function(e){e.getFieldValue;return{validator:function(e,r){return!r||r.length>=6?Promise.resolve():Promise.reject(new Error("Password length should be more than 6!"))}}}],children:(0,N.jsx)(m.Z.Password,{placeholder:"Enter the password"})})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(o.Z.Item,{label:"Confirm Password",name:"confirmPassword",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please enter same password",type:"string"},function(e){var r=e.getFieldValue;return{validator:function(e,s){return s&&r("password")!==s?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:(0,N.jsx)(m.Z.Password,{placeholder:"Confirm the password"})})})]}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(o.Z.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please enter the Email",type:"email"}],children:(0,N.jsx)(m.Z,{placeholder:"Enter your email"})})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(o.Z.Item,{label:"Date of Birth",name:"dob",rules:[{required:!0,message:"Please select date",type:"date"}],children:(0,N.jsx)(u.Z,{placeholder:"select date",className:"w-100",format:"YYYY-MM-DD"})})})]}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(o.Z.Item,{label:"Gender",name:"gender",rules:[{required:!0,message:"Please select the gender",type:"string"}],children:(0,N.jsx)(h.Z,{placeholder:"Select gender",children:g.P3.map((function(e,r){return(0,N.jsx)(h.Z.Option,{value:e,children:e},r)}))})})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(o.Z.Item,{label:"Profession",name:"profession",rules:[{required:!0,message:"Please select the Profession",type:"string"}],children:(0,N.jsx)(h.Z,{placeholder:"Select Profession",children:g.Eg.map((function(e,r){return(0,N.jsx)(h.Z.Option,{value:e,children:e},r)}))})})})]}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(o.Z.Item,{label:"Phone",name:"mobile",rules:[{required:!0,message:"Please enter mobile number",type:"string",len:10}],children:(0,N.jsx)(m.Z,{type:"number",placeholder:"Enter Mobile Number"})})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(o.Z.Item,{label:"Blood Group",name:"blood",rules:[{required:!0,message:"Please enter blood group",type:"string"}],children:(0,N.jsx)(h.Z,{placeholder:"Select Blood Group",children:g.K3.map((function(e,r){return(0,N.jsx)(h.Z.Option,{value:e,children:e},r)}))})})})]}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(o.Z.Item,{label:"Qualification",name:"qualification",rules:[{required:!0,message:"Please enter qualification",type:"string"}],children:(0,N.jsx)(h.Z,{placeholder:"Select",children:g.C9.map((function(e,r){return(0,N.jsx)(h.Z.Option,{value:e,children:e},r)}))})})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(o.Z.Item,{label:"Marital Status",name:"maritalStatus",rules:[{required:!0,message:"Please select marital status",type:"string"}],children:(0,N.jsx)(h.Z,{placeholder:"Select",onChange:function(e){i("Married"!==e)},children:g.zM.map((function(e,r){return(0,N.jsx)(h.Z.Option,{value:e,children:e},r)}))})})})]}),(0,N.jsx)(o.Z.Item,{label:"Anniversary Date",name:"anniversary",rules:[{required:!1,message:"Please select date",type:"date"}],hidden:s,children:(0,N.jsx)(u.Z,{placeholder:"select date",className:"w-100",format:"YYYY-MM-DD"})}),(0,N.jsx)(o.Z.Item,{label:"Address",name:"address",rules:[{required:!0,message:"Please enter address",type:"string"}],children:(0,N.jsx)(v.Z,{rows:3,placeholder:"Enter Address"})}),(0,N.jsx)(o.Z.List,{name:"members",children:function(e,r){var s=r.add,n=r.remove;return(0,N.jsxs)(N.Fragment,{children:[e.map((function(e){var r=e.key,s=e.name,t=(0,l.Z)(e,D);return(0,N.jsxs)("div",{className:"row mx-1",children:[(0,N.jsx)(o.Z.Item,(0,a.Z)((0,a.Z)({},t),{},{name:[s,"relationId"],rules:[{required:!0,message:"Please enter member UID",min:8,max:9}],className:"col-5",children:(0,N.jsx)(m.Z,{placeholder:"Enter Exsiting member id"})})),(0,N.jsx)(o.Z.Item,(0,a.Z)((0,a.Z)({},t),{},{name:[s,"relationName"],rules:[{required:!0,message:"Please select relation"}],className:"col-5 ms-1",children:(0,N.jsx)(h.Z,{placeholder:"Select Relation",children:g.d8.map((function(e,r){return(0,N.jsx)(h.Z.Option,{value:e,children:e},r)}))})})),(0,N.jsx)(j.Z,{onClick:function(){return n(s)},className:"col-1 mt-2"})]},r)})),(0,N.jsx)(o.Z.Item,{children:(0,N.jsx)(x.Z,{type:"dashed",onClick:function(){return s()},block:!0,icon:(0,N.jsx)(p.Z,{}),children:"Add Member"})})]})}}),(0,N.jsx)("div",{children:(0,N.jsx)(o.Z.Item,{children:(0,N.jsx)(x.Z,{type:"primary",htmlType:"submit",children:"Register"})})})]})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)(c(),{animationData:d,loop:!1})})]})})}},13248:function(e,r,s){s.d(r,{C9:function(){return t},Eg:function(){return l},K3:function(){return n},P3:function(){return a},d8:function(){return c},ll:function(){return d},ud:function(){return o},yu:function(){return m},zM:function(){return i}});var a=["Male","Female","Others"],l=["Doctor","Engineer","Others"],n=["A+","A-","AB+","AB-","B+","B-","O+","O-"],t=["10th","12th","Graduate","PostGraduate","PHD"],i=["Married","Unmarried","Divorced","Widow","Widower"],c=["Father","Mother","Husband","Wife","Sister","Brother"],d=[{label:"Active",value:"Active"},{label:"Inactive",value:"Inactive"}],o=[{label:"Doctor",value:"Doctor"},{label:"Engineer",value:"Engineer"},{label:"Other",value:"Other"}],m=[{label:"10th",value:"10th"},{label:"12th",value:"12th"},{label:"Graduate",value:"Graduate"},{label:"PostGraduate",value:"PostGraduate"},{label:"PHD",value:"PHD"}]}}]);
//# sourceMappingURL=843.af3fa735.chunk.js.map