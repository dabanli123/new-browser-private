/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
import Table from '@/components/Table/Table';
import './index.less'

class AddressInfo extends React.Component
{
  public tableTh = [
    "Type",
    "Txid",
    "Version",
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
  public render()
  {
    return (
      <div className="addressinfo-page">
        <div className="goback-wrapper">
            <span className="goback-text">&lt;&lt;  Go back</span>
        </div>
        <div className="info-content">
            <TitleText text="Address information" isInfoTitle={true}/>
            <div className="info-list">
                <ul>
                    <li>
                        <span className="type-name">
                            Address
                        </span>
                        <span className="type-content">
                        ASmJfHD6mxyMzbX2KFXdYHGZAUokQDDrht
                        </span>
                    </li>
                    <li>
                        <span className="type-name">
                        Created on
                        </span>
                        <span className="type-content">
                        Mon, 09 Apr 2018 09:20:10 GMT
                        </span>
                    </li>
                    <li>
                        <span className="type-name">
                        Transactions
                        </span>
                        <span className="type-content">
                        88
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="addressinfo-balance-wrapper">
            <TitleText text="Balance"/>
            <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true}/>
        </div>
        <div className="addressinfo-tran-wrapper">
            <TitleText text="Transactions"/>
            <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true}/>
        </div>
        <div className="addressinfo-utxo-wrapper">
            <TitleText text="UTXO"/>
            <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true}/>
        </div>
      </div>
    );
  }
}

export default AddressInfo;
