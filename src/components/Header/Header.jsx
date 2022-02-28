import React from 'react';
import "./Header.css";
import dataList from '../../constants/ceoData'; "../../constants/ceoData.jsx";
import CeoLogo from "../../assets/ceo_logo.jpeg";
import { Link } from 'react-router-dom';

const Header =(props) =>{
  console.log(props.dataList);
  return (
    <div className="header" style={{backgroundColor:props.style.backgroundColor}}>
    
       <img src={props.logo} className="header__logo" />
     
     <div className='header__list'>
       {props.dataList.map((data,index)=>{
        return( <Link key={index} to={`/${index==0?"":index}`} className=""><span className='header__list__title' style={{color:props.style.textColor}} >{data.name}</span></Link>)
       })}
     </div>
    </div>
  )
}

export default Header;