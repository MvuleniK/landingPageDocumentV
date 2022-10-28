import React from 'react';
import './plan.css'
import plan from './images/craft-financial-business-plan-1.jpeg'

import { useNavigate, useNavigation } from 'react-router';
import TabsPlan from './TabsPlan';


const Plan = () => {
// const handleClick = () => setClick(!click)
const navigate=useNavigate();
const navigateToContactUs=()=>{
    navigate('/Auth');
}

  return (
    <div>
    <div className='Plan'>

    <div className='scale'>
    <img src={plan} alt='plan' className='Plans'/>

    </div>
    <div className='target'>
        <h6>OUR PLANS</h6>
        <br></br>
        <h1>Pricing that scales to <br></br>fit your needs</h1>
        <p>We are the company that provides a largest <br></br>verifying of documents</p>
        <button onClick={navigateToContactUs}className='price_button'>Get Started</button>
    </div>
</div>
<div className='heading_plan'>
<h1>Choose a plan that works for you</h1>
<p>
By subscribing to a Docuify plan, you agree to the <a href='/'> Docuify Terms of Service. </a> 
Note: The <a href='/'> Docuify Terms of Service </a>  <br></br>
describes how data is handled in this service.
 </p>
</div>
<TabsPlan/>
</div>

  )
}

export default Plan