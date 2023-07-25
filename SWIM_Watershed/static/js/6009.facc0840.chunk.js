"use strict";(self.webpackChunkswimfront=self.webpackChunkswimfront||[]).push([[6009,9951],{71277:function(e,t,r){function a(e){return e=e||globalThis.location.hostname,u.some((function(t){var r;return null!=(null===(r=e)||void 0===r?void 0:r.match(t))}))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(l)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(i)||null!=t.match(o)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:function(){return a},pJ:function(){return n}});var l=/^devext.arcgis.com$/,i=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,o=/^[\w-]*\.mapsqa.arcgis.com$/,u=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,l,i,/^jsapps.esri.com$/,s,o]},36009:function(e,t,r){r.r(t),r.d(t,{getPatternDescriptor:function(){return j},getSizeFromOptions:function(){return W},getSymbolLayerFill:function(){return C},previewSymbol3D:function(){return H}});var a=r(74165),n=r(1413),l=r(15861),i=r(65905),s=r(86950),o=(r(93169),r(10064)),u=r(32718),p=r(92026),c=r(66978),h=r(17842),m=r(79563),f=r(29122),y=r(73627),v=r(37817),d=r(1682),b=r(74579),g=r(19951),w=v.b_.size,k=v.b_.maxSize,x=v.b_.maxOutlineSize,M=v.b_.lineWidth,S=v.b_.tallSymbolWidth;function L(e){var t=e.outline,r=(0,p.pC)(e.material)?e.material.color:null,a=(0,p.pC)(r)?r.toHex():null;if((0,p.Wi)(t)||"pattern"in t&&(0,p.pC)(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===e.type&&"#ffffff"===a?{color:"#bdc3c7",width:.75}:null;var n=(0,h.F2)(t.size)||0;return{color:"rgba("+((0,p.pC)(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(n,x),style:"pattern"in t&&(0,p.pC)(t.pattern)&&"style"===t.pattern.type?(0,m.Sp)(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=e.a,a=(0,s._Y)(e),n=a.h,l=a.s/t,i=100-(100-a.v)/t,o=(0,s.xr)({h:n,s:l,v:i}),u=o.r,p=o.g,c=o.b;return[u,p,c,r]}function z(e){return"water"===e.type?(0,p.Wi)(e.color)?null:e.color:(0,p.Wi)(e.material)||(0,p.Wi)(e.material.color)?null:e.material.color}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=z(e);if(!r){if("fill"===e.type)return null;var a=m.Ne.r,n=(0,v.uH)(a,t);return[n,n,n,100]}for(var l=r.toRgba(),i=0;i<3;i++)l[i]=(0,v.uH)(l[i],t);return l}function j(e,t){return P.apply(this,arguments)}function P(){return(P=(0,l.Z)((0,a.Z)().mark((function e(t,r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("none"!==(n=t.style)){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,(0,m.Od)((0,i.V)("esri/symbols/patterns/".concat(n,".png")),r.toCss(!0));case 5:return e.t0=e.sent,e.abrupt("return",{type:"pattern",x:0,y:0,src:e.t0,width:5,height:5});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return e.outline?L(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function D(e,t){var r=z(e);if(!r)return null;var a="rgba(";return a+=(0,v.uH)(r.r,t)+",",a+=(0,v.uH)(r.g,t)+",",(a+=(0,v.uH)(r.b,t)+",")+r.a+");"}function F(e,t){var r=D(e,t);return r?"pattern"in e&&(0,p.pC)(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style?null:{color:r,width:Math.min(e.size?(0,h.F2)(e.size):.75,x),style:"pattern"in e&&(0,p.pC)(e.pattern)&&"style"===e.pattern.type?(0,m.Sp)(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?(0,h.F2)(2):e.join:null}:{}}function O(e,t,r){var a=null!=r?.75*r:0;return{type:"linear",x1:a?.25*a:0,y1:a?.5*a:0,x2:a||4,y2:a?.5*a:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function W(e){var t="number"==typeof(null===e||void 0===e?void 0:e.size)?null===e||void 0===e?void 0:e.size:null;return t?(0,h.F2)(t):null}function E(e,t){var r,a,n=W(t),l=null!==t&&void 0!==t&&t.maxSize?(0,h.F2)(t.maxSize):null,s=null!==(r=null===t||void 0===t?void 0:t.disableUpsampling)&&void 0!==r&&r,o=e.symbolLayers,p=[],m=0,x=0,M=o.getItemAt(o.length-1);return M&&"icon"===M.type&&(a=M.size&&(0,h.F2)(M.size)),o.forEach((function(r){if("icon"===r.type||"object"===r.type){var o="icon"===r.type?r.size&&(0,h.F2)(r.size):0,u=n||o?Math.ceil(Math.min(n||o,l||k)):w;if(r&&r.resource&&r.resource.href){var c=function(e,t){var r=t&&t.resource,a=r&&r.href;if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url);if(a&&"object"!==t.type)return Promise.resolve((0,b.nf)(e,t));var n=(0,i.V)("esri/images/Legend/legend3dsymboldefault.png");return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?(0,g.resolveWebStyleSymbol)(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch((function(e){return e})).then((function(e){var t;return(null===e||void 0===e||null===(t=e.thumbnail)||void 0===t?void 0:t.url)||n})):Promise.resolve(n)}(e,r).then((function(e){var t=r.get("material.color"),a=function(e){return"icon"===e.type?"multiply":"tint"}(r);return(0,d.r)(e,u,t,a,s)})).then((function(e){var t=e.width,r=e.height;return m=Math.max(m,t),x=Math.max(x,r),[{shape:{type:"image",x:0,y:0,width:t,height:r,src:e.url},fill:null,stroke:null}]}));p.push(c)}else{var M,Z=u;"icon"===r.type&&a&&n&&(Z=u*(o/a));var z="tall"===(null===t||void 0===t?void 0:t.symbolConfig)||(null===t||void 0===t||null===(M=t.symbolConfig)||void 0===M?void 0:M.isTall)||"object"===r.type&&function(e){var t=e.depth,r=e.height,a=e.width;return 0!==a&&0!==t&&0!==r&&a===t&&null!=a&&null!=r&&a<r}(r);m=Math.max(m,z?S:Z),x=Math.max(x,Z),p.push(Promise.resolve(function(e,t,r){var a=[];if(!e)return a;switch(e.type){case"icon":var n=t,l=t;switch(e.resource&&e.resource.primitive||f.S){case"circle":a.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:C(e,0),stroke:L(e)});break;case"square":a.push({shape:{type:"path",path:[{command:"M",values:[0,l]},{command:"L",values:[0,0]},{command:"L",values:[n,0]},{command:"L",values:[n,l]},{command:"Z",values:[]}]},fill:C(e,0),stroke:L(e)});break;case"triangle":a.push({shape:{type:"path",path:[{command:"M",values:[0,l]},{command:"L",values:[.5*n,0]},{command:"L",values:[n,l]},{command:"Z",values:[]}]},fill:C(e,0),stroke:L(e)});break;case"cross":a.push({shape:{type:"path",path:[{command:"M",values:[.5*n,0]},{command:"L",values:[.5*n,l]},{command:"M",values:[0,.5*l]},{command:"L",values:[n,.5*l]}]},stroke:N(e)});break;case"x":a.push({shape:{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[n,l]},{command:"M",values:[n,0]},{command:"L",values:[0,l]}]},stroke:N(e)});break;case"kite":a.push({shape:{type:"path",path:[{command:"M",values:[0,.5*l]},{command:"L",values:[.5*n,0]},{command:"L",values:[n,.5*l]},{command:"L",values:[.5*n,l]},{command:"Z",values:[]}]},fill:C(e,0),stroke:L(e)})}break;case"object":switch(e.resource&&e.resource.primitive||y.S){case"cone":var i=O(C(e,0),C(e,-.6),r?S:t),s=(0,v.TE)(t,r);a.push({shape:s[0],fill:i}),a.push({shape:s[1],fill:i});break;case"inverted-cone":var o=C(e,0),u=O(o,C(e,-.6),t),p=(0,v.DY)(t);a.push({shape:p[0],fill:u}),a.push({shape:p[1],fill:o});break;case"cube":var c=(0,v.Pc)(t,r);a.push({shape:c[0],fill:C(e,0)}),a.push({shape:c[1],fill:C(e,-.3)}),a.push({shape:c[2],fill:C(e,-.5)});break;case"cylinder":var h=O(C(e,0),C(e,-.6),r?S:t),m=(0,v.EB)(t,r);a.push({shape:m[0],fill:h}),a.push({shape:m[1],fill:h}),a.push({shape:m[2],fill:C(e,0)});break;case"diamond":var d=(0,v.XX)(t);a.push({shape:d[0],fill:C(e,-.3)}),a.push({shape:d[1],fill:C(e,0)}),a.push({shape:d[2],fill:C(e,-.3)}),a.push({shape:d[3],fill:C(e,-.7)});break;case"sphere":var b=O(C(e,0),C(e,-.6));b.x1=0,b.y1=0,b.x2=.25*t,b.y2=.25*t,a.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:b});break;case"tetrahedron":var g=(0,v.tp)(t);a.push({shape:g[0],fill:C(e,-.3)}),a.push({shape:g[1],fill:C(e,0)}),a.push({shape:g[2],fill:C(e,-.6)})}}return a}(r,Z,z)))}}})),(0,c.as)(p).then((function(e){var r=[];return e.forEach((function(e){e.value?r.push(e.value):e.error&&u.Z.getLogger("esri.symbols.support.previewSymbol3D").warn("error while building swatchInfo!",e.error)})),(0,d.w)(r,[m,x],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function J(){return(J=(0,l.Z)((0,a.Z)().mark((function e(t,r){var l,i,s,o,u,c,m,f,y,b,g,x,M,S,P,N,D,O,E,J,H,U,T,$,_,q,V,Y,I,R,X,A,K;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l="mesh-3d"===t.type,i=t.symbolLayers,s=W(r),o=r&&r.maxSize?(0,h.F2)(r.maxSize):null,u=s||w,c=[],m=0,f=0,y=!1,b=0;case 3:if(!(b<i.length)){e.next=42;break}if(g=i.getItemAt(b),x=[],!l||"fill"===g.type){e.next=7;break}return e.abrupt("continue",39);case 7:M=v.JZ.fill[0],e.t0=g.type,e.next="fill"===e.t0?11:"line"===e.t0?22:"extrude"===e.t0?28:"water"===e.t0?33:38;break;case 11:if(S=L(g),P=Math.min(u,o||k),m=Math.max(m,P),f=Math.max(f,P),y=!0,N=C(g,0),D="pattern"in g?g.pattern:null,O=z(g),e.t1=!l&&(0,p.pC)(D)&&"style"===D.type&&"solid"!==D.style&&O,!e.t1){e.next=20;break}return e.next=19,j(D,O);case 19:N=e.sent;case 20:return x.push({shape:M,fill:N,stroke:S}),e.abrupt("break",38);case 22:if(E=F(g,0),!(0,p.Wi)(E)){e.next=25;break}return e.abrupt("break",38);case 25:return J={stroke:E,shape:M},m=Math.max(m,w),f=Math.max(f,w),x.push(J),e.abrupt("break",38);case 28:return H=(0,n.Z)({join:"round",width:1},F(g,-.4)),U=C(g,0),T=C(g,-.2),$=Math.min(u,o||k),_=(0,v.EV)($),H.width=1,x.push({shape:_[0],fill:T,stroke:H}),x.push({shape:_[1],fill:T,stroke:H}),x.push({shape:_[2],fill:U,stroke:H}),q=w,V=.7*w+.5*$,m=Math.max(m,q),f=Math.max(f,V),e.abrupt("break",38);case 33:return Y=(0,p.s3)(z(g)),I=Z(Y),R=Z(Y,2),X=Z(Y,3),A=(0,v.ht)(),y=!0,x.push({shape:A[0],fill:I}),x.push({shape:A[1],fill:R}),x.push({shape:A[2],fill:X}),K=Math.min(u,o||k),m=Math.max(m,K),f=Math.max(f,K),e.abrupt("break",38);case 38:c.push(x);case 39:b++,e.next=3;break;case 42:return e.abrupt("return",(0,d.w)(c,[m,f],{node:r&&r.node,scale:y,opacity:r&&r.opacity}));case 43:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){if(0===e.symbolLayers.length)return Promise.reject(new o.Z("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return E(e,t);case"line-3d":return function(e,t){var r,a=e.symbolLayers,l=[],i=(0,b.YW)(e),s=W(t),o=(t&&t.maxSize?(0,h.F2)(t.maxSize):null)||x,u=0,c=0;return a.forEach((function(e,t){if(e&&("line"===e.type||"path"===e.type)){var a=[];switch(e.type){case"line":var i=F(e,0);if((0,p.Wi)(i))break;var h=i&&i.width||0;0===t&&(r=h);var m=Math.min(s||h,o),f=0===t?m:s?m*(h/r):m,y=f>M/2?2*f:M;c=Math.max(c,f),u=Math.max(u,y),i.width=f,a.push({shape:{type:"path",path:[{command:"M",values:[0,.5*c]},{command:"L",values:[u,.5*c]}]},stroke:i});break;case"path":var d=Math.min(s||w,o),b=C(e,0),g=C(e,-.2),k=D(e,-.4),x=k?{color:k,width:1}:{};if("quad"===e.profile){var S=e.width,L=e.height,Z=(0,v.eb)(S&&L?S/L:1,0===L,0===S),z=(0,n.Z)((0,n.Z)({},x),{},{join:"bevel"});a.push({shape:Z[0],fill:g,stroke:z}),a.push({shape:Z[1],fill:g,stroke:z}),a.push({shape:Z[2],fill:b,stroke:z})}else a.push({shape:v.JZ.pathSymbol3DLayer[0],fill:g,stroke:x}),a.push({shape:v.JZ.pathSymbol3DLayer[1],fill:b,stroke:x});c=Math.max(c,d),u=c}l.push(a)}})),Promise.resolve((0,d.w)(l,[u,c],{node:t&&t.node,scale:i,opacity:t&&t.opacity}))}(e,t);case"polygon-3d":case"mesh-3d":return function(e,t){return J.apply(this,arguments)}(e,t)}return Promise.reject(new o.Z("symbolPreview: swatchInfo3D","symbol not supported."))}},19951:function(e,t,r){r.r(t),r.d(t,{fetchSymbolFromStyle:function(){return y},resolveWebStyleSymbol:function(){return f}});var a=r(51508),n=r(71277),l=r(10064),i=r(92026),s=r(35995),o=r(70032),u=r(53283),p=r(42283),c=r(1472),h=r(38048),m=r(81854);function f(e,t,r,a){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,r){var a=h.wm.replace(/\{SymbolName\}/gi,e.name),n=(0,i.pC)(t.portal)?t.portal:o.Z.getDefault();return(0,h.EJ)(a,r).then((function(e){var t=(0,h.KV)(e.data);return(0,p.im)(t,{portal:n,url:(0,s.mN)((0,s.Yd)(a)),origin:"portal-item"})}))}(e,t,a):(0,h.n2)(e,t,a).then((function(n){return y((0,i.s3)(n),e.name,t,r,a)})):Promise.reject(new l.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function y(e,t,r,f,y){var v,d,b,g=e.data,w=r&&(0,i.pC)(r.portal)?r.portal:o.Z.getDefault(),k={portal:w,url:(0,s.mN)(e.baseUrl),origin:"portal-item"},x=g.items.find((function(e){return e.name===t}));if(!x){var M="The symbol name '".concat(t,"' could not be found");return Promise.reject(new l.Z("symbolstyleutils:symbol-name-not-found",M,{symbolName:t}))}var S=(0,u.f)((0,h.v9)(x,f),k),L=null!==(v=null===(d=x.thumbnail)||void 0===d?void 0:d.href)&&void 0!==v?v:null,Z=x.thumbnail&&x.thumbnail.imageData;(0,n.XO)()&&(S=null!==(b=(0,n.pJ)(S))&&void 0!==b?b:"",L=(0,n.pJ)(L));var z={portal:w,url:(0,s.mN)((0,s.Yd)(S)),origin:"portal-item"};return(0,h.EJ)(S,y).then((function(n){var l="cimRef"===f?(0,h.KV)(n.data):n.data,i=(0,p.im)(l,z);if(i&&(0,a.dU)(i)){if(L){var s=(0,u.f)(L,k);i.thumbnail=new m.p({url:s})}else Z&&(i.thumbnail=new m.p({url:"data:image/png;base64,".concat(Z)}));e.styleUrl?i.styleOrigin=new c.Z({portal:r.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(i.styleOrigin=new c.Z({portal:r.portal,styleName:e.styleName,name:t}))}return i}))}}}]);
//# sourceMappingURL=6009.facc0840.chunk.js.map