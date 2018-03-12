/*
* action 类型
*/

export const CHANGE_TITLENAV = 'CHANGE_TITLENAV';
export const SET_TITLENAVACTIVE = 'SET_TITLENAVACTIVE';

/*
* action 创建函数
*/

export function changeNavData(data){
	return { type:CHANGE_TITLENAV , data }
}

export function setNavActive(oldindex,newindex){
	return { type:SET_TITLENAVACTIVE ,oldindex,newindex }
}