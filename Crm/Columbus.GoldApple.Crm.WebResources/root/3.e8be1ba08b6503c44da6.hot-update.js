webpackHotUpdate(3,{773:function(t,e,n){"use strict";var a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=a(n(0)),o=a(n(10));n(792);var l=r(n(774));o.render(i.createElement(l.default,null),document.getElementById("root"))},774:function(t,e,n){"use strict";var a,r=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},o=this&&this.__awaiter||function(t,e,n,a){return new(n||(n=Promise))((function(r,i){function o(t){try{u(a.next(t))}catch(t){i(t)}}function l(t){try{u(a.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,l)}u((a=a.apply(t,e||[])).next())}))},l=this&&this.__generator||function(t,e){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(t){i=[6,t],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=u(n(0)),h=n(239),f=c(n(775)),p=h.Layout.Content,d=function(t){function e(e){var n=t.call(this,e)||this;return n.handleAddTagClick=n.handleAddTagClick.bind(n),n.state={metadata:[],tags:[],templateId:""},n}return r(e,t),e.prototype.componentDidMount=function(){return o(this,void 0,void 0,(function(){return l(this,(function(t){switch(t.label){case 0:return[4,this.GetMetadata()];case 1:return t.sent(),[2]}}))}))},e.prototype.GetMetadata=function(){return o(this,void 0,void 0,(function(){var t,e,n;return l(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),[4,fetch(Xrm.Page.context.getClientUrl()+"/api/data/v8.0/EntityDefinitions?$select=DisplayName,SchemaName&$filter=LogicalName eq 'contact' or LogicalName eq 'cmb_config'&$expand=Attributes($select=LogicalName,DisplayName)")];case 1:return[4,a.sent().json()];case 2:return t=a.sent(),e=t.value.map((function(t){return{key:t.SchemaName,value:null!=t.DisplayName&&null!=t.DisplayName.UserLocalizedLabel?t.DisplayName.UserLocalizedLabel.Label:null,attributes:t.Attributes.map((function(t){var e=t.LogicalName,n=null!=t.DisplayName&&null!=t.DisplayName.UserLocalizedLabel?t.DisplayName.UserLocalizedLabel.Label:null;return{key:e,value:null!=n?n:e}}))}})),this.setState(i(i({},this.state),{metadata:e})),console.log(this.state),[3,4];case 3:return n=a.sent(),console.log(n),[3,4];case 4:return[2]}}))}))},e.prototype.handleAddTagClick=function(){var t=this.state.metadata.length>0?this.state.metadata[0]:null,e={entitySchemaName:null!=t?t.key:void 0,attributeSchemaName:void 0,mergeTagName:"",crmId:void 0,index:-1,templateId:this.state.templateId},n=this.state.tags;n.push(e),this.setState(i(i({},this.state),{tags:n}))},e.prototype.renderTags=function(){var t=this;return s.createElement("table",null,this.state.tags.length>0?s.createElement("thead",null,s.createElement("tr",null,s.createElement("td",null,"Сущность"),s.createElement("td",null,"Атрибут"),s.createElement("td",null,"Тег"))):s.createElement("thead",null),s.createElement("tbody",null,this.state.tags.map((function(e,n){return e.index=n,s.createElement(f.default,{tag:e,metadata:t.state.metadata})}))))},e.prototype.render=function(){return s.createElement("div",null,s.createElement(h.Layout,null,s.createElement(p,null,s.createElement("div",null,this.renderTags()),s.createElement("div",null,s.createElement(h.Button,{onClick:this.handleAddTagClick,type:"link",size:"small"},"Добавить")),s.createElement("hr",null),s.createElement("div",null,s.createElement(h.Button,null,"Закрыть")))))},e}(s.Component);e.default=d},775:function(t,e,n){"use strict";var a,r=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},o=this&&this.__awaiter||function(t,e,n,a){return new(n||(n=Promise))((function(r,i){function o(t){try{u(a.next(t))}catch(t){i(t)}}function l(t){try{u(a.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,l)}u((a=a.apply(t,e||[])).next())}))},l=this&&this.__generator||function(t,e){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(t){i=[6,t],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=u(n(0)),h=n(239),f=c(n(776)),p=h.Select.Option,d=function(t){function e(e){var n=t.call(this,e)||this;return n.onChangeEntityMetadata=n.onChangeEntityMetadata.bind(n),n.onChangeAttributeMetadata=n.onChangeAttributeMetadata.bind(n),n.onChangeTag=n.onChangeTag.bind(n),n.onDelete=n.onDelete.bind(n),n.onSave=n.onSave.bind(n),n.state={attributeSchemaName:e.tag.attributeSchemaName,crmId:e.tag.crmId,entitySchemaName:e.tag.entitySchemaName,index:e.tag.index,mergeTagName:e.tag.mergeTagName,templateId:e.tag.templateId},n}return r(e,t),e.prototype.onChangeEntityMetadata=function(t){this.setState(i(i({},this.state),{entitySchemaName:t,attributeSchemaName:void 0,mergeTagName:""}))},e.prototype.onChangeAttributeMetadata=function(t){this.setState(i(i({},this.state),{attributeSchemaName:t}))},e.prototype.onChangeTag=function(t){this.setState(i(i({},this.state),{mergeTagName:t.target.value}))},e.prototype.onDelete=function(){},e.prototype.onSave=function(){return o(this,void 0,void 0,(function(){var t,e,n,a;return l(this,(function(r){switch(r.label){case 0:t={cmb_attributepath:this.state.attributeSchemaName,cmb_entityname:this.state.entitySchemaName,cmb_name:this.state.mergeTagName,"cmb_emailtemplateid@odata.bind":"/cmb_emailtemplates(8C58C913-B948-EA11-A242-005056B401F3)"},e=new f.default,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,e.create(t,"cmb_mergetags")];case 2:return n=r.sent(),console.log(n),[3,4];case 3:return a=r.sent(),console.log(a),[3,4];case 4:return this.setState(i(i({},this.state),{crmId:n})),[2]}}))}))},e.prototype.currentEntityMetadataAttributes=function(){var t=this,e=this.props.metadata.find((function(e){return e.key==t.state.entitySchemaName}));return null!=e?e.attributes:[]},e.prototype.render=function(){return console.log(this.state),s.createElement("tr",null,s.createElement("td",null,s.createElement(h.Select,{showSearch:!0,style:{width:200},placeholder:"Выберите сущность",optionFilterProp:"children",onChange:this.onChangeEntityMetadata,defaultValue:this.state.entitySchemaName},this.props.metadata.map((function(t){return s.createElement(p,{value:t.key},t.value)})))),s.createElement("td",null,s.createElement(h.Select,{showSearch:!0,style:{width:200},placeholder:"Выберите поле",optionFilterProp:"children",onChange:this.onChangeAttributeMetadata,defaultValue:this.state.attributeSchemaName},this.currentEntityMetadataAttributes().map((function(t){return s.createElement(p,{value:t.key},t.value)})))),s.createElement("td",null,s.createElement(h.Input,{placeholder:"Тег",onChange:this.onChangeTag})),s.createElement("td",null,s.createElement(h.Button,{icon:"save",onClick:this.onSave})),s.createElement("td",null,s.createElement(h.Button,{type:"danger",icon:"delete"})))},e}(s.Component);e.default=d}});
//# sourceMappingURL=3.e8be1ba08b6503c44da6.hot-update.js.map