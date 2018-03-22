import React,{Component} from 'react'
import TopComponent1 from '../../../../components/TopComponent1'
import '../../../../styles/Balance.css';
import Button from '../../../../components/Button'
class Balance extends Component{
	    goPage(path){
    	this.props.history.push(path)
    }
	render(){
		return(
			<div className="wrapper flex-box flex-col">
			<div className="de">
			  <TopComponent1 title="我的余额" history={this.props.history}/>
			  <div className="conter">
			   <img src={require('../../../../images/yue_03.jpg')} className="zuan"/>
			   <p className="center center1">我的余额</p>
			   <h2 className="center">￥190.00</h2>
			  </div>
			      <div className="butzuhe">
			      <Button title="充值" history={this.props.history} goPage={()=>this.goPage('/recharge')}/>
			      <br/>
			       <button className="buttt1">提现</button>
			      </div>
			</div>
			</div>
		)
	}
}
export default Balance