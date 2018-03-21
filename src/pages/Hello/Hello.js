import React,{Component} from 'react';
export default class Hello extends Component{
	//周期函数
		componentDidMount(){
			var userInfo=localStorage.getItem('userInfo')

			if(userInfo){
				this.props.history.replace('/login')
			}else{
				this.props.history.replace('/main')
			}
		
	}
	render(){
		return(
		 <div className='wrapper'>
			<h1>闹哪样.</h1>
			</div>
		)
	}
}
