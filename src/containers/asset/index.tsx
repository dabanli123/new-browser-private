/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
// import Table from '@/components/Table/Table';
import Select from '@/components/select';
import './index.less'

class Assets extends React.Component {
    public options = [
        {
            id: 'all',
            name: "all",
        },
        {
            id: 'contract',
            name: "contract",
        },
        {
            id: 'claim',
            name: "claim",
        },
        {
            id: 'invocation',
            name: "invocation",
        },
        {
            id: 'miner',
            name: "miner",
        }
    ]
    public tableTh = [
        "Asset",
        "Id",
        "Type",
        "Available",
        "Precision"
    ]
    public tableData = [
        {
            asset: 'Hello AntShares Mainnet',
            id: "439a...ed7d",
            type: "Token",
            available: "1024",
            precision: "8"
        },
        {
            asset: 'Hello AntShares Mainnet',
            id: "439a...ed7d",
            type: "Token",
            available: "1024",
            precision: "8"
        },
        {
            asset: 'Hello AntShares Mainnet',
            id: "439a...ed7d",
            type: "Token",
            available: "1024",
            precision: "8"
        },
        {
            asset: 'Hello AntShares Mainnet',
            id: "439a...ed7d",
            type: "Token",
            available: "1024",
            precision: "8"
        },
        {
            asset: 'Hello AntShares Mainnet',
            id: "439a...ed7d",
            type: "Token",
            available: "1024",
            precision: "8"
        },
        {
            asset: 'Hello AntShares Mainnet',
            id: "439a...ed7d",
            type: "Token",
            available: "1024",
            precision: "8"
        },
        {
            asset: 'Hello AntShares Mainnet',
            id: "439a...ed7d",
            type: "Token",
            available: "1024",
            precision: "8"
        },
        {
            asset: 'Hello AntShares Mainnet',
            id: "439a...ed7d",
            type: "Token",
            available: "1024",
            precision: "8"
        }
    ]
    public onCallback = (item) => {
        console.log(item)
    }

    public renderAsset = (value, key) => {
        if (key === 'asset') {
            return <span><a href="http://www.baidu.com">{value}</a></span>
        }
        if (key === 'id') {
            return <span><a href="http://www.baidu.com">{value}</a></span>
        }
        return null;
    }
    public render() {
        return (
            <div className="asset-page">
                <TitleText text="Assets" img={require('@/img/assets.png')} isInline={true}>
                    <Select options={this.options} text="Type" onCallback={this.onCallback} />
                </TitleText>
                {/* <Table tableTh={this.tableTh} tableData={this.tableData} isHasPage={true} render={this.renderAsset}/> */}
            </div>
        );
    }
}

export default Assets;
