"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[305],{6895:function(e,r,t){t.d(r,{IQ:function(){return p},Jh:function(){return l},Pg:function(){return u},XT:function(){return i},z1:function(){return f}});var n=t(5861),a=t(7757),s=t.n(a),o=t(3263);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="15ac2ec8cb818a755bd3461daf0df94b",i=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/trending/movie/day?api_key=".concat(c));case 3:if(0!==(r=e.sent).data.results.length){e.next=6;break}throw Error("\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!");case 6:return e.abrupt("return",r.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),console.log(e.t0.config),!e.t0.response){e.next=16;break}throw Error("\u041e\u0439! \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!");case 16:if(!e.t0.request){e.next=20;break}throw Error("\u041e\u0439! \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!");case 20:throw e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/movie/".concat(r,"?api_key=").concat(c,"&language=en-US"));case 3:if(0!==(t=e.sent).data.length){e.next=6;break}throw Error("\u0424\u0456\u043b\u044c\u043c \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e!");case 6:return e.abrupt("return",t.data);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.response){e.next=15;break}throw Error("\u041e\u0439! \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!");case 15:if(!e.t0.request){e.next=19;break}throw Error("\u041e\u0439! \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/movie/".concat(r,"/credits?api_key=").concat(c,"&language=en-US"));case 3:if((t=e.sent).data.cast.length){e.next=6;break}throw Error("\u0410\u043a\u0442\u043e\u0440\u0430 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e!");case 6:return e.abrupt("return",t.data.cast);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.response){e.next=15;break}throw Error("\u041e\u0439! \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!");case 15:if(!e.t0.request){e.next=19;break}throw Error("\u041e\u0439! \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(c,"&language=en-US"));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("\u0424\u0456\u043b\u044c\u043c \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e!");case 6:return e.abrupt("return",t.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.response){e.next=15;break}throw Error("\u041e\u0439! \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!");case 15:if(!e.t0.request){e.next=19;break}throw Error("\u041e\u0439! \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(r,"&language=en-US&page=1&include_adult=false"));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("\u0424\u0456\u043b\u044c\u043c \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e!");case 6:return e.abrupt("return",t.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.response){e.next=15;break}throw Error("\u041e\u0439! \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!");case 15:if(!e.t0.request){e.next=19;break}throw Error("\u041e\u0439! \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}()},4305:function(e,r,t){t.r(r),t.d(r,{default:function(){return G}});var n,a,s,o,c,i,u,p=t(5861),l=t(9439),f=t(7757),h=t.n(f),d=t(1087),x=t(7689),v=t(168),g=t(9128),w=t(6444),b=t(184),m=(0,w.ZP)(d.rU)(n||(n=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: #696969;\n  text-decoration: none;\n  font-weight: 500;\n  list-style: none;\n  text-transform: uppercase;\n  margin-left: 100px;\n  :hover {\n    color: #CD5C5C;\n  }\n"]))),k=function(e){var r=e.to,t=e.children;return(0,b.jsxs)(m,{to:r,children:[(0,b.jsx)(g.jTe,{size:"24"}),t]})},j=t(2791),Z=t(7596),y=t(6895),E=t(653),_=t(4608),U=w.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  gap: 40px;\n  padding-left: 100px;\n"]))),P=w.ZP.h2(s||(s=(0,v.Z)(["\n  font-size: 24px;\n  margin-bottom: 20px;\n"]))),S=w.ZP.p(o||(o=(0,v.Z)(["\n  font-size: 18px;\n  margin-bottom: 20px;\n"]))),q=w.ZP.h3(c||(c=(0,v.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),z=w.ZP.div(i||(i=(0,v.Z)(["\n  padding: 40px 0 40px 100px;\n  border-bottom: solid #e6b0aa;\n"]))),C=w.ZP.li(u||(u=(0,v.Z)(["\n  padding-bottom: 10px;\n  font-size: 20px;\n  :hover {\n    text-decoration: underline;\n    color: #e6b0aa;\n  }\n"]))),G=function(){var e,r,t=null!==(e=null===(r=(0,x.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",n=(0,x.UO)().movieId,a=(0,j.useState)([]),s=(0,l.Z)(a,2),o=s[0],c=s[1];return(0,j.useEffect)((function(){function e(){return(e=(0,p.Z)(h().mark((function e(){var r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.Pg)(n);case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,Z.Am)(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,b.jsxs)("main",{children:[(0,b.jsx)(k,{to:t,children:"Go back"}),(0,b.jsxs)(U,{children:[(0,b.jsx)("div",{children:(0,b.jsx)("img",{src:o.poster_path?"https://image.tmdb.org/t/p/w300"+o.poster_path:E,width:300,alt:o.title})}),(0,b.jsxs)("div",{children:[(0,b.jsxs)(P,{children:[o.title," (",o.release_date?o.release_date.slice(0,4):" No year",")"]}),(0,b.jsxs)(S,{children:["User Score:"," ",o.vote_average?Math.floor(10*o.vote_average).toFixed(0):"","%"]}),(0,b.jsx)(q,{children:" Overview"}),(0,b.jsx)(S,{children:o.overview}),(0,b.jsx)(q,{children:"Genres"}),(0,b.jsx)(S,{children:o.genres?o.genres.map((function(e){return e.name})).join(" "):"Genre not specified"})]})]}),(0,b.jsxs)(z,{children:[(0,b.jsx)(P,{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)(C,{children:(0,b.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,b.jsx)(C,{children:(0,b.jsx)(d.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,b.jsx)(j.Suspense,{fallback:(0,b.jsx)(_.a,{}),children:(0,b.jsx)(x.j3,{})})]})}},653:function(e,r,t){e.exports=t.p+"static/media/posterMovie.6b8cde30e3594f24c7af.png"}}]);
//# sourceMappingURL=305.5e4cf13b.chunk.js.map