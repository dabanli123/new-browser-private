import { RouteComponentProps } from 'react-router-dom';
export interface INNSInfoStore
{
    nnsInfo: IAuctionInfo | null,
    domainInfo:IAuctionedInfo | null,
    domainBidRankCount:number,
    domainBidRankList :IDomainBidRankList[],
    domainBidInfoCount:number,
    domainBidInfoList :IDomainBidInfoList[],
    getAuctionInfo: (domain:string) => Promise<boolean>,
    getAuctionBidRank: (domainid:string,size: number, page: number) => Promise<boolean>,
    getAuctionBidInfoTx: (domainid:string,size: number, page: number) => Promise<boolean>,
    getAuctionedInfo: (domain:string) => Promise<boolean>,
}
export interface INNSInfoProps extends RouteComponentProps
{
    intl: any,
    nnsinfo: INNSInfoStore
}
export interface IAuctionInfo{
    auctionId:string,
    auctionState:string,
    endTime:{
        blocktime:number
    },
    fulldomain:string,
    maxBuyer:string,
    maxPrice:string,
    startTime:{
        blockindex:number,
        blocktime:number
    },
    ttl:number
}
export interface IAuctionedInfo{
    auctionId:string,
    fulldomain:string,
    owner:string,
    ttl:string
}
// export interface IDomainPriceRank
// {
//     count: number,
//     list: IDomainRankList[]
// }
// export interface IDomainInfoHistory
// {
//     count: number,
//     list: IDomainHistoryList[]
// }
export interface IDomainBidRankList
{
    address: string,
    range: number,
    totalValue: string
}
export interface IDomainBidInfoList
{
    address: string,
    amount: number,
    time: number,
    txid: string,
    type: string,
}