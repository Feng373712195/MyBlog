import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom'

import './menu-list.scss'

class MenuList extends Component{
	
	render(){
		const menulists = [
			{
				name:'首页',
				link:'/index',
				key:'index'
			},
			{
				name:'文章',
				link:'/article',
				key:'article'
			},
			{
				name:'标签',
				link:'/label',
				key:'label'
			},
			{
				name:'关于',
				link:'/about',
				key:'about'
			}
		]

		return (
			<div className="menu-list" >
				{menulists.map((list)=> <Link key={list.key} className="menu-item" to={list.link} >{list.name}</Link> ) }
			</div>
		)		
	}
}

export default MenuList;