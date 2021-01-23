import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import ArticleItem from './components/ArticleItem'
import ArticleContent from '../ArticleContent'
import { getArticles,showArticle } from '../../../redux/actions/articles'
import { cleanSelectLable } from '../../../redux/actions/lable'

class articleList extends Component{

    constructor(){
        super()        
    }
     
    componentWillMount(){
        const { selectlable,dispatch } = this.props;
        /**没有选中标签 默认加载前10篇文章*/ 
        if(!selectlable) dispatch( getArticles({},1,10) );
    }

    componentWillUnmount(){
        
    }
    

    render(){
        let { articles,currentArticle,selectlable,lableRelationArticles,dispatch, } = this.props;
        // let Back = selectlable && <div onClick={ ()=>{  dispatch(cleanSelectLable()) } } className="back">返回</div>
        let ArticleList  = (selectlable?lableRelationArticles:articles)
                           .map( (article,idx) =><ArticleItem key={article._id} article={ {...article,idx} } dispatch={ dispatch } ></ArticleItem> )

        // Lable页时 有选中标签再显示文字列表
        // Article页 则不用隐藏操作。
        let visible =  window.location.pathname === '/label' ? (selectlable ? '':'hidden'):'';

        return(
            <div className={`articleList-warp ${visible}`}>
                {/**这里不再用三元操作符判断渲染组件，这样会造成重复渲染。改使用隐藏显示组件 */}
                <ArticleContent article={ currentArticle }></ArticleContent>
                <div className={`${$.isEmptyObject(currentArticle)?'':'hidden'}`} >
                    {ArticleList}
                </div>
            </div>
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

