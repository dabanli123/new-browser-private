webpackJsonp([10],{290:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var A,i=e(0),o=(e.n(i),e(303)),a=e(309),r=(e.n(a),this&&this.__extends||(A=function(t,n){return(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}A(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)})),s=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.options=[{id:"time",name:"Auction-starting time"},{id:"price",name:"Highest bid prices"}],n.tableTh=["Domain name","TXid","Highest bid","Highest bidder","Stage"],n.tableData=[{domain:"paycomsoftware.neo",txid:"0x4b...5698",highestbid:"0.1CGAS",highestbidder:"AQ1d...z775",stage:"Auction period"},{domain:"paycomsoftware.neo",txid:"0x4b...5698",highestbid:"0.1CGAS",highestbidder:"AQ1d...z775",stage:"Auction period"},{domain:"paycomsoftware.neo",txid:"0x4b...5698",highestbid:"0.1CGAS",highestbidder:"AQ1d...z775",stage:"Auction period"},{domain:"paycomsoftware.neo",txid:"0x4b...5698",highestbid:"0.1CGAS",highestbidder:"AQ1d...z775",stage:"Auction period"},{domain:"paycomsoftware.neo",txid:"0x4b...5698",highestbid:"0.1CGAS",highestbidder:"AQ1d...z775",stage:"Auction period"},{domain:"paycomsoftware.neo",txid:"0x4b...5698",highestbid:"0.1CGAS",highestbidder:"AQ1d...z775",stage:"Auction period"},{domain:"paycomsoftware.neo",txid:"0x4b...5698",highestbid:"0.1CGAS",highestbidder:"AQ1d...z775",stage:"Auction period"},{domain:"paycomsoftware.neo",txid:"0x4b...5698",highestbid:"0.1CGAS",highestbidder:"AQ1d...z775",stage:"Auction period"}],n}return r(n,t),n.prototype.render=function(){return i.createElement("div",{className:"nnsrank-page"},i.createElement(o.a,{text:"Most valuable domain name rank",img:e(97),isTableTitle:!0}))},n}(i.Component);n.default=s},303:function(t,n,e){"use strict";var A,i=e(0),o=(e.n(i),e(304)),a=(e.n(o),e(50)),r=e.n(a),s=this&&this.__extends||(A=function(t,n){return(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}A(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),p=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return s(n,t),n.prototype.render=function(){var t=r()("title-text-wrapper",{"info-title":!!this.props.isInfoTitle&&this.props.isInfoTitle,"table-title":!!this.props.isTableTitle&&this.props.isTableTitle});return i.createElement("div",{className:t},i.createElement("h3",null,this.props.img&&i.createElement("img",{src:this.props.img,alt:""}),this.props.text),!this.props.isInline&&i.createElement("div",{className:"right"},this.props.children),this.props.isInline&&i.createElement("div",{className:"inline-select"},this.props.children))},n}(i.Component);n.a=p},304:function(t,n,e){var A=e(305);"string"===typeof A&&(A=[[t.i,A,""]]);var i={hmr:!1,transform:void 0};e(288)(A,i);A.locals&&(t.exports=A.locals)},305:function(t,n,e){(t.exports=e(287)(!0)).push([t.i,".title-text-wrapper{padding-bottom:20px;position:relative}.title-text-wrapper img{width:20px;height:20px;margin-right:10px}.title-text-wrapper.table-title{padding:20px;border-bottom:3px solid #ececec;color:#333}.title-text-wrapper.table-title img{width:20px;height:20px;margin-right:10px}.title-text-wrapper h3{font-size:20px;display:inline-block;font-weight:500;font-family:NotoSansHans-Medium;margin-right:30px}.title-text-wrapper.info-title{color:#fff;background:#151a1e;padding:20px 30px;border-radius:3px 3px 0 0}.title-text-wrapper .right{float:right}.title-text-wrapper .inline-select{display:inline-block}.title-text-wrapper .inline-select .button-group{position:absolute;top:20px;right:20px}@media (max-width:768px){.title-text-wrapper{padding-bottom:15px}.title-text-wrapper.table-title{padding:20px 15px}.title-text-wrapper.info-title{padding:20px 10px}}","",{version:3,sources:["/Users/yinhuang/demo/new-browser-private/src/components/titletext/index.less"],names:[],mappings:"AAAA,oBACE,oBAAqB,AACrB,iBAAmB,CACpB,AACD,wBACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,gCACE,aAAc,AACd,gCAAiC,AACjC,UAAY,CACb,AACD,oCACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,uBACE,eAAgB,AAChB,qBAAsB,AACtB,gBAAiB,AACjB,gCAAiC,AACjC,iBAAmB,CACpB,AACD,+BACE,WAAe,AACf,mBAAoB,AACpB,kBAAmB,AACnB,yBAA2B,CAC5B,AACD,2BACE,WAAa,CACd,AACD,mCACE,oBAAsB,CACvB,AACD,iDACE,kBAAmB,AACnB,SAAU,AACV,UAAY,CACb,AACD,yBACE,oBACE,mBAAqB,CACtB,AACD,gCACE,iBAAmB,CACpB,AACD,+BACE,iBAAmB,CACpB,CACF",file:"index.less",sourcesContent:[".title-text-wrapper {\n  padding-bottom: 20px;\n  position: relative;\n}\n.title-text-wrapper img {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.title-text-wrapper.table-title {\n  padding: 20px;\n  border-bottom: 3px solid #ECECEC;\n  color: #333;\n}\n.title-text-wrapper.table-title img {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.title-text-wrapper h3 {\n  font-size: 20px;\n  display: inline-block;\n  font-weight: 500;\n  font-family: NotoSansHans-Medium;\n  margin-right: 30px;\n}\n.title-text-wrapper.info-title {\n  color: #FFFFFF;\n  background: #151A1E;\n  padding: 20px 30px;\n  border-radius: 3px 3px 0 0;\n}\n.title-text-wrapper .right {\n  float: right;\n}\n.title-text-wrapper .inline-select {\n  display: inline-block;\n}\n.title-text-wrapper .inline-select .button-group {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n@media (max-width: 768px) {\n  .title-text-wrapper {\n    padding-bottom: 15px;\n  }\n  .title-text-wrapper.table-title {\n    padding: 20px 15px;\n  }\n  .title-text-wrapper.info-title {\n    padding: 20px 10px;\n  }\n}\n"],sourceRoot:""}])},309:function(t,n,e){var A=e(315);"string"===typeof A&&(A=[[t.i,A,""]]);var i={hmr:!1,transform:void 0};e(288)(A,i);A.locals&&(t.exports=A.locals)},315:function(t,n,e){(t.exports=e(287)(!0)).push([t.i,".nns-page{width:100%}.nns-page .nns-total{background-image:-webkit-gradient(linear,left top,left bottom,color-stop(10%,#151a1e),color-stop(98%,#666));background-image:-webkit-linear-gradient(top,#151a1e 10%,#666 98%);background-image:-o-linear-gradient(top,#151a1e 10%,#666 98%);background-image:linear-gradient(-180deg,#151a1e 10%,#666 98%);height:5.4rem;min-height:540px;min-width:1128px}.nns-page .nns-total .total-box{width:10.88rem;min-width:1088px;margin:0 auto;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.nns-page .nns-total .total-box .total-smallbox{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;width:2.42rem;height:2.6rem;min-width:242px;min-height:260px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(1%,#666),to(#151a1e));background-image:-webkit-linear-gradient(top,#666 1%,#151a1e);background-image:-o-linear-gradient(top,#666 1%,#151a1e 100%);background-image:linear-gradient(-180deg,#666 1%,#151a1e);-webkit-box-shadow:0 2px 10px 0 #1e1e1e;box-shadow:0 2px 10px 0 #1e1e1e;border-radius:3px;margin-right:.4rem;margin-top:1.23rem;position:relative;-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;-o-transition:-o-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s,-o-transform .5s;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.nns-page .nns-total .total-box .total-smallbox:last-child{margin-right:0}.nns-page .nns-total .total-box .total-smallbox .total-content{text-align:center;color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nns-page .nns-total .total-box .total-smallbox .total-content strong{display:block;font-weight:500;color:#fff;font-size:20px;margin-bottom:.2rem;white-space:nowrap;text-align:center}.nns-page .nns-content{width:10.88rem;min-width:1088px;margin:0 auto;padding:0 20px;margin-bottom:1rem}.nns-page .nns-content .search-page{width:100%;background:#fff;-webkit-box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:23px;position:relative;top:-50px}.nns-page .nns-content .search-page .search-icon{position:absolute;top:46px;right:1.52rem;width:20px;height:20px}.nns-page .nns-content .being-wrapper,.nns-page .nns-content .rank-wrapper{background:#fff}.nnsbeing-page,.nnsinfo-page,.nnsrank-page{width:10.88rem;min-width:1088px;padding:0 20px;margin:0 auto;margin-top:1.38rem;margin-bottom:1rem}@media (min-width:2560px){.nns-page .nns-total .total-box .total-smallbox .total-content .total-data{font-size:32px}.nns-page .nns-total .total-box .total-smallbox .total-content .total-type{font-size:28px}.nns-page .nns-content{width:10.88rem;min-width:1088px;margin:0 auto;padding:0 20px;margin-bottom:1rem}.nns-page .nns-content .search-page{width:100%;background:#fff;-webkit-box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:23px;position:relative;top:-50px}.nns-page .nns-content .search-page .search-icon{position:absolute;top:46px;right:1.52rem;width:20px;height:20px}}@media (max-width:768px){.nns-page{width:100%}.nns-page .nns-total{background-image:-webkit-gradient(linear,left top,left bottom,color-stop(10%,#151a1e),color-stop(98%,#666));background-image:-webkit-linear-gradient(top,#151a1e 10%,#666 98%);background-image:-o-linear-gradient(top,#151a1e 10%,#666 98%);background-image:linear-gradient(-180deg,#151a1e 10%,#666 98%);height:1.98rem;min-height:198px;min-width:375px}.nns-page .nns-total .total-box{width:3.45rem;min-width:345px;margin:0 auto;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.nns-page .nns-total .total-box .total-smallbox{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;width:1.05rem;height:1.28rem;min-width:105px;min-height:128px;-webkit-box-sizing:border-box;box-sizing:border-box;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(1%,#4ab6f6),to(#6858ed));background-image:-webkit-linear-gradient(top,#4ab6f6 1%,#6858ed);background-image:-o-linear-gradient(top,#4ab6f6 1%,#6858ed 100%);background-image:linear-gradient(-180deg,#4ab6f6 1%,#6858ed);-webkit-box-shadow:0 2px 10px 0 #3491e8;box-shadow:0 2px 10px 0 #3491e8;border-radius:3px;margin-right:.15rem;margin-top:.4rem;position:relative}.nns-page .nns-total .total-box .total-smallbox:last-child{margin-right:0}.nns-page .nns-total .total-box .total-smallbox .total-content{text-align:center;color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nns-page .nns-total .total-box .total-smallbox .total-content strong{display:block;font-weight:500}.nns-page .nns-total .total-box .total-smallbox .total-content .total-data{font-size:14px}.nns-page .nns-total .total-box .total-smallbox .total-content .total-type{font-size:10px;height:.4rem;line-height:12px;text-align:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.nns-page .index-content{width:10.88rem;min-width:1088px;margin:0 auto;padding:0 20px;margin-bottom:1rem}.nns-page .index-content .search-page{display:none}}","",{version:3,sources:["/Users/yinhuang/demo/new-browser-private/src/containers/nns/index.less"],names:[],mappings:"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",file:"index.less",sourcesContent:[".nns-page {\n  width: 100%;\n}\n.nns-page .nns-total {\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, #151A1E), color-stop(98%, #666666));\n  background-image: -webkit-linear-gradient(top, #151A1E 10%, #666666 98%);\n  background-image: -o-linear-gradient(top, #151A1E 10%, #666666 98%);\n  background-image: linear-gradient(-180deg, #151A1E 10%, #666666 98%);\n  height: 5.4rem;\n  min-height: 540px;\n  min-width: 1128px;\n}\n.nns-page .nns-total .total-box {\n  width: 10.88rem;\n  min-width: 1088px;\n  margin: 0 auto;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n.nns-page .nns-total .total-box .total-smallbox {\n  -webkit-flex: 1 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  width: 2.42rem;\n  height: 2.6rem;\n  min-width: 242px;\n  min-height: 260px;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(1%, #666666), to(#151A1E));\n  background-image: -webkit-linear-gradient(top, #666666 1%, #151A1E 100%);\n  background-image: -o-linear-gradient(top, #666666 1%, #151A1E 100%);\n  background-image: linear-gradient(-180deg, #666666 1%, #151A1E 100%);\n  -webkit-box-shadow: 0 2px 10px 0 #1E1E1E;\n          box-shadow: 0 2px 10px 0 #1E1E1E;\n  border-radius: 3px;\n  margin-right: 0.4rem;\n  margin-top: 1.23rem;\n  position: relative;\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: -webkit-transform 0.5s;\n  -o-transition: -o-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s, -o-transform 0.5s;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.nns-page .nns-total .total-box .total-smallbox:last-child {\n  margin-right: 0;\n}\n.nns-page .nns-total .total-box .total-smallbox .total-content {\n  text-align: center;\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.nns-page .nns-total .total-box .total-smallbox .total-content strong {\n  display: block;\n  font-weight: 500;\n  color: #fff;\n  font-size: 20px;\n  margin-bottom: 0.2rem;\n  white-space: nowrap;\n  text-align: center;\n}\n.nns-page .nns-content {\n  width: 10.88rem;\n  min-width: 1088px;\n  margin: 0 auto;\n  padding: 0 20px;\n  margin-bottom: 1rem;\n}\n.nns-page .nns-content .search-page {\n  width: 100%;\n  background: #FFFFFF;\n  -webkit-box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n          box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n  border-radius: 3px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 23px;\n  position: relative;\n  top: -50px;\n}\n.nns-page .nns-content .search-page .search-icon {\n  position: absolute;\n  top: 46px;\n  right: 1.52rem;\n  width: 20px;\n  height: 20px;\n}\n.nns-page .nns-content .being-wrapper,\n.nns-page .nns-content .rank-wrapper {\n  background: #fff;\n}\n.nnsbeing-page,\n.nnsrank-page,\n.nnsinfo-page {\n  width: 10.88rem;\n  min-width: 1088px;\n  padding: 0 20px;\n  margin: 0 auto;\n  margin-top: 1.38rem;\n  margin-bottom: 1rem;\n}\n@media (min-width: 2560px) {\n  .nns-page .nns-total .total-box .total-smallbox .total-content .total-data {\n    font-size: 32px;\n  }\n  .nns-page .nns-total .total-box .total-smallbox .total-content .total-type {\n    font-size: 28px;\n  }\n  .nns-page .nns-content {\n    width: 10.88rem;\n    min-width: 1088px;\n    margin: 0 auto;\n    padding: 0 20px;\n    margin-bottom: 1rem;\n  }\n  .nns-page .nns-content .search-page {\n    width: 100%;\n    background: #FFFFFF;\n    -webkit-box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n            box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n    border-radius: 3px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-top: 23px;\n    position: relative;\n    top: -50px;\n  }\n  .nns-page .nns-content .search-page .search-icon {\n    position: absolute;\n    top: 46px;\n    right: 1.52rem;\n    width: 20px;\n    height: 20px;\n  }\n}\n@media (max-width: 768px) {\n  .nns-page {\n    width: 100%;\n  }\n  .nns-page .nns-total {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, #151A1E), color-stop(98%, #666666));\n    background-image: -webkit-linear-gradient(top, #151A1E 10%, #666666 98%);\n    background-image: -o-linear-gradient(top, #151A1E 10%, #666666 98%);\n    background-image: linear-gradient(-180deg, #151A1E 10%, #666666 98%);\n    height: 1.98rem;\n    min-height: 198px;\n    min-width: 375px;\n  }\n  .nns-page .nns-total .total-box {\n    width: 3.45rem;\n    min-width: 345px;\n    margin: 0 auto;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n  .nns-page .nns-total .total-box .total-smallbox {\n    -webkit-flex: 1 1;\n        -ms-flex: 1 1;\n            flex: 1 1;\n    width: 1.05rem;\n    height: 1.28rem;\n    min-width: 105px;\n    min-height: 128px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(1%, #4AB6F6), to(#6858ED));\n    background-image: -webkit-linear-gradient(top, #4AB6F6 1%, #6858ED 100%);\n    background-image: -o-linear-gradient(top, #4AB6F6 1%, #6858ED 100%);\n    background-image: linear-gradient(-180deg, #4AB6F6 1%, #6858ED 100%);\n    -webkit-box-shadow: 0 2px 10px 0 #3491E8;\n            box-shadow: 0 2px 10px 0 #3491E8;\n    border-radius: 3px;\n    margin-right: 0.15rem;\n    margin-top: 0.4rem;\n    position: relative;\n  }\n  .nns-page .nns-total .total-box .total-smallbox:last-child {\n    margin-right: 0;\n  }\n  .nns-page .nns-total .total-box .total-smallbox .total-content {\n    text-align: center;\n    color: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    -o-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n  }\n  .nns-page .nns-total .total-box .total-smallbox .total-content strong {\n    display: block;\n    font-weight: 500;\n  }\n  .nns-page .nns-total .total-box .total-smallbox .total-content .total-data {\n    font-size: 14px;\n  }\n  .nns-page .nns-total .total-box .total-smallbox .total-content .total-type {\n    font-size: 10px;\n    height: 0.4rem;\n    line-height: 12px;\n    text-align: center;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .nns-page .index-content {\n    width: 10.88rem;\n    min-width: 1088px;\n    margin: 0 auto;\n    padding: 0 20px;\n    margin-bottom: 1rem;\n  }\n  .nns-page .index-content .search-page {\n    display: none;\n  }\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=10.8715654d.chunk.js.map