// 图标提示隐藏显示组件
import * as React from 'react';
import q1 from '@/img/explain1.png';
import q2 from '@/img/explain2.png';
import q3 from '@/img/explain3.png';
import { injectIntl } from 'react-intl';
import './index.less';
interface IProps{
    type:string,
    intl:any
}
class Hint extends React.Component<IProps>
{
    public prop = this.props.intl.messages;
    public render()
    {
        return (
            <div className="hint-box">
                <div className="hint-msg">
                    <div className="hint-img">
                        {this.props.type === '1' && <img src={q1} alt="" />}
                        {this.props.type === '2' && <img src={q2} alt="" />}
                        {this.props.type === '3' && <img src={q3} alt="" />}
                    </div>
                    <div className="hint-content">  
                    <p>确定期为竞拍第一阶段，时长为3天，此期间所有的出价都有效。当确定期最后一天有人出价时将触发最大时长为2天的随机期。否则竞拍即在确定期结束。</p>
                    <p>随机期为竞拍第二阶段，最大时长为2天，此期间任意一个出价都有可能触发该域名竞拍的结束从而出价无效，越靠后的出价触发结束的可能性越大，因此请尽早出价以免错失该域名。</p>
                        {/* <p>{this.prop.myauction.tip1}</p>
                        <p>{this.prop.myauction.tip2}</p> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default injectIntl(Hint);

