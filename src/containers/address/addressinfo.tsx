/**
 * 主页布局
 */
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import TitleText from '@/components/titletext/index';
// import Table from '@/components/Table/Table';
import './index.less'
import { IAddressProps } from './interface/address.interface';
import * as formatTime from 'utils/formatTime';
import { injectIntl } from 'react-intl';
import Page from '@/components/Page';
@inject('address')
@observer
class AddressInfo extends React.Component<IAddressProps, {}> {
  public state = {
    address:'',
    utxoPage: 1,
    utxoSize: 15
  }
  public tableTh = [
    "Type",
    "Txid",
    "Version",
    "Created on"
  ]
  public async componentDidMount()
  {
    const params = this.props.match.params;
    this.setState({
      address:params["address"]
    });
    this.getInfos(params["address"]);
    // await this.props.address.getAddrUtxoCount(params["address"]);
    // if (this.props.address.addUtxoCount)
    // {
      this.getUtxoList(this.state.address);
    // }
  }
  // 请求数据
  public getInfos = (address) =>
  {
    return this.props.address.getAddressInfo(address);
  }
  // 获取utxo列表
  public getUtxoList = (address:string) => {
    return this.props.address.getAddrUtxoList(address, this.state.utxoSize, this.state.utxoPage)
  }
  // utxo翻页功能
  public onUtxoPage = (index: number) => {
    console.log(index)
    this.setState({
      currentPage: index
    }, () => {
      this.getUtxoList(this.state.address);
    })
  }
  public render()
  {
    return (
      <div className="addressinfo-page">
        <div className="goback-wrapper">
          <span className="goback-text">&lt;&lt;  Go back</span>
        </div>
        <div className="info-content">
          <TitleText text="Address information" isInfoTitle={true} />
          <div className="info-list">
            <ul>
              <li>
                <span className="type-name">Address</span>
                <span className="type-content">{this.props.address.addInfo && this.props.address.addInfo.addr}</span>
              </li>
              <li>
                <span className="type-name">Created on</span>
                <span className="type-content">
                  {this.props.address.addInfo && formatTime.format('yyyy/MM/dd | hh:mm:ss', this.props.address.addInfo.firstuse.blocktime.$date.toString(), this.props.intl.locale)}
                </span>
              </li>
              <li>
                <span className="type-name">Transactions</span>
                <span className="type-content">{this.props.address.addInfo && this.props.address.addInfo.txcount}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="addressinfo-balance-wrapper">
          <TitleText text="Balance" />
          {/* <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true}/> */}
        </div>
        <div className="addressinfo-tran-wrapper">
          <TitleText text="Transactions" />
          {/* <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true}/> */}
        </div>
        <div className="addressinfo-utxo-wrapper">
          <TitleText text="UTXO" />
          <div className="addrinfo-utxo-table">
            {/* <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true}/> */}
            <Page
              totalCount={this.props.address.addUtxoList.count}
              pageSize={this.state.utxoSize}
              currentPage={this.state.utxoPage}
              onChange={this.onUtxoPage}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default injectIntl(AddressInfo);
