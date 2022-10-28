import React, {useState} from 'react'
import Typical from 'react-typical'
import girl from './images/legal-workshop-square-pic-circle-removebg-preview.png'
import './hero.css'
import Marquee from "react-fast-marquee";
import matric from './images/roxann-matric-certificate-1-638.webp';
import { useNavigate } from 'react-router';
import {HiOutlineDocument} from 'react-icons/hi';
import { BiCertification } from 'react-icons/bi';



const Hero = () => {
    const steps = [
        'Docuify', 1000,
        'Trust & Partnership', 1000,
        'Document Verify', 1000,
       
      ];
      const navigate=useNavigate();
    const navigateToAuth=()=>{
        navigate('/Auth')
    }
  return (
    <div className='main'>
        <div className='hero'>
        <div className='content'>
        
          <div>
        <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} />
      </div>
      
      <h1>for our clients</h1>
            <p>
            Get equity planning, stock option financing, and wealth <br></br>
            management from advisors that know how stock options <br></br>
            and equity can help grow your wealth.
            </p>
            <button onClick={navigateToAuth} className='button'>Get started</button>
        </div>
        <div className='img1'>
            <img src={girl} alt='girl' className='girl' height={300}/>
            
        </div>
        </div>
           <hr className='new1'/>
          <div className='split'>
          <p>
            Documents we work with
           </p>
          <Marquee className='Marquee'>
          <HiOutlineDocument className='grcert'/><h4>Matric Certificate</h4>
             <BiCertification className='grcert'/><h4>Higher Certificate</h4>
             <HiOutlineDocument className='grcert'/><h4> Diploma Certificate </h4>
             <BiCertification className='grcert'/><h4> Degree Certificate </h4>
             <HiOutlineDocument className='grcert'/><h4>Honours Certificate</h4>
             <BiCertification className='grcert'/><h4>Doctorate Certificate</h4>
            </Marquee>
          </div>
        
    </div>
  )
}

export default Hero