import { RouteComponentProps } from 'react-router-dom';
export interface ITransactionsStore {
    // txCount: string,
    transList: ITransactionList,
    tranInfo:ITransInfo,
    // blockInfo:IBlockInfo,
    // getTxCount: (type: string) => Promise<boolean>,
    getTransList: ( page: number,size: number, type: string) => Promise<boolean>,
    getTransInfo:(txid:string) => Promise<boolean>,
    // getBlockInfo:(index:number) => Promise<boolean>
}
export interface ITransactionsProps extends RouteComponentProps {
    intl: any,
    transaction: ITransactionsStore
}

export interface ITransactionList {
    count:number,
    list:ITransaction[]
}
export interface ITransaction {
    blockindex:number,
    size:number,
    txid:string,
    type:string
}
export interface ITransInfoState{
    vinList:ITransInputOutput[],
    outList:ITransInputOutput[]
}
export interface ITransInputOutput{
    address:string,
    value:string
}
export interface ITransVinVout{
    address:string,
    asset:string,
    value:number
}
export interface ITransInfo {
    txid:string,
    size:number,
    type:string,
    sys_fee:string,
    net_fee:string,
    blockindex:number,
    blocktime:number,
    vin:ITransVinVout[],
    vout:ITransVinVout[]
}