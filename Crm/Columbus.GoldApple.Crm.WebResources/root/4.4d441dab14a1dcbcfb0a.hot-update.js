webpackHotUpdate(4,{321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.OpenDialog=function(e,t,n,r){var i=new Xrm.DialogOptions;i.width=t,i.height=n,Xrm.Internal.openDialog(e,i,null,null,r||function(){})},e.OpenWebResourceInDialog=function(t,n,r,i){e.OpenDialog(Xrm.Page.context.getClientUrl()+"/webresources/"+t+"?data="+n,r.width,r.height,i)},e.SetEmptyCrossCallback=function(){window.onunload=function(){Mscrm.Utilities.setReturnValue(null)}},e.CloseThisDialog=function(e){Mscrm.Utilities.setReturnValue(e),window.closeWindow(!0)},e}();t.DialogUtils=r},438:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),l=r(n(10));n(793);var a=i(n(443));l.render(o.createElement(a.default,null),document.getElementById("root"))},443:function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function l(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}u((r=r.apply(e,t||[])).next())}))},l=this&&this.__generator||function(e,t){var n,r,i,o,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(i=(i=l.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){l.label=o[1];break}if(6===o[0]&&l.label<i[1]){l.label=i[1],i=o;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(o);break}i[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(0)),c=n(239),s=n(239),f=n(772),d=n(321),h=s.Typography.Text,p=function(e){function t(t){var n=e.call(this,t)||this;return n.fetch=function(e){return void 0===e&&(e={}),o(n,void 0,void 0,(function(){var e;return l(this,(function(t){switch(t.label){case 0:t.label=1;case 1:return t.trys.push([1,3,,4]),[4,f.WebApiUtils.RunAction("cmb_TransactionalEmailTemplatesSync")];case 2:return t.sent(),d.DialogUtils.CloseThisDialog(),[3,4];case 3:return e=t.sent(),this.setState({isError:!0,errorText:e}),console.log(e),[3,4];case 4:return[2]}}))}))},n.handleOkClick=function(){d.DialogUtils.CloseThisDialog()},n.WhenError=function(){return u.createElement("div",null,u.createElement("div",null,u.createElement(h,{type:"danger",style:{whiteSpace:"nowrap"}},"Произошла ошибка. Попробуйте позже.")),u.createElement("div",{style:{textAlign:"center"}},u.createElement(c.Button,{type:"danger",onClick:n.handleOkClick},"Ок")))},n.WhenLoading=function(){return u.createElement("div",null,u.createElement("div",null,u.createElement("img",{src:"/_imgs/AdvFind/progress.gif"})),u.createElement("div",null,u.createElement("span",null,"Синхронизируем шаблоны...")))},n.handleOkClick=n.handleOkClick.bind(n),n.state={isError:!1,loadingText:"Синхронизируем шаблоны...",errorText:""},n}return i(t,e),t.prototype.componentDidMount=function(){return o(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,this.fetch()];case 1:return e.sent(),[2]}}))}))},t.prototype.render=function(){var e=this.state.isError?u.createElement(this.WhenError,null):u.createElement(this.WhenLoading,null);return u.createElement("div",{className:"content-sync-templates"},e)},t}(u.Component);t.default=p},772:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(410)),o=function(){function e(){}return e.RunAction=function(e,t,n,r){var o=new i.default.Requests.Request;return o.bound=!!t,o.method="POST",o.payload=n,o.name=e,o.async=null==r||!!r,t&&(o.entityId=t.id,o.entityName=t.entityName),i.default.Execute(o)},e}();t.WebApiUtils=o}});
//# sourceMappingURL=4.4d441dab14a1dcbcfb0a.hot-update.js.map