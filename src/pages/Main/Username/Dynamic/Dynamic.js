import React,{Component} from 'react'
import TopComponent3 from '../../../../components/TopComponent3'
import '../../../../styles/Balance.css';
import '../../../../styles/Set.css';
class Dynamic extends Component{
	
	render(){
		var contenteditable=false
		return(
			<div className='wrapper ii'>
			<TopComponent3 title="发动态" history={this.props.history}/>
			<div>
		    <div contenteditable="true" className="dong">
		    请输入你的学习和工作动态,让大家看到吧!
		    </div>
			</div>
			<div className='tupian'>
			<img src={require('../../../../images/dongtai_03.jpg')}/>
			</div>

			</div>
		)
	}
}
export default Dynamic