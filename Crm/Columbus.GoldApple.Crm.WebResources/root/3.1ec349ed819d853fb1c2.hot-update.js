webpackHotUpdate(3,{768:function(t,e,n){"use strict";var a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var l=a(n(0)),i=a(n(10));n(775);var o=r(n(769));i.render(l.createElement(o.default,null),document.getElementById("root"))},769:function(t,e,n){"use strict";var a,r=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=this&&this.__assign||function(){return(l=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},i=this&&this.__awaiter||function(t,i,o,u){return new(o=o||Promise)(function(n,e){function a(t){try{l(u.next(t))}catch(t){e(t)}}function r(t){try{l(u.throw(t))}catch(t){e(t)}}function l(t){var e;t.done?n(t.value):((e=t.value)instanceof o?e:new o(function(t){t(e)})).then(a,r)}l((u=u.apply(t,i||[])).next())})},o=this&&this.__generator||function(n,a){var r,l,i,t,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,l&&(i=2&e[0]?l.return:e[0]?l.throw||((i=l.return)&&i.call(l),0):l.next)&&!(i=i.call(l,e[1])).done)return i;switch(l=0,i&&(e=[2&e[0],i.value]),e[0]){case 0:case 1:i=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,l=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(!(i=0<(i=o.trys).length&&i[i.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){o.label=e[1];break}if(6===e[0]&&o.label<i[1]){o.label=i[1],i=e;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(e);break}i[2]&&o.ops.pop(),o.trys.pop();continue}e=a.call(n,o)}catch(t){e=[6,t],l=0}finally{r=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}},u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s,h=u(n(0)),d=n(237),p=c(n(770)),f=d.Layout.Content,m=(s=h.Component,r(y,s),y.prototype.componentDidMount=function(){return i(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,this.GetMetadata()];case 1:return t.sent(),[2]}})})},y.prototype.GetMetadata=function(){return i(this,void 0,void 0,function(){var e,n,a;return o(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(Xrm.Page.context.getClientUrl()+"/api/data/v8.0/EntityDefinitions?$select=DisplayName,SchemaName&$filter=LogicalName eq 'contact' or LogicalName eq 'cmb_config'&$expand=Attributes($select=LogicalName,DisplayName)")];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),n=e.value.map(function(t){return{key:t.SchemaName,value:null!=t.DisplayName&&null!=t.DisplayName.UserLocalizedLabel?t.DisplayName.UserLocalizedLabel.Label:null,attributes:t.Attributes.map(function(t){var e=t.LogicalName,n=null!=t.DisplayName&&null!=t.DisplayName.UserLocalizedLabel?t.DisplayName.UserLocalizedLabel.Label:null;return{key:e,value:null!=n?n:e}})}}),this.setState(l(l({},this.state),{metadata:n})),console.log(this.state),[3,4];case 3:return a=t.sent(),console.log(a),[3,4];case 4:return[2]}})})},y.prototype.handleAddTagClick=function(){var t=0<this.state.metadata.length?this.state.metadata[0]:null,e={entitySchemaName:null!=t?t.key:void 0,attributeSchemaName:void 0,mergeTagName:"",crmId:void 0,index:-1},n=this.state.tags;n.push(e),this.setState(l(l({},this.state),{tags:n}))},y.prototype.renderTags=function(){var n=this;return h.createElement("table",null,0<this.state.tags.length?h.createElement("thead",null,h.createElement("tr",null,h.createElement("td",null,"Сущность"),h.createElement("td",null,"Атрибут"),h.createElement("td",null,"Тег"))):h.createElement("thead",null),h.createElement("tbody",null,this.state.tags.map(function(t,e){return t.index=e,h.createElement(p.default,{tag:t,metadata:n.state.metadata})})))},y.prototype.render=function(){return h.createElement("div",null,h.createElement(d.Layout,null,h.createElement(f,null,h.createElement("div",null,this.renderTags()),h.createElement("div",null,h.createElement(d.Button,{onClick:this.handleAddTagClick,type:"link",size:"small"},"Добавить")),h.createElement("hr",null),h.createElement("div",null,h.createElement(d.Button,null,"Закрыть")))))},y);function y(t){var e=s.call(this,t)||this;return e.handleAddTagClick=e.handleAddTagClick.bind(e),e.state={metadata:[],tags:[]},e}e.default=m},770:function(t,e,n){"use strict";var a,r=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=this&&this.__assign||function(){return(l=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o,u=i(n(0)),c=n(237),s=c.Select.Option,h=(o=u.Component,r(d,o),d.prototype.onChangeEntityMetadata=function(t){console.log("zxc"),this.setState(l(l({},this.state),{entitySchemaName:t,attributeSchemaName:void 0}))},d.prototype.currentEntityMetadataAttributes=function(){var e=this,t=this.props.metadata.find(function(t){return t.key==e.state.entitySchemaName});return null!=t?t.attributes:[]},d.prototype.render=function(){return console.log(this.state),u.createElement("tr",null,u.createElement("td",null,u.createElement(c.Select,{showSearch:!0,style:{width:200},placeholder:"Выберите сущность",optionFilterProp:"children",onChange:this.onChangeEntityMetadata,defaultValue:this.state.entitySchemaName},this.props.metadata.map(function(t){return u.createElement(s,{value:t.key},t.value)}))),u.createElement("td",null,u.createElement(c.Select,{showSearch:!0,style:{width:200},placeholder:"Выберите поле",optionFilterProp:"children",defaultValue:this.state.attributeSchemaName},this.currentEntityMetadataAttributes().map(function(t){return u.createElement(s,{value:t.key},t.value)}))),u.createElement("td",null,u.createElement(c.Input,{placeholder:"Тег"})),u.createElement("td",null,u.createElement(c.Button,{icon:"save"})),u.createElement("td",null,u.createElement(c.Button,{type:"danger",icon:"delete"})))},d);function d(t){var e=o.call(this,t)||this;return e.onChangeEntityMetadata=e.onChangeEntityMetadata.bind(e),e.state={attributeSchemaName:t.tag.attributeSchemaName,crmId:t.tag.crmId,entitySchemaName:t.tag.entitySchemaName,index:t.tag.index,mergeTagName:t.tag.mergeTagName},e}e.default=h}});