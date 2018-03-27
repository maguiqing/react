import * as actionTypes from './actionTypes'
const defaultState={
  list:[],
  listulN:[],
  listulS:[],
  listulT:[],
  showModel:false,
  isLogin:false
}
export default(state=defaultState,action)=>{
     switch(action.type){
     	case actionTypes.CHANGE_LIST:
     	return{
     		...state,
     		list:action.value
     	}
          case actionTypes.OPEN_MODEL:
          return{
               ...state,
               showModel:true
          }
          case actionTypes.HIDE_MODEL:
          return{
               ...state,
               showModel:false
          }
          case actionTypes.LOGIN:
          return{
               ...state,
               isLogin:true,
               showModel:false
          }
          case actionTypes.LOGOUT:
          return{
               ...state,
               isLogin:false
          }
          case actionTypes.GETLISTN:
          return{
               ...state,
               listulN:action.value
          }
          case actionTypes.GETLISTS:
          return{
               ...state,
               listulS:action.value
          }
          case actionTypes.GETLISTT:
          return{
               ...state,
               listulT:action.value
          }
     	default:
     	     return state
     }
}