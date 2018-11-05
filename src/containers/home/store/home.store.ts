import { observable, action } from 'mobx';
import * as Api from '../api/home.api'
import { IHomeStore, IBlock, ITransList } from '../interface/home.interface';
import { toThousands } from '@/utils/numberTool'

class Home implements IHomeStore {
    @observable public blockHeight: string = '0';
    @observable public txCount: string = '0';
    @observable public addrCount: string = '0';
    @observable public blockList: IBlock[] = [];
    @observable public transList: ITransList[] = [];

    @action public async getBlockHeight() {
        let result: any = null;
        try {
            result = await Api.getblockcount();
        } catch (error) {
            return error;
        }
        this.blockHeight = result ? toThousands(result[0].blockcount) : '0';
        console.log(this.blockHeight);
        return true;
    }
    @action public async getTxCount(type: string) {
        let result: any = null;
        try {
            result = await Api.gettxcount(type);
        } catch (error) {
            return error;
        }
        this.txCount = result ? toThousands(result[0].txcount) : '0';
        return true;
    }
    @action public async getAddrCount() {
        let result: any = null;
        try {
            result = await Api.getaddrcount();
        } catch (error) {
            return error;
        }
        this.addrCount = result ? toThousands(result[0].addrcount) : '0';
        return true;
    }
    @action public async getBlockList(size: number, page: number) {
        let result: any = null;
        try {
            result = await Api.getblocks(size, page);
            console.log(result);
        } catch (error) {
            return error;
        }
        this.blockList = result ? result : [];
        return true;
    }
    @action public async getTransList(size: number, page: number, type: string) {
        let result: any = null;
        try {
            result = await Api.getrawtransactions(size, page, type);
            console.log(result);
        } catch (error) {
            return error;
        }

        this.transList = result || [];
        return true;
    }
}
export default new Home();