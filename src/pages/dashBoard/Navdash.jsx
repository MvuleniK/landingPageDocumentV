import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import {FaBars, FaTimes} from 'react-icons/fa'
// import logo from './images/logo_3-removebg-preview.png'
import logo from '../../components/images/logo_3-removebg-preview.png'
import {  Search } from '@rsuite/icons';
// import './navbar.css'
import { IconButton } from "rsuite";


const Navdash = () => {
    const [click, setClick] = useState(false)
    const ButtonStyle = { margin: "0px 10px" };
    const handleClick = () => setClick(!click)
    const navigate=useNavigate();
    const navigateToAuth=()=>{
        navigate('/Auth')
    }

  return (
    <div className='header'>

        <nav className='navbar'> 

            <a href='/' className='logo'>
                <img src={logo} alt='logo'  />
            </a>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                 : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
            </div>
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
         
     
                <li className='nav-item'>
                    <a href='/'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>About</a>
                </li>
                <li className='nav-item'>
                    <a href='/Dashboard'>Dashboard</a>
                </li>
                <li className='nav-item'>
                    <a href='/Profile'>Profile</a>
                </li>
               
                <li>
                {/* <a href="#">Programming languages</a>
                 <ul class="dropdown">
                 <li><a href="#">C++</a></li>
                 <li><a href="#">JAVA</a></li>
                 <li><a href="#">PHP</a></li>
                 </ul> */}

                 </li>
            </ul>
            <button onClick={navigateToAuth} className='button2'>Log out</button>
            {/* <button onClick={navigateToAuth} className='button1'>Get started</button> */}
            <div>
            <IconButton icon={<Search />} className='ButtonStyle' />
            </div>
        </nav>
        
    </div>
  )
}

export default Navdash