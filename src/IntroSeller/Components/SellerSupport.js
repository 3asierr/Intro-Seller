
import React from 'react';
import './styleSupport.scss';
import Icon from './test';

class SellerSupport extends React.Component {
 
  
  render() {
    return <div className="wrapper-content5">
      <div class="block">
      <div className="header-ct5">
        <h2 className="capitalize"> seller support</h2>
        <p>Any other issues? We are already to help! Check out our seller services to help you with your bussines</p>
      </div>
      <div className="ct5-main">
          <div>
            <div className="ct5-icon">
              <Icon width="133"/>
            </div>
            <div>
              <h3 className="h35 capitalize">NiaMall university  </h3>
              <p className="p5">Free online materials to improve  your business on NiaMall</p>
            </div>
          </div>

          <div>
          <div className="ct5-icon">
            <Icon width="133"/>
          </div>
          <div>
            <h3 className="h35 capitalize">seller support center </h3>
            <p className="p5">Get your answer to your questions by chattting with our support agents</p>
          </div>
        </div>

        <div>
          <div className="ct5-icon">
            <Icon width="133"/>
          </div>
          <div>
            <h3 className="h35 capitalize">NiaMall Service Marketplace</h3>
            <p className="p5">Conect with a range of service providers to help your busines needs.</p>
          </div>
        </div>
      </div>
      </div>

       
    </div>
  }
}
export default SellerSupport;
