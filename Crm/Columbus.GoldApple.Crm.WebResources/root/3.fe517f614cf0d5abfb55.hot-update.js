webpackHotUpdate(3,{768:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(0)),i=r(n(10));n(774);var l=a(n(769));i.render(o.createElement(l.default,null),document.getElementById("root"))},769:function(t,e,n){"use strict";var r,a=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(a,o){function i(t){try{u(r.next(t))}catch(t){o(t)}}function l(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,l)}u((r=r.apply(t,e||[])).next())}))},l=this&&this.__generator||function(t,e){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=u(n(0)),f=n(257),p=c(n(777)),h=f.Layout.Header,d=f.Layout.Footer,y=f.Layout.Content,m=function(t){function e(e){var n=t.call(this,e)||this;return n.handleAddTagClick=n.handleAddTagClick.bind(n),n.state={metadata:[],tags:[]},n}return a(e,t),e.prototype.componentDidMount=function(){return i(this,void 0,void 0,(function(){return l(this,(function(t){switch(t.label){case 0:return[4,this.GetMetadata()];case 1:return t.sent(),[2]}}))}))},e.prototype.GetMetadata=function(){return i(this,void 0,void 0,(function(){var t,e,n;return l(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch(Xrm.Page.context.getClientUrl()+"/api/data/v8.0/EntityDefinitions?$select=DisplayName,SchemaName&$filter=LogicalName eq 'contact' or LogicalName eq 'lead'&$expand=Attributes($select=LogicalName,DisplayName)")];case 1:return[4,r.sent().json()];case 2:return t=r.sent(),e=t.value.map((function(t){return{key:t.SchemaName,value:null!=t.DisplayName&&null!=t.DisplayName.UserLocalizedLabel?t.DisplayName.UserLocalizedLabel.Label:null,attributes:t.Attributes.map((function(t){return{key:t.LogicalName,value:null!=t.DisplayName&&null!=t.DisplayName.UserLocalizedLabel?t.DisplayName.UserLocalizedLabel.Label:null}}))}})),this.setState(o(o({},this.state),{metadata:e})),console.log(this.state),[3,4];case 3:return n=r.sent(),console.log(n),[3,4];case 4:return[2]}}))}))},e.prototype.handleAddTagClick=function(){this.state.tags.push({entitySchemaName:"contact",attributeSchemaName:"firstname",mergeTagName:""})},e.prototype.renderTags=function(){return this.state.tags.map((function(t){return s.createElement(p.default,null)}))},e.prototype.render=function(){return s.createElement("div",null,s.createElement(f.Layout,null,s.createElement(h,null,"Header"),s.createElement(y,null,s.createElement("div",null,this.renderTags),s.createElement("div",null,s.createElement(f.Button,{type:"link",size:"small"},"Добавить"))),s.createElement(d,null,s.createElement(f.Button,{type:"primary"},"Сохранить"),s.createElement(f.Button,null,"Закрыть"))))},e}(s.Component);e.default=m},777:function(t,e,n){"use strict";var r,a=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(0)),l=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return a(e,t),e.prototype.render=function(){return i.createElement("div",null,"TAG!")},e}(i.Component);e.default=l}});
//# sourceMappingURL=3.fe517f614cf0d5abfb55.hot-update.js.map