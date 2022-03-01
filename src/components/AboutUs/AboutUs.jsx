import React from 'react'

const AboutUs=(props)=> {
  return (
      <div className='aboutus' style={{backgroundColor:props.style.backgroundColor}}>
           <div className='aboutus__content' ><h1 style={{color:props.style.textColor}}>Welcome AboutUs</h1></div>
      </div>
   
  )
}
export default AboutUs;