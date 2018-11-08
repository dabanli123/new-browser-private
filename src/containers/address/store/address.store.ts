import { observable, action } from 'mobx';
import * as Api from '../api/address.api';
import { IAddressStore, IAddress, IAddressList, IUtxoByAddress } from '../interface/address.interface';

class Address implements IAddressStore
{
    @observable public addrCount: string = '';
    @observable public addrList: IAddressList[] = [];
    @observable public addInfo: IAddress;
    @observable public addBalanceList;
    @observable public addUtxoList:IUtxoByAddress;

    /**
     * 获取地址总数
     */
    @action public async getAddrCount()
    {
        let result: any = null;
        try
        {
            result = await Api.getaddrcount();
        } catch (error)
        {
            this.addrCount = '0';
            return false;
        }
        this.addrCount = result ? result[0].addrcount : '0';
        return true;
    }
    /**
     * 获取地址列表
     * @param size 每页条数
     * @param page 当前页码
     */
    @action public async getAddressList(size: number, page: number)
    {
        let result: any = null;
        try
        {
            result = await Api.getaddrlist(size, page);            
        } catch (error)
        {
            return false;
        }
        const arr: IAddress[] = result || [];
        // 筛选
        this.addrList = [];
        if (arr.length !== 0)
        {
            this.addrList = arr.map((key) =>
            {
                const newObject = {
                    addr: key.addr,
                    firstuse: key.firstuse.blocktime.$date,
                    lastuse: key.firstuse.blocktime.$date,
                    txcount: key.txcount
                }
                return newObject;
            })
        }
        return true;
    }
    /**
     * 获取该地址详情
     * @param address 当前地址
     */
    @action public async getAddressInfo(address:string){
        let result: any = null;
        try
        {
            result = await Api.getaddrinfo(address);
        } catch (error)
        {
            return false;
        }
        this.addInfo = result ? result[0] : [];
        return true;
    }
    // /**
    //  * 获取地址utxo交易数
    //  * @param address 当前地址
    //  */
    // @action public async getAddrUtxoCount(address: string)
    // {
    //     let result: any = null;
    //     try
    //     {
    //         result = await Api.getaddrutxocount(address);
    //         console.log(result);

    //     } catch (error)
    //     {
    //         this.addUtxoCount = "0";
    //         return false;
    //     }
    //     this.addUtxoCount = result ? result.length : '0';
    //     return true;
    // }
    /**
     * 获取地址utxo交易数
     * @param address 当前地址
     */
    @action public async getAddrUtxoList(address: string,page:number,size:number)
    {
        let result: any = null;
        try
        {
            result = await Api.getaddrutxolist(address,page,size);
            console.log(result);

        } catch (error)
        {
            // this.addUtxoCount = 0;
            return false;
        }
        // this.addUtxoCount = result ? result[0].addrcount : '0';
        return true;
    }
    /**
     * 获取该地址的balance
     * @param address 当前地址
     */
    @action public async getAddressBalance(address: string)
    {
        let result: any = null;
        try
        {
            result = await Api.getaddrbalance(address);
            console.log(result);            
        } catch (error)
        {
            return false;
        }
        return true
    }
    /**
     * 获取该地址nep5资产
     * @param address 当前地址
     */
    @action public async getAddressNep5Asset(address: string)
    {
        let result: any = null;
        try
        {
            result = await Api.getaddrnep5asset(address);
            console.log(result);            
        } catch (error)
        {
            return false;
        }
        return true
    }
}
export default new Address();