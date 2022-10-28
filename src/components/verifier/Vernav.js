import React from 'react';
import logo from '../images/logo_3-removebg-preview.png';
import Typical from 'react-typical'
function Vernav() {

    // const steps = [
    //     'Don"t have na account?', 1000,
    //     'hit "sign up" button!', 1000,
    //   ];

  return (
    <div className='nav-holder'>
    <div className='nav-cont'>
        <div>
            <img src={logo}/>
        </div>
        <div className='btn-ver'>
          
        {/* <Typical wrapper="span" steps={steps} loop={Infinity} className='auto-type'/> */}

        <button className='btn-logut'>Logout</button>
        </div>
      
    </div>
    <hr/>
    </div>
  )
}

export default  Vernav