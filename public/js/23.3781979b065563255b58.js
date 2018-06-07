webpackJsonp([23],{"Atm/":function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),o=a("KSGD"),l=a.n(o),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={show:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),s(t,[{key:"show",value:function(){this.setState({show:!0})}},{key:"hide",value:function(){var e=this;setTimeout(function(){e.setState({show:!1})},100)}},{key:"toggle",value:function(){this.state.show?this.hide():this.show()}},{key:"render",value:function(){return r.a.createElement("div",{className:"dropdown"+(this.state.show?" is-active":"")+(this.props.right?" is-right":"")+" has-text-left",style:{width:this.props.isBlock?"100%":void 0}},r.a.createElement("div",{className:"dropdown-trigger",style:{width:this.props.isBlock?"100%":void 0},onClick:this.toggle.bind(this),onBlur:this.hide.bind(this)},this.props.trigger),r.a.createElement("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu"},r.a.createElement("div",{className:"dropdown-content"},this.props.children)))}}]),t}();t.a=i,i.PropTypes={trigger:l.a.object.isRequired,right:l.a.bool,isBlock:l.a.bool},i.defaultProps={right:!1,isBlock:!1}},"R/xA":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("U7vG"),r=a.n(n),o=a("F8kA"),l=a("Atm/"),s=a("saAw"),i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={flags:[],page:0,per_page:10,total:0,has_more_pages:!1,loading:!0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),i(t,[{key:"componentDidMount",value:function(){this.loadFlags()}},{key:"loadFlags",value:function(){var e=this;this.setState({loading:!0}),axios.get("/admin/web/flags",{params:{page:this.state.page}}).then(function(t){var a=t.data.data;e.setState({flags:a.data,total:a.total,page:a.current_page,per_page:a.per_page,has_more_pages:null!==a.next_page_url,loading:!1}),window.scrollTo(0,0)}).catch(function(t){e.setState({loading:!1}),console.log(t)})}},{key:"clearFlag",value:function(e){var t=this;confirm("Are you sure you want to delete this flag? This action cannot be undone.")&&(this.setState({loading:!0}),axios.delete("/admin/web/flag/"+e.id).then(function(e){1===t.state.flags.length&&t.state.page>1?t.setState({page:t.state.page-1},function(){t.loadFlags()}):t.loadFlags()}).catch(function(e){t.setState({loading:!1}),alert("An error occurred while clearing the flag. Please refresh the page and try again."),console.error(e)}))}},{key:"next",value:function(){var e=this;this.state.has_more_pages&&this.setState({page:this.state.page+1},function(){console.log("going to page: ",e.state),e.loadFlags()})}},{key:"back",value:function(){var e=this;this.state.page<=1||this.setState({page:this.state.page-1},function(){e.loadFlags()})}},{key:"renderTable",value:function(){var e=this;if(0!==this.state.total)return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Thumbnail"),r.a.createElement("th",{style:{width:"300px"}},"Observation"),r.a.createElement("th",null,"Reason"),r.a.createElement("th",null,"Date Flagged"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.state.flags.map(function(t){var a=t.user,n=t.observation;return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:"table-thumbnail-container"},r.a.createElement("img",{src:n.thumbnail,alt:n.observation_category,className:"table-thumbnail is-rounded"})),r.a.createElement("td",null,r.a.createElement("p",null,r.a.createElement("a",{href:"/observation/"+n.id},r.a.createElement("strong",null,n.observation_category))),r.a.createElement("p",null,r.a.createElement("strong",null,"Uploaded by")," ",r.a.createElement(o.b,{to:"/user/"+n.user.id},n.user.name)),r.a.createElement("p",null,r.a.createElement("strong",null,"Flagged by")," ",r.a.createElement(o.b,{to:"/user/"+a.id},a.name))),r.a.createElement("td",null,r.a.createElement("p",null,t.reason),t.comments?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"User Comments")),r.a.createElement("p",null,t.comments)):null),r.a.createElement("td",null,t.created_at),r.a.createElement("td",null,r.a.createElement(l.a,{right:!0,trigger:r.a.createElement("button",{type:"button",className:"button"},r.a.createElement("span",null,"Actions"),r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fa fa-caret-down"})))},r.a.createElement("a",{href:"/observation/"+n.id,className:"dropdown-item"},r.a.createElement("span",{className:"icon is-small mr-0 text-info"},r.a.createElement("i",{className:"fa fa-eye"})),r.a.createElement("span",null,"Visit Observation")),r.a.createElement("a",{href:"javascript:;",onClick:function(){e.clearFlag(t)},className:"dropdown-item"},r.a.createElement("span",{className:"icon is-small mr-0 text-danger"},r.a.createElement("i",{className:"fa fa-times"})),r.a.createElement("span",null,"Clear Flag")))))})))}},{key:"renderPaginator",value:function(){var e=this;return r.a.createElement("nav",{className:"pagination is-centered",role:"navigation","aria-label":"pagination"},r.a.createElement("button",{type:"button",className:"pagination-previous",disabled:this.state.page<=1||this.state.loading,onClick:function(){return e.back()}},"Previous"),r.a.createElement("button",{type:"button",className:"pagination-next",disabled:!this.state.has_more_pages||this.state.loading,onClick:function(){return e.next()}},"Next"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"columns is-marginless"},r.a.createElement("div",{className:"column"},r.a.createElement("h1",{className:"title is-3"},"Flagged Observations")),r.a.createElement("div",{className:"column has-text-right"},this.state.total," flags found. Page ",this.state.page," of ",Math.ceil(this.state.total/this.state.per_page))),r.a.createElement("div",{className:"box"},0!==this.state.total||this.state.loading?null:r.a.createElement("p",null,"There are no flagged observations."),this.renderTable(),this.renderPaginator()),r.a.createElement(s.a,{visible:this.state.loading}))}}]),t}();t.default=c},saAw:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),o=a("KSGD"),l=a.n(o),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),s(t,[{key:"render",value:function(){return this.props.visible?this.props.inline?r.a.createElement("div",{className:"mt-1",style:this.props.containerStyle},r.a.createElement("i",{className:"fa fa-refresh fa-spin fa-2x"})):r.a.createElement("div",{className:"spinner-overlay",style:this.props.containerStyle},r.a.createElement("div",{className:"overlay-blur"}),r.a.createElement("span",{className:"spinner-container"},r.a.createElement("i",{className:"is-loading"}))):null}}]),t}();t.a=i,i.PropTypes={visible:l.a.bool.isRequired,containerStyle:l.a.object,inline:l.a.bool},i.defaultProps={containerStyle:{},inline:!1}}});