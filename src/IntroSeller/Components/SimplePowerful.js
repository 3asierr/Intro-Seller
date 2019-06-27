import React from 'react';
import Icon from './test';


const Item = function(props) {
    return (
        <div className='content3s'>
            <div class='ct3-img'>
            {props.icon === 'a1' ? <img className="imgct3" src='Icons/Simplepowerfultools/implement.svg'/> : <></> }
            {props.icon === 'a2' ? <img className="imgct3" src='Icons/Simplepowerfultools/data.svg'/> : <></> }
            {props.icon === 'a3' ? <img className="imgct3" src='Icons/Simplepowerfultools/flyer.svg'/> : <></> }
            {props.icon === 'a4' ? <img className="imgct3" src='Icons/Simplepowerfultools/mobile.svg'/> : <></> }
            </div>

            <div class='ct3-descreption'>
                <h3 className='h3-ct3'>{props.title}</h3>
                <p className='p-ct3'>{props.desc}</p>
            </div>
        </div>
    )
  }

class SimplePowerful extends React.Component {
    items = [
        {title: 'Manage your business',
         icon: 'a1',
          desc:'Use the Sell one Etsy app to manage orders, update items, and respond to your customers on  We have tools to help you whether you re the go.' }, 

          { title: 'Promotional tools that drive traffic', 
          icon: 'a3', 
          desc: 'Reach more buyers by promoting your listings in search or using our free tools to share your items on Etsy and social media.'},

          { title: 'Analytics to improve your sales', 
         icon: 'a2', 
         desc: 'Detailed statistics that show performance trends and traffic sources, so you can stay on top of your business'},
              
        {title: 'Accept payments seamlessly',
         icon: 'a4', 
         desc: 'Manage payment processing with PayPal to make it easy for buyers to pay any way they choose.'},
      ]

  render() {
    return <div className='wrapper-content3'>
        <div class='block'>
            <div className='header-ct3'>
                <h2>Simple, powerful tools</h2>
                <span>Spend less time managing your shop and more time on the fun stuff. We have tools to help you whether you're just getting started or about to make your ten-thousandth sale.</span>
            </div>
        
            <div className='main-content3'>
                
            {
              this.items.map((item, index) => <Item key   = {index}
                                                    title = {item.title}
                                                    icon  = {item.icon} 
                                                    desc  = {item.desc} />)
            }     
         
            </div>
        </div>
    </div>
  }
}

export default SimplePowerful;
