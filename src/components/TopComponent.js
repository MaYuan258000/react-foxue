import React,{Component} from 'react';
import '../styles/Username.css';
import '../styles/Login.css';
class TopComponent extends Component{
		componentDidMount(){
	
	}
	back1(){
		console.log(111)
			this.props.history.goBack()
		}
	render(){
		return(
		<div className="top wrapper ddd">
			<img src={require('../images/sdsdsd_01.jpg')} className="imgg"/>
			<div className="top111">
			<img src={require('../images/icon/dswwd1_03.jpg')} className="du" onClick={()=>this.back1()}/>
			<span className="biao center">{this.props.title}</span>
			</div>
			</div>
		)
	}
}
export default TopComponent
