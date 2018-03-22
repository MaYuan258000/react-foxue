import React,{Component} from 'react';
import '../styles/Username.css';
import '../styles/Login.css';
class LoginTop extends Component{
		componentDidMount(){
	
	}
	render(){
		return(
		<div className="top wrapper">
			<img src={require('../images/sdsdsd_01.jpg')} className="imgg"/>
			<div className="top11">
			<span className="biao1 center">登录</span>
			</div>
			</div>
		)
	}
}
export default LoginTop
