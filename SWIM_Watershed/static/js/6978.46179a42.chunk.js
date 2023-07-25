"use strict";(self.webpackChunkswimfront=self.webpackChunkswimfront||[]).push([[6978],{11873:function(n,e,t){function r(){return[1,0,0,0,1,0,0,0,1]}function i(n,e){return new Float64Array(n,e,9)}t.d(e,{a:function(){return i},c:function(){return r}});Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(n){return[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8]]},fromValues:function(n,e,t,r,i,o,u,a,s){return[n,e,t,r,i,o,u,a,s]},createView:i},Symbol.toStringTag,{value:"Module"}))},98131:function(n,e,t){function r(){return[0,0,0,1]}function i(n){return[n[0],n[1],n[2],n[3]]}function o(n,e){return new Float64Array(n,e,4)}t.d(e,{I:function(){return u},a:function(){return r},b:function(){return i},c:function(){return o}});var u=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:i,fromValues:function(n,e,t,r){return[n,e,t,r]},createView:o,IDENTITY:u},Symbol.toStringTag,{value:"Module"}))},40237:function(n,e,t){t.d(e,{N:function(){return o}});var r=t(43144),i=t(15671),o={convertToGEGeometry:function(n,e){return null==e?null:n.convertJSONToGeometry(e)},exportPoint:function(n,e,t){var r=new u(n.getPointX(e),n.getPointY(e),t),i=n.hasZ(e),o=n.hasM(e);return i&&(r.z=n.getPointZ(e)),o&&(r.m=n.getPointM(e)),r},exportPolygon:function(n,e,t){return new a(n.exportPaths(e),t,n.hasZ(e),n.hasM(e))},exportPolyline:function(n,e,t){return new s(n.exportPaths(e),t,n.hasZ(e),n.hasM(e))},exportMultipoint:function(n,e,t){return new c(n.exportPoints(e),t,n.hasZ(e),n.hasM(e))},exportExtent:function(n,e,t){var r=n.hasZ(e),i=n.hasM(e),o=new h(n.getXMin(e),n.getYMin(e),n.getXMax(e),n.getYMax(e),t);if(r){var u=n.getZExtent(e);o.zmin=u.vmin,o.zmax=u.vmax}if(i){var a=n.getMExtent(e);o.mmin=a.vmin,o.mmax=a.vmax}return o}};var u=(0,r.Z)((function n(e,t,r){(0,i.Z)(this,n),this.x=e,this.y=t,this.spatialReference=r,this.z=void 0,this.m=void 0}));var a=(0,r.Z)((function n(e,t,r,o){(0,i.Z)(this,n),this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),o&&(this.hasM=o)}));var s=(0,r.Z)((function n(e,t,r,o){(0,i.Z)(this,n),this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),o&&(this.hasM=o)}));var c=(0,r.Z)((function n(e,t,r,o){(0,i.Z)(this,n),this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),o&&(this.hasM=o)}));var h=(0,r.Z)((function n(e,t,r,o,u){(0,i.Z)(this,n),this.xmin=e,this.ymin=t,this.xmax=r,this.ymax=o,this.spatialReference=u,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}))},85981:function(n,e,t){t.d(e,{Ue:function(){return s},nF:function(){return h},zk:function(){return c}});var r=t(16889),i=t(21530),o=t(11186),u=t(71353),a=t(11185);function s(n){return n?{origin:(0,u.a)(n.origin),vector:(0,u.a)(n.vector)}:{origin:(0,u.c)(),vector:(0,u.c)()}}function c(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,o.c)(t.origin,n),(0,o.b)(t.vector,e,n),t}function h(n,e,t){return function(n,e,t,i,u){var s=n.vector,c=n.origin,h=(0,o.b)(a.WM.get(),e,c),f=(0,o.e)(s,h)/(0,o.p)(s);return(0,o.g)(u,s,(0,r.uZ)(f,t,i)),(0,o.a)(u,u,n.origin)}(n,e,0,1,t)}(0,u.c)(),(0,u.c)(),new i.x((function(){return s()}))},58971:function(n,e,t){t.d(e,{G6:function(){return E},Ie:function(){return R},J9:function(){return b},RF:function(){return g},U1:function(){return O},vY:function(){return c},ym:function(){return x}});var r=t(29439),i=t(92026),o=t(77981);var u=function(n,e,t){return[e,t]},a=function(n,e,t){return[e,t,n[2]]},s=function(n,e,t){return[e,t,n[2],n[3]]};function c(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:(0,i.pC)(n.extent)?[n.extent.xmin,n.extent.ymax]:[0,0]}:null}function h(n,e){var t=n.scale,r=n.translate;return Math.round((e-r[0])/t[0])}function f(n,e){var t=n.scale,r=n.translate;return Math.round((r[1]-e)/t[1])}function l(n,e,t){for(var r,i,o,u,a=[],s=0;s<t.length;s++){var c=t[s];s>0?(o=h(n,c[0]),u=f(n,c[1]),o===r&&u===i||(a.push(e(c,o-r,u-i)),r=o,i=u)):(r=h(n,c[0]),i=f(n,c[1]),a.push(e(c,r,i)))}return a.length>0?a:null}function d(n,e){var t=n.scale,r=n.translate;return e*t[0]+r[0]}function v(n,e){var t=n.scale;return n.translate[1]-e*t[1]}function _(n,e,t){var i=new Array(t.length);if(!t.length)return i;var o=(0,r.Z)(n.scale,2),u=o[0],a=o[1],s=d(n,t[0][0]),c=v(n,t[0][1]);i[0]=e(t[0],s,c);for(var h=1;h<t.length;h++){var f=t[h];s+=f[0]*u,c-=f[1]*a,i[h]=e(f,s,c)}return i}function m(n,e,t){for(var r=new Array(t.length),i=0;i<t.length;i++)r[i]=_(n,e,t[i]);return r}function p(n,e,t,r,i){var o;return e.points=null!==(o=function(n,e,t,r){return l(n,t?r?s:a:r?a:u,e)}(n,t.points,r,i))&&void 0!==o?o:[],e}function g(n,e,t,r,i){return e.x=h(n,t.x),e.y=f(n,t.y),e!==t&&(r&&(e.z=t.z),i&&(e.m=t.m)),e}function T(n,e,t,r,i){var o=function(n,e,t,r){for(var i=[],o=t?r?s:a:r?a:u,c=0;c<e.length;c++){var h=l(n,o,e[c]);h&&h.length>=3&&i.push(h)}return i.length?i:null}(n,t.rings,r,i);return o?(e.rings=o,e):null}function y(n,e,t,r,i){var o=function(n,e,t,r){for(var i=[],o=t?r?s:a:r?a:u,c=0;c<e.length;c++){var h=l(n,o,e[c]);h&&h.length>=2&&i.push(h)}return i.length?i:null}(n,t.paths,r,i);return o?(e.paths=o,e):null}function x(n,e){return n&&e?(0,o.wp)(e)?g(n,{},e,!1,!1):(0,o.l9)(e)?y(n,{},e,!1,!1):(0,o.oU)(e)?T(n,{},e,!1,!1):(0,o.aW)(e)?p(n,{},e,!1,!1):(0,o.YX)(e)?function(n,e,t,r,i){return e.xmin=h(n,t.xmin),e.ymin=f(n,t.ymin),e.xmax=h(n,t.xmax),e.ymax=f(n,t.ymax),e!==t&&(r&&(e.zmin=t.zmin,e.zmax=t.zmax),i&&(e.mmin=t.mmin,e.mmax=t.mmax)),e}(n,{},e,!1,!1):null:null}function b(n,e,t,r,o){return(0,i.pC)(t)&&(e.points=function(n,e,t,r){return _(n,t?r?s:a:r?a:u,e)}(n,t.points,r,o)),e}function O(n,e,t,r,o){return(0,i.Wi)(t)||(e.x=d(n,t.x),e.y=v(n,t.y),e!==t&&(r&&(e.z=t.z),o&&(e.m=t.m))),e}function R(n,e,t,r,o){return(0,i.pC)(t)&&(e.rings=function(n,e,t,r){return m(n,t?r?s:a:r?a:u,e)}(n,t.rings,r,o)),e}function E(n,e,t,r,o){return(0,i.pC)(t)&&(e.paths=function(n,e,t,r){return m(n,t?r?s:a:r?a:u,e)}(n,t.paths,r,o)),e}},19995:function(n,e,t){t.d(e,{_W:function(){return g},iV:function(){return b},oj:function(){return E}});var r=t(74165),i=t(15671),o=t(43144),u=t(15861),a=t(37762),s=t(29439),c=t(92026),h=t(52587),f=t(40237),l=t(92975),d=t(81753),v=[0,0];function _(n,e){if(!e)return null;if("x"in e){var t,r,i={x:0,y:0};return t=n(e.x,e.y,v),r=(0,s.Z)(t,2),i.x=r[0],i.y=r[1],null!=e.z&&(i.z=e.z),null!=e.m&&(i.m=e.m),i}if("xmin"in e){var o,u,a,c,h={xmin:0,ymin:0,xmax:0,ymax:0};return o=n(e.xmin,e.ymin,v),u=(0,s.Z)(o,2),h.xmin=u[0],h.ymin=u[1],a=n(e.xmax,e.ymax,v),c=(0,s.Z)(a,2),h.xmax=c[0],h.ymax=c[1],e.hasZ&&(h.zmin=e.zmin,h.zmax=e.zmax,h.hasZ=!0),e.hasM&&(h.mmin=e.mmin,h.mmax=e.mmax,h.hasM=!0),h}return"rings"in e?{rings:m(e.rings,n),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:m(e.paths,n),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:p(e.points,n),hasM:e.hasM,hasZ:e.hasZ}:null}function m(n,e){var t,r=[],i=(0,a.Z)(n);try{for(i.s();!(t=i.n()).done;){var o=t.value;r.push(p(o,e))}}catch(u){i.e(u)}finally{i.f()}return r}function p(n,e){var t,r=[],i=(0,a.Z)(n);try{for(i.s();!(t=i.n()).done;){var o=t.value,u=e(o[0],o[1],[0,0]);r.push(u),o.length>2&&u.push(o[2]),o.length>3&&u.push(o[3])}}catch(s){i.e(s)}finally{i.f()}return r}function g(n,e){return T.apply(this,arguments)}function T(){return(T=(0,u.Z)((0,r.Z)().mark((function n(e,t){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&t){n.next=2;break}return n.abrupt("return");case 2:return i=Array.isArray(e)?e.map((function(n){return(0,c.pC)(n.geometry)?n.geometry.spatialReference:null})).filter(c.pC):[e],n.next=5,(0,h.iQ)(i.map((function(n){return{source:n,dest:t}})));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var y=_.bind(null,d.hG),x=_.bind(null,d.R6);function b(n,e,t,r){if(!n)return n;if(t||(t=e,e=n.spatialReference),!(0,l.JY)(e)||!(0,l.JY)(t)||(0,l.fS)(e,t))return n;if((0,d.Q8)(e,t)){var i=(0,l.sS)(t)?y(n):x(n);return i.spatialReference=t,i}return(0,h.oj)(f.N,[n],e,t,null,r)[0]}var O=function(){function n(){(0,i.Z)(this,n),this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return(0,o.Z)(n,[{key:"push",value:function(){var n=(0,u.Z)((0,r.Z)().mark((function n(e,t,i){var o,u=this;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&e.length&&t&&i&&!(0,l.fS)(t,i)){n.next=2;break}return n.abrupt("return",e);case 2:return o={geometries:e,inSpatialReference:t,outSpatialReference:i,resolve:null},n.abrupt("return",(this._jobs.push(o),new Promise((function(n){o.resolve=n,null===u._timer&&(u._timer=setTimeout(u._process,10))}))));case 4:case"end":return n.stop()}}),n,this)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"_process",value:function(){this._timer=null;var n=this._jobs.shift();if(n){var e=n.geometries,t=n.inSpatialReference,r=n.outSpatialReference,i=n.resolve;(0,d.Q8)(t,r)?(0,l.sS)(r)?i(e.map(y)):i(e.map(x)):i((0,h.oj)(f.N,e,t,r,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}}]),n}(),R=new O;function E(n,e,t){return R.push(n,e,t)}},97731:function(n,e,t){t.d(e,{hu:function(){return u},yK:function(){return a}});var r=t(15671),i=t(43144),o=(t(6394),t(90045),(0,t(67077).c)(),function(){function n(e){(0,r.Z)(this,n),this.message=e}return(0,i.Z)(n,[{key:"toString",value:function(){return"AssertException: ".concat(this.message)}}]),n}());function u(n,e){if(!n)throw e=e||"assert",console.log(new Error(e).stack),new o(e)}function a(n,e,t,r){var i,o=(t[0]-n[0])/e[0],u=(r[0]-n[0])/e[0];o>u&&(i=o,o=u,u=i);var a=(t[1]-n[1])/e[1],s=(r[1]-n[1])/e[1];if(a>s&&(i=a,a=s,s=i),o>s||a>u)return!1;a>o&&(o=a),s<u&&(u=s);var c=(t[2]-n[2])/e[2],h=(r[2]-n[2])/e[2];return c>h&&(i=c,c=h,h=i),!(o>h||c>u)&&(h<u&&(u=h),!(u<0))}},10387:function(n,e,t){t.r(e),t.d(e,{default:function(){return un}});var r=t(37762),i=t(74165),o=t(15861),u=t(15671),a=t(43144),s=t(27366),c=t(92026),h=t(66978),f=(t(32718),t(25243),t(63780),t(10064),t(93169),t(69912)),l=t(11186),d=t(71353),v=t(85981),_=t(71417),m=t(99987),p=t(13005),g=t(27546),T=t(21530),y=(t(14226),t(90045),t(67077)),x=t(40885);t(11185);function b(n){return n?{ray:(0,x.Ue)(n.ray),c0:n.c0,c1:n.c1}:{ray:(0,x.Ue)(),c0:0,c1:Number.MAX_VALUE}}var O,R;new T.x((function(){return b()})),t(76146);function E(n,e){for(var t=0;t<M.NUM;t++){var r=n[t];if(r[0]*e[0]+r[1]*e[1]+r[2]*e[2]+r[3]>=e[3])return!1}return!0}!function(n){n[n.LEFT=0]="LEFT",n[n.RIGHT=1]="RIGHT",n[n.BOTTOM=2]="BOTTOM",n[n.TOP=3]="TOP",n[n.NEAR=4]="NEAR",n[n.FAR=5]="FAR"}(O||(O={})),function(n){n[n.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",n[n.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",n[n.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",n[n.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",n[n.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",n[n.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",n[n.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",n[n.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(R||(R={}));var M,k;R.FAR_BOTTOM_RIGHT,R.NEAR_BOTTOM_RIGHT,R.NEAR_BOTTOM_LEFT,R.FAR_BOTTOM_LEFT,R.NEAR_BOTTOM_LEFT,R.NEAR_BOTTOM_RIGHT,R.NEAR_TOP_RIGHT,R.NEAR_TOP_LEFT,R.FAR_BOTTOM_RIGHT,R.FAR_BOTTOM_LEFT,R.FAR_TOP_LEFT,R.FAR_TOP_RIGHT,R.NEAR_BOTTOM_RIGHT,R.FAR_BOTTOM_RIGHT,R.FAR_TOP_RIGHT,R.NEAR_TOP_RIGHT,R.FAR_BOTTOM_LEFT,R.NEAR_BOTTOM_LEFT,R.NEAR_TOP_LEFT,R.FAR_TOP_LEFT,R.FAR_TOP_LEFT,R.NEAR_TOP_LEFT,R.NEAR_TOP_RIGHT,R.FAR_TOP_RIGHT;!function(n){n[n.NUM=6]="NUM"}(M||(M={})),function(n){n[n.NUM=8]="NUM"}(k||(k={}));(0,y.f)(-1,-1,-1,1),(0,y.f)(1,-1,-1,1),(0,y.f)(1,1,-1,1),(0,y.f)(-1,1,-1,1),(0,y.f)(-1,-1,1,1),(0,y.f)(1,-1,1,1),(0,y.f)(1,1,1,1),(0,y.f)(-1,1,1,1),new T.x(b),(0,d.c)(),(0,d.c)(),(0,d.c)(),(0,d.c)(),(0,d.c)(),(0,d.c)(),(0,d.c)(),(0,d.c)();var A=t(97731),Z=function(){function n(e,t){(0,u.Z)(this,n),this._objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new N,this._objectCount=0,t&&(void 0!==t.maximumObjectsPerNode&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),void 0!==t.maximumDepth&&(this._maximumDepth=t.maximumDepth))}return(0,a.Z)(n,[{key:"bounds",get:function(){return this._root.bounds}},{key:"halfSize",get:function(){return this._root.halfSize}},{key:"root",get:function(){return this._root.node}},{key:"maximumObjectsPerNode",get:function(){return this._maximumObjectsPerNode}},{key:"maximumDepth",get:function(){return this._maximumDepth}},{key:"objectCount",get:function(){return this._objectCount}},{key:"destroy",value:function(){this._degenerateObjects.clear(),N.clearPool(),D[0]=null,q.prune(),$.prune()}},{key:"add",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.length;this._objectCount+=e,this._grow(n,e);for(var t=N.acquire(),r=0;r<e;r++){var i=n[r];this._isDegenerate(i)?this._degenerateObjects.add(i):(t.init(this._root),this._add(i,t))}N.release(t)}},{key:"remove",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._objectCount-=n.length;var t,i=N.acquire(),o=(0,r.Z)(n);try{for(o.s();!(t=o.n()).done;){var u=t.value,a=(0,c.pC)(e)?e:(0,_.h)(this._objectToBoundingSphere(u),K);B(a[3])?(i.init(this._root),this._remove(u,a,i)):this._degenerateObjects.delete(u)}}catch(s){o.e(s)}finally{o.f()}N.release(i),this._shrink()}},{key:"update",value:function(n,e){if(B(e[3])||!this._isDegenerate(n)){var t=function(n){return D[0]=n,D}(n);this.remove(t,e),this.add(t)}}},{key:"forEachAlongRay",value:function(n,e,t){var r=this,i=(0,x.re)(n,e);this._forEachNode(this._root,(function(n){if(!r._intersectsNode(i,n))return!1;var e=n.node;return e.terminals.forAll((function(n){r._intersectsObject(i,n)&&t(n)})),null!==e.residents&&e.residents.forAll((function(n){r._intersectsObject(i,n)&&t(n)})),!0}))}},{key:"forEachAlongRayWithVerticalOffset",value:function(n,e,t,r){var i=this,o=(0,x.re)(n,e);this._forEachNode(this._root,(function(n){if(!i._intersectsNodeWithOffset(o,n,r))return!1;var e=n.node;return e.terminals.forAll((function(n){i._intersectsObjectWithOffset(o,n,r)&&t(n)})),null!==e.residents&&e.residents.forAll((function(n){i._intersectsObjectWithOffset(o,n,r)&&t(n)})),!0}))}},{key:"forEach",value:function(n){this._forEachNode(this._root,(function(e){var t=e.node;return t.terminals.forAll(n),null!==t.residents&&t.residents.forAll(n),!0})),this._degenerateObjects.forEach(n)}},{key:"forEachDegenerateObject",value:function(n){this._degenerateObjects.forEach(n)}},{key:"findClosest",value:function(n,e,t){var r=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1/0,u=1/0,a=1/0,s=null,c=z(n,e),h=function(c){if(--o,i(c)){var h=r._objectToBoundingSphere(c);if(E(t,h)){var f=I(n,e,(0,_.g)(h)),l=f-h[3],d=f+h[3];l<u&&(u=l,a=d,s=c)}}};return this._forEachNodeDepthOrdered(this._root,(function(r){if(o<=0||!E(t,r.bounds))return!1;if((0,l.g)(V,c,r.halfSize),(0,l.a)(V,V,r.bounds),I(n,e,V)>a)return!1;var i=r.node;return i.terminals.forAll((function(n){return h(n)})),null!==i.residents&&i.residents.forAll((function(n){return h(n)})),!0}),n,e),s}},{key:"forEachInDepthRange",value:function(e,t,r,i,o,u,a){var s=this,c=-1/0,h=1/0,f={setRange:function(e){r===n.DepthOrder.FRONT_TO_BACK?(c=Math.max(c,e.near),h=Math.min(h,e.far)):(c=Math.max(c,-e.far),h=Math.min(h,-e.near))}};f.setRange(i);var d=I(t,r,e),v=z(t,r),m=z(t,-r),p=function(n){if(a(n)){var e=s._objectToBoundingSphere(n),i=(0,_.g)(e),l=I(t,r,i)-d,v=l-e[3],m=l+e[3];v>h||m<c||!E(u,e)||o(n,f)}};this._forEachNodeDepthOrdered(this._root,(function(n){if(!E(u,n.bounds))return!1;if((0,l.g)(V,v,n.halfSize),(0,l.a)(V,V,n.bounds),I(t,r,V)-d>h)return!1;if((0,l.g)(V,m,n.halfSize),(0,l.a)(V,V,n.bounds),I(t,r,V)-d<c)return!1;var e=n.node;return e.terminals.forAll((function(n){return p(n)})),null!==e.residents&&e.residents.forAll((function(n){return p(n)})),!0}),t,r)}},{key:"forEachNode",value:function(n){this._forEachNode(this._root,(function(e){return n(e.node,e.bounds,e.halfSize)}))}},{key:"forEachNeighbor",value:function(n,e){var t=this,r=(0,_.a)(e),i=(0,_.g)(e),o=function(e){var o=t._objectToBoundingSphere(e),u=(0,_.a)(o),a=r+u;return!((0,l.d)((0,_.g)(o),i)-a*a<=0)||n(e)},u=!0,a=function(n){u&&(u=o(n))};this._forEachNode(this._root,(function(n){var e=(0,_.a)(n.bounds),t=r+e;if((0,l.d)((0,_.g)(n.bounds),i)-t*t>0)return!1;var o=n.node;return o.terminals.forAll(a),u&&null!==o.residents&&o.residents.forAll(a),u})),u&&this.forEachDegenerateObject(a)}},{key:"_intersectsNode",value:function(n,e){return w(e.bounds,2*-e.halfSize,U),w(e.bounds,2*e.halfSize,W),(0,A.yK)(n.origin,n.direction,U,W)}},{key:"_intersectsNodeWithOffset",value:function(n,e,t){return w(e.bounds,2*-e.halfSize,U),w(e.bounds,2*e.halfSize,W),t.applyToMinMax(U,W),(0,A.yK)(n.origin,n.direction,U,W)}},{key:"_intersectsObject",value:function(n,e){var t=this._objectToBoundingSphere(e);return!(t[3]>0)||(0,_.j)(t,n)}},{key:"_intersectsObjectWithOffset",value:function(n,e,t){var r=this._objectToBoundingSphere(e);return!(r[3]>0)||(0,_.j)(t.applyToBoundingSphere(r),n)}},{key:"_forEachNode",value:function(n,e){for(var t=N.acquire().init(n),r=[t];0!==r.length;){if(e(t=r.pop())&&!t.isLeaf())for(var i=0;i<t.node.children.length;i++)t.node.children[i]&&r.push(N.acquire().init(t).advance(i));N.release(t)}}},{key:"_forEachNodeDepthOrdered",value:function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.DepthOrder.FRONT_TO_BACK,o=N.acquire().init(e),u=[o];for(j(r,i,nn);0!==u.length;){if(t(o=u.pop())&&!o.isLeaf())for(var a=7;a>=0;--a){var s=nn[a];o.node.children[s]&&u.push(N.acquire().init(o).advance(s))}N.release(o)}}},{key:"_remove",value:function(n,e,t){q.clear();var r=t.advanceTo(e,(function(n,e){q.push(n.node),q.push(e)}))?t.node.terminals:t.node.residents;if(r.removeUnordered(n),0===r.length)for(var i=q.length-2;i>=0;i-=2){var o=q.data[i],u=q.data[i+1];if(!this._purge(o,u))break}}},{key:"_nodeIsEmpty",value:function(n){if(0!==n.terminals.length)return!1;if(null!==n.residents)return 0===n.residents.length;for(var e=0;e<n.children.length;e++)if(n.children[e])return!1;return!0}},{key:"_purge",value:function(n,e){return e>=0&&(n.children[e]=null),!!this._nodeIsEmpty(n)&&(null===n.residents&&(n.residents=new g.Z({shrink:!0})),!0)}},{key:"_add",value:function(n,e){e.advanceTo(this._objectToBoundingSphere(n))?e.node.terminals.push(n):(e.node.residents.push(n),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}},{key:"_split",value:function(n){var e=n.node.residents;n.node.residents=null;for(var t=0;t<e.length;t++){var r=N.acquire().init(n);this._add(e.getItemAt(t),r),N.release(r)}}},{key:"_grow",value:function(n,e){var t=this;if(0!==e&&(P(n,e,(function(n){return t._objectToBoundingSphere(n)}),Y),B(Y[3])&&!this._fitsInsideTree(Y)))if(this._nodeIsEmpty(this._root.node))(0,_.h)(Y,this._root.bounds),this._root.halfSize=1.25*Y[3];else{var r=this._rootBoundsForRootAsSubNode(Y);this._placingRootViolatesMaxDepth(r)?this._rebuildTree(Y,r):this._growRootAsSubNode(r),N.release(r)}}},{key:"_rebuildTree",value:function(n,e){var t=this;(0,l.c)(X,e.bounds),X[3]=e.halfSize,P([n,X],2,(function(n){return n}),J);var r=N.acquire().init(this._root);this._root.initFrom(null,J,1.25*J[3]),this._forEachNode(r,(function(n){return t.add(n.node.terminals.data,n.node.terminals.length),null!==n.node.residents&&t.add(n.node.residents.data,n.node.residents.length),!0})),N.release(r)}},{key:"_placingRootViolatesMaxDepth",value:function(n){var e=this,t=Math.log(n.halfSize/this._root.halfSize)*Math.LOG2E,r=0;return this._forEachNode(this._root,(function(n){return(r=Math.max(r,n.depth))+t<=e._maximumDepth})),r+t>this._maximumDepth}},{key:"_rootBoundsForRootAsSubNode",value:function(n){for(var e=n[3],t=n,r=-1/0,i=this._root.bounds,o=this._root.halfSize,u=0;u<3;u++){var a=i[u]-o-(t[u]-e),s=t[u]+e-(i[u]+o),c=Math.max(0,Math.ceil(a/(2*o))),h=Math.max(0,Math.ceil(s/(2*o)))+1,f=Math.pow(2,Math.ceil(Math.log(c+h)*Math.LOG2E));r=Math.max(r,f),Q[u].min=c,Q[u].max=h}for(var l=0;l<3;l++){var d=Q[l].min,v=Q[l].max,_=(r-(d+v))/2;d+=Math.ceil(_),v+=Math.floor(_);var m=i[l]-o-d*o*2;H[l]=m+(v+d)*o}return H[3]=r*o*G,N.acquire().initFrom(null,H,r*o,0)}},{key:"_growRootAsSubNode",value:function(n){var e=this._root.node;(0,l.c)(Y,this._root.bounds),Y[3]=this._root.halfSize,this._root.init(n),n.advanceTo(Y,null,!0),n.node.children=e.children,n.node.residents=e.residents,n.node.terminals=e.terminals}},{key:"_shrink",value:function(){for(;;){var n=this._findShrinkIndex();if(-1===n)break;this._root.advance(n),this._root.depth=0}}},{key:"_findShrinkIndex",value:function(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;for(var n=null,e=this._root.node.children,t=0,r=0;r<e.length&&null==n;)n=e[t=r++];for(;r<e.length;)if(e[r++])return-1;return t}},{key:"_isDegenerate",value:function(n){return!B(this._objectToBoundingSphere(n)[3])}},{key:"_fitsInsideTree",value:function(n){var e=this._root.bounds,t=this._root.halfSize;return n[3]<=t&&n[0]>=e[0]-t&&n[0]<=e[0]+t&&n[1]>=e[1]-t&&n[1]<=e[1]+t&&n[2]>=e[2]-t&&n[2]<=e[2]+t}}]),n}(),N=function(){function n(){(0,u.Z)(this,n),this.bounds=(0,_.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}return(0,a.Z)(n,[{key:"init",value:function(n){return this.initFrom(n.node,n.bounds,n.halfSize,n.depth)}},{key:"initFrom",value:function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.depth;return this.node=(0,c.pC)(e)?e:n.createEmptyNode(),(0,c.pC)(t)&&(0,_.h)(t,this.bounds),this.halfSize=r,this.depth=i,this}},{key:"advance",value:function(e){var t=this.node.children[e];t||(t=n.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;var r=L[e];return this.bounds[0]+=r[0]*this.halfSize,this.bounds[1]+=r[1]*this.halfSize,this.bounds[2]+=r[2]*this.halfSize,this.bounds[3]=this.halfSize*G,this}},{key:"advanceTo",value:function(n,e){for(var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];;){if(this.isTerminalFor(n))return e&&e(this,-1),!0;if(this.isLeaf()){if(!t)return e&&e(this,-1),!1;this.node.residents=null}var r=this._childIndex(n);e&&e(this,r),this.advance(r)}}},{key:"isLeaf",value:function(){return null!=this.node.residents}},{key:"isTerminalFor",value:function(n){return n[3]>this.halfSize/2}},{key:"_childIndex",value:function(n){var e=this.bounds;return(e[0]<n[0]?1:0)+(e[1]<n[1]?2:0)+(e[2]<n[2]?4:0)}}],[{key:"createEmptyNode",value:function(){return{children:[null,null,null,null,null,null,null,null],terminals:new g.Z({shrink:!0}),residents:new g.Z({shrink:!0})}}},{key:"acquire",value:function(){return n._pool.acquire()}},{key:"release",value:function(e){n._pool.release(e)}},{key:"clearPool",value:function(){n._pool.prune()}}]),n}();function F(n,e){n[0]=Math.min(n[0],e[0]-e[3]),n[1]=Math.min(n[1],e[1]-e[3]),n[2]=Math.min(n[2],e[2]-e[3])}function S(n,e){n[0]=Math.max(n[0],e[0]+e[3]),n[1]=Math.max(n[1],e[1]+e[3]),n[2]=Math.max(n[2],e[2]+e[3])}function w(n,e,t){t[0]=n[0]+e,t[1]=n[1]+e,t[2]=n[2]+e}function P(n,e,t,r){if(1===e){var i=t(n[0]);(0,_.h)(i,r)}else{U[0]=1/0,U[1]=1/0,U[2]=1/0,W[0]=-1/0,W[1]=-1/0,W[2]=-1/0;for(var o=0;o<e;o++){var u=t(n[o]);B(u[3])&&(F(U,u),S(W,u))}(0,l.h)(r,U,W,.5),r[3]=Math.max(W[0]-U[0],W[1]-U[1],W[2]-U[2])/2}}function j(n,e,t){if(!$.length)for(var r=0;r<8;++r)$.push({index:0,distance:0});for(var i=0;i<8;++i){var o=L[i];$.data[i].index=i,$.data[i].distance=I(n,e,o)}$.sort((function(n,e){return n.distance-e.distance}));for(var u=0;u<8;++u)t[u]=$.data[u].index}function z(n,e){for(var t,r=1/0,i=0;i<8;++i){var o=I(n,e,C[i]);o<r&&(r=o,t=C[i])}return t}function I(n,e,t){return e*(n[0]*t[0]+n[1]*t[1]+n[2]*t[2])}function B(n){return!isNaN(n)&&n!==-1/0&&n!==1/0&&n>0}N._pool=new p.Z(N),function(n){var e;(e=n.DepthOrder||(n.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(Z||(Z={}));var L=[(0,d.f)(-1,-1,-1),(0,d.f)(1,-1,-1),(0,d.f)(-1,1,-1),(0,d.f)(1,1,-1),(0,d.f)(-1,-1,1),(0,d.f)(1,-1,1),(0,d.f)(-1,1,1),(0,d.f)(1,1,1)],C=[(0,d.f)(-1,-1,-1),(0,d.f)(-1,-1,1),(0,d.f)(-1,1,-1),(0,d.f)(-1,1,1),(0,d.f)(1,-1,-1),(0,d.f)(1,-1,1),(0,d.f)(1,1,-1),(0,d.f)(1,1,1)],G=Math.sqrt(3),D=[null];var H=(0,_.c)(),V=(0,d.c)(),U=(0,d.c)(),W=(0,d.c)(),q=new g.Z,K=(0,_.c)(),Y=(0,_.c)(),X=(0,_.c)(),J=(0,_.c)(),Q=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],$=new g.Z,nn=[0,0,0,0,0,0,0,0],en=Z,tn=t(83715);function rn(n,e,t){var r=(0,_.c)(),i=(0,_.g)(r);return(0,l.z)(i,i,n,.5),(0,l.z)(i,i,e,.5),r[3]=(0,l.i)(i,n),(0,l.a)(i,i,t),r}var on=function(){function n(){(0,u.Z)(this,n),this._idToComponent=new Map,this._components=new en((function(n){return n.bounds})),this._edges=new en((function(n){return n.bounds})),this._tmpLineSegment=(0,v.Ue)(),this._tmpP1=(0,d.c)(),this._tmpP2=(0,d.c)(),this._tmpP3=(0,d.c)(),this.remoteClient=null}return(0,a.Z)(n,[{key:"fetchCandidates",value:function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e,t){var r,o=this;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve();case 2:return(0,h.k_)(t),n.next=5,this._ensureEdgeLocations(e,t);case 5:return r=[],n.abrupt("return",(this._edges.forEachNeighbor((function(n){return o._addCandidates(e,n,r),r.length<1e3}),e.bounds),{result:{candidates:r}}));case 7:case"end":return n.stop()}}),n,this)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"_ensureEdgeLocations",value:function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e,t){var o,u,a,s,h,f;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=[],this._components.forEachNeighbor((function(n){if((0,c.Wi)(n.info)){var e=n.id,t=n.uid;o.push({id:e,uid:t})}return!0}),e.bounds),o.length){n.next=3;break}return n.abrupt("return");case 3:return u={components:o},n.next=6,this.remoteClient.invoke("fetchAllEdgeLocations",u,(0,c.Pt)(t,{}));case 6:a=n.sent,s=(0,r.Z)(a.components);try{for(s.s();!(h=s.n()).done;)f=h.value,this._setFetchEdgeLocations(f)}catch(i){s.e(i)}finally{s.f()}case 9:case"end":return n.stop()}}),n,this)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"add",value:function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){var t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new an(e.id,e.bounds),n.abrupt("return",(this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}));case 2:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"remove",value:function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=this._idToComponent.get(e.id))&&(r=[],this._edges.forEachNeighbor((function(n){return n.component===t&&r.push(n),!0}),t.bounds),this._edges.remove(r),this._components.remove([t]),this._idToComponent.delete(t.id)),n.abrupt("return",{result:{}});case 3:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"_setFetchEdgeLocations",value:function(n){var e=this._idToComponent.get(n.id);if(!(0,c.Wi)(e)&&n.uid===e.uid){for(var t=tn.n_.createView(n.locations),r=new Array(t.count),i=(0,d.c)(),o=(0,d.c)(),u=0;u<t.count;u++){t.position0.getVec(u,i),t.position1.getVec(u,o);var a=rn(i,o,n.origin),s=new sn(e,u,a);r[u]=s}this._edges.add(r);var h=n.objectIds,f=n.origin;e.info={locations:t,objectIds:h,origin:f}}}},{key:"_addCandidates",value:function(n,e,t){var r=e.component.info,i=r.locations,o=r.origin,u=r.objectIds,a=i.position0.getVec(e.index,this._tmpP1),s=i.position1.getVec(e.index,this._tmpP2);(0,l.a)(a,a,o),(0,l.a)(s,s,o);var c=u[i.componentIndex.get(e.index)];this._addEdgeCandidate(n,c,a,s,t),this._addVertexCandidate(n,c,a,t),this._addVertexCandidate(n,c,s,t)}},{key:"_addEdgeCandidate",value:function(n,e,t,r,i){if(n.types&m.r.EDGE){var o=(0,_.g)(n.bounds),u=(0,v.zk)(t,r,this._tmpLineSegment),a=(0,v.nF)(u,o,this._tmpP3);if(!(0,_.m)(n.bounds,a))return null;i.push({type:"edge",objectId:e,target:(0,d.a)(a),distance:(0,l.i)(o,a),start:(0,d.a)(t),end:(0,d.a)(r)})}}},{key:"_addVertexCandidate",value:function(n,e,t,r){if(n.types&m.r.VERTEX){var i=(0,_.g)(n.bounds);if(!(0,_.m)(n.bounds,t))return null;r.push({type:"vertex",objectId:e,target:(0,d.a)(t),distance:(0,l.i)(i,t)})}}}]),n}(),un=on=(0,s._)([(0,f.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],on),an=(0,a.Z)((function n(e,t){(0,u.Z)(this,n),this.id=e,this.bounds=t,this.info=null,this.uid=++n.uid}));an.uid=0;var sn=(0,a.Z)((function n(e,t,r){(0,u.Z)(this,n),this.component=e,this.index=t,this.bounds=r}))}}]);
//# sourceMappingURL=6978.46179a42.chunk.js.map