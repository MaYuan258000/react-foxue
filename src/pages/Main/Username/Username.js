import React,{Component} from 'react';
import '../../../styles/Username.css';
import '../../../styles/Homee.css';
import '../../../styles/App.css';
import Mytop from '../../../components/Mytop'
import NavBar from '../../../components/NavBar'
class Username extends Component{
		componentDidMount(){
		
	}
    goPage(path){
    	this.props.history.push(path)
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
               <div className="he"><NavBar title="个人资料" goPage={()=>this.goPage('/gerenziliao')}/>
               <NavBar title="我的收藏" goPage={()=>this.goPage('/shoucang')}/></div>
               <div className="he"><NavBar title="我的余额" goPage={()=>this.goPage('/balance')}/>
               <NavBar title="我的订单"/></div>
               <NavBar title="设置" goPage={()=>this.goPage('/set')}/>
                <div className="he"><NavBar title="意见反馈" goPage={()=>this.goPage('/chongzhi')}/>
               <NavBar title="评价" goPage={()=>this.goPage('/dynamic')}/></div>
			</div>
		)
	}
}
export default Username
