(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,r){t.exports=r(54)},50:function(t,e,r){},54:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(17),i=r.n(a),c=r(18),l=r(6),s=r(19),u=r.n(s);r(50);function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var u={};function h(){}function m(){}function d(){}var p={};c(p,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&r.call(y,o)&&(p=y);var g=d.prototype=h.prototype=Object.create(p);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=d,c(g,"constructor",d),c(d,"constructor",m),m.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}function h(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)("daily"),s=Object(l.a)(i,2),h=s[0],m=s[1],d=function(){var t=Object(c.a)(f().mark(function t(){var e,r;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("assets/json/dataTime.json");case 2:e=t.sent,r=e.data,a(r);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)(function(){d()},[]);var p=function(t,e){m(e)};return r?o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row row-cols-1 row-cols-lg-3"},o.a.createElement("section",{className:"col col-lg-3 pt-3"},o.a.createElement("div",{className:"containerLeftTop rounded p-4"},o.a.createElement("div",{className:"row row-cols-2 row-cols-lg-1"},o.a.createElement("div",{className:"col d-flex flex-column justify-content-center align-items-center"},o.a.createElement("img",{width:"40%",className:"rounded-circle border border-white",src:"./assets/img/image-jeremy.png",alt:"avatar"})),o.a.createElement("div",{className:"col d-flex flex-column justify-content-center align-items-center"},o.a.createElement("small",{className:"greyLight"},"Report for"),o.a.createElement("h2",null,"John Doe")))),o.a.createElement("div",{className:"containerLeftBottom rounded p-4"},o.a.createElement("div",{className:"row h-100 row-cols-3 row-cols-lg-1 text-center text-lg-start"},o.a.createElement("div",{className:"col py-2"},o.a.createElement("button",{className:"daily"===h?"active":void 0,onClick:function(t){return p(0,"daily")}},"Daily")),o.a.createElement("div",{className:"col py-2"},o.a.createElement("button",{className:"weekly"===h?"active":void 0,onClick:function(t){return p(0,"weekly")}},"Weekly")),o.a.createElement("div",{className:"col py-2"},o.a.createElement("button",{className:"monthly"===h?"active":void 0,onClick:function(t){return p(0,"monthly")}},"Monthly"))))),o.a.createElement("section",{className:"categories col col-lg-9"},o.a.createElement("div",{className:"row row-cols-1 row-cols-md-3"},r&&r.length>0&&r.map(function(t,e){return o.a.createElement("div",{className:"col pt-3",key:e},o.a.createElement("div",{className:"containerIcon icon"+e+" rounded"}),o.a.createElement("div",{className:"containerContent p-4 rounded"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-10"},t.title),o.a.createElement("div",{className:"col-2"},"...")),o.a.createElement("div",{className:"mt-3"},o.a.createElement("h2",null,t.timeframes[h].current,"hrs")),o.a.createElement("div",{className:"greyLight"},"Last week - ",t.timeframes[h].previous,"hrs")))}))))):null}r(52);i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)))}},[[20,2,1]]]);
//# sourceMappingURL=main.fca9b9c1.chunk.js.map