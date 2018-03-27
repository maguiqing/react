import * as actionCreator from './store/actionCreator'
import {connect} from 'react-redux'
import List from './component'
const mapStateToProps=(state)=>({
	rows:state.list.rows,
	imgUrl:state.list.imgUrl
})
const mapDispatchToProps=(dispatch)=>({
    changeList(id){
    	const action =actionCreator.changeList(id)
    	dispatch(action)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(List)