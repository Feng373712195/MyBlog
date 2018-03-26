import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from '../../src/containers/HomeApp'


import '../scss/home.scss'
import '../../semantic/dist/semantic.min.css'
import 'babel-polyfill'
// import '../../semantic/dist/semantic.min.js'
import todoApp from './../../redux/reducers/reducer'

//icon-font
import '../css/iconfont.css'
import './iconfont.js'

import 'whatwg-fetch'

const store = createStore(todoApp,applyMiddleware(thunk))

ReactDom.render((
    <Provider store={ store } >
        <App></App>
    </Provider>
),$('.app')[0])
