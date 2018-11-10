import { INNSInfoStore, IAuctionInfo, IAuctionedInfo, IDomainBidRankList, IDomainBidInfoList } from "../interface/nnsinfo.interface";
import * as Api from '../api/nnsinfo.api';
import * as NNSApi from '../api/nns.api';
import { observable, action } from "mobx";

class NNSInfo implements INNSInfoStore {
    @observable public nnsInfo: IAuctionInfo | null = null;
    @observable public domainInfo: IAuctionedInfo | null = null;
    @observable public domainBidRankCount: number = 0;
    @observable public domainBidRankList: IDomainBidRankList[] = [];
    @observable public domainBidInfoCount: number = 0;
    @observable public domainBidInfoList: IDomainBidInfoList[] = [];

    @action public async getAuctionInfo(domain: string) {
        let result: any = null;
        try {
            result = await Api.getauctionres(domain);
        } catch (error) {
            return false;
        }
        this.nnsInfo = result ? result[0] : null;
        return true;
    }

    @action public async getAuctionBidRank(domainid: string, page: number, size: number) {
        let result: any = null;
        try {
            result = await Api.getauctioninfoRank(domainid, page, size);
        } catch (error) {
            return false;
        }
        this.domainBidRankCount = result ? result[0].count :0;
        this.domainBidRankList = result? result[0].list:[];
        return true;
    }

    @action public async getAuctionBidInfoTx(domainid: string, page: number, size: number) {
        let result: any = null;
        try {
            result = await Api.getauctioninfoTx(domainid, page, size);
        } catch (error) {
            return false;
        }
        this.domainBidInfoCount = result ? result[0].count :0;
        this.domainBidInfoList = result? result[0].list:[];
        return true;
    }

    @action public async getAuctionedInfo(domain: string) {
        let result: any = null;
        try {
            result = await NNSApi.searchbydomain(domain);
        } catch (error) {
            return false;
        }
        this.domainInfo = result ? result[0] : null;
        return true;
    }
}
export default new NNSInfo();