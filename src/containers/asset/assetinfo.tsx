/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
// import Table from '@/components/Table/Table';
import './index.less'

class AssetInfo extends React.Component {
    public tableTh = [
        "Rank",
        "Address",
        "Amount"
    ]
    public tableData = [
        {
            rank: "1",
            address: 'ANUTf3uNmeJqMQGoAZbm8m2ytrSajSwfRR',
            amount: "12345678.23456778 GAS"
        },
        {
            rank: "1",
            address: 'ANUTf3uNmeJqMQGoAZbm8m2ytrSajSwfRR',
            amount: "12345678.23456778 GAS"
        },
        {
            rank: "1",
            address: 'ANUTf3uNmeJqMQGoAZbm8m2ytrSajSwfRR',
            amount: "12345678.23456778 GAS"
        },
        {
            rank: "1",
            address: 'ANUTf3uNmeJqMQGoAZbm8m2ytrSajSwfRR',
            amount: "12345678.23456778 GAS"
        },
        {
            rank: "1",
            address: 'ANUTf3uNmeJqMQGoAZbm8m2ytrSajSwfRR',
            amount: "12345678.23456778 GAS"
        },
        {
            rank: "1",
            address: 'ANUTf3uNmeJqMQGoAZbm8m2ytrSajSwfRR',
            amount: "12345678.23456778 GAS"
        }
    ]
    public render() {
        return (
            <div className="assetinfo-page">
                <div className="goback-wrapper">
                    <span className="goback-text">&lt;&lt;  Go back</span>
                </div>
                <div className="info-content">
                    <TitleText text="Asset information" isInfoTitle={true} />
                    <div className="info-list">
                        <ul>
                            <li>
                                <span className="type-name">
                                    Asset
                        </span>
                                <span className="type-content">
                                    NEO
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Hash
                        </span>
                                <span className="type-content">
                                    0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Type
                        </span>
                                <span className="type-content">
                                    Governing Token
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Available
                        </span>
                                <span className="type-content">
                                    100000
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Precision
                        </span>
                                <span className="type-content">
                                    0
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Admin
                        </span>
                                <span className="type-content">
                                    Abf2qMs1pzQb8kYk9RuxtUb9jtRKJVuBJt
                        </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="asset-balance-rank">
                    <TitleText text="Balance rank" />
                    {/* <Table tableTh={this.tableTh} tableData={this.tableData}/> */}
                </div>
            </div>
        );
    }
}

export default AssetInfo;
