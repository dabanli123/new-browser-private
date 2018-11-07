/**
 * 主页布局
 */
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import TitleText from '@/components/titletext/index';
import Table from '@/components/Table/Table';
import './index.less'
import { IBlockProps, IBlockInfoState } from './interface/block.interface';
import * as formatTime from 'utils/formatTime';
import { injectIntl } from 'react-intl';
@inject('block')
@observer
class BlockInfo extends React.Component<IBlockProps, IBlockInfoState> {
    public state = {
        isTop: false,
        isBottom: false
    }
    public blockTransTableTh = [
        {
            name: 'Type',
            key: 'type',
        },
        {
            name: 'TXID',
            key: 'txid'
        }, {
            name: 'Version',
            key: 'version'
        }, {
            name: 'Size',
            key: 'size'
        }
    ]
    public imgs = {
        contract: require('@/img/contract.png'),
        claim: require('@/img/claim.png'),
        invocation: require('@/img/invocation.png'),
        miner: require('@/img/miner.png'),
        issue: require('@/img/issue.png'),
        register: require('@/img/register.png'),
        publish: require('@/img/publish.png'),
        enrollment: require('@/img/enrollment.png'),
        agency: require('@/img/agency.png')
    }
    public componentDidMount()
    {
        const params = this.props.match.params;
        this.getInfos(params["index"]);
    }
    // 请求数据
    public getInfos = (index) =>
    {
        return this.props.block.getBlockInfo(index);
    }
    // 返回区块列表
    public onGoBack = () =>
    {
        this.props.history.push('/blocks/');
    }
    // 访问上一个区块详情
    public goPreviousBlock = async () =>
    {
        if (this.state.isTop)
        {
            return false;
        }
        const index = this.props.block.blockInfo ? this.props.block.blockInfo.index - 1 : 0
        this.props.history.push('/block/' + index)
        const result = await this.getInfos(index);
        const state = { isBottom: false };
        if (!result)
        {
            state['isTop'] = true;
        }
        this.setState(state);

        return true;
    }
    // 访问下一个区块详情
    public goNextBlock = async () =>
    {
        if (this.state.isBottom)
        {
            return false;
        }
        const index = this.props.block.blockInfo ? this.props.block.blockInfo.index + 1 : 0
        this.props.history.push('/block/' + index)
        const result = await this.getInfos(index);
        const state = { isTop: false };
        if (!result)
        {
            state['isBottom'] = true;
        }
        this.setState(state);
        return true;
    }
    // 列表特殊处理
    public renderTran = (value, key) =>
    {
        if (key === 'type')
        {
            value = value.replace('Transaction', '')
            return <span className="tran-img-text"><img src={this.imgs[value.toLowerCase()]} alt="" />{value}</span>
        }
        if (key === 'txid')
        {
            value = value.replace(/^(.{4})(.*)(.{4})$/, '$1...$3');
            return <span><a href="#">{value}</a></span>
        }
        if (key === 'size')
        {
            return <span>{value} bytes</span>
        }
        return null;
    }
    public render()
    {
        return (
            <div className="blockinfo-page">
                <div className="goback-wrapper">
                    <span className="goback-text" onClick={this.onGoBack}>&lt;&lt;  Go back</span>
                </div>
                <div className="info-content">
                    <TitleText text="Block information" isInfoTitle={true} />
                    <div className="info-list">
                        <ul>
                            <li>
                                <span className="type-name">Block height</span>
                                <span className="type-content">{this.props.block.blockInfo && this.props.block.blockInfo.index}</span>
                            </li>
                            <li>
                                <span className="type-name">Hash</span>
                                <span className="type-content">{this.props.block.blockInfo && this.props.block.blockInfo.hash}</span>
                            </li>
                            <li>
                                <span className="type-name">Time</span>
                                <span className="type-content">
                                    {this.props.block.blockInfo && formatTime.format('yyyy/MM/dd | hh:mm:ss', this.props.block.blockInfo.time.toString(), this.props.intl.locale)}
                                </span>
                            </li>
                            <li>
                                <span className="type-name">Size</span>
                                <span className="type-content">{this.props.block.blockInfo && this.props.block.blockInfo.size}</span>
                            </li>
                            <li>
                                <span className="type-name">Previous Block</span>
                                <span className="type-content">
                                    <a onClick={this.goPreviousBlock} href="javascript:;">{this.props.block.blockInfo && this.props.block.blockInfo.index - 1}</a>
                                </span>
                            </li>
                            <li>
                                <span className="type-name">Next Block</span>
                                <span className="type-content">
                                    <a onClick={this.goNextBlock} href="javascript:;">{this.props.block.blockInfo && this.props.block.blockInfo.index + 1}</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <TitleText text="Transactions" />
                <div className="blockinfo-tran-table">
                    <Table tableTh={this.blockTransTableTh} tableData={this.props.block.blockInfo ? this.props.block.blockInfo.tx : []} render={this.renderTran} />
                </div>
            </div>
        );
    }
}

export default injectIntl(BlockInfo);
