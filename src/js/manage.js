
import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { AppContainer } from 'react-hot-loader'

import '../scss/home.scss'
import '../../semantic/dist/semantic.css'
import '../../semantic/dist/semantic.min.js'

import LeftMenu from '../components/ManageLeftMenu'
import Content from  '../containers/ManageContent'

//icon-font
import '../css/iconfont.css'
import './iconfont.js'

import 'whatwg-fetch'


ReactDom.render((
    <AppContainer >    
        <Router>
            <div>
                <LeftMenu />
                <Content />
            </div>
        </Router>
    </AppContainer>

),$('.app')[0])

if (module) {
    module['hot'].accept()  
}