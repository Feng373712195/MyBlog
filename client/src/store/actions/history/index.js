/*
* action 类型
*/

export const CHANGE_HISTORY = 'CHANGE_HISTORY';

export const getSuccessArticles = (route)=>{ 
    return { type:GET_SUCCESS_ARTICLES,route }
}
