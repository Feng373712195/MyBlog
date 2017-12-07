import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { Route } from 'react-router-dom'

import PublishArticles from '../PublishArticles'

class Content extends Component{

    render(){
		return (
            <div className="content">
                <Route path="/admin/manage/publish/edit" component={ PublishArticles } />
            </div>
         )
    }
}

export default Content;