(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(39)},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),l=(a(34),a(10)),s=a(2),m=a(1),u=a(7),i=function(e){var t=Object(s.m)(),a=new Date,n=function(t){e.delete(t.target.getAttribute("a-key"))},o=e.posts.map(function(o,c){return r.a.createElement("div",{key:c,className:"card-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-top-container"},r.a.createElement("h5",{className:"card-subtitle text-muted"},o.user.username," | Posted ",function(e){var t=new Date(e),n=a-t;return n<36e5?"".concat(Math.floor(n/6e4)," min"):n<864e5?"".concat(Math.floor(n/36e5)," h"):"".concat(Math.floor(n/864e5)," days")}(o.updated_at)," ","ago"),r.a.createElement(u.a,{className:"card-dropdown"},r.a.createElement(u.a.Toggle,{className:"card-dropdown",variant:"secondary",size:"sm"}),r.a.createElement(u.a.Menu,null,r.a.createElement(u.a.Item,{"a-key":o.id,onClick:function(){return t("/post/update/".concat(o.id))},disabled:o.user.username!==e.user},"Edit Post"),r.a.createElement(u.a.Item,{"a-key":o.id,onClick:n,disabled:o.user.username!==e.user},"Delete Post")))),r.a.createElement("h3",{className:"card-title"},r.a.createElement("a",{href:"/post/".concat(o.id)},o.title)))))}),c=r.a.createElement("div",{className:"vw-100 vh-50 d-flex align-items-center justify-content-center"},r.a.createElement("h4",null,"No posts."));return r.a.createElement("div",null,e.posts.length>0?o:c)};a(36);var d=function(e){var t=Object(s.m)();return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"nav-container"},r.a.createElement("div",{className:"nav-menu"},r.a.createElement("a",{href:"/home",className:"app-title"},"Chatbox"),r.a.createElement("div",{className:"nav-elements"},r.a.createElement("a",{href:"/home",className:"nav-elements"},"Home"))),e.user?r.a.createElement("div",{className:"nav-elements"},r.a.createElement("button",{onClick:function(){localStorage.clear(),t("/login")},className:"profile-menu"},"LogOut")):r.a.createElement("div",{className:"profile-menu"},"You are not signed in.")))},h=a(5),f=a(6),p=function(e){var t=e.info,a=function(t){e.onChange(Object(f.a)({},e.info,Object(h.a)({},t.target.id,t.target.value)))};return r.a.createElement("div",{className:"post-form-container"},r.a.createElement("form",{className:"post-form",onSubmit:function(a){return function(t,a,n){e.submit(t,a,n)}(a,t.title,t.body)}},e.homepage?r.a.createElement("legend",{className:"post-form-title"},"What's on your mind?"):r.a.createElement("legend",{className:"post-form-title"},"Edit Post"),r.a.createElement("label",{className:"form-label"},"Title"),r.a.createElement("input",{type:"title",id:"title",className:"form-control",required:!0,value:t.title,onChange:function(e){return a(e)}}),r.a.createElement("label",{className:"form-label"},"Body"),r.a.createElement("textarea",{type:"body",id:"body",className:"form-control",required:!0,onChange:function(e){return a(e)},value:t.body}),r.a.createElement("button",{type:"submit",className:"form-btn",disabled:!(t.title&&t.body)},"Post")))},E=function(){var e=Object(s.m)(),t=Object(n.useState)({title:"",body:""}),a=Object(m.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)([]),h=Object(m.a)(l,2),f=h[0],E=h[1],g=Object(n.useState)(0),b=Object(m.a)(g,2),v=b[0],N=b[1],w=Object(n.useState)(""),j=Object(m.a)(w,2),y=j[0],O=j[1],S=localStorage.getItem("username"),k=function(){var t="http://localhost:3000/posts?order=".concat(v,"&search=").concat(y),a=localStorage.getItem("token");a?fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(a)}}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){E(e)}).catch(function(){return e("/login")}):e("/login")};Object(n.useEffect)(function(){return k()},[y,v]);var C=function(e){N(e)};return r.a.createElement("div",null,r.a.createElement(d,{user:localStorage.getItem("username")}),r.a.createElement("main",{className:"mainpage"},r.a.createElement("div",{className:"new-post"},r.a.createElement(p,{submit:function(e,t,a){if(e.preventDefault(),0!==t.length&&0!==a.length){var n={post:{title:t,body:a}};c({title:"",body:""});var r=localStorage.getItem("token");fetch("http://localhost:3000/posts",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(n)}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(){k()}).catch(function(e){return console.log(e.message)})}},onChange:c,info:o,homepage:!0})),r.a.createElement("hr",{className:"hr"}),r.a.createElement("div",{className:"container-row"},r.a.createElement("h3",null,"Posts"),r.a.createElement("form",{className:"form-input"},r.a.createElement("input",{className:"post-input",type:"text",placeholder:"Search here",onChange:function(e){O(e.target.value)},value:y})),r.a.createElement(u.a,null,r.a.createElement(u.a.Toggle,{id:"dropdown-basic"},["Newest to oldest","Oldest to newest"][parseInt(v)]),r.a.createElement(u.a.Menu,null,r.a.createElement(u.a.Item,{onClick:function(){return C(0)}},"Newest to oldest"),r.a.createElement(u.a.Item,{onClick:function(){return C(1)}},"Oldest to newest")))),r.a.createElement("br",null),r.a.createElement(i,{posts:f,delete:function(e){var t="http://localhost:3000/posts/".concat(e),a=localStorage.getItem("token");console.log(t),fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(){return k()}).catch(function(e){return console.log(e.message)})},user:S})))},g=function(e){var t=function(t){e.delete(t.target.getAttribute("a-key"))},a=new Date,n=r.a.createElement("p",null,"No Comments");return e.comments.length>0&&(n=e.comments.map(function(n,o){return r.a.createElement("div",{key:o,className:"card-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-top-container"},r.a.createElement("h5",{className:"card-subtitle text-muted"},n.user.username," | Posted"," ",function(e){var t=new Date(e),n=a-t;return n<36e5?"".concat(Math.floor(n/6e4)," min"):n<864e5?"".concat(Math.floor(n/36e5)," h"):"".concat(Math.floor(n/864e5)," days")}(n.updated_at)," ago"),r.a.createElement(u.a,{className:"card-dropdown"},r.a.createElement(u.a.Toggle,{className:"card-dropdown",variant:"secondary",size:"sm"}),r.a.createElement(u.a.Menu,null,r.a.createElement(u.a.Item,{"a-key":n.id,onClick:t,disabled:e.user!==n.user.username},"Delete Comment")))),r.a.createElement("h3",{className:"card-text"},n.body))))})),r.a.createElement("div",null,n)},b=function(e){return r.a.createElement("div",{className:"post-form-container"},r.a.createElement("form",{className:"post-form",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("div",{className:"form-floating"},r.a.createElement("input",{type:"body",id:"body",className:"form-control",required:!0,onChange:function(t){return function(t){e.onChange(t.target.value)}(t)},value:e.comment,placeholder:""}),r.a.createElement("label",{className:"form-label"},"Comment...")),r.a.createElement("button",{type:"submit",className:"form-btn",disabled:!e.comment},"Post")))},v=function(e){var t=new Date,a=r.a.createElement("div",null);return e.post.user&&(a=r.a.createElement("div",{className:"card-comment"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-subtitle text-muted"},e.post.user.username," | Posted"," ",function(e){var a=new Date(e),n=t-a;return n<36e5?"".concat(Math.floor(n/6e4)," min"):n<864e5?"".concat(Math.floor(n/36e5)," h"):"".concat(Math.floor(n/864e5)," days")}(e.post.updated_at)," ago"),r.a.createElement("h5",{className:"card-title-comment"},e.post.title),r.a.createElement("h5",{className:"card-text-comment"},e.post.body)))),r.a.createElement("div",null,a)},N=function(){var e=Object(s.o)(),t=Object(s.m)(),a=Object(n.useState)([]),o=Object(m.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)([]),h=Object(m.a)(i,2),f=h[0],p=h[1],E=Object(n.useState)(""),N=Object(m.a)(E,2),w=N[0],j=N[1],y=Object(n.useState)(0),O=Object(m.a)(y,2),S=O[0],k=O[1],C=Object(n.useState)(""),I=Object(m.a)(C,2),T=I[0],A=I[1],P=localStorage.getItem("username");Object(n.useEffect)(function(){var t=localStorage.getItem("token"),a="http://localhost:3000/posts/".concat(e.id);t&&fetch(a,{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){p(e),console.log(e)}).catch(function(e){return console.log(e.message)})},[]),Object(n.useEffect)(function(){return D()},[T,S]);var D=function(){var a="http://localhost:3000/comments/".concat(e.id,"?order=").concat(S,"&search=").concat(T),n=localStorage.getItem("token");n?fetch(a,{method:"GET",headers:{Authorization:"Bearer ".concat(n)}}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){l(e)}).catch(function(){return t("/login")}):t("/login")},M=function(e){k(e)};return r.a.createElement("div",null,r.a.createElement(d,{user:localStorage.getItem("username")}),r.a.createElement("main",{className:"mainpage"},r.a.createElement(v,{post:f}),r.a.createElement("div",{className:"new-post"},r.a.createElement(b,{onSubmit:function(t){if(t.preventDefault(),0!==w.length){var a={comment:{post_id:e.id,body:w}};j("");var n=localStorage.getItem("token");n&&fetch("http://localhost:3000/comments",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(a)}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){D()}).catch(function(e){return console.log(e.message)})}},onChange:j,comment:w})),r.a.createElement("hr",null),r.a.createElement("div",{className:"container-row"},r.a.createElement("h3",null,"Comments"),r.a.createElement("form",{className:"form-input"},r.a.createElement("input",{className:"post-input",type:"text",placeholder:"Search here",onChange:function(e){A(e.target.value)},value:T})),r.a.createElement(u.a,null,r.a.createElement(u.a.Toggle,{id:"dropdown-basic"},["Newest to oldest","Oldest to newest"][parseInt(S)]),r.a.createElement(u.a.Menu,null,r.a.createElement(u.a.Item,{onClick:function(){return M(0)}},"Newest to oldest"),r.a.createElement(u.a.Item,{onClick:function(){return M(1)}},"Oldest to newest")))),r.a.createElement("br",null),r.a.createElement(g,{comments:c,delete:function(e){var a="http://localhost:3000/comments/".concat(e),n=localStorage.getItem("token");console.log(a),fetch(a,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then(function(e){if(e.ok)return e.json();throw t("/home"),new Error("Unauthorised user.")}).then(function(){return D()}).catch(function(e){return console.log(e.message)})},user:P})))},w=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(m.a)(t,2),o=a[0],c=a[1],l=function(e){c(Object(f.a)({},o,Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"Auth-form-container"},r.a.createElement("form",{className:"Auth-form",onSubmit:function(t){t.preventDefault(),e.signIn(o)}},r.a.createElement("div",{className:"Auth-form-content"},r.a.createElement("h3",{className:"Auth-form-title"},"Sign In"),r.a.createElement("div",{className:"form-group mt-3"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{className:"form-control mt-1",name:"username",value:o.username,placeholder:"Enter username",onChange:l})),r.a.createElement("div",{className:"form-group mt-3"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control mt-1 mb-2",placeholder:"Enter password",name:"password",value:o.password,onChange:l})),e.error?r.a.createElement("p",{style:{color:"red"}},e.error):null,r.a.createElement("div",{className:"d-grid gap-2 mt-3"},r.a.createElement("button",{type:"submit",className:"auth-btn",disabled:!(o.username&&o.password)},"Submit")),r.a.createElement("p",{className:"register text-center mt-2"},"Don't have an account? ",r.a.createElement("a",{href:"/signup"},"Sign up")))))},j=function(){var e=Object(s.m)(),t=Object(n.useState)({user:{},error:""}),a=Object(m.a)(t,2),o=a[0],c=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement(d,{user:localStorage.getItem("username")}),r.a.createElement(w,{signIn:function(t){fetch("http://localhost:3000/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user:{username:t.username,password:t.password}})}).then(function(e){return e.json()}).then(function(t){console.log(t),t.token?(localStorage.setItem("token",t.token),localStorage.setItem("username",t.username),localStorage.setItem("user_id",t.user_id),c(Object(f.a)({},o,{user:t.user})),e("/home")):c(Object(f.a)({},o,{error:t.error}))})},error:o.error}))},y=function(e){var t=Object(n.useState)({username:"",password:"",firstName:"",lastName:""}),a=Object(m.a)(t,2),o=a[0],c=a[1],l=function(e){c(Object(f.a)({},o,Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"Auth-form-container"},r.a.createElement("form",{className:"Auth-form",onSubmit:function(t){t.preventDefault(),e.signUp(o)}},r.a.createElement("div",{className:"Auth-form-content"},r.a.createElement("h3",{className:"Auth-form-title"},"Sign In"),r.a.createElement("div",{className:"form-group mt-3"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{className:"form-control mt-1",placeholder:"Username",name:"username",value:o.username,onChange:l})),r.a.createElement("div",{className:"form-group mt-3"},r.a.createElement("label",null,"First name"),r.a.createElement("input",{className:"form-control mt-1",placeholder:"First name",name:"firstName",value:o.firstname,onChange:l})),r.a.createElement("div",{className:"form-group mt-3"},r.a.createElement("label",null,"Last name"),r.a.createElement("input",{className:"form-control mt-1",placeholder:"Last name",name:"lastName",value:o.lastname,onChange:l})),r.a.createElement("div",{className:"form-group mt-3"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{className:"form-control mt-1",placeholder:"Password",name:"password",type:"password",value:o.password,onChange:l})),r.a.createElement("div",{className:"d-grid gap-2 mt-3"},r.a.createElement("button",{type:"submit",className:"auth-btn",disabled:!(o.username&&o.password&&o.firstName&&o.lastName)},"Submit")),r.a.createElement("div",{className:"text-center"},"Already registered? ",r.a.createElement("a",{href:"/login"},"Sign in")))))},O=function(){var e=Object(s.m)(),t=Object(n.useState)({user:{},error:""}),a=Object(m.a)(t,2),o=a[0],c=a[1];Object(n.useEffect)(function(){console.log("hit");var e=localStorage.getItem("token");e&&fetch("http://localhost:3000/profile",{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){return e.json()}).then(function(e){e.id&&c(Object(f.a)({},o,{user:e}))})},[]);return r.a.createElement("div",{className:"App"},r.a.createElement(d,{user:localStorage.getItem("username")}),r.a.createElement(y,{signUp:function(t){fetch("http://localhost:3000/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user:{username:t.username,password:t.password,first_name:t.firstName,last_name:t.lastName}})}).then(function(e){return e.json()}).then(function(t){c(Object(f.a)({},o,{user:t})),e("/home")})}}))},S=function(){var e=Object(s.m)(),t=Object(s.o)(),a=Object(n.useState)({title:"",body:""}),o=Object(m.a)(a,2),c=o[0],l=o[1];Object(n.useEffect)(function(){var e=localStorage.getItem("token"),a="http://localhost:3000/posts/".concat(t.id);e&&fetch(a,{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){l({title:e.title,body:e.body})}).catch(function(e){return console.log(e.message)})},[]);return r.a.createElement("div",null,r.a.createElement(d,{user:localStorage.getItem("username")}),r.a.createElement("main",{className:"mainpage"},r.a.createElement("div",{className:"new-post"},r.a.createElement(p,{submit:function(a,n,r){a.preventDefault();var o="http://localhost:3000/posts/".concat(t.id);if(0!==n.length&&0!==r.length){var c={post:{title:n,body:r}};l({title:"",body:""});var s=localStorage.getItem("token");fetch(o,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify(c)}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(){e("/home")}).catch(function(e){return console.log(e.message)})}},onChange:l,info:c,homepage:!1}))))};a(37),a(38);var k=function(){return r.a.createElement(l.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/home",element:r.a.createElement(E,null)}),r.a.createElement(s.a,{path:"/login",element:r.a.createElement(j,null)}),r.a.createElement(s.a,{path:"/signup",element:r.a.createElement(O,null)}),r.a.createElement(s.a,{path:"/post/:id",element:r.a.createElement(N,null)}),r.a.createElement(s.a,{path:"/post/update/:id",element:r.a.createElement(S,null)}),r.a.createElement(s.a,{path:"/*",element:r.a.createElement(E,null)})))},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),C()}},[[26,1,2]]]);
//# sourceMappingURL=main.cabe854e.chunk.js.map