/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
import Table from '@/components/Table/Table';
import './index.less'

class NNSBeing extends React.Component
{
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
  // public onCallback = (item) =>
  // {
  //     console.log(item)
  // }
  public render()
  {
    return (
      <div className="nnsrank-page">
        <TitleText text="Most valuable domain name rank" img={require('@/img/rank.png')} isTableTitle={true} />
        <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true} />
      </div>
    );
  }
}

export default NNSBeing;
