import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import emitter from '../../../../../models/ev'
import { throttle,debounce } from '../../../../js/uilt'
import './title-nav.scss'


/** 标题导航组件 */
export default class TitleNav extends Component{
    
    constructor(){
        super();
        this.activeIndex = -1;
        this.manual = false;
        this.state = {
            titleNav:[]
        }
    }

    eventCallback(data){
        this.props.changeTitleNavData(data)
        this.setState({
            titleNav:data
        })
    }

    componentWillMount(){
        const that = this;
        /**接收文章内容传过来的标题导航数据 */
        this.eventEmitter = emitter.addListener('callNavData',this.eventCallback.bind(that))

        $(window).on('scroll',(e)=>{
            /** 手动点击导航会触发 scroll事件 用这个变量来阻止 */
            if(this.manual){
                this.manual = false;
                return;
            }
            //函数防抖
            var that = this;
            var f = that.scrollSetActive.bind(that)
            var scrollHandle = debounce(f,500);
            scrollHandle();
        })
    }

    componentWillUnmount(){
        if(this.eventEmitter){
            emitter.removeListener('callNavData',this.eventCallback);
		}
        $(window).off('scroll')
    }

    
    setActive(index){
        /** 判断是否第一次设置active */
        this.activeIndex === -1 ?
          this.props.setTitleNavAction(index,index):
          this.props.setTitleNavAction(this.activeIndex,index);
        
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

        this.setState({
            titleNav: this.props.titleNav
        })
    }

    scrollPage(y,index){    
        this.manual = true;    
        this.setActive(index);
        $(window).scrollTop(y)

        this.setState({
            titleNav: this.props.titleNav
        })
    }
   
    render(){
        const { titleNav } = this.state;
         //使用visibilty隐藏 减少reflows
        const Navs =   titleNav.map((title,idx) =>{
                            return <li className={title.tag} style={{color:title.active?'red':'#000'}} onClick={this.scrollPage.bind(this,title.scrollTop,idx)} key={idx}>
                                        {title.name}
                                    </li>
                        })
        return(
            //使用visibilty隐藏 减少reflows
            <ul className="titlenav" style={{ visibility:titleNav.length === 0?'hidden':'visible' }} >
                 {Navs}
            </ul>
        )
    }
}

