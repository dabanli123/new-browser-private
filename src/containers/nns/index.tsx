/**
 * 主页布局
 */
import * as React from 'react';
import Total from '@/containers/nns/total';
import Search from './search';
import Button from '@/components/Button/Button'
import Select from '@/components/select'
import TitleText from '@/components/titletext/index';
import Table from '@/components/Table/Table';
import './index.less'

class NNS extends React.Component {
    public options = [
        {
            id: 'time',
            name: "Auction-starting time",
        },
        {
            id: 'price',
            name: "Highest bid prices",
        }
    ]
    public tableTh = [
        "Domain name",
        "TXid",
        "Highest bid",
        "Highest bidder",
        "Stage"
    ]
    public tableData = [
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage:"Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage:"Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage:"Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage:"Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage:"Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage:"Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage:"Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage:"Auction period"
        }
    ]
    public onCallback = (item) => {
        console.log(item)
    }
    public render() {
        return (
            <div className="nns-page">
                <Total />
                <div className="nns-content">
                    <Search />
                    <div className="being-wrapper">
                        <TitleText text="Live auctions" img={require('@/img/myauction.png')} isInline={true}>
                            <Select options={this.options} text="Ordered by" onCallback={this.onCallback} />
                            {/* <Button text="View all" /> */}
                        </TitleText>
                        <Table tableTh={this.tableTh} tableData={this.tableData} />
                    </div>
                    <div className="being-wrapper">
                        <TitleText text="Most valuable domain name rank" img={require('@/img/rank.png')} >
                            <Button text="View all" />
                        </TitleText>
                        <Table tableTh={this.tableTh} tableData={this.tableData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default NNS;
