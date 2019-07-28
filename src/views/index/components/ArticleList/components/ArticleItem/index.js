import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import markdown from '../../../../../../../models/markdown';
import { showArticle } from '../../../../../../store/actions/articles';
 
import './style.scss' 


class articleItem extends Component{

    // shouldComponentUpdate(nextProp,nextState){
    //     // console.log(`articleItem nextProp${JSON.stringify(nextProp)} prop${JSON.stringify(this.props)} nextState${JSON.stringify(nextState)}  state${JSON.stringify(this.state)} `)
        
    //     if( !$.isEmptyObject(nextProp) || nextState){
    //         return true;
    //     }
    //     return false;
    // }

    
    getArticleContent(){
        let div = document.createElement('div');

        div.innerHTML =  markdown(this.props.article.content)
                         /**列表时把 把图片src转成data-src  不加载图片*/ 
                        .replace(/src\=/g,'data-src=')
                        /**过滤换行符 回车符*/
                        .replace(/\n\r/g,'')
                        /**文章列表只显示400个字 */
                        .substring(0,400);
                        
        return div.innerText
    }

    render(){

        let { dispatch } = this.props;
        console.log( this.props ); 
        const articleContent = this.getArticleContent.bind(this)();
        let isEllipsis = articleContent.length>=200?true:false; 

        return(
            <article className="article-list" >
                <h2 onClick={ ()=>{  dispatch(showArticle(this.props.article)) } } className="article-title">
                    {this.props.article.title}
                    <div className="ui disabled inline loader"></div>
                </h2>
                <div className={`article-content ${isEllipsis?'ellipsis':''}`}>{ articleContent }</div>
                <div className="artice-footer-warp">
                    <p className="artice-footer">
                        <span className="artice-author l">作者：{this.props.article.author}</span>
                        <span className="artice-read l">阅读量：{this.props.article.clicks}</span>
                        <span className="artice-createtime r">发布于：{this.props.article.createtime}</span>
                    </p>
                </div>
            </article>
        )
    }
}

module.exports = articleItem;
