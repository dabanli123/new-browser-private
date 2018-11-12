/**
 * 移动端 header 组件
 */
import * as React from 'react';
import './headerMobile.less';
import EventHandler from 'utils/event';
interface IState {
  isShowMenu: boolean,
  isShowBrowse: boolean,
  isShowEnv: boolean,
}


export default class HeaderMobile extends React.Component<any, IState> {
  public state = {
    isShowMenu: false,
    isShowBrowse: false,
    isShowEnv: false,
  }
  public toggleMenu = () => {
    this.setState({
      isShowMenu: !this.state.isShowMenu
    })
  }
  public toggleEnv = (e) => {
    this.setState({
      isShowEnv:!this.state.isShowEnv,
      isShowBrowse: false,
    })
    e.stopPropagation();
  }
  public toggleBrowse= (e) => {
    this.setState({
      isShowEnv:false,
      isShowBrowse: !this.state.isShowBrowse,
    })
    e.stopPropagation();
  }

  public componentDidMount() {
    EventHandler.add(this.globalClick);
  }
  public componentWillUnmount() {
    EventHandler.remove(this.globalClick);
  }

  public globalClick = () => {
    this.setState({
      isShowEnv:false,
      isShowBrowse: false,
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
                  <label onClick={this.toggleBrowse}><span>Browse <em /></span></label>
                  {
                    this.state.isShowBrowse && (
                      <div className="child" onClick={this.toggleBrowse}>
                        <span>Blocks</span>
                        <span>Transaction</span>
                        <span>Address</span>
                      </div>
                    )
                  }
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
                  <label onClick={this.toggleEnv}><span>Mainnet<em /></span></label>
                  {
                    this.state.isShowEnv && (
                      <div className="child" onClick={this.toggleEnv}>
                        <span>Mainnet</span>
                        <span>Testnet</span>
                      </div>
                    )
                  }
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