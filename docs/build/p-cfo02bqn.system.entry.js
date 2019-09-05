var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n["throw"](t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(a,s)}c((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-94251eb8.system.js","./p-5e41a5bc.system.js","./p-b4d9bcaf.system.js"],function(t){"use strict";var e,r,n,o,i,a,s,c,u,l,f,h,v,p,d,y,g,m,b,w,T,O;return{setters:[function(t){e=t.r;r=t.h;n=t.g;o=t.c},function(t){i=t.m;a=t.a;s=t.s;c=t.b;u=t.c;l=t.d;f=t.e;h=t.f;v=t.g;p=t.h;d=t.i;y=t.j;g=t.k;m=t.l;b=t.n;w=t.o;T=t.p},function(t){O=t.A}],execute:function(){var P=t("app_root",function(){function t(t){e(this,t)}t.prototype.render=function(){return r("main",null,r("stencil-router",{root:location.pathname},r("stencil-route-switch",{scrollTopOffset:0},r("stencil-route",{url:"/",component:"app-home",exact:true}))))};Object.defineProperty(t,"style",{get:function(){return""},enumerable:true,configurable:true});return t}());var x=t("stencil_route",function(){function t(t){e(this,t);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}t.prototype.computeMatch=function(t){var e=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!t||e){return}this.previousMatch=this.match;return this.match=i(t.pathname,{path:this.url,exact:this.exact,strict:true})};t.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){t={};if(this.history&&this.history.location.hash){t={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){t={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(t)}else if(this.match&&!a(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(t)}return[2]})})};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}})})};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}})})};t.prototype.render=function(){if(!this.match||!this.history){return null}var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},t,{component:this.component}))}if(this.component){var e=this.component;return r(e,Object.assign({},t))}};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:true,configurable:true});return t}());O.injectProps(x,["location","history","historyType","routeViewsUpdated"]);var L=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var _=function(t,e,r){return i(t,{path:e,exact:r,strict:true})};var k=function(t){return t.tagName==="STENCIL-ROUTE"};var E=t("stencil_route_switch",function(){function t(t){e(this,t);this.group=L();this.subscribers=[];this.queue=o(this,"queue")}t.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};t.prototype.regenerateSubscribers=function(t){return __awaiter(this,void 0,void 0,function(){var e,r;var n=this;return __generator(this,function(o){if(t==null){return[2]}e=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(k).map(function(r,n){var o=_(t.pathname,r.url,r.exact);if(o&&e===-1){e=n}return{el:r,match:o}});if(e===-1){return[2]}if(this.activeIndex===e){this.subscribers[e].el.match=this.subscribers[e].match;return[2]}this.activeIndex=e;r=this.subscribers[this.activeIndex];if(this.scrollTopOffset){r.el.scrollTopOffset=this.scrollTopOffset}r.el.group=this.group;r.el.match=r.match;r.el.componentUpdated=function(t){n.queue.write(function(){n.subscribers.forEach(function(t,e){t.el.componentUpdated=undefined;if(e===n.activeIndex){return t.el.style.display=""}if(n.scrollTopOffset){t.el.scrollTopOffset=n.scrollTopOffset}t.el.group=n.group;t.el.match=null;t.el.style.display="none"})});if(n.routeViewsUpdated){n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},t))}};return[2]})})};t.prototype.render=function(){return r("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return t}());O.injectProps(E,["location","routeViewsUpdated"]);var S=function(t){var e=[];for(var r=1;r<arguments.length;r++){e[r-1]=arguments[r]}if(!t){console.warn.apply(console,e)}};var j=function(){var t;var e=[];var r=function(e){S(t==null,"A history supports only one prompt at a time");t=e;return function(){if(t===e){t=null}}};var n=function(e,r,n,o){if(t!=null){var i=typeof t==="function"?t(e,r):t;if(typeof i==="string"){if(typeof n==="function"){n(i,o)}else{S(false,"A history needs a getUserConfirmation function in order to use a prompt message");o(true)}}else{o(i!==false)}}else{o(true)}};var o=function(t){var r=true;var n=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}if(r){t.apply(void 0,e)}};e.push(n);return function(){r=false;e=e.filter(function(t){return t!==n})}};var i=function(){var t=[];for(var r=0;r<arguments.length;r++){t[r]=arguments[r]}e.forEach(function(e){return e.apply(void 0,t)})};return{setPrompt:r,confirmTransitionTo:n,appendListener:o,notifyListeners:i}};var U=function(t,e){if(e===void 0){e="scrollPositions"}var r=new Map;var n=function(e,n){r.set(e,n);if(s(t,"sessionStorage")){var o=[];r.forEach(function(t,e){o.push([e,t])});t.sessionStorage.setItem("scrollPositions",JSON.stringify(o))}};var o=function(t){return r.get(t)};var i=function(t){return r.has(t)};var a=function(e){n(e,[t.scrollX,t.scrollY])};if(s(t,"sessionStorage")){var c=t.sessionStorage.getItem(e);r=c?new Map(JSON.parse(c)):r}if("scrollRestoration"in t.history){history.scrollRestoration="manual"}return{set:n,get:o,has:i,capture:a}};var I="popstate";var A="hashchange";var R=function(t,e){if(e===void 0){e={}}var r=false;var n=t.history;var o=t.location;var i=t.navigator;var a=c(t);var s=!u(i);var b=U(t);var w=e.forceRefresh!=null?e.forceRefresh:false;var T=e.getUserConfirmation!=null?e.getUserConfirmation:g;var O=e.keyLength!=null?e.keyLength:6;var P=e.basename?l(f(e.basename)):"";var x=function(){try{return t.history.state||{}}catch(t){return{}}};var L=function(t){t=t||{};var e=t.key,r=t.state;var n=o.pathname,i=o.search,a=o.hash;var s=n+i+a;S(!P||p(s,P),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+P+'".');if(P){s=d(s,P)}return h(s,r,e||v(O))};var _=j();var k=function(t){b.capture(K.location.key);Object.assign(K,t);K.location.scrollPosition=b.get(K.location.key);K.length=n.length;_.notifyListeners(K.location,K.action)};var E=function(t){if(!m(i,t)){C(L(t.state))}};var R=function(){C(L(x()))};var C=function(t){if(r){r=false;k()}else{var e="POP";_.confirmTransitionTo(t,e,T,function(r){if(r){k({action:e,location:t})}else{H(t)}})}};var H=function(t){var e=K.location;var n=M.indexOf(e.key);var o=M.indexOf(t.key);if(n===-1){n=0}if(o===-1){o=0}var i=n-o;if(i){r=true;X(i)}};var V=L(x());var M=[V.key];var q=0;var Y=false;var N=function(t){return P+y(t)};var B=function(t,e){S(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="PUSH";var i=h(t,e,v(O),K.location);_.confirmTransitionTo(i,r,T,function(t){if(!t){return}var e=N(i);var s=i.key,c=i.state;if(a){n.pushState({key:s,state:c},"",e);if(w){o.href=e}else{var u=M.indexOf(K.location.key);var l=M.slice(0,u===-1?0:u+1);l.push(i.key);M=l;k({action:r,location:i})}}else{S(c===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");o.href=e}})};var D=function(t,e){S(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="REPLACE";var i=h(t,e,v(O),K.location);_.confirmTransitionTo(i,r,T,function(t){if(!t){return}var e=N(i);var s=i.key,c=i.state;if(a){n.replaceState({key:s,state:c},"",e);if(w){o.replace(e)}else{var u=M.indexOf(K.location.key);if(u!==-1){M[u]=i.key}k({action:r,location:i})}}else{S(c===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");o.replace(e)}})};var X=function(t){n.go(t)};var F=function(){return X(-1)};var J=function(){return X(1)};var W=function(e){q+=e;if(q===1){t.addEventListener(I,E);if(s){t.addEventListener(A,R)}}else if(q===0){t.removeEventListener(I,E);if(s){t.removeEventListener(A,R)}}};var G=function(t){if(t===void 0){t=""}var e=_.setPrompt(t);if(!Y){W(1);Y=true}return function(){if(Y){Y=false;W(-1)}return e()}};var z=function(t){var e=_.appendListener(t);W(1);return function(){W(-1);e()}};var K={length:n.length,action:"POP",location:V,createHref:N,push:B,replace:D,go:X,goBack:F,goForward:J,block:G,listen:z,win:t};return K};var C="hashchange";var H={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+w(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:w,decodePath:f},slash:{encodePath:f,decodePath:f}};var V=function(t,e){if(e===void 0){e={}}var r=false;var n=null;var o=0;var i=false;var a=t.location;var s=t.history;var c=b(t.navigator);var u=e.keyLength!=null?e.keyLength:6;var m=e.getUserConfirmation,w=m===void 0?g:m,O=e.hashType,P=O===void 0?"slash":O;var x=e.basename?l(f(e.basename)):"";var L=H[P],_=L.encodePath,k=L.decodePath;var E=function(){var t=a.href;var e=t.indexOf("#");return e===-1?"":t.substring(e+1)};var U=function(t){return a.hash=t};var I=function(t){var e=a.href.indexOf("#");a.replace(a.href.slice(0,e>=0?e:0)+"#"+t)};var A=function(){var t=k(E());S(!x||p(t,x),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+x+'".');if(x){t=d(t,x)}return h(t,undefined,v(u))};var R=j();var V=function(t){Object.assign(tt,t);tt.length=s.length;R.notifyListeners(tt.location,tt.action)};var M=function(){var t=E();var e=_(t);if(t!==e){I(e)}else{var o=A();var i=tt.location;if(!r&&T(i,o)){return}if(n===y(o)){return}n=null;q(o)}};var q=function(t){if(r){r=false;V()}else{var e="POP";R.confirmTransitionTo(t,e,w,function(r){if(r){V({action:e,location:t})}else{Y(t)}})}};var Y=function(t){var e=tt.location;var n=X.lastIndexOf(y(e));var o=X.lastIndexOf(y(t));if(n===-1){n=0}if(o===-1){o=0}var i=n-o;if(i){r=true;G(i)}};var N=E();var B=_(N);if(N!==B){I(B)}var D=A();var X=[y(D)];var F=function(t){return"#"+_(x+y(t))};var J=function(t,e){S(e===undefined,"Hash history cannot push state; it is ignored");var r="PUSH";var o=h(t,undefined,v(u),tt.location);R.confirmTransitionTo(o,r,w,function(t){if(!t){return}var e=y(o);var i=_(x+e);var a=E()!==i;if(a){n=e;U(i);var s=X.lastIndexOf(y(tt.location));var c=X.slice(0,s===-1?0:s+1);c.push(e);X=c;V({action:r,location:o})}else{S(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");V()}})};var W=function(t,e){S(e===undefined,"Hash history cannot replace state; it is ignored");var r="REPLACE";var o=h(t,undefined,v(u),tt.location);R.confirmTransitionTo(o,r,w,function(t){if(!t){return}var e=y(o);var i=_(x+e);var a=E()!==i;if(a){n=e;I(i)}var s=X.indexOf(y(tt.location));if(s!==-1){X[s]=e}V({action:r,location:o})})};var G=function(t){S(c,"Hash history go(n) causes a full page reload in this browser");s.go(t)};var z=function(){return G(-1)};var K=function(){return G(1)};var Q=function(t,e){o+=e;if(o===1){t.addEventListener(C,M)}else if(o===0){t.removeEventListener(C,M)}};var Z=function(e){if(e===void 0){e=""}var r=R.setPrompt(e);if(!i){Q(t,1);i=true}return function(){if(i){i=false;Q(t,-1)}return r()}};var $=function(e){var r=R.appendListener(e);Q(t,1);return function(){Q(t,-1);r()}};var tt={length:s.length,action:"POP",location:D,createHref:F,push:J,replace:W,go:G,goBack:z,goForward:K,block:Z,listen:$,win:t};return tt};var M=function(t,e){var r=t.pathname.indexOf(e)==0?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:r})};var q={browser:R,hash:V};var Y=t("stencil_router",function(){function t(t){var r=this;e(this,t);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(t){if(t===void 0){t={}}if(r.history&&t.scrollToId&&r.historyType==="browser"){var e=r.history.win.document.getElementById(t.scrollToId);if(e){return e.scrollIntoView()}}r.scrollTo(t.scrollTopOffset||r.scrollTopOffset)};this.isServer=o(this,"isServer");this.queue=o(this,"queue")}t.prototype.componentWillLoad=function(){var t=this;this.history=q[this.historyType](this.el.ownerDocument.defaultView);this.history.listen(function(e){e=M(e,t.root);t.location=e});this.location=M(this.history.location,this.root)};t.prototype.scrollTo=function(t){var e=this.history;if(t==null||this.isServer||!e){return}if(e.action==="POP"&&Array.isArray(e.location.scrollPosition)){return this.queue.write(function(){if(e&&e.location&&Array.isArray(e.location.scrollPosition)){e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}})}return this.queue.write(function(){e.win.scrollTo(0,t)})};t.prototype.render=function(){if(!this.location||!this.history){return}var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return r(O.Provider,{state:t},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return t}())}}});