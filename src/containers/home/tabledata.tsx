/**
 * 主页布局
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import TitleText from '@/components/titletext/index';
import Button from '@/components/Button/Button';
import Table from '@/components/Table/Table';
import './index.less';
import { IHomeProps } from './interface/home.interface';

@observer
class TableData extends React.Component<IHomeProps, any>
{
  public blockTableTh = [
    {
      name: 'Height',
      key: 'index'
    },
    {
      name: 'Size',
      key: 'size'
    },
    {
      name: 'Transactions',
      key: 'txcount'
    },
    {
      name: 'Created on',
      key: 'time'
    }
  ]
  public transTableTh = [
    {
      name: 'Type',
      key: 'type',
    },
    {
      name: 'TXID',
      key: 'txid'
    }, {
      name: 'Height',
      key: 'blockindex'
    }, {
      name: 'Size',
      key: 'size'
    }
  ]
  // public tableData = [
  //   {
  //     height: "contact",
  //     size: "6276 bytes",
  //     transactions: "12",
  //     createdTime: "2018/04/17 | 16:17"
  //   }
  // ]

  public imgs = {
    contact: require('@/img/contract.png'),
    claim: require('@/img/claim.png'),
    invocation: require('@/img/invocation.png'),
    miner: require('@/img/miner.png'),
    issue: require('@/img/issue.png'),
    register: require('@/img/register.png'),
    publish: require('@/img/publish.png'),
    enrollment: require('@/img/enrollment.png'),
    agency: require('@/img/agency.png')
  }

  public renderBlock = (value, key) => {
    if (key === 'index') {
      return <span className="img-text"><img src={require('@/img/height.png')} alt="" /><a href="http://www.baidu.com">{value}</a></span>
    }

    return null;
  }

  public renderTran = (value, key) => {
    if (key === 'type') {
      value = value.replace('Transaction', '')
      return <span className="img-text"><img src={this.imgs[value.toLowerCase()]} alt="" />{value}</span>
    }

    if (key === 'txid') {
      value = value.replace(/^(.{4})(.*)(.{4})$/, '$1...$3');
      return <span className="img-text"><a href="#">{value}</a></span>
    }

    return null;
  }
  public componentDidMount() {
    this.props.home.getBlockList(10, 1);
    this.props.home.getTransList(10, 1, '');
  }

  public render() {
    return (
      <div className="tabledata-page">
        <div className="block-table">
          <Table tableTh={this.blockTableTh} tableData={this.props.home.blockList} render={this.renderBlock}>
            <TitleText text="Blocks" isTableTitle={true} img={require('@/img/blocks.png')}>
              <Button text="View all" />
            </TitleText>
          </Table>
        </div>
        <div className="tran-table">
          <Table tableTh={this.transTableTh} tableData={this.props.home.transList} render={this.renderTran}>
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
