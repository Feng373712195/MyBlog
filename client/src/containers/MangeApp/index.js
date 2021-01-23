import React,{ Component, Fragment } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { HashRouter as Router} from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom'

// import 'jquery'
import '@assets/styles/css/iconfont.css'
import '@assets/styles/scss/home.scss'

// import '@assets/styles/semantic/icon.min.css'
import '@assets/styles/semantic/reset.min.css'
import '@assets/styles/semantic/grid.min.css'
import '@assets/styles/semantic/form.min.css'
import '@assets/styles/semantic/label.min.css'
import '@assets/styles/semantic/input.min.css'
import '@assets/styles/semantic/menu.min.css'
import '@assets/styles/semantic/button.min.css'
// model
import '@assets/styles/semantic/modal.min.css'
import '@assets/styles/semantic/modal.min.js'
// dimmer
import '@assets/styles/semantic/dimmer.min.css'
import '@assets/styles/semantic/dimmer.min.js'
// transition
import '@assets/styles/semantic/transition.min.css'
import '@assets/styles/semantic/transition.min.js'

import LeftMenu from '../../components/ManageLeftMenu'
import Content from  '../../containers/ManageContent'
import LoginModal from '../../components/UserBox/components/LoginModal'


class App extends Component{
    
    render(){
        const { adminlogin  } = this.props
        return(
            <Fragment>
                    <div style={ { display : adminlogin ? 'block' : 'none' } } >
                        <Router>
                            <div>
                                <LeftMenu />
                                <Content /> 
                            </div>
                        </Router>
                    </div>
                    <LoginModal />
            </Fragment>
        )
    }
}

function select(state){
    return {
        adminlogin:state.global.adminloginRedcer,
    }
}

export default connect(select)(App)