import React from 'react';
import './data.css'
import video from './images/1_UINAsA-ZAG8UBYKhENkWiw.gif'
import { IconButton } from "rsuite";
import {  Search } from '@rsuite/icons';
import SortDownIcon from '@rsuite/icons/SortDown';

import { useNavigate } from 'react-router';


import miss from './images/8ac5c7f468f6a8686d435263efcf994b2a321369-1177x1224.webp'
import equity from './images/d6e7c66584a49398201d2cebfef8c39b5a7a5c47-858x700.webp'
import man from './images/85fc19315ea2838b6faa5d6087a859d00c56498b-1314x1180.webp'


function Data() {
    const ButtonStyle = { margin: "0px 10px" }
    const navigate=useNavigate();
    const navigateToAuth=()=>{
        navigate('/Auth')
    }
  


  return (
    <div className='toppest'>
        <div className='information'>
            <h4>THE LEADING DOCUMENT VERIFY PLATFORM</h4>
            <h1>You've got your documents. Now what?</h1>
            <p>see your full demonstartion on how smart contacts automatically execute, control events and the agreement between two parties</p>
        </div>
        <div className='img2'>
        <img src={video} alt='video' height={300}/>

        <h1>How we help our clients</h1>
        <IconButton icon={<SortDownIcon />} className='buttonStyle' />

        </div>

        <div className='divide'>
            <div className='one'>
            <h5>EQUITY, Tax & IPO PLANNING</h5>
            <h3>Work with a financial advisor to align <br></br>
            your stock options with your financial <br></br>goals.
            </h3>
            <button onClick={navigateToAuth} className='button4'>Get started</button>
            <button href='/' className='button3'>Learn more</button>
            </div>

            <div className='two'>

            <img src={miss} alt='video' className='miss'/>

            </div>
        </div>

        <div className='divide1'>
            

            <div className='two1'>

            <img src={equity} alt='equity' className='equity'/>

            </div>
            <div className='one1'>
            <h5>EXERCISE & LIQUIDITY FINANCING</h5>
            <h3>Get the cash you need to own your <br></br>
            equity, or get cash for your private <br></br>shares without selling them.
            </h3>

            <button onClick={navigateToAuth} className='button8'>Get started</button>

            <button href='/' className='button7'>Learn more</button>

            </div>
        </div>

        <div className='divide'>
            <div className='one'>
            <h5>WEALTH MANAGEMENT</h5>
            <h3>Grow your money through managed <br></br>
            portfolios and exclusive access to  <br></br>private investments.
            </h3>


            <button onClick={navigateToAuth} className='button4'>Get started</button>
            <button href='/' className='button3'>Learn more</button>
            </div>

            <div className='two'>

            <img src={man} alt='man' className='man'/>

            </div>
        </div>

        <div className='divide4'>
            <div className='one4'>
            <h6>WHY DOCUIFY</h6>
            <h1>
            SECURE A FASTER <br></br>AND MORE PARTNERSHIP
           </h1>
            </div>

            <div className='two4'>
                <h3>We put equity first</h3>
                <p>
                Our team has deep expertise in equity, tax implications, and how 
                <br></br>it fits into your financial picture.
                </p>
                <h3>You don’t need millions</h3>
                <p>
                We help you make important equity decisions that can set you
                    <br></br>up for financial success.
                </p>

                <h3>Holistic wealth management</h3>
                <p>
                We take a comprehensive view of all your finances, including <br></br>
                stock options, to help you save time and money, and grow your <br></br>wealth.
                </p>

            </div>
        </div>
    </div>
  )
}

export default Data