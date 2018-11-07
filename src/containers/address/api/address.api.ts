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
    method:'getaddrs',
    params:[
      addr
    ],
    baseUrl:'common'
  }
  return request(opts);
}
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
export const getaddrutxo = (addr:string) => {
  const opts = {
    method:'getutxo',
    params:[
      addr
    ],
    baseUrl:'common'
  }
  return request(opts);
}

