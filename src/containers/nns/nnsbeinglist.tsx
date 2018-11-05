/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
// import Table from '@/components/Table/Table';
import Select from '@/components/select'
import './index.less'

class NNSBeing extends React.Component {
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
  public onCallback = (item) => {
    console.log(item)
  }
  public render() {
    return (
      <div className="nnsbeing-page">
        <TitleText text="Live auctions" img={require('@/img/myauction.png')} isTableTitle={true} isInline={true}>
          <Select options={this.options} text="Ordered by" onCallback={this.onCallback} style={{ minWidth: "186px" }} />
        </TitleText>
        {/* <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true} /> */}
      </div>
    );
  }
}

export default NNSBeing;
