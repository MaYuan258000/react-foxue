import React, {
	Component
} from 'react';

import {
	Router,
	Route,
	NavLink,
	Switch,
	Redirect
} from 'react-router-dom'
import Home from './Home/Home'
import Fenlei from './Fenlei/Fenlei'
import Jiaoliu from './Jiaoliu/Jiaoliu'
import Username from './Username/Username'
import Gerenziliao from './Username/Gerenziliao/Gerenziliao'
import createHistory from 'history/createBrowserHistory'
const history=createHistory()
const styles = {
    nav: {
        height: '70px'
    },
    activeStyle:{
        color: '#fa474a'
    },
    icon:{
        width: '30px',
        height: '30px'
    }
};

class MyLink extends Component{
    render(){
        var shouye = require('../../images/icon/shouye.png');
        var shouye1 = require('../../images/icon/shouye1.png');
        var fenlei = require('../../images/icon/fenlei.png');
        var fenlei1 = require('../../images/icon/fenlei1.png');
        var message = require('../../images/icon/message.png');
        var message1 = require('../../images/icon/message1.png');
        var username = require('../../images/icon/username.png');
        var username1 = require('../../images/icon/username1.png');

        var show,activeShow;
        switch (this.props.label){
            case '首页':
                (activeShow = shouye) && (show = shouye1)
                break;
            case "分类":
                (activeShow = fenlei) && (show = fenlei1)
                break;
            case "交流":
                (activeShow = message) && (show = message1)
                break;
            case "我的":
                (activeShow = username) && (show = username1)
                break;
            default:
                (activeShow = shouye) && (show = shouye1)
        }



        return (
            <Route to={this.props.to} children={(props)=>{
                console.log(props.location.pathname);
                return (
                    <NavLink activeStyle={styles.activeStyle} className='flex1 center flex-box flex-col' to={this.props.to}>
                        {
                            (props.location.pathname == this.props.to) ?
                                <img style={styles.icon} src={activeShow} alt='首页' />:
                                <img style={styles.icon} src={show} alt='首页' />
                        }
                        {this.props.label}

                    </NavLink>
                )
            }} />
        )
    }
}

export default class Main extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Router history={this.props.history}>
                    <div className='wrapper flex-box flex-col'>
                        <div className='flex1 autoBox'>
                            <Switch>
                                <Route path='/main/home' component={Home}/>
                                <Route path='/main/fenlei' component={Fenlei}/>
                                <Route path='/main/jiaoliu' component={Jiaoliu}/>
                                <Route path='/main/username' component={Username}/>
                                <Redirect from='/main' to="/main/home" />
                                <Route path='/main/username/gerenziliao' component={Gerenziliao}/>
                            </Switch>
                              
                        </div>

                        <div style={styles.nav} className='flex-box name'>

                            <MyLink to='/main/home' label='首页' />
                            <MyLink to='/main/fenlei' label='分类'/>
                            <MyLink to='/main/jiaoliu' label='交流'/>
                            <MyLink to='/main/username' label='我的'/>

                            {/*<NavLink activeStyle={styles.activeStyle} className='flex1 center' to='/main/classify'>分类</NavLink>*/}
                            {/*<NavLink activeStyle={styles.activeStyle} className='flex1 center' to='/main/communicate'>交流</NavLink>*/}
                            {/*<NavLink activeStyle={styles.activeStyle} className='flex1 center' to='/main/me'>我的</NavLink>*/}
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}