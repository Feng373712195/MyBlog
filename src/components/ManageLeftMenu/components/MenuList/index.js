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