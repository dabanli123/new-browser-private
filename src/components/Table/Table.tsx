// 输入框组件
import * as React from 'react';
import { observer } from 'mobx-react';
import Page from '@/components/Page'
// import classnames from 'classnames';
import './index.less';

interface IProps
{
  tableTh: string[];
  tableData: object[];
  isHasPage?:boolean;
  render?:(v:string, k, item) => JSX.Element | null;
  // normalTable?: boolean;
}

@observer
export default class Table extends React.Component<IProps, {}> {
  constructor(props: IProps)
  {
    super(props);
  }


  public render()
  {
    // const tableClassName = classnames('table-wrap', { 'list-table': this.props.normalTable ? this.props.normalTable : false });
    return (
      <div className="table-wrap">
        {this.props.children}
        <div className="table-content">
          <div className="table-th">
            <ul>
              {
                this.props.tableTh.map((item, index) =>
                {
                  return <li key={index}>{item}</li>
                })
              }
            </ul>
          </div>
          <div className="table-body">
            <ul>
              {
                this.props.tableData.map((item: object, index: number) =>
                {
                  console.log(item)
                  return (
                    <li key={index}>
                      {
                        Object.keys(item).map((k: string, i: number) =>
                        {
                          if(!this.props.render) {
                            return <span key={i}>{item[k]}</span>
                          }
                          const renderHtml = this.props.render(item[k], k, item);
                          if(!renderHtml) {
                            return <span key={i}>{item[k]}</span>
                          }
                          return renderHtml
                        })
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>
          {
            this.props.isHasPage && (
              <Page />
            )
          }
        </div>
        <div className="mobile-table-content">
          <div className="table-body">
            <ul>
              {
                this.props.tableData.map((item: object, index: number) =>
                {
                  console.log(item)
                  return (
                    <li key={index}>
                      {
                        Object.keys(item).map((k: string, i: number) =>
                        {
                          return (
                            <div className="table-line" key={i}>
                              <span className="line-title">{k}</span>
                              <span className="line-content">{item[k]}</span>
                            </div>
                          )
                        })
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}