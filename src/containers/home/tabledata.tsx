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
import * as formatTime from 'utils/formatTime';
import { toThousands } from '@/utils/numberTool'
import { injectIntl } from 'react-intl';

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

  public renderBlock = (value, key) =>
  {
    if (key === 'index')
    {
      // console.log(this.props.history.location)
      // const href = this.props.history.push('/block/index='+value);
      return <span className="img-text"><img src={require('@/img/height.png')} alt="" /><a href="sdf">{toThousands(value.toString())}</a></span>
    }

    if (key === 'time')
    {
      value = formatTime.format('yyyy/MM/dd | hh:mm:ss', value.toString(), this.props.intl.locale)
      return <span className="small-font">{value}</span>
    }
    return null;
  }

  public renderTran = (value, key) =>
  {
    if (key === 'type')
    {
      value = value.replace('Transaction', '')
      return <span className="img-text"><img src={this.imgs[value.toLowerCase()]} alt="" />{value}</span>
    }

    if (key === 'txid')
    {
      value = value.replace(/^(.{4})(.*)(.{4})$/, '$1...$3');
      return <span><a href="#">{value}</a></span>
    }

    return null;
  }
  public onViewBlock = () =>
  {
    // const url =  process.env.REACT_APP_SERVER_ENV === 'DEV'? '/test/blocks': '/blocks/';
    this.props.history.push('/blocks/');
  }
  public onViewTran = () =>
  {
    // const url = process.env.REACT_APP_SERVER_ENV === 'DEV' ? '/test/transactions' : '/transactions/';
    this.props.history.push('/transactions/');
  }
  public componentDidMount()
  {
    this.props.home.getBlockList(10, 1);
    this.props.home.getTransList(10, 1, '');
  }

  public render()
  {
    return (
      <div className="tabledata-page">
        <div className="block-table">
          <Table tableTh={this.blockTableTh} tableData={this.props.home.blockList} render={this.renderBlock}>
            <TitleText text="Blocks" isTableTitle={true} img={require('@/img/blocks.png')}>
              <Button text="View all" onClick={this.onViewBlock} />
            </TitleText>
          </Table>
        </div>
        <div className="tran-table">
          <Table tableTh={this.transTableTh} tableData={this.props.home.transList} render={this.renderTran}>
            <TitleText text="Transactions" isTableTitle={true} img={require('@/img/transactions.png')} >
              <Button text="View all" onClick={this.onViewTran} />
            </TitleText>
          </Table>
        </div>
      </div >
    );
  }
}

export default injectIntl(TableData);
