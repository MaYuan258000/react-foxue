import React,{Component} from 'react'
import Mytop from '../../../../components/Mytop'
import '../../../../styles/Username.css';
import '../../../../styles/Gerenziliao.css';
class Gerenziliao extends Component{
		componentDidMount(){
	
	}
		back(){
			this.props.history.go(-1)
		}
	render(){
		return(
			<div className="wrapper flex-box flex-col">
			<Mytop title="个人资料"/>
			<div className="top-11">
			<div className="top-2">
			  <img src={require('../../../../images/ddddd_03.jpg')} className="imgg8" onClick={()=>this.back()}/>
			  <span className='bao1'>保存</span>
			  <img src={require('../../../../images/wewe_03.jpg')} className="imgg7"/>
			</div>
			</div>
			<div className="neii">
			<div className="neii-1">昵称: 小李子</div>
			<div className="neii-1">性别: 女</div>
			<div className="neii-2">介绍: 人美事少出图快</div>
			</div>
	</div>
		)
	}
}
export default Gerenziliao
