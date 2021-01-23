import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, } from 'react-router-dom'

import './menu-list.scss'

class MenuList extends Component{
	
	listenWidth(){
		if( $(window).width() > 760 ){
			$('.menu-list').css('display') === 'none' && $('.menu-list').css('display','block');
		}
	}

	componentDidMount(){
		$(window).resize(this.listenWidth)
	}

	componentWillUnmount(){
		$(window).off('resize',this.listenWidth)
	}

	render(){

		console.log('我是 MenuList 我被Render')

		const menulists = [
			{
				name:'主页',
				disable:true, 
				icon:'icon-zhuye',
				iconSize:"25px",
				link:'/',
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
				{menulists.map((list,index)=>
					<NavLink key={list.key} 
							 className={"menu-item "+ (list.disable?"disable":"") } 
							 to={list.link} 
							 activeClassName="active" >
						<i 	style={{fontSize:list.iconSize }} 
							className={"iconfont " + list.icon} ></i> 
						<span>{list.name}</span>
					</NavLink>
				 ) }
			</div>
		)		
	}
}

export default MenuList;