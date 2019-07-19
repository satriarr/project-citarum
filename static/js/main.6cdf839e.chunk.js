(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),s=t.n(l),c=t(19),i=t(83),m=t(3),o=t(4),u=t(5),d=t(7),p=t(6),h=t(8),E=t(20),f=t(9),g=t(90),b=t(86),v=t.n(b),N=t(13),y=t.n(N),k=t(23),_=t(87),w=t.n(_),O=(Object({NODE_ENV:"production",PUBLIC_URL:"/project-citarum"}).REACT_APP_SERVER,w.a.create({baseURL:"https://server-citarum.herokuapp.com"})),x="USER_CREATE",j="USER_UPDATE",C="USER_VERIFY",A="ERROR_ADD",S="ERROR_REMOVE",I="AUTH_LOGIN",L="AUTH_LOGOUT",R="NOTIFY_ADD",T="NOTIFY_REMOVE",D="FETCH_ALL",U="FETCH_REMOVE",F=function(e){return{type:A,payload:{message:e}}},P=function(){return{type:I}},M=function(){return localStorage.removeItem("token"),{type:L}},q=function(e){return{type:R,payload:{message:e}}};t(120);function B(){return r.a.createElement("div",{className:"greeting"},r.a.createElement("div",{className:"greeting__text"},r.a.createElement("h2",null,"Selamat Datang"),r.a.createElement("p",null,"CitarumRiver adalah sebuah aplikasi berbasis web yang berguna untuk melakukan monitoring terhadap sungai Citarum, yang dapat melakukan pengukuran volume air dari sungai dan juga memberikan pemberitahuan jika volume sungai tidak seperti biasanya."),r.a.createElement(f.b,{to:"/auth/login"},"Pelajari selengkapnya...")))}var H=t(24),K=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:""},t.handleInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(H.a)({},n,r))},t.handleFormSubmit=function(e){e.preventDefault(),t.props.loginUser(t.state)},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login__form"},r.a.createElement("div",{className:"form__login-text"},r.a.createElement("h2",null,"Masuk akun"),r.a.createElement("p",null,"Citarum River Authentication System")),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.handleInputChange,placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",required:!0})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},r.a.createElement("i",{className:"fas fa-lock"}))),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.handleInputChange,placeholder:"Password","aria-label":"Password","aria-describedby":"basic-addon1",required:!0})),r.a.createElement("p",{className:"mt-4 mb-4"},"Belum punya akun? ",r.a.createElement(f.b,{to:"/auth/register"},"daftar")),r.a.createElement("button",{type:"submit",className:"btn primary--button"},"Masuk"))))}}]),a}(n.Component),V=Object(m.b)(null,{errorActionAdd:F,loginUser:function(e){return function(){var a=Object(k.a)(y.a.mark(function a(t){var n,r,l;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=e.email,r=e.password,a.next=4,O.post("/auth/login",{email:n,password:r});case 4:if(200===(l=a.sent).status){a.next=8;break}throw new Error("Login gagal!");case 8:t(P()),localStorage.setItem("token",l.data.payload.token),t(q("Masuk akun berhasil!, selamat datang!")),t({type:x,payload:l.data.payload}),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),t(F("Masuk gagal!"));case 17:case"end":return a.stop()}},a,null,[[0,14]])}));return function(e){return a.apply(this,arguments)}}()}})(K),z=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={firstname:"",lastname:"",email:"",password:""},t.handleInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(H.a)({},n,r))},t.handleFormSubmit=function(e){e.preventDefault(),t.props.createUser(t.state)},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"register"},r.a.createElement("div",{className:"register__form"},r.a.createElement("div",{className:"form__register-text"},r.a.createElement("h2",null,"Daftar akun"),r.a.createElement("p",null,"Citarum River Authentication System")),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{type:"text",name:"firstname",value:this.state.firstname,onChange:this.handleInputChange,className:"form-control",placeholder:"Firstname",required:!0})))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{type:"text",name:"lastname",value:this.state.lastname,onChange:this.handleInputChange,className:"form-control",placeholder:"Lastname",required:!0}))))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"input-email"},r.a.createElement("i",{className:"fas fa-envelope"}))),r.a.createElement("input",{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.handleInputChange,placeholder:"Email","aria-label":"Email","aria-describedby":"input-password",required:!0})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"input-password"},r.a.createElement("i",{className:"fas fa-lock"}))),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.handleInputChange,placeholder:"Password","aria-label":"Password","aria-describedby":"input-password",required:!0})),r.a.createElement("p",{className:"mt-4 mb-4"},"Sudah punya akun? ",r.a.createElement(f.b,{to:"/auth/login"},"masuk")),r.a.createElement("button",{type:"submit",className:"btn btn-danger"},"Daftar"))))}}]),a}(n.Component),J=Object(m.b)(null,{createUser:function(e){return function(){var a=Object(k.a)(y.a.mark(function a(t){var n,r,l,s,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=e.firstname,r=e.lastname,l=e.email,s=e.password,a.next=4,O.post("/users",{firstname:n,lastname:r,email:l,password:s});case 4:if(c=a.sent,console.log(c),201===c.status){a.next=9;break}throw new Error("Terjadi kesalahan saat mendaftarkan user!");case 9:t(P()),localStorage.setItem("token",c.data.payload.token),t(q("Registrasi berhasil, terimakasih telah mendaftar!")),t({type:x,payload:c.data.payload}),a.next=18;break;case 15:a.prev=15,a.t0=a.catch(0),t(F("Terjadi kesalahan saat mendaftarkan user!"));case 18:case"end":return a.stop()}},a,null,[[0,15]])}));return function(e){return a.apply(this,arguments)}}()}})(z),W=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).onClickErrorDismiss=function(){t.props.errorActionRemove()},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,this.props.isAuth&&r.a.createElement(E.a,{to:"/home"}),this.props.hasError&&r.a.createElement("div",{className:"my-modal"},r.a.createElement("div",{className:"my-modal__content animated bounceIn"},r.a.createElement("h3",null,"Galat!, terjadi kesalahan"),r.a.createElement("p",null,this.props.errorMessage),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.onClickErrorDismiss},"Tutup"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 p-5 animated fadeInLeft delay-1s"},r.a.createElement("div",{className:"p-5"},r.a.createElement("div",{className:"login__header-text"},r.a.createElement("h1",{className:"primary--text"},"Citarum",r.a.createElement("span",{style:{color:"#434343"}},"River")),r.a.createElement("h3",null,"Monitoring system")),r.a.createElement(E.b,{path:"/auth/",exact:!0,component:B}),r.a.createElement(E.b,{path:"/auth/login",render:function(){return r.a.createElement(V,{changeErrorState:e.changeErrorState})}}),r.a.createElement(E.b,{path:"/auth/register",component:J}))),r.a.createElement("div",{className:"col-md-6 login__right-ct--bandung p-0 animated fadeInRight"},r.a.createElement("div",{className:"right-ct__white-ct"}))))}}]),a}(r.a.Component),G=Object(m.b)(function(e){return console.log(e.error),{hasError:e.error.hasError,errorMessage:e.error.message,isAuth:e.auth.isAuth}},{errorActionRemove:function(){return{type:S}}})(W);var Y=Object(m.b)(function(e){return{isAdmin:e.user.admin}},{authLogout:M})(function(e){return r.a.createElement("div",{className:"sidebar animated fadeInLeft delay-1s faster"},r.a.createElement("div",{className:"sidebar__text"},r.a.createElement("h1",null,"Citarum",r.a.createElement("span",{style:{color:"#434343"}},"River")),r.a.createElement("h3",null,"Monitoring System")),r.a.createElement("div",{className:"sidebar__menu"},r.a.createElement("ul",{className:"menu__list"},r.a.createElement("li",{className:"list__item"},r.a.createElement(f.c,{to:"/home/",exact:!0,activeClassName:"is-active"},"Menu Awal")),r.a.createElement("li",{className:"list__item"},r.a.createElement(f.c,{to:"/home/profile",activeClassName:"is-active"},"Informasi Profil")),e.isAdmin&&r.a.createElement("li",{className:"list__item"},r.a.createElement(f.c,{to:"/home/manage",activeClassName:"is-active"},"Kelola Pengguna")),r.a.createElement("li",{className:"list__item"},r.a.createElement("a",{href:"/logout",onClick:function(a){a.preventDefault(),window.confirm("Apakah anda yakin?")&&e.authLogout()}},"Keluar")))))}),X=t(54),Q=t(40),Z=t(50),$=t.n(Z),ee=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={lat:null,long:null,errLoc:!1,data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],time:new Date,turbidity:null,ph:null,suhu:null},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.get("/antares/getparticular?limit=15").then(function(a){var t=a.data.map(function(e){return parseFloat(e.val.split(",")[0])});e.setState({data:Object(X.a)(t)})}),this.timerID=setInterval(function(){e.setState({time:new Date})},1e3),this.RTE=setInterval(function(){O.get("/antares/getlatest").then(function(a){var t=parseFloat(a.data.val.split(",")[0]);e.setState({turbidity:parseFloat(a.data.val.split(",")[0]),ph:parseFloat(a.data.val.split(",")[1]),suhu:parseFloat(a.data.val.split(",")[2])});var n=e.state.data;n.pop(),n.unshift(t),e.setState({data:Object(X.a)(n)})})},5e3),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(function(a){e.setState({lat:a.coords.latitude,long:a.coords.longitude})},function(){e.setState({errLoc:!0})})}},{key:"componentWillUnmount",value:function(){clearInterval([this.timerID,this.RTE])}},{key:"getLatitude",value:function(){return this.state.lat?r.a.createElement("h5",null,this.state.lat):this.state.errLoc?r.a.createElement("h5",null,"Tidak diketahui"):r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}},{key:"getLongitude",value:function(){return this.state.long?r.a.createElement("h5",null,this.state.long):this.state.errLoc?r.a.createElement("h5",null,"Tidak diketahui"):r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}},{key:"render",value:function(){var e=this.props.user,a=e.firstname,t=e.lastname,n=e.admin;console.log(this.state.data);var l={labels:["5s","10s","15s","20s","25s","30s","35s","40s","45s","50s","55s","60s","65s","70s","75s"],datasets:[{label:"Today",data:this.state.data,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)","rgba(255, 99, 132, 1)"],borderWidth:1}]};return r.a.createElement("div",{className:"main animated zoomIn faster"},r.a.createElement("div",{className:"main__text-header"},n?r.a.createElement("h2",null,"".concat(a," ").concat(t," (Administrator)")):r.a.createElement("h2",null,"".concat(a," ").concat(t)),r.a.createElement("h4",null,"Selamat datang kembali")),r.a.createElement("div",{className:"location"},r.a.createElement("ul",{className:"location__list-menu"},r.a.createElement("li",{className:"list-menu__item"},r.a.createElement("div",{className:"item__text"},r.a.createElement("h5",null,$()().format("dddd")),r.a.createElement("span",null,"Hari"))),r.a.createElement("li",{className:"list-menu__item"},r.a.createElement("div",{className:"item__text"},r.a.createElement("h5",null,this.state.time.toLocaleTimeString()),r.a.createElement("span",null,"Jam"))))),r.a.createElement("div",{className:"location"},r.a.createElement("ul",{className:"location__list-menu"},r.a.createElement("li",{className:"list-menu__item"},r.a.createElement("div",{className:"item__text text-center"},r.a.createElement("i",{className:"fas list-menu__icon fa-water"}),this.state.turbidity?r.a.createElement("h5",null,this.state.turbidity):r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),r.a.createElement("span",null,"Turbidity"))),r.a.createElement("li",{className:"list-menu__item"},r.a.createElement("div",{className:"item__text text-center"},r.a.createElement("i",{className:"fas list-menu__icon fa-tint"}),this.state.ph?r.a.createElement("h5",null,this.state.ph):r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),r.a.createElement("span",null,"pH"))),r.a.createElement("li",{className:"list-menu__item"},r.a.createElement("div",{className:"item__text text-center"},r.a.createElement("i",{className:"fas list-menu__icon fa-temperature-low"}),this.state.suhu?r.a.createElement("h5",null,this.state.suhu):r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),r.a.createElement("span",null,"Suhu"))))),r.a.createElement("div",{className:"location"},r.a.createElement("h4",null,"Info Lokasi"),r.a.createElement("ul",{className:"location__list-menu"},r.a.createElement("li",{className:"list-menu__item"},r.a.createElement("div",{className:"item__text"},r.a.createElement("h5",null,"Bandung"),r.a.createElement("span",null,"Wilayah"))),r.a.createElement("li",{className:"list-menu__item"},r.a.createElement("div",{className:"item__text"},this.getLatitude(),r.a.createElement("span",null,"Latitude"))),r.a.createElement("li",{className:"list-menu__item"},r.a.createElement("div",{className:"item__text"},this.getLongitude(),r.a.createElement("span",null,"Langitude")))),r.a.createElement("div",{className:"row mt-4 align-items-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("iframe",{title:"citarum",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.0759470004054!2d107.63296482919216!3d-6.973440668500981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTgnMjQuNCJTIDEwN8KwMzgnMDAuNiJF!5e0!3m2!1sid!2sid!4v1563423931302!5m2!1sid!2sid",frameborder:"0",style:{border:"0",width:"100%",height:"300px",borderRadius:"5px"},allowfullscreen:!0})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h5",null,"Lokasi Microcontroller"),r.a.createElement("address",null,"Jl. Telekomunikasi, Sukapura, Dayeuhkolot, Bandung, West Java")))),r.a.createElement("div",{className:"river-chart"},r.a.createElement("h4",{className:"mb-4"},"Sungai Citarum"),r.a.createElement("ul",{className:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",id:"pills-home-tab","data-toggle":"pill",href:"#pills-home",role:"tab","aria-controls":"pills-home","aria-selected":"true"},"Realtime")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",id:"pills-profile-tab","data-toggle":"pill",href:"#pills-profile",role:"tab","aria-controls":"pills-profile","aria-selected":"false"},"History"))),r.a.createElement("div",{className:"tab-content",id:"pills-tabContent"},r.a.createElement("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"},r.a.createElement(Q.a,{data:l})),r.a.createElement("div",{className:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab"},r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",{className:"text-center"},"Past Week"),r.a.createElement(Q.a,{data:l})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",{className:"text-center"},"Past Month"),r.a.createElement(Q.a,{data:l})))),r.a.createElement("div",{className:"tab-pane fade",id:"pills-contact",role:"tabpanel","aria-labelledby":"pills-contact-tab"},r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-8"}),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card mb-3 bg-primary text-white"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},"Ph"))),r.a.createElement("div",{className:"card mb-3 bg-warning text-white"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},"Lat"))),r.a.createElement("div",{className:"card mb-3 bg-danger text-white"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},"Lang")))))))))}}]),a}(r.a.Component),ae=Object(m.b)(function(e){return{isAuth:e.auth.isAuth,user:e.user}})(ee),te=t(39),ne=t.n(te),re=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={_id:t.props.user._id,firstname:t.props.user.firstname,lastname:t.props.user.lastname,email:t.props.user.email,oldpassword:"",password:""},t.handleInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(H.a)({},n,r))},t.handleFormSubmit=function(e){e.preventDefault(),t.props.updateUser(t.state),t.setState({oldpassword:"",password:""})},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.user,a=e.firstname,t=e.lastname,n=e.email;return r.a.createElement("div",{className:"profile mb-5 animated zoomIn faster"},r.a.createElement("div",{className:"profile__header"},r.a.createElement("div",{className:"header__user-profile"},r.a.createElement("div",{className:"user-profile__image"},r.a.createElement("img",{src:ne.a,alt:"profile"})),r.a.createElement("div",{className:"user-profile__text"},r.a.createElement("h3",null,"".concat(a," ").concat(t)),r.a.createElement("p",null,n)))),r.a.createElement("div",{className:"profile__update"},r.a.createElement("h4",{className:"mt-5 mb-5"},"Informasi profil"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"firstname"},"Nama lengkap: "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{type:"text",name:"firstname",value:this.state.firstname,onChange:this.handleInputChange,className:"form-control",placeholder:"Firstname",required:!0})))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{type:"text",name:"lastname",value:this.state.lastname,onChange:this.handleInputChange,className:"form-control",placeholder:"Lastname",required:!0}))))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Alamat surel:"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"input-email"},r.a.createElement("i",{className:"fas fa-envelope"}))),r.a.createElement("input",{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.handleInputChange,placeholder:"Email","aria-label":"Email","aria-describedby":"input-password",required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Kata sandi (lama):"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"input-password"},r.a.createElement("i",{className:"fas fa-lock"}))),r.a.createElement("input",{type:"password",className:"form-control",name:"oldpassword",value:this.state.oldpassword,onChange:this.handleInputChange,placeholder:"Kata sandi lama","aria-label":"Password","aria-describedby":"input-password",required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Kata sandi (baru):"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"input-password"},r.a.createElement("i",{className:"fas fa-lock"}))),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.handleInputChange,placeholder:"Kata sandi baru","aria-label":"Password","aria-describedby":"input-password",required:!0}))),r.a.createElement("button",{type:"submit",className:"btn btn-danger mt-3"},"Perbarui profile"))))}}]),a}(n.Component),le=Object(m.b)(function(e){return{user:e.user}},{updateUser:function(e){return function(){var a=Object(k.a)(y.a.mark(function a(t){var n,r,l,s,c,i,m;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=e.firstname,r=e.lastname,l=e.email,s=e.password,c=e.oldpassword,i=e._id,a.next=4,O.patch("/users/".concat(i),{firstname:n,lastname:r,email:l,oldpassword:c,password:s},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:if(200===(m=a.sent).status){a.next=8;break}throw new Error("Terjadi kesalahan saat mendaftarkan user!");case 8:t(P()),localStorage.setItem("token",m.data.payload.token),t(q("Update informasi akun berhasil!")),t({type:j,payload:m.data.payload}),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),t(q("Update informasi akun gagal!"));case 17:case"end":return a.stop()}},a,null,[[0,14]])}));return function(e){return a.apply(this,arguments)}}()}})(re),se=(t(81),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).handleButtonClick=function(e){window.confirm("Apakah anda yakin? ")&&t.props.deleteUser(e)},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchAllUsers()}},{key:"render",value:function(){var e=this,a=this.props.users.map(function(a){return r.a.createElement(ce,{key:a._id,user:a,onClick:e.handleButtonClick})});return r.a.createElement("div",{className:"manage animated zoomIn faster"},r.a.createElement("div",{className:"manage__header-text"},r.a.createElement("h3",null,"Kelola Pengguna"),r.a.createElement("p",null,"Pusat kelola pengguna (admin)")),r.a.createElement("div",{className:"manage__user-list"},a))}}]),a}(n.Component));function ce(e){return r.a.createElement("div",{className:"user-list__item"},r.a.createElement("div",{className:"user-list__image"},r.a.createElement("img",{src:ne.a,alt:"profile"})),r.a.createElement("div",{className:"user-list__text"},r.a.createElement("button",{className:"btn btn-outline-danger float-right mt-2",onClick:function(){e.onClick(e.user._id)}},"Hapus"),r.a.createElement("h3",null,"".concat(e.user.firstname," ").concat(e.user.lastname)),r.a.createElement("p",null,e.user.email)))}var ie=Object(m.b)(function(e){return{users:e.users}},{fetchAllUsers:function(){return function(){var e=Object(k.a)(y.a.mark(function e(a){var t,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),e.next=4,O.get("/users",{headers:{Authorization:"Bearer ".concat(t)}});case 4:if(200===(n=e.sent).status){e.next=8;break}throw new Error("Terdapat masalah saat mendapatkan informasi pengguna!");case 8:console.log(n.data.users),a({type:D,payload:n.data.users}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),a(q("Mendapatkan informasi seluruh pengguna gagal!"));case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(a){return e.apply(this,arguments)}}()},deleteUser:function(e){return function(){var a=Object(k.a)(y.a.mark(function a(t){var n;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=localStorage.getItem("token"),a.next=4,O.delete("/users/".concat(e),{headers:{Authorization:"Bearer ".concat(n)}});case 4:if(200===a.sent.status){a.next=8;break}throw new Error("Terdapat masalah saat menghapus pengguna!");case 8:t(q("Pengguna terhapus!")),t({type:U,payload:{_id:e}}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),t(q("Hapus pengguna gagal!"));case 15:case"end":return a.stop()}},a,null,[[0,12]])}));return function(e){return a.apply(this,arguments)}}()}})(se),me=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(E.b,{path:"/home/",exact:!0,component:ae}),r.a.createElement(E.b,{path:"/home/profile",exact:!0,component:le}),r.a.createElement(E.b,{path:"/home/manage",exact:!0,component:ie}))}}]),a}(n.Component),oe=Object(m.b)(function(e){return{isAuth:e.auth.isAuth,user:e.user}})(me),ue=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).onClickNotifyDismiss=function(){t.props.notifyRemove()},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.notify.hasNotify&&r.a.createElement("div",{className:"my-modal"},r.a.createElement("div",{className:"my-modal__content animated bounceIn"},r.a.createElement("h3",null,"Pemberitahuan"),r.a.createElement("p",null,this.props.notify.message),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.onClickNotifyDismiss},"Tutup"))),r.a.createElement("div",{className:"home container-fluid animated fadeIn"},!this.props.isAuth&&r.a.createElement(E.a,{to:"/auth/login"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement(Y,null)),r.a.createElement("div",{className:"col-md-9"},r.a.createElement(oe,null)))))}}]),a}(r.a.Component),de=Object(m.b)(function(e){return{user:e.user,isAuth:e.auth.isAuth,notify:e.notify}},{notifyRemove:function(){return{type:T}}})(ue);g.a.configure();var pe=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");v.a.isEmpty(e)?(localStorage.removeItem("token"),this.props.authLogout()):this.props.userTokenVerify(e)}},{key:"redirectRender",value:function(){return"/"===window.location.pathname&&this.props.isAuth?r.a.createElement(E.a,{to:"/home"}):r.a.createElement(E.a,{to:"/auth"})}},{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(E.b,{path:"/auth",component:G}),r.a.createElement(E.b,{path:"/home",component:de}),this.redirectRender())}}]),a}(r.a.Component),he=Object(m.b)(function(e){return{isAuth:e.auth.isAuth}},{authLogout:M,userTokenVerify:function(e){return function(){var a=Object(k.a)(y.a.mark(function a(t){var n,r;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.post("/auth/verify",{token:e});case 3:if(200===(n=a.sent).status){a.next=8;break}throw r=new Error("Token tidak dapat diverifikasi!"),localStorage.removeItem("token"),r;case 8:t(P()),localStorage.setItem("token",e),t({type:C,payload:n.data.payload}),a.next=17;break;case 13:a.prev=13,a.t0=a.catch(0),localStorage.removeItem("token"),t(F("Token sudah tidak berlaku, silahkan masuk kembali!"));case 17:case"end":return a.stop()}},a,null,[[0,13]])}));return function(e){return a.apply(this,arguments)}}()}})(pe),Ee=Object(c.c)({error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case A:return{hasError:!0,message:a.payload.message};case S:return{hasError:!1};default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case x:case C:return a.payload;case j:return Object.assign({},e,a.payload);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isAuth:!1};switch((arguments.length>1?arguments[1]:void 0).type){case I:return{isAuth:!0};case L:return{isAuth:!1};default:return e}},notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hasNotify:!1,message:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case R:return{hasNotify:!0,message:a.payload.message};case T:return{hasNotify:!1,message:null};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case D:return a.payload;case U:return e.filter(function(e){return e._id!==a.payload._id});default:return e}}}),fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,ge=Object(c.e)(Ee,fe(Object(c.a)(i.a)));s.a.render(r.a.createElement(m.a,{store:ge},r.a.createElement(he,null)),document.querySelector("#root"))},39:function(e,a,t){e.exports=t.p+"static/media/profile.87d71dde.jpg"},81:function(e,a,t){},93:function(e,a,t){e.exports=t(214)}},[[93,1,2]]]);
//# sourceMappingURL=main.6cdf839e.chunk.js.map