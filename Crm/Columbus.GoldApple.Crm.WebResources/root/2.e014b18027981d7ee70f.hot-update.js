webpackHotUpdate(2,{789:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=r(n(10)),u=a(n(790));n(793),i.render(o.createElement(u.default,{title:"React Webpack Typescript Sass готов!"}),document.getElementById("root"))},790:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function u(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(n(0)),s=c(n(410)),f=n(239),p=f.Layout.Content,d=f.Layout.Footer,h=f.Layout.Sider,y=[{title:"Наименование",dataIndex:"name",sorter:!0,width:"20%"},{title:"Адрес",dataIndex:"address1_composite"}],m=function(e){function t(t){var n=e.call(this,t)||this;return n.state={data:[],pagination:{},loading:!1},n.fetch=function(e){return void 0===e&&(e={}),o(n,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return this.setState({loading:!0}),[4,s.default.Retrieve({async:!0,entityName:"account"})];case 1:return e=t.sent(),console.log(e),this.setState({loading:!1,data:e.value}),[2]}}))}))},n}return a(t,e),t.prototype.componentDidMount=function(){return o(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.fetch()];case 1:return e.sent(),[2]}}))}))},t.prototype.render=function(){return l.createElement(f.Layout,null,l.createElement(h,{collapsible:!0},l.createElement("div",{className:"logo"}),l.createElement(f.Menu,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},l.createElement(f.Menu.Item,{key:"1"},l.createElement(f.Icon,{type:"user"}),l.createElement("span",{className:"nav-text"},"Организации")),l.createElement(f.Menu.Item,{key:"2"},l.createElement(f.Icon,{type:"upload"}),l.createElement("span",{className:"nav-text"},"Загрузки")),l.createElement(f.Menu.Item,{key:"3"},l.createElement(f.Icon,{type:"user"}),l.createElement("span",{className:"nav-text"},"Контакты")))),l.createElement(f.Layout,null,l.createElement(p,{style:{margin:"5px"}},l.createElement(f.Table,{pagination:{pageSize:3},columns:y,rowKey:function(e){return e.accountid},dataSource:this.state.data,loading:this.state.loading})),l.createElement(d,{style:{textAlign:"center"}},"Columbus")))},t}(l.Component);t.default=m}});
//# sourceMappingURL=2.e014b18027981d7ee70f.hot-update.js.map