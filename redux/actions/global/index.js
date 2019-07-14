
/**全局状态 action */

/*
* action 类型
*/

/** 加载中 */
export const LOADING =  'LOADING';

/** 加载结束 */
export const LOADEND = 'LOADEND'

/** 捕获错误 */
export const CHATH_ERROR = 'CHATH_ERROR';

/** 没有抛出错误 && 清除错误 */
export const NO_ERROR = 'NO_ERROR';

/** 切换路由 （配合 react-redux-router 未实现） */
export const SWITCH_ROUING = 'SWITCH_ROUING';

/** 显示模态框 */
export const SHOW_MODAL = 'SHOW_MODAL';

/** 隐藏模态框 */
export const HIDDEN_MODAL = 'HIDDEN_MODAL';

/** 登陆中 */
export const LOGIN_LOADING = 'LOGIN_LOADING';

/** 登陆结束 */
export const LOGIN_LOADEND = 'LOGIN_LOADEND';

/** 登陆提示 （错误信息与成功信息） */
export const CHANGE_LOGIN_FLASH = 'CHANGE_LOGIN_FLASH';

/** 初始化登陆提示  */
export const INIT_LOGIN_FLASH = 'INIT_LOGIN_FLASH';

/** 管理员窗口显示 */
export const SHOW_ADMIN_LOGIN = 'SHOW_ADMIN_LOGIN';

/** 管理员隐藏显示 */
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

