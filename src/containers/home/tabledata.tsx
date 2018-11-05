/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
import Button from '@/components/Button/Button';
import Table from '@/components/Table/Table';
import './index.less';
import { IHomeProps } from './interface/home.interface';

class TableData extends React.Component<IHomeProps,any>
{
  public blockTableTh = [
    "Height",
    "Size",
    "Transactions",
    "Created on"
  ]
  public transTableTh = [
    "Type",
    "TXID",
    "Height",
    "Created on"
  ]
  // public tableData = [
  //   {
  //     height: "contact",
  //     size: "6276 bytes",
  //     transactions: "12",
  //     createdTime: "2018/04/17 | 16:17"
  //   },
  //   {
  //     height: "1,123,232",
  //     size: "6276 bytes",
  //     transactions: "12",
  //     createdTime: "2018/04/17 | 16:17"
  //   },
  //   {
  //     height: "1,123,232",
  //     size: "6276 bytes",
  //     transactions: "12",
  //     createdTime: "2018/04/17 | 16:17"
  //   },
  //   {
  //     height: '1,123,232',
  //     size: "6276 bytes",
  //     transactions: "12",
  //     createdTime: "2018/04/17 | 16:17"
  //   },
  //   {
  //     height: "1,123,232",
  //     size: "6276 bytes",
  //     transactions: "12",
  //     createdTime: "2018/04/17 | 16:17"
  //   },
  //   {
  //     height: "1,123,232",
  //     size: "6276 bytes",
  //     transactions: "12",
  //     createdTime: "2018/04/17 | 16:17"
  //   },
  //   {
  //     height: '1,123,232',
  //     size: "6276 bytes",
  //     transactions: "12",
  //     createdTime: "2018/04/17 | 16:17"
  //   },
  //   {
  //     height: "1,123,232",
  //     size: "6276 bytes",
  //     transactions: "12",
  //     createdTime: "2018/04/17 | 16:17"
  //   },
  //   {
  //     height: "1,123,232",
  //     size: "6276 bytes",
  //     transactions: "12",
  //     createdTime: "2018/04/17 | 16:17"
  //   },
  //   {
  //     height: "1,123,232",
  //     size: "6276 bytes",
  //     transactions: "12",
  //     createdTime: "2018/04/17 | 16:17"
  //   }
  // ]

  public imgs = {
    contact:require('@/img/contract.png'),
    claim:require('@/img/claim.png'),
    invocation:require('@/img/invocation.png'),
    miner:require('@/img/miner.png'),
    issue:require('@/img/issue.png'),
    register:require('@/img/register.png'),
    publish:require('@/img/publish.png'),
    enrollment:require('@/img/enrollment.png'),
    agency:require('@/img/agency.png')
  }

  public renderBlock = (value, key) => {
    if(key === 'height') {
      return <span className="img-text"><img src={require('@/img/height.png')} alt=""/><a href="http://www.baidu.com">{value}</a></span>
    }

    return null;
  }

  public renderTran = (value, key) => {
    if(key === 'size') {
      return <span><a href="http://www.qq.com">{value}</a></span>
    }

    if(key === 'height') {
      return <span className="img-text"><img src={this.imgs[value]} alt=""/>{value}</span>
    }

    return null;
  }
  public componentDidMount()
  {
    this.props.home.getBlockList(10,1);
    this.props.home.getTransList(10,1,'');
  }

  public render()
  {
    return (
      <div className="tabledata-page">
        <div className="block-table">
          <Table tableTh={this.blockTableTh} tableData={this.tableData} render={this.renderBlock}>
            <TitleText text="Blocks" isTableTitle={true} img={require('@/img/blocks.png')}>
              <Button text="View all" />
            </TitleText>
          </Table>
        </div>
        <div className="tran-table">
          <Table tableTh={this.transTableTh} tableData={this.tableData} render={this.renderTran}>
            <TitleText text="Transactions" isTableTitle={true} img={require('@/img/transactions.png')} >
              <Button text="View all" />
            </TitleText>
          </Table>
        </div>
      </div >
    );
  }
}

export default TableData;
