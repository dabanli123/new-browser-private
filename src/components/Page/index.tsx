/**
 * 主页布局
 */
import * as React from 'react';
import './index.less'

class Page extends React.Component
{
  
  public render()
  {
    return (
      <div className="page-wrapper">
        <div className="page-tips">
            <span>Page 191718, 191718 pages in total</span>
        </div>
        <div className="page-btn-wrapper">
            <div className="previous-btn">
                <img src={require('@/img/triangle.png')} alt=""/>
            </div>
            <div className="next-btn active">
                <img src={require('@/img/triangle.png')} alt=""/>
            </div>
            <div className="input-page">
            {/* onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" */}
                <input type="number"/>
            </div>
            <div className="go-btn">Go</div>
        </div>
      </div>
    );
  }
}

export default Page;
