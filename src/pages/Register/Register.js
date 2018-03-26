import React,{Component} from 'react';
import TopComponent from '../../components/TopComponent'
import '../../styles/Set.css';
import Button from '../../components/Button'

export default class Register extends Component{
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
		this.props.history.push('/login')
	}
    od(){
    	this.props.history.go(-1)
    }
	render(){
		return(
		 <div className='wrapper'>
			<TopComponent title="注册" history={this.props.history}/>
			<div className="da1">
			<div className="shouji1">
	
			  <input type="text" onChange={(e)=>this.changeEvent(e)} placeholder="请输入用户名"/>
			   <p>用户名需为4-20个字符(包括文字,数字,字母)</p>
			</div>
			<div className="mima1">
			 <div className="tu">
			  </div>
			  <input type="password"  onChange={(e)=>this.pawdEvent(e)} placeholder="请输入密码，不少于6位"/>
			
			</div>
			</div>
			<div className="que">
			<button onClick={()=>this.od()} className="niuu">提交</button>
			</div>
			</div>
		)
	}
}
