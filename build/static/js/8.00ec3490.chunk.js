webpackJsonp([8],{297:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=n(0),l=(n.n(i),n(303)),r=n(306),o=n(310),p=n(336),s=(n.n(p),n(29)),A=n(93),c=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),b=this&&this.__decorate||function(t,e,n,a){var i,l=arguments.length,r=l<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(r=(l<3?i(r):l>3?i(e,n,r):i(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r},m=this&&this.__awaiter||function(t,e,n,a){return new(n||(n=Promise))(function(i,l){function r(t){try{p(a.next(t))}catch(t){l(t)}}function o(t){try{p(a.throw(t))}catch(t){l(t)}}function p(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(r,o)}p((a=a.apply(t,e||[])).next())})},d=this&&this.__generator||function(t,e){var n,a,i,l,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(i=2&l[0]?a.return:l[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;switch(a=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,a=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(6===l[0]&&r.label<i[1]){r.label=i[1],i=l;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(l);break}i[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(t){l=[6,t],a=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}},C=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={vinList:[],outList:[]},e.transVTableTh=[{name:"Address",key:"address"},{name:"Asset",key:"value"}],e.getTransactionInfo=function(t){return e.props.transaction.getTransInfo(t)},e.onGoBack=function(){e.props.history.push("/transactions/")},e}return c(e,t),e.prototype.componentDidMount=function(){return m(this,void 0,void 0,function(){var t;return d(this,function(e){switch(e.label){case 0:return t=this.props.match.params,[4,this.getTransactionInfo(t.txid)];case 1:return e.sent(),this.props.transaction.getBlockInfo(this.props.transaction.tranInfo.blockindex),[2]}})})},e.prototype.render=function(){return this.props.transaction.tranInfo?i.createElement("div",{className:"transactioninfo-page"},i.createElement("div",{className:"goback-wrapper"},i.createElement("span",{className:"goback-text",onClick:this.onGoBack},"<<  Go back")),i.createElement("div",{className:"info-content"},i.createElement(l.a,{text:"Transaction information",isInfoTitle:!0}),i.createElement("div",{className:"info-list"},i.createElement("ul",null,i.createElement("li",null,i.createElement("span",{className:"type-name"},"TXid"),i.createElement("span",{className:"type-content"},this.props.transaction.tranInfo&&this.props.transaction.tranInfo.txid)),i.createElement("li",null,i.createElement("span",{className:"type-name"},"Type"),i.createElement("span",{className:"type-content"},this.props.transaction.tranInfo&&this.props.transaction.tranInfo.type)),i.createElement("li",null,i.createElement("span",{className:"type-name"},"Network Fee"),i.createElement("span",{className:"type-content"},this.props.transaction.tranInfo&&this.props.transaction.tranInfo.net_fee," GAS")),i.createElement("li",null,i.createElement("span",{className:"type-name"},"System Fee"),i.createElement("span",{className:"type-content"},this.props.transaction.tranInfo&&this.props.transaction.tranInfo.sys_fee," GAS")),i.createElement("li",null,i.createElement("span",{className:"type-name"},"Size"),i.createElement("span",{className:"type-content"},this.props.transaction.tranInfo&&this.props.transaction.tranInfo.size," bytes")),i.createElement("li",null,i.createElement("span",{className:"type-name"},"Height"),i.createElement("span",{className:"type-content"},i.createElement("a",{href:""},this.props.transaction.tranInfo&&this.props.transaction.tranInfo.blockindex))),i.createElement("li",null,i.createElement("span",{className:"type-name"},"Time"),i.createElement("span",{className:"type-content"},this.props.transaction.blockInfo&&o.a("yyyy/MM/dd | hh:mm:ss",this.props.transaction.blockInfo.time.toString(),this.props.intl.locale)))))),i.createElement("div",{className:"transactioninfo-input-output"},i.createElement("div",{className:"input-wrapper"},i.createElement(l.a,{text:"Input"}),i.createElement(r.a,{tableTh:this.transVTableTh,tableData:this.state.vinList})),i.createElement("div",{className:"output-wrapper"},i.createElement(l.a,{text:"Output"}),i.createElement(r.a,{tableTh:this.transVTableTh,tableData:this.state.outList})))):null},e=b([Object(s.b)("transaction"),s.c],e)}(i.Component);e.default=Object(A.c)(C)},303:function(t,e,n){"use strict";var a,i=n(0),l=(n.n(i),n(304)),r=(n.n(l),n(50)),o=n.n(r),p=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.prototype.render=function(){var t=o()("title-text-wrapper",{"info-title":!!this.props.isInfoTitle&&this.props.isInfoTitle,"table-title":!!this.props.isTableTitle&&this.props.isTableTitle});return i.createElement("div",{className:t},i.createElement("h3",null,this.props.img&&i.createElement("img",{src:this.props.img,alt:""}),this.props.text),!this.props.isInline&&i.createElement("div",{className:"right"},this.props.children),this.props.isInline&&i.createElement("div",{className:"inline-select"},this.props.children))},e}(i.Component);e.a=s},304:function(t,e,n){var a=n(305);"string"===typeof a&&(a=[[t.i,a,""]]);var i={hmr:!1,transform:void 0};n(288)(a,i);a.locals&&(t.exports=a.locals)},305:function(t,e,n){(t.exports=n(287)(!0)).push([t.i,".title-text-wrapper{padding-bottom:20px;position:relative}.title-text-wrapper img{width:20px;height:20px;margin-right:10px}.title-text-wrapper.table-title{padding:20px;border-bottom:3px solid #ececec;color:#333}.title-text-wrapper.table-title img{width:20px;height:20px;margin-right:10px}.title-text-wrapper h3{font-size:20px;display:inline-block;font-weight:500;font-family:NotoSansHans-Medium;margin-right:30px}.title-text-wrapper.info-title{color:#fff;background:#5f86fb;padding:20px 30px;border-radius:3px 3px 0 0}.title-text-wrapper .right{float:right}.title-text-wrapper .inline-select{display:inline-block}.title-text-wrapper .inline-select .button-group{position:absolute;top:20px;right:20px}@media (max-width:768px){.title-text-wrapper{padding-bottom:15px}.title-text-wrapper.table-title{padding:20px 15px}.title-text-wrapper.info-title{padding:20px 10px}}","",{version:3,sources:["/Users/yinhuang/demo/new-browser-private/src/components/titletext/index.less"],names:[],mappings:"AAAA,oBACE,oBAAqB,AACrB,iBAAmB,CACpB,AACD,wBACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,gCACE,aAAc,AACd,gCAAiC,AACjC,UAAY,CACb,AACD,oCACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,uBACE,eAAgB,AAChB,qBAAsB,AACtB,gBAAiB,AACjB,gCAAiC,AACjC,iBAAmB,CACpB,AACD,+BACE,WAAe,AACf,mBAAoB,AACpB,kBAAmB,AACnB,yBAA2B,CAC5B,AACD,2BACE,WAAa,CACd,AACD,mCACE,oBAAsB,CACvB,AACD,iDACE,kBAAmB,AACnB,SAAU,AACV,UAAY,CACb,AACD,yBACE,oBACE,mBAAqB,CACtB,AACD,gCACE,iBAAmB,CACpB,AACD,+BACE,iBAAmB,CACpB,CACF",file:"index.less",sourcesContent:[".title-text-wrapper {\n  padding-bottom: 20px;\n  position: relative;\n}\n.title-text-wrapper img {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.title-text-wrapper.table-title {\n  padding: 20px;\n  border-bottom: 3px solid #ECECEC;\n  color: #333;\n}\n.title-text-wrapper.table-title img {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.title-text-wrapper h3 {\n  font-size: 20px;\n  display: inline-block;\n  font-weight: 500;\n  font-family: NotoSansHans-Medium;\n  margin-right: 30px;\n}\n.title-text-wrapper.info-title {\n  color: #FFFFFF;\n  background: #5F86FB;\n  padding: 20px 30px;\n  border-radius: 3px 3px 0 0;\n}\n.title-text-wrapper .right {\n  float: right;\n}\n.title-text-wrapper .inline-select {\n  display: inline-block;\n}\n.title-text-wrapper .inline-select .button-group {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n@media (max-width: 768px) {\n  .title-text-wrapper {\n    padding-bottom: 15px;\n  }\n  .title-text-wrapper.table-title {\n    padding: 20px 15px;\n  }\n  .title-text-wrapper.info-title {\n    padding: 20px 10px;\n  }\n}\n"],sourceRoot:""}])},306:function(t,e,n){"use strict";var a,i=n(0),l=(n.n(i),n(29)),r=n(50),o=n.n(r),p=n(307),s=(n.n(p),this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})),A=this&&this.__decorate||function(t,e,n,a){var i,l=arguments.length,r=l<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(r=(l<3?i(r):l>3?i(e,n,r):i(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r},c=function(t){function e(e){var n=t.call(this,e)||this;return n.tableThKeys=n.props.tableTh.map(function(t){return t.key}),n}return s(e,t),e.prototype.render=function(){var t,e=this,n="table-wrap";return this.props.className&&(n=o()("table-wrap",((t={})[this.props.className]=!!this.props.className,t))),i.createElement("div",{className:n},this.props.children,i.createElement("div",{className:"table-content"},i.createElement("div",{className:"table-th"},i.createElement("ul",null,this.props.tableTh.map(function(t,e){return i.createElement("li",{key:e},t.name)}))),i.createElement("div",{className:"table-body"},i.createElement("ul",null,this.props.tableData.map(function(t,n){return i.createElement("li",{key:n},e.tableThKeys.map(function(n,a){if(!e.props.render)return i.createElement("span",{key:a},t[n]);var l=e.props.render(t[n],n,t);return l?i.createElement(i.Fragment,{key:a},l):i.createElement("span",{key:a},t[n])}))})))),i.createElement("div",{className:"mobile-table-content"},i.createElement("div",{className:"table-body"},i.createElement("ul",null,this.props.tableData.map(function(t,n){return i.createElement("li",{key:n},e.tableThKeys.map(function(e,n){return i.createElement("div",{className:"table-line",key:n},i.createElement("span",{className:"line-title"},e),i.createElement("span",{className:"line-content"},t[e]))}))})))))},e=A([l.c],e)}(i.Component);e.a=c},307:function(t,e,n){var a=n(308);"string"===typeof a&&(a=[[t.i,a,""]]);var i={hmr:!1,transform:void 0};n(288)(a,i);a.locals&&(t.exports=a.locals)},308:function(t,e,n){(t.exports=n(287)(!0)).push([t.i,".table-wrap{background:#fff}.table-wrap .table-content{display:block}.table-wrap .table-content .table-th{border-bottom:3px solid #ececec;padding:0 15px}.table-wrap .table-content .table-th ul{display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 0}.table-wrap .table-content .table-th ul li{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;text-align:center;font-size:12px;font-family:NotoSansHans-Regular}.table-wrap .table-content .table-th ul li.addr-text{min-width:315px}.table-wrap .table-content .table-body ul li{border-bottom:1px solid #ececec;padding:20px 0;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:54px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 15px}.table-wrap .table-content .table-body ul li span{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;font-size:14px;font-family:NotoSansHans-Regular}.table-wrap .table-content .table-body ul li span.img-text{text-align:left;text-indent:.25rem}.table-wrap .table-content .table-body ul li span.img-text-bg{text-align:left;text-indent:.95rem}.table-wrap .table-content .table-body ul li span.tran-img-text{text-align:left;text-indent:1rem}.table-wrap .table-content .table-body ul li span.addr-text{min-width:315px}.table-wrap .table-content .table-body ul li span.small-font{font-size:12px}.table-wrap .table-content .table-body ul li span a{color:#5f86fb}.table-wrap .table-content .table-body ul li span a:hover{color:#b6c9ff;text-decoration:underline}.table-wrap .table-content .table-body ul li span img{width:20px;height:20px;vertical-align:middle;margin-right:5px;border:none}.table-wrap .mobile-table-content{display:none}@media (max-width:768px){.table-wrap .table-content{display:none}.table-wrap .mobile-table-content{display:block;margin-bottom:30px}.table-wrap .mobile-table-content .table-body ul li{padding:20px 10px;border-bottom:1px solid #ececec}.table-wrap .mobile-table-content .table-body ul li .table-line{font-size:12px;margin-bottom:20px}.table-wrap .mobile-table-content .table-body ul li .table-line .line-title{display:inline-block;vertical-align:middle;text-align:left;width:85px;color:#b2b2b2}.table-wrap .mobile-table-content .table-body ul li .table-line .line-content{display:inline-block;vertical-align:middle;text-align:left}.table-wrap .mobile-table-content .table-body ul li .table-line:last-child{margin-bottom:0}}","",{version:3,sources:["/Users/yinhuang/demo/new-browser-private/src/components/Table/index.less"],names:[],mappings:"AAAA,YACE,eAAoB,CACrB,AACD,2BACE,aAAe,CAChB,AACD,qCACE,gCAAiC,AACjC,cAAgB,CACjB,AACD,wCACE,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,cAAgB,CACjB,AACD,2CACE,iBAAkB,AACd,aAAc,AACV,SAAU,AAClB,kBAAmB,AACnB,eAAgB,AAChB,gCAAkC,CACnC,AACD,qDACE,eAAiB,CAClB,AACD,6CACE,gCAAiC,AACjC,eAAgB,AAChB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,kBAAmB,AACnB,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,8BAA+B,AACvB,sBAAuB,AAC/B,cAAgB,CACjB,AACD,kDACE,iBAAkB,AACd,aAAc,AACV,SAAU,AAClB,eAAgB,AAChB,gCAAkC,CACnC,AACD,2DACE,gBAAiB,AACjB,kBAAqB,CACtB,AACD,8DACE,gBAAiB,AACjB,kBAAqB,CACtB,AACD,gEACE,gBAAiB,AACjB,gBAAkB,CACnB,AACD,4DACE,eAAiB,CAClB,AACD,6DACE,cAAgB,CACjB,AACD,oDACE,aAAe,CAChB,AACD,0DACE,cAAe,AACf,yBAA2B,CAC5B,AACD,sDACE,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,iBAAkB,AAClB,WAAa,CACd,AACD,kCACE,YAAc,CACf,AACD,yBACE,2BACE,YAAc,CACf,AACD,kCACE,cAAe,AACf,kBAAoB,CACrB,AACD,oDACE,kBAAmB,AACnB,+BAAiC,CAClC,AACD,gEACE,eAAgB,AAChB,kBAAoB,CACrB,AACD,4EACE,qBAAsB,AACtB,sBAAuB,AACvB,gBAAiB,AACjB,WAAY,AACZ,aAAe,CAChB,AACD,8EACE,qBAAsB,AACtB,sBAAuB,AACvB,eAAiB,CAClB,AACD,2EACE,eAAiB,CAClB,CACF",file:"index.less",sourcesContent:[".table-wrap {\n  background: #FFFFFF;\n}\n.table-wrap .table-content {\n  display: block;\n}\n.table-wrap .table-content .table-th {\n  border-bottom: 3px solid #ECECEC;\n  padding: 0 15px;\n}\n.table-wrap .table-content .table-th ul {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 0;\n}\n.table-wrap .table-content .table-th ul li {\n  -webkit-flex: 1 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  text-align: center;\n  font-size: 12px;\n  font-family: NotoSansHans-Regular;\n}\n.table-wrap .table-content .table-th ul li.addr-text {\n  min-width: 315px;\n}\n.table-wrap .table-content .table-body ul li {\n  border-bottom: 1px solid #ECECEC;\n  padding: 20px 0;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 54px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 15px;\n}\n.table-wrap .table-content .table-body ul li span {\n  -webkit-flex: 1 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  font-size: 14px;\n  font-family: NotoSansHans-Regular;\n}\n.table-wrap .table-content .table-body ul li span.img-text {\n  text-align: left;\n  text-indent: 0.25rem;\n}\n.table-wrap .table-content .table-body ul li span.img-text-bg {\n  text-align: left;\n  text-indent: 0.95rem;\n}\n.table-wrap .table-content .table-body ul li span.tran-img-text {\n  text-align: left;\n  text-indent: 1rem;\n}\n.table-wrap .table-content .table-body ul li span.addr-text {\n  min-width: 315px;\n}\n.table-wrap .table-content .table-body ul li span.small-font {\n  font-size: 12px;\n}\n.table-wrap .table-content .table-body ul li span a {\n  color: #5F86FB;\n}\n.table-wrap .table-content .table-body ul li span a:hover {\n  color: #B6C9FF;\n  text-decoration: underline;\n}\n.table-wrap .table-content .table-body ul li span img {\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  margin-right: 5px;\n  border: none;\n}\n.table-wrap .mobile-table-content {\n  display: none;\n}\n@media (max-width: 768px) {\n  .table-wrap .table-content {\n    display: none;\n  }\n  .table-wrap .mobile-table-content {\n    display: block;\n    margin-bottom: 30px;\n  }\n  .table-wrap .mobile-table-content .table-body ul li {\n    padding: 20px 10px;\n    border-bottom: 1px solid #ECECEC;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line {\n    font-size: 12px;\n    margin-bottom: 20px;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line .line-title {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: left;\n    width: 85px;\n    color: #B2B2B2;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line .line-content {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: left;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line:last-child {\n    margin-bottom: 0;\n  }\n}\n"],sourceRoot:""}])},310:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(t,e,n){var a=i(e.toString()),l=new Date(a);if("en"===n)return new Date(a).toUTCString();var r=function(t){return{"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()}}(l);for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(l.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return t},i=function(t){return 10===t.length?1e3*parseInt(t,10):parseInt(t,10)}},336:function(t,e,n){var a=n(337);"string"===typeof a&&(a=[[t.i,a,""]]);var i={hmr:!1,transform:void 0};n(288)(a,i);a.locals&&(t.exports=a.locals)},337:function(t,e,n){(t.exports=n(287)(!0)).push([t.i,".transaction-page,.transactioninfo-page{width:10.88rem;min-width:1088px;padding:0 20px;margin:0 auto;margin-top:1.38rem;margin-bottom:1rem}.transactioninfo-input-output{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.transactioninfo-input-output .input-wrapper,.transactioninfo-input-output .output-wrapper{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1}.transactioninfo-input-output .input-wrapper{margin-right:20px}.transaction-page .transaction-table{background:#fff;-webkit-box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);border-radius:3px}","",{version:3,sources:["/Users/yinhuang/demo/new-browser-private/src/containers/transaction/index.less"],names:[],mappings:"AAAA,wCAEE,eAAgB,AAChB,iBAAkB,AAClB,eAAgB,AAChB,cAAe,AACf,mBAAoB,AACpB,kBAAoB,CACrB,AACD,8BACE,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,+BAAgC,AAC5B,qBAAsB,AAClB,sBAAwB,CACjC,AACD,2FAEE,iBAAkB,AACd,aAAc,AACV,QAAU,CACnB,AACD,6CACE,iBAAmB,CACpB,AACD,qCACE,gBAAiB,AACjB,kDAA0D,AAClD,0CAAkD,AAC1D,iBAAmB,CACpB",file:"index.less",sourcesContent:[".transaction-page,\n.transactioninfo-page {\n  width: 10.88rem;\n  min-width: 1088px;\n  padding: 0 20px;\n  margin: 0 auto;\n  margin-top: 1.38rem;\n  margin-bottom: 1rem;\n}\n.transactioninfo-input-output {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.transactioninfo-input-output .input-wrapper,\n.transactioninfo-input-output .output-wrapper {\n  -webkit-flex: 1 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n}\n.transactioninfo-input-output .input-wrapper {\n  margin-right: 20px;\n}\n.transaction-page .transaction-table {\n  background: #fff;\n  -webkit-box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n          box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n  border-radius: 3px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=8.00ec3490.chunk.js.map