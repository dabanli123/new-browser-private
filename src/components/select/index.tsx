// 输入框组件
import * as React from 'react';
import { observer } from 'mobx-react';
// import classnames from 'classnames';
import './index.less';

interface IProps
{
	options:string[],
	text:string,
	onClick?: (event: any) => void,
	style?: object,
}

@observer
export default class Select extends React.Component<IProps, {}> {
	constructor(props: IProps)
	{
		super(props);
	}
	// 监控输入内容
	public onClick = (event: any) =>
	{
		if (this.props.onClick)
		{
			this.props.onClick(event.target.value);
		}
	}

	public render()
	{
		// const btnClassName = classnames('button-group',
		// 	{
		// 		'search-btn': this.props.search ? this.props.search : false,
		// 		'bg-btn': this.props.bgBtn ? this.props.bgBtn : false,
		// 		'mobile-btn': this.props.mobileBtn ? this.props.mobileBtn : false
		// 	})
		return (
			<div className="select-wrapper"
				onClick={this.onClick}
				style={this.props.style}
			>
				<div className="select-type">{this.props.text}</div>
				<div className="selected-text">
					<span>all</span>
					<span className="triangle" />
				</div>
				<div className="select-box">
					<ul>
						<li>sdf</li>
						<li>sdf</li>
						<li>sdf</li>
						<li>sdf</li>
						<li>sdf</li>
					</ul>
				</div>
			</div>
		);
	}
}