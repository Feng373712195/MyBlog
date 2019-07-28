import { 
    CHANGE_HISTORY
 } from '../../actions/history';

function currentRoute(store = '',action) {
    console.log('dispatch',action)
    if( action.type === CHANGE_HISTORY ){
        return action.route 
    }
    return store
}

export default currentRoute