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
    currentPage:1,
    pageSize:15
  }
  public async componentDidMount()
  {
    await this.props.block.getBlockHeight();
    await this.props.block.getBlockList(this.state.pageSize,this.state.currentPage);
  }
  public renderBlock = (value, key) =>
  {
    if (key === 'index')
    {
      const href = this.props.history.location.pathname = process.env.REACT_APP_SERVER_ENV === 'DEV' ? '/test/block/' + value : '  /block/' + value;
      return <span><img src={require('@/img/height.png')} alt="" /><a href={href}>{toThousands(value.toString())}</a></span>
    }

    if (key === 'time')
    {
      value = formatTime.format('yyyy/MM/dd | hh:mm:ss', value.toString(), this.props.intl.locale);
      return <span className="small-font">{value}</span>
    }
    return null;
  }
  public onGoPage = (index:number) => {
    this.setState({
      currentPage:index
    })
    console.log(this.state);
    
  }
  public render()
  {
    const blockheight = parseInt(this.props.block.blockHeight,10);    
    return (
      <div className="block-page">
        <TitleText text="Blocks" img={require('@/img/blocks.png')} />
        <div className="block-table">
          <Table 
            tableTh={this.blockTableTh} 
            tableData={this.props.block.blockList} 
            totalCount={blockheight}
            pageSize={this.state.pageSize}
            render={this.renderBlock} 
          />
          <Page  totalCount={blockheight} pageSize={this.state.pageSize} currentPage={this.state.currentPage} onChange={this.onGoPage} />
        </div>        
      </div>
    );
  }
}

export default injectIntl(Block);
