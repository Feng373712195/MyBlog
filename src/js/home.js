import React from 'react'
import ReactDom from 'react-dom'
import '../scss/home.scss'
import '../css/normalize.min.css'

import LeftMenu from '../components/LeftMenu'

ReactDom.render(<LeftMenu />,document.querySelector('.LeftMenu'))

if (module) {
    module['hot'].accept()  
}