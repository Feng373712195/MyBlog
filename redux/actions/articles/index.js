import { readAtricle,getAtricle } from '../../../src/js/mfetch'
import { LOADING,LOADEND,CHATH_ERROR,NO_ERROR } from '../global'

/*
* action 类型
*/
export const GET_SUCCESS_ARTICLES = 'GET_SUCCESS_ARTICLES';

export const CLEAN_ARTICLES = 'CLEAN_LABEL'

export const SHOW_ARTICLES = 'SHOW_ARTICLES';

export const HIDE_ARTICLES = 'HIDE_ARTICLES';

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
    dispatch( {type:LOADEND} );
    article?
         dispatch( {type:SHOW_ARTICLES,article:article} ):
         dispatch( {type:HIDE_ARTICLES} );
    dispatch( {type:LOADEND} );
}

export const cleanArticle = () => {
    return {type:CLEAN_ARTICLES}
}
