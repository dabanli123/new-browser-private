/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
import Table from '@/components/Table/Table';
import DomainInfo from './domaininfo';
import AuctionInfo from './auctioninfo';
import '../index.less'

class NNSInfo extends React.Component
{  
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
      stage: "Auction period"
    },
    {
      domain: 'paycomsoftware.neo',
      txid: "0x4b...5698",
      highestbid: "0.1CGAS",
      highestbidder: "AQ1d...z775",
      stage: "Auction period"
    },
    {
      domain: 'paycomsoftware.neo',
      txid: "0x4b...5698",
      highestbid: "0.1CGAS",
      highestbidder: "AQ1d...z775",
      stage: "Auction period"
    },
    {
      domain: 'paycomsoftware.neo',
      txid: "0x4b...5698",
      highestbid: "0.1CGAS",
      highestbidder: "AQ1d...z775",
      stage: "Auction period"
    },
    {
      domain: 'paycomsoftware.neo',
      txid: "0x4b...5698",
      highestbid: "0.1CGAS",
      highestbidder: "AQ1d...z775",
      stage: "Auction period"
    },
    {
      domain: 'paycomsoftware.neo',
      txid: "0x4b...5698",
      highestbid: "0.1CGAS",
      highestbidder: "AQ1d...z775",
      stage: "Auction period"
    },
    {
      domain: 'paycomsoftware.neo',
      txid: "0x4b...5698",
      highestbid: "0.1CGAS",
      highestbidder: "AQ1d...z775",
      stage: "Auction period"
    },
    {
      domain: 'paycomsoftware.neo',
      txid: "0x4b...5698",
      highestbid: "0.1CGAS",
      highestbidder: "AQ1d...z775",
      stage: "Auction period"
    }
  ]
  // public renderAddress = (value, key) =>
  // {
  //   if (key === 'address')
  //   {
  //     return <span className="img-text"><a href="http://www.baidu.com">{value}</a></span>
  //   }

  //   return null;
  // }
  public onCallback = (item) =>
  {
    console.log(item)
  }
  public render()
  {
    return (
      <div className="nnsinfo-page">
        <div className="goback-wrapper">
            <span className="goback-text">&lt;&lt;  Go back</span>
        </div>
        <div className="info-content">
            <DomainInfo/>
        </div>
        <div className="info-content">
            <AuctionInfo/>
        </div>
        <TitleText text="Transfer information" isInline={true} />
        <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true} />
        <TitleText text="Bid rank"  isInline={true} />
        <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true} />
        <TitleText text="Bid information" isInline={true} />
        <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true} />
      </div>
    );
  }
}

export default NNSInfo;
