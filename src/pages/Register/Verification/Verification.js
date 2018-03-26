import React,{Component} from 'react';
import TopComponent from '../../../components/TopComponent'
import '../../../styles/Set.css';
import Button from '../../../components/Button'

class Verification extends Component{
	render(){
		return(
			<div className="wrapper ii">
			<div><TopComponent title="验证码" history={this.props.history}/></div>
			<div className="ma">
			<p>已发送验证码到: 137 1780 09799</p>
			<input type="text" placeholder="请输入验证码"/>
			<p className="po1"><span>60s</span>后重新获取验证码</p>
			</div>
			 <div><Button title="提交"/></div>
			</div>
		)
	}
}

export default Verification