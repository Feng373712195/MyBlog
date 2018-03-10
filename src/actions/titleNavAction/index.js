/*
* action 类型
*/

export const SHOW_TITLENAV = 'SHOW_TITLENAV';
export const HIDE_TITLENAV = 'HIDE_TITLENAV';

/*
* action 创建函数
*/

export function showNav(navObj){
	return { type:SHOW_TODO , navObj }
}

export function hidnNav(navObj={}){
	return { type:HIDE_TODO , navObj }
}