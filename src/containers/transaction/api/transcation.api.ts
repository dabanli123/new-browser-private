import request from 'utils/request';
/**
 * 获取该交易类型的总数，默认获取所有的
 * @param type 交易类型
 */
// export const gettxcount = (type:string) => {
//   const opts = {
//     method:'gettxcount',
//     params:[
//       type
//     ],
//     baseUrl:'common'
//   }
//   return request(opts);
// }

/**
 * 根据交易类型获取交易列表，默认获取全部
 * @param size 每页显示条数
 * @param page 当前页码
 * @param type 交易类型
 */
export const gettransactionlist = (page: number, size: number, type: string) =>
{
  const opts = {
    method: 'gettransactionlist',
    params: [
      page,
      size,
      type
    ]
  }
  return request(opts);
}

/**
 * 获取交易详情
 * @param txid 交易id
 */
export const gettraninfo = (txid: string) =>
{
  const opts = {
    method: 'getutxoinfo',
    params: [
      txid
    ]
  }
  return request(opts);
}
// /**
//  * 获取区块详情
//  * @param index 区块高度
//  */
// export const getblock = (index:number) => {
//   const opts = {
//     method:'getblock',
//     params:[
//       index
//     ],
//     baseUrl:'common'
//   }
//   return request(opts);
// }