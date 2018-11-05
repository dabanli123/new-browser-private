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
                <TitleText text="Auction information" isInfoTitle={true} />
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
                                Hash
                        </span>
                            <span className="type-content">
                                0x5c859ee98fceffa178a42db8f05a86f8c33eb8786ac26636e918f5c5969f9b05
                        </span>
                        </li>
                        <li>
                            <span className="type-name">
                                Auction start time
                        </span>
                            <span className="type-content">
                                Tue, 23 Oct 2018 09:30:09 GMT
                        </span>
                        </li>
                        <li>
                            <span className="type-name">
                                Estimated end time
                        </span>
                            <span className="type-content">
                                Fri, 26 Oct 2018 09:30:09 GMT <span>( This end time is uncertain. Please bid early to avoid missing domain names. )</span>
                            </span>
                        </li>
                        <li>
                            <span className="type-name">
                                Highest bid
                        </span>
                            <span className="type-content">
                                0 CGAS
                        </span>
                        </li>
                        <li>
                            <span className="type-name">
                                Highest Bidder
                        </span>
                            <span className="type-content">
                                Abf2qMs1pzQb8kYk9RuxtUb9jtRKJVuBJt
                        </span>
                        </li>
                        <li>
                            <span className="type-name">
                                Stage
                        </span>
                            <span className="type-content">
                                Auction period
                        {/* <img src="" alt=""/> */}
                            </span>
                        </li>
                        {/* <li>
                        <span className="type-name">
                        Auction end time
                        </span>
                        <span className="type-content">
                        Fri, 26 Oct 2018 09:30:09 GMT <span>( This end time is uncertain. Please bid early to avoid missing domain names. )</span>
                        </span>
                    </li>
                    <li>
                        <span className="type-name">
                        Hammer price
                        </span>
                        <span className="type-content">
                        0 CGAS
                        </span>
                    </li>
                    <li>
                        <span className="type-name">
                        Buyer
                        </span>
                        <span className="type-content">
                        Abf2qMs1pzQb8kYk9RuxtUb9jtRKJVuBJt
                        </span>
                    </li>                     */}
                        <li>
                            <span className="type-name" style={{ fontSize: "12px" }}>
                                Auction-starting block
                        </span>
                            <span className="type-content">
                                2882132
                        </span>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default NNSInfo;
