/*
* action 类型
*/

export const LOADING =  'LOADING';

export const LOADEND = 'LOADEND'

export const CHATH_ERROR = 'CHATH_ERROR';

export const NO_ERROR = 'NO_ERROR';

export const SWITCH_ROUING = 'SWITCH_ROUING';

export const SHOW_MODAL = 'SHOW_MODAL';

export const HIDDEN_MODAL = 'HIDDEN_MODAL';

export const LOGIN_LOADING = 'LOGIN_LOADING';

export const LOGIN_LOADEND = 'LOGIN_LOADEND';

export const CHANGE_LOGIN_FLASH = 'CHANGE_LOGIN_FLASH';

export const INIT_LOGIN_FLASH = 'INIT_LOGIN_FLASH';

export const SHOW_ADMIN_LOGIN = 'SHOW_ADMIN_LOGIN';

export const HIDE_ADMIN_LOGIN = 'HIDE_ADMIN_LOGIN';

/*
* action 创建函数
*/

/**load action */
export const loadState  = (isload)=>(dispatch)=>{
    isload?
        dispatch( {type:LOADING} ):
        dispatch( {type:LOADEND} )
}

/**loginload action */
export const loginloadState  = (isload)=>(dispatch)=>{
    isload?
        dispatch( {type:LOGIN_LOADING} ):
        dispatch( {type:LOGIN_LOADEND} )
}

/**error action */
export const errorState  = (error)=>(dispatch)=>{
    error?
        dispatch( {type:CHATH_ERROR,error} ):
        dispatch( {type:NO_ERROR,error:''} )
}

/**modal action */
export const modalState = (modal)=>(dispatch)=>{
    modal?
      dispatch( { type:SHOW_MODAL,modal } ):
      dispatch( { type:HIDDEN_MODAL } )
}

/**rouing action */
export const rouingState = (rouing)=>{
    return { type:SWITCH_ROUING,rouing }
}

/**loginflash action */
export const changeloginFlash = (flash)=>{
    return { type:CHANGE_LOGIN_FLASH,flash }
}

export const initloginFlash = ()=>{
    return { type:INIT_LOGIN_FLASH }
}

/** adminlogin action */
export const showadminlogin = () =>{
    return { type:SHOW_ADMIN_LOGIN }
}

export const hideadminlogin = () =>{
    return { type:HIDE_ADMIN_LOGIN }
}

