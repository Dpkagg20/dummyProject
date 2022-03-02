import React from 'react'
import "./AboutUs.scss"
const AboutUs=(props)=> {
  return (
      <div className='aboutus' style={{backgroundColor:props.style.backgroundColor}}>
           <div style={{color:props.style.textColor}} className='aboutus__content' >
             <h1>We are strategic enablers for healthcare enterprises to achieve more.</h1>
             <br></br>
             <h2>We are the right mix of people, set in two distinct parts of the globe,
working collaboratively with our clients to add value with technology</h2>
            </div>
      </div>
   
  )
}
export default AboutUs;