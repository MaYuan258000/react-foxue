import React, {
	Component
} from 'react'
import '../../../styles/Set.css';
import { Tabs, Select } from 'antd';
var isShow = 0;
	const TabPane = Tabs.TabPane;
class Jiaoliu extends Component {
	  state = {
    tabPosition: 'top',
  }
  changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition });
  }
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
			 <div className="daohang-top">
             <img src={require('../../../images/sddw_01.jpg')} className="mm"/>
             </div>
           <div className="daohang-bottom">
          <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="公司动态" key="1">
           <div className="ju">
           <div className="ju-1">
			 <img src={require('../../../images/dongtai_03.jpg')}/>
			 </div>
           </div>
          </TabPane>
          <TabPane tab="最新动态" key="2">
          <div className="xiang2">
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
          </TabPane>
         </Tabs>
            
            </div>
			</div>
		)
	}
}
export default Jiaoliu