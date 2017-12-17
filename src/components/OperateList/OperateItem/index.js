
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { removeAtricle } from '../../../js/fetch-atricle'

import './operateItem.scss'

class OperateItem extends Component{

    render(){
        let articleData = this.props.articleData
        let articleTitle = articleData.title

        return (<div className="article-box">
                    <h3  className="">{articleTitle}</h3>
                    <div className="r option">
                    <i onClick={this.props.removeHandle.bind(this,articleTitle)} className="iconfont icon-shanchu"></i>
                    <i onClick={this.props.editHandle.bind(this,articleData)} className="iconfont icon-bianji"></i>
                    </div>
                </div>)
                
    }

}

export default OperateItem;