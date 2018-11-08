import request from 'utils/request';

/**
 * 获取地址总数
 */
export const getaddrcount = () => {
  const opts = {
    method:'getaddrcount',
    params:[],
    baseUrl:'common'
  }
  return request(opts);
}
/**
 * 获取地址列表
 * @param size 每页条数
 * @param page 当前页码
 */
export const getaddrlist = (size:number,page:number) => {
  const opts = {
    method:'getaddrs',
    params:[
      size,
      page
    ],
    baseUrl:'common'
  }
  return request(opts);
}
/**
 * 获取地址详情
 * @param addr 地址
 */
export const getaddrinfo = (addr:string) => {
  const opts = {
    method:'getaddr',
    params:[
      addr
    ],
    baseUrl:'common'
  }
  return request(opts);
}
/**
 * 根据地址获取资产列表
 * @param addr 当前地址
 */
export const getaddrbalance = (addr:string) => {
  const opts = {
    method:'getbalance',
    params:[
      addr
    ],
    baseUrl:'common'
  }
  return request(opts);
}
/**
 * 获取nep5资产
 * @param nep5 nep5资产名
 */
export const getaddrnep5asset = (nep5:string) => {
  const opts = {
    method:'getallnep5assetofaddress',
    params:[
      nep5,
      1
    ],
    baseUrl:'common'
  }
  return request(opts);
}
/**
 * 根据地址获取utxo总数
 * @param addr 当前地址
 */
export const getaddrutxocount = (addr:string) => {
  const opts = {
    method:'getutxo',
    params:[
      addr
    ],
    baseUrl:'common'
  }
  return request(opts);
}
/**
 * 根据地址获取utxo列表
 * @param addr 当前地址
 * @param size 每页条数
 * @param page 当前页码
 */
export const getaddrutxolist = (addr:string,page:number,size:number) => {
  const opts = {
    method:'getutxolistbyaddress',
    params:[
      addr,
      page,
      size
    ]
  }
  return request(opts);
}
