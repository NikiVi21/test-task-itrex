(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){},30:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(6),r=n.n(c),s=(n(30),n(5)),i=(n(11),n(8)),o=n(3),l=n(9),d=n(15),j=n(24),u="SET_DATA",b={data:[],pageSize:20},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return t.type===u?Object(d.a)(Object(d.a)({},e),{},{data:Object(l.a)(t.data)}):e},f=n(1),O=function(e){return Object(f.jsx)("input",{className:"search",placeholder:"Search by name",type:"text",onChange:function(t){return e.onSearch(t.target.value)},value:e.value})},m=function(e){var t=e.allValue.map((function(e){return e.adress.state})),n=Object(l.a)(new Set(t)).sort();return Object(f.jsxs)("select",{className:"searchState",defaultValue:"DEFAULT",onChange:function(t){return e.onSearchState(t.target.value)},children:[Object(f.jsx)("option",{value:"DEFAULT",children:"Filter by state"}),n.map((function(e,t){return Object(f.jsx)("option",{value:e,children:e},t)}))]})},p=Object(o.c)(Object(i.b)((function(e){return{data:e.app.data,pageSize:e.app.pageSize}}),{getDataThunk:function(){return function(e){j.get("https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json").then((function(e){return e.data})).then((function(t){e({type:u,data:t})}))}}}))((function(e){Object(a.useEffect)((function(){e.getDataThunk()}),[]);var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],i=function(e){return-1!==e.firstName.toLowerCase().indexOf(c.toLowerCase())},o=e.data.filter(i),l=Object(a.useState)(""),d=Object(s.a)(l,2),j=d[0],u=d[1],b=Object(a.useState)(),h=Object(s.a)(b,2),p=h[0],g=h[1],x=document.getElementsByClassName("sortingDirection");function T(e){var t,n,a,c,r,s,i,o,l=0;for(t=document.getElementById("myTable"),a=!0,o="asc";a;){for(a=!1,n=t.getElementsByTagName("TR"),c=1;c<n.length-1;c++)if(i=!1,r=n[c].getElementsByTagName("TD")[e],s=n[c+1].getElementsByTagName("TD")[e],"asc"===o){if(r.innerHTML.toLowerCase()>s.innerHTML.toLowerCase()){i=!0,x[e].innerHTML="\u25b2";break}}else if("desc"===o&&r.innerHTML.toLowerCase()<s.innerHTML.toLowerCase()){i=!0,x[e].innerHTML="\u25bc";break}i?(n[c].parentNode.insertBefore(n[c+1],n[c]),a=!0,l++):0===l&&"asc"===o&&(o="desc",a=!0)}}function v(e){var t,n,a,c,r,s,i,o,l=0;for(t=document.getElementById("myTable"),a=!0,o="asc";a;){for(a=!1,n=t.getElementsByTagName("TR"),c=1;c<n.length-1;c++)if(i=!1,r=n[c].getElementsByTagName("TD")[0],s=n[c+1].getElementsByTagName("TD")[0],"asc"===o){if(Number(r.innerHTML)>Number(s.innerHTML)){i=!0,0===e?x[0].innerHTML="\u25b2":x[4].innerHTML="\u25b2";break}}else if("desc"===o&&Number(r.innerHTML)<Number(s.innerHTML)){i=!0,0===e?x[0].innerHTML="\u25bc":x[4].innerHTML="\u25bc";break}i?(n[c].parentNode.insertBefore(n[c+1],n[c]),a=!0,l++):0===l&&"asc"===o&&(o="desc",a=!0)}}var N=Object(a.useState)(0),L=Object(s.a)(N,2),S=L[0],y=L[1];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{className:"searchContainer",children:[Object(f.jsx)(O,{onSearch:r,value:c}),Object(f.jsx)(m,{allValue:o,onSearchState:u})]}),Object(f.jsxs)("table",{id:"myTable",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsxs)("th",{onClick:function(){return v(0)},children:["id",Object(f.jsx)("span",{className:"sortingDirection",children:" \u2022"})]}),Object(f.jsxs)("th",{onClick:function(){return T(1)},children:["First name",Object(f.jsx)("span",{className:"sortingDirection",children:" \u2022"})]}),Object(f.jsxs)("th",{onClick:function(){return T(2)},children:["Last name",Object(f.jsx)("span",{className:"sortingDirection",children:" \u2022"})]}),Object(f.jsxs)("th",{onClick:function(){return T(3)},children:["Email",Object(f.jsx)("span",{className:"sortingDirection",children:" \u2022"})]}),Object(f.jsxs)("th",{onClick:function(){return v(4)},children:["Phone",Object(f.jsx)("span",{className:"sortingDirection",children:" \u2022"})]}),Object(f.jsxs)("th",{onClick:function(){return T(5)},children:["State",Object(f.jsx)("span",{className:"sortingDirection",children:" \u2022"})]})]})}),Object(f.jsx)("tbody",{children:e.data.filter(i).filter((function(e){var t=e.adress;return j&&"DEFAULT"!==j?t.state===j?1:void 0:-1})).map((function(e){return Object(f.jsxs)("tr",{onClick:function(){return g(e)},children:[Object(f.jsx)("td",{children:e.id}),Object(f.jsx)("td",{children:e.firstName}),Object(f.jsx)("td",{children:e.lastName}),Object(f.jsx)("td",{children:e.email}),Object(f.jsx)("td",{children:e.phone}),Object(f.jsx)("td",{children:e.adress.state})]},e.phone)})).slice(S*e.pageSize,(S+1)*e.pageSize)})]}),Object(f.jsx)("button",{className:"pageBtn",onClick:function(){0!==S&&y(S-1)},children:"\u276e"}),Object(f.jsx)("button",{className:"pageBtn",onClick:function(){var t=Math.ceil(e.data.length/e.pageSize);S+1<t&&y(S+1)},children:"\u276f"}),p?Object(f.jsxs)("div",{className:"profileInfo",children:["Profile info:",Object(f.jsxs)("div",{children:["Select profile: ",p.firstName," ",p.lastName]}),Object(f.jsxs)("div",{children:["Description: ",p.description]}),Object(f.jsxs)("div",{children:["Address: ",p.adress.streetAddress]}),Object(f.jsxs)("div",{children:["City: ",p.adress.city]}),Object(f.jsxs)("div",{children:["State: ",p.adress.state]}),Object(f.jsxs)("div",{children:["Index: ",p.adress.zip]})]}):Object(f.jsx)("div",{})]})})),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},x=n(25),T=Object(o.b)({app:h}),v=Object(o.d)(T,Object(o.a)(x.a));window.store=v;var N=v;r.a.render(Object(f.jsx)(i.a,{store:N,children:Object(f.jsx)(p,{})}),document.getElementById("root")),g()}},[[55,1,2]]]);
//# sourceMappingURL=main.412221ef.chunk.js.map