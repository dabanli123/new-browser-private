/**
 * 主页布局
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';

class NNSInfo extends React.Component
{
    public tableTh = [
        "Domain name",
        "TXid",
        "Highest bid",
        "Highest bidder",
        "Stage"
    ]
    public tableData = [
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage: "Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage: "Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage: "Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage: "Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage: "Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage: "Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage: "Auction period"
        },
        {
            domain: 'paycomsoftware.neo',
            txid: "0x4b...5698",
            highestbid: "0.1CGAS",
            highestbidder: "AQ1d...z775",
            stage: "Auction period"
        }
    ]
    // public renderAddress = (value, key) =>
    // {
    //   if (key === 'address')
    //   {
    //     return <span className="img-text"><a href="http://www.baidu.com">{value}</a></span>
    //   }

    //   return null;
    // }
    public onCallback = (item) =>
    {
        console.log(item)
    }
    public render()
    {
        return (
            <React.Fragment>
                <TitleText text="Domain name information" isInfoTitle={true} />
                <div className="info-list">
                    <ul>
                        <li>
                            <span className="type-name">
                                Domain name
                        </span>
                            <span className="type-content">
                                transc.neo
                        </span>
                        </li>
                        <li>
                            <span className="type-name">
                                Current owner
                        </span>
                            <span className="type-content">
                                Abf2qMs1pzQb8kYk9RuxtUb9jtRKJVuBJt
                        </span>
                        </li>
                        <li>
                            <span className="type-name">
                                Expiration date
                        </span>
                            <span className="type-content">
                                Tue, 23 Oct 2018 09:30:09 GMT
                        </span>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default NNSInfo;
