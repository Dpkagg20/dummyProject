import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";
const Footer= ()=> {
  return <>
  <div className='footer'>
    <Link to="/about-us"><span className='footer__title'>About us</span></Link> 
    <Link to="/contact-us"><span className='footer__title'>Contact us</span></Link>
  </div>
  </>;

}

export default Footer