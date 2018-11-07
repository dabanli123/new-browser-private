/**
 * 主页布局
 */
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import TitleText from '@/components/titletext/index';
import Table from '@/components/Table/Table';
import './index.less'
import { IBlockProps } from './interface/block.interface';
import * as formatTime from 'utils/formatTime';
import { toThousands } from '@/utils/numberTool'
import { injectIntl } from 'react-intl';
import Page from '@/components/Page';

@inject('block')
@observer
class Block extends React.Component<IBlockProps, any> {
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
  public state = {
    currentPage: 1,
    pageSize: 15
  }
  // 初始化数据
  public componentDidMount() {
    this.props.block.getBlockHeight();
    this.props.block.getBlockList(this.state.pageSize, this.state.currentPage);
  }
  // 列表特殊处理
  public renderBlock = (value, key) => {
    if (key === 'index') {
      return <span><img src={require('@/img/height.png')} alt="" /><a onClick={this.toBlockInfo.bind(this,value)} href="javascript:;">{toThousands(value.toString())}</a></span>
    }

    if (key === 'time') {
      value = formatTime.format('yyyy/MM/dd | hh:mm:ss', value.toString(), this.props.intl.locale);
      return <span className="small-font">{value}</span>
    }
    return null;
  }
  // 跳转到详情页
  public toBlockInfo = (index: string) =>
  {
    this.props.history.push('/block/' + index)
  }
  // 翻页功能
  public onGoPage = (index: number) => {
    console.log(index)
    this.setState({
      currentPage: index
    }, () => {
      this.props.block.getBlockList(this.state.pageSize, this.state.currentPage);
    })
  }
  public render() {
    if (!this.props.block.blockHeight) {
      return null;
    }
    const blockheight = parseInt(this.props.block.blockHeight, 10);
    return (
      <div className="block-page">
        <TitleText text="Blocks" img={require('@/img/blocks.png')} />
        <div className="block-table">
          <Table
            tableTh={this.blockTableTh}
            tableData={this.props.block.blockList}
            render={this.renderBlock}
          />
          <Page 
            totalCount={blockheight} 
            pageSize={this.state.pageSize} 
            currentPage={this.state.currentPage} 
            onChange={this.onGoPage} 
          />
        </div>
      </div>
    );
  }
}

export default injectIntl(Block);
