// import React,{ Component } from 'react'
// import ReactDom from 'react-dom'
// import { connect } from 'react-redux';

// import './header.scss'
// import  { hiddenArticle } from '../../../redux/actions/articles'
// import  { cleanSelectLable } from '../../../redux/actions/lable'


// class Header extends Component{

//     render(){
//         const { dispatch,currentArticle,selectlable } = this.props;
        
//         console.log( selectlable )

//         // let Back = selectlable && <div onClick={ ()=>{ selectlable?dispatch(cleanSelectLable()):dispatch(cleanSelectLable()) } } className="back">返回</div>

//         return(
//             <header className='main-header'>
//                 <i className="menu icon iconfont icon-liebiao " onClick = { ()=> {   $('.menu-list').stop().slideToggle("slow"); } } ></i> 
//                 <span id="backLable" className={`${selectlable?(!$.isEmptyObject(currentArticle)?'hidden':''):'hidden'}`} onClick={ ()=>{ dispatch(cleanSelectLable()) } } ></span>
//                 <span id="backList"  className={`${!$.isEmptyObject(currentArticle)?'':'hidden'}`} onClick={ ()=>{ dispatch(hiddenArticle()) } } ></span>
//                 <h2>WUZEFENG BLOG</h2>
//             </header>
//         )
//     }
// }

// function select(state){
//     return{
//         currentArticle:state.articles.currentArticle,
//         selectlable:state.lables.selectlable,
//     }
// }

// export default connect(select)(Header)

import React,{ Component } from 'react'
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