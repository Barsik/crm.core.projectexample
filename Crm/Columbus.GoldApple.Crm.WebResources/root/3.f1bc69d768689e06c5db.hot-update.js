webpackHotUpdate(3,{768:function(t,e,n){"use strict";var a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=a(n(0)),o=a(n(10));n(775);var l=r(n(769));o.render(i.createElement(l.default,null),document.getElementById("root"))},769:function(t,e,n){"use strict";var a,r=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},o=this&&this.__awaiter||function(t,o,l,u){return new(l=l||Promise)(function(n,e){function a(t){try{i(u.next(t))}catch(t){e(t)}}function r(t){try{i(u.throw(t))}catch(t){e(t)}}function i(t){var e;t.done?n(t.value):((e=t.value)instanceof l?e:new l(function(t){t(e)})).then(a,r)}i((u=u.apply(t,o||[])).next())})},l=this&&this.__generator||function(n,a){var r,i,o,t,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return l.label++,{value:e[1],done:!1};case 5:l.label++,i=e[1],e=[0];continue;case 7:e=l.ops.pop(),l.trys.pop();continue;default:if(!(o=0<(o=l.trys).length&&o[o.length-1])&&(6===e[0]||2===e[0])){l=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){l.label=e[1];break}if(6===e[0]&&l.label<o[1]){l.label=o[1],o=e;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(e);break}o[2]&&l.ops.pop(),l.trys.pop();continue}e=a.call(n,l)}catch(t){e=[6,t],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}},u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s,p=u(n(0)),h=n(237),f=c(n(770)),d=h.Layout.Header,m=h.Layout.Footer,y=h.Layout.Content,v=(s=p.Component,r(_,s),_.prototype.componentDidMount=function(){return o(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,this.GetMetadata()];case 1:return t.sent(),[2]}})})},_.prototype.GetMetadata=function(){return o(this,void 0,void 0,function(){var e,n,a;return l(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(Xrm.Page.context.getClientUrl()+"/api/data/v8.0/EntityDefinitions?$select=DisplayName,SchemaName&$filter=LogicalName eq 'contact' or LogicalName eq 'lead'&$expand=Attributes($select=LogicalName,DisplayName)")];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),n=e.value.map(function(t){return{key:t.SchemaName,value:null!=t.DisplayName&&null!=t.DisplayName.UserLocalizedLabel?t.DisplayName.UserLocalizedLabel.Label:null,attributes:t.Attributes.map(function(t){return{key:t.LogicalName,value:null!=t.DisplayName&&null!=t.DisplayName.UserLocalizedLabel?t.DisplayName.UserLocalizedLabel.Label:null}})}}),this.setState(i(i({},this.state),{metadata:n})),console.log(this.state),[3,4];case 3:return a=t.sent(),console.log(a),[3,4];case 4:return[2]}})})},_.prototype.handleAddTagClick=function(){var t=0<this.state.metadata.length?this.state.metadata[0]:null,e={entitySchemaName:null!=t?t.key:void 0,attributeSchemaName:null!=t&&0<t.attributes.length?t.attributes[0].key:void 0,mergeTagName:"",crmId:void 0,index:-1},n=this.state.tags;n.push(e),this.setState(i(i({},this.state),{tags:n}))},_.prototype.renderTags=function(){var n=this;return this.state.tags.map(function(t,e){return t.index=e,p.createElement(f.default,{tag:t,metadata:n.state.metadata})})},_.prototype.render=function(){return p.createElement("div",null,p.createElement(h.Layout,null,p.createElement(d,null,"Header"),p.createElement(y,null,p.createElement("div",null,this.renderTags()),p.createElement("div",null,p.createElement(h.Button,{onClick:this.handleAddTagClick,type:"link",size:"small"},"Добавить"))),p.createElement(m,null,p.createElement(h.Button,{type:"primary"},"Сохранить"),p.createElement(h.Button,null,"Закрыть"))))},_);function _(t){var e=s.call(this,t)||this;return e.handleAddTagClick=e.handleAddTagClick.bind(e),e.state={metadata:[],tags:[]},e}e.default=v},770:function(t,e,n){"use strict";var a,r=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o,l=i(n(0)),u=n(237),c=u.Select.Option,s=(o=l.Component,r(p,o),p.prototype.onChangeEntityMetadata=function(t){},p.prototype.currentEntityMetadataAttributes=function(){var e=this,t=this.props.metadata.find(function(t){return t.key==e.state.entitySchemaName});return null!=t?t.attributes:[]},p.prototype.render=function(){return l.createElement("div",null,l.createElement(u.Row,null,l.createElement(u.Col,{span:8},l.createElement(u.Select,{showSearch:!0,style:{width:200},placeholder:"Выберите сущность",optionFilterProp:"children",defaultValue:this.state.entitySchemaName},this.props.metadata.map(function(t){return l.createElement(c,{value:t.key},t.value)}))),l.createElement(u.Col,{span:8},l.createElement(u.Select,{showSearch:!0,style:{width:200},placeholder:"Выберите поле",optionFilterProp:"children",defaultValue:this.state.attributeSchemaName},this.currentEntityMetadataAttributes().map(function(t){return l.createElement(c,{value:t.key},t.value)}))),l.createElement(u.Col,{span:8})))},p);function p(t){var e=o.call(this,t)||this;return e.state={attributeSchemaName:t.tag.attributeSchemaName,crmId:t.tag.crmId,entitySchemaName:t.tag.entitySchemaName,index:t.tag.index,mergeTagName:t.tag.mergeTagName},e}e.default=s}});