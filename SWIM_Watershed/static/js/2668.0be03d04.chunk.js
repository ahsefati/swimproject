"use strict";(self.webpackChunkswimfront=self.webpackChunkswimfront||[]).push([[2668],{2668:function(e,t,r){r.r(t),r.d(t,{default:function(){return oe}});var n,i=r(74165),o=r(29439),a=r(15861),s=r(1413),l=r(15671),p=r(43144),d=r(60136),u=r(29388),c=r(27366),y=(r(59486),r(44055)),f=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999)),m=r(28189),v=r(9014),b=r(40464),h=r(76200),g=r(51508),w=r(10064),I=r(32718),C=r(92026),_=r(97642),S=r(66978),x=r(49861),k=(r(63780),r(25243)),Z=r(38511),R=r(69912),j=r(47492),T=r(27823),P=r(30651),F=r(11936),N=r(6693),O=r(46671),D=r(7632),E=r(64390),A=r(6061),U=r(29598),J=r(71684),L=r(56811),M=r(99063),q=r(45948),z=r(25610),G=r(80031),Q=r(77748),V=r(85116),Y=r(46784),W=n=function(e){(0,d.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;return(0,l.Z)(this,r),(e=t.apply(this,arguments)).age=null,e.ageReceived=null,e.displayCount=null,e.maxObservations=1,e}return(0,p.Z)(r,[{key:"clone",value:function(){return new n({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}}]),r}(Y.wq);(0,c._)([(0,x.Cb)({type:Number,json:{write:!0}})],W.prototype,"age",void 0),(0,c._)([(0,x.Cb)({type:Number,json:{write:!0}})],W.prototype,"ageReceived",void 0),(0,c._)([(0,x.Cb)({type:Number,json:{write:!0}})],W.prototype,"displayCount",void 0),(0,c._)([(0,x.Cb)({type:Number,json:{write:!0}})],W.prototype,"maxObservations",void 0);var H=W=n=(0,c._)([(0,R.j)("esri.layers.support.PurgeOptions")],W),B=r(21371),K=r(86638),X=r(81085),$=r(64575),ee=r(78952),te=r(53866),re=(0,z.v)(),ne=function(e){(0,d.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;(0,l.Z)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).copyright=null,e.definitionExpression=null,e.displayField=null,e.elevationInfo=null,e.fields=null,e.fieldsIndex=null,e.geometryDefinition=null,e.geometryType=null,e.labelsVisible=!0,e.labelingInfo=null,e.legendEnabled=!0,e.maxReconnectionAttempts=0,e.maxReconnectionInterval=20,e.maxScale=0,e.minScale=0,e.objectIdField=null,e.operationalLayerType="ArcGISStreamLayer",e.popupEnabled=!0,e.popupTemplate=null,e.purgeOptions=new H,e.screenSizePerspectiveEnabled=!0,e.sourceJSON=null,e.spatialReference=ee.Z.WGS84,e.type="stream",e.url=null,e.updateInterval=300,e.webSocketUrl=null,e}return(0,p.Z)(n,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,s.Z)({url:e},t):e}},{key:"load",value:function(e){var t=this;if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new w.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);var r=(0,C.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(S.r9).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"renderer",set:function(e){(0,G.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"readRenderer",value:function(e,t,r){var n=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(n){var i=(0,v.a)(n,t,r)||void 0;return i||I.Z.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),i}if(t.defaultSymbol)return t.types&&t.types.length?new m.Z({defaultSymbol:ie(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((function(e){return{id:e.id,symbol:ie(e.symbol,e,r)}}))}):new f.Z({symbol:ie(t.defaultSymbol,t,r)})}},{key:"connect",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,a,s,l,p,d,u,c,y,f,m,v,b,h,g,w,I;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(296).then(r.bind(r,80296)),this.load()]);case 2:return n=e.sent,a=(0,o.Z)(n,1),s=a[0].createConnection,l=T.Mk.toJSON(this.geometryType),p=t||this.createConnectionParameters(),d=p.customParameters,u=void 0===d?null:d,c=p.definitionExpression,y=void 0===c?null:c,f=p.geometryDefinition,m=void 0===f?null:f,v=p.maxReconnectionAttempts,b=void 0===v?0:v,h=p.maxReconnectionInterval,g=void 0===h?20:h,w=p.spatialReference,I=void 0===w?this.spatialReference:w,e.abrupt("return",s(this.parsedUrl,this.spatialReference,I,l,{geometry:m,where:y},b,g,u));case 20:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createConnectionParameters",value:function(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}},{key:"createPopupTemplate",value:function(e){return(0,X.eZ)(this,e)}},{key:"createQuery",value:function(){var e=new K.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}},{key:"getFieldDomain",value:function(e,t){if(!this.fields)return null;var r=null;return this.fields.some((function(t){return t.name===e&&(r=t.domain),!!r})),r}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"serviceSupportsSpatialReference",value:function(e){return!0}},{key:"_fetchService",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,n,o,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.webSocketUrl){e.next=12;break}if(null!==(n=this.timeInfo)&&void 0!==n&&n.trackIdField){e.next=3;break}throw new w.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");case 3:if(this.objectIdField){e.next=5;break}throw new w.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");case 5:if(this.fields){e.next=7;break}throw new w.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");case 7:if(this.geometryType){e.next=9;break}throw new w.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");case 9:this.url=this.webSocketUrl,e.next=18;break;case 12:if(this.sourceJSON){e.next=18;break}return e.next=15,(0,h.default)(this.parsedUrl.path,{query:(0,s.Z)((0,s.Z)({f:"json"},this.customParameters),this.parsedUrl.query),responseType:"json",signal:t});case 15:o=e.sent,a=o.data,this.sourceJSON=a;case 18:return e.abrupt("return",(this.sourceJSON=(0,s.Z)((0,s.Z)({},null!==(r=this.sourceJSON)&&void 0!==r?r:{}),{},{objectIdField:"__esri_stream_id__"}),this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),(0,G.YN)(this.renderer,this.fieldsIndex),(0,G.UF)(this.timeInfo,this.fieldsIndex),(0,B.y)(this,{origin:"service"})));case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}((0,E.M)((0,D.b)((0,N.h)((0,M.n)((0,L.M)((0,J.Q)((0,F.Y)((0,A.q)((0,U.I)((0,_.R)((0,O.N)(P.Z))))))))))));(0,c._)([(0,x.Cb)({type:String})],ne.prototype,"copyright",void 0),(0,c._)([(0,x.Cb)({readOnly:!0})],ne.prototype,"defaultPopupTemplate",null),(0,c._)([(0,x.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ne.prototype,"definitionExpression",void 0),(0,c._)([(0,x.Cb)({type:String})],ne.prototype,"displayField",void 0),(0,c._)([(0,x.Cb)({type:$.Z})],ne.prototype,"elevationInfo",void 0),(0,c._)([(0,x.Cb)(re.fields)],ne.prototype,"fields",void 0),(0,c._)([(0,x.Cb)(re.fieldsIndex)],ne.prototype,"fieldsIndex",void 0),(0,c._)([(0,x.Cb)({type:te.Z})],ne.prototype,"geometryDefinition",void 0),(0,c._)([(0,x.Cb)({type:T.Mk.apiValues,json:{read:{reader:T.Mk.read}}})],ne.prototype,"geometryType",void 0),(0,c._)([(0,x.Cb)(q.iR)],ne.prototype,"labelsVisible",void 0),(0,c._)([(0,x.Cb)({type:[Q.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:V.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],ne.prototype,"labelingInfo",void 0),(0,c._)([(0,x.Cb)(q.rn)],ne.prototype,"legendEnabled",void 0),(0,c._)([(0,x.Cb)({type:["show","hide"]})],ne.prototype,"listMode",void 0),(0,c._)([(0,x.Cb)({type:k.z8})],ne.prototype,"maxReconnectionAttempts",void 0),(0,c._)([(0,x.Cb)({type:k.z8})],ne.prototype,"maxReconnectionInterval",void 0),(0,c._)([(0,x.Cb)(q.u1)],ne.prototype,"maxScale",void 0),(0,c._)([(0,x.Cb)(q.rO)],ne.prototype,"minScale",void 0),(0,c._)([(0,x.Cb)({type:String})],ne.prototype,"objectIdField",void 0),(0,c._)([(0,x.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],ne.prototype,"operationalLayerType",void 0),(0,c._)([(0,x.Cb)(q.C_)],ne.prototype,"popupEnabled",void 0),(0,c._)([(0,x.Cb)({type:y.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],ne.prototype,"popupTemplate",void 0),(0,c._)([(0,x.Cb)({type:H})],ne.prototype,"purgeOptions",void 0),(0,c._)([(0,x.Cb)({types:b.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:b.o,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],ne.prototype,"renderer",null),(0,c._)([(0,Z.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,Z.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],ne.prototype,"readRenderer",null),(0,c._)([(0,x.Cb)(q.YI)],ne.prototype,"screenSizePerspectiveEnabled",void 0),(0,c._)([(0,x.Cb)()],ne.prototype,"sourceJSON",void 0),(0,c._)([(0,x.Cb)({type:ee.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],ne.prototype,"spatialReference",void 0),(0,c._)([(0,x.Cb)({json:{read:!1}})],ne.prototype,"type",void 0),(0,c._)([(0,x.Cb)(q.HQ)],ne.prototype,"url",void 0),(0,c._)([(0,x.Cb)({type:Number})],ne.prototype,"updateInterval",void 0),(0,c._)([(0,x.Cb)({type:String})],ne.prototype,"webSocketUrl",void 0),ne=(0,c._)([(0,R.j)("esri.layers.StreamLayer")],ne);var ie=(0,j.d)({types:g.QT}),oe=ne}}]);
//# sourceMappingURL=2668.0be03d04.chunk.js.map