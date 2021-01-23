import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { Spin, Select } from 'antd';

import './style.scss';

const LoadMask = (props)=>{
    const { showMask } = props;
    return  <div style={{ display: showMask ? 'flex':'none' }} className="article-loading-mask" >
                <Spin spinning={true} tip="Loading..." ></Spin>
            </div>
}

const select = (state)=>{
    return {
        showMask:state.articles.showLoadArticleListMask
    }
}

export default connect(select)(LoadMask)