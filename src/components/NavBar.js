import React,{ Component } from 'react';

const styles={
  navBar:{
  	position:'relative',
    borderBottom:"1px solid #ddd",
  	height:'50px',
  	
  },
  icon:{
  	width:'30px',
  	height:'30px',
  	position:'absolute',
  	right:'10px',
  	top:'50%',
  	transform:'translateY(-50%)'
  },
  alinCenter:{
  	display:'flex',
  	alignItems:'center'
  }
}
export default class NavBar extends Component{
   go(){
   	this.props.goPage()
   }
	render(){
		return(
			<div>
	       <div className='flex-box' style={styles.navBar} onClick={()=>this.go()}>
			  <div className="flex1 oo1" style={styles.alinCenter}>{this.props.title}</div>
			 <img src={require('../images/icon/you.png')} style={styles.icon}/>
			</div>
			</div>
		)
	}
}
