import { observable, action } from 'mobx';
import * as Api from '../api/transcation.api'
import { ITransactionsStore, ITransInfo, ITransactionList } from '../interface/transaction.interface';

class Transaction implements ITransactionsStore {
    // @observable public txCount: string = '';
    @observable public transList:ITransactionList;
    @observable public tranInfo: ITransInfo;
    // @observable public blockInfo: IBlockInfo;

    // @action public async getTxCount(type: string) {
    //     let result: any = null;
    //     try {
    //         result = await Api.gettxcount(type);
    //     } catch (error) {
    //         this.txCount = '0';
    //         return false;
    //     }
    //     this.txCount = result ? result[0].txcount : '0';
    //     return true;
    // }
    /**
     * 根据交易类型获取交易列表（默认获取所有交易）
     * @param page 当前页码
     * @param size 每页条数
     * @param type 交易类型
     */
    @action public async getTransList( page: number,size: number, type: string) {
        let result: any = null;
        try {
            result = await Api.gettransactionlist( page,size, type);
        } catch (error) {
            return false;
        }
        this.transList = result ? result[0]:[];
        return true;
    }
    /**
     * 获取交易详情
     * @param txid 交易id
     */
    @action public async getTransInfo(txid: string) {
        let result: any = null;
        try {
            result = await Api.gettraninfo(txid);
            // console.log(result);
        } catch (error) {
            return false;
        }
        this.tranInfo = result[0] || [];
        return true;
    }
    // @action public async getBlockInfo(index: number) {
    //     let result: any = null;
    //     try {
    //         result = await Api.getblock(index);
    //         // console.log(result);
    //     } catch (error) {
    //         return false;
    //     }
    //     this.blockInfo = result ? result[0] : [];
    //     return true;
    // }
}
export default new Transaction();