import { RouteComponentProps } from 'react-router-dom';
export interface IAddressStore
{
    addrCount: string,
    addrList:IAddressList[],    
    getAddrCount: () => Promise<boolean>,
    getAddressList: (size: number, page: number) => Promise<boolean>    
}
export interface IAddressProps extends RouteComponentProps
{
    intl: any,
    address: IAddressStore
}

export interface IAddress
{
    addr: string,
    firstuse:IAddressTime,
    lastuse: IAddressTime,
    txcount: number
}
export interface IAddressTime {
    txid: string,
    blockindex: number,
    blocktime: { $date: number }
}
export interface IAddressList{
    addr: string,
    firstuse:number,
    lastuse: number,
    txcount: number
}