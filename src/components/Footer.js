import React from 'react'
import './footer.css'
import twitter from './images/Vector.svg'
import Linkedin from './images/Vector (1).svg'
import facebook from './images/akar-icons_facebook-fill.svg'

function Footer () {
  return (
    <div className='footer'>
        <div className='solutions'>

          <h3>SOLUTIONS</h3>

          <ul>

            <li>
              <a href='/'>Equity and Tax Planning </a>
              </li>
            <li>
             <a href=''> IPO and Liquidity Planning </a>
              </li>
            <li>
              <a href=''> Exercise Planning </a>
              </li>
            <li>
             <a href=''> Liquidity Planning </a>
              </li>
            <li>
             <a href=''>  Docuify Wealth</a>
              </li>
            <li>
              <a href=''>Investment Management</a>
              </li>
            <li>
              <a href=''> Docuify for Startups</a>

            </li>
            <li>
              <a href=''>Docuify Capitec</a>
            </li>


          </ul>
          {/* <p>
          © Docuify 2022 — All rights reserved. 
          </p> */}
        </div>

        <div className='Tools'>
        <h3>TOOLS</h3>

        <ul>



          <li>
            <a href=''>Equity Planner</a>
          </li>
          <li>
           <a href=''> AMT Calculator</a>
            </li>
          <li>
            <a href=''>Stock Option Tax Calculator </a></li>

          <li>
            <a href=''>Exercise Timing Planner</a>
          </li>
        
        

          </ul>

        </div>

        <div className='Learn'>

        <h3>LEARN</h3>

        <ul>



          <li>
            <a href=''>Docuify Learn</a>
          </li>
          <li>
          <a href=''>FAQ</a>
            </li>


          </ul>
        </div>

        <div className='About-Us'>

        <h3>ABOUT US</h3>

        <ul>

          <li>
            <a href=''>Our Story</a>
          </li>
          <li>
          <a href=''> Careers</a>
            </li>
          <li>
            <a href=''>News & Press</a></li>
            <li>
          <a href=''> Contact Us</a>
            </li>
            <li>
          <a href=''> Legal</a>
            </li>
          </ul>
        </div>

        <div className='icons'>

          <ul>
            <li className='icon'>
              <a >
              <img src={twitter} alt='twitter' className='twitter' height={25} width={25}/>

              </a>
              <a>
              <img src={Linkedin} alt='Linkedin' className='Linkedin' height={25} width={25}/>

              </a>
              <a>
              <img src={facebook} alt='facebook' className='facebook' height={25} width={25}/>

              </a>
            </li>
          </ul>
        <ul>
        <li>
            <a href=''>Privacy Policy</a>
          </li>
          <li>
          <a href=''> Cookie Policy</a>
            </li>
          <li>
            <a href=''>Security</a></li>
            <li>
          <a href=''> Terms of Service</a>
            </li>
            <li>
          <a href=''> Referral Program</a>
            </li>
          </ul>
         
        </div>
        
        {/* <div className='all_rights'>
          <div className='condition'>
          <p>
          © Secfi 2022 — All rights reserved. 
          </p>
          </div>
        </div> */}
     </div>
  )
}

export default Footer