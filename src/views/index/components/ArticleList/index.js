import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import ArticleItem from './ArticleItem'
// import ArticleContent from '../ArticleContent'
import { getArticles } from '@store/actions/articles'
import { SELECT_LABLE, } from '@store/actions/lable'
// import { cleanSelectLable } from '../../../../store/redux/actions/lable'
import { getUrlParam  } from '@uilts'

// import { Skeleton } from 'antd';
// import InfiniteScroll from 'react-infinite-scroller';
// import { throttle } from 'lodash'

import './style.scss';

class articleList extends Component{

    constructor(props){
        super(props)
        const { dispatch,selectlable } = props;
    }

    loadMoreHadnle(){
        let { currentArticlesPage,dispatch } = this.props;
        // 要获取的下一页文章的页数

        const nextPage =  currentArticlesPage + 1;
        dispatch( getArticles({ },nextPage,10) );
    }

    componentDidMount(){
        let { currentArticlesPage,selectlable,dispatch,articles } = this.props;
        // 如果还没有加载过这一页 则加载
        if( !articles.find(list=>list.from === currentArticlesPage) ){
            const query = {};
            // 如果url参数中有label参数则 带上lable请求参数
            const paramlable = getUrlParam(this.props,'lable');
            if( paramlable ) dispatch({ type:SELECT_LABLE,lable:paramlable })
            if( (selectlable = selectlable || paramlable) ){
                (query.lables = { '$in':[selectlable] })
            }
            dispatch( getArticles(query,currentArticlesPage,10,true) );
        }
    }

    componentWillUpdate(newProp){

        const { dispatch,
                currentArticlesPage,
                articles,
                toItemId } = this.props;

        // 判断是否更新了文章列表
        // if( newProp.toItemId ){
        //     const articleWarp = document.getElementById('Artice')
        //     var scrollTimer = null
        //     scrollTimer = setTimeout(() => {
        //         const scrollToItem = document.getElementById(`${newProp.toItemId}`) 
        //         console.log( articleWarp.scrollTop ,'articleWarp.offsetTop ' )
        //         this.scrollToItem( articleWarp,scrollToItem.offsetTop,articleWarp.scrollTop  )
        //         // articleWarp.scrollTo( 0,scrollToItem.offsetTop )
        //         dispatch({ type:CLEAN_TO_ARTILES_ITEM_ID })
        //         this.toItemPosition = false;
        //         clearTimeout(scrollTimer)
        //     }, 16);
        // }

    }

    scrollToItem(target,to,nowTo = 0){
        if( nowTo >= to ) return;
        requestAnimationFrame(()=>{
            nowTo = nowTo + to/50
            target.scrollTo( 0,nowTo )
            this.scrollToItem.call(this,target,to,nowTo);
        })
    }

    componentWillMount(){
    }

    render(){
        let { articles,
            currentArticle,
            selectlable,
            lableRelationArticles,
            dispatch,
            currentArticlesPage } = this.props;

        // let Back = selectlable && <div onClick={ ()=>{  dispatch(cleanSelectLable()) } } className="back">返回</div>
        // (selectlable?lableRelationArticles:articles)
        let ArticleList  =  [];

        // articles.forEach(({ list,from },index)=>{
        //     ArticleList = ArticleList.concat(
        //         list.map((article,itemIndex) => 
        //             <ArticleItem key={ article._id +  index + itemIndex } 
        //                 index={ itemIndex }
        //                 isPageLastItem={ list.length-1 == itemIndex }
        //                 isPageFirstItem={ itemIndex == 0 }
        //                 fromPage={ from } 
        //                 article={ {...article,index} } 
        //                 dispatch={ dispatch } /> )
        //     )
        // })
        
        const currentPageArticleList = articles.find(list=> list.from === currentArticlesPage)
        if( currentPageArticleList ){
            ArticleList = currentPageArticleList.list.map((article,itemIndex) => 
                    <ArticleItem key={ article._id  } 
                        index={ itemIndex }
                        article={ {...article,itemIndex} } 
                        dispatch={ dispatch } /> )
        }

        return(
            // <InfiniteScroll
            //     initialLoad={false}
            //     pageStart={0}
            //     loader={<Skeleton key={  Math.random() }  />}
            //     loadMore={this.throttleLoadmoreHandle.bind(this)}
            //     hasMore={true}
            //     useWindow={false}>
            //         {ArticleList}
            // </InfiniteScroll>

            <div>
                {ArticleList}
            </div>
        )
    }
}

function select(state) {
    return {
      articles:state.articles.articlesReducer,
      currentArticlesPage:state.articles.currentArticlePage,
      currentArticle:state.articles.currentArticle,
      selectlable:state.lables.selectlable,
      toItemId:state.articles.toAriicleItemPosition,
      selectlable:state.lables.selectlable,
	  lableRelationArticles:state.lables.lableRelationArticles
    }
}

export default connect(select)( withRouter(articleList) )

