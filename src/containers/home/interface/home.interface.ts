import { RouteComponentProps } from 'react-router-dom';
export interface IHomeStore {
    blockHeight: string,
    txCount: string,
    addrCount: string,
    blockList: IBlock[],
    transList: ITransList[],
    getBlockHeight: () => void,
    getTxCount: (type: string) => void,
    getAddrCount: () => void,
    getBlockList: (size: number, page: number) => void,
    getTransList: (size: number, page: number, type: string) => void
}
export interface IHomeProps extends RouteComponentProps {
    intl: any,
    home: IHomeStore
}
export interface IBlock {
    index: number,
    size: number,
    time: number,
    txcount: number
}
export interface ITransaction {
    txid: string,
    type: string,
    net_fee: string,
    gas: string,
    size: number,
    blockindex: number,
    version: number,
    vin: IVin[],
    vout: IOut[],
}
export interface ITransList {
    type: string,
    txid: string,
    blockindex: string,
    size: number
}
export interface IVin {
    txid: string;
    vout: number;
}
export interface IOut {
    address: string;
    asset: string;
    n: number;
    value: string;
}