import './style.scss';
import React from 'react';
import '../../Themes/fonts.css';
import Icon from './test';



class JoinNia extends React.Component {
 
  
  render() {
    return <div className="wrapper-content1">
      <div className="block">
          <div className="header-content">
            <h2 className="capitalize h2-why">why join niamall</h2>
            <span className="hdct-sp">  Break boundries & reach new height with Niamall</span>
          </div>

          <div className="content-main">
              <div className="item-content">
                  <div className="icon-item"><Icon width={173} fill="#7a7a7a"/></div>
                  <p className="capitalize pdesc"> convenient shipping methods  </p>
              </div>
              <div className="item-content">
                  <div className="icon-item"><Icon width={173} fill="#7a7a7a"/></div>
                  <p className="capitalize pdesc">reach customers nationwide  </p>
              </div>
              <div className="item-content">
                  <div className="icon-item"><Icon width={173} fill="#7a7a7a"/></div>
                  <p className="capitalize pdesc">reduce cost of doing bussiness  </p>
              </div>
              <div className="item-content">
                  <div className="icon-item"><Icon width={173} fill="#7a7a7a"/></div>
                  <p className="capitalize pdesc">powerfull tool & services  </p>
              </div>
              <div className="item-content">
                  <div className="icon-item"><Icon width={173} fill="#7a7a7a"/></div>
                  <p className="capitalize pdesc">support & education  </p>
              </div>
          </div>

          <div className="openShop"> <a className="openyrs" href="#">Open your shop now</a></div>
        </div>
    </div>
  }
}
export default JoinNia;
