import * as actionTypes from './actionTypes'
export const getList=(data)=>({
	type:actionTypes.GETLIST,
	value:data
})
export const getUrl=(data)=>({
  type:actionTypes.GETURL,
  value:data
})
export const changeList=(id)=>{
	 return (dispatch)=>{
        fetch('/api/list.json?id='+id)
       .then(res=>res.json())
       .then((res)=>{
       	if(res && res.ret && res.data){
         const action =getList(res.data.list)
    	   dispatch(action)
         const action1=getUrl(res.data.imgUrl)
         dispatch(action1)
       	}
       })
	 }
}