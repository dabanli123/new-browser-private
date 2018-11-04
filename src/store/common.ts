// 存储全局变量

import { observable } from 'mobx';
class Common{
  @observable public language:string = 'zh';  // 当前语言
  @observable public network:string = 'testnet';  // 当前网络


}

// 外部使用require
export default new Common();
