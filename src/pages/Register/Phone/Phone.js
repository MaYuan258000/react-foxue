import React,{Component} from 'react';
import TopComponent2 from '../../../components/TopComponent2'
import '../../../styles/Set.css';
import Button from '../../../components/Button'

class Phone extends Component{
	yan(){
		this.props.history.push('/Verification')
	}
	render(){
		return(
			<div className='wrapper ii'>
			  <div><TopComponent2 title="手机号" history={this.props.history}/></div>
			  <div className="mima11">
			 <div className="tu">
			  </div>
			  <input type="password"  onChange={(e)=>this.pawdEvent(e)} placeholder="手机号码"/>
			
			</div>
			<div className="yan"><button onClick={()=>this.yan()} className="niuu">提交</button>
			  <p>注册即表示您同意 《那种教育服务协议》</p>
			</div>
			<div className="xianhe">
			<div className="xianhe-left">
			<div className="xian-1"></div>
			</div>
			<div className="xianhe-middle"><p>OR</p></div>
			<div className="xianhe-right">
			<div className="xian-2"></div>
			</div>
			</div>
			<div className="bx">
			<div className="bx-1">
			<img src={require('../../../images/phone_03.jpg')} className="qq"/>
			</div>
			<div className="bx-2">
			<img src={require('../../../images/phone_05.jpg')} className="qq1"/>
			</div>
			<div className="bx-3">
			<img src={require('../../../images/phone_07.jpg')} className="qq1"/>
			</div>
			</div>
			</div>
		)
	}
}
export default Phone
