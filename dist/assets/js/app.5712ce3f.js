(function(e){function t(t){for(var a,o,d=t[0],c=t[1],s=t[2],u=0,l=[];u<d.length;u++)o=d[u],r[o]&&l.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var d=n[o];0!==r[d]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function d(e){return c.p+"assets/js/"+({}[e]||e)+"."+{"chunk-376d5f04":"4e8a8ad5","chunk-25786c12":"22035a21","chunk-2e53e46a":"39aecdb5","chunk-4de8e226":"c2341989","chunk-6119bd1f":"4dc65411","chunk-894047f4":"c287061b","chunk-bb85f35e":"948907ce","chunk-ed23105e":"9a2f4b73","chunk-50eec7ed":"51064a43","chunk-dc585d2a":"e6564e2a"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-376d5f04":1,"chunk-25786c12":1,"chunk-2e53e46a":1,"chunk-4de8e226":1,"chunk-6119bd1f":1,"chunk-894047f4":1,"chunk-bb85f35e":1,"chunk-ed23105e":1,"chunk-50eec7ed":1,"chunk-dc585d2a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var a="assets/css/"+({}[e]||e)+"."+{"chunk-376d5f04":"d31abc04","chunk-25786c12":"78c338c5","chunk-2e53e46a":"721096ed","chunk-4de8e226":"c905d60e","chunk-6119bd1f":"03a93da5","chunk-894047f4":"8be1a51b","chunk-bb85f35e":"1dbaa364","chunk-ed23105e":"c31a65cf","chunk-50eec7ed":"d7bcf211","chunk-dc585d2a":"d9855b2d"}[e]+".css",o=c.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var d=r[i],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===a||s===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){d=u[i],s=d.getAttribute("data-href");if(s===a||s===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.request=a,n(r)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){o[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=i);var s,u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=d(e),s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[e]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,u.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2c49":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.transitionName}},[n("keep-alive",[n("router-view",{key:e.$route.fullPath,staticClass:"Router"})],1)],1)],1)},r=[],i=(n("ac6a"),n("a481"),n("bc3a")),d=n.n(i),c=n("4328"),s=n.n(c),u=(n("386d"),n("6b54"),n("4917"),n("3b2b"),n("28a5"),n("18a0")),l=n.n(u),p=function(e){var t=window.location.href.split("?")[1];if(t){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),a=t.match(n);return null!=a?decodeURIComponent(a[2]):null}},h={checkLink:function(e,t){d.a.post("../../wx/checkLink",s.a.stringify({tempTime:parseInt(e)})).then(function(e){var n=e.data;0==n.result?t(n):alert(n.errmsg)})},getStoreById:function(e,t,n,a){d.a.post("../../wx/getStoreById",s.a.stringify({appid:e,brandid:parseInt(t),storeid:parseInt(n)})).then(function(e){var t=e.data;0==t.result?a(t):alert(t.errmsg)})},getTableById:function(e,t,n,a){d.a.post("../../wx/getTableById",s.a.stringify({appid:e,brandid:parseInt(t),storeid:parseInt(n),tableid:window.sessionStorage.getItem("table")})).then(function(e){var t=e.data;0==t.result?a(t):alert(t.errmsg)})},getWechatAppID:function(e,t,n,a,o,r){var i={appid:e,brandid:parseInt(t),storeid:parseInt(n),tableid:parseInt(a)};1==window.localStorage.getItem("browserName")&&(i.type=1),d.a.post("../../wx/getWechatAppID",s.a.stringify(i)).then(function(e){var t=e.data;0==t.result?r(t):alert(t.errmsg)})},getJSParam:function(e,t,n){d.a.post("../../wx/getJSParam",s.a.stringify({appid:e,brandid:parseInt(t),storeid:parseInt(n),shareurl:window.location.href})).then(function(e){var t=e.data,n=window.sessionStorage.getItem("appID");0==t.result?l.a.config({debug:!1,appId:n,timestamp:t.content.timestamp,nonceStr:t.content.noncestr,signature:t.content.sign,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","scanQRCode","chooseWXPay"]}):alert(t.errmsg)})},getOpenid:function(e,t,n,a,o){var r=window.localStorage.getItem("browserName");function i(e){var t=e.data;0==t.result?(window.localStorage.setItem("nickname",t.content.nickname),window.localStorage.setItem("headimgurl",t.content.headimgurl),1==r?window.sessionStorage.setItem("openid",t.content.userid):2==r&&(window.sessionStorage.setItem("openid",t.content.openid),window.localStorage.setItem("subscribe",t.content.subscribe.toString().substring(0,1))),o()):2==r&&m(p("appid"),p("brandid"),p("storeid"),p("dishtype"),p("table"),sessionStorage.getItem("appID"))}1==r&&d.a.post("../../alipay/getUserid",s.a.stringify({appid:e,code:n,storeid:parseInt(a)})).then(function(e){i(e)}),2==r&&d.a.post("../../wx/getOpenid",s.a.stringify({appid:e,code:n,brandid:t,storeid:parseInt(a)})).then(function(e){i(e)})}},f="/wxdc/dist/",m=function(e,t,n,a,o,r){var i=location.protocol+"//"+window.location.host;i+=f+"index.html?appid="+e+"&brandid="+parseInt(t)+"&storeid="+parseInt(n)+"&dishtype="+a+"&table="+o,window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+r+"&redirect_uri="+encodeURIComponent(i)+"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect"},g=function(e,t,n,a,o,r){var i=location.protocol+"//"+window.location.host;i+=f+"index.html?appid="+e+"&brandid="+parseInt(t)+"&storeid="+parseInt(n)+"&dishtype="+a+"&code=1&table="+o,i=i.replace("#/",""),window.location.href="https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id="+r+"&scope=auth_user&redirect_uri="+encodeURIComponent(i)},w=function(){var e=navigator.userAgent.toLowerCase();"alipay"!=e.match(/Alipay/i)?"micromessenger"!=e.match(/MicroMessenger/i)?window.localStorage.setItem("browserName",3):window.localStorage.setItem("browserName",2):window.localStorage.setItem("browserName",1)};w();var b=h,I=b.checkLink,y=b.getStoreById,v=b.getWechatAppID,S=b.getTableById,k=p,P=m,_=g,N=k("openid"),x=function(){window.localStorage.setItem("appid",k("appid")),window.localStorage.setItem("storeid",k("storeid")),window.localStorage.setItem("brandid",k("brandid")),window.sessionStorage.setItem("dishtype",k("dishtype")),window.sessionStorage.setItem("table",k("table")),k("code")||A()},A=function(){2==k("dishtype")?O():T()},O=function(){var e=!!k("tempTime")&&k("tempTime");e?I(k("tempTime"),function(e){e.data?M():alert("链接已过期请重新扫码")}):M()},T=function(){v(k("appid"),k("brandid"),k("storeid"),k("table"),k("dishtype"),function(e){window.sessionStorage.setItem("appID",e.content.appid),window.localStorage.setItem("tableName",e.content.tableName),N&&(window.sessionStorage.setItem("openid",k("openid")),S(k("appid"),k("brandid"),k("storeid"),function(e){0==e.result?(window.localStorage.setItem("tableName",e.content.tableName),window.location.href=window.location.origin+window.location.pathname+window.location.search+"&code=1"):alert(e.errmsg)})),1!=window.localStorage.getItem("browserName")||N?2!=window.localStorage.getItem("browserName")||N||P(k("appid"),k("brandid"),k("storeid"),k("dishtype"),k("table"),e.content.appid):_(k("appid"),k("brandid"),k("storeid"),k("dishtype"),k("table"),e.content.appid)})},M=function(){y(k("appid"),k("brandid"),k("storeid"),function(e){0==e.result&&(window.localStorage.setItem("displayIndex",e.data.displayIndex),window.localStorage.setItem("toggle",e.data.toggle),window.localStorage.setItem("cache",e.data.cache),window.localStorage.setItem("point",[e.data.longitude,e.data.latitude]),window.localStorage.setItem("saleOut",e.data.saleOut),window.localStorage.setItem("welcomeSname",e.data.sname),window.localStorage.setItem("welcomeStoreImg",e.data.storeImg),window.localStorage.setItem("repastPopulation",e.data.repastPopulation),window.localStorage.setItem("isNeedMember",e.data.needMember),window.localStorage.setItem("showMemberPrice",e.data.showMemberPrice),window.localStorage.setItem("isPayRecommended",e.data.isPayRecommended),window.localStorage.setItem("recommend",e.data.recommend),T())})};x();var L=h,E=L.getOpenid,j=L.getJSParam,B=p,$={name:"app",data:function(){return{transitionName:"slide-right"}},watch:{$route:function(){var e=this.$router.isBack;this.transitionName=e?"slide-right":"slide-left",this.$router.isBack=!1}},mounted:function(){document.title=window.localStorage.getItem("welcomeSname")?window.localStorage.getItem("welcomeSname"):"",B("code")&&(j(B("appid"),B("brandid"),B("storeid")),this.getOpen())},methods:{getOpen:function(){if(window.sessionStorage.getItem("openid"))this.findOrder();else{var e=window.localStorage.getItem("browserName");1==e?E(B("appid"),B("brandid"),B("auth_code").replace("#/",""),B("storeid"),this.findOrder):2==e&&E(B("appid"),B("brandid"),B("code"),B("storeid"),this.findOrder)}},findOrder:function(){var e=this;d.a.post("../../wx/findOrder",s.a.stringify({appid:window.localStorage.getItem("appid"),storeid:window.localStorage.getItem("storeid"),openid:window.sessionStorage.getItem("openid"),brandid:window.localStorage.getItem("brandid")})).then(function(t){var n=t.data;0==n.result&&(n.content.length>0?(n.content.forEach(function(e){window.sessionStorage.setItem("phoneNum",e.memberPhoneNumber)}),e.$router.push({path:"/orderListAgain"})):e.onJump())})},onJump:function(){var e=window.localStorage.getItem("displayIndex"),t=window.location.href;t=t.substring(t.length-9,t.length),"orderList"!=t?"true"==e?this.$router.replace({path:"/welcome"}):this.$router.replace({path:"/goods"}):this.$router.replace({path:"/orderList"})}}},C=$,J=(n("7c55"),n("2877")),R=Object(J["a"])(C,o,r,!1,null,null,null);R.options.__file="App.vue";var D=R.exports,F=n("8c4f");a["default"].use(F["a"]);var W=new F["a"]({linkActiveClass:"active",base:"/wxdc/dist/",routes:[{path:"/welcome",component:function(e){return n.e("chunk-dc585d2a").then(function(){var t=[n("c277")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"欢迎"}},{path:"/goods",component:function(e){return Promise.all([n.e("chunk-376d5f04"),n.e("chunk-894047f4")]).then(function(){var t=[n("58b2")];e.apply(null,t)}.bind(this)).catch(n.oe)},name:"goods",meta:{keepAlive:!0}},{path:"/payPage",component:function(e){return Promise.all([n.e("chunk-376d5f04"),n.e("chunk-4de8e226")]).then(function(){var t=[n("8994")];e.apply(null,t)}.bind(this)).catch(n.oe)},name:"payPage"},{path:"/paySuccess",component:function(e){return n.e("chunk-50eec7ed").then(function(){var t=[n("f13a")];e.apply(null,t)}.bind(this)).catch(n.oe)},name:"paySuccess"},{path:"/orderInfo",component:function(e){return Promise.all([n.e("chunk-376d5f04"),n.e("chunk-bb85f35e")]).then(function(){var t=[n("bbe6")];e.apply(null,t)}.bind(this)).catch(n.oe)},name:"orderInfo"},{path:"/orderList",component:function(e){return Promise.all([n.e("chunk-376d5f04"),n.e("chunk-2e53e46a")]).then(function(){var t=[n("2e26")];e.apply(null,t)}.bind(this)).catch(n.oe)},name:"orderList"},{path:"/orderListAgain",component:function(e){return Promise.all([n.e("chunk-376d5f04"),n.e("chunk-25786c12")]).then(function(){var t=[n("d9ed")];e.apply(null,t)}.bind(this)).catch(n.oe)},name:"orderListAgain"},{path:"/addressList",component:function(e){return Promise.all([n.e("chunk-376d5f04"),n.e("chunk-ed23105e")]).then(function(){var t=[n("a17e")];e.apply(null,t)}.bind(this)).catch(n.oe)},name:"addressList"},{path:"/addressEdit",component:function(e){return Promise.all([n.e("chunk-376d5f04"),n.e("chunk-6119bd1f")]).then(function(){var t=[n("cd5f")];e.apply(null,t)}.bind(this)).catch(n.oe)},name:"addressEdit"}]}),q=n("2f62"),Q=n("653a"),U=(n("499a"),n("76a0")),z=n.n(U),G=(n("aa35"),n("2c49"),n("8f9b")),X=n.n(G);n("a287");X.a.initAMapApiLoader({key:"d14ad4c473160cbc9a6aef971e2d6a11",plugin:["AMap.Geolocation"]}),a["default"].config.productionTip=!1,a["default"].use(q["a"]),a["default"].use(X.a),a["default"].use(z.a),new a["default"]({router:W,store:Q["a"],render:function(e){return e(D)}}).$mount("#app")},"5c48":function(e,t,n){},"653a":function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d");var a=n("a026"),o=n("2f62");a["default"].use(o["a"]);var r={selectFoods:{},totalPrice:0,addressInfo:{},dataInit:!0,phoneNum:null},i={set_selectFoods:function(e,t){e.selectFoods=t},set_totalPrice:function(e,t){e.totalPrice=t},set_addressInfo:function(e,t){e.addressInfo=t},set_dataInit:function(e,t){e.dataInit=t},set_phoneNum:function(e,t){e.phoneNum=t}},d={get_selectFoods:function(e){return e.selectFoods},get_totalPrice:function(e){return e.totalPrice},get_addressInfo:function(e){return e.addressInfo},get_dataInit:function(e){return e.dataInit},get_phoneNum:function(e){return e.phoneNum}};t["a"]=new o["a"].Store({getters:d,state:r,mutations:i})},"7c55":function(e,t,n){"use strict";var a=n("5c48"),o=n.n(a);o.a},a287:function(e,t,n){}});