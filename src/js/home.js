import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';

import config from '../../admin/config'

import App from '../../src/containers/HomeApp'


import '../scss/home.scss'
import '../../semantic/dist/semantic.min.css'
// import '../../semantic/dist/semantic.min.js'

import todoApp from './../../redux/reducers/reducer'

//icon-font
import '../css/iconfont.css'
import './iconfont.js'

import 'whatwg-fetch'

let store = createStore(todoApp)

ReactDom.render((
    <Provider store={ store } >
        <App></App>
    </Provider>
),$('.app')[0])
