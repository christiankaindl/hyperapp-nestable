!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("hyperapp")):"function"==typeof define&&define.amd?define(["hyperapp"],e):n.nestable=e(n.hyperapp)}(this,function(n){"use strict";return function(e,t,o,r){return t._$r=function(){return{}},function(u,i){return n.h(r||"x-",{key:u.key,id:u.id,class:u.class,oncreate:function(r){var p=n.app(e,t,function(n,e){var t=o(n,e);return"function"==typeof t&&(t=t(r._$p,r._$c)),t},r);r._$p=u,r._$c=i,r._$r=p._$r,r._$u=p.uninit,p.init&&p.init(u),u.oncreate&&u.oncreate(r)},onupdate:function(n){n._$p=u,n._$c=i,n._$r(),u.onupdate&&u.onupdate(n)},ondestroy:function(n){n._$u&&n._$u()}})}}});
//# sourceMappingURL=hyperapp-nestable.js.map