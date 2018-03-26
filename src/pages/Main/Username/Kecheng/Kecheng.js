import React,{Component} from 'react'
import TopComponent4 from '../../../../components/TopComponent4'
import '../../../../styles/Balance.css';
import '../../../../styles/Set.css';

class Kecheng extends Component{
	
	render(){
		return(
			<div className='wrapper'>
			<div><TopComponent4 title="课程详情" history={this.props.history}/></div>
			<div className="bofang">
            <video src={require('../../../../images/9947380_MP4.mp4')} controls="controls" width="100%">
			</video>

			</div>
			<div className="one">
			<div className="one-left">
			<h4>适用人群</h4>
			<p>零基础小白学基础,这门课就够了</p>
			</div>
			<div className="one-middle">
			<img src={require('../../../../images/xingxing_03.jpg')} className="xing1"/>
			<span className="sp">4.1</span>
			<span className="sp1">10143人学过</span>
			<img src={require('../../../../images/xiang_09.jpg')} className="xing"/>
			</div>
			<div className="one-right">
			<p>￥398.00</p>
			</div>
			</div>
			<div className="jianjie">
			<div className="jianjie-top">
			<h3>课程简介</h3>
			</div>
			<div className="jianjie-middle">
			<p>简言之:<br/>
			1.就是你可以自主安排时间学习教学       
		    视频;但需要注意在规划的学习周期内完成作业,参加考试</p>
			</div>
			<div className="jianjie-bottom">
		   <p>
			2.课程是不是可以一直看?<br/>
			产品经理(网易),前端开发,Java开发(web方向),UI<br/>
			2018年3月26日-3月27,20周年重磅回馈
			</p>
			
			</div>
			</div>
			  
			  <div className="footer">
			  <div className="footer-left">
			  <button>收藏</button>
			  </div>
			  <div className="footer-right">
			  <button>立即播放</button>
			  </div>
			  </div>
			</div>
		)
	}
}
export default Kecheng

