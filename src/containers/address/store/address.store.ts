import { observable, action } from 'mobx';
import * as Api from '../api/address.api';
import { IAddressStore, IAddress, IAddressList } from '../interface/address.interface';

class Address implements IAddressStore {
    @observable public addrCount: string = '';
    @observable public addrList: IAddressList[] = [];

    @action public async getAddrCount() {
        let result: any = null;
        try {
            result = await Api.getaddrcount();
        } catch (error) {
            this.addrCount = '0';
            return false;
        }
        this.addrCount = result ? result[0].addrcount : '0';
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
        const arr: IAddress[] = result || [];
        this.addrList = [];
        if (arr.length !== 0) {
            arr.map((key) => {
                const newObject = {
                    addr: key.addr,
                    firstuse: key.firstuse.blocktime.$date,
                    lastuse: key.firstuse.blocktime.$date,
                    txcount: key.txcount
                }
                this.addrList.push(newObject);
            })
        }
        return true;
    }

}
export default new Address();