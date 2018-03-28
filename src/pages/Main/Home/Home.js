import React,{Component} from 'react';
import '../../../styles/Homee.css';
import '../../../styles/App.css';
import imgObj from '../../../images/sddw_13.jpg'
import imgObj1 from '../../../images/sddw_10.jpg'
import imgObj2 from '../../../images/sddw_22.jpg'
import imgObj3 from '../../../images/sddw_25.jpg'
import imgObj4 from '../../../images/sddw_28.jpg'
import imgObj5 from '../../../images/sddw_35.jpg'
import imgObj6 from '../../../images/sddw_37.jpg'
import imgObj7 from '../../../images/sddw_42.jpg'
import imgObj8 from '../../../images/sddw_44.jpg'
import imgObj9 from '../../../images/sddw_53.jpg'
import imgObj10 from '../../../images/sddw_55.jpg'
import imgObj11 from '../../../images/sddw_57.jpg'
import { Carousel } from 'antd';
import { Rate } from 'antd';
import { Card } from 'antd';
function onChange(a, b) {
  console.log(a, b);
}
const tabList = [{
  key: 'tab1',
  tab: 'tab1',
}, {
  key: 'tab2',
  tab: 'tab2',
}];

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

class Home extends Component{
		componentDidMount(){
	
	}
   constructor(props){
   	super(props);
   	this.state={
   		  arr:[
        {imgObj:imgObj,title:"宗萨仁波切",price:"398.00",xue:"10143人学过"},
        {imgObj:imgObj1,title:"法语清凉：什么叫修行？",price:"298.00",xue:"10056人学过"}
        ],
        newArr:[
        {imgObj2:imgObj2,title:"印祖开示",title1:"天下多半皆枉死之人,此货之烈,世..."},
        {imgObj2:imgObj3,title:"宏元法师",title1:"佛学入门第18课——身心因果"},
        {imgObj2:imgObj4,title:"佛经禅语",title1:"体验你执着的那一刻"}
        ],
        newArr1:[
          {imgObj5:imgObj5,title:"学诚法师问答录",title1:"12143人学过",price:"398.00"},
          {imgObj5:imgObj6,title:"延参法师：人生在此刻",title1:"11234人学过",price:"398.00"},
          {imgObj5:imgObj7,title:"念佛三昧",title1:"10892人学过",price:"398.00"},
          {imgObj5:imgObj8,title:"要与终生结善缘",title1:"10654人学过",price:"398.00"}
        
        ],
        newArr2:[
         {imgObj9:imgObj9,title:"独尊湛现",title1:"要了解无为和有为的区别"},
         {imgObj9:imgObj10,title:"独尊湛现",title1:"真实现实因果故事"},
         {imgObj9:imgObj11,title:"独尊湛现",title1:"与人为善，就是救赎自己"}
        
        ]
   	}
   }

	render(){

		return(
			<div>
			 <div className="top">
		        <img src={require('../../../images/sddw_01.jpg')} className="img"/>
			 </div>
			 <div className="top-1">
			 <input type="text" className="input" placeholder="搜索"/>
			 <p className="p">Q</p>
			 </div>
			 <div className="lun">
			   <Carousel afterChange={onChange} autoplay dots>
			    <div><img src={require('../../../images/sddw_03.jpg')} className="ooooo"/></div>
			   <div><img src={require('../../../images/gamersky_06origin_11_20121224118566.jpg')} className="ooooo"/></div>
			   <div><img src={require('../../../images/gamersky_12origin_23_201211141018A2.jpg')} className="ooooo"/></div>
			   <div><img src={require('../../../images/gamersky_14origin_27_20153211028E9F.jpg')} className="ooooo"/></div>
			  </Carousel>
			 </div>
			 
			 <div className="shipin">
			 <div className="shipin-left"><img src={require('../../../images/sddw_06.jpg')} className="img2"/></div>
			 <div className="shipin-middle">视频区</div>
			 <div className="shipin-right">></div>
			 </div>
			 
			 <div className="zhanshi">
			 {this.state.arr.map((item,index)=>{
			  return <div className="zhanshi-1" key={index}>
			 <img src={item.imgObj}  className="img3"/>
			 <p className="p1">{item.title}</p>
         <Rate allowHalf defaultValue={2.5} />
			 <p className="zi">￥{item.price} <span className="zi1">{item.xue}</span></p>
			 </div>
			 })}

			 </div>
			 <div className="shipin1">
			 <div className="shipin-left1"><img src={require('../../../images/sddw_18.jpg')} className="img2"/></div>
			 <div className="shipin-middle1">音频区</div>
			 <div className="shipin-right1">></div>
			 </div>
			 
			 <div className="yinpin">
			 {this.state.newArr.map((item,index)=>{
			 	return <div className="yinpin-3" key={index}>
			 <div className="yinpin-1">
			 <img src={item.imgObj2} className="img5"/>
			 </div>
			 <div className="yinpin-2">
			 <h3 className="h3">{item.title}</h3>
			 <p className="p2">{item.title1}</p>
			 </div>
			 </div>
			 })}

			 </div>
			 
			 <div className="shipin1">
			 <div className="shipin-left1"><img src={require('../../../images/sddw_31.jpg')} className="img2"/></div>
			 <div className="shipin-middle1">会员专享</div>
			 <div className="shipin-right1">></div>
			 </div>
			 <div className="huiyuan">
			 {this.state.newArr1.map((item,index)=>{
			 	return <div className="huiyuan-2" key={index}>
			   <img src={item.imgObj5} className="img6"/>
			  <p className="p1">{item.title}</p>
			 <Rate allowHalf defaultValue={1.5} />
			 <p className="zi">￥{item.price}<span className="zi5">{item.title1}</span></p>
			  
			  </div>
			 })}

			 </div>
			  <div className="shipin1">
			 <div className="shipin-left1"><img src={require('../../../images/sddw_49.jpg')} className="img2"/></div>
			 <div className="shipin-middle1">公司动态</div>
			 <div className="shipin-right1">></div>
			 </div>
			  <div className="dongtai">
			  {this.state.newArr2.map((item,index)=>{
			  	return<div className="dongtai-1" key={index}>
			      <img src={item.imgObj9} className="img8"/>
			      <h3 className="h3-1">{item.title}</h3>
			      <p className="p5">{item.title1}</p>
			     </div>
			  })}
			  </div>
			  <div className="ddddd">
			  
			  </div>
			</div>
		)
	}
}
export default Home
