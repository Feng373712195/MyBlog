
import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import APP from '../containers/MangeApp'

import '../scss/home.scss'
import '../../semantic/dist/semantic.min.css'
// import '../../semantic/dist/semantic.min.js'
import todoApp from './../../redux/reducers/reducer'

//icon-font
import '../css/iconfont.css'
import './iconfont.js'

import 'whatwg-fetch'

const store = createStore(todoApp,applyMiddleware(thunk))

ReactDom.render(( 
    <Router>
        <Provider store={ store } >
            <APP></APP>
        </Provider> 
    </Router>

),$('.app')[0])