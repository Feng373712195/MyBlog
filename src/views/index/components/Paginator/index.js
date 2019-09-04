import React, { Component, useState } from 'react';
import { Icon } from 'antd'

import './style.scss';

const articleTotal = 40;


function PageBtns(props){
    const { total,currentPage,commit } = props;
    const PageBtns = [];
    for( let i = 0; i<total/5;i++ ){
        const pageNum = i + 1;
        PageBtns.push(
            <div key={pageNum} 
                 onClick={()=>commit(pageNum)}
                 className={currentPage == pageNum ? 'active pagenum':'pagenum'} >
                 {pageNum}
            </div>
        )
    }
    return PageBtns
}

const getPageBoxTransLateY = (total,currentPage) => {
    const transLateY = 0
    if( currentPage <= 2 ) return 0
    if( currentPage == total/5 ){
        return -30 * (currentPage - 3)
    };
    return -30 * (currentPage - 2)
};

const pageCtr = (type,curtPage,commit)=>{    
    
    const lastPage = articleTotal/5;
    const getPageNum = {
        'next':(curt)=>curt+1,
        'prev':(curt)=>curt-1,
        'first':1,
        'last':lastPage
    }

    if( type == 'next' || type == 'last' ){
        if(curtPage == lastPage) return
        commit(getPageNum[type])
    }
    if( type == 'prev' || type == 'first' ){
        if(curtPage == 1) return
        commit(getPageNum[type])
    }
}

function Paginator(){
    const [currentPage,setCurrentPage]= useState(1)
    return <div class="paginator-container" >
        <div onClick={()=>pageCtr('first',currentPage,setCurrentPage)} className="rotate-90deg nav" ><Icon type="double-right" /></div>
        <div onClick={()=>pageCtr('prev',currentPage,setCurrentPage)} className="rotate-90deg nav" ><Icon type="vertical-left" /></div> 
        <div class="pagenum-box">
            <div class="scroll-box" style={ { transform:`translateY(${ getPageBoxTransLateY(articleTotal,currentPage) }px)` } } >
                <PageBtns total={articleTotal} currentPage={currentPage} commit={ setCurrentPage } />
            </div>
        </div>
        <div onClick={()=>pageCtr('next',currentPage,setCurrentPage)} className="rotate-90deg nav" ><Icon type="vertical-right" /></div> 
        <div onClick={()=>pageCtr('last',currentPage,setCurrentPage)} className="rotate-90deg nav"><Icon type="double-left" /></div> 
    </div>
}

export default Paginator;