import * as actionTypes from './actionTypes'
const defaultState={
	rows:[],
	imgUrl:[]
}
export default (state=defaultState,action)=>{
	switch(action.type){
		case actionTypes.GETLIST:
		return{
			...state,
			rows:action.value
		}
		case actionTypes.GETURL:
		return{
			...state,
			imgUrl:action.value
		}
		default:
		    return state
	}
    
}