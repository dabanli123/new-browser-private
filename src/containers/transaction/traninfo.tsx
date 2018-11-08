/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
import Table from '@/components/Table/Table';
import * as formatTime from 'utils/formatTime';
import './index.less'
import { ITransactionsProps, ITransInfoState } from './interface/transaction.interface';
import { inject, observer } from 'mobx-react';
import { injectIntl } from 'react-intl';

@inject('transaction')
@observer
class TransactionInfo extends React.Component<ITransactionsProps, ITransInfoState> {
    public state = {
        vinList: [],
        outList: []
    }
    public transVTableTh = [
        {
            name: 'Address',
            key: 'address',
        },
        {
            name: 'Asset',
            key: 'value'
        }
    ]
    public async componentDidMount()
    {
        const params = this.props.match.params;
        await this.getTransactionInfo(params["txid"]);
        this.doVinVoutList();
        // if(this.props.transaction.tranInfo){
        // this.props.transaction.getBlockInfo(this.props.transaction.tranInfo.blockindex);
        // }
    }
    // 请求数据
    public getTransactionInfo = (txid: string) =>
    {
        return this.props.transaction.getTransInfo(txid);
    }
    // 返回交易列表
    public onGoBack = () =>
    {
        this.props.history.push('/transactions/');
    }
    // 区块详情链接
    public goBlockInfo = (index: string) =>
    {
        this.props.history.push('/block/' + index)
    }
    public doVinVoutList = () =>
    {
        const vinlist = this.props.transaction.tranInfo.vin.map((key) =>
        {
            const newObj = {
                address: key.address,
                value: key.value + ' ' + key.asset
            }
            return newObj;
        });
        const voutlist = this.props.transaction.tranInfo.vout.map((key) =>
        {
            const newObj = {
                address: key.address,
                value: key.value + ' ' + key.asset
            }
            return newObj;
        });
        this.setState({
            vinList: vinlist,
            outList: voutlist
        })
    }
    public render()
    {
        if (!this.props.transaction.tranInfo)
        {
            return null
        }
        return (
            <div className="transactioninfo-page">
                <div className="goback-wrapper">
                    <span className="goback-text" onClick={this.onGoBack}>&lt;&lt;  Go back</span>
                </div>
                <div className="info-content">
                    <TitleText text="Transaction information" isInfoTitle={true} />
                    <div className="info-list">
                        <ul>
                            <li>
                                <span className="type-name">TXid</span>
                                <span className="type-content">{this.props.transaction.tranInfo && this.props.transaction.tranInfo.txid}</span>
                            </li>
                            <li>
                                <span className="type-name">Type</span>
                                <span className="type-content">{this.props.transaction.tranInfo && this.props.transaction.tranInfo.type.replace('Transaction', '')}</span>
                            </li>
                            <li>
                                <span className="type-name">Network Fee</span>
                                <span className="type-content">{this.props.transaction.tranInfo && this.props.transaction.tranInfo.net_fee} GAS</span>
                            </li>
                            <li>
                                <span className="type-name">System Fee</span>
                                <span className="type-content">{this.props.transaction.tranInfo && this.props.transaction.tranInfo.sys_fee} GAS</span>
                            </li>
                            <li>
                                <span className="type-name">Size</span>
                                <span className="type-content">{this.props.transaction.tranInfo && this.props.transaction.tranInfo.size} bytes</span>
                            </li>
                            <li>
                                <span className="type-name">Height</span>
                                <span className="type-content">
                                    <a href="javascript:;" onClick={this.goBlockInfo.bind(this, this.props.transaction.tranInfo.blockindex)}>{this.props.transaction.tranInfo && this.props.transaction.tranInfo.blockindex}</a>
                                </span>
                            </li>
                            <li>
                                <span className="type-name">Time</span>
                                <span className="type-content">
                                    {this.props.transaction.tranInfo && formatTime.format('yyyy/MM/dd | hh:mm:ss', this.props.transaction.tranInfo.blocktime.toString(), this.props.intl.locale)}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    (this.state.vinList || this.state.outList) &&
                    (
                        <div className="transactioninfo-input-output">
                            <div className="input-wrapper">
                                <TitleText text="Input" />
                                <Table tableTh={this.transVTableTh} tableData={this.state.vinList} />
                            </div>
                            <div className="output-wrapper">
                                <TitleText text="Output" />
                                <Table tableTh={this.transVTableTh} tableData={this.state.outList} />
                            </div>
                        </div>
                    )
                }

            </div>
        );
    }
}

export default injectIntl(TransactionInfo);
