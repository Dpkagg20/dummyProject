import React from 'react'
import dataList from '../../constants/ceoData'

import "./MainSection.scss";

const MainSection=(props)=> {
 
  return (
    <div className='mainsection' style={{backgroundColor:props.style.backgroundColor}}>
        <div className='flex-container'>
          <div>
          <img style={{width:"300px",height:"400px"}} src={props.dataList.image}/>
          </div>
          <div>
          <h1 style={{color:props.style.textColor}}>{props.keys[0]} : {props.dataList[props.keys[0]]}</h1>
          <h1 style={{color:props.style.textColor}}>{props.keys[1]} : {props.dataList[props.keys[1]]}</h1>
          {/* <h2>Description : {dataList[0].description}</h2> */}
          </div>
         
        
        </div>
    </div>
  )
}

export default MainSection;