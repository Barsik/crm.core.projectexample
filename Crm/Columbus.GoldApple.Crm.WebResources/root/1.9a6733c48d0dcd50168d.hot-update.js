webpackHotUpdate(1,{319:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(){}return e.OpenDialog=function(e,n,t,i){var o=new Xrm.DialogOptions;o.width=n,o.height=t,Xrm.Internal.openDialog(e,o,null,null,i||function(){})},e.OpenWebResourceInDialog=function(n,t,i,o){e.OpenDialog(Xrm.Page.context.getClientUrl()+"/webresources/"+n+"?data="+t,i.width,i.height,o)},e.SetEmptyCrossCallback=function(){window.onunload=function(){Mscrm.Utilities.setReturnValue(null)}},e.CloseThisDialog=function(e){Mscrm.Utilities.setReturnValue(e),window.closeWindow(!0)},e}();n.DialogUtils=i},773:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}(t(774))},774:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(319),o=function(){function e(){}return e.prototype.SyncTransactionalEmailTemplates=function(){i.DialogUtils.OpenWebResourceInDialog("cmb_/html/transactionalEmailSyncTemplates.html",null,{width:410,height:200},void 0)},e}();n.EmailTemplate=o,window.Columbus=window.Columbus||{},window.Columbus.EmailTemplate=new o}});
//# sourceMappingURL=1.9a6733c48d0dcd50168d.hot-update.js.map