/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
// import Table from '@/components/Table/Table';
import './index.less'

class Address extends React.Component {
  public tableTh = [
    "Address",
    "First transaction time",
    "Last transaction time",
    "Transactions"
  ]
  public tableData = [
    {
      address: 'AZC7iZMkq69i3SuBxsudCx2CgzwJPvNTov',
      firstTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      lastTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      transaction: "13"
    },
    {
      address: 'AZC7iZMkq69i3SuBxsudCx2CgzwJPvNTov',
      firstTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      lastTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      transaction: "13"
    },
    {
      address: 'AZC7iZMkq69i3SuBxsudCx2CgzwJPvNTov',
      firstTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      lastTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      transaction: "13"
    },
    {
      address: 'AZC7iZMkq69i3SuBxsudCx2CgzwJPvNTov',
      firstTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      lastTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      transaction: "13"
    },
    {
      address: 'AZC7iZMkq69i3SuBxsudCx2CgzwJPvNTov',
      firstTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      lastTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      transaction: "13"
    },
    {
      address: 'AZC7iZMkq69i3SuBxsudCx2CgzwJPvNTov',
      firstTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      lastTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      transaction: "13"
    },
    {
      address: 'AZC7iZMkq69i3SuBxsudCx2CgzwJPvNTov',
      firstTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      lastTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      transaction: "13"
    },
    {
      address: 'AZC7iZMkq69i3SuBxsudCx2CgzwJPvNTov',
      firstTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      lastTime: "Mon, 22 Oct 2018 08:08:09 GMT",
      transaction: "13"
    }
  ]
  public renderAddress = (value, key) => {
    if (key === 'address') {
      return <span className="img-text"><a href="http://www.baidu.com">{value}</a></span>
    }

    return null;
  }
  public render() {
    return (
      <div className="address-page">
        <TitleText text="Addressses" img={require('@/img/address.png')} />
        {/* <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true} render={this.renderAddress}/> */}
      </div>
    );
  }
}

export default Address;
