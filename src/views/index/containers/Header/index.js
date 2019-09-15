import React,{ Component,useEffect,useState } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { Tag,Menu } from 'antd';
import { UNSELECT_LABLE, } from '@store/actions/lable'
import { getArticles,CLEAN_ARTICLES,FIRST_ARTILES_LIST_PAGE } from '@store/actions/articles'

import './style.scss'

const handleClick = (props,e)=>{
    props.history.push(e.key)
    console.log(e.key)
}

const getActiveSelect = (route) => {
    route = route ? route : window.location.href;
    if( route ){
        if(~route.indexOf("/article") ) return ["/article"]
        if(~route.indexOf("/lables") ) return ["/lables"]
        if(~route.indexOf("/about") ) return ["/about"]
    }
    return ["/article"];
}

const unSelectLable = (props) => {
    // 清空选中标签
    const { dispatch } = props;
    dispatch({ type:UNSELECT_LABLE });
    // 清空已加载文章
    dispatch({ type:CLEAN_ARTICLES })
    // 恢复到第一页
    dispatch({ type:FIRST_ARTILES_LIST_PAGE })
    // 重新获取文章列表
    dispatch( getArticles({},1,10,true) );
}

function Header(props){

    const { selectlable } = props;
    
    return <header className="header" >
                <div className="blog-name" >
                    <div>ZE-FENG BLOG</div>
                    { selectlable && <Tag 
                         closable 
                         key="select-lable" 
                         color="#108ee9"
                         onClose={unSelectLable.bind(null,props)} >{selectlable}
                      </Tag> }
                </div>
                <nav className="blog-menu" >
                    <Menu mode="horizontal" 
                          selectedKeys={ getActiveSelect(props.route) } 
                          onClick={handleClick.bind(null,props)} 
                          style={{ lineHeight: '64px' }} >
                        <Menu.Item key="/article">
                            文章
                        </Menu.Item>
                        <Menu.Item key="/lables">
                            标签
                        </Menu.Item>
                        <Menu.Item key="/about">
                            关于
                        </Menu.Item>
                    </Menu>
                </nav>
          </header>
}

function select(state){
    return{
        selectlable:state.lables.selectlable,
        route:state.history
    }
}
export default connect(select)(withRouter(Header));