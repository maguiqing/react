import * as actionTypes from './actionTypes'
export const changeDetail=(data)=>({
           type:actionTypes.CHANGE_DETAIL,
        	value:{
        		title:data.title,
        		date:data.date,
        		content:data.content
        	}
})
export const transDetail=(id)=>{
      return(dispatch)=>{
           fetch('/api/detail.json?id='+id)
		.then(res =>res.json())
		.then((res)=>{
		if(res && res.ret && res.data){
           const action=changeDetail(res.data)
           dispatch(action)
		  }
		})
      }
}
