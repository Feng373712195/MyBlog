import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './menu-list.scss'

class MenuList extends Component{
	
	render(){
		const menulists = [
			{
				name:'首页',
				link:''
			},
			{
				name:'文章',
				link:''
			},
			{
				name:'标签',
				link:''
			},
			{
				name:'关于',
				link:''
			}
		]

		return (
			<div className="menu-list" >
				{menulists.map((list)=> <a className="menu-item" link="#" >{list.name}</a> ) }
			</div>
		)		
	}
}

export default MenuList;