
import React from 'react';
import './Stylesimple.scss'
import Icon from './test';


class SimplePowerful extends React.Component {
  
  render() {
    return <div className="wrapper-content3">
        <div class="block">
        <div className="header-ct3">
           
            <h2>Simple, powerful tools</h2>
            <span>Spend less time managing your shop and more time on the fun stuff. We have tools to help you whether you're just getting started or about to make your ten-thousandth sale.</span>
        </div>
        <div className="main-content3">
            <div className="content3s">
                <div class="ct3-img">
                <Icon width={235} fill="#fca488"/>
                </div>

                <div class="ct3-descreption">
                    <h3 className="h3-ct3">Manage your business</h3>
                    <p className="p-ct3">Use the Sell one Etsy app to manage orders, update items, and respond to your customers on  We have tools to help you whether you're the go.</p>
                </div>
            </div>

            <div className="content3s ct3sr">
                <div class="ct3-img">
                <Icon width={235} fill="#fca488"/>
                </div>

                <div class="ct3-descreption">
                    <h3 className="h3-ct3">Analytics to improve your sales</h3>
                    <p className="p-ct3">Detailed statistics that show performance trends and traffic sources, so you can stay on top of your business.</p>
                </div>
            </div>

            <div className="content3s">
                <div class="ct3-img">
                <Icon width={235} fill="#fca488"/>
                </div>

                <div class="ct3-descreption">
                    <h3 className="h3-ct3">Promotional tools that drive traffic</h3>
                    <p className="p-ct3">Reach more buyers by promoting your listings in search or using our free tools to share your items on Etsy and social media.</p>
                </div>
            </div>
            <div className="content3s ct3sr">
                <div class="ct3-img">
                    <Icon width={235} fill="#fca488"/>
                </div>

                <div class="ct3-descreption">
                    <h3 className="h3-ct3">Accept payments seamlessly</h3>
                    <p className="p-ct3">Manage payment processing with PayPal to make it easy for buyers to pay any way they choose.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  }
}
export default SimplePowerful;
