import React,{Component} from 'react'
import TopComponent from '../../../../components/TopComponent'
import Button from '../../../../components/Button'
import '../../../../styles/Balance.css';
import '../../../../styles/Set.css';
import price from '../../../../images/fffff_03.jpg';
import price1 from '../../../../images/fffff_08.jpg';
import price2 from '../../../../images/fffff_06.jpg';
import price3 from '../../../../images/icon/you.png';
import { Slider, Switch } from 'antd';
class Balancemingxi extends Component{
	constructor(props){
		super(props);
		this.state={
			arrr:[
			 {title:"视频下载清晰度",price1:"流畅|高清"},
			 {title:"视频自动连续播放",price:price},
			 {title:"允许使用2G/3G/4G网络观看视频",price:price1},
			 {title:"允许使用2G/3G/4G网络观看下载",price:price2},
			 {title:"清楚缓存",price1:"65M"},
			 {title:"关于",price:price3},
			]
		}
	}
    goPage(path){
    	this.props.history.push(path)
    }
	render(){
		return(
			<div className="wrapper flex-box flex-col">
			<div><TopComponent title="设置" history={this.props.history}/></div>
			<div className="Set">
			{this.state.arrr.map((item,index)=>{
			return<div className="list-nei" key={index}>
			 <div className="list-left">
			 <h4 className="h4">{item.title}</h4>
			 </div>
			 <div className="list-right">
		
			 <Switch size="small" onChange={this.handleDisabledChange} className="ooooood" />
			 </div>
			</div>
			})}

			</div>
			<div><Button title="退出" history={this.props.history} goPage={()=>this.goPage('/gerenziliao')}/></div>
			</div>
		)
	}
}

export default Balancemingxi