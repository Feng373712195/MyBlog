import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux';

import './header.scss'
import  { hiddenArticle } from '../../../redux/actions/articles'
import  { cleanSelectLable } from '../../../redux/actions/lable'


class Header extends Component{

    render(){
        const { dispatch,currentArticle,selectlable } = this.props;
        
        console.log( selectlable )

        // let Back = selectlable && <div onClick={ ()=>{ selectlable?dispatch(cleanSelectLable()):dispatch(cleanSelectLable()) } } className="back">返回</div>

        return(
            <header className='main-header'>
                <i className="menu icon iconfont icon-liebiao " onClick = { ()=> {   $('.menu-list').stop().slideToggle("slow"); } } ></i> 
                <span id="backLable" className={`${selectlable?(!$.isEmptyObject(currentArticle)?'hidden':''):'hidden'}`} onClick={ ()=>{ dispatch(cleanSelectLable()) } } ></span>
                <span id="backList"  className={`${!$.isEmptyObject(currentArticle)?'':'hidden'}`} onClick={ ()=>{ dispatch(hiddenArticle()) } } ></span>
                <h2>WUZEFENG BLOG</h2>
            </header>
        )
    }
}

function select(state){
    return{
        currentArticle:state.articles.currentArticle,
        selectlable:state.lables.selectlable,
    }
}

export default connect(select)(Header)