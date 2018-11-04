/**
 * 主页布局
 */
import * as React from 'react';
import Topstatistic from './topstatistic';
import Search from './search';
import TableData from './tabledata';
import './index.less'

class Home extends React.Component {
  public render() {
    return (
      <div className="index-page">
        <Topstatistic/>
        <div className="index-content">
          <Search/>    
          <TableData />   
        </div>
      </div>
    );
  }
}

export default Home;
