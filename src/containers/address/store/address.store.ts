import { observable, action } from 'mobx';
import * as Api from '../api/address.api'
import { toThousands } from '@/utils/numberTool'
import { IAddressStore, IAddress, IAddressList } from '../interface/address.interface';

class Address implements IAddressStore {
    @observable public addrCount: string = '0';
    @observable public addrList: IAddressList[] = [];
    
    @action public async getAddrCount() {
        let result: any = null;
        try {
            result = await Api.getaddrcount();
        } catch (error) {
            return false;
        }
        this.addrCount = result ? toThousands(result[0].addrcount) : '0';
        return true;
    }
    @action public async getAddressList(size: number, page: number) {
        let result: any = null;
        try {
            result = await Api.getaddrlist(size, page);
            // console.log(result);
        } catch (error) {
            return false;
        }
        const arr:IAddress[] = result || [];
        if(arr.length !== 0){
            arr.map((key)=>{
                const newObject = {
                    addr:key.addr,
                    firstuse:key.firstuse.blocktime.$date,
                    lastuse:key.firstuse.blocktime.$date,
                    txcount:key.txcount
                }
                this.addrList.push(newObject);
            })
        }
        return true;
    }
    
}
export default new Address();