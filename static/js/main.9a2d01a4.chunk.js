(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){e.exports=t(37)},22:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),o=t(9),i=t.n(o),c=(t(22),t(10)),u=t(11),s=t(14),l=t(12),f=t(16),p=t(13),v=t.n(p),h=t(15),m=t(5),d=t(1),g=t.n(d),j=function(e){for(var n={},t=[],r=[{obj:e,path:""}],a=function(){var e=r.pop(),a=e.obj,o=e.path;Object.keys(a).forEach(function(e){var i=a[e];if(g.a.isArray(i)||g.a.isObject(i)){var c;if(!g.a.some(t,function(e){return e===i})){t.push(i);var u=o?"".concat(o,"."):"",s="".concat(u).concat(e);g.a.isArray(i)&&(i=[i[0]]),r.push({obj:i,path:s})}}else{var l=(c=i,g.a.isInteger(c)?"Int":g.a.isBoolean(c)?"Boolean":g.a.isNumber(c)?"Float":"String"),f=o?"".concat(o,"."):"";g.a.set(n,"".concat(f).concat(e),l)}})};r.length>0;)a();return t.splice(0,t.length),n},b=t(6),y=t.n(b),O=function(e){var n=Object.values(function(e){return e.split("type ").filter(function(e){return e}).reduce(function(e,n,t){var r="type ".concat(n).trim(),a=n.trim().split(" ").map(function(e){return e.trim()}),o=a.shift(),i=a.filter(function(e){return e.indexOf(":")>-1}).length;return(!e[o]||e[o].amtFields<i)&&(e[o]={full:r,name:o,amtFields:i,idx:t}),e},{})}(e)).sort(function(e,n){return e.idx-n.idx}).map(function(e){return e.full}).join("\n\n"),t=Object.values(function(e){return e.split("type ").filter(function(e){return e}).reduce(function(e,n){var t=n.trim().split(" ").map(function(e){return e.trim()}),r=t.shift(),a=t.join(" ");return e[a]?(-1===e[a].indexOf(r)&&e[a].push(r),e):(e[a]=[r],e)},{})}(n)).filter(function(e){return e.length>1}).map(function(e){return"# ".concat(e.join(" "))}).join("\n");return"".concat(n).concat(t?"\n\n# Types with identical fields:\n".concat(t):"")},w=g.a.flow([function e(n,t){var r="";Object.keys(t).forEach(function(n){if(g.a.isArray(t[n])){var a=t[n][0];if(g.a.isArray(a)||g.a.isObject(a)){var o=y()(n);r+=e(o,a),t[n][0]=o}}else if(g.a.isObject(t[n])){var i=y()(n);r+=e(i,t[n]),t[n]=i}});var a=JSON.stringify(t,null,4);return"".concat(r,"type ").concat(n," ").concat(a.replace(/"/g,"")," ").replace(/\[\n/g,"[").replace(/\[\s+/g,"[").replace(/\n\s+\]/g,"]").replace(/,/g,"").replace(/ {3,}/g,"  ")},O]),E=function(e){try{return{value:e()}}catch(n){return{error:n}}},I=function(e){var n=e.baseType,t=void 0===n?"AutogeneratedMainType":n,r=function(e){var n=E(function(){return JSON.parse(e)}),t=n.error,r=n.value;return t?{error:{title:"Invalid JSON received",message:t.message}}:r?{value:r}:{error:{title:"Invalid JSON received",message:null}}}(e.jsonInput),a=r.error,o=r.value;return a?{error:a}:E(function(){return w(t,j(o))})},S=(t(35),t(36),function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(l.a)(n).call(this,e))).state={jsonInput:"",schema:""},t}return Object(f.a)(n,e),Object(u.a)(n,[{key:"convert",value:function(){var e=this.state.jsonInput,n=I({jsonInput:e}),t=n.error,r=n.value;if(t){var a=t.title,o=t.message;v.a.fire({title:a,text:o,type:"error"})}else this.setState({schema:r})}},{key:"render",value:function(){var e=this,n=window.innerWidth/2,t=this.state,r=t.jsonInput,o=t.schema;return console.log(o),a.a.createElement("div",{className:""},a.a.createElement("button",{onClick:this.convert.bind(this)},"Convert"),a.a.createElement(h.a,{split:"vertical",defaultSize:n},a.a.createElement("div",null,a.a.createElement(m.Controlled,{onBeforeChange:function(n,t,r){e.setState({jsonInput:r})},onChange:function(e,n,t){},value:r,options:{mode:"json",lineNumbers:!0,tabSize:2}})),a.a.createElement("div",null,a.a.createElement(m.Controlled,{onBeforeChange:function(n,t,r){e.setState({schema:r})},onChange:function(e,n,t){},value:o,options:{lineNumbers:!0,tabSize:2}}))))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.9a2d01a4.chunk.js.map