import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './containers/Main'
import { HashRouter as Router } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom'
import store from '@store'

import './style.scss'
import '@assets/styles/scss/mixin.scss'
import 'babel-polyfill'

// 热更新 高阶函数
function AppWarp(props){
    if( module && module.hot ){
       const { AppContainer } = require('react-hot-loader')
       return  <AppContainer >{ props.children }</AppContainer>
    }
    return props.children;
}

ReactDom.render((
    <AppWarp> 
        <Provider store={ store } >
            <Router>
                <App></App>
            </Router>
        </Provider>
    </AppWarp>
),$('.app')[0])

/*热加载 触发冒泡*/
if (module && module.hot) {
    module['hot'].accept()  
}