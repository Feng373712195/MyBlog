import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import emitter from '../../../models/ev'
import { throttle,debounce } from '../../js/uilt'
import { setNavActive,changeNavData } from '../../../redux/actions/titlenav'
import './title-nav.scss'


/** 标题导航组件 */
class TitleNav extends Component{
    
    constructor(){
        super();
        this.activeIndex = -1;
        this.manual = false;
    }

    // shouldComponentUpdate(nextProp,nextState){
    //     // console.log(`TitleNav nextProp${JSON.stringify(nextProp)} prop${JSON.stringify(this.props)} nextState${JSON.stringify(nextState)}  state${JSON.stringify(this.state)} `)

    //     if( !$.isEmptyObject(nextProp) || nextState){
    //         return true;
    //     }
    //     return false;
    // }

    
    setActive(index){
        /** 判断是否第一次设置active */
        const { dispatch } =  this.props  

        this.activeIndex === -1 ?
          dispatch(setNavActive(index,index)):
          dispatch(setNavActive(this.activeIndex,index));
        this.activeIndex = index
    }

    scrollSetActive(){
        const { titleNav } = this.state;
        const scrollTop = $(document).scrollTop();
        
        for(let i = 1,len = titleNav.length; i<len;++i){
            /** 最后一条 */
            if(i === titleNav.length-1 && ( (titleNav[i-1].scrollTop) - scrollTop) <= 0 ){
                this.setActive.bind(this,titleNav.length-1)();
                break;
            }

            /** 计算进入可视范围内 */
            if( ( (titleNav[i-1].scrollTop) - scrollTop) <= 0 && titleNav[i].scrollTop > scrollTop ){
                this.setActive.bind(this,i-1)();
                break;
            }
        }
    }

    scrollPage(y,index){    
        this.manual = true;    
        this.setActive(index);
        $(window).scrollTop(y)
    }
   
    render(){
        console.log('我是 TitleNav 我被Render')

        const { titleNav } = this.props;

         //使用visibilty隐藏 减少reflows
        const Navs =   titleNav.map((title,idx) =>{
                            return <div className={title.tag} style={{color:title.active?'red':'#000'}} onClick={this.scrollPage.bind(this,title.scrollTop,idx)} key={idx}>
                                        {title.name}
                                    </div>
                        })
        return(
            //使用visibilty隐藏 减少reflows
            <nav className="titlenav" style={{ visibility:titleNav.length === 0?'hidden':'visible' }} >
                 {Navs}
            </nav>
        )
    }
}

function select(state) {
    return {
        titleNav:state.titleNav
    }
}

export default connect(select)(TitleNav)

