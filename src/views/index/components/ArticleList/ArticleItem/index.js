import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import markdown from 'models/markdown';
import { showArticle } from 'store/actions/articles';
 
import './style.scss' 


const getObserervArtcleItem = function(onTop){
    const that = this;
    const options = {
        root: null,
        threshold:onTop ? [0,1] : [1,0]
    };
    var intersection = new IntersectionObserver(function (entries) {
        if( entries[0].isIntersecting ){
            this.isVisable = true;
            // console.log( onTop ? '上翻' : '下翻' , that.props.index )
        }
        if( this.isVisable && !entries[0].isIntersecting ){
            this.isVisable = false;
            const isOnTop = entries[0].boundingClientRect.top < 0 ? true : false
            intersection.unobserve(that.acticleItem);
            getObserervArtcleItem.bind(that)( isOnTop );
        }
    },options);
    
    intersection.observe(that.acticleItem);
}

class articleItem extends Component{

    // shouldComponentUpdate(nextProp,nextState){
    //     // console.log(`articleItem nextProp${JSON.stringify(nextProp)} prop${JSON.stringify(this.props)} nextState${JSON.stringify(nextState)}  state${JSON.stringify(this.state)} `)
    //     if( !$.isEmptyObject(nextProp) || nextState){
    //         return true;
    //     }
    //     return false;
    // }

    constructor(){
        super();
        // 文章项内容
        this.acticleItem = null;
        // 监听是否可视范围
        this.intersection = null;
        // 是否已经露出过了
        this.isVisable = false; 
        this.state = {
            isObserveitem:false
        }
    }

    
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

    componentDidMount(props){
        const { index,articlesLen } = this.props;

        // 监听每页文章列表的最后一项
        if( index !== articlesLen-1 ) return;

        this.setState({
            isObserveitem:true
        })
        getObserervArtcleItem.bind(this)(false)
    }

    componentDidMount(){
        // 取消监听
        this.intersection && this.intersection.unobserve(this.acticleItem)
    }


    render(){

        let { dispatch } = this.props;
        const articleContent = this.getArticleContent.bind(this)();
        let isEllipsis = articleContent.length>=200?true:false; 

        return(
            <div style={{ background:this.state.isObserveitem ? 'red' : '' }} ref={ (item)=>{ this.acticleItem = item } }  id={ `acticleItem${this.props.index}` } className="article-list" >
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
            </div>
        )
    }
}

module.exports = articleItem;
