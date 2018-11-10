/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
import { observer } from 'mobx-react';
import { injectIntl } from 'react-intl';
import * as formatTime from 'utils/formatTime';
import { INNSInfoProps, IAuctionedInfo } from '@/containers/nns/interface/nnsinfo.interface';
@observer
class DomainInfo extends React.Component<INNSInfoProps, {}>
{
    public toAddressInfo(address: string) {
        this.props.history.push('/address/' + address);
    }
    public render()
    {
        const domainInfo: IAuctionedInfo | null = this.props.nnsinfo.domainInfo ? this.props.nnsinfo.domainInfo : null;

        if (!!!domainInfo) {
            return null;
        }
        return (
            <React.Fragment>
                <TitleText text="Domain name information" isInfoTitle={true} />
                <div className="info-list">
                    <ul>
                        <li>
                            <span className="type-name">Domain name</span>
                            <span className="type-content">{domainInfo.fulldomain}</span>
                        </li>
                        <li>
                            <span className="type-name">Current owner</span>
                            <span className="type-content"><a onClick={this.toAddressInfo.bind(this, domainInfo.owner)} href="javascript:;">{domainInfo.owner}</a></span>
                        </li>
                        <li>
                            <span className="type-name">Expiration date</span>
                            <span className="type-content">
                            {formatTime.format('yyyy/MM/dd | hh:mm:ss', domainInfo.ttl, this.props.intl.locale)}
                            </span>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default injectIntl(DomainInfo);
