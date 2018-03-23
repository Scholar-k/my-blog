import { combineReducers } from 'redux'
import { reducer as HomeReducer } from '../pages/Home/'

export default combineReducers({
	home: HomeReducer
})