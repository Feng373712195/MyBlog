import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { NavLink } from 'react-router-dom'

import './menu-list.scss'

class MenuList extends Component{
	
	backHome(){
		this.props.history.goBack()
	}

	render(){
		console.log('我是 MenuList 我被Render')

		const menulists = [
			{
				name:'发布文章',
				disable:false,
				active:'active',
				link:'/admin/manage/publish/edit',
				key:'publish-edit'
			},
			{
				name:'文章草稿',
				disable:false,
				active:'active',
				link:'/admin/manage/draft/manage',
				key:'publish-draft'
			},
			{
				name:'文章管理',
				disable:false,
				active:'active',
				link:'/admin/manage/publish/manage',
				key:'article-mange'
			},
			{
				name:'标签管理',
				disable:false,
				active:'active',
				link:'/admin/manage/label/manage',
				key:'label-mange'
			},
			{
				name:'返回',
				disable:false,
				active:'',
				link:'/',
				key:'back'
			}
		]

		return (
			<div className="ui vertical menu menu-list">
				{menulists.map((list)=>
					<NavLink key={list.key} onClick={list.key === 'back'?this.backHome.bind(this):()=>{}} key={list.key} className={"item "+ (list.disable?"disable":"") } to={list.link} activeClassName={list.active} >
						<span>{list.name}</span>
					</NavLink>
				)}
		    </div>
		)		
	}
}

export default MenuList;