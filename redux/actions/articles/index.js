import { readAtricle,getAtricle } from '../../../src/js/mfetch'
import { LOADING,LOADEND,CHATH_ERROR,NO_ERROR } from '../global'

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

/** 打开的文章加载 */
export const OPEN_ARTICLES_LOADING = 'OPEN_ARTICLES_LOADING';

/** 没有打开的文章加载 */
export const OPEN_ARTICLES_LOADEND = 'OPEN_ARTICLES_LOADEND';

/*
* action 创建函数
*/
export const getSuccessArticles = (data)=>{ 
    return { type:GET_SUCCESS_ARTICLES,data }
}

export const getArticles = (...param) => (dispatch) => {
    let [ query,skip,limit ] = param;
    dispatch( {type:LOADING} );
    getAtricle(query,skip,limit)
    .then(data => {
         dispatch( {type:LOADEND} );
         dispatch(getSuccessArticles(data))
         dispatch( {type:NO_ERROR} )
    })
    .catch(error => { 
        dispatch( {type:LOADEND} );
        dispatch( {type:CHATH_ERROR,error}  )
    })
}

export const showArticle = (article) => (dispatch) => {
    dispatch( {type:OPEN_ARTICLES_LOADING,index:article.idx} )
    setTimeout(()=>{
        dispatch( {type:SHOW_ARTICLES,article:article} )
    },0);
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
