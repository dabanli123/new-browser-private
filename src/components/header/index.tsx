// 标题组件
import * as React from 'react';
import { Link } from 'react-router-dom';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { History } from 'history'
import EventHandler from 'utils/event';
import './index.less';

interface IState {
  isShowSearch: boolean,
  inputValue: string,
  inputPlaceHolder: string,
  isShowSearchBtn: boolean,
  isShowBrowse: boolean,
  isShowEnv: boolean,
  isShowLanguage: boolean
}

interface IProps {
  history: History
}

export default class Header extends React.Component<IProps, IState>{
  public state = {
    isShowSearch: false,
    isShowSearchBtn: false,
    inputValue: '',
    isShowBrowse: false,
    isShowEnv: false,
    isShowLanguage: false,
    inputPlaceHolder: 'Search for block height/hash/address or transaction id'
  }
  public componentDidMount() {
    if (this.props.history.location.pathname !== '/') {
      this.setState({
        isShowSearchBtn: true
      })
    }

    this.props.history.listen(() => {
      if (this.props.history.location.pathname !== '/') {
        this.setState({
          isShowSearchBtn: true
        })
      }
    })

    EventHandler.add(this.globalClick);
  }
  public globalClick = () => {
    this.setState({
      isShowEnv: false,
      isShowBrowse: false,
      isShowLanguage: false,
    })
  }
  public onChange = (value: string) => {
    this.setState({
      inputValue: value
    })
    console.log(value)
  }
  public onFocus = () => {
    this.setState({
      inputPlaceHolder: ''
    })
  }
  public onBlur = () => {
    this.setState({
      inputPlaceHolder: 'Search for block height/hash/address or transaction id'
    })
  }
  public onToggleSearch = () => {
    this.setState({
      isShowSearch: !this.state.isShowSearch
    })
  }
  public toggleEnv = (e) => {
    this.setState({
      isShowEnv: !this.state.isShowEnv,
      isShowBrowse: false,
      isShowLanguage: false,
    })
    e.stopPropagation();
  }
  public toggleLanguage = (e) => {
    this.setState({
      isShowEnv: false,
      isShowBrowse: false,
      isShowLanguage: !this.state.isShowLanguage
    })
    e.stopPropagation();
  }

  public toggleBrowse = (e) => {
    this.setState({
      isShowEnv: false,
      isShowBrowse: !this.state.isShowBrowse,
      isShowLanguage: false
    })
    e.stopPropagation();
  }
  public componentWillUnmount() {
    EventHandler.remove(this.globalClick);
  }
  public getPath = (base) => {
    const locations = this.props.history.location;
    window.location.href = `${location.origin}${base || ''}${locations.pathname}${locations.search}${locations.hash}`
  }
  public render() {
    return (
      <div className="header-wrap">
        <div className="header-content">
          <div className="header-logo">
            <img src={require('@/img/logo.png')} alt="logo.png" />
          </div>
          <div className="header-other">
            <ul>
              <li><a href="http://www.xiaoyaoji.cn/share/1H0gjTDtfk/" target="_blank">API</a></li>
              <li>
                <div className="select-box">
                  <div className="select-content">
                    <label onClick={this.toggleEnv}>
                      <span>Mainnet</span>
                      <span className="triangle" />
                    </label>
                  </div>
                  {
                    this.state.isShowEnv && (
                      <div className="select-wrap" id="selectlang" onClick={this.toggleEnv}>
                        <ul>
                          <li><a onClick={this.getPath.bind(this, '')}>Mainnet</a></li>
                          <li><a onClick={this.getPath.bind(this, '/test')}>Testnet</a></li>
                        </ul>
                      </div>
                    )
                  }
                </div>
              </li>
              <li>
                <div className="language-toggle" id="language">
                  <label onClick={this.toggleLanguage}>
                    <div className="language-content">
                      <span className="lang-text">中</span>
                      <img src={require('@/img/ch.png')} alt="ch.png" />
                    </div>
                    <span className="middle-line" />
                    <div className="triangle-wrap">
                      <div className="triangle" />
                    </div>
                  </label>
                  {
                    this.state.isShowLanguage && (
                      <div className="select-wrap" id="selectlang" onClick={this.toggleLanguage}>
                        <ul>
                          <li><a href="#">中文</a></li>
                          <li><a href="#">English</a></li>
                        </ul>
                      </div>
                    )
                  }
                </div>
              </li>
            </ul>
          </div>
          <div className="header-menu">
            <ul>
              <li><Link to="/">Explorer</Link></li>
              <li>
                <div className="select-box">
                  <div className="select-content">
                    <label onClick={this.toggleBrowse}>
                      <span>Browse</span>
                      <span className="triangle" />
                    </label>
                  </div>
                  {
                    this.state.isShowBrowse && (
                      <div className="select-wrap" id="selectlang" onClick={this.toggleBrowse}>
                        <ul>
                          <li><Link to="/blocks">Blocks</Link></li>
                          <li><Link to="/transactions">Transactions</Link></li>
                          <li><Link to="/addresses">Addresses</Link></li>
                        </ul>
                      </div>
                    )
                  }
                </div>
              </li>
              <li><Link to="/assets">Assets</Link></li>
              <li><Link to="/nns">NNS Event</Link></li>
              <li>
                {
                  process.env.REACT_APP_SERVER_ENV === 'DEV' ? <a href="https://testwallet.nel.group/" target="_blank">Wallet</a> : <a href="https://wallet.nel.group/" target="_blank">Wallet</a>
                }
              </li>
              {
                this.state.isShowSearchBtn &&
                <li onClick={this.onToggleSearch}>
                  <img src={require('@/img/search.png')} alt="search.png" />
                </li>
              }

            </ul>
          </div>
        </div>
        {
          this.state.isShowSearch && (
            <div className="header-search">
              <Input
                placeholder={this.state.inputPlaceHolder}
                type="text"
                value={this.state.inputValue}
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                topsearch={true}
                style={{ width: "62.5%", margin: "15px 0 20px 0", minWidth: "631px" }}
              />
              <Button text="Search" search={true} style={{ position: "absolute", top: "25px", right: "19%" }} />
            </div>
          )
        }
      </div>
    );
  }
}