/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
// import Table from '@/components/Table/Table';
import './index.less'

class BlockInfo extends React.Component {
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
    public render() {
        return (
            <div className="blockinfo-page">
                <div className="goback-wrapper">
                    <span className="goback-text">&lt;&lt;  Go back</span>
                </div>
                <div className="info-content">
                    <TitleText text="Block information" isInfoTitle={true} />
                    <div className="info-list">
                        <ul>
                            <li>
                                <span className="type-name">
                                    Block height
                        </span>
                                <span className="type-content">
                                    2880573
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Hash
                        </span>
                                <span className="type-content">
                                    0x87dc247d333efd0caff0067db51e3978179f62edded541cfd79e5d8b9e01283d0x8179f62edded541cfd79e5d8b9e01283d0x87dc247d333efd0caff0067db51e3978179f62edded541cfd79e5d8b9e01283d
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Time
                        </span>
                                <span className="type-content">
                                    Tue, 23 Oct 2018 01:53:30 GMT
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Size
                        </span>
                                <span className="type-content">
                                    1294 bytes
                        </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Previous Block
                        </span>
                                <span className="type-content">
                                    <a href="">2880572</a>
                                </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Next Block
                        </span>
                                <span className="type-content">
                                    <a href="">2880572</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="blockinfo-tran-wrapper">
                    <TitleText text="Transactions" />
                    {/* <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true}/> */}
                </div>
            </div>
        );
    }
}

export default BlockInfo;
