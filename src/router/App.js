import React,{Component} from 'react'
import {
	
	Router,
	Route,
} from 'react-router-dom'
import Hello from '../pages/Hello/Hello'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Main from '../pages/Main/Main'
import Gerenziliao from '../pages/Main/Username/Gerenziliao/Gerenziliao'
import createHistory from 'history/createBrowserHistory'
const history=createHistory()
export default class App extends Component{

		render(){
		return(
			<Router history={history}>
			<div className="wrapper">

			<Route exact path='/' component={Hello}/>
			<Route path='/login' component={Login}/>
			<Route path='/register' component={Register}/>
			<Route path='/main' component={Main}/>
			<Route path="/gerenziliao" component={Gerenziliao}/>
			</div>
			</Router>

		)
	}
}
