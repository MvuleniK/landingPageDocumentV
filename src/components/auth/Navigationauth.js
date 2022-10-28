import React from 'react';
import logo from '../images/logo_3-removebg-preview.png';
import './nav.css';
import Typical from 'react-typical'
function Navigationauth() {
    const steps = [
        'Don"t have na account?', 1000,
        'hit "sign up" button!', 1000,
       
      ];
  return (
    <div className='nav-holder'>
    <div className='nav-cont'>
        <div>
            <img src={logo}/>
        </div>
        <div className='btn'>
        <Typical wrapper="span" steps={steps} loop={Infinity} className='auto-type'/>
        </div>
      
    </div>
    <hr/>
    </div>
  )
}

export default Navigationauth