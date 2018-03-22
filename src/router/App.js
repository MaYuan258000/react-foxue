import React,{Component} from 'react'
import {
	BrowserRouter as
	Router,
	Route,
} from 'react-router-dom'
import Hello from '../pages/Hello/Hello'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Main from '../pages/Main/Main'
import Gerenziliao from '../pages/Main/Username/Gerenziliao/Gerenziliao'
import Shoucang from '../pages/Main/Username/Shoucang/Shoucang'
import Balance from '../pages/Main/Username/Balance/Balance'
import Balancemingxi from '../pages/Main/Username/Balancemingxi/Balancemingxi'
import Set from '../pages/Main/Username/Set/Set'
import Recharge from '../pages/Main/Username/Recharge/Recharge'
import Recharge1 from '../pages/Main/Username/Recharge1/Recharge1'
export default class App extends Component{

		render(){
		return(
			<Router>
			<div className="wrapper">

			<Route exact path='/' component={Hello}/>
			<Route path='/login' component={Login}/>
			<Route path='/register' component={Register}/>
			<Route path='/main' component={Main}/>
			<Route path='/gerenziliao' component={Gerenziliao}/>
			<Route path='/shoucang' component={Shoucang}/>
			<Route path='/balance' component={Balance}/>
			<Route path='/balancemingxi' component={Balancemingxi}/>
			<Route path='/set' component={Set}/>
			<Route path='/recharge' component={Recharge}/>
			<Route path='/recharge1' component={Recharge1}/>
			</div>
			</Router>

		)
	}
}
