webpackJsonp([3],{300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),i=(n.n(r),n(29)),p=n(303),A=n(306),o=n(339),l=(n.n(o),n(310)),s=n(95),c=n(93),b=n(316),g=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),C=this&&this.__decorate||function(e,t,n,a){var r,i=arguments.length,p=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)p=Reflect.decorate(e,t,n,a);else for(var A=e.length-1;A>=0;A--)(r=e[A])&&(p=(i<3?r(p):i>3?r(t,n,p):r(t,n))||p);return i>3&&p&&Object.defineProperty(t,n,p),p},d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.blockTableTh=[{name:"Height",key:"index"},{name:"Size",key:"size"},{name:"Transactions",key:"txcount"},{name:"Created on",key:"time"}],t.state={currentPage:1,pageSize:15},t.renderBlock=function(e,a){return"index"===a?r.createElement("span",null,r.createElement("img",{src:n(341),alt:""}),r.createElement("a",{onClick:t.toBlockInfo.bind(t,e),href:"javascript:;"},Object(s.a)(e.toString()))):"time"===a?(e=l.a("yyyy/MM/dd | hh:mm:ss",e.toString(),t.props.intl.locale),r.createElement("span",{className:"small-font"},e)):null},t.toBlockInfo=function(e){t.props.history.push("/block/"+e)},t.onGoPage=function(e){console.log(e),t.setState({currentPage:e},function(){t.props.block.getBlockList(t.state.pageSize,t.state.currentPage)})},t}return g(t,e),t.prototype.componentDidMount=function(){this.props.block.getBlockHeight(),this.props.block.getBlockList(this.state.pageSize,this.state.currentPage)},t.prototype.render=function(){if(!this.props.block.blockHeight)return null;var e=parseInt(this.props.block.blockHeight,10);return r.createElement("div",{className:"block-page"},r.createElement(p.a,{text:"Blocks",img:n(342)}),r.createElement("div",{className:"block-table"},r.createElement(A.a,{tableTh:this.blockTableTh,tableData:this.props.block.blockList,render:this.renderBlock}),r.createElement(b.a,{totalCount:e,pageSize:this.state.pageSize,currentPage:this.state.currentPage,onChange:this.onGoPage})))},t=C([Object(i.b)("block"),i.c],t)}(r.Component);t.default=Object(c.c)(d)},303:function(e,t,n){"use strict";var a,r=n(0),i=(n.n(r),n(304)),p=(n.n(i),n(50)),A=n.n(p),o=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=A()("title-text-wrapper",{"info-title":!!this.props.isInfoTitle&&this.props.isInfoTitle,"table-title":!!this.props.isTableTitle&&this.props.isTableTitle});return r.createElement("div",{className:e},r.createElement("h3",null,this.props.img&&r.createElement("img",{src:this.props.img,alt:""}),this.props.text),!this.props.isInline&&r.createElement("div",{className:"right"},this.props.children),this.props.isInline&&r.createElement("div",{className:"inline-select"},this.props.children))},t}(r.Component);t.a=l},304:function(e,t,n){var a=n(305);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1,transform:void 0};n(288)(a,r);a.locals&&(e.exports=a.locals)},305:function(e,t,n){(e.exports=n(287)(!0)).push([e.i,".title-text-wrapper{padding-bottom:20px;position:relative}.title-text-wrapper img{width:20px;height:20px;margin-right:10px}.title-text-wrapper.table-title{padding:20px;border-bottom:3px solid #ececec;color:#333}.title-text-wrapper.table-title img{width:20px;height:20px;margin-right:10px}.title-text-wrapper h3{font-size:20px;display:inline-block;font-weight:500;font-family:NotoSansHans-Medium;margin-right:30px}.title-text-wrapper.info-title{color:#fff;background:#5f86fb;padding:20px 30px;border-radius:3px 3px 0 0}.title-text-wrapper .right{float:right}.title-text-wrapper .inline-select{display:inline-block}.title-text-wrapper .inline-select .button-group{position:absolute;top:20px;right:20px}@media (max-width:768px){.title-text-wrapper{padding-bottom:15px}.title-text-wrapper.table-title{padding:20px 15px}.title-text-wrapper.info-title{padding:20px 10px}}","",{version:3,sources:["/Users/yinhuang/demo/new-browser-private/src/components/titletext/index.less"],names:[],mappings:"AAAA,oBACE,oBAAqB,AACrB,iBAAmB,CACpB,AACD,wBACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,gCACE,aAAc,AACd,gCAAiC,AACjC,UAAY,CACb,AACD,oCACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,uBACE,eAAgB,AAChB,qBAAsB,AACtB,gBAAiB,AACjB,gCAAiC,AACjC,iBAAmB,CACpB,AACD,+BACE,WAAe,AACf,mBAAoB,AACpB,kBAAmB,AACnB,yBAA2B,CAC5B,AACD,2BACE,WAAa,CACd,AACD,mCACE,oBAAsB,CACvB,AACD,iDACE,kBAAmB,AACnB,SAAU,AACV,UAAY,CACb,AACD,yBACE,oBACE,mBAAqB,CACtB,AACD,gCACE,iBAAmB,CACpB,AACD,+BACE,iBAAmB,CACpB,CACF",file:"index.less",sourcesContent:[".title-text-wrapper {\n  padding-bottom: 20px;\n  position: relative;\n}\n.title-text-wrapper img {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.title-text-wrapper.table-title {\n  padding: 20px;\n  border-bottom: 3px solid #ECECEC;\n  color: #333;\n}\n.title-text-wrapper.table-title img {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.title-text-wrapper h3 {\n  font-size: 20px;\n  display: inline-block;\n  font-weight: 500;\n  font-family: NotoSansHans-Medium;\n  margin-right: 30px;\n}\n.title-text-wrapper.info-title {\n  color: #FFFFFF;\n  background: #5F86FB;\n  padding: 20px 30px;\n  border-radius: 3px 3px 0 0;\n}\n.title-text-wrapper .right {\n  float: right;\n}\n.title-text-wrapper .inline-select {\n  display: inline-block;\n}\n.title-text-wrapper .inline-select .button-group {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n@media (max-width: 768px) {\n  .title-text-wrapper {\n    padding-bottom: 15px;\n  }\n  .title-text-wrapper.table-title {\n    padding: 20px 15px;\n  }\n  .title-text-wrapper.info-title {\n    padding: 20px 10px;\n  }\n}\n"],sourceRoot:""}])},306:function(e,t,n){"use strict";var a,r=n(0),i=(n.n(r),n(29)),p=n(50),A=n.n(p),o=n(307),l=(n.n(o),this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})),s=this&&this.__decorate||function(e,t,n,a){var r,i=arguments.length,p=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)p=Reflect.decorate(e,t,n,a);else for(var A=e.length-1;A>=0;A--)(r=e[A])&&(p=(i<3?r(p):i>3?r(t,n,p):r(t,n))||p);return i>3&&p&&Object.defineProperty(t,n,p),p},c=function(e){function t(t){var n=e.call(this,t)||this;return n.tableThKeys=n.props.tableTh.map(function(e){return e.key}),n}return l(t,e),t.prototype.render=function(){var e,t=this,n="table-wrap";return this.props.className&&(n=A()("table-wrap",((e={})[this.props.className]=!!this.props.className,e))),r.createElement("div",{className:n},this.props.children,r.createElement("div",{className:"table-content"},r.createElement("div",{className:"table-th"},r.createElement("ul",null,this.props.tableTh.map(function(e,t){return r.createElement("li",{key:t},e.name)}))),r.createElement("div",{className:"table-body"},r.createElement("ul",null,this.props.tableData.map(function(e,n){return r.createElement("li",{key:n},t.tableThKeys.map(function(n,a){if(!t.props.render)return r.createElement("span",{key:a},e[n]);var i=t.props.render(e[n],n,e);return i?r.createElement(r.Fragment,{key:a},i):r.createElement("span",{key:a},e[n])}))})))),r.createElement("div",{className:"mobile-table-content"},r.createElement("div",{className:"table-body"},r.createElement("ul",null,this.props.tableData.map(function(e,n){return r.createElement("li",{key:n},t.tableThKeys.map(function(t,n){return r.createElement("div",{className:"table-line",key:n},r.createElement("span",{className:"line-title"},t),r.createElement("span",{className:"line-content"},e[t]))}))})))))},t=s([i.c],t)}(r.Component);t.a=c},307:function(e,t,n){var a=n(308);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1,transform:void 0};n(288)(a,r);a.locals&&(e.exports=a.locals)},308:function(e,t,n){(e.exports=n(287)(!0)).push([e.i,".table-wrap{background:#fff}.table-wrap .table-content{display:block}.table-wrap .table-content .table-th{border-bottom:3px solid #ececec;padding:0 15px}.table-wrap .table-content .table-th ul{display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 0}.table-wrap .table-content .table-th ul li{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;text-align:center;font-size:12px;font-family:NotoSansHans-Regular}.table-wrap .table-content .table-th ul li.addr-text{min-width:315px}.table-wrap .table-content .table-body ul li{border-bottom:1px solid #ececec;padding:20px 0;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:54px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 15px}.table-wrap .table-content .table-body ul li span{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;font-size:14px;font-family:NotoSansHans-Regular}.table-wrap .table-content .table-body ul li span.img-text{text-align:left;text-indent:.25rem}.table-wrap .table-content .table-body ul li span.img-text-bg{text-align:left;text-indent:.95rem}.table-wrap .table-content .table-body ul li span.tran-img-text{text-align:left;text-indent:1rem}.table-wrap .table-content .table-body ul li span.addr-text{min-width:315px}.table-wrap .table-content .table-body ul li span.small-font{font-size:12px}.table-wrap .table-content .table-body ul li span a{color:#5f86fb}.table-wrap .table-content .table-body ul li span a:hover{color:#b6c9ff;text-decoration:underline}.table-wrap .table-content .table-body ul li span img{width:20px;height:20px;vertical-align:middle;margin-right:5px;border:none}.table-wrap .mobile-table-content{display:none}@media (max-width:768px){.table-wrap .table-content{display:none}.table-wrap .mobile-table-content{display:block;margin-bottom:30px}.table-wrap .mobile-table-content .table-body ul li{padding:20px 10px;border-bottom:1px solid #ececec}.table-wrap .mobile-table-content .table-body ul li .table-line{font-size:12px;margin-bottom:20px}.table-wrap .mobile-table-content .table-body ul li .table-line .line-title{display:inline-block;vertical-align:middle;text-align:left;width:85px;color:#b2b2b2}.table-wrap .mobile-table-content .table-body ul li .table-line .line-content{display:inline-block;vertical-align:middle;text-align:left}.table-wrap .mobile-table-content .table-body ul li .table-line:last-child{margin-bottom:0}}","",{version:3,sources:["/Users/yinhuang/demo/new-browser-private/src/components/Table/index.less"],names:[],mappings:"AAAA,YACE,eAAoB,CACrB,AACD,2BACE,aAAe,CAChB,AACD,qCACE,gCAAiC,AACjC,cAAgB,CACjB,AACD,wCACE,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,cAAgB,CACjB,AACD,2CACE,iBAAkB,AACd,aAAc,AACV,SAAU,AAClB,kBAAmB,AACnB,eAAgB,AAChB,gCAAkC,CACnC,AACD,qDACE,eAAiB,CAClB,AACD,6CACE,gCAAiC,AACjC,eAAgB,AAChB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,kBAAmB,AACnB,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,8BAA+B,AACvB,sBAAuB,AAC/B,cAAgB,CACjB,AACD,kDACE,iBAAkB,AACd,aAAc,AACV,SAAU,AAClB,eAAgB,AAChB,gCAAkC,CACnC,AACD,2DACE,gBAAiB,AACjB,kBAAqB,CACtB,AACD,8DACE,gBAAiB,AACjB,kBAAqB,CACtB,AACD,gEACE,gBAAiB,AACjB,gBAAkB,CACnB,AACD,4DACE,eAAiB,CAClB,AACD,6DACE,cAAgB,CACjB,AACD,oDACE,aAAe,CAChB,AACD,0DACE,cAAe,AACf,yBAA2B,CAC5B,AACD,sDACE,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,iBAAkB,AAClB,WAAa,CACd,AACD,kCACE,YAAc,CACf,AACD,yBACE,2BACE,YAAc,CACf,AACD,kCACE,cAAe,AACf,kBAAoB,CACrB,AACD,oDACE,kBAAmB,AACnB,+BAAiC,CAClC,AACD,gEACE,eAAgB,AAChB,kBAAoB,CACrB,AACD,4EACE,qBAAsB,AACtB,sBAAuB,AACvB,gBAAiB,AACjB,WAAY,AACZ,aAAe,CAChB,AACD,8EACE,qBAAsB,AACtB,sBAAuB,AACvB,eAAiB,CAClB,AACD,2EACE,eAAiB,CAClB,CACF",file:"index.less",sourcesContent:[".table-wrap {\n  background: #FFFFFF;\n}\n.table-wrap .table-content {\n  display: block;\n}\n.table-wrap .table-content .table-th {\n  border-bottom: 3px solid #ECECEC;\n  padding: 0 15px;\n}\n.table-wrap .table-content .table-th ul {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 0;\n}\n.table-wrap .table-content .table-th ul li {\n  -webkit-flex: 1 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  text-align: center;\n  font-size: 12px;\n  font-family: NotoSansHans-Regular;\n}\n.table-wrap .table-content .table-th ul li.addr-text {\n  min-width: 315px;\n}\n.table-wrap .table-content .table-body ul li {\n  border-bottom: 1px solid #ECECEC;\n  padding: 20px 0;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 54px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 15px;\n}\n.table-wrap .table-content .table-body ul li span {\n  -webkit-flex: 1 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  font-size: 14px;\n  font-family: NotoSansHans-Regular;\n}\n.table-wrap .table-content .table-body ul li span.img-text {\n  text-align: left;\n  text-indent: 0.25rem;\n}\n.table-wrap .table-content .table-body ul li span.img-text-bg {\n  text-align: left;\n  text-indent: 0.95rem;\n}\n.table-wrap .table-content .table-body ul li span.tran-img-text {\n  text-align: left;\n  text-indent: 1rem;\n}\n.table-wrap .table-content .table-body ul li span.addr-text {\n  min-width: 315px;\n}\n.table-wrap .table-content .table-body ul li span.small-font {\n  font-size: 12px;\n}\n.table-wrap .table-content .table-body ul li span a {\n  color: #5F86FB;\n}\n.table-wrap .table-content .table-body ul li span a:hover {\n  color: #B6C9FF;\n  text-decoration: underline;\n}\n.table-wrap .table-content .table-body ul li span img {\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  margin-right: 5px;\n  border: none;\n}\n.table-wrap .mobile-table-content {\n  display: none;\n}\n@media (max-width: 768px) {\n  .table-wrap .table-content {\n    display: none;\n  }\n  .table-wrap .mobile-table-content {\n    display: block;\n    margin-bottom: 30px;\n  }\n  .table-wrap .mobile-table-content .table-body ul li {\n    padding: 20px 10px;\n    border-bottom: 1px solid #ECECEC;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line {\n    font-size: 12px;\n    margin-bottom: 20px;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line .line-title {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: left;\n    width: 85px;\n    color: #B2B2B2;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line .line-content {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: left;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line:last-child {\n    margin-bottom: 0;\n  }\n}\n"],sourceRoot:""}])},310:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e,t,n){var a=r(t.toString()),i=new Date(a);if("en"===n)return new Date(a).toUTCString();var p=function(e){return{"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()}}(i);for(var A in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(i.getFullYear()+"").substr(4-RegExp.$1.length))),p)new RegExp("("+A+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?p[A]:("00"+p[A]).substr((""+p[A]).length)));return e},r=function(e){return 10===e.length?1e3*parseInt(e,10):parseInt(e,10)}},311:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAcCAMAAABS8b9vAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAYAz58ufJoEw2GGcG6tm1rIp1JnuhlwsAAABqSURBVCjPhdJLDoAgDARQ+SgIKCpz/7NqQoyJLZlZvgWZ0k6DlGyswgcwG8kOT5b1z+gJSWX4q2gM7FFwT20qw51W415WcC8r+CsLJT6qjI0xfyQkUlCOw4evjXwsWUNI4xXzg7A5v6V4bvALGSWnLfUnAAAAAElFTkSuQmCC"},316:function(e,t,n){"use strict";var a,r=n(0),i=(n.n(r),n(317)),p=(n.n(i),n(50)),A=n.n(p),o=n(29),l=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=this&&this.__decorate||function(e,t,n,a){var r,i=arguments.length,p=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)p=Reflect.decorate(e,t,n,a);else for(var A=e.length-1;A>=0;A--)(r=e[A])&&(p=(i<3?r(p):i>3?r(t,n,p):r(t,n))||p);return i>3&&p&&Object.defineProperty(t,n,p),p},c=function(e){function t(t){var n=e.call(this,t)||this;return n.UNSAFE_componentWillReceiveProps=function(e){e.totalCount!==n.props.totalCount&&n.setState({totalPage:e.totalCount%e.pageSize===0?e.totalCount/e.pageSize:Math.ceil(e.totalCount/e.pageSize)})},n.onPrevClick=function(){var e=n.props.currentPage;e-1<=0||n.pageTo(e-1)},n.onNextClick=function(){var e=n.props.currentPage;e+1>n.state.totalPage||n.pageTo(e+1)},n.pageTo=function(e){e=parseInt(""+e,10),console.log(e),e<0||e>n.state.totalPage||e!==n.props.currentPage&&(n.setState({current:e}),n.props.onChange&&n.props.onChange(e),n.setState({inputValue:0}))},n.onInputChange=function(e){if(e.target.value<=0)n.setState({inputValue:1});else{if(!(e.target.value>n.state.totalPage))return n.setState({inputValue:e.target.value}),!0;n.setState({inputValue:n.state.totalPage})}},n.goPage=function(){n.pageTo(n.state.inputValue)},n.onInputKeyDown=function(e){13===e.keyCode&&n.pageTo(n.state.inputValue)},n.state={current:1,totalPage:t.totalCount%t.pageSize===0?t.totalCount/t.pageSize:Math.ceil(t.totalCount/t.pageSize),inputValue:0},console.log(n.state),n}return l(t,e),t.prototype.render=function(){var e=A()("previous-btn",{active:1!==this.props.currentPage}),t=A()("next-btn",{active:this.props.currentPage!==this.state.totalPage});return r.createElement("div",{className:"page-wrapper"},r.createElement("div",{className:"page-tips"},r.createElement("span",null,"Page ",this.props.currentPage,", ",this.state.totalPage," pages in total")),r.createElement("div",{className:"page-btn-wrapper"},r.createElement("div",{className:e,onClick:this.onPrevClick},r.createElement("img",{src:n(311),alt:""})),r.createElement("div",{className:t,onClick:this.onNextClick},r.createElement("img",{src:n(311),alt:""})),r.createElement("div",{className:"input-page"},r.createElement("input",{type:"number",onChange:this.onInputChange,value:0===this.state.inputValue?"":this.state.inputValue,onKeyDown:this.onInputKeyDown})),r.createElement("div",{className:"go-btn",onClick:this.goPage},"Go")))},t=s([o.c],t)}(r.Component);t.a=c},317:function(e,t,n){var a=n(318);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1,transform:void 0};n(288)(a,r);a.locals&&(e.exports=a.locals)},318:function(e,t,n){(e.exports=n(287)(!0)).push([e.i,".page-wrapper{width:2.5rem;min-width:250px;margin:0 auto;padding:.3rem;text-align:center}.page-wrapper .page-tips{font-family:NotoSansHans-Regular;font-size:12px;color:#b2b2b2;text-align:center;margin-bottom:.15rem}.page-wrapper .page-btn-wrapper{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.page-wrapper .page-btn-wrapper .go-btn,.page-wrapper .page-btn-wrapper .next-btn,.page-wrapper .page-btn-wrapper .previous-btn{width:.3rem;height:.3rem;min-width:30px;min-height:30px;background:#b2b2b2;border-radius:3px;position:relative;text-align:center;line-height:.3rem;color:#fff;margin-right:10px}.page-wrapper .page-btn-wrapper .go-btn img,.page-wrapper .page-btn-wrapper .next-btn img,.page-wrapper .page-btn-wrapper .previous-btn img{width:.11rem;height:.14rem;min-width:11px;min-height:14px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.page-wrapper .page-btn-wrapper .go-btn.active,.page-wrapper .page-btn-wrapper .next-btn.active,.page-wrapper .page-btn-wrapper .previous-btn.active{background:#5f86fb}.page-wrapper .page-btn-wrapper .go-btn.active:hover,.page-wrapper .page-btn-wrapper .next-btn.active:hover,.page-wrapper .page-btn-wrapper .previous-btn.active:hover{background:#b6c9ff}.page-wrapper .page-btn-wrapper .previous-btn{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.page-wrapper .page-btn-wrapper .input-page{border:1px solid #b2b2b2;border-radius:3px;width:.6rem;height:.3rem;min-width:60px;min-height:30px;margin-right:10px}.page-wrapper .page-btn-wrapper .input-page input{border:none;width:100%;height:100%;background:none}.page-wrapper .page-btn-wrapper .input-page input::-webkit-inner-spin-button,.page-wrapper .page-btn-wrapper .input-page input::-webkit-outer-spin-button{-webkit-appearance:none}.page-wrapper .page-btn-wrapper .go-btn{background:#5f86fb;margin-right:0;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.page-wrapper .page-btn-wrapper .go-btn:hover{background:#b6c9ff}","",{version:3,sources:["/Users/yinhuang/demo/new-browser-private/src/components/Page/index.less"],names:[],mappings:"AAAA,cACE,aAAc,AACd,gBAAiB,AACjB,cAAe,AACf,cAAgB,AAChB,iBAAmB,CACpB,AACD,yBACE,iCAAkC,AAClC,eAAgB,AAChB,cAAe,AACf,kBAAmB,AACnB,oBAAuB,CACxB,AACD,gCACE,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,+BAAgC,AAC5B,qBAAsB,AAClB,sBAAwB,CACjC,AACD,gIAGE,YAAc,AACd,aAAe,AACf,eAAgB,AAChB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,kBAAmB,AACnB,kBAAmB,AACnB,kBAAoB,AACpB,WAAY,AACZ,iBAAmB,CACpB,AACD,4IAGE,aAAe,AACf,cAAgB,AAChB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,uCAAyC,AACzC,mCAAqC,AACrC,kCAAoC,AACpC,8BAAiC,CAClC,AACD,qJAGE,kBAAoB,CACrB,AACD,uKAGE,kBAAoB,CACrB,AACD,8CACE,iCAAkC,AAClC,6BAA8B,AAC9B,4BAA6B,AAC7B,wBAA0B,CAC3B,AACD,4CACE,yBAA0B,AAC1B,kBAAmB,AACnB,YAAc,AACd,aAAe,AACf,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,kDACE,YAAa,AACb,WAAY,AACZ,YAAa,AACb,eAAiB,CAClB,AACD,0JAEE,uBAAyB,CAC1B,AACD,wCACE,mBAAoB,AACpB,eAAgB,AAChB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,qCAAsC,AAClC,yBAA0B,AACtB,6BAA8B,AACtC,8BAA+B,AAC3B,0BAA2B,AACvB,qBAAuB,CAChC,AACD,8CACE,kBAAoB,CACrB",file:"index.less",sourcesContent:[".page-wrapper {\n  width: 2.5rem;\n  min-width: 250px;\n  margin: 0 auto;\n  padding: 0.3rem;\n  text-align: center;\n}\n.page-wrapper .page-tips {\n  font-family: NotoSansHans-Regular;\n  font-size: 12px;\n  color: #B2B2B2;\n  text-align: center;\n  margin-bottom: 0.15rem;\n}\n.page-wrapper .page-btn-wrapper {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.page-wrapper .page-btn-wrapper .previous-btn,\n.page-wrapper .page-btn-wrapper .next-btn,\n.page-wrapper .page-btn-wrapper .go-btn {\n  width: 0.3rem;\n  height: 0.3rem;\n  min-width: 30px;\n  min-height: 30px;\n  background: #B2B2B2;\n  border-radius: 3px;\n  position: relative;\n  text-align: center;\n  line-height: 0.3rem;\n  color: #fff;\n  margin-right: 10px;\n}\n.page-wrapper .page-btn-wrapper .previous-btn img,\n.page-wrapper .page-btn-wrapper .next-btn img,\n.page-wrapper .page-btn-wrapper .go-btn img {\n  width: 0.11rem;\n  height: 0.14rem;\n  min-width: 11px;\n  min-height: 14px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.page-wrapper .page-btn-wrapper .previous-btn.active,\n.page-wrapper .page-btn-wrapper .next-btn.active,\n.page-wrapper .page-btn-wrapper .go-btn.active {\n  background: #5F86FB;\n}\n.page-wrapper .page-btn-wrapper .previous-btn.active:hover,\n.page-wrapper .page-btn-wrapper .next-btn.active:hover,\n.page-wrapper .page-btn-wrapper .go-btn.active:hover {\n  background: #B6C9FF;\n}\n.page-wrapper .page-btn-wrapper .previous-btn {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.page-wrapper .page-btn-wrapper .input-page {\n  border: 1px solid #B2B2B2;\n  border-radius: 3px;\n  width: 0.6rem;\n  height: 0.3rem;\n  min-width: 60px;\n  min-height: 30px;\n  margin-right: 10px;\n}\n.page-wrapper .page-btn-wrapper .input-page input {\n  border: none;\n  width: 100%;\n  height: 100%;\n  background: none;\n}\n.page-wrapper .page-btn-wrapper .input-page input::-webkit-outer-spin-button,\n.page-wrapper .page-btn-wrapper .input-page input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.page-wrapper .page-btn-wrapper .go-btn {\n  background: #5F86FB;\n  margin-right: 0;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.page-wrapper .page-btn-wrapper .go-btn:hover {\n  background: #B6C9FF;\n}\n"],sourceRoot:""}])},339:function(e,t,n){var a=n(340);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1,transform:void 0};n(288)(a,r);a.locals&&(e.exports=a.locals)},340:function(e,t,n){(e.exports=n(287)(!0)).push([e.i,".block-page,.blockinfo-page{width:10.88rem;min-width:1088px;padding:0 20px;margin:0 auto;margin-top:1.38rem;margin-bottom:1rem}.block-page .block-table,.blockinfo-page .blockinfo-tran-table{background:#fff;-webkit-box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);border-radius:3px}","",{version:3,sources:["/Users/yinhuang/demo/new-browser-private/src/containers/block/index.less"],names:[],mappings:"AAAA,4BAEE,eAAgB,AAChB,iBAAkB,AAClB,eAAgB,AAChB,cAAe,AACf,mBAAoB,AACpB,kBAAoB,CACrB,AAOD,+DACE,gBAAiB,AACjB,kDAA0D,AAClD,0CAAkD,AAC1D,iBAAmB,CACpB",file:"index.less",sourcesContent:[".block-page,\n.blockinfo-page {\n  width: 10.88rem;\n  min-width: 1088px;\n  padding: 0 20px;\n  margin: 0 auto;\n  margin-top: 1.38rem;\n  margin-bottom: 1rem;\n}\n.block-page .block-table {\n  background: #fff;\n  -webkit-box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n          box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n  border-radius: 3px;\n}\n.blockinfo-page .blockinfo-tran-table {\n  background: #fff;\n  -webkit-box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n          box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n  border-radius: 3px;\n}\n"],sourceRoot:""}])},341:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoAQMAAAC2MCouAAAABlBMVEUAAAA52kcdsp52AAAAAXRSTlMAQObYZgAAAB1JREFUCNdjwAOYD5BGfiaNtCGN5MdOMp/HTuIAAC4LNiXJY989AAAAAElFTkSuQmCC"},342:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAflBMVEUAAAD3tpH/s4D2s4zccjX2tpH2tZH0nWz2tZH2tpH4tpL5tpP6upX/tpL0jE/8mV/8mWD5sIXyqHz7mWHedTn7mGDdcjb5qn38nGbgekH6pXTnj1zkg0z8mGDccjb7mGDdczX9mWDddDf8mWDfczb/nWLedzb7mF/ccjX2tZDIYTqFAAAAJ3RSTlMA+gXr6+rQxLCQcFAwFRXr6tjY2NjQ0MjIyMDAwLCwkJBwcFBQLy/l8G0+AAAApElEQVQ4y+2Uxw6DQAwFYek1vffq3f//wSxCYMn2JrkiMVePNO9kb5BUeRzn1S9LFalvLH5aqC9amUWmJ8pKZ9IQcAJJcnACJjl8wvIQuMVgv+hFrfUukdObLQCg2BAe51SbJRMAJlraCZi0jiy2EzDpFLsJXZKLBHsbxVH8U3xfQ7c4vbw8RD3Psnh6sI9R39dUXN1qIpEJmCTQCXJSmNAkh8gHwRF80dyEvLEAAAAASUVORK5CYII="}});
//# sourceMappingURL=3.07e40f65.chunk.js.map