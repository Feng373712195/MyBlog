import React from 'react'
import { connect } from 'react-redux';

import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

import './header.scss'

function Header(props){
    return <header className="header" >
                <div className="blog-name" >ZE-FENG BLOG</div>
                <nav className="blog-menu" >
                    <Menu mode="horizontal" style={{ lineHeight: '64px' }} >
                        <Menu.Item key="mail">
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

export default Header;
