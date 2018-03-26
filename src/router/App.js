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
import Chongzhi from '../pages/Main/Username/Chongzhi/Chongzhi'
import Phone from '../pages/Register/Phone/Phone'
import Verification from '../pages/Register/Verification/Verification'
import Dynamic from '../pages/Main/Username/Dynamic/Dynamic'
import Dongtaixiangqing from '../pages/Main/Username/Dongtaixiangqing/Dongtaixiangqing'
import Kecheng from '../pages/Main/Username/Kecheng/Kecheng'
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
			<Route path='/chongzhi' component={Chongzhi}/>
			<Route path='/phone' component={Phone}/>
			<Route path='/verification' component={Verification}/>
			<Route path='/dynamic' component={Dynamic}/>
			<Route path='/dongtaixiangqing' component={Dongtaixiangqing}/>
			<Route path='/Kecheng' component={Kecheng}/>
			</div>
			</Router>

		)
	}
}
