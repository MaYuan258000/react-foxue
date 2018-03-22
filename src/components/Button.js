import React,{Component} from 'react';
import '../styles/Balance.css';
class Button extends Component{
	  go(){
   	this.props.goPage()
   }
	render(){
		return(
			<div>
			 <button className="buttt" onClick={()=>this.go()}>{this.props.title}</button>
			</div>
		)
	}
}
export default Button