import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/*引入markdown */
import { showArticle } from '@store/actions/articles'
import marked from '@assets/js/markdown'
import 'jquery-lazyload';

import Anchors from '@views/index/components/Anchors'
import { Tag } from 'antd';

/*引入高亮风格样式*/
import 'highlight.js/styles/xcode.css'
import './style.scss'
/* 引入zoom */
import '@assets/js/zoom'
import '@assets/styles/css/zoom.css'

class articleContent extends Component{

    constructor(props){
        super(props)
        const { dispatch } = props;
        const articleId = props.match.params.id;
        dispatch( showArticle(articleId) )

        this.state = {
            navTitle:null
        }
        
    }

    componentDidUpdate(){
        const { dispatch } = this.props 
        // 图片懒加载
        $('.article-warp .lazy').lazyload({
            container: $(".article-content-warp"),
            effect: "fadeIn"
        })
        // 锚点设置
        if( (!this.state.navTitle) && $('h3').length > 0 ){
            this.setState({ navTitle:[...$('h3')].map(dom=>dom.id) })
        }
        /** 记录： 返回文章列表 文章state发生改变会再触发一次componentDidUpdate  
            changeNavData会传过去一个空数组 免去了清除标题导航状态的操作 */

        /** 如果文章中有标签则 改变标签导航内容 */
        // const titlenavData = this.getNavObj($('.article-body'));
        // dispatch( changeNavData(titlenavData) )
        /** 结束加载文章的加载器 */
        // dispatch( loadendArticle() )
        /** 为标题导航创建粘性布局 */
        // $('.titlenav').sticky({context:'.container'});
    }

    getNavObj(dom){

        let titleNav = []; 
        console.log( $('h1,h2,h3',dom).length )
        $('h1,h2,h3',dom).map((idx,ele)=>{
            // console.log(ele.innerText);
            //避免标题相同，用idx作为key
            titleNav.push({
                name:ele.innerText,
                scrollTop:ele.getBoundingClientRect().top,
                boxH:ele.clientHeight,
                tag:ele.tagName,
                active:false
            })
        })

        return titleNav;
    }

    render(){
        
        let { currentArticle,dispatch } = this.props;
        // 文章还未加载好
        if( !currentArticle ) return (<div></div>)

        let Lables = (!currentArticle ? []:currentArticle.lables).map( (label,index)=>{
                        return	<Tag color="#108ee9" key={label} >{label}</Tag>
                     })

        let Files  = (!currentArticle ? []:currentArticle.files).map((file,index) =>{
                        return <a key={file.name} href={`/articles/down/${currentArticle._id}/${file.name}`} className="file ui label large">
                                    <span className="file-name">{file.name}</span>
                                    <span className="file-size">{`${(parseInt(file.size/1024)).toLocaleString('en-US')}KB`}</span>
                               </a>
                    })

        let regexp = new RegExp(`/articles/uploadImg/_id/(.*)`,'g')
        if( currentArticle ){
            currentArticle.content = currentArticle.content.replace(regexp,`/articles/uploadImg/${currentArticle._id}/$1`)            
            currentArticle.content = marked(currentArticle.content)

            currentArticle.content = currentArticle.content
            .replace(/<img src="(.*)" .*>?/g,'<img class="lazy" data-original="$1" data-action="zoom" />');

            currentArticle.content = currentArticle.content
            .replace(/<h3 .*>(.*)<\/h3>?/g,'<h3 id=$1>$1</h3>');
        }
        
        return(
           // 如果有选中文章则显示
           <article className={`article-warp ${currentArticle ? '':'hidden' }`}>
                <Anchors anchors={this.state.navTitle} ></Anchors> 
                <div className="article-box">
                    <div className="article-title">{ currentArticle.title}</div>
                    <div className="article-body" dangerouslySetInnerHTML={ {__html:currentArticle.content }} ></div>
                    <div className={ `article-lable ${currentArticle.lables.length > 0?'':'hidden'}` } >
                        <div className="tipe-title" >文章相关标签</div>
                        {Lables}
                    </div>
                    <div className={ `article-flies ${currentArticle.files.length > 0?'':'hidden'}` } >
                        <div className="tipe-title" >文章相关附件</div>
                        {Files}
                    </div>
                </div>
           </article >
        )
    }
}

function select(state) {
    return {
        currentArticle:state.articles.currentArticle
    }
}

export default  connect(select)(withRouter(articleContent))

