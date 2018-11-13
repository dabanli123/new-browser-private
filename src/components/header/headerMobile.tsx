/**
 * 移动端 header 组件
 */
import * as React from 'react';
import { Link } from 'react-router-dom';
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
      isShowEnv: !this.state.isShowEnv,
      isShowBrowse: false,
    })
    e.stopPropagation();
  }
  public toggleBrowse = (e) => {
    this.setState({
      isShowEnv: false,
      isShowBrowse: !this.state.isShowBrowse,
    })
    e.stopPropagation();
  }

  public toggleBrowse2 = (e) => {
    this.toggleBrowse(e);
    this.toggleMenu();
    e.stopPropagation();
  }

  public toggleEnv2 = (e) => {
    this.toggleEnv(e);
    this.toggleMenu();
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
      isShowEnv: false,
      isShowBrowse: false,
    })
  }
  public getPath = (base) => {
    const locations = this.props.history.location;
    window.location.href = `${location.origin}${base || ''}${locations.pathname}${locations.search}${locations.hash}`
  }
  public render() {
    return (
      <div className="header-mobile-container">
        <div className="header-wrapper">
          <img src={require('@/img/menu.png')} alt="" className="nav" onClick={this.toggleMenu} />
          <div className="logo">
            <img src={require('@/img/logo.png')} alt="" />
          </div>
          <div className="language">En</div>
        </div>
        {
          this.state.isShowMenu && (
            <div className="menu-wrapper">
              <div className="close" onClick={this.toggleMenu}>
                <img src={require('@/img/close.png')} alt="" />
              </div>
              <div className="list-box">
                <div className="list">
                  <span><Link to="/">Explorer</Link></span>
                </div>
                <div className="list">
                  <label onClick={this.toggleBrowse}><span>Browse <em /></span></label>
                  {
                    this.state.isShowBrowse && (
                      <div className="child" onClick={this.toggleBrowse2}>
                        <span><Link to="/blocks">Blocks</Link></span>
                        <span><Link to="/transactions">Transaction</Link></span>
                        <span><Link to="/addresses">Address</Link></span>
                      </div>
                    )
                  }
                </div>
                <div className="list">
                  <span><Link to="/assets">Assets</Link></span>
                </div>
                <div className="list">
                  <span><Link to="/nns">NNS Event</Link></span>
                </div>
                <div className="list">
                  {
                    process.env.REACT_APP_SERVER_ENV === 'DEV' ? <a href="https://testwallet.nel.group/" target="_blank">Wallet</a> : <a href="https://wallet.nel.group/" target="_blank">Wallet</a>
                  }
                </div>
              </div>
              <div className="list-box">
                <div className="list">
                  <label onClick={this.toggleEnv}><span>Mainnet<em /></span></label>
                  {
                    this.state.isShowEnv && (
                      <div className="child" onClick={this.toggleEnv2}>
                        <span><a onClick={this.getPath.bind(this, '')}>Mainnet</a></span>
                        <span><a onClick={this.getPath.bind(this, '/test')}>Testnet</a></span>
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