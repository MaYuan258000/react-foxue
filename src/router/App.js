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
import createHistory from 'history/createBrowserHistory'
const history=createHistory()
export default class App extends Component{

		render(){
		return(
			<Router>
			<div className="wrapper">

			<Route exact path='/' component={Hello}/>
			<Route path='/login' component={Login}/>
			<Route path='/register' component={Register}/>
			<Route path='/main' component={Main}/>
			</div>
			</Router>

		)
	}
}
