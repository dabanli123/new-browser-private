/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
import Table from '@/components/Table/Table';
import Select from '@/components/select';
import './index.less'

class Transactions extends React.Component {
    public options = [
        "all",
        "contract",
        "claim",
        "invocation",
        "miner"
    ]
    public tableTh = [
        "Type",
        "Txid",
        "Height",
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
            <div className="transaction-page">
                <TitleText text="Transactions" img={require('@/img/transactions.png')} isInline={true}>
                    <Select options={this.options} text="Type" />
                </TitleText>
                <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true} />
            </div>
        );
    }
}

export default Transactions;
