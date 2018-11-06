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
import { injectIntl } from 'react-intl';
@inject('block')
@observer
class BlockInfo extends React.Component<IBlockProps> {
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
        contact: require('@/img/contract.png'),
        claim: require('@/img/claim.png'),
        invocation: require('@/img/invocation.png'),
        miner: require('@/img/miner.png'),
        issue: require('@/img/issue.png'),
        register: require('@/img/register.png'),
        publish: require('@/img/publish.png'),
        enrollment: require('@/img/enrollment.png'),
        agency: require('@/img/agency.png')
    }
    public async componentDidMount()
    {
        const params = this.props.match.params;
        await this.props.block.getBlockInfo(params["index"]);
    }
    public onGoBack = () =>
    {
        this.props.history.push('/blocks/');
    }
    public goPreviousBlock = () =>
    {
        const index = this.props.block.blockInfo ? this.props.block.blockInfo.index - 1 : 0
        const href = this.props.history.location.pathname = process.env.REACT_APP_SERVER_ENV === 'DEV' ? '/test/block/' + index : '  /block/' + index;
        return href;
    }
    public goNextBlock = () =>
    {
        const index = this.props.block.blockInfo ? this.props.block.blockInfo.index + 1 : 0
        const href = this.props.history.location.pathname = process.env.REACT_APP_SERVER_ENV === 'DEV' ? '/test/block/' + index : '  /block/' + index;
        return href;
    }
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
                                <span className="type-name">
                                    Block height
                        </span>
                                <span className="type-content">
                                    {this.props.block.blockInfo && this.props.block.blockInfo.index}
                                </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Hash
                        </span>
                                <span className="type-content">
                                    {this.props.block.blockInfo && this.props.block.blockInfo.hash}
                                </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Time
                        </span>
                                <span className="type-content">
                                    {this.props.block.blockInfo && formatTime.format('yyyy/MM/dd | hh:mm:ss', this.props.block.blockInfo.time.toString(), this.props.intl.locale)}
                                </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Size
                        </span>
                                <span className="type-content">
                                    {this.props.block.blockInfo && this.props.block.blockInfo.size}
                                </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Previous Block
                        </span>
                                <span className="type-content">
                                    <a href={this.goPreviousBlock()}>{this.props.block.blockInfo && this.props.block.blockInfo.index - 1}</a>
                                </span>
                            </li>
                            <li>
                                <span className="type-name">
                                    Next Block
                        </span>
                                <span className="type-content">
                                    <a href={this.goNextBlock()}>{this.props.block.blockInfo && this.props.block.blockInfo.index + 1}</a>
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
