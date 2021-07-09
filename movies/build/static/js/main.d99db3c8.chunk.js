(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{54:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(23),a=n.n(s),c=n(4),r=n(5),o=n(7),l=n(6),u=n(1),j=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("header",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(u.jsx)("a",{className:"navbar-brand",href:"/",children:"AlloMovie"}),Object(u.jsx)("button",{className:"navbar-toggler",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",children:Object(u.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(u.jsx)("li",{className:"nav-item active",children:Object(u.jsx)("a",{className:"nav-link",href:"/",children:"Home"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"/",children:"Favoris"})})]})})]})}}]),n}(i.Component),d=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"w-25 border p-4 d-flex flex-column",children:[Object(u.jsx)("h5",{children:this.props.movie.title}),Object(u.jsx)("hr",{className:"w-100"}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"d-block mx-auto w-100",src:this.props.movie.img})}),Object(u.jsx)("hr",{className:"w-100"}),Object(u.jsx)("span",{className:"text-secondary",children:this.props.movie.details}),Object(u.jsx)("span",{children:this.props.movie.description})]})}}]),n}(i.Component),h={width:"480px",height:"280px",overflow:"hidden",margin:"0px 5px 10px 5px",cursor:"pointer"},m=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).mouseEnter=function(){e.props.updateSelectedMovie(e.props.movie.title)},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{onMouseEnter:this.mouseEnter,className:"d-flex flex-row bg-light",style:h,children:[Object(u.jsx)("img",{alt:"film",width:"185",src:this.props.movie.img}),Object(u.jsxs)("div",{className:"flex-fill d-flex flex-column p-3",children:[Object(u.jsx)("h5",{children:this.props.movie.title}),Object(u.jsx)("hr",{className:"w-100"}),Object(u.jsx)("p",{children:this.props.movie.details})]})]})}}]),n}(i.Component),b=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"w-75 d-flex flex-row flex-wrap justify-content-center",children:this.props.movies.map((function(t,n){return Object(u.jsx)(m,{movie:t,updateSelectedMovie:function(){e.props.updateSelectedMovie(n)}},t.title+n)}))})}}]),n}(i.Component),v=function(){return Object(u.jsx)("div",{style:{minHeight:"100vh"},className:"d-flex flex-row justify-content-center align-items-center w-100",children:Object(u.jsx)("img",{alt:"loading gif",src:"https://i.redd.it/ounq1mw5kdxy.gif"})})},p=n(27),f=n(26).create({baseURL:"https://api.themoviedb.org/4"});f.interceptors.request.use((function(e){return e.headers.Authorization="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODFkZmU0MDZiMDhjY2FlYjUwMjRmY2QzM2UzYzFlOCIsInN1YiI6IjVjMGU4NTlmYzNhMzY4MjUyYTBjOTM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QG7-vvAvmEXOVUD2ZaONg5e_AHqXaTlPVLeDz7mzhDs",e}));var O=f,x=function(e){return{img:"https://image.tmdb.org/t/p/w500"+e.poster_path,title:e.title,details:e.release_date+" | "+e.vote_average+" /10 ("+e.vote_count+")",description:e.overview}},g=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).submit=function(t,n){console.log(t);var i="?"+Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e],"&")})).join("");O.get("/search/movie"+i).then((function(e){return e.data.results})).then((function(t){var i=t.map(x);e.props.updateMovies(i),n.setSubmitting(!1)})).catch((function(e){return console.log(e)}))},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsx)(p.a,{onSubmit:this.submit,initialValues:{query:"",language:"en-US"},children:function(e){var t=e.handleSubmit,n=e.handleChange,i=e.handleBlur,s=e.isSubmitting;return Object(u.jsxs)("form",{className:"d-flex flex-row p-2 m-2",onSubmit:t,children:[Object(u.jsx)("input",{name:"query",className:"flex-fill form-control mr-2",placeholder:"Search ...",onChange:n,onBlur:i}),Object(u.jsxs)("select",{className:"mr-2 form-control w-25",name:"language",id:"",onChange:n,onBlur:i,children:[Object(u.jsx)("option",{value:"en-US",children:"Anglais"}),Object(u.jsx)("option",{value:"fr-FR",children:"Fran\xe7ais"})]}),Object(u.jsx)("button",{className:"btn btn-small btn-success",type:"submit",disabled:s,children:"Submit"})]})}})}}]),n}(i.Component),N=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).updateSelectedMovie=function(e){i.setState({selectedMovie:e})},i.updateMovies=function(e){i.setState({movies:e,loaded:!0})},i.state={movies:null,selectedMovie:0,loaded:!1},i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.get("/discover/movie").then((function(e){return e.data.results})).then((function(t){var n=t.map(x);e.updateMovies(n)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App d-flex flex-column",children:[Object(u.jsx)(j,{}),Object(u.jsx)(g,{updateMovies:this.updateMovies}),this.state.loaded?Object(u.jsxs)("div",{className:"d-flex flex-row flex-fill pt-4 p-2",children:[Object(u.jsx)(b,{movies:this.state.movies,updateSelectedMovie:this.updateSelectedMovie}),Object(u.jsx)(d,{movie:this.state.movies[this.state.selectedMovie]})]}):Object(u.jsx)(v,{})]})}}]),n}(i.Component);a.a.render(Object(u.jsx)(N,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.d99db3c8.chunk.js.map