/**
 * 主页布局
 */
import * as React from 'react';
import Input from '@/components/Input/Input'
import './index.less'
import { observer } from 'mobx-react';
// import Button from '@/components/Button/Button';
import * as formatTime from 'utils/formatTime';
import { injectIntl } from 'react-intl';
import { INNSProps } from './interface/nns.interface';
import classNames from 'classnames';
@observer
class Search extends React.Component<INNSProps, any> {
  public state = {
    inputValue: '',
    inputPlaceHolder: 'Search for domain name',
    searchType: 0, // 0为默认无，1为可竞拍，2为竞拍中，3为竞拍结束，4为售卖中,5为输入错误
    recordDomain:''
  }
  public onChange = (value: string) => {
    this.setState({
      inputValue: value.trim(),
      searchType: 0
    })
  }
  public onFocus = () => {
    this.setState({
      inputPlaceHolder: ''
    })
  }
  public onBlur = () => {
    this.setState({
      inputPlaceHolder: 'Search for domain name'
    })
  }
  // 检测输入域名是否合法
  public checkDomainname(domainname: string) {
    let domain = domainname;
    if (/\.neo$/.test(domainname)) {
      domain = domain.substring(0, domain.length - 4);
    }
    else if (/\.test$/.test(domainname)) {
      domain = domain.substring(0, domain.length - 5);
    }
    else {
      return false;
    }
    if (domain.length >= 2 && domain.length <= 32) {
      return true;
    } else {
      return false;
    }
  }
  public toSearchDomainInfo = async () => {
    if (this.state.inputValue) {
      const checkResult = this.checkDomainname(this.state.inputValue);
      if (!checkResult) {
        this.setState({
          searchType: 5
        })
        return;
      }
      await this.props.nns.searchDomainInfo(this.state.inputValue);
      if (this.props.nns.searchCanAuction) {
        this.setState({
          searchType: 2
        })
      } else if (this.props.nns.searchEndAuction) {
        this.setState({
          searchType: 3
        })
      }else{
        this.setState({
          searchType:1,
          recordDomain:this.state.inputValue
        })
      }
      this.setState({
        inputValue:''
      })
    }
  }
  // 跳转到域名详情页
  public toNNSInfo = (domain: string) => {
    this.props.history.push('/nnsinfo/' + domain)
  }
  // 跳转到交易详情页
  public toTransInfo = (txid: string) => {
    this.props.history.push('/transaction/' + txid)
  }
  // 跳转到地址详情页
  public toAddrInfo = (addr: string) => {
    this.props.history.push('/address/' + addr)
  }
  public render() {
    const ttl = (this.props.nns.searchEndAuction && this.props.nns.searchEndAuction.ttl) ? this.props.nns.searchEndAuction.ttl : 0;
    const stageClassName = classNames('type-content',
    {
      'nns-peirod':(this.props.nns.searchCanAuction && this.props.nns.searchCanAuction.auctionState === '0201')?true:false,
      'nns-overtime':(this.props.nns.searchCanAuction && this.props.nns.searchCanAuction.auctionState === '0301')?true:false
    })
    return (
      <div className="search-page">
        <Input
          placeholder={this.state.inputPlaceHolder}
          type="text"
          value={this.state.inputValue}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onEnter={this.toSearchDomainInfo}
          style={{ width: "9rem", margin: "15px 0 20px 0", minWidth: "900px" }}
        />
        {
          process.env.REACT_APP_SERVER_ENV === 'DEV' && <img src={require('@/img/search-t.png')} alt="search.png" className="search-icon" onClick={this.toSearchDomainInfo} />
        }
        {
          process.env.REACT_APP_SERVER_ENV !== 'DEV' && <img src={require('@/img/search-m.png')} alt="search.png" className="search-icon" onClick={this.toSearchDomainInfo} />
        }
        {
          this.state.searchType !== 0 && (
            <div className="search-result-wrapper">
              {
                this.state.searchType === 5 && <p>域名长度需要在2～32个字节之间，只能是字母和数字。请加上后缀，“例如：XXXXXX.neo”</p>
              }
              {
                this.state.searchType === 1 && (
                  <>
                    <p><strong>{this.state.recordDomain}</strong> is available!</p>
                    {
                      <p>You can {process.env.REACT_APP_SERVER_ENV === 'DEV' ? <a href="https://testwallet.nel.group/" target="_blank">login</a> : <a href="https://wallet.nel.group/" target="_blank">login</a>} your wallet and start an auction!</p>
                    }
                    {/* {
                    <p>You can login your wallet and start an auction!</p>
                  } */}
                  </>
                )
              }
              {
                this.state.searchType === 2 && (
                  <>
                  <p><strong>{this.props.nns.searchCanAuction && this.props.nns.searchCanAuction.fulldomain}</strong> is being auctioned.</p>
                  <ul className="seach-table">
                    <li>
                      <span className="type-name">Domain name</span>
                      <span className="type-content">
                        <a onClick={this.toNNSInfo.bind(this, this.props.nns.searchCanAuction && this.props.nns.searchCanAuction.fulldomain)} href="javascript:;">
                          {this.props.nns.searchCanAuction && this.props.nns.searchCanAuction.fulldomain}
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="type-name">Hash</span>
                      <span className="type-content">
                        <a onClick={this.toTransInfo.bind(this, this.props.nns.searchCanAuction && this.props.nns.searchCanAuction.auctionId)} href="javascript:;">
                          {this.props.nns.searchCanAuction && this.props.nns.searchCanAuction.auctionId}
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="type-name">Highest bid</span>
                      <span className="type-content">
                        {this.props.nns.searchCanAuction && this.props.nns.searchCanAuction.maxPrice} CGAS
                      </span>
                    </li>
                    <li>
                      <span className="type-name">Highest bidder</span>
                      <span className="type-content">
                        <a onClick={this.toAddrInfo.bind(this, this.props.nns.searchCanAuction && this.props.nns.searchCanAuction.maxBuyer)} href="javascript:;">
                          {this.props.nns.searchCanAuction && this.props.nns.searchCanAuction.maxBuyer}
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="type-name">Stage</span>
                      <span className={stageClassName}>
                        {(this.props.nns.searchCanAuction && this.props.nns.searchCanAuction.auctionState === '0201') ? "确定期" : "随机期"}
                      </span>
                    </li>
                  </ul>
                  </>
                )
              }
              {
                this.state.searchType === 3 && (
                  <>
                  <p><strong>{this.props.nns.searchEndAuction && this.props.nns.searchEndAuction.fulldomain}</strong>  is already auctioned off.</p>
                  <ul className="seach-table">
                    <li>
                      <span className="type-name">Domain name</span>
                      <span className="type-content">
                        <a onClick={this.toNNSInfo.bind(this, this.props.nns.searchEndAuction && this.props.nns.searchEndAuction.fulldomain)} href="javascript:;">
                          {this.props.nns.searchEndAuction && this.props.nns.searchEndAuction.fulldomain}
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="type-name">Hash</span>
                      <span className="type-content">
                        <a onClick={this.toTransInfo.bind(this, this.props.nns.searchEndAuction && this.props.nns.searchEndAuction.auctionId)} href="javascript:;">
                          {this.props.nns.searchEndAuction && this.props.nns.searchEndAuction.auctionId}
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="type-name">Current owner</span>
                      <span className="type-content">
                        <a onClick={this.toAddrInfo.bind(this, this.props.nns.searchEndAuction && this.props.nns.searchEndAuction.owner)} href="javascript:;">
                          {this.props.nns.searchEndAuction && this.props.nns.searchEndAuction.owner}
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="type-name">Expiration time</span>
                      <span className="type-content">
                        {formatTime.format('yyyy/MM/dd | hh:mm:ss', ttl.toString(), this.props.intl.locale)}
                      </span>
                    </li>
                  </ul>
                  </>
                )
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default injectIntl(Search);
