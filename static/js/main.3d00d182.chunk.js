(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),s=t.n(l),c=t(19),i=t(82),o=t(3),m=t(4),u=t(5),d=t(7),p=t(6),h=t(8),E=t(20),f=t(9),b=t(89),g=t(85),v=t.n(g),N=t(13),y=t.n(N),k=t(23),w=t(86),_=t.n(w),O=(Object({NODE_ENV:"production",PUBLIC_URL:"/project-citarum"}).REACT_APP_SERVER,_.a.create({baseURL:"https://server-citarum.herokuapp.com"})),j="USER_CREATE",C="USER_UPDATE",x="USER_VERIFY",A="ERROR_ADD",S="ERROR_REMOVE",I="AUTH_LOGIN",R="AUTH_LOGOUT",L="NOTIFY_ADD",T="NOTIFY_REMOVE",U="FETCH_ALL",P="FETCH_REMOVE",D=function(e){return{type:A,payload:{message:e}}},F=function(){return{type:I}},M=function(){return localStorage.removeItem("token"),{type:R}},H=function(e){return{type:L,payload:{message:e}}};t(119);function q(){return r.a.createElement("div",{className:"greeting"},r.a.createElement("div",{className:"greeting__text"},r.a.createElement("h2",null,"Selamat Datang"),r.a.createElement("p",null,"CitarumRiver adalah sebuah aplikasi berbasis web yang berguna untuk melakukan monitoring terhadap sungai Citarum, yang dapat melakukan pengukuran volume air dari sungai dan juga memberikan pemberitahuan jika volume sungai tidak seperti biasanya."),r.a.createElement(f.b,{to:"/auth/login"},"Pelajari selengkapnya...")))}var B=t(24),V=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:""},t.handleInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(B.a)({},n,r))},t.handleFormSubmit=function(e){e.preventDefault(),t.props.loginUser(t.state)},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login__form"},r.a.createElement("div",{className:"form__login-text"},r.a.createElement("h2",null,"Masuk akun"),r.a.createElement("p",null,"Citarum River Authentication System")),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.handleInputChange,placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",required:!0})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},r.a.createElement("i",{className:"fas fa-lock"}))),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.handleInputChange,placeholder:"Password","aria-label":"Password","aria-describedby":"basic-addon1",required:!0})),r.a.createElement("p",{className:"mt-4 mb-4"},"Belum punya akun? ",r.a.createElement(f.b,{to:"/auth/register"},"daftar")),r.a.createElement("button",{type:"submit",className:"btn primary--button"},"Masuk"))))}}]),a}(n.Component),Y=Object(o.b)(null,{errorActionAdd:D,loginUser:function(e){return function(){var a=Object(k.a)(y.a.mark(function a(t){var n,r,l;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=e.email,r=e.password,a.next=4,O.post("/auth/login",{email:n,password:r});case 4:if(200===(l=a.sent).status){a.next=8;break}throw new Error("Login gagal!");case 8:t(F()),localStorage.setItem("token",l.data.payload.token),t(H("Masuk akun berhasil!, selamat datang!")),t({type:j,payload:l.data.payload}),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),t(D("Masuk gagal!"));case 17:case"end":return a.stop()}},a,null,[[0,14]])}));return function(e){return a.apply(this,arguments)}}()}})(V),K=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={firstname:"",lastname:"",email:"",password:""},t.handleInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(B.a)({},n,r))},t.handleFormSubmit=function(e){e.preventDefault(),t.props.createUser(t.state)},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"register"},r.a.createElement("div",{className:"register__form"},r.a.createElement("div",{className:"form__register-text"},r.a.createElement("h2",null,"Daftar akun"),r.a.createElement("p",null,"Citarum River Authentication System")),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{type:"text",name:"firstname",value:this.state.firstname,onChange:this.handleInputChange,className:"form-control",placeholder:"Firstname",required:!0})))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{type:"text",name:"lastname",value:this.state.lastname,onChange:this.handleInputChange,className:"form-control",placeholder:"Lastname",required:!0}))))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"input-email"},r.a.createElement("i",{className:"fas fa-envelope"}))),r.a.createElement("input",{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.handleInputChange,placeholder:"Email","aria-label":"Email","aria-describedby":"input-password",required:!0})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"input-password"},r.a.createElement("i",{className:"fas fa-lock"}))),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.handleInputChange,placeholder:"Password","aria-label":"Password","aria-describedby":"input-password",required:!0})),r.a.createElement("p",{className:"mt-4 mb-4"},"Sudah punya akun? ",r.a.createElement(f.b,{to:"/auth/login"},"masuk")),r.a.createElement("button",{type:"submit",className:"btn btn-danger"},"Daftar"))))}}]),a}(n.Component),z=Object(o.b)(null,{createUser:function(e){return function(){var a=Object(k.a)(y.a.mark(function a(t){var n,r,l,s,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=e.firstname,r=e.lastname,l=e.email,s=e.password,a.next=4,O.post("/users",{firstname:n,lastname:r,email:l,password:s});case 4:if(c=a.sent,console.log(c),201===c.status){a.next=9;break}throw new Error("Terjadi kesalahan saat mendaftarkan user!");case 9:t(F()),localStorage.setItem("token",c.data.payload.token),t(H("Registrasi berhasil, terimakasih telah mendaftar!")),t({type:j,payload:c.data.payload}),a.next=18;break;case 15:a.prev=15,a.t0=a.catch(0),t(D("Terjadi kesalahan saat mendaftarkan user!"));case 18:case"end":return a.stop()}},a,null,[[0,15]])}));return function(e){return a.apply(this,arguments)}}()}})(K),G=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).onClickErrorDismiss=function(){t.props.errorActionRemove()},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,this.props.isAuth&&r.a.createElement(E.a,{to:"/home"}),this.props.hasError&&r.a.createElement("div",{className:"my-modal"},r.a.createElement("div",{className:"my-modal__content animated bounceIn"},r.a.createElement("h3",null,"Galat!, terjadi kesalahan"),r.a.createElement("p",null,this.props.errorMessage),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.onClickErrorDismiss},"Tutup"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 p-5 animated fadeInLeft delay-1s"},r.a.createElement("div",{className:"p-5"},r.a.createElement("div",{className:"login__header-text"},r.a.createElement("h1",{className:"primary--text"},"Citarum",r.a.createElement("span",{style:{color:"#434343"}},"River")),r.a.createElement("h3",null,"Monitoring system")),r.a.createElement(E.b,{path:"/auth/",exact:!0,component:q}),r.a.createElement(E.b,{path:"/auth/login",render:function(){return r.a.createElement(Y,{changeErrorState:e.changeErrorState})}}),r.a.createElement(E.b,{path:"/auth/register",component:z}))),r.a.createElement("div",{className:"col-md-6 login__right-ct--bandung p-0 animated fadeInRight"},r.a.createElement("div",{className:"right-ct__white-ct"}))))}}]),a}(r.a.Component),W=Object(o.b)(function(e){return console.log(e.error),{hasError:e.error.hasError,errorMessage:e.error.message,isAuth:e.auth.isAuth}},{errorActionRemove:function(){return{type:S}}})(G);var J=Object(o.b)(function(e){return{isAdmin:e.user.admin}},{authLogout:M})(function(e){return r.a.createElement("div",{className:"sidebar animated fadeInLeft delay-1s faster"},r.a.createElement("div",{className:"sidebar__text"},r.a.createElement("h1",null,"Citarum",r.a.createElement("span",{style:{color:"#434343"}},"River")),r.a.createElement("h3",null,"Monitoring System")),r.a.createElement("div",{className:"sidebar__menu"},r.a.createElement("ul",{className:"menu__list"},r.a.createElement("li",{className:"list__item"},r.a.createElement(f.c,{to:"/home/",exact:!0,activeClassName:"is-active"},"Menu Awal")),r.a.createElement("li",{className:"list__item"},r.a.createElement(f.c,{to:"/home/profile",activeClassName:"is-active"},"Informasi Profil")),e.isAdmin&&r.a.createElement("li",{className:"list__item"},r.a.createElement(f.c,{to:"/home/manage",activeClassName:"is-active"},"Kelola Pengguna")),r.a.createElement("li",{className:"list__item"},r.a.createElement("a",{href:"/logout",onClick:function(a){a.preventDefault(),window.confirm("Apakah anda yakin?")&&e.authLogout()}},"Keluar")))))}),X=t(53),Q=t(31),Z=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={lat:null,long:null,errLoc:!1,data:[0,0,0,0,0]},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.get("/antares/getparticular").then(function(a){var t=a.data.map(function(e){return parseFloat(e.val.split(",")[0])});e.setState({data:Object(X.a)(t)})}),this.RTE=setInterval(function(){O.get("/antares/getlatest").then(function(a){var t=parseFloat(a.data.val.split(",")[0]),n=e.state.data;n.pop(),n.unshift(t),e.setState({data:Object(X.a)(n)})})},5e3),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(function(a){e.setState({lat:a.coords.latitude,long:a.coords.longitude})},function(){e.setState({errLoc:!0})})}},{key:"getLatitude",value:function(){return this.state.lat?r.a.createElement("h5",null,this.state.lat):this.state.errLoc?r.a.createElement("h5",null,"Tidak diketahui"):r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}},{key:"getLongitude",value:function(){return this.state.long?r.a.createElement("h5",null,this.state.long):this.state.errLoc?r.a.createElement("h5",null,"Tidak diketahui"):r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}},{key:"render",value:function(){var e=this.props.user,a=e.firstname,t=e.lastname,n=e.admin,l={labels:["1H","2H","3H","4H","5H"],datasets:[{label:"Today",data:this.state.data,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)"],borderWidth:1}]};return r.a.createElement("div",{className:"main animated zoomIn faster"},r.a.createElement("div",{className:"main__text-header"},n?r.a.createElement("h2",null,"".concat(a," ").concat(t," (Administrator)")):r.a.createElement("h2",null,"".concat(a," ").concat(t)),r.a.createElement("h4",null,"Selamat datang kembali")),r.a.createElement("div",{className:"location"},r.a.createElement("h4",null,"Info Lokasi"),r.a.createElement("ul",{className:"location__list-menu"},r.a.createElement("li",{className:"list-menu__item"},r.a.createElement("div",{className:"item__text"},r.a.createElement("h5",null,"Bandung"),r.a.createElement("span",null,"Wilayah"))),r.a.createElement("li",{className:"list-menu__item"},r.a.createElement("div",{className:"item__text"},this.getLatitude(),r.a.createElement("span",null,"Latitude"))),r.a.createElement("li",{className:"list-menu__item"},r.a.createElement("div",{className:"item__text"},this.getLongitude(),r.a.createElement("span",null,"Langitude"))))),r.a.createElement("div",{className:"river-chart"},r.a.createElement("h4",{className:"mb-4"},"Sungai Citarum"),r.a.createElement("ul",{className:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",id:"pills-home-tab","data-toggle":"pill",href:"#pills-home",role:"tab","aria-controls":"pills-home","aria-selected":"true"},"Realtime")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",id:"pills-profile-tab","data-toggle":"pill",href:"#pills-profile",role:"tab","aria-controls":"pills-profile","aria-selected":"false"},"History")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",id:"pills-contact-tab","data-toggle":"pill",href:"#pills-contact",role:"tab","aria-controls":"pills-contact","aria-selected":"false"},"Summary"))),r.a.createElement("div",{className:"tab-content",id:"pills-tabContent"},r.a.createElement("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"},r.a.createElement(Q.b,{data:l})),r.a.createElement("div",{className:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab"},r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",{className:"text-center"},"Past Week"),r.a.createElement(Q.b,{data:l})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",{className:"text-center"},"Past Month"),r.a.createElement(Q.b,{data:l})))),r.a.createElement("div",{className:"tab-pane fade",id:"pills-contact",role:"tabpanel","aria-labelledby":"pills-contact-tab"},r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(Q.a,{data:{datasets:[{data:[10,20,30],backgroundColor:["rgba(255, 99, 132, 1)","rgba(255, 205, 86, 1)","rgba(54, 162, 235, 1)"]}],labels:["Red","Yellow","Blue"]}})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card mb-3 bg-primary text-white"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},"Ph"))),r.a.createElement("div",{className:"card mb-3 bg-warning text-white"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},"Lat"))),r.a.createElement("div",{className:"card mb-3 bg-danger text-white"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},"Lang")))))))))}}]),a}(r.a.Component),$=Object(o.b)(function(e){return{isAuth:e.auth.isAuth,user:e.user}})(Z),ee=t(40),ae=t.n(ee),te=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={_id:t.props.user._id,firstname:t.props.user.firstname,lastname:t.props.user.lastname,email:t.props.user.email,oldpassword:"",password:""},t.handleInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(B.a)({},n,r))},t.handleFormSubmit=function(e){e.preventDefault(),t.props.updateUser(t.state),t.setState({oldpassword:"",password:""})},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.user,a=e.firstname,t=e.lastname,n=e.email;return r.a.createElement("div",{className:"profile mb-5 animated zoomIn faster"},r.a.createElement("div",{className:"profile__header"},r.a.createElement("div",{className:"header__user-profile"},r.a.createElement("div",{className:"user-profile__image"},r.a.createElement("img",{src:ae.a,alt:"profile"})),r.a.createElement("div",{className:"user-profile__text"},r.a.createElement("h3",null,"".concat(a," ").concat(t)),r.a.createElement("p",null,n)))),r.a.createElement("div",{className:"profile__update"},r.a.createElement("h4",{className:"mt-5 mb-5"},"Informasi profil"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"firstname"},"Nama lengkap: "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{type:"text",name:"firstname",value:this.state.firstname,onChange:this.handleInputChange,className:"form-control",placeholder:"Firstname",required:!0})))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{type:"text",name:"lastname",value:this.state.lastname,onChange:this.handleInputChange,className:"form-control",placeholder:"Lastname",required:!0}))))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Alamat surel:"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"input-email"},r.a.createElement("i",{className:"fas fa-envelope"}))),r.a.createElement("input",{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.handleInputChange,placeholder:"Email","aria-label":"Email","aria-describedby":"input-password",required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Kata sandi (lama):"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"input-password"},r.a.createElement("i",{className:"fas fa-lock"}))),r.a.createElement("input",{type:"password",className:"form-control",name:"oldpassword",value:this.state.oldpassword,onChange:this.handleInputChange,placeholder:"Kata sandi lama","aria-label":"Password","aria-describedby":"input-password",required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Kata sandi (baru):"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"input-password"},r.a.createElement("i",{className:"fas fa-lock"}))),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.handleInputChange,placeholder:"Kata sandi baru","aria-label":"Password","aria-describedby":"input-password",required:!0}))),r.a.createElement("button",{type:"submit",className:"btn btn-danger mt-3"},"Perbarui profile"))))}}]),a}(n.Component),ne=Object(o.b)(function(e){return{user:e.user}},{updateUser:function(e){return function(){var a=Object(k.a)(y.a.mark(function a(t){var n,r,l,s,c,i,o;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=e.firstname,r=e.lastname,l=e.email,s=e.password,c=e.oldpassword,i=e._id,a.next=4,O.patch("/users/".concat(i),{firstname:n,lastname:r,email:l,oldpassword:c,password:s},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:if(200===(o=a.sent).status){a.next=8;break}throw new Error("Terjadi kesalahan saat mendaftarkan user!");case 8:t(F()),localStorage.setItem("token",o.data.payload.token),t(H("Update informasi akun berhasil!")),t({type:C,payload:o.data.payload}),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),t(H("Update informasi akun gagal!"));case 17:case"end":return a.stop()}},a,null,[[0,14]])}));return function(e){return a.apply(this,arguments)}}()}})(te),re=(t(80),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).handleButtonClick=function(e){window.confirm("Apakah anda yakin? ")&&t.props.deleteUser(e)},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchAllUsers()}},{key:"render",value:function(){var e=this,a=this.props.users.map(function(a){return r.a.createElement(le,{key:a._id,user:a,onClick:e.handleButtonClick})});return r.a.createElement("div",{className:"manage animated zoomIn faster"},r.a.createElement("div",{className:"manage__header-text"},r.a.createElement("h3",null,"Kelola Pengguna"),r.a.createElement("p",null,"Pusat kelola pengguna (admin)")),r.a.createElement("div",{className:"manage__user-list"},a))}}]),a}(n.Component));function le(e){return r.a.createElement("div",{className:"user-list__item"},r.a.createElement("div",{className:"user-list__image"},r.a.createElement("img",{src:ae.a,alt:"profile"})),r.a.createElement("div",{className:"user-list__text"},r.a.createElement("button",{className:"btn btn-outline-danger float-right mt-2",onClick:function(){e.onClick(e.user._id)}},"Hapus"),r.a.createElement("h3",null,"".concat(e.user.firstname," ").concat(e.user.lastname)),r.a.createElement("p",null,e.user.email)))}var se=Object(o.b)(function(e){return{users:e.users}},{fetchAllUsers:function(){return function(){var e=Object(k.a)(y.a.mark(function e(a){var t,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),e.next=4,O.get("/users",{headers:{Authorization:"Bearer ".concat(t)}});case 4:if(200===(n=e.sent).status){e.next=8;break}throw new Error("Terdapat masalah saat mendapatkan informasi pengguna!");case 8:console.log(n.data.users),a({type:U,payload:n.data.users}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),a(H("Mendapatkan informasi seluruh pengguna gagal!"));case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(a){return e.apply(this,arguments)}}()},deleteUser:function(e){return function(){var a=Object(k.a)(y.a.mark(function a(t){var n;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=localStorage.getItem("token"),a.next=4,O.delete("/users/".concat(e),{headers:{Authorization:"Bearer ".concat(n)}});case 4:if(200===a.sent.status){a.next=8;break}throw new Error("Terdapat masalah saat menghapus pengguna!");case 8:t(H("Pengguna terhapus!")),t({type:P,payload:{_id:e}}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),t(H("Hapus pengguna gagal!"));case 15:case"end":return a.stop()}},a,null,[[0,12]])}));return function(e){return a.apply(this,arguments)}}()}})(re),ce=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(E.b,{path:"/home/",exact:!0,component:$}),r.a.createElement(E.b,{path:"/home/profile",exact:!0,component:ne}),r.a.createElement(E.b,{path:"/home/manage",exact:!0,component:se}))}}]),a}(n.Component),ie=Object(o.b)(function(e){return{isAuth:e.auth.isAuth,user:e.user}})(ce);function oe(){return r.a.createElement("div",{className:"notification animated fadeInRight delay-1s faster"},r.a.createElement("h3",null,"Notifikasi"),r.a.createElement("div",{className:"notification__alert-list"},r.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},r.a.createElement("strong",null,"Holy guacamole!")," You should check in on some of those fields below.",r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"alert alert-primary alert-dismissible fade show",role:"alert"},r.a.createElement("strong",null,"Holy guacamole!")," You should check in on some of those fields below.",r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert"},r.a.createElement("strong",null,"Holy guacamole!")," You should check in on some of those fields below.",r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"alert alert-success alert-dismissible fade show",role:"alert"},r.a.createElement("strong",null,"Holy guacamole!")," You should check in on some of those fields below.",r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))))}var me=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).onClickNotifyDismiss=function(){t.props.notifyRemove()},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.notify.hasNotify&&r.a.createElement("div",{className:"my-modal"},r.a.createElement("div",{className:"my-modal__content animated bounceIn"},r.a.createElement("h3",null,"Pemberitahuan"),r.a.createElement("p",null,this.props.notify.message),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.onClickNotifyDismiss},"Tutup"))),r.a.createElement("div",{className:"home container-fluid animated fadeIn"},!this.props.isAuth&&r.a.createElement(E.a,{to:"/auth/login"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement(J,null)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(ie,null)),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(oe,null)))))}}]),a}(r.a.Component),ue=Object(o.b)(function(e){return{user:e.user,isAuth:e.auth.isAuth,notify:e.notify}},{notifyRemove:function(){return{type:T}}})(me);b.a.configure();var de=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");v.a.isEmpty(e)?(localStorage.removeItem("token"),this.props.authLogout()):this.props.userTokenVerify(e)}},{key:"redirectRender",value:function(){return"/"===window.location.pathname&&this.props.isAuth?r.a.createElement(E.a,{to:"/home"}):r.a.createElement(E.a,{to:"/auth"})}},{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(E.b,{path:"/auth",component:W}),r.a.createElement(E.b,{path:"/home",component:ue}),this.redirectRender())}}]),a}(r.a.Component),pe=Object(o.b)(function(e){return{isAuth:e.auth.isAuth}},{authLogout:M,userTokenVerify:function(e){return function(){var a=Object(k.a)(y.a.mark(function a(t){var n,r;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.post("/auth/verify",{token:e});case 3:if(200===(n=a.sent).status){a.next=8;break}throw r=new Error("Token tidak dapat diverifikasi!"),localStorage.removeItem("token"),r;case 8:t(F()),localStorage.setItem("token",e),t({type:x,payload:n.data.payload}),a.next=17;break;case 13:a.prev=13,a.t0=a.catch(0),localStorage.removeItem("token"),t(D("Token sudah tidak berlaku, silahkan masuk kembali!"));case 17:case"end":return a.stop()}},a,null,[[0,13]])}));return function(e){return a.apply(this,arguments)}}()}})(de),he=Object(c.c)({error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case A:return{hasError:!0,message:a.payload.message};case S:return{hasError:!1};default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case j:case x:return a.payload;case C:return Object.assign({},e,a.payload);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isAuth:!1};switch((arguments.length>1?arguments[1]:void 0).type){case I:return{isAuth:!0};case R:return{isAuth:!1};default:return e}},notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hasNotify:!1,message:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case L:return{hasNotify:!0,message:a.payload.message};case T:return{hasNotify:!1,message:null};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case U:return a.payload;case P:return e.filter(function(e){return e._id!==a.payload._id});default:return e}}}),Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,fe=Object(c.e)(he,Ee(Object(c.a)(i.a)));s.a.render(r.a.createElement(o.a,{store:fe},r.a.createElement(pe,null)),document.querySelector("#root"))},40:function(e,a,t){e.exports=t.p+"static/media/profile.87d71dde.jpg"},80:function(e,a,t){},92:function(e,a,t){e.exports=t(214)}},[[92,1,2]]]);
//# sourceMappingURL=main.3d00d182.chunk.js.map