import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import MenuList from'./components/MenuList' 

import './manage-leftmenu.scss'

class ManageLeftMenu extends Component{
	
	render(){
		return (
			<div className="menu-warp" >
				<MenuList />
			</div>
		)	
	}
}

export default ManageLeftMenu;