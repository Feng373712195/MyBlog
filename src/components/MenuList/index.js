import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'

import './menu-list.scss'

class MenuList extends Component{

	shouldComponentUpdate(nextProp,nextState){
		// console.log(`MenuList nextProp${JSON.stringify(nextProp)} prop${JSON.stringify(this.props)} nextState${JSON.stringify(nextState)}  state${JSON.stringify(this.state)} `)
		if( !$.isEmptyObject(nextProp) || nextState){
            return true;
		}
        return false;
    }
	
	render(){

		console.log('我是 MenuList 我被Render')

		const menulists = [
			{
				name:'首页',
				disable:true, 
				icon:'icon-zhuye',
				iconSize:"25px",
				link:'/index',
				key:'index'
			},
			{
				name:'文章',
				disable:false, 
				icon:'icon-wenzhang',
				iconSize:"20px",
				link:'/article',
				key:'article'
			},
			{
				name:'标签',
				disable:false, 
				iconSize:"22px",
				icon:'icon-biaoqian',
				link:'/label',
				key:'label'
			},
			{
				name:'关于',
				disable:false,
				iconSize:"20px", 
				icon:'icon-guanyu',
				link:'/about',
				key:'about'
			}
		]

		return (
			<div className="menu-list" >
				{menulists.map((list)=>
					<NavLink key={list.key} className={"menu-item "+ (list.disable?"disable":"") } to={list.link} activeClassName="active" >
						<i style={{fontSize:list.iconSize }} className={"iconfont " + list.icon} ></i> 
						<span>{list.name}</span>
					</NavLink>
				 ) }
			</div>
		)		
	}
}

export default MenuList;