import { loadLabel,getAtricle,removeLabelHandle } from '../../../src/js/mfetch'
import { LOADING,LOADEND,CHATH_ERROR,NO_ERROR,HIDDEN_MODAL } from '../global'
/*
* action 类型
*/
export const GET_SUCCESS_LABEL = 'GET_SUCCESS_LABEL';

export const CLEAN_LABEL = 'CLEAN_LABEL'

export const SELECT_LABLE = 'SELECT_LABLE';

export const UNSELECT_LABLE = 'UNSELECT_LABLE';

export const  GET_LABLE_RELATION_ARTICLES = 'GET_LABLE_RELATION_ARTICLES';

export const  CLEAN_LABLE_RELATION_ARTICLES = 'CLEAN_LABLE_RELATION_ARTICLES';

export const REMOVE_LABLE = 'REMOVE_LABLE';

/*
* action 创建函数
*/

export const setSelectlable = (...param) => (dispatch)=>{
    
    let [ lable,skip,limit ] = param; 
    dispatch({type:SELECT_LABLE,lable})
    dispatch({type:LOADING})
    getAtricle({lables:lable},skip,limit)
    .then(data =>{ 
        dispatch(getLableRelationArticles(data)) 
        dispatch( {type:NO_ERROR} )
        dispatch({type:LOADEND})
    })
    .catch(e =>{ 
        dispatch({type:CHATH_ERROR})
        dispatch({type:LOADEND})
    })
}

export const cleanSelectLable = () => (dispatch) => {
    dispatch({type:UNSELECT_LABLE,lable:''})   
    dispatch(cleanLableRelationArticles())
}

export const getSuccessLable = (lables) =>{
    return {type:GET_SUCCESS_LABEL,data:lables}
}   

export const getLableRelationArticles = (data) =>{
    return {type:GET_LABLE_RELATION_ARTICLES,articles:data}
}

export const cleanLableRelationArticles = () =>{
    return {type:CLEAN_LABLE_RELATION_ARTICLES,articles:[]}
}

export const  getLables = () => (dispatch) => {
    dispatch( {type:LOADING} );
    loadLabel()
    .then(data => {
         dispatch(getSuccessLable(data))
         dispatch( {type:NO_ERROR} )
         dispatch( {type:LOADEND} );
    })
    .catch(error => { 
        dispatch( {type:CHATH_ERROR,error}  )
        dispatch( {type:LOADEND} );
    })
}

export const cleanLables = () => {
    return {type:CLEAN_LABEL}
}

export const removeLable = (lable) => (dispatch) => {
    dispatch({type:LOADING})
    removeLabelHandle(lable.lable)
    .then(()=>{ 
        dispatch({type:LOADEND})
        dispatch({type:REMOVE_LABLE,lable})
        dispatch({type:HIDDEN_MODAL})
     })
     .catch((error)=>{
        dispatch({type:LOADEND})
        dispatch({type:CHATH_ERROR,error})
        dispatch({type:HIDDEN_MODAL})
     })
}