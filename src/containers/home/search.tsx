/**
 * 主页布局
 */
import * as React from 'react';
import Input from '@/components/Input/Input'
import './index.less'
import * as Neotool from '@/utils/neotool';
import { IHomeProps } from './interface/home.interface';
import { observer } from 'mobx-react';

@observer
class Search extends React.Component<IHomeProps,any> {
  public state = {
    inputValue: '',
    inputPlaceHolder: 'Search for block height/hash/address or transaction id'
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
  public toSearchInfo = () => {
    console.log("search");
    let search: string = this.state.inputValue;
    search = search.trim();
    if (search) {
      if (search.length === 34) {
        if (Neotool.verifyPublicKey(search)) { // 是否是地址
          this.props.history.push('/address/' + search);
        } else {
          return false;
        }
        return;
      } else {
        search = search.replace('0x', '');
        if (search.length === 64) {
          this.props.history.push('/transaction/' + search);
        }
        else if (search.length === 40) {
          this.props.history.push('/nep5/' + search);
        }
        else if (!isNaN(Number(search))) {
          this.props.history.push('/block/' + search);
        }
        else if (search.length > 64) {
          // let length = this.searchList.children.length;
          // if (length) {
          // let data = this.searchList.children[this.currentLine - 1].getAttribute("data");

          // }
          this.props.history.push('/asset/' + search);
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
    return;
  }
  public render() {
    return (
      <div className="search-page">
        <Input
          placeholder={this.state.inputPlaceHolder}
          type="text"
          value={this.state.inputValue}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onEnter={this.toSearchInfo}
          style={{ width: "9rem", margin: "15px 0 20px 0", minWidth: "900px" }}
        />
        {
          process.env.REACT_APP_SERVER_ENV === 'DEV' && <img src={require('@/img/search-t.png')} alt="search.png" className="search-icon" onClick={this.toSearchInfo} />
        }
        {
          process.env.REACT_APP_SERVER_ENV !== 'DEV' && <img src={require('@/img/search-m.png')} alt="search.png" className="search-icon" onClick={this.toSearchInfo} />
        }
      </div>
    );
  }
}

export default Search;
