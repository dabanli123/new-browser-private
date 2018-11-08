import { RouteComponentProps } from 'react-router-dom';
export interface IAddressStore
{
    addrCount: string,
    addrList: IAddressList[],
    addInfo: IAddress,
    addUtxoList: IUtxoByAddress,
    getAddrCount: () => Promise<boolean>,
    getAddressList: (size: number, page: number) => Promise<boolean>,
    getAddressInfo:(address:string) => Promise<boolean>,
    getAddrUtxoList:(address:string,size:number,page:number) => Promise<boolean>,
    getAddressBalance:(address:string) => Promise<boolean>,
    getAddressNep5Asset:(address:string) => Promise<boolean>,
}
export interface IAddressProps extends RouteComponentProps
{
    intl: any,
    address: IAddressStore
}

export interface IAddress
{
    addr: string,
    firstuse: IAddressTime,
    lastuse: IAddressTime,
    txcount: number
}
export interface IAddressTime
{
    txid: string,
    blockindex: number,
    blocktime: { $date: number }
}
export interface IAddressList
{
    addr: string,
    firstuse: number,
    lastuse: number,
    txcount: number
}
export interface IBanlance
{
    asset: string,
    balance: number,
    name: IAssetName[]
}
export interface IAssetName
{
    lang: string,
    name: string
}
export interface INep5OfAddress
{
    assetid: string,
    balance: number,
    symbol: string
}
export interface IUtxoByAddress {
    count:number,
    list:IUtxobyAddresslist[]
}
export interface IUtxobyAddresslist
{
    txid:string,
    value:string,
    asset:string
}