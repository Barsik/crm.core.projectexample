webpackHotUpdate(1,{321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.OpenDialog=function(e,t,n,i){var o=new Xrm.DialogOptions;o.width=t,o.height=n,Xrm.Internal.openDialog(e,o,null,null,i||function(){})},e.OpenWebResourceInDialog=function(t,n,i,o){e.OpenDialog(Xrm.Page.context.getClientUrl()+"/webresources/"+t+"?data="+n,i.width,i.height,o)},e.SetEmptyCrossCallback=function(){window.onunload=function(){Mscrm.Utilities.setReturnValue(null)}},e.CloseThisDialog=function(e){Mscrm.Utilities.setReturnValue(e),window.closeWindow(!0)},e}();t.default=i},789:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(790))},790:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(321)),l=function(){function e(){}return e.prototype.SyncTransactionalEmailTemplates=function(){o.default.OpenWebResourceInDialog("cmb_/html/transactionalEmailSyncTemplates.html",null,{width:410,height:200},void 0)},e}();t.EmailTemplate=l,window.Columbus=window.Columbus||{},window.Columbus.EmailTemplate=new l}});
//# sourceMappingURL=1.844d88638b0e1b591a3e.hot-update.js.map