/**
 * 主页布局
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import TitleText from '@/components/titletext/index';
import Button from '@/components/Button/Button';
// import Table from '@/components/Table/Table';
import './index.less';
import * as formatTime from 'utils/formatTime';
import { injectIntl } from 'react-intl';
import { INNSProps } from './interface/nns.interface';
import Select from '@/components/select';

@observer
class TableData extends React.Component<INNSProps, any>
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
  public auctingTableTh = [
    {
      name: 'Domain name',
      key: 'fulldomain'
    },
    {
      name: 'TXid',
      key: 'txid'
    },
    {
      name: 'Highest bid',
      key: 'maxPrice'
    },
    {
      name: 'Highest bidder',
      key: 'maxBuyer'
    },
    {
      name: 'Stage',
      key: 'auctionState'
    }
  ]
  public auctedTableTh = [
    {
      name: 'Rank',
      key: 'range'
    },
    {
      name: 'Domain name',
      key: 'fulldomain'
    },
    {
      name: 'Txid',
      key: 'txid'
    },
    {
      name: 'Hammer price',
      key: 'maxPrice'
    },
    {
      name: 'Buyer',
      key: 'maxBuyer'
    },
    {
      name: 'Expiration time',
      key: 'ttl'
    }
  ]
  public onCallback = (item) =>
  {
    console.log(item)
    if (this.props.nns.orderBy === 'time')
    {
      this.props.nns.getAuctingDomain(1, 10);
    } else
    {
      this.props.nns.getAuctingDomainbyPrice(1, 10);
    }
  }
  // 初始
  public componentDidMount()
  {
    this.props.nns.getAuctedDomain(1, 10);
  }
  // 区块列表特殊处理
  public renderAucting = (value, key) =>
  {
    if (key === 'fulldomain')
    {
      return <span><a onClick={this.toNNSInfo.bind(this, value)} href="javascript:;">{value}</a></span>
    }
    if (key === 'txid')
    {
      const txid = value.replace(/^(.{4})(.*)(.{4})$/, '$1...$3');
      return <span><a href="javascript:;" onClick={this.toTransInfo.bind(this, value)}>{txid}</a></span>
    }
    if (key === 'maxBuyer')
    {
      const addr = value.replace(/^(.{4})(.*)(.{4})$/, '$1...$3');
      return <span><a onClick={this.toAddrInfo.bind(this, value)} href="javascript:;">{addr}</a></span>
    }    
    return null;
  }
  // 交易列表特殊处理
  public renderAucted = (value, key) =>
  {
    if (key === 'fulldomain')
    {
      return <span><a onClick={this.toNNSInfo.bind(this, value)} href="javascript:;">{value}</a></span>
    }
    if (key === 'txid')
    {
      const txid = value.replace(/^(.{4})(.*)(.{4})$/, '$1...$3');
      return <span><a href="javascript:;" onClick={this.toTransInfo.bind(this, value)}>{txid}</a></span>
    }
    if (key === 'maxBuyer')
    {
      const addr = value.replace(/^(.{4})(.*)(.{4})$/, '$1...$3');
      return <span><a onClick={this.toAddrInfo.bind(this, value)} href="javascript:;">{addr}</a></span>
    }    
    if (key === 'time')
    {
      value = formatTime.format('yyyy/MM/dd | hh:mm:ss', value.toString(), this.props.intl.locale)
      return <span className="small-font">{value}</span>
    }
    return null;
  }  
  // 跳转到竞拍中的域名列表页
  public onViewAucting = () =>
  {
    this.props.history.push('/nnsbeing/');
  }
  // 跳转到域名价值排行列表页
  public onViewAucted = () =>
  {
    this.props.history.push('/nnsrank/');
  }
  // 跳转到域名详情页
  public toNNSInfo = (domain: string) =>
  {
    this.props.history.push('/nnsinfo/' + domain)
  }
  // 跳转到交易详情页
  public toTransInfo = (txid: string) =>
  {
    this.props.history.push('/transaction/' + txid)
  }
  // 跳转到域名详情页
  public toAddrInfo = (addr: string) =>
  {
    this.props.history.push('/address/' + addr)
  }
  public render()
  {
    return (
      <React.Fragment>
        <div className="being-wrapper">
          <TitleText text="Live auctions" img={require('@/img/myauction.png')} isTableTitle={true} isInline={true}>
            <Select options={this.options} text="Ordered by" onCallback={this.onCallback} style={{ minWidth: "186px" }} />
            <Button text="View all" />
          </TitleText>
          {/* <Table tableTh={this.tableTh} tableData={this.tableData} /> */}
        </div>
        <div className="rank-wrapper">
          <TitleText text="Most valuable domain name rank" img={require('@/img/rank.png')} isTableTitle={true} >
            <Button text="View all" />
          </TitleText>
          {/* <Table tableTh={this.tableTh} tableData={this.tableData} /> */}
        </div>
      </React.Fragment >
    );
  }
}

export default injectIntl(TableData);
