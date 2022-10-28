import React from 'react';
import './slide.css'


import Marquee from "react-fast-marquee";





function Slide() {

  return (
    <div className='back-color' >
        <div className='show'>
            <h6>TESTIMONIALS</h6>
            <h1>What our clients say</h1>
        </div>

        <Marquee className='Marquee1'>
           <div className='marq'>
           <p> "I realized I’ve been sorely <br></br>needing your advisory services. 
            So excited to work <br></br>with you."</p>
            <br></br>
           <br></br>
           <br></br>
           <br></br>        
           <br></br>
           <br></br>     
           <br></br>

           <h6>Senior Engineer</h6>
           <h6>Gusto</h6>
           </div>

           <div className='marq'>
            <p>"What I found most <br></br> comforting was that this <br></br>
           would allow all our employees, <br></br>not just the executives or <br></br>
           senior ones, an opportunity to <br></br>have the option to make a <br></br> 
           major life decision." </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

                <h6>Dan Sinner</h6>
           <h6>Chief Customer Officer at Happy Money</h6>
           </div>

           <div className='marq'>
          <p> "I realized I’ve been sorely <br></br>needing your advisory services. 
            So excited to work <br></br>with you."</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>        
            <br></br>
            <br></br>     
            <br></br>
   
              <h6>Senior Engineer</h6>
           <h6>Gusto</h6>
           </div>

           <div className='marq'>
          <p> "Docuify was one of the only <br></br> places I could find that could <br></br>
           give me accurate calculations <br></br>on AMT."</p>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>        
           <br></br>
           <br></br>

           <h6>Amanda</h6>
           <h6>Early HR employee at pre-IOP startup</h6>
           </div>

           <div className='marq'>
          <p> "Docuify felt like the safest <br></br>option. There is upside <br></br>
           and almost no downside, and I <br></br>might as well play it safe."</p>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>        
           <br></br>
           <br></br>

          <h6>Victor</h6>
           <h6>Engineering leader at a pre-IPO startup</h6>       
           </div>

           <div className='marq'>
           <p>"I feel like a small fish in a big <br></br>pond with wealth advisors.<br></br> 
           Secfi is exactly what I've been <br></br> looking for. You get me. You <br></br>
           know equity. And you make <br></br>my life easy."</p>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>

          <h6>Emma</h6>
           <h6>Docuify Wealth client</h6>       
           </div>
           </Marquee>


    </div>
  )
}

export default Slide