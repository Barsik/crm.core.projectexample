webpackHotUpdate(3,{773:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(0)),l=a(n(10));n(793);var o=r(n(774));l.render(i.createElement(o.default,null),document.getElementById("root"))},774:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function l(e){try{u(a.next(e))}catch(e){i(e)}}function o(e){try{u(a.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}u((a=a.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,a,r,i,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,a=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){l.label=i[1];break}if(6===i[0]&&l.label<r[1]){l.label=r[1],r=i;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(i);break}r[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=u(n(0)),m=n(239),d=c(n(775)),h=n(788),f=n(796),p=c(n(776)),b=m.Layout.Content,g=function(e){function t(t){var n,a=e.call(this,t)||this;return a.componentDidMount=function(){return l(a,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.GetMetadata()];case 1:return e.sent(),[4,this.GetTags()];case 2:return e.sent(),[2]}}))}))},a.GetTags=function(){return l(a,void 0,void 0,(function(){var e,t,n=this;return o(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,(new p.default).retrieveMultiple("cmb_mergetags",void 0,"_cmb_emailtemplateid_value eq "+this.state.templateId)];case 1:return null!=(e=a.sent())&&e.value.map((function(e){return{entitySchemaName:e.cmb_entityname,attributeSchemaName:e.cmb_attributepath,mergeTagName:e.cmb_name,crmId:e.cmb_mergetagid,index:-1,templateId:n.state.templateId}})),[3,3];case 2:return t=a.sent(),f.CommonUtils.ShowNotification("error",t,"Ошибка"),console.log(t),[3,3];case 3:return[2]}}))}))},a.GetMetadata=function(){return l(a,void 0,void 0,(function(){var e,t,n;return o(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),[4,fetch(Xrm.Page.context.getClientUrl()+"/api/data/v8.0/EntityDefinitions?$select=DisplayName,SchemaName&$filter=LogicalName eq 'contact' or LogicalName eq 'cmb_config'&$expand=Attributes($select=LogicalName,DisplayName)")];case 1:return[4,a.sent().json()];case 2:return e=a.sent(),t=e.value.map((function(e){return{key:e.SchemaName,value:null!=e.DisplayName&&null!=e.DisplayName.UserLocalizedLabel?e.DisplayName.UserLocalizedLabel.Label:null,attributes:e.Attributes.map((function(e){var t=e.LogicalName,n=null!=e.DisplayName&&null!=e.DisplayName.UserLocalizedLabel?e.DisplayName.UserLocalizedLabel.Label:null;return{key:t,value:null!=n?n:t}}))}})),this.setState(i(i({},this.state),{metadata:t})),[3,4];case 3:return n=a.sent(),f.CommonUtils.ShowNotification("error",n,"Ошибка"),console.log(n),[3,4];case 4:return[2]}}))}))},a.handleAddTagClick=function(){var e=a.state.metadata.length>0?a.state.metadata[0]:null,t={entitySchemaName:null!=e?e.key:void 0,attributeSchemaName:void 0,mergeTagName:"",crmId:void 0,index:-1,templateId:a.state.templateId},n=a.state.tags;n.push(t),a.setState(i(i({},a.state),{tags:n}))},a.renderTags=function(){return s.createElement("table",null,a.state.tags.length>0?s.createElement("thead",null,s.createElement("tr",null,s.createElement("td",null,"Сущность"),s.createElement("td",null,"Атрибут"),s.createElement("td",null,"Тег"))):s.createElement("thead",null),s.createElement("tbody",null,a.state.tags.map((function(e,t){return e.index=t,s.createElement(d.default,{tag:e,metadata:a.state.metadata})}))))},a.render=function(){return s.createElement("div",null,s.createElement(m.Layout,null,s.createElement(b,null,s.createElement("div",null,s.createElement("h2",null,"Конструктор тегов слияния")),s.createElement("div",null,a.renderTags()),s.createElement("div",null,s.createElement(m.Button,{onClick:a.handleAddTagClick,type:"link",size:"small"},"Добавить")),s.createElement("hr",null),s.createElement("div",null,s.createElement(m.Button,null,"Закрыть")))))},a.handleAddTagClick=a.handleAddTagClick.bind(a),a.state={metadata:[],tags:[],templateId:f.CommonUtils.GetGuid((n=h.WebResourceUtils.GetParameter("data"),null!=n?n:""))},a}return r(t,e),t}(s.Component);t.default=g},775:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function l(e){try{u(a.next(e))}catch(e){i(e)}}function o(e){try{u(a.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}u((a=a.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,a,r,i,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,a=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){l.label=i[1];break}if(6===i[0]&&l.label<r[1]){l.label=r[1],r=i;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(i);break}r[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=u(n(0)),m=n(239),d=c(n(776)),h=n(796),f=m.Select.Option,p=function(e){function t(t){var n=e.call(this,t)||this;return n.onChangeEntityMetadata=function(e){n.setState(i(i({},n.state),{entitySchemaName:e,attributeSchemaName:void 0,mergeTagName:""}))},n.onChangeAttributeMetadata=function(e){n.setState(i(i({},n.state),{attributeSchemaName:e}))},n.onChangeTag=function(e){n.setState(i(i({},n.state),{mergeTagName:e.target.value}))},n.onDelete=function(){return l(n,void 0,void 0,(function(){var e,t;return o(this,(function(n){switch(n.label){case 0:return null!=this.state.crmId?[3,1]:(this.setState(i(i({},this.state),{isDeleted:!0})),[3,5]);case 1:e=new d.default,n.label=2;case 2:return n.trys.push([2,4,,5]),[4,e.deleteRecord(this.state.crmId,"cmb_mergetags")];case 3:return n.sent(),this.setState(i(i({},this.state),{isDeleted:!0})),[3,5];case 4:return t=n.sent(),h.CommonUtils.ShowNotification("error",t,"Ошибка"),console.log(t),[3,5];case 5:return[2]}}))}))},n.onSave=function(){return l(n,void 0,void 0,(function(){var e,t,n,a;return o(this,(function(r){switch(r.label){case 0:e={cmb_attributepath:this.state.attributeSchemaName,cmb_entityname:this.state.entitySchemaName,cmb_name:this.state.mergeTagName,"cmb_emailtemplateid@odata.bind":"/cmb_emailtemplates("+this.state.templateId+")"},t=new d.default,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t.create(e,"cmb_mergetags")];case 2:return n=r.sent(),this.setState(i(i({},this.state),{crmId:n})),[3,4];case 3:return a=r.sent(),h.CommonUtils.ShowNotification("error",a,"Ошибка"),console.log(a),[3,4];case 4:return[2]}}))}))},n.currentEntityMetadataAttributes=function(){var e=n.props.metadata.find((function(e){return e.key==n.state.entitySchemaName}));return null!=e?e.attributes:[]},n.render=function(){return s.createElement("tr",{hidden:n.state.isDeleted},s.createElement("td",null,s.createElement(m.Select,{showSearch:!0,style:{width:200},placeholder:"Выберите сущность",optionFilterProp:"children",onChange:n.onChangeEntityMetadata,defaultValue:n.state.entitySchemaName,disabled:null!=n.state.crmId},n.props.metadata.map((function(e){return s.createElement(f,{value:e.key},e.value)})))),s.createElement("td",null,s.createElement(m.Select,{showSearch:!0,style:{width:200},placeholder:"Выберите поле",optionFilterProp:"children",onChange:n.onChangeAttributeMetadata,defaultValue:n.state.attributeSchemaName,disabled:null!=n.state.crmId},n.currentEntityMetadataAttributes().map((function(e){return s.createElement(f,{value:e.key},e.value)})))),s.createElement("td",null,s.createElement(m.Input,{placeholder:"Тег",onChange:n.onChangeTag,value:n.state.mergeTagName,disabled:null!=n.state.crmId})),s.createElement("td",null,s.createElement(m.Button,{icon:"save",onClick:n.onSave,hidden:null!=n.state.crmId})),s.createElement("td",null,s.createElement(m.Button,{type:"danger",icon:"delete",onClick:n.onDelete})))},n.onChangeEntityMetadata=n.onChangeEntityMetadata.bind(n),n.onChangeAttributeMetadata=n.onChangeAttributeMetadata.bind(n),n.onChangeTag=n.onChangeTag.bind(n),n.onDelete=n.onDelete.bind(n),n.onSave=n.onSave.bind(n),n.state={attributeSchemaName:t.tag.attributeSchemaName,crmId:t.tag.crmId,entitySchemaName:t.tag.entitySchemaName,index:t.tag.index,mergeTagName:t.tag.mergeTagName,templateId:t.tag.templateId,isDeleted:!1},n}return r(t,e),t}(s.Component);t.default=p},788:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e.GetParameter=function(e){var t=new RegExp(e+"=(.+)"),n=decodeURIComponent(location.search).substring(1).split("&").filter((function(e){return-1!==e.search(t)})).map((function(e){return e.match(t)[1]}));return n.length?n[0]:null},e.GetDataParameter=function(){return e.GetParameter("data")},e}();t.WebResourceUtils=a},796:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(239),r=function(){function e(){}return e.GetGuid=function(e){return e.replace(/{|}/g,"").toUpperCase()},e.ShowNotification=function(e,t,n){a.notification[e]({message:null!=n?n:"",description:t})},e}();t.CommonUtils=r}});
//# sourceMappingURL=3.f3c43a482b9711c51bf8.hot-update.js.map