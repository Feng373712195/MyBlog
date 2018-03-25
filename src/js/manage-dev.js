import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { AppContainer } from 'react-hot-loader'
import APP from '../containers/MangeApp'

import '../scss/home.scss'
import '../../semantic/dist/semantic.min.css'
import '../../semantic/dist/semantic.min.js'
import todoApp from './../../redux/reducers/reducer'

//icon-font
import '../css/iconfont.css'
import './iconfont.js'

import 'whatwg-fetch'

const store = createStore(todoApp,applyMiddleware(thunk))

ReactDom.render((
    <AppContainer >   
        <Provider store={ store } >
            <APP></APP>
        </Provider> 
    </AppContainer>

),$('.app')[0])

if (module && module.hot) {
    module['hot'].accept()  
}