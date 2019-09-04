import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './containers/Main'
import { HashRouter as Router } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom'
import Mock,{ Random } from 'mockjs';

import store from '../../store'

import './style.scss'
import 'babel-polyfill'

console.log( Mock.mock,'mock' )
                //m.mock.com/a

const mockArtice = []
for( let i = 0 ; i < 10; i++ ){
    mockArtice.push({ 
        author: `${Mock.mock('@first')} ${Mock.mock('@last')}`,
        clicks: 0,
        content: `**${Random.cparagraph()}**`,
        createtime: `${Random.date()} 星期六 ${Random.time()}`,
        files: [],
        lables: [],
        lasttime: `${Random.date()} 星期六 ${Random.time()}`,
        title: Random.title(),
        __v: 0,
        _id: Random.id(),
    })
}
Mock.mock('//m.mock.com/a',{
    code:0,
    data:mockArtice
})

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