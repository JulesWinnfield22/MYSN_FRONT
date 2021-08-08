import { update } from './user_handler'
import { UPDATE, SET_USER, REMOVE } from './user_actions'
const userReducer = function(state, action) {
	switch(action.type) {
		case UPDATE:
			return {
				...state,
				...update(action.payload)
			}
		case SET_USER:
			return {
				...state,
				...action.payload
			}
		case REMOVE:
			return {}
		default:
			return state
	}
}

export default userReducer