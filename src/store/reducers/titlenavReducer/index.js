import { CHANGE_TITLENAV,SET_TITLENAVACTIVE } from '../../actions/titlenav'

function titleNavReducer(state = [],action){
	switch(action.type){
		case CHANGE_TITLENAV:
			console.log('CHANGE_TITLENAV')
			console.log(action)
			state = action.data;
			return state
		case SET_TITLENAVACTIVE:
			/** 第一次 */
			if(action.oldindex === action.newindex){
				state[action.newindex].active = true;
				return state
			}
			state[action.oldindex].active = false;
			state[action.newindex].active = true;
			return state
		default:
			return state
	}
}

export default titleNavReducer