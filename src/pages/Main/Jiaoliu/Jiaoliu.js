import React, {
	Component
} from 'react'
import '../../../styles/Set.css';

var isShow = 0;
class Jiaoliu extends Component {
	componentDidMount() {

	}
	constructor(props) {
		super(props);
		this.state = {
			isShow: true
		}

	}
	tiao(isShow) {
		this.setState({
			isShow
		})

	}
	render() {

		return(
			<div className="wrapper ii autoBox">
             <div className="daohang">
             <div className="daohang-top">
             <img src={require('../../../images/sddw_01.jpg')} className="mm"/>
             </div>
             <div className="daohang-bottom">
             
             <div className="left-1">
             <p onClick={()=>this.tiao(true)}>公司动态</p>
             </div>
             
             <div className="left-2">
             <p onClick={()=>this.tiao(false)}>最新动态</p>
             <img src={require('../../../images/icon/xiang_03.jpg')} className="imde"/>
              </div>
             </div>
             </div>
             
			 <div className="ju">
			 {this.state.isShow?<div className="ju-1">
			 <img src={require('../../../images/dongtai_03.jpg')}/>
			 </div>:<div className="xiang2">
		      <div className="xiang-2">
		     <img src={require('../../../images/dong_03.jpg')} className="imgggg"/>
			 <span>react_故事才刚刚开始</span>
			 <p>18小时前</p>
		      </div>
		     <div className='xiang-bottom'>
			 <p className="pk">学习完react课程.这是我感受,大家有什么要说的.欢</p>
			 <p className="pk12">迎大家指导.</p>
			 </div>
			 <div className="pl">
			 <div className="pl-1">
			 <img src={require('../../../images/sddw_37.jpg')}/>
			 </div>
			 <div className="pl-2">
			 <img src={require('../../../images/oude_03.jpg')}/>
			 </div>
			 </div>
			  <div className="xiang-3">
		     <img src={require('../../../images/dong_03.jpg')} className="imgggg"/>
			 <span>react_故事才刚刚开始</span>
			 <p>18小时前</p>
		      </div>
		     <div className='xiang-bottom'>
			 <p className="pk">学习完react课程.这是我感受,大家有什么要说的.欢</p>
			 <p className="pk12">迎大家指导.</p>
			 </div>
			 <div className="pl">
			 <div className="pl-1">
			 <img src={require('../../../images/wwewew_03.jpg')}/>
			 </div>
			 <div className="pl-2">
			 <img src={require('../../../images/oude_03.jpg')}/>
			 </div>
			 </div>
			 </div>
			 
			 }
			 
			 
			 </div>
			</div>
		)
	}
}
export default Jiaoliu