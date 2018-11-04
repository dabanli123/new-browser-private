import * as React from 'react';
import './headerMobile.less';

interface IState {
  isShowMenu: boolean
}


export default class HeaderMobile extends React.Component<any, IState> {
  public state = {
    isShowMenu: false
  }
  public toggleMenu = () => {
    this.setState({
      isShowMenu: !this.state.isShowMenu
    })
  }
  public render() {
    return (
      <div className="header-mobile-container">
        <div className="header-wrapper">
          <img src={require('@/img/rank.png')} alt="" className="nav" onClick={this.toggleMenu} />
          <div className="logo">
            <img src={require('@/img/logo.png')} alt="" />
          </div>
          <div className="language">En</div>
        </div>
        {
          this.state.isShowMenu && (
            <div className="menu-wrapper">
              <div className="close" onClick={this.toggleMenu}>
                <img src={require('@/img/wallet-m.png')} alt="" />
              </div>
              <div className="list-box">
                <div className="list">
                  <span>Explorer</span>
                </div>
                <div className="list">
                  <label htmlFor="BrowseCheckbox"><span>Browse <em /></span></label>
                  <input type="checkbox" id="BrowseCheckbox" />
                  <div className="child">
                    <span>Blocks</span>
                    <span>Transaction</span>
                    <span>Address</span>
                  </div>
                </div>
                <div className="list">
                  <span>Assets</span>
                </div>
                <div className="list">
                  <span>NNS Events</span>
                </div>
                <div className="list">
                  <span>Wallet</span>
                </div>
              </div>
              <div className="list-box">
                <div className="list">
                  <label htmlFor="MainnetCheckbox"><span>Mainnet<em /></span></label>
                  <input type="checkbox" id="MainnetCheckbox" />
                  <div className="child">
                    <span>Blocks</span>
                    <span>Transaction</span>
                    <span>Address</span>
                  </div>
                </div>
                <div className="list">
                  <span>API</span>
                </div>
              </div>

              <div className="list-box">
                <div className="search-box">
                  <input type="text" placeholder="Block height/hash/address or transaction id" />
                  <img src={require('@/img/search.png')} alt="" />
                </div>
              </div>
            </div>
          )
        }

      </div>
    );
  }
}