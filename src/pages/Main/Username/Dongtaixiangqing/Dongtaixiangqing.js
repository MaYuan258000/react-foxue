import React,{Component} from 'react'
import TopComponent from '../../../../components/TopComponent'
import '../../../../styles/Balance.css';
import '../../../../styles/Set.css';

class Dongtaixiangqing extends Component{
	render(){
		return(
			<div className="wrapper ii">
			<div><TopComponent title="动态详情" history={this.props.history}/></div>
			<div className="xiang">
			 <div className='xiang-top'>
			 <img src={require('../../../../images/dong_03.jpg')} className="imgggg"/>
			 <h5>react_故事才刚刚开始</h5>
			 <p>18小时前</p>
			 </div>
			 <div className='xiang-bottom'>
			 <p className="pk">学习完react课程.这是我感受,大家有什么要说的.欢</p>
			 <p className="pk1">迎大家指导.</p>
			 </div>
			</div>
			<div className="boxxx">
			<div className="boxxx-top">
			<img src={require('../../../../images/dong_07.jpg')} className="urle"/>
			</div>
			<div className="boxxx-bottom">
			<img src={require('../../../../images/dong_10.jpg')} className="urle"/>
			</div>
			</div>
			<div className="iconn">
			<img src={require('../../../../images/dong_13.jpg')} className="urlee"/>
			</div>
			</div>
		)
	}
}
export default Dongtaixiangqing
