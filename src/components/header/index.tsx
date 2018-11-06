// 标题组件
import * as React from 'react';
import { Link } from 'react-router-dom';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { History } from 'history'
import './index.less';

interface IState {
  isShowSearch: boolean,
  inputValue: string,
  inputPlaceHolder: string,
  isShowSearchBtn: boolean
}

interface IProps {
  history: History
}

export default class Header extends React.Component<IProps, IState>{
  public state = {
    isShowSearch: false,
    isShowSearchBtn: false,
    inputValue: '',
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
  public render() {
    return (
      <div className="header-wrap">
        <div className="header-content">
          <div className="header-logo">
            <img src={require('@/img/logo.png')} alt="logo.png" />
          </div>
          <div className="header-other">
            <ul>
              <li><a href="#">API</a></li>
              <li>
                <div className="select-box">
                  <div className="select-content">
                    <label htmlFor="MainnetCheckInput">
                      <span>Mainnet</span>
                      <span className="triangle" />
                    </label>
                  </div>
                  <input type="checkbox" id="MainnetCheckInput" />
                  <div className="select-wrap" id="selectlang">
                    <ul>
                      <li><a href="/">Mainnet</a></li>
                      <li><a href="/test">Testnet</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="language-toggle" id="language">
                  <label htmlFor="languageCheckInput">
                    <div className="language-content">
                      <span className="lang-text">中</span>
                      <img src={require('@/img/ch.png')} alt="ch.png" />
                    </div>
                    <span className="middle-line" />
                    <div className="triangle-wrap">
                      <div className="triangle" />
                    </div>
                  </label>
                  <input type="checkbox" id="languageCheckInput" />
                  <div className="select-wrap" id="selectlang">
                    <ul>
                      <li><a href="#">中文</a></li>
                      <li><a href="#">English</a></li>
                    </ul>
                  </div>
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
                    <label htmlFor="BrowseCheckInput">
                      <span>Browse</span>
                      <span className="triangle" />
                    </label>
                  </div>
                  <input type="checkbox" id="BrowseCheckInput" />
                  <div className="select-wrap" id="selectlang">
                    <ul>
                      <li><Link to="/blocks">Blocks</Link></li>
                      <li><Link to="/transactions">Transactions</Link></li>
                      <li><Link to="/addresses">Addresses</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li><a href="#">Assets</a></li>
              <li><a href="#">NNS Event</a></li>
              <li><a href="#">Wallet</a></li>
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