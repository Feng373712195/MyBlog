import React,{ useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import './style.scss';
import { getLables,SELECT_LABLE, } from '@store/actions/lable'
import { CLEAN_ARTICLES,FIRST_ARTILES_LIST_PAGE } from '@store/actions/articles'
import { Tag } from 'antd'

function selectLable(props,lable){
    const { dispatch,history } = props;
    // 设置选中标签
    dispatch({ type:SELECT_LABLE,lable });
    // 清空已加载文章
    dispatch({ type:CLEAN_ARTICLES })
    // 恢复到第一页
    dispatch({ type:FIRST_ARTILES_LIST_PAGE })

    history.push(`/article?lable=${lable}`)
}

function Lablels(props){

    const { dispatch,lables } = props

    useEffect(()=>{
        if( !lables ){
            dispatch( getLables() )
        }
    },[])

    return <div className="lables" >
                {lables && lables.map(lable=>
                    <div className="lable"
                         key={lable}
                         color="#108ee9"
                         onClick={ selectLable.bind(null,props,lable) } >{lable}</div>
                )}
           </div>
}

function select(state){
    console.log( state )
    return {
        lables:state.lables.lablesReducer
    }
}

export default  connect(select)(withRouter(Lablels))
