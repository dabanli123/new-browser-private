import { INNSStore, INNSTotal, INNSAucting, INNSAuctioned, INNSAuctingTable, INNSAuctionedTable } from "../interface/nns.interface";
import { observable, action } from "mobx";
import * as Api from '../api/nns.api';

class NNS implements INNSStore
{
    @observable public nnsTotal: INNSTotal;
    @observable public nnsAuctingCount:number = 0;
    @observable public nnsAuctingList: INNSAuctingTable[];
    @observable public nnsAuctedCount:number = 0;
    @observable public nnsAuctionedList: INNSAuctionedTable[];
    @observable public orderBy: string = 'time';

    @action public async getStatistic()
    {
        let result: any = null;
        try
        {
            result = await Api.getstatistics();
        } catch (error)
        {
            return false;
        }
        this.nnsTotal = result ? result[0] : [];
        return true;
    }

    @action public async getAuctingDomain(page: number, size: number)
    {
        let result: any = null;
        try
        {
            result = await Api.getauctingdomain(page, size);
            console.log(result);

        } catch (error)
        {
            this.nnsAuctingCount = 0;
            return false;
        }
        const arr: INNSAucting = result || [];
        this.nnsAuctingCount = result ? result[0].count : 0;
        if (arr.list && arr.list.length !== 0)
        {
            this.nnsAuctingList = arr.list.map((key) =>
            {
                const newObj = {
                    fulldomain: key.fulldomain,
                    txid: key.lastTime.txid,
                    maxPrice: key.maxPrice,
                    maxBuyer: key.maxBuyer,
                    auctionState: key.auctionState,
                }
                return newObj;
            })
        }
        return true;
    }
    @action public async getAuctingDomainbyPrice(page: number, size: number)
    {
        let result: any = null;
        try
        {
            result = await Api.getauctingdomainbymaxprice(page, size);
        } catch (error)
        {
            return false;
        }
        const arr: INNSAucting = result || [];
        this.nnsAuctingCount = result ? result[0].count : 0;
        if (arr.list && arr.list.length !== 0)
        {
            this.nnsAuctingList = arr.list.map((key) =>
            {
                const newObj = {
                    fulldomain: key.fulldomain,
                    txid: key.lastTime.txid,
                    maxPrice: key.maxPrice,
                    maxBuyer: key.maxBuyer,
                    auctionState: key.auctionState,
                }
                return newObj;
            })
        }

        return true;
    }
    @action public async getAuctedDomain(page: number, size: number)
    {
        let result: any = null;
        try
        {
            result = await Api.getaucteddomain(page, size);
        } catch (error)
        {
            return false;
        }
        const arr: INNSAuctioned = result || [];
        this.nnsAuctingCount = result ? result[0].count : 0;
        if (arr.list && arr.list.length !== 0)
        {
            this.nnsAuctionedList = arr.list.map((key) =>
            {
                const newObj = {
                    range: key.range,
                    fulldomain: key.fulldomain,
                    txid: key.lastTime.txid,
                    maxPrice: key.maxPrice,
                    maxBuyer: key.maxBuyer,
                    ttl: key.ttl
                }
                return newObj;
            })
        }
        return true;
    }
}

export default new NNS();