// 标题组件
import * as React from 'react';
import './index.less';

export default class Footer extends React.Component {
    public cons = () => {
        history.go(-1);
    }
    public render() {
        return (
            <div className="footer-group">
                <div className="footer-wrap">
                    <div className="footer-smallbox">
                        <div className="smallbox-title">
                            <h3>About Us</h3>
                        </div>
                        <div className="smallbox-content">
                            <div className="smallbox-logo">
                                <img src={require('@/img/logo2.png')} alt=""/>
                            </div>
                            <div className="smallbox-text">
                                <p>Making blockchain <br/>applications closer to people</p>
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
                                    <img src={require('@/img/github.png')} alt=""/>
                                    <span>Github</span>
                                </li>
                                <li>
                                    <img src={require('@/img/twitter-circle.png')} alt=""/>
                                    <span>Twitter</span>
                                </li>
                                <li>
                                    <img src={require('@/img/qq.png')} alt=""/>
                                    <span>QQ Group</span>
                                </li>
                                <li>
                                    <img src={require('@/img/wechat.png')} alt=""/>
                                    <span>WeChat Subscription</span>
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
                                    <img src={require('@/img/wallet-m.png')} alt=""/>
                                    <span>Neo Web Wallet</span>
                                </li>
                                <li>
                                    <img src={require('@/img/nns-m.png')} alt=""/>
                                    <span>NNS Official Website</span>
                                </li>
                                <li>
                                    <img src={require('@/img/neodun-m.png')} alt=""/>
                                    <span>Neodun Official Website</span>
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