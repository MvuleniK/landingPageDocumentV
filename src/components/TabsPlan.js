import React from 'react';
import './tabsplan.css'
import plan from './images/craft-financial-business-plan-1.jpeg'
import '@blueprintjs/core/lib/css/blueprint.css';
import { Tabs, Tab } from "@blueprintjs/core";
import { useNavigate, useNavigation } from 'react-router';
import {AiFillCheckCircle} from 'react-icons/ai'
import { DIVIDER } from '@blueprintjs/core/lib/esm/common/classes';
import Footer from './Footer'

// const navigate=useNavigate();
// const navigateToAuth=()=>{
//     navigate('/Auth')

const TabsPlan = () => {

    // const handleClick = () => setClick(!click)
    const navigate=useNavigate();
    const navigateToAuth=()=>{
        navigate('/Auth')
    }
    return (
        <div>
        <div className='boxes'>
            <div className='space_boxes1'>
                <h1>BASIC</h1>
                <h2>R80.00</h2>
                <p>Per Month</p>
                <hr/>
                <div className='features'>
                    <AiFillCheckCircle className='check_circle'/><p>All features</p>
                </div>
                <div className='features'>
                    <AiFillCheckCircle className='check_circle' /><p>All features</p>
                </div>
                <div className='features'>
                    <AiFillCheckCircle className='check_circle'/><p>All features</p>
                </div>
                <button onClick={navigateToAuth}  className='select_plan'>Get started</button>
            </div>
            <div className='space_boxes1'>
                <h1>STANDARD</h1>
                <h2>R280.00</h2>
                <p>Per Month</p>
                <hr/>
                <div className='features'>
                    <AiFillCheckCircle className='check_circle'/><p>All features</p>
                </div>
                <div className='features'>
                    <AiFillCheckCircle className='check_circle'/><p>All features</p>
                </div>
                <div className='features' >
                    <AiFillCheckCircle className='check_circle'/><p>All features</p>
                </div>
                <button onClick={navigateToAuth}  className='select_plan'>Get started</button>
            </div>
            <div className='space_boxes1'>
                <h1>PREMIUM</h1>
                <h2>R400.00</h2>
                <p>Per Month</p>
                <hr/>
                <div className='features'>
                    <AiFillCheckCircle className='check_circle'/><p>All features</p>
                </div>
                <div className='features'>
                    <AiFillCheckCircle className='check_circle'/><p>All features</p>
                </div>
                <div className='features'>
                    <AiFillCheckCircle className='check_circle'/><p>All features</p>
                </div>
                <button onClick={navigateToAuth}  className='select_plan'>Get started</button>
            </div>
            </div>
            <Footer/>
            </div>
    );
            }
export default TabsPlan