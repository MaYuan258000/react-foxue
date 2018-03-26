import React,{Component} from 'react'
import '../../../styles/Set.css';
class Jiaoliu extends Component{
		componentDidMount(){
	
	}
	render(){
		return(
			<div className="wrapper">
             <div className="daohang">
             <div className="daohang-top">
             <img src={require('../../../images/sddw_01.jpg')} className="mm"/>
             </div>
             <div className="daohang-bottom">
             <div className="left-1">
             <p>公司动态</p>
             </div>
             <div className="left-2"></div>
             </div>
             </div>
			
			</div>
		)
	}
}
export default Jiaoliu
