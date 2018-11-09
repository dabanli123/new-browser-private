import { RouteComponentProps } from 'react-router-dom';
export interface INNSInfoStore
{
    nnsInfo: string,
    
    // getAddrCount: () => Promise<boolean>,
    // getAddressList: (size: number, page: number) => Promise<boolean>,
}
export interface INNSInfoProps extends RouteComponentProps
{
    intl: any,
    nns: INNSInfoStore
}
export interface IDomainPriceRank
{
    count: number,
    list: IDomainRankList[]
}
export interface IDomainInfoHistory
{
    count: number,
    list: IDomainHistoryList[]
}
export interface IDomainRankList
{
    address: string,
    range: number,
    totalValue: string
}
export interface IDomainHistoryList
{
    address: string,
    amount: string,
    time: number,
    txid: string,
    type: string,
}