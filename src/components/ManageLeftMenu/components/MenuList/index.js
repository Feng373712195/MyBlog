import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { NavLink } from 'react-router-dom'

import './menu-list.scss'

class MenuList extends Component{
	
	render(){
		const menulists = [
			{
				name:'发布文章',
				disable:false,
				link:'/admin/manage/publish/edit',
				key:'publish-edit'
			},
			{
				name:'文章草稿',
				disable:false,
				link:'/admin/manage/publish/draft',
				key:'publish-draft'
			},
			{
				name:'文章管理',
				disable:false,
				link:'/admin/manage/publish/manage',
				key:'article-mange'
			},
			{
				name:'标签管理',
				disable:false,
				link:'/admin/manage/label/manage',
				key:'label-mange'
			}
		]

		return (
			<div className="ui vertical menu menu-list">
				{menulists.map((list)=>
					<NavLink key={list.key} className={"item "+ (list.disable?"disable":"") } to={list.link} activeClassName="active" >
						<span>{list.name}</span>
					</NavLink>
				)}
		    </div>
		)		
	}
}

export default MenuList;