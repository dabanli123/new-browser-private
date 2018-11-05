/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
// import Table from '@/components/Table/Table';
import './index.less'

class Block extends React.Component {
  public tableTh = [
    "Height",
    "Size",
    "Transactions",
    "Created on"
  ]
  public tableData = [
    {
      height: '1,123,232',
      size: "6276 bytes",
      transactions: "12",
      createdTime: "2018/04/17 | 16:17"
    },
    {
      height: "1,123,232",
      size: "6276 bytes",
      transactions: "12",
      createdTime: "2018/04/17 | 16:17"
    },
    {
      height: "1,123,232",
      size: "6276 bytes",
      transactions: "12",
      createdTime: "2018/04/17 | 16:17"
    },
    {
      height: '1,123,232',
      size: "6276 bytes",
      transactions: "12",
      createdTime: "2018/04/17 | 16:17"
    },
    {
      height: "1,123,232",
      size: "6276 bytes",
      transactions: "12",
      createdTime: "2018/04/17 | 16:17"
    },
    {
      height: "1,123,232",
      size: "6276 bytes",
      transactions: "12",
      createdTime: "2018/04/17 | 16:17"
    },
    {
      height: '1,123,232',
      size: "6276 bytes",
      transactions: "12",
      createdTime: "2018/04/17 | 16:17"
    },
    {
      height: "1,123,232",
      size: "6276 bytes",
      transactions: "12",
      createdTime: "2018/04/17 | 16:17"
    },
    {
      height: "1,123,232",
      size: "6276 bytes",
      transactions: "12",
      createdTime: "2018/04/17 | 16:17"
    },
    {
      height: "1,123,232",
      size: "6276 bytes",
      transactions: "12",
      createdTime: "2018/04/17 | 16:17"
    }
  ]
  public render() {
    return (
      <div className="block-page">
        <TitleText text="Blocks" img={require('@/img/blocks.png')} />
        {/* <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true}/> */}
      </div>
    );
  }
}

export default Block;
