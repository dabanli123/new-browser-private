import { RouteComponentProps } from 'react-router-dom';
import { ITransaction } from '@/store/interface/common.interface';
export interface IBlockStore {
    blockHeight: string,
    blockList: IBlock[],
    blockInfo: IBlockInfo,
    getBlockHeight: () => void,
    getBlockList: (size: number, page: number) => void,
    getBlockInfo: (index: number) => void
}
export interface IBlockProps extends RouteComponentProps {
    intl: any,
    block: IBlockStore
}
export interface IBlock {
    index: number,
    size: number,
    time: number,
    txcount: number
}
export interface IBlockInfo {
    hash: string;
    size: number;
    version: number;
    previousblockhash: string;
    merkleroot: string;
    time: number;
    index: number;
    nonce: string;
    nextconsensus: string;
    script: {
        invocation: string;
        verification: string;
    };
    tx: ITransaction[];
}
