import React from 'react';
import './about.css'
import employees from './images/960x0.jpeg'
import { useNavigate, useNavigation } from 'react-router';


const About = () => {

// const handleClick = () => setClick(!click)

const navigate=useNavigate();
const navigateToContactUs=()=>{
    navigate('/ContactUs')
}
  return (
    <div className='aboutUs'>

        <div className='employees'>
        <img src={employees} alt='employees' className='employer'/>

        </div>
        <div className='story'>
            <h6>OUR STORY</h6>
            <br></br>
            <h1>Hi there, we’re Docuify </h1>
            <p>We are the company that provides a largest verifying of documents</p>
            <button onClick={navigateToContactUs} className='talk'>Talk with us</button>
        </div>
    </div>
  )
}

export default About