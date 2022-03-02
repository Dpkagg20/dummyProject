import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.scss";
const Footer= (props)=> {
  return <>
  <div className='footer' style={{backgroundColor:props.style.backgroundColor}}>
    <Link to="/about-us"><span className='footer__title' style={{color:props.style.textColor}}>About us</span></Link> 
    <Link to="/contact-us"><span className='footer__title' style={{color:props.style.textColor}}>Contact us</span></Link>
  </div>
  </>;

}

export default Footer