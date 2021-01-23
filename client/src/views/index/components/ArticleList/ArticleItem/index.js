import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { hiddenArticle } from '@store/actions/articles';
import { Tag } from 'antd';

 
import './style.scss' 

const getObserervArtcleItem = function(onTop,fromPage){
    const that = this;
    const { dispatch } = that.props;
    const options = {
        root: null,
        threshold:onTop ? [0,1] : [1,0]
    };
    
    var intersection = new IntersectionObserver(function (entries) {
        if( entries[0].isIntersecting ){
            console.log('observer')
            this.isVisable = true;
        }
        if( this.isVisable && !entries[0].isIntersecting ){
            dispatch({ type:'CUREENT_ARTILES_LIST_PAGE', page: onTop ? fromPage : fromPage + 1  })
            this.isVisable = false;
            const isOnTop = entries[0].boundingClientRect.top < 0 ? true : false
            intersection.unobserve(that.acticleItem);
            getObserervArtcleItem.bind(that)( isOnTop,fromPage );
        }
    },options);
    
    intersection.observe(that.acticleItem);
}

class articleItem extends Component{

    constructor(){
        super();
        // 文章项内容
        this.acticleItem = null;
        // 监听是否可视范围
        this.intersection = null;
        // 是否已经露出过了
        this.isVisable = false; 
        // 是否被监听的item 
        this.state = {
            isObserveitem:false
        }
    }

    componentDidMount(props){
        const { isPageLastItem,fromPage } = this.props;

        // 监听每页文章列表的最后一项   
        // if( !isPageLastItem ) return;
        // this.setState({
        //     isObserveitem:true
        // })
        // getObserervArtcleItem.bind(this)( false,fromPage )
    }

    componentWillUnmount(){
        // 取消监听
        this.intersection && this.intersection.unobserve(this.acticleItem)
    }

    getItemId(){
        const { fromPage, isPageLastItem,isPageFirstItem } = this.props;
        let itemId = ''
        if( isPageFirstItem ){
            itemId = `${fromPage}-0`
        }
        if( isPageLastItem ){
            itemId = `${fromPage}-1`
        }
        return itemId;
    }

    toArticle(id){
        const { history,dispatch } = this.props;
        dispatch( hiddenArticle() );
        history.push(`/article/${id}`);
    }

    render(){

        let { dispatch } = this.props;

        return(
            // style={{ background:this.state.isObserveitem ? 'red' : '' }} 
            <nav onClick={ this.toArticle.bind(this,this.props.article._id) } style={{ background:this.state.isObserveitem ? 'red' : '' }} 
                 ref={(item)=>{ this.acticleItem = item } } 
                 id={ this.getItemId.bind(this)() } 
                 className="article-list" >
                <h2 className="article-title">
                    {this.props.article.title}
                    <div className="ui disabled inline loader"></div>
                </h2>
                {/* <div className={`article-content ${isEllipsis?'ellipsis':''}`}>{ articleContent }</div> */}
                <div className="artice-footer-warp">
                    <div className="artice-footer">
                        <div className="artice-author l">作者：{this.props.article.author}</div>
                        <div className={ `artice-lables l ${ this.props.article.lables.length > 0 ? '' : 'hidden' }` } >
                            <div>标签：</div>
                            <div> 
                                {this.props.article.lables.map(lable=> <Tag key={lable} color="#108ee9">{lable}</Tag> ) } 
                            </div>
                        </div>
                        <div className="artice-createtime r">发布于：{this.props.article.createtime}</div>
                    </div>
                </div>
            </nav>
        )
    }
}

function select(state){
    return {
        currentPage:state.articles.currentArticlePage
    }
}

export default  connect(select)(withRouter(articleItem));
