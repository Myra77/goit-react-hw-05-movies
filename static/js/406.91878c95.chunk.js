(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[406],{406:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(861),c=n(439),a=n(757),o=n.n(a),u=n(791),i=n(87),s=n(689),p=n(308),f=n(728),h={},l=n(184),d=function(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),n=t[0],a=t[1],d=(0,u.useState)(""),v=(0,c.Z)(d,2),m=v[0],y=v[1],g=(0,i.lr)(),x=(0,c.Z)(g,2),_=x[0],b=x[1],w=(0,s.TH)();(0,u.useEffect)((function(){var e;function t(){return(t=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.LI)(_.get("query"));case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}_&&(y(null!==(e=_.get("query"))&&void 0!==e?e:""),function(){t.apply(this,arguments)}())}),[_]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{className:h.SearchForm,onSubmit:function(e){e.preventDefault(),b(""!==m?{query:m}:{}),(0,p.LI)(m).then(a).catch(console.error)},children:[(0,l.jsxs)("input",{children:['name="query" type="text" value=',m,"onChange=",function(e){var t=e.target.value;y(t)},'placeholder="Find your favorite movie" autoComplete="off" autoFocus']}),(0,l.jsx)("button",{type:"sumbit",className:h.SearchFormBtn,children:"Search"})]}),(0,l.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.title,r=e.poster_path,c=e.vote_average;return(0,l.jsx)("ul",{children:(0,l.jsxs)(i.rU,{to:"".concat(t),state:{from:w},children:[(0,l.jsxs)(l.Fragment,{children:["src=",(0,f.g)(r),' alt="poster"']}),(0,l.jsx)(l.Fragment,{children:n}),(0,l.jsx)(l.Fragment,{children:c})]})},t)}))})]})},v=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("main",{children:(0,l.jsx)(d,{})})})}},308:function(e,t,n){"use strict";n.d(t,{Bt:function(){return f},LI:function(){return h},_k:function(){return s},y:function(){return p}});var r=n(861),c=n(757),a=n.n(c),o=n(243),u="api_key=7c8c4a85f3e5bf51d7c8e7e89688e5d7",i="https://api.themoviedb.org",s=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(i,"/3/trending/movie/week?").concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(i,"/3/movie/").concat(t,"/credits?").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(i,"/3/movie/").concat(t,"/reviews?").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(i,"/3/search/movie?").concat(u,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},728:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var r=n(7),c=n.n(r),a=function(e){if(e)return"https://image.tmdb.org/t/p/w500".concat(e)};a.propTypes={image:c().string.isRequired}},888:function(e,t,n){"use strict";var r=n(47);function c(){}function a(){}a.resetWarningCache=c,e.exports=function(){function e(e,t,n,c,a,o){if(o!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:c};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=406.91878c95.chunk.js.map