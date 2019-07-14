import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import UserBox from'../../components/UserBox' 
import MenuList from'../../components/MenuList' 
import TitleNav from '../../components/TitleNav'

import './left-menu.scss'

class LeftMenu extends Component{	
	render(){
		return (
			<section className="menu-warp" >
				<UserBox  />
				<MenuList />
				<TitleNav />
			</section>
		)	
	}
}

export default LeftMenu