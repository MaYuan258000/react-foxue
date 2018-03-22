import React,{Component} from 'react'
import TopComponent from '../../../../components/TopComponent'
import '../../../../styles/Username.css';
class Shoucang extends Component{
		componentDidMount(){
	
	}
		render(){
			return(
				<div className="wrapper flex-box flex-col ddd">
				<TopComponent title="我的收藏" history={this.props.history}/>
				<div className="Conet">
				<div className="Conet-left">
				<img src={require('../../../../images/sddw_22.jpg')} className="du1"/>
				</div>
				<div className="Conet-right">
				<h5>法语清凉:什么叫修行?</h5>
				<div className="anniu1">
				<button className="but-1">继续观看</button>
				<button className="but-2">取消收藏</button>
				</div>
				</div>
				</div>
				</div>
			)
		}
}
export default Shoucang
