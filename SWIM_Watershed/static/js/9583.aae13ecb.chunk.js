"use strict";(self.webpackChunkswimfront=self.webpackChunkswimfront||[]).push([[9583],{82582:function(e,r,t){t.d(r,{dp:function(){return a},yZ:function(){return i}});var n=t(68860);function i(e,r){var t=r||e.extent,i=e.width,a=(0,n.c9)(t&&t.spatialReference);return t&&i?t.width/i*a*n.hd*96:0}function a(e,r){return e/((0,n.c9)(r)*n.hd*96)}},19583:function(e,r,t){t.r(r),t.d(r,{default:function(){return G}});var n=t(74165),i=t(15861),a=t(1413),o=t(15671),s=t(43144),l=t(60136),u=t(29388),c=t(27366),y=t(76200),p=t(62044),f=t(10064),h=t(41691),d=t(93002),m=t(92026),v=t(97642),b=t(66978),g=t(49861),S=(t(63780),t(25243)),x=t(38511),Z=t(69912),_=t(31201),w=t(25265),k=t(53866),I=t(82582),C=t(30651),O=t(27961),L=t(6741),E=t(11936),N=t(6693),P=t(46671),D=t(6061),M=t(29598),F=t(71684),R=t(56811),T=t(18870),J=t(99063),j=t(45948),V=t(44041),q=t(77990),U=t(58132),A=t(26704),z=function(e){(0,l.Z)(t,e);var r=(0,u.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=r.call.apply(r,[this].concat(i))).datesInUnknownTimezone=!1,e.dpi=96,e.gdbVersion=null,e.imageFormat="png24",e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.isReference=null,e.labelsVisible=!1,e.operationalLayerType="ArcGISMapServiceLayer",e.sourceJSON=null,e.sublayers=null,e.type="map-image",e.url=null,e}return(0,s.Z)(t,[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,a.Z)({url:e},r):e}},{key:"load",value:function(e){var r=this,t=(0,m.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b.r9).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"readImageFormat",value:function(e,r){var t=r.supportedImageFormatTypes;return t&&t.includes("PNG32")?"png32":"png24"}},{key:"writeSublayers",value:function(e,r,t,n){if(this.loaded&&e){var i=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),o=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){var s=(0,w.M9)(n.origin);if(s===w.s3.PORTAL_ITEM){var l=this.createSublayersForOrigin("service").sublayers;o=(0,U.QV)(i,l,w.s3.SERVICE)}else if(s>w.s3.PORTAL_ITEM){var u=this.createSublayersForOrigin("portal-item");o=(0,U.QV)(i,u.sublayers,(0,w.M9)(u.origin))}}var c=[],y=(0,a.Z)({writeSublayerStructure:o},n),p=o;i.forEach((function(e){var r=e.write({},y);c.push(r),p=p||"user"===e.originOf("visible")})),c.some((function(e){return Object.keys(e).length>1}))&&(r.layers=c),p&&(r.visibleLayers=i.filter((function(e){return e.visible})).map((function(e){return e.id})))}}},{key:"createExportImageParameters",value:function(e,r,t,n){var i=n&&n.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var o=new V.R({layer:this,floors:null===n||void 0===n?void 0:n.floors,scale:(0,I.yZ)({extent:e,width:r})*i}),s=o.toJSON();o.destroy();var l=!n||!n.rotation||this.version<10.3?{}:{rotation:-n.rotation},u=e&&e.spatialReference,c=u.wkid||JSON.stringify(u.toJSON());s.dpi*=i;var y={};if(null!==n&&void 0!==n&&n.timeExtent){var p=n.timeExtent.toJSON(),f=p.start,h=p.end;y.time=f&&h&&f===h?""+f:"".concat(null!==f&&void 0!==f?f:"null",",").concat(null!==h&&void 0!==h?h:"null")}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return(0,a.Z)((0,a.Z)((0,a.Z)({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:c,imageSR:c,size:r+","+t},s),l),y)}},{key:"fetchImage",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(r,t,i,a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._fetchImage("image",r,t,i,a));case 1:case"end":return e.stop()}}),e,this)})));return function(r,t,n,i){return e.apply(this,arguments)}}()},{key:"fetchImageBitmap",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(r,t,i,a){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchImage("blob",r,t,i,a);case 2:return o=e.sent,e.abrupt("return",createImageBitmap(o));case 4:case"end":return e.stop()}}),e,this)})));return function(r,t,n,i){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var r,t,i,o,s,l,u,c,f=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.length>0&&void 0!==f[0]?f[0]:{},t=(0,a.Z)((0,a.Z)({},r),{},{query:(0,a.Z)((0,a.Z)({returnUpdates:!0,f:"json"},this.customParameters),{},{token:this.apiKey})}),e.next=4,(0,y.default)(this.url,t);case 4:return i=e.sent,o=i.data,s=o.extent,l=o.fullExtent,u=o.timeExtent,c=s||l,e.abrupt("return",{fullExtent:c&&k.Z.fromJSON(c),timeExtent:u&&p.Z.fromJSON({start:u[0],end:u[1]})});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadAll",value:function(){var e=this;return(0,d.G)(this,(function(r){r(e.allSublayers)}))}},{key:"serviceSupportsSpatialReference",value:function(e){return(0,A.D)(this,e)}},{key:"_fetchImage",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(r,t,i,o,s){var l,u,c,p,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u={responseType:r,signal:null!==(l=null===s||void 0===s?void 0:s.signal)&&void 0!==l?l:null,query:(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},this.parsedUrl.query),this.createExportImageParameters(t,i,o,s)),{},{f:"image"},this.refreshParameters),this.customParameters),{},{token:this.apiKey})},c=this.parsedUrl.path+"/export",null==u.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers){e.next=3;break}throw new f.Z("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:u.query});case 3:return e.prev=3,e.next=6,(0,y.default)(c,u);case 6:return p=e.sent,h=p.data,e.abrupt("return",h);case 11:if(e.prev=11,e.t0=e.catch(3),!(0,b.D_)(e.t0)){e.next=15;break}throw e.t0;case 15:throw new f.Z("mapimagelayer:image-fetch-error","Unable to load image: ".concat(c),{error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(r,t,n,i,a){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(r){var t,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}));case 2:return e.next=4,(0,y.default)(this.parsedUrl.path,{query:(0,a.Z)((0,a.Z)((0,a.Z)({f:"json"},this.parsedUrl.query),this.customParameters),{},{token:this.apiKey}),signal:r});case 4:t=e.sent,i=t.data,t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl});case 8:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()}]),t}((0,N.h)((0,J.n)((0,R.M)((0,T.x)((0,L.O)((0,E.Y)((0,D.q)((0,M.I)((0,v.R)((0,F.Q)((0,O.V)((0,P.N)((0,h.p)(C.Z))))))))))))));(0,c._)([(0,g.Cb)({type:Boolean})],z.prototype,"datesInUnknownTimezone",void 0),(0,c._)([(0,g.Cb)()],z.prototype,"dpi",void 0),(0,c._)([(0,g.Cb)()],z.prototype,"gdbVersion",void 0),(0,c._)([(0,g.Cb)()],z.prototype,"imageFormat",void 0),(0,c._)([(0,x.r)("imageFormat",["supportedImageFormatTypes"])],z.prototype,"readImageFormat",null),(0,c._)([(0,g.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],z.prototype,"imageMaxHeight",void 0),(0,c._)([(0,g.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],z.prototype,"imageMaxWidth",void 0),(0,c._)([(0,g.Cb)()],z.prototype,"imageTransparency",void 0),(0,c._)([(0,g.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],z.prototype,"isReference",void 0),(0,c._)([(0,g.Cb)({json:{read:!1,write:!1}})],z.prototype,"labelsVisible",void 0),(0,c._)([(0,g.Cb)({type:["ArcGISMapServiceLayer"]})],z.prototype,"operationalLayerType",void 0),(0,c._)([(0,g.Cb)({json:{read:!1,write:!1}})],z.prototype,"popupEnabled",void 0),(0,c._)([(0,g.Cb)()],z.prototype,"sourceJSON",void 0),(0,c._)([(0,g.Cb)({json:{write:{ignoreOrigin:!0}}})],z.prototype,"sublayers",void 0),(0,c._)([(0,_.c)("sublayers",{layers:{type:[q.Z]},visibleLayers:{type:[S.z8]}})],z.prototype,"writeSublayers",null),(0,c._)([(0,g.Cb)({type:["show","hide","hide-children"]})],z.prototype,"listMode",void 0),(0,c._)([(0,g.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],z.prototype,"type",void 0),(0,c._)([(0,g.Cb)(j.HQ)],z.prototype,"url",void 0);var G=z=(0,c._)([(0,Z.j)("esri.layers.MapImageLayer")],z)},44041:function(e,r,t){t.d(r,{R:function(){return g}});var n=t(1413),i=t(15671),a=t(43144),o=t(60136),s=t(29388),l=t(27366),u=t(85015),c=t(41691),y=t(92026),p=t(76672),f=t(49861),h=(t(63780),t(25243),t(69912)),d=t(45948),m=t(87072),v=t(58132),b={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},g=function(e){(0,o.Z)(t,e);var r=(0,s.Z)(t);function t(e){var n;return(0,i.Z)(this,t),(n=r.call(this,e)).floors=null,n.scale=0,n}return(0,a.Z)(t,[{key:"destroy",value:function(){this.layer=null}},{key:"dynamicLayers",get:function(){var e=this;if(!this.hasDynamicLayers)return null;var r=this.visibleSublayers.map((function(r){var t=(0,m.f)(e.floors,r);return r.toExportImageJSON(t)}));return r.length?JSON.stringify(r):null}},{key:"hasDynamicLayers",get:function(){return this.layer&&(0,v.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}},{key:"layer",set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(function(){return r.notifyChange("visibleSublayers")})),e.on("sublayer-update",(function(e){return r.notifyChange(b[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map((function(e){return e.id})).join(","):"show:-1":null}},{key:"layerDefs",get:function(){var e,r=this,t=!(null===(e=this.floors)||void 0===e||!e.length),n=this.visibleSublayers.filter((function(e){return null!=e.definitionExpression||t&&null!=e.floorInfo}));return n.length?JSON.stringify(n.reduce((function(e,t){var n=(0,m.f)(r.floors,t),i=(0,p._)(n,t.definitionExpression);return(0,y.pC)(i)&&(e[t.id]=i),e}),{})):null}},{key:"version",get:function(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");var e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this,r=[];if(!this.layer)return r;var t=this.layer.sublayers;t&&t.forEach((function t(n){var i=e.scale,a=0===i,o=0===n.minScale||i<=n.minScale,s=0===n.maxScale||i>=n.maxScale;n.visible&&(a||o&&s)&&(n.sublayers?n.sublayers.forEach(t):r.unshift(n))}));var n=this._get("visibleSublayers");return!n||n.length!==r.length||n.some((function(e,t){return r[t]!==e}))?r:n}},{key:"toJSON",value:function(){var e=this.layer,r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r=(0,n.Z)((0,n.Z)({},r),{},{layers:this.layers,layerDefs:this.layerDefs}),r}}]),t}((0,c.p)(u.Z));(0,l._)([(0,f.Cb)({readOnly:!0})],g.prototype,"dynamicLayers",null),(0,l._)([(0,f.Cb)()],g.prototype,"floors",void 0),(0,l._)([(0,f.Cb)({readOnly:!0})],g.prototype,"hasDynamicLayers",null),(0,l._)([(0,f.Cb)()],g.prototype,"layer",null),(0,l._)([(0,f.Cb)({readOnly:!0})],g.prototype,"layers",null),(0,l._)([(0,f.Cb)({readOnly:!0})],g.prototype,"layerDefs",null),(0,l._)([(0,f.Cb)({type:Number})],g.prototype,"scale",void 0),(0,l._)([(0,f.Cb)(d.qG)],g.prototype,"timeExtent",void 0),(0,l._)([(0,f.Cb)({readOnly:!0})],g.prototype,"version",null),(0,l._)([(0,f.Cb)({readOnly:!0})],g.prototype,"visibleSublayers",null),g=(0,l._)([(0,h.j)("esri.layers.mixins.ExportImageParameters")],g)},87072:function(e,r,t){function n(e){var r,t=e.layer;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField&&"floors"in e.view?a(e.view.floors,t.floorInfo.floorField):null}function i(e,r){var t;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField?a(e,r.floorInfo.floorField):null}function a(e,r){if(null===e||void 0===e||!e.length)return null;var t=e.filter((function(e){return""!==e})).map((function(e){return"'".concat(e,"'")}));return t.push("''"),"".concat(r," IN (").concat(t.join(","),") OR ").concat(r," IS NULL")}t.d(r,{c:function(){return n},f:function(){return i}})}}]);
//# sourceMappingURL=9583.aae13ecb.chunk.js.map