
import { combineReducers } from 'redux'
import { LOADING,
		 LOADEND,
		 CHATH_ERROR,
		 NO_ERROR,
		 SWITCH_ROUING,
		 SHOW_MODAL,
		 HIDDEN_MODAL,
		 LOGIN_LOADING,
		 LOGIN_LOADEND,
		 CHANGE_LOGIN_FLASH,
		 INIT_LOGIN_FLASH,
		 SHOW_ADMIN_LOGIN,
		 HIDE_ADMIN_LOGIN
		 } from '../../actions/global'

function loadReducer(state = true,action){
	switch(action.type){
        case LOADING:
            state = true;
			return state
		case LOADEND:
			state = false;
			return state
		default:
			return state
	}
}

function errorReducer(state = '',action){
	switch(action.type){
        case CHATH_ERROR:
            state = action.error
			return state
        case NO_ERROR:
            state = ''
			return state
		default:
			return state
	}
}

function routerRedcer(state = '',action){
	switch(action.type){
		case SWITCH_ROUING:
			console.log( action )
            state = action.rouing
			return state
		default:
			return state
	}
}

function modalRedcer(state = {},action){
	switch(action.type){
		case SHOW_MODAL:
			$('.m-modal').modal('show');
			return Object.assign({},state,action.modal)
		case HIDDEN_MODAL:
			state = {}
			$('.m-modal').modal('hide');
			return state
		default:
			return state
	}
}

function loginloadRedcer(state = false,action){
	switch(action.type){
		case  LOGIN_LOADING:
			state = true
			return state
		case LOGIN_LOADEND:
			state = false
			return state
		default:
			return state
	}
}

function loginflashRedcer(state={color:'',text:''},action){
	switch(action.type){
		case  CHANGE_LOGIN_FLASH:
			state = action.flash
			return state
		case INIT_LOGIN_FLASH:
			state = {color:'',text:''}
			return state
		default:
			return state
	}
}

function adminloginRedcer(state = false,action){
	switch(action.type){
		case SHOW_ADMIN_LOGIN:
			state = true
			return state
		case HIDE_ADMIN_LOGIN:
			state = false
			return state
		default:
			return state
	}
}


module.exports = combineReducers({
    loadReducer,
	errorReducer,
	routerRedcer,
	modalRedcer,
	loginloadRedcer,
	loginflashRedcer,
	adminloginRedcer
})