(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),u=n(4),i=n(2),l=function(e){var t=e.text,n={color:e.color,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{style:n},t)},d=function(e){var t=e.search,n=e.setSearch;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:t,onChange:function(e){return n(e.target.value)}}))},m=function(e){var t=e.newName,n=e.setNewName,a=e.newNumber,c=e.setNewNumber,o=e.addName;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:o},"add")))},f=function(e){var t=e.personsToShow,n=e.handleClick;return r.a.createElement("div",null,t.map((function(e){var t=e.name,a=e.number,c=e.id;return r.a.createElement("div",{key:t},t," ",a,r.a.createElement("button",{onClick:function(){return n(c)}},"delete"))})))},s=n(3),h=n.n(s),b="/api/persons",p=function(){return h.a.get(b).then((function(e){return e.data}))},v=function(e){return h.a.post(b,e).then((function(e){return e.data}))},E=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},w=function(e,t){return h.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),h=s[0],b=s[1],g=Object(a.useState)(""),N=Object(i.a)(g,2),O=N[0],j=N[1],x=Object(a.useState)(""),S=Object(i.a)(x,2),k=S[0],C=S[1],y=Object(a.useState)({}),B=Object(i.a)(y,2),D=B[0],I=B[1];Object(a.useEffect)((function(){p().then((function(e){c(e)}))}),[]);var J=n.filter((function(e){return e.name.toLowerCase().indexOf(k.toLowerCase())>-1})),L=function(e){b(""),j(""),I(e),setInterval((function(){I("")}),2e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),D.text&&r.a.createElement(l,{text:D.text,color:D.color}),r.a.createElement(d,{search:k,setSearch:C}),r.a.createElement("h3",null,"add a new"),r.a.createElement(m,{newName:h,setNewName:b,newNumber:O,setNewNumber:j,addName:function(e){e.preventDefault();var t=h.trim(),a=O.trim(),r=n.filter((function(e){return e.name===t}));if(r.length){if(window.confirm("".concat(t," is already added to phonebook, replace the old number with a new one?"))){var o=Object(u.a)(Object(u.a)({},r[0]),{},{number:a});w(o.id,o).then((function(e){c(n.map((function(t){return t.id!==e.id?t:e}))),L({text:"Updated ".concat(e.name),color:"green"})})).catch((function(e){L({text:e.response.data.error,color:"red"})}))}}else v({name:t,number:a}).then((function(e){c(n.concat(e)),L({text:"Added ".concat(e.name),color:"green"})})).catch((function(e){L({text:e.response.data.error,color:"red"})}))}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(f,{personsToShow:J,handleClick:function(e){var t=n.find((function(t){return t.id===e})).name;window.confirm("Delete ".concat(t,"?"))&&E(e).then((function(t){c(n.filter((function(t){return t.id!==e})))})).catch((function(e){L({text:e.response.data.error,color:"red"})}))}}))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5316831f.chunk.js.map