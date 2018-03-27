import React,{Component} from 'react'
import styles from './style.mcss'
export default class List extends Component{
	render(){
		const rowsItem=this.props.rows.map((item,index)=>{
			 return(
               <li key={item.id}><a>{item.title}</a></li>
               )
		})
		const imgsItem=this.props.imgUrl.map((item,index)=>{
			 return(
                 <img src={item.url} alt="图片"
				    className={styles.bottomImg}
				    key={item.id}/>
               )
		})
		return(
			<div className={styles.box}>
				<div className={styles.listLeft}>
				    <img src="http://www.easyvoa.com/templets/images/studioclassroom/lt_title.png" alt="图片"
				    className={styles.topImg}/>
				  	{imgsItem}
				    <h2>往期试听：</h2>
				    <ul>
				      {rowsItem}
				    </ul>
				</div>
				<div className={styles.listRight}>
				   <p style={{color:'green'}}>杂志展示：</p>
				   <div className={styles.center}>
				       <img src="http://www.easyvoa.com/templets/images/studioclassroom/lt_mag.png" alt="图片"/>
				   </div>
				   <p style={{color:'green'}}>视频展示：</p>
				   <p className={styles.sameStyle}>《大家说英语》（Let's Talk in English）为”空中英语教室“系列的“初级版杂志”,多年获得“亚洲最佳英语教学奖”</p>
				   <p className={styles.sameStyle}>杂志每月一刊，每日为一个学习单元，对应一篇课文和一个MP3.</p>
				   <p className={styles.sameStyle}>《大家说英语》适合于初级的英文学习者，对口语和听力阅读的提高有非常好的帮助。.</p>
				   <p className={styles.specialStyle}>《大家说英语》的所有内容，全部由外教讲解，超级地道！</p>

				</div>
			</div>
			)
	}
	componentDidMount(){
		this.getListInfo(this.props.match.params.id)
	}
	getListInfo(id){
	   this.props.changeList(id)
       
	}
}