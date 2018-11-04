/**
 * 主页布局
 */
import * as React from 'react';
import Button from '@/components/Button/Button'
import './index.less'

class Topstatistic extends React.Component
{
  public render()
  {
    return (
      <div className="index-statistic">
        <div className="statistic-box">
          <div className="statistic-smallbox">
            <img src={require('@/img/blocksbg-m.png')} alt="" />
            <div className="statistic-content">
              <strong className="statistic-data">2,155,956</strong>
              <strong className="statistic-type">Last Block</strong>
              <Button text="View all" bgBtn={true} />
            </div>
          </div>
          <div className="statistic-smallbox">
            <img src={require('@/img/tranbg-m.png')} alt="" />
            <div className="statistic-content">
              <strong className="statistic-data">2,155,956</strong>
              <strong className="statistic-type">Total Transactions</strong>
              <Button text="View all" bgBtn={true} />
            </div>
          </div>
          <div className="statistic-smallbox">
            <img src={require('@/img/addrbg-m.png')} alt="" />
            <div className="statistic-content">
              <strong className="statistic-data">2,155,956</strong>
              <strong className="statistic-type">Wallet Address Created</strong>
              <Button text="View all" bgBtn={true} />
            </div>
          </div>
        </div>
        <div className="mobile-statistic-box">
          <div className="statistic-smallbox">
            <div className="statistic-content">
              <strong className="statistic-data">2,155,956</strong>
              <strong className="statistic-type">Last Block</strong>
              <Button text="View all" mobileBtn={true} />
            </div>
          </div>
          <div className="statistic-smallbox">
            <div className="statistic-content">
              <strong className="statistic-data">2,155,956</strong>
              <strong className="statistic-type">Total Transactions</strong>
              <Button text="View all" mobileBtn={true} />
            </div>
          </div>
          <div className="statistic-smallbox">
            <div className="statistic-content">
              <strong className="statistic-data">2,155,956</strong>
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
