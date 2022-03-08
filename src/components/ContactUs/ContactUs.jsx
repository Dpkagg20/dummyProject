import React from 'react'
import "./ContactUs.scss"
const ContactUs=(props)=> {
  const twitterLinks=[{
    "emmawatson" : "https://twitter.com/emmawatson",
    "johnnydepp" : "https://twitter.com/johnjohnnydepp?lang=en",
    "bradpitt" : "https://twitter.com/pittofficial?lang=en",
    "charleschaplin" : "https://twitter.com/chaplinofficial?lang=en",
    "morganfreeman" : "https://twitter.com/morgan_freeman?lang=en"

  }]
  return (
    <div className='contactus' style={{backgroundColor:props.style.backgroundColor}}>
           <div className='contactus__content' >
             <h1 style={{color:props.style.textColor}} >Click on the celebrity name to go to their twitter profile</h1>
             <br></br>
             <h2 ><a style={{color:props.style.textColor}}  href={twitterLinks[0].emmawatson}>Emma Watson</a></h2>
             <br></br>
             <h2><a style={{color:props.style.textColor}}  href={twitterLinks[0].johnnydepp}>Johnnydeep</a></h2>
             <br></br>
             <h2><a style={{color:props.style.textColor}}  href={twitterLinks[0].bradpitt}>Brad Pitt</a></h2>
             <br></br>
             <h2><a style={{color:props.style.textColor}}  href={twitterLinks[0].charleschaplin}>Charles Chaplin</a></h2>
             <br></br>
             <h2><a style={{color:props.style.textColor}} href={twitterLinks[0].morganfreeman}>Morgan Freeman</a></h2>
            </div>
      </div>
  )
}
export default ContactUs;
