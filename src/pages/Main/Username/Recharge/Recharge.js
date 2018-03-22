import React,{Component} from 'react'
import TopComponent from '../../../../components/TopComponent'
import Button from '../../../../components/Button'
import '../../../../styles/Set.css';
class Recharge extends Component{
		    goPage(path){
    	this.props.history.push(path)
    }
	render(){
		return(
			<div>
			  <div>
			  <TopComponent title="会员充值" history={this.props.history} />
			  </div>
			   <div className="chong">
			   <img src={require('../../../../images/bao_03.jpg')} className="bao"/>
			   <p>正在尝试打开支付宝客户端</p>
			   </div>
			   <div><Button title="继续支付" history={this.props.history} goPage={()=>this.goPage('/recharge1')}/></div>
			   <div className="nn"><Button title="已完成付款"/></div>
			</div>
		)
	}
}

export default Recharge