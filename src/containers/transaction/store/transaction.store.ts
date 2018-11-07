import { observable, action } from 'mobx';
import * as Api from '../api/transcation.api'
import { ITransactionsStore } from '../interface/transaction.interface';
import { ITransaction } from '@/store/interface/common.interface';
import { IBlockInfo } from '@/containers/block/interface/block.interface';

class Transaction implements ITransactionsStore {
    @observable public txCount: string = '0';
    @observable public transList: ITransaction[] = [];
    @observable public tranInfo: ITransaction;
    @observable public blockInfo:IBlockInfo;

    @action public async getTxCount(type: string) {
        let result: any = null;
        try {
            result = await Api.gettxcount(type);
        } catch (error) {
            return false;
        }
        this.txCount = result ? result[0].txcount : '0';
        return true;
    }
    
    @action public async getTransList(size: number, page: number, type: string) {
        let result: any = null;
        try {
            result = await Api.getrawtransactions(size, page, type);
            // console.log(result);
        } catch (error) {
            return false;
        }

        this.transList = result || [];
        return true;
    }
    @action public async getTransInfo(txid: string) {
        let result: any = null;
        try {
            result = await Api.getrawtransaction(txid);
            // console.log(result);
        } catch (error) {
            return false;
        }
        this.tranInfo = result[0] || [];
        return true;
    }
    @action public async getBlockInfo(index: number) {
        let result: any = null;
        try {
            result = await Api.getblock(index);
            // console.log(result);
        } catch (error) {
            return false;
        }
        this.blockInfo = result ? result[0] : [];
        return true;
    }
}
export default new Transaction();