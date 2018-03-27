import {connect} from 'react-redux'
import Header from './component'
import * as actionCreator from './store/actionCreator'
const mapStateToProps=(state)=>({
    list:state.header.list,
    listulN:state.header.listulN,
    listulS:state.header.listulS,
    listulT:state.header.listulT,
    showModel:state.header.showModel,
    isLogin:state.header.isLogin
})
const mapDispatchToProps=(dispatch)=>({
     openModel(){
     	const action=actionCreator.openModel()
     	dispatch(action)
     },
     hideModel(){
     	const action=actionCreator.hideModel()
     	dispatch(action)
     },
     logout(){
     	const action=actionCreator.logout()
     	dispatch(action)
     },
     getList(){
        const action=actionCreator.getList()
        dispatch(action)
     },
     checkLogin(user,pass){
        const action=actionCreator.checkLogin(user,pass)
        dispatch(action)
     }
     
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)