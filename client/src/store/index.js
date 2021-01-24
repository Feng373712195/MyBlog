
import todoApp from './reducers/reducer'
import { createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory,createHashHistory } from 'history'

import {  CHANGE_HISTORY } from './actions/history'

const store = createStore(
    todoApp,
    applyMiddleware(thunk)
)
const browserHistory = createBrowserHistory();
browserHistory.listen((data)=>{
    store.dispatch( { type:CHANGE_HISTORY, route:data.hash.slice(1) } )
})

export default store
