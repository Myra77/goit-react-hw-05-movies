(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[393],{393:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(791),c=t(689),a=t(87),i={},o=t(184),s=function(){var e,n,t=(0,c.TH)(),s=(0,r.useRef)(null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");return(0,o.jsx)("button",{className:i.BtnBack,children:(0,o.jsx)(a.rU,{to:s.current,children:"Go back"})})},u=t(439),p=t(308),f=t(728),d={ContainerCardMovieInfo:"MovieDetailsCard_ContainerCardMovieInfo__mpcr7"},h=function(){var e=(0,r.useState)({}),n=(0,u.Z)(e,2),t=n[0],i=n[1],s=(0,c.UO)().id,h=t.poster_path,v=t.title,l=t.vote_average,x=t.overview,m=t.genres;(0,r.useEffect)((function(){(0,p.Y5)(s).then(i)}),[s]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:d.ContainerCard,children:[(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:(0,f.g)(h),alt:"poster",width:200})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:v}),(0,o.jsxs)("p",{children:["User score: ",l]}),(0,o.jsx)("h3",{children:"Overview"}),(0,o.jsx)("p",{children:x}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("p",{children:function(){if(m)return m.map((function(e){return e.name})).join(", ")}()})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Additional information"}),(0,o.jsx)(a.rU,{to:"cast",children:"Cast"}),(0,o.jsx)(a.rU,{to:"reviews",children:"Reviews"})]}),(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsx)(c.j3,{})})]})},v=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{children:"Go back"}),(0,o.jsx)(h,{})]})}},308:function(e,n,t){"use strict";t.d(n,{Bt:function(){return d},LI:function(){return h},Y5:function(){return p},_k:function(){return u},y:function(){return f}});var r=t(861),c=t(757),a=t.n(c),i=t(243),o="api_key=7c8c4a85f3e5bf51d7c8e7e89688e5d7",s="https://api.themoviedb.org",u=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/3/trending/movie/week?").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/3/movie/").concat(n,"?").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/3/movie/").concat(n,"/credits?").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/3/movie/").concat(n,"/reviews?").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/3/search/movie?").concat(o,"&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},728:function(e,n,t){"use strict";t.d(n,{g:function(){return a}});var r=t(7),c=t.n(r),a=function(e){if(e)return"https://image.tmdb.org/t/p/w500".concat(e)};a.propTypes={image:c().string.isRequired}},888:function(e,n,t){"use strict";var r=t(47);function c(){}function a(){}a.resetWarningCache=c,e.exports=function(){function e(e,n,t,c,a,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:c};return t.PropTypes=t,t}},7:function(e,n,t){e.exports=t(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=393.12eb307d.chunk.js.map