import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../scss/navleft.scss'

class LeftNav extends Component{
	
	render(){
		const msg = 'Im left Nav';
		return (
			<div className="leftNav" >{msg}</div>
		)	
	}
}

export default LeftNav;