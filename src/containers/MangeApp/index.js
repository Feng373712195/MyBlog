import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'

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