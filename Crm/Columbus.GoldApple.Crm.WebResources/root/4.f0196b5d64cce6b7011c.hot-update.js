webpackHotUpdate(4,{318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.OpenDialog=function(e,t,n,r){var o=new Xrm.DialogOptions;o.width=t,o.height=n,Xrm.Internal.openDialog(e,o,null,null,r||function(){})},e.OpenWebResourceInDialog=function(t,n,r,o){e.OpenDialog(Xrm.Page.context.getClientUrl()+"/webresources/"+t+"?data="+n,r.width,r.height,o)},e.SetEmptyCrossCallback=function(){window.onunload=function(){Mscrm.Utilities.setReturnValue(null)}},e.CloseThisDialog=function(e){Mscrm.Utilities.setReturnValue(e),window.closeWindow(!0)},e}();t.default=r},433:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(0)),l=r(n(10));n(775);var u=o(n(438));l.render(i.createElement(u.default,null),document.getElementById("root"))},438:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function l(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,u)}a((r=r.apply(e,t||[])).next())}))},l=this&&this.__generator||function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=u(n(0)),s=n(257),f=n(257),d=a(n(767)),h=a(n(318)),p=f.Typography.Text,y=function(e){function t(t){var n=e.call(this,t)||this;return n.fetch=function(e){return void 0===e&&(e={}),i(n,void 0,void 0,(function(){var e;return l(this,(function(t){switch(t.label){case 0:t.label=1;case 1:return t.trys.push([1,3,,4]),[4,d.default.RunAction("cmb_TransactionalEmailTemplatesSync")];case 2:return t.sent(),h.default.CloseThisDialog(),[3,4];case 3:return e=t.sent(),this.setState({isError:!0,errorText:e}),console.log(e),[3,4];case 4:return[2]}}))}))},n.handleOkClick=function(){h.default.CloseThisDialog()},n.WhenError=function(){return c.createElement("div",null,c.createElement("div",null,c.createElement(p,{type:"danger",style:{whiteSpace:"nowrap"}},"Произошла ошибка. Попробуйте позже.")),c.createElement("div",{style:{textAlign:"center"}},c.createElement(s.Button,{type:"danger",onClick:n.handleOkClick},"Ок")))},n.WhenLoading=function(){return c.createElement("div",null,c.createElement("div",null,c.createElement("img",{src:"/_imgs/AdvFind/progress.gif"})),c.createElement("div",null,c.createElement("span",null,"Синхронизируем шаблоны...")))},n.handleOkClick=n.handleOkClick.bind(n),n.state={isError:!1,loadingText:"Синхронизируем шаблоны...",errorText:""},n}return o(t,e),t.prototype.componentDidMount=function(){return i(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,this.fetch()];case 1:return e.sent(),[2]}}))}))},t.prototype.render=function(){var e=this.state.isError?c.createElement(this.WhenError,null):c.createElement(this.WhenLoading,null);return c.createElement("div",{className:"content-sync-templates"},e)},t}(c.Component);t.default=y},767:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(407)),i=function(){function e(){}return e.RunAction=function(e,t,n,r){var i=new o.default.Requests.Request;return i.bound=!!t,i.method="POST",i.payload=n,i.name=e,i.async=null==r||!!r,t&&(i.entityId=t.id,i.entityName=t.entityName),o.default.Execute(i)},e}();t.default=i}});
//# sourceMappingURL=4.f0196b5d64cce6b7011c.hot-update.js.map