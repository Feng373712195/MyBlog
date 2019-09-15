import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router} from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom'

// import 'jquery'
import '@assets/styles/css/iconfont.css'
import '@assets/styles/scss/home.scss'

// import '@semantic/dist/components/icon.min.css'
import '@semantic/dist/components/reset.min.css'
import '@semantic/dist/components/grid.min.css'
import '@semantic/dist/components/form.min.css'
import '@semantic/dist/components/label.min.css'
import '@semantic/dist/components/input.min.css'
import '@semantic/dist/components/menu.min.css'
import '@semantic/dist/components/button.min.css'
// model
import '@semantic/dist/components/modal.min.css'
import '@semantic/dist/components/modal.min.js'
// dimmer
import '@semantic/dist/components/dimmer.min.css'
import '@semantic/dist/components/dimmer.min.js'
// transition
import '@semantic/dist/components/transition.min.css'
import '@semantic/dist/components/transition.min.js'

// import '@semantic/dist/semantic.min.css'
// import '@semantic/dist/semantic.min.js'

import LeftMenu from '../../components/ManageLeftMenu'
import Content from  '../../containers/ManageContent'


class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <LeftMenu />
                    <Content />
                </div>
            </Router>
        )
    }
}

export default App