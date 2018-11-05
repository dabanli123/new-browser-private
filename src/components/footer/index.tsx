// 标题组件
import * as React from 'react';
import './index.less';

interface IState
{
    isShowCode: boolean
}

export default class Footer extends React.Component<any, IState>
{
    public state = {
        isShowCode: false
    }

    public isShowWechat = () =>
    {
        this.setState({
            isShowCode: !this.state.isShowCode
        })
    }

    public render()
    {
        return (
            <div className="footer-group">
                <div className="footer-wrap">
                    <div className="footer-smallbox">
                        <div className="smallbox-title">
                            <h3>About Us</h3>
                        </div>
                        <div className="smallbox-content">
                            <div className="smallbox-logo">
                                <img src={require('@/img/logo2.png')} alt="" />
                            </div>
                            <div className="smallbox-text">
                                <p>Making blockchain <br />applications closer to people</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-smallbox">
                        <div className="smallbox-title">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="smallbox-content">
                            <ul>
                                <li>
                                    <img src={require('@/img/github.png')} alt="" />
                                    <a href="https://github.com/NewEconoLab/NELBrowser-Web.git" target="_blank">Github</a>
                                </li>
                                <li>
                                    <img src={require('@/img/twitter-circle.png')} alt="" />
                                    <a href="https://twitter.com/NeoNameService" target="_blank">Twitter</a>
                                </li>
                                <li>
                                    <img src={require('@/img/qq.png')} alt="" />
                                    <a href="https://jq.qq.com/?_wv=1027&k=5SahDHr" target="_blank">QQ Group</a>
                                </li>
                                <li>
                                    <img src={require('@/img/wechat.png')} alt="" />
                                    <span onClick={this.isShowWechat}>WeChat Subscription</span>
                                    {
                                        this.state.isShowCode && (
                                            <div className="wechat-code">
                                                <img src={require('@/img/wechatcode.png')} alt="wechatcode.png" />
                                            </div>
                                        )
                                    }

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-smallbox">
                        <div className="smallbox-title">
                            <h3>Other Products</h3>
                        </div>
                        <div className="smallbox-content">
                            <ul>
                                <li>
                                    {
                                        process.env.REACT_APP_SERVER_ENV === 'DEV' &&
                                        <>
                                            <img src={require('@/img/wallet-t.png')} alt="wallet.png" />
                                            <a href="https://testwallet.nel.group/#/login" target="_blank">Neo Web Wallet</a>
                                        </>

                                    }
                                    {
                                        process.env.REACT_APP_SERVER_ENV !== 'DEV' &&
                                        <>
                                            <img src={require('@/img/wallet-m.png')} alt="wallet.png" />
                                            <a href="https://wallet.nel.group/#/login" target="_blank">Neo Web Wallet</a>
                                        </>
                                    }

                                </li>
                                <li>
                                    {
                                        process.env.REACT_APP_SERVER_ENV === 'DEV' && <img src={require('@/img/nns-t.png')} alt="nns.png" />
                                    }
                                    {
                                        process.env.REACT_APP_SERVER_ENV !== 'DEV' && <img src={require('@/img/nns-m.png')} alt="nns.png" />
                                    }
                                    <a href="https://neons.name/index_En.html" target="_blank">NNS Official Website</a>
                                    {/* <a href="https://neons.name/index.html"  target="_blank">NNS Official Website</a> */}
                                </li>
                                <li>
                                    {
                                        process.env.REACT_APP_SERVER_ENV === 'DEV' && <img src={require('@/img/neodun-t.png')} alt="neodun.png" />
                                    }
                                    {
                                        process.env.REACT_APP_SERVER_ENV !== 'DEV' && <img src={require('@/img/neodun-m.png')} alt="neodun.png" />
                                    }
                                    <a href="http://neodun.com/index-En.html" target="_blank">Neodun Official Website</a>
                                    {/* <a href="http://neodun.com/index.html" target="_blank">Neodun Official Website</a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-version">
                    <p>cli version: v2.7.3</p>
                    <p>© 2018 NewEconoLabs</p>
                </div>
            </div>
        );
    }
}