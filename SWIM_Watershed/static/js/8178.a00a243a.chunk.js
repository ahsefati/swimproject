"use strict";(self.webpackChunkswimfront=self.webpackChunkswimfront||[]).push([[8178],{58178:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(74165),u=r(37762),a=r(15861),i=r(15671),s=r(43144),o=r(14921),c=r(10064),p=r(32718),l=r(92026),f=r(66978),h=r(92975),d=r(83406),y=r(97114),v=r(19995),g=r(14e3),m=r(47615),Z=r(68808),_=r(12622),w=r(52410),x=function(){function e(){var t=this;(0,i.Z)(this,e),this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var a,i,s,o,c,p,y,g,w,x,k,b;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t._queryEngine.objectIdField,e.next=3,(0,_.Bm)(null!==(a=t._getFeatureUrl)&&void 0!==a?a:"",t._featureType.typeName,t._getFeatureOutputFormat,{customParameters:t._customParameters,dateFields:t._queryEngine.fieldsIndex.dateFields.map((function(e){return e.name})),signal:r});case 3:return s=e.sent,e.next=6,(0,m.O3)(s);case 6:if((0,f.k_)(r),o=(0,m.lG)(s,{geometryType:t._queryEngine.geometryType,hasZ:!1,objectIdField:i}),!(0,h.fS)(t._queryEngine.spatialReference,h.Zn)){c=(0,u.Z)(o);try{for(c.s();!(p=c.n()).done;)y=p.value,(0,l.pC)(y.geometry)&&(y.geometry=(0,d.GH)((0,v.iV)((0,d.di)(y.geometry,t._queryEngine.geometryType,!1,!1),h.Zn,t._queryEngine.spatialReference)))}catch(n){c.e(n)}finally{c.f()}}g=1,w=(0,u.Z)(o);try{for(w.s();!(x=w.n()).done;)k=x.value,b={},(0,Z.O0)(t._fieldsIndex,b,k.attributes,!0),k.attributes=b,null==k.attributes[i]&&(k.objectId=k.attributes[i]=g++)}catch(n){w.e(n)}finally{w.f()}return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,s.Z)(e,[{key:"destroy",value:function(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=null}},{key:"load",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var u,a,i,s,o,c,p,h,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=t.getFeatureUrl,a=t.getFeatureOutputFormat,i=t.spatialReference,s=t.fields,o=t.geometryType,c=t.featureType,p=t.objectIdField,h=t.customParameters,this._featureType=c,this._customParameters=h,this._getFeatureUrl=u,this._getFeatureOutputFormat=a,this._fieldsIndex=new w.Z(s),e.next=8,this._checkProjection(i);case 8:return(0,f.k_)(r),this._queryEngine=new g.q({fields:s,geometryType:o,hasM:!1,hasZ:!1,objectIdField:p,spatialReference:i,timeInfo:null,featureStore:new y.Z({geometryType:o,hasM:!1,hasZ:!1})}),e.next=12,this._snapshotFeatures((0,l.Wg)(r.signal));case 12:return d=e.sent,e.abrupt("return",(this._queryEngine.featureStore.addMany(d),{extent:this._queryEngine.fullExtent}));case 14:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new c.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},r=u.length>1&&void 0!==u[1]?u[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},r=u.length>1&&void 0!==u[1]?u[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},r=u.length>1&&void 0!==u[1]?u[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},r=u.length>1&&void 0!==u[1]?u[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,r.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,u=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._customParameters=t,null!==(r=this._snapshotTask)&&void 0!==r&&r.abort(),this._snapshotTask=(0,o.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){u._queryEngine.featureStore.clear(),e&&u._queryEngine.featureStore.addMany(e)}),(function(e){u._queryEngine.featureStore.clear(),(0,f.D_)(e)||p.Z.getLogger("esri.layers.WFSLayer").error(new c.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.abrupt("return",{extent:this._queryEngine.fullExtent});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_checkProjection",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v._W)(h.Zn,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new c.Z("unsupported-projection","Projection not supported",{spatialReference:t});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},68808:function(e,t,r){r.d(t,{O0:function(){return m},av:function(){return h},b:function(){return k},d1:function(){return y},og:function(){return _}});var n=r(74165),u=r(15861),a=r(37762),i=r(43144),s=r(15671),o=r(92026),c=r(92975),p=r(80031),l=(0,i.Z)((function e(){(0,s.Z)(this,e),this.code=null,this.description=null})),f=(0,i.Z)((function e(t){(0,s.Z)(this,e),this.error=new l,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}));function h(e){return new f(e)}var d=(0,i.Z)((function e(t){(0,s.Z)(this,e),this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}));function y(e){return new d(e)}var v,g=new Set;function m(e,t,r){var n,u=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4?arguments[4]:void 0;for(var s in g.clear(),r){var o=e.get(s);if(o){var c=r[s],l=Z(o,c);if(l!==c&&i&&i.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:c,sanitizedValue:l}}),g.add(o.name),o&&(u||o.editable)){var f=(0,p.Qc)(o,l);if(f)return h((0,p.vP)(f,o,l));t[o.name]=l}}}var d,y=(0,a.Z)(null!==(n=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==n?n:[]);try{for(y.s();!(d=y.n()).done;){var v=d.value;if(!g.has(v.name))return h('missing required field "'.concat(v.name,'"'))}}catch(m){y.e(m)}finally{y.f()}return null}function Z(e,t){var r=t;return"string"==typeof t&&(0,p.H7)(e)?r=parseFloat(t):null!=t&&(0,p.qN)(e)&&"string"!=typeof t&&(r=String(t)),(0,p.Pz)(r)}function _(e,t){if(!e||!(0,c.JY)(t))return e;if("rings"in e||"paths"in e){if((0,o.Wi)(v))throw new TypeError("geometry engine not loaded");return v.simplify(t,e)}return e}function w(){return x.apply(this,arguments)}function x(){return(x=(0,u.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=(0,o.Wi)(v),!e.t0){e.next=5;break}return e.next=4,Promise.all([r.e(9058),r.e(3645)]).then(r.bind(r,50309));case 4:v=e.sent;case 5:return e.abrupt("return",v);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return b.apply(this,arguments)}function b(){return(b=(0,u.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!(0,c.JY)(t)||"esriGeometryPolygon"!==r&&"esriGeometryPolyline"!==r,e.t0){e.next=4;break}return e.next=4,w();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=8178.a00a243a.chunk.js.map