import React,{Component} from 'react'
import TopComponent from '../../../../components/TopComponent'
import '../../../../styles/Balance.css';
class Balancemingxi extends Component{
	constructor(props){
		super(props);
		this.state={
			arrr:[
			 {title:"购买会员",title1:"2018-3-21 17:30:31",price:"30.00"},
			 {title:"充值",title1:"2018-3-22 17:45:31",price:"10.00"},
			 {title:"红包",title1:"2018-3-23 17:58:31",price:"60.00"},
			 {title:"二维码付款",title1:"2018-3-24 18:30:31",price:"30.00"},
			 {title:"转账",title1:"2018-3-25 18:35:31",price:"30.00"},
			 {title:"购买会员",title1:"2018-3-26 19:30:31",price:"100.00"},
			 {title:"退款",title1:"2018-3-27 20:30:31",price:"10.00"},
			 {title:"充值",title1:"2018-3-28 21:30:31",price:"30.00"},
			 {title:"转账",title1:"2018-3-29 22:30:31",price:"45.00"}
			]
		}
	}
	render(){
		return(
			<div className="wrapper flex-box flex-col">
			<div><TopComponent title="余额明细" history={this.props.history}/></div>
			<div className="list">
			{this.state.arrr.map((item,index)=>{
			return<div className="list-nei" key={index}>
			 <div className="list-left">
			 <h4>{item.title}</h4>
			 <p>{item.title1}</p>
			 </div>
			 <div className="list-right">
			 <p>-{item.price}</p>
			 </div>
			</div>
			})}

			</div>
			</div>
		)
	}
}

export default Balancemingxi