(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(6),r=a.n(n),i=(a(11),a(2)),l=(a(12),a(0)),o=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("h1",{className:"header__text",children:[Object(l.jsx)("span",{className:"header__title header__title_left",children:"Weather"}),Object(l.jsx)("span",{className:"header__title header__title_right",children:"forecast"})]})})},u=function(){return Object(l.jsx)("footer",{className:"footer",children:"C \u041b\u042e\u0411\u041e\u0412\u042c\u042e \u041e\u0422 MERCURY DEVELOPMENT"})},j=a(3),d="536c5078bfa32aff06e5cce728dc5f42",f="https://api.openweathermap.org/",h=[["Samara",53.195873,50.100193],["Tolyatti",53.507836,49.420393],["Saratov",51.533557,46.034257],["Kazan",55.796127,49.106405],["Krasnodar",45.03547,38.975313]],p=function(e){var t,a=c.useState("Select city"),s=Object(i.a)(a,2),n=s[0],r=s[1],o=[],u=Object(j.a)(e.cities);try{for(u.s();!(t=u.n()).done;){var h=t.value;o.push(h)}}catch(S){u.e(S)}finally{u.f()}var p=c.useState(!1),_=Object(i.a)(p,2),m=_[0],b=_[1],O=c.useState(!1),x=Object(i.a)(O,2),g=x[0],v=x[1],N=function(){v(!g)};return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("h3",{className:"forecast__title",children:e.title}),Object(l.jsxs)("div",{className:g?"forecast__select forecast__select-up":"forecast__select",children:[Object(l.jsx)("span",{onClick:function(e){b(!m),N()},children:n}),m&&Object(l.jsx)("ul",{className:"forecast__cities",children:o.map((function(t){return Object(l.jsx)("li",{onClick:function(a){r(t[0]),b(!m),N(),e.apiRequest("".concat(f).concat("data/2.5/onecall?","lat=").concat(t[1],"&lon=").concat(t[2],"&exclude=current,minutely,hourly,alerts&appid=").concat(d,"&units=metric"))},children:t[0]},t[0])}))})]})]})},_=function(e){var t,a="data/2.5/onecall/timemachine?",s=c.useState("Select city"),n=Object(i.a)(s,2),r=n[0],o=n[1],u=[],h=Object(j.a)(e.cities);try{for(h.s();!(t=h.n()).done;){var p=t.value;u.push(p)}}catch(B){h.e(B)}finally{h.f()}var _=c.useState(!1),m=Object(i.a)(_,2),b=m[0],O=m[1],x=c.useState(!1),g=Object(i.a)(x,2),v=g[0],N=g[1],S=function(){N(!v)},y=c.useState(null),w=Object(i.a)(y,2),R=w[0],C=w[1],k=c.useState(""),D=Object(i.a)(k,2),F=D[0],T=D[1],L=c.useState(""),M=Object(i.a)(L,2),q=M[0],E=M[1],I=(new Date).toISOString().split("T")[0],P=Date.now()-432e6,U=new Date(P).toISOString().split("T")[0];return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("h3",{className:"forecast__title",children:e.title}),Object(l.jsxs)("div",{className:"forecast__inputs",children:[Object(l.jsxs)("div",{className:v?"forecast__select forecast__select-up":"forecast__select",children:[Object(l.jsx)("span",{onClick:function(e){O(!b),S()},children:r}),b&&Object(l.jsx)("ul",{className:"forecast__cities",children:u.map((function(t){return Object(l.jsxs)("li",{onClick:function(c){var s,n;o(t[0]),O(!b),S(),T(t[1]),E(t[2]),s=t[1],n=t[2],R&&e.apiRequest("".concat(f).concat(a,"lat=").concat(s,"&lon=").concat(n,"&dt=").concat(R,"&appid=").concat(d,"&units=metric"))},children:[t[0]," "]},t[0])}))})]}),Object(l.jsx)("div",{className:"forecast__calendar",children:Object(l.jsx)("input",{type:"date",placeholder:"Select date",name:"datePast",className:"forecast__input",min:U,max:I,onChange:function(t){!function(t){var c=parseInt((new Date(t).getTime()/1e3).toFixed(0));C(c),e.apiRequest("".concat(f).concat(a,"lat=").concat(F,"&lon=").concat(q,"&dt=").concat(c,"&appid=").concat(d,"&units=metric"))}(t.target.value)},defaultValue:""})})]})]})},m=function(e){var t=new Date(1e3*e.dataResult[0]).toLocaleString("en-US").split(",")[0],a=t.split("/")[0],c=t.split("/")[1]+" "+["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","decr"][a-1]+" "+t.split("/")[2];return Object(l.jsxs)("div",{className:"forecast__result forecast__result_full",children:[Object(l.jsxs)("p",{className:"forecast__date",children:[c,"  "]}),Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.dataResult[2],"@2x.png"),alt:"",className:"forecast__img"}),Object(l.jsxs)("p",{className:"forecast__temp",children:["+",e.dataResult[1],"\xb0"]})]})},b=function(e){for(var t=[],a=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","decr"],s=0;s<e.dataResult[0].length;s++){var n=new Date(1e3*e.dataResult[0][s]).toLocaleString("en-US").split(",")[0],r=n.split("/")[0],o=n.split("/")[1]+" "+a[r-1]+" "+n.split("/")[2];t.push(Object(l.jsxs)("div",{className:"forecast__result forecast__result_full",children:[Object(l.jsx)("h4",{className:"forecast__date",children:o}),Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.dataResult[2][s],"@2x.png"),alt:"",className:"forecast__img "}),Object(l.jsxs)("p",{className:"forecast__temp",children:["+",e.dataResult[1][s],"\xb0"]})]},Math.random()))}var u=c.useState(0),j=Object(i.a)(u,2),d=j[0],f=j[1],h=function(){0===d&&f(-183),d<=-915&&f(0)};return Object(l.jsxs)("div",{className:"slider",children:[0!==d&&Object(l.jsx)("span",{className:"slider__btn slider__left",onClick:function(e){f(d+183),h()}}),Object(l.jsx)("div",{className:"slider__inner",style:{marginLeft:d},children:t}),Object(l.jsx)("span",{className:"slider__btn slider__right",onClick:function(e){f(d-183),h()}})]})},O=function(){return Object(l.jsxs)("div",{className:"forecast__result forecast__result_empty",children:[Object(l.jsx)("img",{src:"./images/bg160.svg",alt:"empty",className:"forecast__img "}),Object(l.jsx)("span",{className:"forecast__text",children:"Fill in all the fields and the weather will be displayed"})]})},x=function(){var e=c.useState(""),t=Object(i.a)(e,2),a=t[0],s=t[1],n=c.useState(""),r=Object(i.a)(n,2),j=r[0],d=r[1],f=c.useState(null),x=Object(i.a)(f,2),g=x[0],v=x[1],N=c.useState(null),S=Object(i.a)(N,2),y=S[0],w=S[1],R=[],C=[],k=[];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(o,{}),Object(l.jsxs)("section",{className:"content",children:[Object(l.jsxs)("div",{className:"forecast",children:[Object(l.jsx)(p,{title:"7 Days Forecast",cities:h,apiRequest:function(e){return fetch(e).then((function(e){return e.ok||s(e.statusText),e.json()})).then((function(e){if(e.daily){for(var t=0;t<=7;t++)R.push(e.daily[t].dt),C.push(Math.round(e.daily[t].temp.day)),k.push(e.daily[0].weather[0].icon);s(""),v([R,C,k])}}))}}),a||!g?Object(l.jsx)(O,{}):Object(l.jsx)(b,{dataResult:g})]}),Object(l.jsxs)("div",{className:"forecast forecast-past",children:[Object(l.jsx)(_,{title:"Forecast for a Date in the Past",cities:h,apiRequest:function(e){return fetch(e).then((function(e){return e.ok||d(e.statusText),e.json()})).then((function(e){e.current&&(d(""),w([e.current.dt,Math.round(e.current.temp),e.current.weather[0].icon]))}))}}),j||!y?Object(l.jsx)(O,{}):Object(l.jsx)(m,{dataResult:y})]})]}),Object(l.jsx)(u,{})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),g()}},[[14,1,2]]]);
//# sourceMappingURL=main.872889e1.chunk.js.map