export default {
  title: {
    '/': 'NNS',
    '/tutorial': '竞拍教程',
    '/exchange': '兑换CGAS',
    '/auction': '我的竞拍',
    '/manager': '域名管理',
    '/manager/detail': '域名管理',
    '/auction/detail': '我的竞拍',
    '/bonus': '我的分红',
    '/record': '操作记录',
    '/topup': '充值',
    '/withdraw': '提取',
  },
  header:{
    back:'返回'
  },
  btn: {
    withdraw: "提取",
    topup: "充值",
    topingup: "充值中...",
    exchange: "兑换",
    claimdomain: "领取域名",
    claimingdomain: "域名领取中...",
    reclaimcgas: "领回竞拍金",
    claiming: "域名领取中",
    reclaiming: "竞拍金领回中",
    claimed: "域名已领取",
    reclaimed: "竞拍金已领回",
    placebid: "出价",
    placing: "出价中...",
    reset: "重置",
    renew: "续约",
    set: "设置",
    confirm: "确认",
    confirming: "确认中，请耐心等待...",
    startauction: "开标",
    starting: "开标中...",
    join: "参与竞拍",
    gotit: "我知道了",
  },
  home: {
    action: {
      title: "常用功能",
      tutorial: '竞拍教程',
      exchange: '兑换CGAS',
      auction: '我的竞拍',
      manager: '域名管理',
      bonus: '我的分红',
      record: '操作记录'
    },
    account: {
      title: "竞拍账户",
    },
    auction: {
      title: "NNS域名竞拍",
      errmsg1: "域名必须为字母和数字，长度在6～32个字符之间",
      errmsg2: "该域名已经被别人拥有啦",
      successmsg: "该域名可以使用",
      successmsg2: '该域名正在进行竞拍',
    }
  },
  topup: {
    title: "充值CGAS",
    title2: "充值数量",
    wallet: "钱包",
    account: "竞拍账户",
    balance: "余额：",
    max: "全部",
    msg: "所需CGAS数量：99",
    errmsg: "钱包余额不足",
    title3: "提取CGAS",
    title4: "提取数量",
  },
  exchange: {
    forcgas: "用GAS兑换CGAS",
    forgas: "用CGAS兑换GAS",
    title: "兑换CGAS",
    balance: "余额：",
    title2: "兑换数量",
    msg1: "所需GAS数量：99",
    errmsg1: "余额不足"
  },
  myauction: {
    title: "竞拍域名",
    search: "按域名查找",
    highbid: "当前最高价：",
    bidder: "出价者：",
    starttime: "开标时间：",
    hammerprice: "成交价：",
    buyer: "中标人：",
    stage: "状态",
    period: "确定期",
    overtime: "随机期",
    ended: "已结束",
    other: "他人",
    me: "我",
    all:"全部",
    tip1: "确定期为竞拍第一阶段，时长为3天，此期间所有的出价都有效。当确定期最后一天有人出价时将触发最大时长为2天的随机期。否则竞拍即在确定期结束。",
    tip2: " 随机期为竞拍第二阶段，最大时长为2天，此期间任意一个出价都有可能触发该域名竞拍的结束从而出价无效，越靠后的出价触发结束的可能性越大，因此请尽早出价以免错失该域名。",
    info: {
      title: "域名信息",
      title2: "时间轴",
      mybidmsg: "我的出价总和：",
      tips1: "注意：确定期为竞拍第一阶段，时长为3天，此期间所有的出价都有效。当确定期最后一天有人出价时将触发最大时长为2天的随机期。否则竞拍即在确定期结束。",
      tips2: "注意：随机期为竞拍第二阶段，最大时长为2天，此期间中任意一个出价都有可能触发该域名竞拍的结束从而出价无效，越靠后的出价触发结束的可能性越大，因此请尽早出价以免错失该域名。",
      title3: "竞拍出价",
      raisebid: "本次加价：",
      msg: "竞拍账户余额：",
      msg2: "我的出价总和将为：",
      errmsg: "竞拍账户余额不足",
      errmsg2: "您的出价总和小于当前最高价",
      tips3: "注意：每次加价最小单位为 0.1 CGAS，当出价总和小于该域名的当前最高价时，本次出价不成功。",
    }
  },
  manager: {
    title: "我的域名",
    resolver: "地址解析器",
    mapping: "地址映射",
    expirationtime: "到期时间",
    msg: "（即将过期）",
    msg2: "（已过期）",
    title2: "域名"
  },
  bonus: {
    title: "分红记录",
    dividends: "我的分红：",
    pool: "奖金池快照：",
    mytotal: "我的NNC总量：",
    time: "快照时间："
  },
  record: {
    title: "操作记录",
    tips: "注意：这些记录将会在您登出或离开NNS页面时清空。",
    transfer: "转出",
    gasclaim: "提取GAS",
    cgasexchange: "兑换CGAS",
    startauction: "开标",
    raisebid: "加价",
    claimdomain: "领取域名",
    reclaimcgas: "领回CGAS",
    topup: "充值",
    withdraw: "提取",
    editdomain: "域名编辑",
    status: "状态：",
    waitingmsg: "等待确认...( 20s )",
    failmsg: "失败 ( 请再次尝试 )",
    successmsg: "已确认",
    resolver: "确认地址解析器：",
    mapping: "地址映射：",
  },
  message: {
    successmsg: "操作成功",
    waitmsg: "操作生效需要区块被确认，请耐心等待...",
    errmsg: "操作失败",
    errmsgtip1: "请求错误，请稍好再次尝试哦...",
    exchangemsg: '"兑换CGAS（ 1 GAS → 1 CGAS ） 已生效！',
    startauctionmsg: '域名开标 1234567.neo 已生效！',
    raisebidmsg: '域名加价 1234567.neo （ 0.1 CGAS ）已生效！',
    claimdomainmsg: '领域域名 1234567.neo 已生效！',
    reclaimmsg: '领回CGAS 1234567.neo （ 20 CGAS ）已生效！',
    topupmsg: '充值 20 CGAS 已生效！',
    withdrawmsg: '提取 20 CGAS 已生效！',
    editdomainmsg: '设置地址解析器 1234567.neo 已生效！',
    editdomainmsg2: '地址映射 1234567.neo （ AYah...9876 ）已生效！',
    editdomainmsg3: '续约域名 1234567.neo 已生效！',
    editdomainerrmsg: '续约域名 1234567.neo 未生效！请再次尝试！'
  }
}