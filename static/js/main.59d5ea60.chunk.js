(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.31cfe652.png"},function(e,t,a){e.exports=a.p+"static/media/Email.4fcd624c.png"},,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(18),a(5)),m=a.n(o),s=a(6),i=a(3),u=a(4),d=a(1),p=(a(21),a(10)),E=a.n(p),f=function(e){var t=e.subtitle;return r.a.createElement("header",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("img",{src:E.a,className:"logo",alt:"logo"})),r.a.createElement("div",{className:"col-md mt-5 subtitle"},t))},v=(a(22),a(11)),j=a.n(v),b=a(7),g=a(12),h=function(){var e=Object(n.useState)({name:"",email:"",remarks:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],l=function(e){c(Object(g.a)({},a,Object(b.a)({},e.target.id,e.target.value)))};return r.a.createElement("form",{className:"mt-2"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",id:"name",value:a.name,onChange:l})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"text",id:"email",className:"form-control",placeholder:"Email",value:a.email,onChange:l})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"remarks"},"Remarks"),r.a.createElement("input",{type:"text",id:"remarks",className:"form-control",placeholder:"Remarks",value:a.remarks,onChange:l})),r.a.createElement("button",{className:"btn btn-primary mt-2",disabled:!a.name||!a.email,onClick:function(e){e.preventDefault()}},"Submit"))},N=function(e){var t=e.project,a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],o=c[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"row mt-2"},r.a.createElement("h5",{className:"col-md-12"},t.category)),r.a.createElement("div",{className:"row"},r.a.createElement("h3",{className:"col-md-12"},t.address)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7"},r.a.createElement("img",{src:"https://jbuican14.github.io/test-product-v1/images/".concat(t.photo,".jpeg"),alt:"Project"})),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("p",{className:"price"},"$",t.price),r.a.createElement("p",null,t.description),r.a.createElement("img",{src:j.a,height:"50",alt:"inquiry",onClick:function(){o(!l)}}),l&&r.a.createElement(h,{project:t})))))},y=function(e){var t=e.project;return t?r.a.createElement("div",null,r.a.createElement("div",{className:"ro featuredProject"},r.a.createElement("h3",{className:"col-ml-12 text-center"},"Featured Project")),r.a.createElement(N,{project:t})):r.a.createElement("div",null,"No Featured project at this time ")},k=(a(23),function(e){var t=e.project,a=Object(d.f)();return r.a.createElement("tr",{onClick:function(){a("/project/".concat(t.id))}},r.a.createElement("td",null,t.address),r.a.createElement("td",null,t.price),r.a.createElement("td",null,t.likes))}),O=function(e){var t=e.allprojects,a=Object(d.g)().category,n=t.filter(function(e){return e.category===a});return r.a.createElement("div",{className:"mt-2"},r.a.createElement("h4",null,"Results for ",a,":"),r.a.createElement("table",{className:"table table-hover"},r.a.createElement("tbody",null,n.map(function(e){return r.a.createElement(k,{key:e.id,project:e})}))))},w=(Object(n.createContext)([]),function(e){var t=e.allProjects,a=Object(d.f)(),n=t?Array.from(new Set(t.map(function(e){return e.category}))):[];n.unshift(null);return r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"offset-md-2 col-md-4"},"Look for projects category:"),r.a.createElement("div",{className:"col-md-4 mb-3"},r.a.createElement("select",{title:"test",className:"form-select",onChange:function(e){var t=e.target.value;a("/searchresults/".concat(t))}},n.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))))}),x=function(e){var t=e.allProjects,a=Object(d.g)().id,n=t.find(function(e){return e.id===parseInt(a)});return n?r.a.createElement(N,{project:n}):r.a.createElement("div",null,"Project not found.")};var C=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(function(){!function(){var e=Object(s.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("url","/"),e.next=4,fetch("https://jbuican14.github.io/test-product-v1/projects.json");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,c(a);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var l=Object(n.useMemo)(function(){if(a.length){var e=Math.floor(Math.random()*a.length);return a[e]}},[a]);return r.a.createElement(u.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(f,{subtitle:"Providing all Secound-Hands products"}),r.a.createElement(w,{allProjects:a})),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/about"},"About"),r.a.createElement(d.a,{path:"/searchresults/:category",element:r.a.createElement(O,{allprojects:a})}),r.a.createElement(d.a,{path:"/project/:id",element:r.a.createElement(x,{allProjects:a})}),r.a.createElement(d.a,{path:"/",element:r.a.createElement(y,{project:l})})))},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})};a(24);l.a.render(r.a.createElement(C,null),document.getElementById("root")),P()}],[[13,1,2]]]);
//# sourceMappingURL=main.59d5ea60.chunk.js.map