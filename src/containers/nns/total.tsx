/**
 * 主页布局
 */
import * as React from 'react';
import './index.less'

class Total extends React.Component
{
  public render()
  {
    return (
      <div className="nns-total">
        <div className="total-box">
          <div className="total-smallbox">
            <div className="total-content">
              <strong className="total-data">35678.01451125 CGAS</strong>
              <strong className="total-type">Distribution pool</strong>
            </div>
          </div>
          <div className="total-smallbox">
            <div className="total-content">
              <strong className="total-data">0 CGAS</strong>
              <strong className="total-type">Distributed dividends</strong>
            </div>
          </div>
          <div className="total-smallbox">
            <div className="total-content">
              <strong className="total-data">2,155,956</strong>
              <strong className="total-type">Domains registered</strong>
            </div>
          </div>
          <div className="total-smallbox">
            <div className="total-content">
              <strong className="total-data">2,155,956</strong>
              <strong className="total-type">Live auctions</strong>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Total;
