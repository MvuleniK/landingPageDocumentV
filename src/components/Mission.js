import React from 'react';
import './mission.css'
import guy from './images/text-messaging-handsome-young-african-man-using-smart-phone-while-standing-against-grey-background_425904-39398.jpeg'


function Mission() {

  return (
   
        <div className='mission'>
            <div className='our-mission'>
                <h6>OUR MISSION</h6>
                <h1>
                  We help clients verify their <br></br>personal documents without <br></br>
                  being tempted or stolen.
                 
                </h1>
                <p>Equity is complex, stressful, and takes a back seat to the hard work that goes into building a company. But we got it wrong in the past. And we don’t want you to.</p>
                
            </div>
            <div className='mission-img'>
            <img src={guy} alt='guy' className='guy'/>

            </div>
        </div>

  )
  
}

export default Mission