import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

/*引入markdown */
import { showArticle } from '../../../redux/actions/articles'
import { changeNavData } from '../../../redux/actions/titlenav'
import marked  from './../../../models/markdown'
import config from '../../../admin/config'

/*引入高亮风格样式*/
import 'highlight.js/styles/xcode.css'
import './articleContent.scss'

class articleContent extends Component{

    // shouldComponentUpdate(nextProp,nextState){
    //     // console.log(`articleContent nextProp${JSON.stringify(nextProp)} prop${JSON.stringify(this.props)} nextState${JSON.stringify(nextState)}  state${JSON.stringify(this.state)} `)
    //     if( !$.isEmptyObject(nextProp) || nextState){
    //         return true;
    //     }
    //     return false;
    // }

    componentDidUpdate(){
        const { dispatch } = this.props 
        dispatch( changeNavData(this.getNavObj($('.article-body'))) )
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

        let Lables = ($.isEmptyObject(currentArticle)?[]:currentArticle.lables).map( (label,index)=>{
                        return	<div key={label} className="ui blue label large">
                                    <span>{label}</span>
                                </div>
                     })

        let Files = ($.isEmptyObject(currentArticle)?[]:currentArticle.files).map((file,index) =>{
                        return <a key={file.name} href={`/articles/down/${currentArticle._id}/${file.name}`} className="file ui label large">
                                    <span className="file-name">{file.name}</span>
                                    <span className="file-size">{`${(parseInt(file.size/1024)).toLocaleString('en-US')}KB`}</span>
                               </a>
                    })

        let regexp = new RegExp(`/articles/uploadImg/_id/(.*)`,'g')
        let content = ($.isEmptyObject(currentArticle)?'':currentArticle.content).replace(regexp,`/articles/uploadImg/${currentArticle._id}/$1`)
        
        return(
           // 如果有选中文章则显示
           <article className={`article-warp ${!$.isEmptyObject(currentArticle)?'':'hidden'}`}>
                <div className="article-back" onClick={ ()=>{ dispatch(showArticle()) } } > &lt;&lt;文章列表</div>
                <div className="article-box">
                    <div className="article-title">{ currentArticle.title}</div>
                    <div className="article-lable">{Lables}</div>
                    <div className="article-body" dangerouslySetInnerHTML={ {__html:marked(content) }} ></div>
                    <div className="article-flies">
                        { ($.isEmptyObject(currentArticle)?[]:currentArticle.files).length != 0 && <h1 class="ui header">附件</h1> }
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

export default connect(select)(articleContent)