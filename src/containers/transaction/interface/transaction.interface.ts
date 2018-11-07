import { RouteComponentProps } from 'react-router-dom';
import { ITransaction } from '@/store/interface/common.interface';
import { IBlockInfo } from '@/containers/block/interface/block.interface';
export interface ITransactionsStore {
    txCount: string,
    transList: ITransaction[],
    tranInfo:ITransaction,
    blockInfo:IBlockInfo,
    getTxCount: (type: string) => Promise<boolean>,
    getTransList: (size: number, page: number, type: string) => Promise<boolean>,
    getTransInfo:(txid:string) => Promise<boolean>,
    getBlockInfo:(index:number) => Promise<boolean>
}
export interface ITransactionsProps extends RouteComponentProps {
    intl: any,
    transaction: ITransactionsStore
}
export interface ITransInfoState{
    vinList:ITransInputOutput[],
    outList:ITransInputOutput[]
}
export interface ITransInputOutput{
    address:string,
    asset:string
    value:number
}