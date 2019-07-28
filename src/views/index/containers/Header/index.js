import React,{ Component,useEffect,useState } from 'react'
import { connect } from 'react-redux';

import { Menu } from 'antd';

import './style.scss'

const handleClick = (e)=>{
    console.log(e.key)
}

function Header(props){

    console.log( props,'props' )

    // useEffect(()=>{
    //     console.log('use hook')
    // })
    // console.log( useEffect,useState )
    
    return <header className="header" >
                <div className="blog-name" >ZE-FENG BLOG</div>
                <nav className="blog-menu" >
                    <Menu mode="horizontal" 
                          selectedKeys={[props.route ? props.route : "/article" ]} 
                          onClick={handleClick} 
                          style={{ lineHeight: '64px' }} >
                        <Menu.Item key="/article">
                            文章
                        </Menu.Item>
                        <Menu.Item key="app">
                            归档
                        </Menu.Item>
                        <Menu.Item key="mail1">
                            关于
                        </Menu.Item>
                    </Menu>
                </nav>
          </header>
}

function select(state){
    return{
        route:state.history
    }
}
export default connect(select)(Header);