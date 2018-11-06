import { RouteComponentProps } from 'react-router-dom';
export interface IHomeStore {
    blockCount: string,
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

export interface ITransList {
    type: string,
    txid: string,
    blockindex: string,
    size: number
}
