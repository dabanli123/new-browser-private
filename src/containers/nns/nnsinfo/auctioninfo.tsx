/**
 * 主页布局
 */
import * as React from 'react';
// import TitleText from '@/components/titletext/index';
import { injectIntl } from 'react-intl';
import Hint from '@/components/hint';
import { INNSInfoProps, IAuctionInfo } from '@/containers/nns/interface/nnsinfo.interface';
import * as formatTime from 'utils/formatTime';
import { observer } from 'mobx-react';
@observer
class AuctionInfo extends React.Component<INNSInfoProps, {}> {
    public toAddressInfo(address: string) {
        this.props.history.push('/address/' + address);
    }
    // 跳转到详情页
    public toBlockInfo = (index: string) => {
        this.props.history.push('/block/' + index)
    }
    public render() {
        const domainInfo: IAuctionInfo | null = this.props.nnsinfo.nnsInfo ? this.props.nnsinfo.nnsInfo : null;

        if (!!!domainInfo) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="info-list">
                    <ul>
                        <li>
                            <span className="type-name">Domain name</span>
                            <span className="type-content">{domainInfo.fulldomain}</span>
                        </li>
                        <li>
                            <span className="type-name">Hash</span>
                            <span className="type-content">{domainInfo.auctionId}</span>
                        </li>
                        <li>
                            <span className="type-name">Auction start time</span>
                            <span className="type-content">
                                {formatTime.format('yyyy/MM/dd | hh:mm:ss', domainInfo.startTime.blocktime.toString(), this.props.intl.locale)}
                            </span>
                        </li>
                        {
                            (domainInfo.auctionState === '0201' || domainInfo.auctionState === '0301') && (
                                <>
                                    <li>
                                        <span className="type-name">Estimated end time</span>
                                        <span className="type-content">
                                            {formatTime.format('yyyy/MM/dd | hh:mm:ss', domainInfo.endTime.blocktime.toString(), this.props.intl.locale)}
                                            <span> ( This end time is uncertain. Please bid early to avoid missing domain names. )</span>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="type-name">Highest bid</span>
                                        <span className="type-content">{domainInfo.maxPrice} CGAS</span>
                                    </li>
                                    <li>
                                        <span className="type-name">Highest Bidder</span>
                                        <span className="type-content"><a onClick={this.toAddressInfo.bind(this, domainInfo.maxBuyer)} href="javascript:;">{domainInfo.maxBuyer}</a></span>
                                    </li>
                                    <li>
                                        <span className="type-name">Stage</span>

                                        {
                                            domainInfo.auctionState === '0201' && (
                                                <span className="type-content nns-peirod">
                                                    确定期
                                                    <Hint type='1' />
                                                </span>
                                            )
                                        }
                                        {
                                            domainInfo.auctionState === '0301' && (
                                                <span className="type-content nns-overtime">
                                                    随机期
                                                    <Hint type='2' />
                                                </span>
                                            )
                                        }

                                    </li>
                                </>
                            )
                        }
                        {
                            domainInfo.auctionState === '0401' && (
                                <>
                                    <li>
                                        <span className="type-name">Auction end time</span>
                                        <span className="type-content">
                                            {formatTime.format('yyyy/MM/dd | hh:mm:ss', domainInfo.endTime.blocktime.toString(), this.props.intl.locale)}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="type-name">Hammer price</span>
                                        <span className="type-content">{domainInfo.maxPrice} CGAS</span>
                                    </li>
                                    <li>
                                        <span className="type-name">Buyer</span>
                                        <span className="type-content"><a onClick={this.toAddressInfo.bind(this, domainInfo.maxBuyer)} href="javascript:;">{domainInfo.maxBuyer}</a></span>
                                    </li>
                                </>
                            )
                        }
                        <li>
                            <span className="type-name" style={{ fontSize: "12px" }}>Auction-starting block</span>
                            <span className="type-content"><a onClick={this.toBlockInfo.bind(this, domainInfo.startTime.blockindex)} href="javascript:;">{domainInfo.startTime.blockindex}</a></span>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default injectIntl(AuctionInfo);
