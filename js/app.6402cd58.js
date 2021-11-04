(function(e){function t(t){for(var n,i,l=t[0],s=t[1],u=t[2],c=0,d=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-17e99fd8":"344880d9","chunk-2d0da6c5":"d3950250","chunk-2d225b2d":"cea616b0","chunk-7f312832":"de8f331e","chunk-9fdf6d1e":"994161da"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/video-player-hls-test/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var f=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"4e8b":function(e,t,r){"use strict";r("8e40")},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",[r("h1",[e._v("Video Players test with HLS")])])],1),r("b-row",[r("b-col",[r("b-tabs",{attrs:{"content-class":"mt-3"}},[r("b-tab",{attrs:{title:"Shaka Player",active:""}},[r("shaka-player",{attrs:{"manifest-url":e.manifestUri}})],1),r("b-tab",{attrs:{title:"Video.js"}},[r("video-js-player",{attrs:{"manifest-url":e.manifestUri}})],1),r("b-tab",{attrs:{title:"Indigo Player"}},[r("indigo-player",{attrs:{"manifest-url":e.manifestUri}})],1)],1)],1)],1)],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"videoContainer",staticClass:"shadow-lg mx-auto"},[r("video",{ref:"videoPlayer",staticClass:"w-full h-full",attrs:{id:"video"}})])},l=[],s=r("8682"),u={name:"ShakaPlayer",props:{manifestUrl:{type:String,required:!0}},mounted:function(){var e=new s["Player"](this.$refs.videoPlayer),t=new s["ui"].Overlay(e,this.$refs.videoContainer,this.$refs.videoPlayer);t.getControls(),e.load(this.manifestUrl).then((function(){console.log("The video has now been loaded!")})).catch(this.onError)},methods:{onError:function(e){console.error("Error code",e.code,"object",e)}}},c=u,f=(r("adee"),r("2877")),d=Object(f["a"])(c,i,l,!1,null,null,null),p=d.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("video",{ref:"videoPlayer",staticClass:"video-js"})])},h=[],b=r("f0e2"),v=(r("2e59"),r("bd6c"),{name:"VideoJsPlayer",props:{manifestUrl:{type:String,required:!0},videoType:{type:String,default:"application/x-mpegURL"}},data:function(){return{player:null}},mounted:function(){this.player=Object(b["a"])(this.$refs.videoPlayer,{autoplay:!0,controls:!0,fluid:!0,sources:[{src:this.manifestUrl,type:this.videoType}]},(function(){console.log("onPlayerReady",this)})),this.player.hlsQualitySelector({displayCurrentQuality:!0})},beforeDestroy:function(){this.player&&this.player.dispose()}}),m=v,g=(r("3c78"),r("4e8b"),Object(f["a"])(m,y,h,!1,null,"fe1fe3d2",null)),P=g.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"container",attrs:{id:"player-container"}})},j=[],O=r("53ab"),_={name:"IndigoPlayer",props:{manifestUrl:{type:String,required:!0}},data:function(){return{player:null}},mounted:function(){this.player=O["a"](this.$refs.container,{sources:[{type:"hls",src:this.manifestUrl}]})},beforeDestroy:function(){this.player.destroy()}},k=_,S=Object(f["a"])(k,w,j,!1,null,"0902d514",null),x=S.exports,U={name:"App",components:{ShakaPlayer:p,VideoJsPlayer:P,IndigoPlayer:x},data:function(){return{manifestUri:"https://d1i8dj24b1a9li.cloudfront.net/b73736e325724ae9847f8379b2cf85cf/playlist.m3u8"}}},E=U,$=(r("034f"),Object(f["a"])(E,o,a,!1,null,null,null)),C=$.exports,T=r("5f5b"),q=r("b1e0");r("f9e3"),r("2dd8");n["default"].use(T["a"]),n["default"].use(q["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(C)}}).$mount("#app")},"85ec":function(e,t,r){},"8e40":function(e,t,r){}});
//# sourceMappingURL=app.6402cd58.js.map