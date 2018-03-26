import React,{Component} from 'react'
import TopComponent from '../../../../components/TopComponent'
import '../../../../styles/Set.css';
import Button from '../../../../components/Button'
class Chongzhi extends Component{
	render(){
		return(
			<div className="wrapper flex-box flex-col">
			 <div><TopComponent title="充值" history={this.props.history}/></div>
			 <div className="zhi">
			 <div className="zhi-top">
			 <p className="po">充值金额:<span className="span-1">100</span>元</p>
			 </div>
			 <div className="zhi-bottom">
			 <p className="po">账户余额:<span className="span-1">0.00</span>元</p>
			 </div>
			 </div>
			 <div className="que"><Button title="确认"/></div>
			</div>
		)
	}
}
export default Chongzhi
