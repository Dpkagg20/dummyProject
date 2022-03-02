import React from 'react'
import dataList from '../../constants/ceoData'
import "./MainSection.css";

export default function MainSection() {
  
  return (
    <div className='mainsection'>
        <div className='flex-container'>
          <div>
          <img style={{width:"300px",height:"400px"}} src='https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg'/>
          </div>
          <div>
          <h1>Name :{dataList[0].name}</h1>
          <h1>Job : {dataList[0].job}</h1>
          {/* <h2>Description : {dataList[0].description}</h2> */}
          </div>
         
        
        </div>
    </div>
  )
}
