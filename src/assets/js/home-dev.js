import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { AppContainer } from 'react-hot-loader'
import App from '../../src/containers/HomeApp'

import '../scss/home.scss'
import '../../semantic/dist/semantic.min.css'
import '../../semantic/dist/semantic.min.js'
import todoApp from './../../redux/reducers/reducer'

//icon-font
import '../css/iconfont.css'
import './iconfont.js'
//fetch
import 'whatwg-fetch'

const store = createStore(todoApp,applyMiddleware(thunk))

ReactDom.render((
    <AppContainer >    
            <Provider store={ store } >
                <App></App>
            </Provider>
    </AppContainer>
),$('.app')[0])

/*热加载 触发冒泡*/
if (module && module.hot) {
    module['hot'].accept()  
}
