/**
 * 表格组件
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import classnames from 'classnames';
import './index.less';

interface ITh {
  name: string,
  key: string
}
interface IProps {
  tableTh: ITh[];
  tableData: object[];
  render?: (v: string, k, item) => JSX.Element | null;
  totalCount?: number,
  pageSize?: number
  className?: string
}

@observer
export default class Table extends React.Component<IProps, {}> {
  private tableThKeys = this.props.tableTh.map(v => v.key)

  constructor(props: IProps) {
    super(props);
    console.log(this.props.tableData);
    
  }
  public render() {
    let tableClassName = "table-wrap";
    if (this.props.className) {
      tableClassName = classnames('table-wrap', { [this.props.className]: !!this.props.className });
    }
    if(!!!this.props.tableData){
      return null
    }
    return (
      <div className={tableClassName}>
        {this.props.children}
        <div className="table-content">
          <div className="table-th">
            <ul>
              {
                this.props.tableTh.map((item, index) => {
                  return <li key={index}>{item.name}</li>
                })
              }
            </ul>
          </div>
          <div className="table-body">
            <ul>
              {
                this.props.tableData.map((item: object, index: number) => {
                  return (
                    <li key={index}>
                      {
                        this.tableThKeys.map((k: string, i: number) => {
                          if (!this.props.render) {
                            return <span key={i}>{item[k]}</span>
                          }
                          const renderHtml = this.props.render(item[k], k, item);
                          if (!renderHtml) {
                            return <span key={i}>{item[k]}</span>
                          }
                          return <React.Fragment key={i}>{renderHtml}</React.Fragment>
                        })
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        {/* 移动端表格 */}
        <div className="mobile-table-content">
          <div className="table-body">
            <ul>
              {
                this.props.tableData.map((item: object, index: number) => {
                  return (
                    <li key={index}>
                      {
                        this.tableThKeys.map((k: string, i: number) => {
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