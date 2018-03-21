import React,{Component} from 'react';
import '../../../styles/Username.css';
import '../../../styles/Homee.css';
import '../../../styles/App.css';
import Mytop from '../../../components/Mytop'
class Username extends Component{
		componentDidMount(){
		
	}
	go(){
			this.props.history.push('/gerenziliao')
		}
	render(){
		return(
			
			<div className="wrapper flex-box flex-col">
            <Mytop/>
			<div className="top-11">
			<div className="top-2">
			
			  <img src={require('../../../images/wewe_03.jpg')} className="imgg2"/>
			  <h3 className="hh">Rush.蝴蝶</h3>
			  <button className="but">注册会员</button>
			</div>
			</div>
			  
			   <div className="nei">
			   <div className="nei-1">
			   <div className="nei-2">
			   <h4 className="ht" onClick={()=>this.go()}>个人资料</h4>
			   <span className="htt">></span>
			   </div>
			   <div className="nei-3">
			   <h4 className="ht">我的收藏</h4>
			   <span className="htt">></span>
			   </div>
			   </div>
			   </div>
			     <div className="nei">
			   <div className="nei-1">
			   <div className="nei-2">
			   <h4 className="ht">我的余额</h4>
			   <span className="htt">></span>
			   </div>
			   <div className="nei-3">
			   <h4 className="ht">我的订单</h4>
			   <span className="htt">></span>
			   </div>
			   </div>
			   </div>
			    <div className="nei">
			   <div className="nei-11">
			   <div className="nei-2">
			   <h4 className="ht">设置</h4>
			   <span className="htt">></span>
			   </div>
			   </div>
			   </div>
			    <div className="nei">
			   <div className="nei-1">
			   <div className="nei-2">
			   <h4 className="ht">意见反馈</h4>
			   <span className="htt">></span>
			   </div>
			   <div className="nei-3">
			   <h4 className="ht">评价</h4>
			   <span className="htt">></span>
			   </div>
			   </div>
			   </div>
			</div>
		)
	}
}
export default Username
