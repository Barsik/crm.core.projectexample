webpackHotUpdate(4,{318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(o.OpenDialog=function(e,t,n,r){var o=new Xrm.DialogOptions;o.width=t,o.height=n,Xrm.Internal.openDialog(e,o,null,null,r||function(){})},o.OpenWebResourceInDialog=function(e,t,n,r){o.OpenDialog(Xrm.Page.context.getClientUrl()+"/webresources/"+e+"?data="+t,n.width,n.height,r)},o.SetEmptyCrossCallback=function(){window.onunload=function(){Mscrm.Utilities.setReturnValue(null)}},o.CloseThisDialog=function(e){Mscrm.Utilities.setReturnValue(e),window.closeWindow(!0)},o);function o(){}t.default=r},433:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(0)),l=r(n(10));n(775);var a=o(n(438));l.render(i.createElement(a.default,null),document.getElementById("root"))},438:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__awaiter||function(e,l,a,u){return new(a=a||Promise)(function(n,t){function r(e){try{i(u.next(e))}catch(e){t(e)}}function o(e){try{i(u.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(r,o)}i((u=u.apply(e,l||[])).next())})},l=this&&this.__generator||function(n,r){var o,i,l,e,a={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(l=2&t[0]?i.return:t[0]?i.throw||((l=i.return)&&l.call(i),0):i.next)&&!(l=l.call(i,t[1])).done)return l;switch(i=0,l&&(t=[2&t[0],l.value]),t[0]){case 0:case 1:l=t;break;case 4:return a.label++,{value:t[1],done:!1};case 5:a.label++,i=t[1],t=[0];continue;case 7:t=a.ops.pop(),a.trys.pop();continue;default:if(!(l=0<(l=a.trys).length&&l[l.length-1])&&(6===t[0]||2===t[0])){a=0;continue}if(3===t[0]&&(!l||t[1]>l[0]&&t[1]<l[3])){a.label=t[1];break}if(6===t[0]&&a.label<l[1]){a.label=l[1],l=t;break}if(l&&a.label<l[2]){a.label=l[2],a.ops.push(t);break}l[2]&&a.ops.pop(),a.trys.pop();continue}t=r.call(n,a)}catch(e){t=[6,e],i=0}finally{o=l=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c,s=a(n(0)),f=n(257),d=n(257),h=u(n(767)),p=u(n(318)),y=d.Typography.Text,_=(c=s.Component,o(m,c),m.prototype.componentDidMount=function(){return i(this,void 0,void 0,function(){return l(this,function(e){switch(e.label){case 0:return[4,this.fetch()];case 1:return e.sent(),[2]}})})},m.prototype.render=function(){var e=this.state.isError?s.createElement(this.WhenError,null):s.createElement(this.WhenLoading,null);return s.createElement("div",{className:"content-sync-templates"},e)},m);function m(e){var t=c.call(this,e)||this;return t.fetch=function(e){return void 0===e&&(e={}),i(t,void 0,void 0,function(){var t;return l(this,function(e){switch(e.label){case 0:e.label=1;case 1:return e.trys.push([1,3,,4]),[4,h.default.RunAction("cmb_TransactionalEmailTemplatesSync")];case 2:return e.sent(),p.default.CloseThisDialog(),[3,4];case 3:return t=e.sent(),this.setState({isError:!0,errorText:t}),console.log(t),[3,4];case 4:return[2]}})})},t.handleOkClick=function(){p.default.CloseThisDialog()},t.WhenError=function(){return s.createElement("div",null,s.createElement("div",null,s.createElement(y,{type:"danger",style:{whiteSpace:"nowrap"}},"Произошла ошибка. Попробуйте позже.")),s.createElement("div",{style:{textAlign:"center"}},s.createElement(f.Button,{type:"danger",onClick:t.handleOkClick},"Ок")))},t.WhenLoading=function(){return s.createElement("div",null,s.createElement("div",null,s.createElement("img",{src:"/_imgs/AdvFind/progress.gif"})),s.createElement("div",null,s.createElement("span",null,"Синхронизируем шаблоны...")))},t.handleOkClick=t.handleOkClick.bind(t),t.state={isError:!1,loadingText:"Синхронизируем шаблоны...",errorText:""},t}t.default=_},767:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(407)),o=(l.RunAction=function(e,t,n,r){var o=new i.default.Requests.Request;return o.bound=!!t,o.method="POST",o.payload=n,o.name=e,o.async=null==r||!!r,t&&(o.entityId=t.id,o.entityName=t.entityName),i.default.Execute(o)},l);function l(){}t.default=o}});