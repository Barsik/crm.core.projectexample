webpackHotUpdate(3,{773:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),l=r(n(10));n(791);var i=a(n(774));l.render(o.createElement(i.default,null),document.getElementById("root"))},774:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{u(r.next(e))}catch(e){o(e)}}function i(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}u((r=r.apply(e,t||[])).next())}))},l=this&&this.__generator||function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(0)),c=n(260),s=c.Layout.Header,f=c.Layout.Footer,p=c.Layout.Content,y=function(e){function t(t){var n=e.call(this,t)||this;return n.state={metadata:[]},n}return a(t,e),t.prototype.componentDidMount=function(){return o(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,this.GetMetadata()];case 1:return e.sent(),[2]}}))}))},t.prototype.GetMetadata=function(){return o(this,void 0,void 0,(function(){var e,t,n;return l(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch(Xrm.Page.context.getClientUrl()+"/api/data/v8.0/EntityDefinitions?$select=DisplayName,SchemaName&$filter=LogicalName eq 'contact' or LogicalName eq 'lead'&$expand=Attributes($select=LogicalName,DisplayName)")];case 1:return[4,r.sent().json()];case 2:return e=r.sent(),t=e.value.map((function(e){return{key:e.SchemaName,value:null!=e.DisplayName&&null!=e.DisplayName.UserLocalizedLabel?e.DisplayName.UserLocalizedLabel.Label:null,attributes:e.Attributes.map((function(e){return{key:e.LogicalName,value:null!=e.DisplayName&&null!=e.DisplayName.UserLocalizedLabel?e.DisplayName.UserLocalizedLabel.Label:null}}))}})),this.setState({metadata:t}),console.log(this.state),[3,4];case 3:return n=r.sent(),console.log(n),[3,4];case 4:return[2]}}))}))},t.prototype.render=function(){return u.createElement("div",null,u.createElement(c.Layout,null,u.createElement(s,null,"Header"),u.createElement(p,null,u.createElement("div",null,"Content"),u.createElement("div",null,u.createElement(c.Button,{type:"link",size:"small"},"добавить"))),u.createElement(f,null,u.createElement(c.Button,{type:"primary"},"Сохранить"),u.createElement(c.Button,null,"Закрыть"))))},t}(u.Component);t.default=y}});
//# sourceMappingURL=3.d1832107390b4489d94f.hot-update.js.map