import { observable, action } from 'mobx';
import * as Api from '../api/block.api'
import { IBlockStore, IBlock, IBlockInfo } from '../interface/block.interface';

class Block implements IBlockStore {
    @observable public blockHeight: string = '0';
    @observable public blockList: IBlock[] = [];
    @observable public blockInfo: IBlockInfo;

    @action public async getBlockHeight() {
        let result: any = null;
        try {
            result = await Api.getblockcount();
        } catch (error) {
            return error;
        }
        this.blockHeight = result ? result[0].blockcount : '0';
        return true;
    }
    @action public async getBlockList(size: number, page: number) {
        let result: any = null;
        try {
            result = await Api.getblocks(size, page);
        } catch (error) {
            return error;
        }
        this.blockList = result ? result : [];
        return true;
    }
    @action public async getBlockInfo(index: number) {
        let result: any = null;
        try {
            result = await Api.getblock(index);
            // console.log(result);
        } catch (error) {
            return error;
        }
        this.blockInfo = result ? result[0] : [];
        console.log(this.blockInfo);
        
        return true;
    }
}
export default new Block();