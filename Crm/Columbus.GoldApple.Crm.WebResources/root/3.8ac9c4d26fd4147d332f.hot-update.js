webpackHotUpdate(3,{768:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(0)),i=r(n(10));n(775);var l=a(n(769));i.render(o.createElement(l.default,null),document.getElementById("root"))},769:function(t,e,n){"use strict";var r,a=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},i=this&&this.__awaiter||function(t,i,l,u){return new(l=l||Promise)(function(n,e){function r(t){try{o(u.next(t))}catch(t){e(t)}}function a(t){try{o(u.throw(t))}catch(t){e(t)}}function o(t){var e;t.done?n(t.value):((e=t.value)instanceof l?e:new l(function(t){t(e)})).then(r,a)}o((u=u.apply(t,i||[])).next())})},l=this&&this.__generator||function(n,r){var a,o,i,t,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,o&&(i=2&e[0]?o.return:e[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,e[1])).done)return i;switch(o=0,i&&(e=[2&e[0],i.value]),e[0]){case 0:case 1:i=e;break;case 4:return l.label++,{value:e[1],done:!1};case 5:l.label++,o=e[1],e=[0];continue;case 7:e=l.ops.pop(),l.trys.pop();continue;default:if(!(i=0<(i=l.trys).length&&i[i.length-1])&&(6===e[0]||2===e[0])){l=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){l.label=e[1];break}if(6===e[0]&&l.label<i[1]){l.label=i[1],i=e;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(e);break}i[2]&&l.ops.pop(),l.trys.pop();continue}e=r.call(n,l)}catch(t){e=[6,t],o=0}finally{a=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}},u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s,f=u(n(0)),p=n(257),h=c(n(770)),d=p.Layout.Header,y=p.Layout.Footer,m=p.Layout.Content,_=(s=f.Component,a(v,s),v.prototype.componentDidMount=function(){return i(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,this.GetMetadata()];case 1:return t.sent(),[2]}})})},v.prototype.GetMetadata=function(){return i(this,void 0,void 0,function(){var e,n,r;return l(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(Xrm.Page.context.getClientUrl()+"/api/data/v8.0/EntityDefinitions?$select=DisplayName,SchemaName&$filter=LogicalName eq 'contact' or LogicalName eq 'lead'&$expand=Attributes($select=LogicalName,DisplayName)")];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),n=e.value.map(function(t){return{key:t.SchemaName,value:null!=t.DisplayName&&null!=t.DisplayName.UserLocalizedLabel?t.DisplayName.UserLocalizedLabel.Label:null,attributes:t.Attributes.map(function(t){return{key:t.LogicalName,value:null!=t.DisplayName&&null!=t.DisplayName.UserLocalizedLabel?t.DisplayName.UserLocalizedLabel.Label:null}})}}),this.setState(o(o({},this.state),{metadata:n})),console.log(this.state),[3,4];case 3:return r=t.sent(),console.log(r),[3,4];case 4:return[2]}})})},v.prototype.handleAddTagClick=function(){console.log("Click!");var t=this.state.tags;t.push({entitySchemaName:"contact",attributeSchemaName:"firstname",mergeTagName:""}),this.setState(o(o({},this.state),{tags:t}))},v.prototype.renderTags=function(){return console.log("render tag"),this.state.tags.map(function(t){return f.createElement(h.default,null)})},v.prototype.render=function(){return f.createElement("div",null,f.createElement(p.Layout,null,f.createElement(d,null,"Header"),f.createElement(m,null,f.createElement("div",null,this.renderTags()),f.createElement("div",null,f.createElement(p.Button,{onClick:this.handleAddTagClick,type:"link",size:"small"},"Добавить"))),f.createElement(y,null,f.createElement(p.Button,{type:"primary"},"Сохранить"),f.createElement(p.Button,null,"Закрыть"))))},v);function v(t){var e=s.call(this,t)||this;return e.handleAddTagClick=e.handleAddTagClick.bind(e),e.state={metadata:[],tags:[]},e}e.default=_},770:function(t,e,n){"use strict";var r,a=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i,l=o(n(0)),u=(i=l.Component,a(c,i),c.prototype.render=function(){return l.createElement("div",null,"TAG!")},c);function c(t){var e=i.call(this,t)||this;return e.state={},e}e.default=u}});