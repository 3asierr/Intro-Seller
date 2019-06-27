import './style.scss';
import React from 'react';
import '../../Themes/fonts.css';
import Icon from './test';


const Item = function(props) {
  return (
    <div className='item-content'>
     <div className='icon-item'> 
   {props.icon === 'abc' ? <img className="imgJoin imgTruck" src='/Icons/whyjoinnia/truck.svg'/>: <></> }
   {props.icon === 'abc2' ? <img className="imgJoin imgNet" src='/Icons/whyjoinnia/networking.svg'/>: <></> }
   {props.icon === 'abc3' ? <img className="imgJoin imgEmp" src='/Icons/whyjoinnia/employee.svg'/>: <></> }
   {props.icon === 'abc4' ? <img className="imgJoin imgPow" src='/Icons/whyjoinnia/power.svg'/>: <></> }
   {props.icon === 'abc5' ? <img className="imgJoin imgCus" src='/Icons/whyjoinnia/customer.svg'/>: <></> }
   </div>
      <p className='capitalize pdesc'> { props.title} </p>
    </div>
  )
}

class JoinNia extends React.Component {
  items = [
    { title: 'convenient shipping methods', icon: 'abc' }, 
    { title: 'reach customers nationwides',  icon: 'abc2'},
    { title: 'reduce cost of doing bussiness', icon: 'abc3'},
    {title: 'powerfull tool & services', icon: 'abc4'},
    {title: 'support & education', icon: 'abc5'},
  ]

  render() {
    return <div className='wrapper-content1'>
      <div className='block'>
          <div className='header-content'>
            <h2 className='capitalize h2-why'>why join niamall</h2>
            <span className='hdct-sp'>Break boundries & reach new height with Niamall</span>
          </div>

          <div className='content-main'>
            {
              this.items.map((item, index) => <Item key={index} title={item.title} icon={item.icon}/>)
            }          
          </div>

          <div className='openShop'> <a className='openyrs' href='#'>Open your shop now</a></div>
        </div>
    </div>
  }
}



export default JoinNia;
