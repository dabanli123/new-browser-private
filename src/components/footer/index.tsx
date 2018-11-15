// footer组件
import * as React from 'react';
import store from '@/store/common'
import './index.less';

interface IState
{
    isShowCode: boolean
}
interface IProps {
    locale:any
  }
export default class Footer extends React.Component<IProps, IState>
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
                            <h3>{this.props.locale.aboutUs}</h3>
                        </div>
                        <div className="smallbox-content">
                            <div className="smallbox-logo">
                                <img src={require('@/img/logo2.png')} alt="" />
                            </div>
                            <div className="smallbox-text">
                                <p>{this.props.locale.tips}</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-smallbox">
                        <div className="smallbox-title">
                            <h3>{this.props.locale.contactUs}</h3>
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
                                    <a href="https://jq.qq.com/?_wv=1027&k=5SahDHr" target="_blank">{this.props.locale.qq}</a>
                                </li>
                                <li>
                                    <img src={require('@/img/wechat.png')} alt="" />
                                    <span onClick={this.isShowWechat}>{this.props.locale.wechat}</span>
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
                            <h3>{this.props.locale.other}</h3>
                        </div>
                        <div className="smallbox-content">
                            <ul>
                                <li>
                                    {
                                        process.env.REACT_APP_SERVER_ENV === 'DEV' &&
                                        <>
                                            <img src={require('@/img/wallet-t.png')} alt="wallet.png" />
                                            <a href="https://testwallet.nel.group/#/login" target="_blank">{this.props.locale.wallet}</a>
                                        </>

                                    }
                                    {
                                        process.env.REACT_APP_SERVER_ENV !== 'DEV' &&
                                        <>
                                            <img src={require('@/img/wallet-m.png')} alt="wallet.png" />
                                            <a href="https://wallet.nel.group/#/login" target="_blank">{this.props.locale.wallet}</a>
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
                                    {
                                        store.language === 'zh' && <a href="https://neons.name/index.html" target="_blank">{this.props.locale.nns}</a>
                                    }
                                    {
                                        store.language === 'en' && <a href="https://neons.name/index_En.html" target="_blank">{this.props.locale.nns}</a>
                                    }                                    
                                </li>
                                <li>
                                    {
                                        process.env.REACT_APP_SERVER_ENV === 'DEV' && <img src={require('@/img/neodun-t.png')} alt="neodun.png" />
                                    }
                                    {
                                        process.env.REACT_APP_SERVER_ENV !== 'DEV' && <img src={require('@/img/neodun-m.png')} alt="neodun.png" />
                                    }
                                    {
                                        store.language === 'zh' && <a href="http://neodun.com/index.html" target="_blank">{this.props.locale.neodun}</a>
                                    }
                                    {
                                        store.language === 'en' && <a href="http://neodun.com/index-En.html" target="_blank">{this.props.locale.neodun}</a>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-version">
                    <p>cli version: v2.9.0</p>
                    <p>© 2018 NewEconoLabs</p>
                </div>
            </div>
        );
    }
}