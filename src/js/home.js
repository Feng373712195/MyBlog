import React,{ Component } from 'react'
import ReactDom from 'react-dom'
// import {Router,Route,browserHistory,hashHistory} from 'react-router'
import { BrowserRouter as Router, Route , Link } from 'react-router-dom'

import { AppContainer } from 'react-hot-loader'

import '../scss/home.scss'
import '../css/normalize.min.css'

import LeftMenu from '../components/LeftMenu'
import Content from '../containers/Content'



ReactDom.render((
    <AppContainer >    
        <Router>
            <div>
                <LeftMenu />
                <Content/>
            </div>
        </Router>
    </AppContainer>

),document.querySelector('.app'))




if (module) {
    module['hot'].accept()  
}