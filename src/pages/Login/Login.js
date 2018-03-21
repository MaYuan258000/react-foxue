import React,{Component} from 'react';
import LoginTop from '../../components/LoginTop'
export default class Login extends Component{
	//构造函数constructor，在react中的使用，唯一的作用 :this.state
	//super
	constructor(props){
		super(props);//继承的关键字语法。
		this.state={
			userName:'',
			passWord:''
		}
	}
	changeEvent(e){
		console.log(e.target.value);
		var userName=e.target.value;
		this.setState({
			userName
		})
	}
	pawdEvent(e){
	    var passWord=e.target.value;
		this.setState({
			passWord
		})
	}
	loginEvent(){
		var userInfo={
			userName:this.state.userName,
			passWord:this.state.passWord
		}
		window.localStorage.setItem('userInfo',userInfo);
		this.props.history.push('/main')
	}
	render(){
		return(
		 <div className='wrapper'>
			<LoginTop/>
			<div className="da">
			<div className="shouji">
			  <div className="tu">
			  <img src={require('../../images/icon/dwdw_03.jpg')}/>
			  <span className="bianhao">+86</span>
			  <div className="xian"></div>
			  </div>
			  <input type="text" onChange={(e)=>this.changeEvent(e)} placeholder="手机号"/>
			
			</div>
			<div className="mima">
			 <div className="tu">
			  <img src={require('../../images/icon/dwdw_07.jpg')}/>
			  </div>
			  <input type="password"  onChange={(e)=>this.pawdEvent(e)} placeholder="密码"/>
			
			</div>
			</div>
	         <div className="an">
			  <button onClick={()=>this.loginEvent()} className="login">登录</button>
			  <div className="zhu">
			   <p>注册</p>
			   <span>忘记密码?</span>
			  </div>
			
			</div>
			</div>
		)
	}
}
