import React,{Component} from 'react';
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
			<h1>{this.state.userName}</h1>
			<div>
			  用户名:
			  <input type="text" onChange={(e)=>this.changeEvent(e)}/>
			
			</div>
			<div>
			  密码:
			  <input type="password"  onChange={(e)=>this.pawdEvent(e)}/>
			
			</div>
	         <div>
			  <button onClick={()=>this.loginEvent()}>登录</button>
			
			</div>
			</div>
		)
	}
}
