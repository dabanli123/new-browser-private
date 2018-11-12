/**
 * 地址列表页
 */
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import TitleText from '@/components/titletext/index';
import Table from '@/components/Table/Table';
import * as formatTime from 'utils/formatTime';
import { injectIntl } from 'react-intl';
import Page from '@/components/Page';
import './index.less'
import { IAddressProps } from './interface/address.interface';

@inject('address')
@observer
class Address extends React.Component<IAddressProps, {}> {
  public addrTableTh = [
    {
      name: 'Address',
      key: 'addr'
    },
    {
      name: 'First transaction time',
      key: 'firstuse'
    },
    {
      name: 'Last transaction time',
      key: 'lastuse'
    },
    {
      name: 'Transactions',
      key: 'txcount'
    }
  ]
  public state = {
    currentPage: 1,
    pageSize: 15
  }
  // 初始化数据
  public componentDidMount() {
    this.props.address.getAddrCount();
    this.props.address.getAddressList(this.state.pageSize, this.state.currentPage);
  }
  // 列表特殊处理
  public renderAddress = (value, key) => {
    if (key === 0) {
      return <li className="addr-text">{value}</li>
    }
    if (key === 'addr') {
      return <span className="addr-text"><a onClick={this.toAddressInfo.bind(this, value)} href="javascript:;">{value}</a></span>
    }
    if (key === 'firstuse') {
      const time = formatTime.format('yyyy/MM/dd | hh:mm:ss', value.toString(), this.props.intl.locale);
      return <span>{time}</span>
    }
    if (key === 'lastuse') {
      const time = formatTime.format('yyyy/MM/dd | hh:mm:ss', value.toString(), this.props.intl.locale);
      return <span>{time}</span>
    }
    return null;
  }
  // 跳转到详情页
  public toAddressInfo = (address: string) => {
    this.props.history.push('/address/' + address)
  }
  // 翻页功能
  public onGoPage = (index: number) => {
    console.log(index)
    this.setState({
      currentPage: index
    }, () => {
      this.props.address.getAddressList(this.state.pageSize, this.state.currentPage);
    })
  }
  public render() {
    if (!this.props.address.addrCount) {
      return null;
    }

    console.log(this.props.address.addrCount)
    return (
      <div className="address-page">
        <TitleText text="Addressses" img={require('@/img/address.png')} />
        <div className="address-table-wrapper">
          <Table
            tableTh={this.addrTableTh}
            tableData={this.props.address.addrList}
            render={this.renderAddress}
            className="address-table"
          />
          <Page
            totalCount={parseInt(this.props.address.addrCount, 10)}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onChange={this.onGoPage}
          />
        </div>
      </div>
    );
  }
}

export default injectIntl(Address);
