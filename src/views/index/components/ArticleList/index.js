import React, { Component } from 'react';
import { connect } from 'react-redux'

import ArticleItem from './ArticleItem'
// import ArticleContent from '../ArticleContent'
import { getArticles,showArticle,cleanArticle } from '../../../../store/actions/articles'
// import { cleanSelectLable } from '../../../../store/redux/actions/lable'
import InfiniteScroll from 'react-infinite-scroller';
import { throttle } from 'lodash'

import './style.scss';

class articleList extends Component{

    constructor(props){
        super()

        this.loadMoreHadnle = throttle(this.loadMoreHadnle,600)
        this.state = {
            hasMore:true
        }
    }

    loadMoreHadnle(){
        const { selectlable,dispatch } = this.props;
        /**没有选中标签 默认加载前10篇文章*/ 
        if(!selectlable) dispatch( getArticles({},0,10) );
    }
    
    componentDidMount(){
        this.loadMoreHadnle()
    }

    componentWillMount(){
    }

    componentWillUnmount(){
        const { dispatch } = this.props;
        dispatch( cleanArticle() );
    }
    

    render(){
        let { articles,currentArticle,selectlable,lableRelationArticles,dispatch, } = this.props;
        // let Back = selectlable && <div onClick={ ()=>{  dispatch(cleanSelectLable()) } } className="back">返回</div>
        let ArticleList  = (selectlable?lableRelationArticles:articles)
                           .map( (article,idx) =><ArticleItem key={article._id} article={ {...article,idx} } dispatch={ dispatch } ></ArticleItem> )

        // Lable页时 有选中标签再显示文字列表
        // Article页 则不用隐藏操作。
        // let visible =  window.location.pathname === '/label' ? (selectlable ? '':'hidden'):'';

        return(
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.loadMoreHadnle.bind(this)}
                    hasMore={true}
                    useWindow={false}>
                    {ArticleList}
                </InfiniteScroll>
        )
    }
}

function select(state) {
    return {
      articles:state.articles.articlesReducer,
      currentArticle:state.articles.currentArticle,
      selectlable:state.lables.selectlable,
	  lableRelationArticles:state.lables.lableRelationArticles
    }
}

export default connect(select)(articleList)

