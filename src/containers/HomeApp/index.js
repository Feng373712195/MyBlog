import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'

import LeftMenu from '../LeftMenu'
import Content from '../Content'

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