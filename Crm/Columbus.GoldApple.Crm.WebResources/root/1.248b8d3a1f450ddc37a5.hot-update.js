webpackHotUpdate(1,{318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(o.OpenDialog=function(e,t,n,i){var o=new Xrm.DialogOptions;o.width=t,o.height=n,Xrm.Internal.openDialog(e,o,null,null,i||function(){})},o.OpenWebResourceInDialog=function(e,t,n,i){o.OpenDialog(Xrm.Page.context.getClientUrl()+"/webresources/"+e+"?data="+t,n.width,n.height,i)},o.SetEmptyCrossCallback=function(){window.onunload=function(){Mscrm.Utilities.setReturnValue(null)}},o.CloseThisDialog=function(e){Mscrm.Utilities.setReturnValue(e),window.closeWindow(!0)},o);function o(){}t.default=i},773:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}(t(774))},774:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(318)),l=(u.prototype.SyncTransactionalEmailTemplates=function(){o.default.OpenWebResourceInDialog("cmb_/html/transactionalEmailSyncTemplates.html",null,{width:410,height:200},void 0)},u);function u(){}t.EmailTemplate=l,window.Columbus=window.Columbus||{},window.Columbus.EmailTemplate=new l}});