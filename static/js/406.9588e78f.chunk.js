(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[406],{406:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(861),c=n(439),a=n(757),u=n.n(a),o=n(791),i=n(87),s=n(689),p=n(308),f=n(728),h={},l=n(184),v=function(){var t=(0,o.useState)([]),e=(0,c.Z)(t,2),n=e[0],a=e[1],v=(0,o.useState)(""),d=(0,c.Z)(v,2),m=d[0],y=d[1],g=(0,i.lr)(),x=(0,c.Z)(g,2),b=x[0],w=x[1],_=(0,s.TH)();(0,o.useEffect)((function(){var t;function e(){return(e=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.LI)(b.get("query"));case 2:e=t.sent,a(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}b&&(y(null!==(t=b.get("query"))&&void 0!==t?t:""),function(){e.apply(this,arguments)}())}),[b]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{className:h.SearchForm,onSubmit:function(t){t.preventDefault(),w(""!==m?{query:m}:{}),(0,p.LI)(m).then(a).catch(console.error)},children:[(0,l.jsxs)("input",{children:['name="query" type="text" value=',m,"onChange=",function(t){var e=t.target.value;y(e)},'placeholder="Find your favorite movie" autoComplete="off" autoFocus']}),(0,l.jsx)("button",{type:"sumbit",className:h.SearchFormBtn,children:"Search"})]}),(0,l.jsx)("ul",{children:n.map((function(t){var e=t.id,n=t.title,r=t.poster_path,c=t.vote_average;return(0,l.jsx)("ul",{children:(0,l.jsxs)(i.rU,{to:"".concat(e),state:{from:_},children:[(0,l.jsxs)(l.Fragment,{children:["src=",(0,f.g)(r),' alt="poster"']}),(0,l.jsx)(l.Fragment,{children:n}),(0,l.jsx)(l.Fragment,{children:c})]})},e)}))})]})},d=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("main",{children:(0,l.jsx)(v,{})})})}},308:function(t,e,n){"use strict";n.d(e,{Bt:function(){return h},LI:function(){return l},Y5:function(){return p},_k:function(){return s},y:function(){return f}});var r=n(861),c=n(757),a=n.n(c),u=n(243),o="api_key=7c8c4a85f3e5bf51d7c8e7e89688e5d7",i="https://api.themoviedb.org",s=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/trending/movie/week?").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/movie/").concat(e,"?").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/movie/").concat(e,"/credits?").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/movie/").concat(e,"/reviews?").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/search/movie?").concat(o,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},728:function(t,e,n){"use strict";n.d(e,{g:function(){return a}});var r=n(7),c=n.n(r),a=function(t){if(t)return"https://image.tmdb.org/t/p/w500".concat(t)};a.propTypes={image:c().string.isRequired}},888:function(t,e,n){"use strict";var r=n(47);function c(){}function a(){}a.resetWarningCache=c,t.exports=function(){function t(t,e,n,c,a,u){if(u!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:c};return n.PropTypes=n,n}},7:function(t,e,n){t.exports=n(888)()},47:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=406.9588e78f.chunk.js.map