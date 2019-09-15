import { readAtricle,getAtricle,getAtricleList } from '@api'
import { LOADING,LOADEND,CHATH_ERROR,NO_ERROR } from '../global'

console.log(  )

/** 管理文章 action */

/*
* action 类型
*/

/** 获取文章列表信息 */
export const GET_SUCCESS_ARTICLES = 'GET_SUCCESS_ARTICLES';
/** 清除加载的文章列表 */
export const CLEAN_ARTICLES = 'CLEAN_ARTICLES'

/** 显示文章 */
export const SHOW_ARTICLES = 'SHOW_ARTICLES';
/** 隐藏文章 */
export const HIDE_ARTICLES = 'HIDE_ARTICLES';

/** 获取文章列表加载中 */
export const SHOW_LOAD_ARTICLES_MASK = 'SHOW_LOAD_ARTICLES_MASK';
/** 获取文章列表加载完毕 */
export const HIDE_LOAD_ARTICLES_MASK = 'HIDE_LOAD_ARTICLES_MASK';

/** 打开的文章加载 */
export const OPEN_ARTICLES_LOADING = 'OPEN_ARTICLES_LOADING';
/** 没有打开的文章加载 */
export const OPEN_ARTICLES_LOADEND = 'OPEN_ARTICLES_LOADEND';

// 文章列表下一页
export const  NEXT_ARTILES_LIST_PAGE = 'NEXT_ARTILES_LIST_PAGE';
// 文章列表上一页
export const PRE_ARTILES_LIST_PAGE = 'PRE_ARTILES_LIST_PAGE';
// 文章列表第一页
export const FIRST_ARTILES_LIST_PAGE = 'FIRST_ARTILES_LIST_PAGE';
// 文章列表最后一页
export const LAST_ARTILES_LIST_PAGE = 'LAST_ARTILES_LIST_PAGE';
// 改变文章页数
export const CUREENT_ARTILES_LIST_PAGE = 'CUREENT_ARTILES_LIST_PAGE'

// 设置定位到文章的某一项
export const TO_ARTILES_ITEM_ID = 'TO_ARTILES_ITEM_ID'
// 清除定位文章某一项ID
export const CLEAN_TO_ARTILES_ITEM_ID = 'CLEAN_TO_ARTILES_ITEM_ID'

// 文章总数
export const SET_ARTILES_TOTAL = 'SET_ARTILES_TOTAL'

/*
* action 创建函数
*/
export const getSuccessArticles = (data)=>{ 
    return { type:GET_SUCCESS_ARTICLES,data }
}

export const getArticles = (...param) => (dispatch) => {
    let [ query,skip,limit,showMask ] = param;
    dispatch( {type:LOADING} );
    showMask && dispatch( {type:SHOW_LOAD_ARTICLES_MASK} )
    getAtricleList(query,skip,limit)
    .then(data => {
         dispatch( {type:LOADEND} );
         dispatch( {type:SET_ARTILES_TOTAL ,total:data.total} )
         if(showMask){
            dispatch( {type:HIDE_LOAD_ARTICLES_MASK } );
            dispatch( {type:TO_ARTILES_ITEM_ID , itemId:`${skip}-0` } );
         }
         dispatch(getSuccessArticles({ list:data.data,page:skip }))
         dispatch( {type:NO_ERROR} )
    })
    .catch(error => { 
        dispatch( {type:LOADEND} );
        showMask && dispatch( {type:HIDE_LOAD_ARTICLES_MASK } )
        dispatch( {type:CHATH_ERROR,error}  )
    })
}

export const showArticle = (_id) => (dispatch) => {
    dispatch( {type:LOADEND} );
    dispatch( {type:SHOW_LOAD_ARTICLES_MASK} )
    getAtricle({_id},1,1) 
    .then(data=>{
        dispatch( {type:LOADEND} );
        dispatch( {type:HIDE_LOAD_ARTICLES_MASK } )
        dispatch( {type:SHOW_ARTICLES,article:data.data[0]} )
    })
    .catch(error => { 
        dispatch( {type:LOADEND} );
        dispatch( {type:HIDE_LOAD_ARTICLES_MASK } )
        dispatch( {type:CHATH_ERROR,error}  )
    })
}

export const loadendArticle = () => {
    return { type:OPEN_ARTICLES_LOADEND }
}

export const hiddenArticle = () => (dispatch) =>{
    dispatch( {type:HIDE_ARTICLES} );
}

export const cleanArticle = () => {
    return {type:CLEAN_ARTICLES}
}
