/**
 * 主页布局
 */
import * as React from 'react';
import Input from '@/components/Input/Input'
import './index.less'

class Search extends React.Component
{
    public state = {
        inputValue:'',
        inputPlaceHolder:'Search for block height/hash/address or transaction id'
      }
      public onChange = (value:string)=>{
        this.setState({
          inputValue:value
        })
        console.log(value)
      }
      public onFocus = ()=>{
        this.setState({
          inputPlaceHolder:''
        })
      }
      public onBlur = ()=>{
        this.setState({
          inputPlaceHolder:'Search for block height/hash/address or transaction id'
        })
      }
  public render()
  {
    return (
      <div className="search-page">
        <Input 
            placeholder={this.state.inputPlaceHolder}
            type="text"
            value={this.state.inputValue}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            style={{width:"9rem",margin:"15px 0 20px 0",minWidth:"900px"}}
          />
          <img src={require('@/img/search-m.png')} alt="" className="search-icon"/>
      </div>
    );
  }
}

export default Search;
