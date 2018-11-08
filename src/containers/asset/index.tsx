/**
 * 主页布局
 */
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import TitleText from '@/components/titletext/index';
import Table from '@/components/Table/Table';
import Select from '@/components/select';
import { injectIntl } from 'react-intl';
import Page from '@/components/Page';
import './index.less'
import { IAssetProps } from './interface/asset.interface';

@inject('asset')
@observer
class Assets extends React.Component<IAssetProps, {}>
{
    public options = [
        {
            id: 'asset',
            name: "Assets",
        },
        {
            id: 'nep5',
            name: "Nep5",
        }
    ]
    public AssetTableTh = [
        {
            name: 'Asset',
            key: 'asset'
        },
        {
            name: 'Id',
            key: 'id'
        },
        {
            name: 'Type',
            key: 'type'
        },
        {
            name: 'Available',
            key: 'available'
        },
        {
            name: 'Precision',
            key: 'precision'
        }
    ]
    public state = {
        currentPageAsset: 1,
        pageSizeAsset: 15,
        currentPageNep5: 1,
        pageSizeNep5: 15,
        type: "asset"
    }
    // 初始化数据
    public componentDidMount()
    {
        this.props.asset.getAssetList();
        this.props.asset.getNep5List();
    }
    public onCallback = (item) =>
    {
        if (item.id === this.state.type)
        {
            return;
        }
        if (item.id === 'asset')
        {
            this.setState({
                currentPageAsset: 1,
                type: 'asset'
            })
        } else
        {
            this.setState({
                currentPageNep5: 1,
                type: 'nep5'
            })
        }
    }

    public renderAsset = (value, key) =>
    {
        if (key === 'asset')
        {
            return <span><a href="http://www.baidu.com">{value}</a></span>
        }
        if (key === 'id')
        {
            const assetid = value.replace(/^(.{4})(.*)(.{4})$/, '$1...$3');
            return <span><a href="http://www.baidu.com">{assetid}</a></span>
        }
        return null;
    }

    // 翻页功能
    public onAssetPage = (index: number) =>
    {
        this.setState({
            currentPageAsset: index
        }, () =>
            {
                // this.props.block.getBlockList(this.state.pageSize, this.state.currentPage);
            })
    }
    // 翻页功能
    public onNep5Page = (index: number) =>
    {
        this.setState({
            currentPageNep5: index
        }, () =>
            {
                // this.props.block.getBlockList(this.state.pageSize, this.state.currentPage);
            })
    }
    public render()
    {
        return (
            <div className="asset-page">
                <TitleText text="Assets" img={require('@/img/assets.png')} isInline={true}>
                    <Select options={this.options} text="Type" onCallback={this.onCallback} />
                </TitleText>
                {
                    this.state.type === 'asset' &&
                    (
                        <div className="asset-table">
                            <Table tableTh={this.AssetTableTh} tableData={this.props.asset.assetList} render={this.renderAsset} />
                            <Page
                                totalCount={this.props.asset.assetList.length}
                                pageSize={this.state.pageSizeAsset}
                                currentPage={this.state.currentPageAsset}
                                onChange={this.onAssetPage}
                            />
                        </div>
                    )
                }
                {
                    this.state.type === 'nep5' &&
                    (
                        <div className="nep5-table">
                            <Table tableTh={this.AssetTableTh} tableData={this.props.asset.nep5List} render={this.renderAsset} />
                            <Page
                                totalCount={this.props.asset.nep5List.length}
                                pageSize={this.state.pageSizeNep5}
                                currentPage={this.state.currentPageNep5}
                                onChange={this.onNep5Page}
                            />
                        </div>
                    )
                }
            </div>
        );
    }
}

export default injectIntl(Assets);
