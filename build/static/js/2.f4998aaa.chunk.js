webpackJsonp([2],{299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,A=n(0),l=(n.n(A),n(29)),o=n(303),i=n(306),r=n(339),p=(n.n(r),n(310)),s=n(93),c=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=this&&this.__decorate||function(e,t,n,a){var A,l=arguments.length,o=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(A=e[i])&&(o=(l<3?A(o):l>3?A(t,n,o):A(t,n))||o);return l>3&&o&&Object.defineProperty(t,n,o),o},m=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))(function(A,l){function o(e){try{r(a.next(e))}catch(e){l(e)}}function i(e){try{r(a.throw(e))}catch(e){l(e)}}function r(e){e.done?A(e.value):new n(function(t){t(e.value)}).then(o,i)}r((a=a.apply(e,t||[])).next())})},g=this&&this.__generator||function(e,t){var n,a,A,l,o={label:0,sent:function(){if(1&A[0])throw A[1];return A[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(A=2&l[0]?a.return:l[0]?a.throw||((A=a.return)&&A.call(a),0):a.next)&&!(A=A.call(a,l[1])).done)return A;switch(a=0,A&&(l=[2&l[0],A.value]),l[0]){case 0:case 1:A=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(A=(A=o.trys).length>0&&A[A.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!A||l[1]>A[0]&&l[1]<A[3])){o.label=l[1];break}if(6===l[0]&&o.label<A[1]){o.label=A[1],A=l;break}if(A&&o.label<A[2]){o.label=A[2],o.ops.push(l);break}A[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=A=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isTop:!1,isBottom:!1},t.blockTransTableTh=[{name:"Type",key:"type"},{name:"TXID",key:"txid"},{name:"Version",key:"version"},{name:"Size",key:"size"}],t.imgs={contract:n(319),claim:n(320),invocation:n(321),miner:n(322),issue:n(323),register:n(324),publish:n(325),enrollment:n(326),agency:n(327)},t.getInfos=function(e){return t.props.block.getBlockInfo(e)},t.onGoBack=function(){t.props.history.push("/blocks/")},t.goPreviousBlock=function(){return m(t,void 0,void 0,function(){var e,t,n;return g(this,function(a){switch(a.label){case 0:return this.state.isTop?[2,!1]:(e=this.props.block.blockInfo?this.props.block.blockInfo.index-1:0,this.props.history.push("/block/"+e),[4,this.getInfos(e)]);case 1:return t=a.sent(),n={isBottom:!1},t||(n.isTop=!0),this.setState(n),[2,!0]}})})},t.goNextBlock=function(){return m(t,void 0,void 0,function(){var e,t,n;return g(this,function(a){switch(a.label){case 0:return this.state.isBottom?[2,!1]:(e=this.props.block.blockInfo?this.props.block.blockInfo.index+1:0,this.props.history.push("/block/"+e),[4,this.getInfos(e)]);case 1:return t=a.sent(),n={isTop:!1},t||(n.isBottom=!0),this.setState(n),[2,!0]}})})},t.renderTran=function(e,n){return"type"===n?(e=e.replace("Transaction",""),A.createElement("span",{className:"tran-img-text"},A.createElement("img",{src:t.imgs[e.toLowerCase()],alt:""}),e)):"txid"===n?(e=e.replace(/^(.{4})(.*)(.{4})$/,"$1...$3"),A.createElement("span",null,A.createElement("a",{href:"#"},e))):"size"===n?A.createElement("span",null,e," bytes"):null},t}return c(t,e),t.prototype.componentDidMount=function(){var e=this.props.match.params;this.getInfos(e.index)},t.prototype.render=function(){return A.createElement("div",{className:"blockinfo-page"},A.createElement("div",{className:"goback-wrapper"},A.createElement("span",{className:"goback-text",onClick:this.onGoBack},"<<  Go back")),A.createElement("div",{className:"info-content"},A.createElement(o.a,{text:"Block information",isInfoTitle:!0}),A.createElement("div",{className:"info-list"},A.createElement("ul",null,A.createElement("li",null,A.createElement("span",{className:"type-name"},"Block height"),A.createElement("span",{className:"type-content"},this.props.block.blockInfo&&this.props.block.blockInfo.index)),A.createElement("li",null,A.createElement("span",{className:"type-name"},"Hash"),A.createElement("span",{className:"type-content"},this.props.block.blockInfo&&this.props.block.blockInfo.hash)),A.createElement("li",null,A.createElement("span",{className:"type-name"},"Time"),A.createElement("span",{className:"type-content"},this.props.block.blockInfo&&p.a("yyyy/MM/dd | hh:mm:ss",this.props.block.blockInfo.time.toString(),this.props.intl.locale))),A.createElement("li",null,A.createElement("span",{className:"type-name"},"Size"),A.createElement("span",{className:"type-content"},this.props.block.blockInfo&&this.props.block.blockInfo.size)),A.createElement("li",null,A.createElement("span",{className:"type-name"},"Previous Block"),A.createElement("span",{className:"type-content"},A.createElement("a",{onClick:this.goPreviousBlock,href:"javascript:;"},this.props.block.blockInfo&&this.props.block.blockInfo.index-1))),A.createElement("li",null,A.createElement("span",{className:"type-name"},"Next Block"),A.createElement("span",{className:"type-content"},A.createElement("a",{onClick:this.goNextBlock,href:"javascript:;"},this.props.block.blockInfo&&this.props.block.blockInfo.index+1)))))),A.createElement(o.a,{text:"Transactions"}),A.createElement("div",{className:"blockinfo-tran-table"},A.createElement(i.a,{tableTh:this.blockTransTableTh,tableData:this.props.block.blockInfo?this.props.block.blockInfo.tx:[],render:this.renderTran})))},t=b([Object(l.b)("block"),l.c],t)}(A.Component);t.default=Object(s.c)(C)},303:function(e,t,n){"use strict";var a,A=n(0),l=(n.n(A),n(304)),o=(n.n(l),n(50)),i=n.n(o),r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=i()("title-text-wrapper",{"info-title":!!this.props.isInfoTitle&&this.props.isInfoTitle,"table-title":!!this.props.isTableTitle&&this.props.isTableTitle});return A.createElement("div",{className:e},A.createElement("h3",null,this.props.img&&A.createElement("img",{src:this.props.img,alt:""}),this.props.text),!this.props.isInline&&A.createElement("div",{className:"right"},this.props.children),this.props.isInline&&A.createElement("div",{className:"inline-select"},this.props.children))},t}(A.Component);t.a=p},304:function(e,t,n){var a=n(305);"string"===typeof a&&(a=[[e.i,a,""]]);var A={hmr:!1,transform:void 0};n(288)(a,A);a.locals&&(e.exports=a.locals)},305:function(e,t,n){(e.exports=n(287)(!0)).push([e.i,".title-text-wrapper{padding-bottom:20px;position:relative}.title-text-wrapper img{width:20px;height:20px;margin-right:10px}.title-text-wrapper.table-title{padding:20px;border-bottom:3px solid #ececec;color:#333}.title-text-wrapper.table-title img{width:20px;height:20px;margin-right:10px}.title-text-wrapper h3{font-size:20px;display:inline-block;font-weight:500;font-family:NotoSansHans-Medium;margin-right:30px}.title-text-wrapper.info-title{color:#fff;background:#5f86fb;padding:20px 30px;border-radius:3px 3px 0 0}.title-text-wrapper .right{float:right}.title-text-wrapper .inline-select{display:inline-block}.title-text-wrapper .inline-select .button-group{position:absolute;top:20px;right:20px}@media (max-width:768px){.title-text-wrapper{padding-bottom:15px}.title-text-wrapper.table-title{padding:20px 15px}.title-text-wrapper.info-title{padding:20px 10px}}","",{version:3,sources:["/Users/yinhuang/demo/new-browser-private/src/components/titletext/index.less"],names:[],mappings:"AAAA,oBACE,oBAAqB,AACrB,iBAAmB,CACpB,AACD,wBACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,gCACE,aAAc,AACd,gCAAiC,AACjC,UAAY,CACb,AACD,oCACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,uBACE,eAAgB,AAChB,qBAAsB,AACtB,gBAAiB,AACjB,gCAAiC,AACjC,iBAAmB,CACpB,AACD,+BACE,WAAe,AACf,mBAAoB,AACpB,kBAAmB,AACnB,yBAA2B,CAC5B,AACD,2BACE,WAAa,CACd,AACD,mCACE,oBAAsB,CACvB,AACD,iDACE,kBAAmB,AACnB,SAAU,AACV,UAAY,CACb,AACD,yBACE,oBACE,mBAAqB,CACtB,AACD,gCACE,iBAAmB,CACpB,AACD,+BACE,iBAAmB,CACpB,CACF",file:"index.less",sourcesContent:[".title-text-wrapper {\n  padding-bottom: 20px;\n  position: relative;\n}\n.title-text-wrapper img {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.title-text-wrapper.table-title {\n  padding: 20px;\n  border-bottom: 3px solid #ECECEC;\n  color: #333;\n}\n.title-text-wrapper.table-title img {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.title-text-wrapper h3 {\n  font-size: 20px;\n  display: inline-block;\n  font-weight: 500;\n  font-family: NotoSansHans-Medium;\n  margin-right: 30px;\n}\n.title-text-wrapper.info-title {\n  color: #FFFFFF;\n  background: #5F86FB;\n  padding: 20px 30px;\n  border-radius: 3px 3px 0 0;\n}\n.title-text-wrapper .right {\n  float: right;\n}\n.title-text-wrapper .inline-select {\n  display: inline-block;\n}\n.title-text-wrapper .inline-select .button-group {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n@media (max-width: 768px) {\n  .title-text-wrapper {\n    padding-bottom: 15px;\n  }\n  .title-text-wrapper.table-title {\n    padding: 20px 15px;\n  }\n  .title-text-wrapper.info-title {\n    padding: 20px 10px;\n  }\n}\n"],sourceRoot:""}])},306:function(e,t,n){"use strict";var a,A=n(0),l=(n.n(A),n(29)),o=n(50),i=n.n(o),r=n(307),p=(n.n(r),this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})),s=this&&this.__decorate||function(e,t,n,a){var A,l=arguments.length,o=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(A=e[i])&&(o=(l<3?A(o):l>3?A(t,n,o):A(t,n))||o);return l>3&&o&&Object.defineProperty(t,n,o),o},c=function(e){function t(t){var n=e.call(this,t)||this;return n.tableThKeys=n.props.tableTh.map(function(e){return e.key}),n}return p(t,e),t.prototype.render=function(){var e,t=this,n="table-wrap";return this.props.className&&(n=i()("table-wrap",((e={})[this.props.className]=!!this.props.className,e))),A.createElement("div",{className:n},this.props.children,A.createElement("div",{className:"table-content"},A.createElement("div",{className:"table-th"},A.createElement("ul",null,this.props.tableTh.map(function(e,t){return A.createElement("li",{key:t},e.name)}))),A.createElement("div",{className:"table-body"},A.createElement("ul",null,this.props.tableData.map(function(e,n){return A.createElement("li",{key:n},t.tableThKeys.map(function(n,a){if(!t.props.render)return A.createElement("span",{key:a},e[n]);var l=t.props.render(e[n],n,e);return l?A.createElement(A.Fragment,{key:a},l):A.createElement("span",{key:a},e[n])}))})))),A.createElement("div",{className:"mobile-table-content"},A.createElement("div",{className:"table-body"},A.createElement("ul",null,this.props.tableData.map(function(e,n){return A.createElement("li",{key:n},t.tableThKeys.map(function(t,n){return A.createElement("div",{className:"table-line",key:n},A.createElement("span",{className:"line-title"},t),A.createElement("span",{className:"line-content"},e[t]))}))})))))},t=s([l.c],t)}(A.Component);t.a=c},307:function(e,t,n){var a=n(308);"string"===typeof a&&(a=[[e.i,a,""]]);var A={hmr:!1,transform:void 0};n(288)(a,A);a.locals&&(e.exports=a.locals)},308:function(e,t,n){(e.exports=n(287)(!0)).push([e.i,".table-wrap{background:#fff}.table-wrap .table-content{display:block}.table-wrap .table-content .table-th{border-bottom:3px solid #ececec;padding:0 15px}.table-wrap .table-content .table-th ul{display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 0}.table-wrap .table-content .table-th ul li{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;text-align:center;font-size:12px;font-family:NotoSansHans-Regular}.table-wrap .table-content .table-th ul li.addr-text{min-width:315px}.table-wrap .table-content .table-body ul li{border-bottom:1px solid #ececec;padding:20px 0;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:54px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 15px}.table-wrap .table-content .table-body ul li span{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;font-size:14px;font-family:NotoSansHans-Regular}.table-wrap .table-content .table-body ul li span.img-text{text-align:left;text-indent:.25rem}.table-wrap .table-content .table-body ul li span.img-text-bg{text-align:left;text-indent:.95rem}.table-wrap .table-content .table-body ul li span.tran-img-text{text-align:left;text-indent:1rem}.table-wrap .table-content .table-body ul li span.addr-text{min-width:315px}.table-wrap .table-content .table-body ul li span.small-font{font-size:12px}.table-wrap .table-content .table-body ul li span a{color:#5f86fb}.table-wrap .table-content .table-body ul li span a:hover{color:#b6c9ff;text-decoration:underline}.table-wrap .table-content .table-body ul li span img{width:20px;height:20px;vertical-align:middle;margin-right:5px;border:none}.table-wrap .mobile-table-content{display:none}@media (max-width:768px){.table-wrap .table-content{display:none}.table-wrap .mobile-table-content{display:block;margin-bottom:30px}.table-wrap .mobile-table-content .table-body ul li{padding:20px 10px;border-bottom:1px solid #ececec}.table-wrap .mobile-table-content .table-body ul li .table-line{font-size:12px;margin-bottom:20px}.table-wrap .mobile-table-content .table-body ul li .table-line .line-title{display:inline-block;vertical-align:middle;text-align:left;width:85px;color:#b2b2b2}.table-wrap .mobile-table-content .table-body ul li .table-line .line-content{display:inline-block;vertical-align:middle;text-align:left}.table-wrap .mobile-table-content .table-body ul li .table-line:last-child{margin-bottom:0}}","",{version:3,sources:["/Users/yinhuang/demo/new-browser-private/src/components/Table/index.less"],names:[],mappings:"AAAA,YACE,eAAoB,CACrB,AACD,2BACE,aAAe,CAChB,AACD,qCACE,gCAAiC,AACjC,cAAgB,CACjB,AACD,wCACE,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,cAAgB,CACjB,AACD,2CACE,iBAAkB,AACd,aAAc,AACV,SAAU,AAClB,kBAAmB,AACnB,eAAgB,AAChB,gCAAkC,CACnC,AACD,qDACE,eAAiB,CAClB,AACD,6CACE,gCAAiC,AACjC,eAAgB,AAChB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,kBAAmB,AACnB,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,8BAA+B,AACvB,sBAAuB,AAC/B,cAAgB,CACjB,AACD,kDACE,iBAAkB,AACd,aAAc,AACV,SAAU,AAClB,eAAgB,AAChB,gCAAkC,CACnC,AACD,2DACE,gBAAiB,AACjB,kBAAqB,CACtB,AACD,8DACE,gBAAiB,AACjB,kBAAqB,CACtB,AACD,gEACE,gBAAiB,AACjB,gBAAkB,CACnB,AACD,4DACE,eAAiB,CAClB,AACD,6DACE,cAAgB,CACjB,AACD,oDACE,aAAe,CAChB,AACD,0DACE,cAAe,AACf,yBAA2B,CAC5B,AACD,sDACE,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,iBAAkB,AAClB,WAAa,CACd,AACD,kCACE,YAAc,CACf,AACD,yBACE,2BACE,YAAc,CACf,AACD,kCACE,cAAe,AACf,kBAAoB,CACrB,AACD,oDACE,kBAAmB,AACnB,+BAAiC,CAClC,AACD,gEACE,eAAgB,AAChB,kBAAoB,CACrB,AACD,4EACE,qBAAsB,AACtB,sBAAuB,AACvB,gBAAiB,AACjB,WAAY,AACZ,aAAe,CAChB,AACD,8EACE,qBAAsB,AACtB,sBAAuB,AACvB,eAAiB,CAClB,AACD,2EACE,eAAiB,CAClB,CACF",file:"index.less",sourcesContent:[".table-wrap {\n  background: #FFFFFF;\n}\n.table-wrap .table-content {\n  display: block;\n}\n.table-wrap .table-content .table-th {\n  border-bottom: 3px solid #ECECEC;\n  padding: 0 15px;\n}\n.table-wrap .table-content .table-th ul {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 0;\n}\n.table-wrap .table-content .table-th ul li {\n  -webkit-flex: 1 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  text-align: center;\n  font-size: 12px;\n  font-family: NotoSansHans-Regular;\n}\n.table-wrap .table-content .table-th ul li.addr-text {\n  min-width: 315px;\n}\n.table-wrap .table-content .table-body ul li {\n  border-bottom: 1px solid #ECECEC;\n  padding: 20px 0;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 54px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 15px;\n}\n.table-wrap .table-content .table-body ul li span {\n  -webkit-flex: 1 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  font-size: 14px;\n  font-family: NotoSansHans-Regular;\n}\n.table-wrap .table-content .table-body ul li span.img-text {\n  text-align: left;\n  text-indent: 0.25rem;\n}\n.table-wrap .table-content .table-body ul li span.img-text-bg {\n  text-align: left;\n  text-indent: 0.95rem;\n}\n.table-wrap .table-content .table-body ul li span.tran-img-text {\n  text-align: left;\n  text-indent: 1rem;\n}\n.table-wrap .table-content .table-body ul li span.addr-text {\n  min-width: 315px;\n}\n.table-wrap .table-content .table-body ul li span.small-font {\n  font-size: 12px;\n}\n.table-wrap .table-content .table-body ul li span a {\n  color: #5F86FB;\n}\n.table-wrap .table-content .table-body ul li span a:hover {\n  color: #B6C9FF;\n  text-decoration: underline;\n}\n.table-wrap .table-content .table-body ul li span img {\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  margin-right: 5px;\n  border: none;\n}\n.table-wrap .mobile-table-content {\n  display: none;\n}\n@media (max-width: 768px) {\n  .table-wrap .table-content {\n    display: none;\n  }\n  .table-wrap .mobile-table-content {\n    display: block;\n    margin-bottom: 30px;\n  }\n  .table-wrap .mobile-table-content .table-body ul li {\n    padding: 20px 10px;\n    border-bottom: 1px solid #ECECEC;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line {\n    font-size: 12px;\n    margin-bottom: 20px;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line .line-title {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: left;\n    width: 85px;\n    color: #B2B2B2;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line .line-content {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: left;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line:last-child {\n    margin-bottom: 0;\n  }\n}\n"],sourceRoot:""}])},310:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e,t,n){var a=A(t.toString()),l=new Date(a);if("en"===n)return new Date(a).toUTCString();var o=function(e){return{"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()}}(l);for(var i in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(l.getFullYear()+"").substr(4-RegExp.$1.length))),o)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?o[i]:("00"+o[i]).substr((""+o[i]).length)));return e},A=function(e){return 10===e.length?1e3*parseInt(e,10):parseInt(e,10)}},319:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoAgMAAADxkFD+AAAADFBMVEUAAAA0NDQ0NDQzMzPCChFqAAAAA3RSTlMA40mAJZ3FAAAAK0lEQVQY02MgCcz/DwbfgMx6CPMvkPkfCohi8n8AGYTMHJEmIIIPEaikAABlgtVTCuGwJgAAAABJRU5ErkJggg=="},320:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAUVBMVEUAAAAzMzM2NjYzMzM0NDQ0NDQzMzMzMzMzMzMzMzM0NDQ0NDQ0NDQ0NDQ2NjY0NDQzMzM0NDQzMzM0NDQ0NDQzMzM1NTU9PT0zMzM5OTkzMzNG7iT2AAAAGnRSTlMA5xzypu3SnuDcubGTWjQnx6yMgFNGPhUUCWyiJSgAAACvSURBVDjL5MxJDoMwEERRN+15wGGGuv9BgxUJZ2HYR/mrLumpxW+l6BXXOtf4ItWEFme6/4xel2WbcIAZGZjLPQM8GgxNmOCO3QD9+Q8w++GQRDMNv4kAXa4gNl+uZpnAMTGWBZwig7K4qQsoGYNS6MR9efKWnWPrp9x8JQk1IVAj2X05BbRhSVUp8QQhL0jPkC6IZ4g/h+9RDQwGzwwFhYQSLqlZgXDmIjq7DhUAAATXR3MF0JKrAAAAAElFTkSuQmCC"},321:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAFVBMVEUAAAAzMzMzMzM0NDQzMzM1NTUzMzN14OWvAAAABnRSTlMAtul7Rj8St7aYAAAAYElEQVQoz2OgNQhUEsUQY05LSzNAF3QDCqagC4oBBROh7DQ0gEMQUzthixBOwnQ8YcAqpBiAIWiWlpaMLsYCcqEDmiAjSFAAyCDdmwjthC1COAnT8fSLRhK9Sa9opBwAAF6WRu021/BtAAAAAElFTkSuQmCC"},322:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAATlBMVEUAAAAzMzM1NTVEREQ0NDQ0NDQzMzM0NDQ1NTUzMzM0NDQ3NzczMzM0NDQzMzMzMzMzMzMzMzM1NTU2NjY3Nzc+Pj5JSUk0NDQ1NTUzMzNbuNpAAAAAGXRSTlMA8xgF2cCogCbe5BJAzseWlVZRRzgMB4otZ1sL6wAAARtJREFUOMvVVNmOwjAMXDfN2fSmwPz/j+7GWsUtoUTwxjxErTWyx+fP90Gtk26JWj2t6gWtGQkZNDYntKsloLfRbZuLtgfIXp+6GwDj5N8ZYHji9B7gL0fTxSPcC38Buns0dhqhedA3QCtOezYpaxPZrDSGo04Lz/4Wj4TsqPOwh8AE1nfDP5asE7QPPsIceBC5BqPwFMGluMgQLw4kPVrRJ7oX4ixeeqz5e2LFMwShY+mR85wyUSOymj1zbrolJOUROhNbOH4LtCyyzUTCxm8B+jNvoHeJ9dBFMgUkmZPySDmlPGXBBV5JwYsW7rFIC4uh2OMmQ3EyZsKTMTsZXMAvMrivVmFWsgofLFd9XesH4IOTUj9S9bP3dfgFs3wqTHIbymMAAAAASUVORK5CYII="},323:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAOVBMVEUAAABJSUkzMzM1NTUzMzMzMzMzMzMzMzM0NDQ0NDQzMzM2NjY2NjY0NDQ0NDQ0NDQzMzM1NTUzMzMJTL1OAAAAEnRSTlMAB5UY9fHkx9m/gkctz49/VSKbGMXwAAAAxElEQVQ4y9WUSQ7DIAxFwZg547//YatsgqhjV+oub/1kgyf3PnynWti5vB3e0AJFXDgHINKpRWsMDBHg3T+Gy8AsAmuQ3pIgRaRFxEuQ4mV+xfQZzyLW+Z0Nmoh9Ssy6yKcbEHQRNDwfLTGOV3ZYIo6R2Ra3W6y2mG+xCFGB/xIlUaRWKOIzClWUR4FEwRW6aOFAaaGdm+YxU+EwD65KU1dhJnttuWZSUNd19hbrAAxyME7KgJs3jtRNpPDz7HGp1L17HR/dWjJS9Jcs9AAAAABJRU5ErkJggg=="},324:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAZlBMVEUAAAA0NDQ0NDQ0NDQzMzM4ODgzMzMzMzMzMzMzMzMzMzM0NDQzMzMzMzMzMzM0NDQ0NDQ2NjY1NTUzMzNDQ0NAQEAzMzM0NDQzMzM0NDQ0NDQ1NTUzMzM1NTU0NDQ4ODg5OTkzMzOHAxzOAAAAIXRSTlMA40lZGRLy6eTbo1H898m2ejsyJwkG0MCqmY2DcmZKIBu2DVdLAAAAx0lEQVQ4y9WUxw7DMAxDJSfO3qN75f9/sjLQoPWhFoueopuoBxgyKNJ2yvDypdh4oM/5pAcugfoF9CuOGAKlLCug4dd+kQLyul/8B9ga7OlqJGyZExH0Paklgj78Shi4IxDsZTQC4MGNWh2s7zK5Ae45y2DOdTCbZHAB/BiJbhPdj43TjoAfBxGGSvdj4QZ73WZJLHoJ+LETeWL9FPJZ5A44rlK6R6Kfa+36AgiAVKQeSYpcNs7WJhRSjS3eIRWKvSz9jL3N1BPwkFtzfvA66AAAAABJRU5ErkJggg=="},325:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAhFBMVEUAAAA0NDQzMzMzMzNISEgzMzMzMzM0NDQ0NDQzMzM0NDQ0NDQ6OjozMzMzMzMzMzMzMzMzMzM0NDQ1NTU9PT0zMzMzMzMzMzMzMzM0NDQzMzM0NDQzMzMzMzMzMzMzMzMzMzMzMzM0NDQzMzM0NDQ0NDQ1NTUzMzM5OTk0NDQ3NzczMzPn0ePiAAAAK3RSTlMASvvwBOaaUfbchjEW07CifnVaRQzYzsa9q3FkPSLq4L66jHldNS0eEsolwi/uYgAAAPxJREFUOMvtkdtygyAURSmoiHjXRBNzv7f7//+vpZTSpAr5gKwXDjNrNszZ5MUYQVMmfus65GHGPjxRq0MGus/gDEyHBQPQFzHCdjoqmUMxK9V5mog6qSgFOx4ogG7MOpfv+IFGXEBxfpRudbHBL/tVpIfo3pJlR2ERnId6YumdV2/xB1ZdF2Zekgf4zn4uHZi5zALyj0sU44v+su5teEPGuFVbwYMqtl4+uepAzmGhazKFpLC4Sn4LYQlbh5jBUhOHKGxkR1wichikWyximJLd4qYwJXtEHE3JHpHJnS7ZI9KGcF2yR1S7E6pkD98PLnXJfto4Ic9RteSF5hP+dDAWUUq56wAAAABJRU5ErkJggg=="},326:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAIVBMVEUAAAA1NTUzMzM0NDQ0NDQ3NzczMzM0NDQ2NjYzMzMzMzPzkFPQAAAACnRSTlMAZkrjmTPChT0UQaxkEQAAAFNJREFUKM9joA1QXoUCjMCCVqiCi8GCq9AAvQUVIA5mwipIH9uZsApSbtFywSxMwaUMXqQLIkyUZGgUzEIVXArmehESRGinqpMQ3sRMYNiTIk0AAERhKeLGqpC/AAAAAElFTkSuQmCC"},327:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAaVBMVEUAAAA0NDQ0NDREREQ0NDQzMzM4ODg9PT0zMzMzMzMzMzNubm4zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0NDQzMzM+Pj4zMzMzMzM0NDQ0NDQzMzM0NDQ0NDQzMzM0NDQ0NDQzMzO521rgAAAAInRSTlMA40AHR/sZBfV+OQLw59fSxLOtp45oXBDr28vBm4RsUCwnVVXkzgAAAL1JREFUOMvllNkOgyAQRZHdfa/dF/7/I2umiGBV+qjpSeABDoEZkov2Ag3UCgE1IngrphGVh62Ienb4WdxaMf9dNRaCaLo7m4pZZsQHsqDSFcN+Kdciu2IymtHREXE/xI2pwT0VB6R5BbaYRHA6VQOVMHs8t98oKaxdtFfHaKQr7KoZ3CXwB/AMpHTa06Il4srtY7gkNtOGN/Ne+/0zNZ/xKPP9dQqdeCbKJ8KrOcSSN6RKfoaQ8see1LG3E96+bl6peTdaUgAAAABJRU5ErkJggg=="},339:function(e,t,n){var a=n(340);"string"===typeof a&&(a=[[e.i,a,""]]);var A={hmr:!1,transform:void 0};n(288)(a,A);a.locals&&(e.exports=a.locals)},340:function(e,t,n){(e.exports=n(287)(!0)).push([e.i,".block-page,.blockinfo-page{width:10.88rem;min-width:1088px;padding:0 20px;margin:0 auto;margin-top:1.38rem;margin-bottom:1rem}.block-page .block-table,.blockinfo-page .blockinfo-tran-table{background:#fff;-webkit-box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);border-radius:3px}","",{version:3,sources:["/Users/yinhuang/demo/new-browser-private/src/containers/block/index.less"],names:[],mappings:"AAAA,4BAEE,eAAgB,AAChB,iBAAkB,AAClB,eAAgB,AAChB,cAAe,AACf,mBAAoB,AACpB,kBAAoB,CACrB,AAOD,+DACE,gBAAiB,AACjB,kDAA0D,AAClD,0CAAkD,AAC1D,iBAAmB,CACpB",file:"index.less",sourcesContent:[".block-page,\n.blockinfo-page {\n  width: 10.88rem;\n  min-width: 1088px;\n  padding: 0 20px;\n  margin: 0 auto;\n  margin-top: 1.38rem;\n  margin-bottom: 1rem;\n}\n.block-page .block-table {\n  background: #fff;\n  -webkit-box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n          box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n  border-radius: 3px;\n}\n.blockinfo-page .blockinfo-tran-table {\n  background: #fff;\n  -webkit-box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n          box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n  border-radius: 3px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=2.f4998aaa.chunk.js.map