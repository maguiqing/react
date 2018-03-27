import React,{Component} from 'react'
import { Row, Col, Menu, Icon,Button,Modal,Form,Input} from 'antd';
import {Link} from 'react-router-dom'
import styles from'./style.mcss'
const FormItem=Form.Item;
 class Header extends Component{
 	/*shouldComponentUpdate(nextProps){
       if(nextProps.list.length !== this.props.list.length){
           return true
       }else if(nextProps.isLogin !== this.props.isLogin){
       	   return true
       }else if(nextProps.showModel !== this.props.showModel){
       	return true
       }else{
       	return false
       }
 	}*/
	render(){
		const { getFieldDecorator } = this.props.form;
		const logo=require('../../assets/imgs/logo.png');
        const menuItems=this.props.list.map((item,index)=>{
        	 return (
        	 	   <Menu.Item key={item.id} className={styles.items}
        	 	    >
                      <Link to={'/list/'+item.id}><Icon type="appstore" />
                      {item.title}</Link>
                   </Menu.Item>
        	 	)
        })
        const ulItems=this.props.listulN.map((item,index)=>{
        	 return (
        	 	   <li key={item.id} >
                      {item.title}
                   </li>
        	 	)
        })
        const ulItemslow=this.props.listulS.map((item,index)=>{
        	 return (
        	 	   <li key={item.id} >
                      {item.title}
                   </li>
        	 	)
        })
        const ulItemtea=this.props.listulT.map((item,index)=>{
        	 return (
        	 	   <li key={item.id} >
                      {item.title}
                   </li>
        	 	)
        })
        let button=null
        if(this.props.isLogin){
        	button = <Button 
      		type="primary" 
      		style={{marginTop: '20px'}}
      		onClick={this.props.logout}
	       >退出</Button>

        }else{
          button = <Button 
      		type="primary" 
      		style={{marginTop: '20px'}}
      		onClick={this.props.openModel}
	       >登陆</Button>
        }
    return (
		<div>	
		    <Row>
		      <Col span={4}>
		          <img alt="logo" src={logo}
		          className={styles.logo}
		          onClick={this.handleClick.bind(this)}/>	
		      </Col>
		      <Col span={18}>
		          <Menu  mode="horizontal">
		               {menuItems}
		          </Menu>
		      </Col>
		      <Col span={2}>
		          {button}
		      </Col>
	        </Row>
	        <Row className={styles.Rstyle}>
		      <Col span={4} className={styles.Cstyle}>
		           <h2>常速英语</h2>
		           <ul className={styles.sameEnglish+" "+styles.normalEnglish}>
		           
		               {ulItems}
		           </ul>
		      </Col>
		      <Col span={10} className={styles.Cstyle}>
		      		<h2>慢速英语（中级）</h2>
		      		<ul className={styles.sameEnglish+" "+styles.slowEnglish}
		      		
		      		>
		               {ulItemslow}
		           </ul>
		      </Col>
		      <Col span={10} className={styles.Cstyle+" "+styles.Bor0}
		      >
		          <h2>英语教学（初级）</h2>
		          <ul className={styles.sameEnglish+" "+styles.teacherEnglish}
		          >
		               {ulItemtea}
		               
		           </ul>
		      </Col>
            </Row>
			<Modal
		          title="登陆"
		          visible={this.props.showModel}
		          onOk={this.handleSubmit.bind(this)}
		          onCancel={this.props.hideModel}
		          cancelText="取消"
		          okText="登陆"
		          
		        >
		        <Form onSubmit={this.handleSubmit} className="login-form">
			        <FormItem>
			          {getFieldDecorator('user', {
			            rules: [{ required: true, message: '请填写用户名' }],
			          })(
			            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
			          )}
			        </FormItem>
			        <FormItem>
			          {getFieldDecorator('password', {
			            rules: [{ required: true, message: '请填写密码' }],
			          })(
			            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
			          )}
			        </FormItem>
	      		</Form>
			     
			</Modal>
		 </div>
		)
	}
	componentDidMount(){
		this.props.getList()
		
	}
	handleClick(){
        this.props.history.replace('/')
     }
     handleSubmit(){
     	this.props.form.validateFields((err, values) => {
	      if (!err) {
	      	this.props.checkLogin(values.user,values.password)
	      	
	       }
	    })
     }
    
     	
     
}
export default Form.create()(Header)
