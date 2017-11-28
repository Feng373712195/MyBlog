import React from 'react'
import ReactDom from 'react-dom'
import LeftNav from '../components/LeftNav.js'

ReactDom.render(<LeftNav />,document.querySelector('.leftnav'))

if (module) {
    module['hot'].accept()  
}