/** 标题导航管理 action */

/*
* action 类型
*/

/** 改变标题导航内容 */
export const CHANGE_TITLENAV = 'CHANGE_TITLENAV';

/** 选中的标签状态 */
export const SET_TITLENAVACTIVE = 'SET_TITLENAVACTIVE';

/*
* action 创建函数
*/
export const changeNavData = (data) =>{
	return { type:CHANGE_TITLENAV , data }
}

export const setNavActive = (oldindex,newindex)=>{
	return { type:SET_TITLENAVACTIVE ,oldindex,newindex }
}