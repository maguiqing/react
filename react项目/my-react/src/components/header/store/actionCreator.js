import * as actionTypes from './actionTypes'
export  const changeList=(value)=>({
    type:actionTypes.CHANGE_LIST,
    value:value
})
export  const openModel=()=>({
    type:actionTypes.OPEN_MODEL
})
export  const hideModel=()=>({
    type:actionTypes.HIDE_MODEL
})
export  const login=()=>({
    type:actionTypes.LOGIN
})
export  const logout=()=>({
    type:actionTypes.LOGOUT
})
export  const getListN=(data)=>({
    type:actionTypes.GETLISTN,
    value:data

})
export  const getListS=(data)=>({
    type:actionTypes.GETLISTS,
    value:data

})
export  const getListT=(data)=>({
    type:actionTypes.GETLISTT,
    value:data

})
export  const getList=()=>{
    return (dispatch)=>{
       fetch('/api/header.json')
       .then(res=>res.json())
       .then((res)=>{
		if(res && res.data && res.ret){
			const action=changeList(res.data.list)
     	dispatch(action)
      const action1=getListN(res.data.subList.slice(0,3))
      dispatch(action1)
      const action2=getListS(res.data.subList.slice(3,17))
      dispatch(action2)
      const action3=getListT(res.data.subList.slice(17,30))
      dispatch(action3)
		}
			
	 })
    }
}
/*export const drawList=()=>{
    return (dispatch)=>{
        fetch('/api/nav.json')
      .then(res=>res.json())
      .then((res)=>{
         if(res && res.ret && res.data){
          const action=getListN(res.data.list.slice(0,3))
          dispatch(action)
          const action1=getListS(res.data.list.slice(3,17))
          dispatch(action1)
          const action2=getListT(res.data.list.slice(17,30))
          dispatch(action2)
         }
      })
    }
}*/
export  const checkLogin=(user,pass)=>{
    return (dispatch)=>{
       fetch('/api/login.json?user='+user+'&pass='+pass)
	      	.then(res=>res.json())
	      	.then((res)=>{
	      		if(res && res.ret && res.data){
	      			const action=login()
     	            dispatch(action)
	      		}
	      		
	      	})
    }
}