import React,{Component} from 'react';
import '../../../styles/Fenlei.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const routes = [
  { path: '/',
    exact: true,
    main: () => <div><div className="huiyuan4">
                <div className="huiyuan5">
                 <img src={require('../../../images/sddw_35.jpg')}className="imge"/>
                 <p className="pp">跟简七学理财</p>
                 <img src={require("../../../images/wwww_03.jpg")}className="img4"/>
                  <p className="zi6">￥398.00 <span className="zi7">10143人学过</span></p>
                 </div>
                   <div className="huiyuan5">
                 <img src={require('../../../images/sddw_37.jpg')}className="imge"/>
                 <p className="pp">跟简七学理财</p>
                 <img src={require("../../../images/wwww_03.jpg")}className="img4"/>
                  <p className="zi6">￥398.00 <span className="zi7">10143人学过</span></p>
                 </div>
			 </div>
			 <div className="huiyuan4">
                <div className="huiyuan5">
                 <img src={require('../../../images/sddw_42.jpg')}className="imge"/>
                 <p className="pp">跟简七学理财</p>
                 <img src={require("../../../images/wwww_03.jpg")}className="img4"/>
                  <p className="zi6">￥398.00 <span className="zi7">10143人学过</span></p>
                 </div>
                   <div className="huiyuan5">
                 <img src={require('../../../images/sddw_44.jpg')}className="imge"/>
                 <p className="pp">跟简七学理财</p>
                 <img src={require("../../../images/wwww_03.jpg")}className="img4"/>
                  <p className="zi6">￥398.00 <span className="zi7">10143人学过</span></p>
                 </div>
			 </div>
			 </div>
  },
  { path: '/bubblegum',

    main: () => <h2>音频区</h2>
  },
  { path: '/shoelaces',

    main: () => <h2>文字区</h2>
  },
    { path: '/shoelacess',

    main: () => <h2>会员区</h2>
  }
]
class Fenlei extends Component{
		componentDidMount(){
	
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
	 <Router>
    <div style={{ display: 'flex' }}>
      <div className="box">
        <ul className="ul">
          <li><Link to="/">视频区</Link></li>
          <li><Link to="/bubblegum">音频区</Link></li>
          <li><Link to="/shoelaces">文字区</Link></li>
          <li><Link to="/shoelacess">会员区</Link></li>
        </ul>

      </div>

      <div style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, index) => (

          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
  </div>
		)
		
	}
}
export default Fenlei
