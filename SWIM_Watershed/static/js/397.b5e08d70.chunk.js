"use strict";(self.webpackChunkswimfront=self.webpackChunkswimfront||[]).push([[397],{50397:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(74165),i=r(15861),a=r(1413),o=r(15671),s=r(43144),c=r(11752),u=r(61120),l=r(60136),p=r(29388),d=r(27366),y=r(10064),f=r(92026),h=r(94172),v=r(49861),m=(r(63780),r(25243),r(69912)),_=r(49818),O=r(50244),S=r(31666);function Z(e,t){if((0,f.Wi)(e)&&(0,f.Wi)(t))return null;var r={};return(0,f.pC)(t)&&(r.geometry=t.toJSON()),(0,f.pC)(e)&&(r.where=e),r}var b=function(e){(0,l.Z)(r,e);var t=(0,p.Z)(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments))._enabledDataReceived=!1,e.errorString=null,e.connectionStatus="disconnected",e}return(0,s.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add([(0,h.YP)((function(){var t;return null===(t=e.layer)||void 0===t?void 0:t.purgeOptions}),(function(){return e._update()})),(0,h.YP)((function(){return e.suspended}),(function(t){t?e._proxy.pauseStream():e._proxy.resumeStream()}))])}},{key:"connectionError",get:function(){if(this.errorString)return new y.Z("stream-controller",this.errorString)}},{key:"on",value:function(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));var n=(0,c.Z)((0,u.Z)(r.prototype),"on",this).call(this,e,t),i=this;return{remove:function(){n.remove(),"data-received"===e&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}},{key:"queryLatestObservations",value:function(e,t){var r=this;if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new y.Z("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((function(e){var t=_.default.fromJSON(e);return t.features.forEach((function(e){e.layer=r.layer,e.sourceLayer=r.layer})),t}))}},{key:"detach",value:function(){(0,c.Z)((0,u.Z)(r.prototype),"detach",this).call(this),this.connectionStatus="disconnected"}},{key:"_createClientOptions",value:function(){var e=this;return(0,a.Z)((0,a.Z)({},(0,c.Z)((0,u.Z)(r.prototype),"_createClientOptions",this).call(this)),{},{setProperty:function(t){e.set(t.propertyName,t.value)}})}},{key:"_createTileRendererHash",value:function(e){var t="".concat(JSON.stringify(this.layer.purgeOptions),".").concat(JSON.stringify(Z(this.layer.definitionExpression,this.layer.geometryDefinition)),")");return(0,c.Z)((0,u.Z)(r.prototype),"_createTileRendererHash",this).call(this,e)+t}},{key:"_createServiceOptions",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t,r,i,a,o,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.layer,r=t.objectIdField,i=t.fields.map((function(e){return e.toJSON()})),a=(0,S.oq)(t.geometryType),o=t.timeInfo&&t.timeInfo.toJSON()||null,s=t.spatialReference?t.spatialReference.toJSON():null,e.abrupt("return",{type:"stream",fields:i,geometryType:a,objectIdField:r,timeInfo:o,source:this.layer.parsedUrl,serviceFilter:Z(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:s,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:t.customParameters});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),r}(O.default);(0,d._)([(0,v.Cb)()],b.prototype,"errorString",void 0),(0,d._)([(0,v.Cb)({readOnly:!0})],b.prototype,"connectionError",null),(0,d._)([(0,v.Cb)()],b.prototype,"connectionStatus",void 0);var g=b=(0,d._)([(0,m.j)("esri.views.2d.layers.StreamLayerView2D")],b)}}]);
//# sourceMappingURL=397.b5e08d70.chunk.js.map