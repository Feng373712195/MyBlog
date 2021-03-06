import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/Main'
import { HashRouter,BrowserRouter } from 'react-router-dom'
import store from '@store'

import './style.scss'
import '@assets/styles/scss/mixin.scss'
import 'babel-polyfill'

console.log('我回来了～')

const isProd = process.env.NODE_ENV === 'dev' ? false : true;
const Router = isProd ? BrowserRouter : HashRouter;

// // 热更新 高阶函数
function AppWarp(props){
    console.log( process.env.NODE_ENV,'process' )
    // if( module && module.hot ){
    //    const { AppContainer } = require('react-hot-loader')
    //    return  <AppContainer >{ props.children }</AppContainer>
    // }
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
