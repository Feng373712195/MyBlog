import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from '../containers/App'

import '../scss/home.scss'
import '../../semantic/dist/semantic.min.css'
import '../../semantic/dist/semantic.min.js'

import todoApp from '../reducers/reducer'

//icon-font
import '../css/iconfont.css'
import './iconfont.js'

import 'whatwg-fetch'

let store = createStore(todoApp)

console.log(store);

ReactDom.render((
    <AppContainer >    
        <Router>
            <Provider store={ store } >
                <App></App>
            </Provider>
        </Router>
    </AppContainer>
),$('.app')[0])



/*热加载 触发冒泡*/
if (module && module.hot) {
    module['hot'].accept()  
}