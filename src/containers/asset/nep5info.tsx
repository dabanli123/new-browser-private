/**
 * nep5资产详情页
 */
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { injectIntl } from 'react-intl';
import TitleText from '@/components/titletext/index';
import Table from '@/components/Table/Table';
import Page from '@/components/Page';
import { IAssetInfoProps } from './interface/assetinfo.interface';
import './index.less'

@inject('assetinfo')
@observer
class AssetInfo extends React.Component<IAssetInfoProps, {}> {
    public intrl = this.props.intl.messages;
    public balanceRankTableTh = [
        {
            name: this.intrl.tableTh.rank,
            key: 'rank',
        },
        {
            name: this.intrl.tableTh.address,
            key: 'addr'
        }, {
            name: this.intrl.tableTh.amount,
            key: 'balance'
        }
    ]
    public nep5TransTableTh = [
        {
            name: this.intrl.tableTh.txid,
            key: 'txid',
        },
        {
            name: this.intrl.tableTh.from,
            key: 'from'
        },
        {
            name: this.intrl.tableTh.to,
            key: 'to'
        },
        {
            name: this.intrl.tableTh.height,
            key: 'blockindex'
        }
    ]
    public state = {
        assetid: '',
        currentPage: 1,
        pageSize: 15
    }
    // 初始化数据
    public componentDidMount()
    {
        const params = this.props.match.params;
        this.setState({
            assetid: params["nep5id"]
        })
        this.props.assetinfo.getNep5Info(params["nep5id"]);
        this.props.assetinfo.getBalanceRankCount(params["nep5id"]);
        this.getBalanceRankList(params["nep5id"]);
        this.props.assetinfo.getNep5TransCount("asset", params["nep5id"]);
        this.props.assetinfo.getNep5Transaction(params["nep5id"], this.state.pageSize, this.state.currentPage);
    }
    // 返回区块列表
    public onGoBack = () =>
    {
        this.props.history.push('/assets/');
    }
    // 请求数据
    public getBalanceRankList = (asset: string) =>
    {
        return this.props.assetinfo.getBalanceRankList(asset, this.state.pageSize, this.state.currentPage);
    }
    // 列表特殊处理
    public renderBalance = (value, key) =>
    {
        if (key === 'addr')
        {
            return <span><a href="javascript:;" onClick={this.goAddrInfo.bind(this, value)}>{value}</a></span>
        }
        return null;
    }
    // 列表特殊处理
    public renderTrans = (value, key) =>
    {
        if (key === 'txid')
        {
            const txid = value.replace(/^(.{6})(.*)(.{6})$/, '$1...$3');
            return <span><a href="javascript:;" onClick={this.goTransInfo.bind(this, value)}>{txid}</a></span>
        }
        if (key === 'from')
        {
            value = value === '' ? '-' : value;
            return <span className="addr-text">{value}</span>
        }
        if (key === 'to')
        {
            value = value === '' ? '-' : value;
            return <span className="addr-text">{value}</span>
        }
        return null;
    }
    // 跳转地址详情页
    public goAddrInfo = (addr: string) =>
    {
        this.props.history.push('/address/' + addr)
    }
    // 跳转交易详情页
    public goTransInfo = (txid: string) =>
    {
        this.props.history.push('/transaction/' + txid)
    }
    // 翻页功能
    public onBalancePage = (index: number) =>
    {
        console.log(index)
        this.setState({
            currentPage: index
        }, () =>
            {
                this.getBalanceRankList(this.state.assetid);
            })
    }
    public render()
    {
        return (
            <div className="assetinfo-page">
                <div className="goback-wrapper">
                    <span className="goback-text" onClick={this.onGoBack}>&lt;&lt;  {this.intrl.btn.goback}</span>
                </div>
                <div className="info-content">
                    <TitleText text={this.intrl.asset.titleinfo1} isInfoTitle={true} />
                    <div className="info-list">
                        <ul>
                            <li>
                                <span className="type-name">{this.intrl.asset.asset}</span>
                                <span className="type-content">{this.props.assetinfo.nep5Info && this.props.assetinfo.nep5Info.name}</span>
                            </li>
                            <li>
                                <span className="type-name">{this.intrl.asset.hash}</span>
                                <span className="type-content">{this.props.assetinfo.nep5Info && this.props.assetinfo.nep5Info.assetid}</span>
                            </li>
                            <li>
                                <span className="type-name">{this.intrl.asset.type}</span>
                                <span className="type-content">Nep5</span>
                            </li>
                            <li>
                                <span className="type-name"> {this.intrl.asset.available}</span>
                                <span className="type-content">{this.props.assetinfo.nep5Info && this.props.assetinfo.nep5Info.totalsupply}</span>
                            </li>
                            <li>
                                <span className="type-name">{this.intrl.asset.precision}</span>
                                <span className="type-content">{this.props.assetinfo.nep5Info && this.props.assetinfo.nep5Info.decimals}</span>
                            </li>
                            <li>
                                <span className="type-name">{this.intrl.asset.admin}</span>
                                <span className="type-content">-</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="asset-balance-rank">
                    <TitleText text={this.intrl.asset.titleinfo2} />
                    <div className="assetinfo-balance-table">
                        <Table
                            tableTh={this.balanceRankTableTh}
                            tableData={this.props.assetinfo.balanceRankList && this.props.assetinfo.balanceRankList}
                            render={this.renderBalance}
                        />
                        <Page
                            totalCount={this.props.assetinfo.balanceRankCount}
                            pageSize={this.state.pageSize}
                            currentPage={this.state.currentPage}
                            onChange={this.onBalancePage}
                        />
                    </div>
                </div>
                <div className="asset-trans-rank">
                    <TitleText text={this.intrl.asset.titleinfo3} />
                    <div className="assetinfo-trans-table">
                        <Table
                            tableTh={this.nep5TransTableTh}
                            tableData={this.props.assetinfo.nep5TransList && this.props.assetinfo.nep5TransList}
                            render={this.renderTrans}
                        />
                        <Page
                            totalCount={this.props.assetinfo.nep5TransCount}
                            pageSize={this.state.pageSize}
                            currentPage={this.state.currentPage}
                            onChange={this.onBalancePage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default injectIntl(AssetInfo);
