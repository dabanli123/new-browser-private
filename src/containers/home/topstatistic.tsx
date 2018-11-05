/**
 * 主页布局
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import Button from '@/components/Button/Button'
import './index.less'
import { IHomeProps } from './interface/home.interface';

@observer
class Topstatistic extends React.Component<IHomeProps, any>
{
  public componentDidMount() {
    this.props.home.getBlockHeight();
    this.props.home.getTxCount('');
    this.props.home.getAddrCount();
  }
  public render() {
    return (
      <div className="index-statistic">
        <div className="statistic-box">
          <div className="statistic-smallbox">
            {
              process.env.REACT_APP_SERVER_ENV === 'DEV' && <img src={require('@/img/blocksbg-t.png')} alt="blocksbg.png" />
            }
            {
              process.env.REACT_APP_SERVER_ENV !== 'DEV' && <img src={require('@/img/blocksbg-m.png')} alt="blocksbg.png" />
            }
            <div className="statistic-content">
              <strong className="statistic-data">{this.props.home.blockHeight}</strong>
              <strong className="statistic-type">Last Block</strong>
              <Button text="View all" bgBtn={true} />
            </div>
          </div>
          <div className="statistic-smallbox">
            {
              process.env.REACT_APP_SERVER_ENV === 'DEV' && <img src={require('@/img/tranbg-t.png')} alt="tranbg.png" />
            }
            {
              process.env.REACT_APP_SERVER_ENV !== 'DEV' && <img src={require('@/img/tranbg-m.png')} alt="tranbg.png" />
            }
            <div className="statistic-content">
              <strong className="statistic-data">{this.props.home.txCount}</strong>
              <strong className="statistic-type">Total Transactions</strong>
              <Button text="View all" bgBtn={true} />
            </div>
          </div>
          <div className="statistic-smallbox">
            {
              process.env.REACT_APP_SERVER_ENV === 'DEV' && <img src={require('@/img/addrbg-t.png')} alt="addrbg.png" />
            }
            {
              process.env.REACT_APP_SERVER_ENV !== 'DEV' && <img src={require('@/img/addrbg-m.png')} alt="addrbg.png" />
            }
            <div className="statistic-content">
              <strong className="statistic-data">{this.props.home.addrCount}</strong>
              <strong className="statistic-type">Wallet Address Created</strong>
              <Button text="View all" bgBtn={true} />
            </div>
          </div>
        </div>
        <div className="mobile-statistic-box">
          <div className="statistic-smallbox">
            <div className="statistic-content">
              <strong className="statistic-data">{this.props.home.blockHeight}</strong>
              <strong className="statistic-type">Last Block</strong>
              <Button text="View all" mobileBtn={true} />
            </div>
          </div>
          <div className="statistic-smallbox">
            <div className="statistic-content">
              <strong className="statistic-data">{this.props.home.txCount}</strong>
              <strong className="statistic-type">Total Transactions</strong>
              <Button text="View all" mobileBtn={true} />
            </div>
          </div>
          <div className="statistic-smallbox">
            <div className="statistic-content">
              <strong className="statistic-data">{this.props.home.addrCount}</strong>
              <strong className="statistic-type">Wallet Address Created</strong>
              <Button text="View all" mobileBtn={true} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topstatistic;
