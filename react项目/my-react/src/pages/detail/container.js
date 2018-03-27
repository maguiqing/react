import {connect} from 'react-redux'
import Detail from './component'
import * as actionCreator from './store/actionCreaor'
const mapStateToProps=(state)=>({
	title:state.detail.title,
    date:state.detail.date,
    content:state.detail.content
})
const mapDispatchToProps=(dispatch)=>({
	transDetail(id){
		const action=actionCreator.transDetail(id)
        dispatch(action)
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(Detail)