(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(54)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},50:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(20),r=a.n(l),c=a(57),i=a(58),s=a(59),u=a(21),m=a(5),d=a(6),h=a(8),f=a(7),v=a(9);a(29);var g=function(e){var t=e.children;return o.a.createElement("div",{className:"jumbotron mt-4"},t)};var E=function(e){var t=e.icon,a=e.title,n=e.children;return o.a.createElement("div",{className:"card mt-4"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h3",null,o.a.createElement("strong",null,o.a.createElement("i",{className:"fa fa-".concat(t),"aria-hidden":"true"})," ",a))),o.a.createElement("div",{className:"card-body"},n))};var b=function(e){var t=e.q,a=e.handleInputChange,n=e.handleFormSubmit;return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"Query"},o.a.createElement("strong",null,"Book")),o.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:t,placeholder:"Ready Player One",name:"q",onChange:a,required:!0})),o.a.createElement("div",{className:"pull-right"},o.a.createElement("button",{onClick:n,type:"submit",className:"btn btn-lg btn-danger float-right"},"Search")))},p=(a(30),function(e){var t=e.children;return o.a.createElement("ul",{className:"list-group"},t)});function k(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}function N(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function w(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function B(e){var t=e.size,a=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(31);var S=function(e){var t=e.title,a=e.subtitle,n=e.authors,l=e.link,r=e.description,c=e.image,i=e.Button;return o.a.createElement(k,null,o.a.createElement(w,{className:"flex-wrap-reverse"},o.a.createElement(B,{size:"md-8"},o.a.createElement("h3",{className:"font-italic"},t),a&&o.a.createElement("h5",{className:"font-italic"},a)),o.a.createElement(B,{size:"md-4"},o.a.createElement("div",{className:"btn-container"},o.a.createElement("a",{className:"btn btn-light",target:"_blank",rel:"noopener noreferrer",href:l},"View"),o.a.createElement(i,null)))),o.a.createElement(w,null,o.a.createElement(B,{size:"md-6"},o.a.createElement("p",{className:"font-italic small"},"Written by ",n))),o.a.createElement(w,null,o.a.createElement(B,{size:"12 sm-4 md-2"},o.a.createElement("img",{className:"img-thumbnail img-fluid w-100",src:c,alt:t})),o.a.createElement(B,{size:"12 sm-8 md-10"},o.a.createElement("p",null,r))))};var y=function(){return o.a.createElement("footer",null,o.a.createElement("hr",null),o.a.createElement("p",{className:"pull-right"},o.a.createElement("i",{className:"fab fa-github"})," Proudly built using React.js"))},j=a(10),I=a.n(j),O={getBooks:function(e){return I.a.get("/api/google",{params:{q:"title:"+e}})},getSavedBooks:function(){return I.a.get("/api/books")},deleteBook:function(e){return I.a.delete("/api/books/"+e)},saveBook:function(e){return I.a.post("/api/books",e)}},x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],q:"",message:"Search For A Book To Begin!"},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(u.a)({},n,o))},a.getBooks=function(){O.getBooks(a.state.q).then(function(e){return a.setState({books:e.data})}).catch(function(){return a.setState({books:[],message:"No New Books Found, Try a Different Query"})})},a.handleFormSubmit=function(e){e.preventDefault(),a.getBooks()},a.handleBookSave=function(e){var t=a.state.books.find(function(t){return t.id===e});O.saveBook({googleId:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail}).then(function(){return a.getBooks()})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(N,null,o.a.createElement(w,null,o.a.createElement(B,{size:"md-12"},o.a.createElement(g,null,o.a.createElement("h1",{className:"text-center"},o.a.createElement("strong",null,"(React) Google Books Search")),o.a.createElement("h2",{className:"text-center"},"Search for and Save Books of Interest."))),o.a.createElement(B,{size:"md-12"},o.a.createElement(E,{title:"Book Search",icon:"far fa-book"},o.a.createElement(b,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q})))),o.a.createElement(w,null,o.a.createElement(B,{size:"md-12"},o.a.createElement(E,{title:"Results"},this.state.books.length?o.a.createElement(p,null,this.state.books.map(function(t){return o.a.createElement(S,{key:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors.join(", "),description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,Button:function(){return o.a.createElement("button",{onClick:function(){return e.handleBookSave(t.id)},className:"btn btn-primary ml-2"},"Save")}})})):o.a.createElement("h2",{className:"text-center"},this.state.message)))),o.a.createElement(y,null))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.getSavedBooks=function(){O.getSavedBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.handleBookDelete=function(e){O.deleteBook(e).then(function(e){return a.getSavedBooks()})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(N,null,o.a.createElement(w,null,o.a.createElement(B,{size:"md-12"},o.a.createElement(g,null,o.a.createElement("h1",{className:"text-center"},o.a.createElement("strong",null,"(React) Google Books Search")),o.a.createElement("h2",{className:"text-center"},"Search for and Save Books of Interest.")))),o.a.createElement(w,null,o.a.createElement(B,{size:"md-12"},o.a.createElement(E,{title:"Saved Books",icon:"download"},this.state.books.length?o.a.createElement(p,null,this.state.books.map(function(t){return o.a.createElement(S,{key:t._id,title:t.title,subtitle:t.subtitle,link:t.link,authors:t.authors.join(", "),description:t.description,image:t.image,Button:function(){return o.a.createElement("button",{onClick:function(){return e.handleBookDelete(t._id)},className:"btn btn-danger ml-2"},"Delete")}})})):o.a.createElement("h2",{className:"text-center"},"No Saved Books")))),o.a.createElement(y,null))}}]),t}(n.Component);var z=function(){return o.a.createElement(N,{fluid:!0},o.a.createElement(w,null,o.a.createElement(B,{size:"md-12"},o.a.createElement(g,null,o.a.createElement("h1",{className:"text-center"},"404 Page Not Found"),o.a.createElement("h1",{className:"text-center"},o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},W=a(56),F=(a(50),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,width:window.innerWidth},a.updateWidth=function(){var e={width:window.innerWidth};a.state.open&&e.width>991&&(e.open=!1),a.setState(e)},a.toggleNav=function(){a.setState({open:!a.state.open})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-2"},o.a.createElement(W.a,{className:"navbar-brand",to:"/"},"Google Books"),o.a.createElement("button",{onClick:this.toggleNav,className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"".concat(this.state.open?"":"collapse ","navbar-collapse"),id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(W.a,{onClick:this.toggleNav,className:"/"===window.location.pathname?"nav-link active":"nav-link",to:"/"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(W.a,{onClick:this.toggleNav,className:"/saved"===window.location.pathname?"nav-link active":"nav-link",to:"/saved"},"Saved")))))}}]),t}(n.Component));var q=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(F,null),o.a.createElement(i.a,null,o.a.createElement(s.a,{exact:!0,path:"/",component:x}),o.a.createElement(s.a,{exact:!0,path:"/saved",component:C}),o.a.createElement(s.a,{component:z}))))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(q,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");L?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):D(e)})}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.d9f0e4b6.chunk.js.map