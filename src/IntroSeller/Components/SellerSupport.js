
import React from 'react';
import Icon from './test';


const Item = function(props) {
  return(
      <div>
          <div className='ct5-icon'>
          {props.icon === 'b1' ? <img className="imgSup" src='/Icons/support/open-book.svg'/>: <></> }
          {props.icon === 'b2' ? <img className="imgSup" src='/Icons/support/contact.svg'/>: <></> }
          {props.icon === 'b3' ? <img className="imgSup" src='/Icons/support/browser.svg'/>: <></> }
          </div>
          <div>
            <h3 className='h35 capitalize'>{props.title} </h3>
            <p className='p5'>{props.desc}</p>
          </div>
      </div>
  )
}


class SellerSupport extends React.Component {
  items = [
    { title: 'NiaMall university', icon: 'b1', desc: 'Free online materials to improve  your business on NiaMall' }, 
    { title: 'seller support center',  icon: 'b2', desc: 'Get your answer to your questions by chattting with our support agents'},
    { title: 'NiaMall Service Marketplace', icon: 'b3', desc: 'Conect with a range of service providers to help your busines needs.'},
  ]


  render() {
    return <div className='wrapper-content5'>
      <div class='block'>
      <div className='header-ct5'>
        <h2 className='capitalize'> seller support</h2>
        <p>Any other issues? We are already to help! Check out our seller services to help you with your bussines</p>
      </div>

      <div className='ct5-main'>

           {
              this.items.map((item, index) => <Item key={index} title={item.title} icon={item.icon} desc={item.desc}/>)
            }      




        {/*  <div>
            <div className='ct5-icon'>
              <Icon width='133'/>
            </div>
            <div>
              <h3 className='h35 capitalize'>NiaMall university  </h3>
              <p className='p5'>Free online materials to improve  your business on NiaMall</p>
            </div>
          </div>

          <div>
              <div className='ct5-icon'>
                <Icon width='133'/>
              </div>
              <div>
                <h3 className='h35 capitalize'>seller support center </h3>
                <p className='p5'>Get your answer to your questions by chattting with our support agents</p>
              </div>
           </div>

        <div>
          <div className='ct5-icon'>
            <Icon width='133'/>
          </div>
          <div>
            <h3 className='h35 capitalize'>NiaMall Service Marketplace</h3>
            <p className='p5'>Conect with a range of service providers to help your busines needs.</p>
          </div>
        </div> */}
      </div>
      </div>

       
    </div>
  }
}
export default SellerSupport;
