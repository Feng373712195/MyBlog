import { GET_USERDATA,CLEAN_USERDATA } from '../../actions/user'

function userReducer(state = {},action){
	switch(action.type){
        case  GET_USERDATA:
            state = action.data;
			return state
		case CLEAN_USERDATA:
			state = {};
			return state
		default:
			return state
	}
}

module.exports = userReducer;