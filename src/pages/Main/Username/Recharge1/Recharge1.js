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
			  <TopComponent title="会员充值" history={this.props.history}/>
			  </div>
			  <div className="shang">
			   <h3>商城付款</h3>
			   <p>￥100 <select>
			            
			    </select></p>
			  </div>
			  <div className="zhifubao">
			  <div className="zhifubao-left">
			  <img src={require('../../../../images/wer_03.jpg')} className="zhifu"/>
			  </div>
			  <div className="zhifubao-middle">
			  <p className="ppp">支付宝支付</p>
			   <p className="ppp1">推荐支付宝登录使用</p>
			  </div>
			  <div className="zhifubao-right">
			  <img src={require('../../../../images/dsdw_03.jpg')} className="zhifu1"/>
			  </div>
			  </div>
			  <div className="tui"><Button title="退出" history={this.props.history} goPage={()=>this.goPage('/recharge')}/></div>
			</div>
		)
	}
}

export default Recharge