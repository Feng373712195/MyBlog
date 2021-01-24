import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import * as Icon from '@ant-design/icons'

import './style.scss';

let toFetch =  false;

function PageBtns(props){
    const { total,currentPage,lastPage,changePage } = props;
    const PageBtns = [];
    for( let i = 0;i< lastPage ;i++ ){
        const pageNum = i + 1;
        PageBtns.push(
            <div key={pageNum}
                //  onClick={PageBtnCtr.bind(null,lastPage,props,{ type:CUREENT_ARTILES_LIST_PAGE,page:pageNum })}
                 onClick={ PageBtnCtr.bind(null,pageNum,lastPage,undefined,changePage) }
                 className={currentPage == pageNum ? 'active pagenum':'pagenum'} >
                 {pageNum}
            </div>
        )
    }
    return PageBtns
}

const PageBtnCtr = (currentPage,lastPage,action,emit) => {
    if( action === 'per'  && currentPage == 1 ) return
    if( action === 'next' && currentPage == lastPage ) return
    toFetch = true;
    emit(currentPage,lastPage,action)
}

const getPageBoxTransLateY = (lastPage,currentPage) => {
    if( lastPage == 1 ){
        return 30;
    }
    if( currentPage <= 2 ) return 0
    if( currentPage ==  lastPage ){
        return -30 * (currentPage - 3)
    };
    return -30 * (currentPage - 2)
};

function Paginator(props){
    const { changePage,total,pageSize,currentPage,fetchData } = props;

    const lastPage = Math.ceil(total/pageSize);

    useEffect(()=>{
        if( toFetch ){
            toFetch = false;
            fetchData(currentPage)
        }
    },currentPage)

    return <div className="paginator-container" >
        <div onClick={PageBtnCtr.bind(null,currentPage,lastPage,'first',changePage)} className="rotate-90deg nav" >
            {/* <Icon type="double-right" /> */}
        </div>
        <div onClick={PageBtnCtr.bind(null,currentPage,lastPage,'per',changePage)} className="rotate-90deg nav" >
            {/* <Icon type="vertical-left" /> */}
        </div>
        <div className="pagenum-box">
            <div className="scroll-box" style={ { transform:`translateY(${ getPageBoxTransLateY(lastPage,currentPage) }px)` } } >
                <PageBtns total={total}
                          currentPage={currentPage}
                          lastPage={lastPage}
                          changePage={changePage} />
            </div>
        </div>
        <div onClick={PageBtnCtr.bind(null,currentPage,lastPage,'next',changePage)} className="rotate-90deg nav" >
            {/* <Icon type="vertical-right" /> */}
        </div>
        <div onClick={PageBtnCtr.bind(null,currentPage,lastPage,'last',changePage) } className="rotate-90deg nav">
            {/* <Icon type="double-left" /> */}
        </div>
    </div>
}

export default Paginator;
