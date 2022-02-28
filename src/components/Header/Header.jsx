import React from 'react';
import "./Header.css";
import dataList from '../../constants/ceoData'; "../../constants/ceoData.jsx";
import CeoLogo from "../../assets/ceo_logo.jpeg";
import { Link } from 'react-router-dom';

const Header =() =>{
  console.log(dataList);
  return (
    <div className="header">
    
       <img src={CeoLogo} className="header__logo" />
     
     <div className='header__list'>
       {dataList.map((data,index)=>{
        return( <Link to={`/${index}`} className=""><span className='header__list__title' >{data.name}</span></Link>)
       })}
     </div>
    </div>
  )
}

export default Header;