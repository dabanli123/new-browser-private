/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
// import Table from '@/components/Table/Table';
import './index.less'

class TransactionInfo extends React.Component {
    public tableTh = [
        "Address",
        "Asset"
    ]
    public tableData = [
        {
            address: 'ANUTf3uNmeJqMQGoAZbm8m2ytrSajSwfRR',
            asset: "12345678.23456778 GAS"
        },
        {
            address: 'ANUTf3uNmeJqMQGoAZbm8m2ytrSajSwfRR',
            asset: "12345678.23456778 GAS"
        },
        {
            address: 'ANUTf3uNmeJqMQGoAZbm8m2ytrSajSwfRR',
            asset: "12345678.23456778 GAS"
        },
        {
            address: 'ANUTf3uNmeJqMQGoAZbm8m2ytrSajSwfRR',
            asset: "12345678.23456778 GAS"
        },
        {
            address: 'ANUTf3uNmeJqMQGoAZbm8m2ytrSajSwfRR',
            asset: "12345678.23456778 GAS"
        }
    ]
    public render() {
        return (
            <div className="transactioninfo-page">
                <div className="goback-wrapper">
                    <span className="goback-text">&lt;&lt;  Go back</span>
                </div>
                <div className="info-content">
                    <TitleText text="Transaction information" isInfoTitle={true} />
                    <div className="info-list">
                        <ul>
                            <li>
                                <span className="type-name">
                                    TXid
                        </span>
                                <span className="type-content">
                                    0xf0a62e7c3a1c232adb016ccb7682e7b4f745f2b9002ef9c8ed853320d8a16419
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Type
                        </span>
                                <span className="type-content">
                                    Miner
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Network Fee
                        </span>
                                <span className="type-content">
                                    0 GAS
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    System Fee
                        </span>
                                <span className="type-content">
                                    0 GAS
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Size
                        </span>
                                <span className="type-content">
                                    10 bytes
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Height
                        </span>
                                <span className="type-content">
                                    <a href="">2880572</a>
                                </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Time
                        </span>
                                <span className="type-content">
                                    Tue, 23 Oct 2018 02:58:27 GMT
                        </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="transactioninfo-input-output">
                    <div className="input-wrapper">
                        <TitleText text="Input" />
                        {/* <Table tableTh={this.tableTh} tableData={this.tableData}/> */}
                    </div>
                    <div className="output-wrapper">
                        <TitleText text="Output" />
                        {/* <Table tableTh={this.tableTh} tableData={this.tableData}/> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default TransactionInfo;
