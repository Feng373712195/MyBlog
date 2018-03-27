/** 用户信息管理 action */

/*
* action 类型
*/

/** 获取用户信息 */
export const GET_USERDATA = 'GET_USERDATA'

/** 清除用户信息 */
export const CLEAN_USERDATA = 'CLEAN_USERDATA'

/*
* action 创建函数
*/

export const getUserdata = (data) =>{
    return {type:GET_USERDATA,data}
}

export const cleanUserdata = () =>{
    return {type:CLEAN_USERDATA}
}