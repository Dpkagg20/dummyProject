import React, { useState,useEffect } from "react";
import dataList from "../../constants/ceoData";

import "./MainSection.scss";

const MainSection = (props) => {

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState();
  const [profileUrl, setProfileUrl] = useState();
  const [job, setJob] = useState();
  console.log("###",props);
  useEffect(() => {
    
    setName(props.dataList[props.keys[0]])
    setJob(props.dataList[props.keys[1]])
    setProfileUrl(props.dataList.image)
  }, [props])
  
const changeData=()=>{
  props.dataList[props.keys[0]]=name;
  props.dataList[props.keys[1]]=job;
  props.dataList.image=profileUrl;
}

  return (
    <>
      
        <div
          className="mainsection"
          style={{ backgroundColor: APP_CONFIG.colors.main.backgroundColor, color:APP_CONFIG.colors.main.textColor }}
        >
          {
            edit ? 
            <div className="mainsection__form">
               <div className='' >
      <h1>Profile Form</h1>
      <form>
        <div className="mainsection__form__field">
        <label >
          Name
        </label>
        <input type='text' 
        style={{ color:APP_CONFIG.title=="Pokemons"?"#000": APP_CONFIG.colors.main.backgroundColor}}
        value={name} onChange={(event)=>setName(event.target.value)}
        />
        </div>
        <div className="mainsection__form__field">
        <label>
        Profile Url
        </label>
        <input type='text' style={{ color:APP_CONFIG.title=="Pokemons"?"#000": APP_CONFIG.colors.main.backgroundColor}} 
        value={profileUrl} onChange={(event)=>setProfileUrl(event.target.value)}
        />
        </div>
        <div className="mainsection__form__field">
        <label >
         {props.keys[1]}
        </label>
        <input type='text'
        style={{ color:APP_CONFIG.title=="Pokemons"?"#000": APP_CONFIG.colors.main.backgroundColor}}
        value={job} onChange={(event)=>setJob(event.target.value)}/>
        </div>
        <div className="mainsection__form__btn">
        <button 
                    style={{
                      backgroundColor: APP_CONFIG.colors.header.backgroundColor,
                      color: APP_CONFIG.colors.header.textColor,
                    }}
                    onClick={() => {
                      // APP_CONFIG.dataList[1].name="name";
                      setEdit(!edit)
                      changeData();
                      // console.log("data", APP_CONFIG.dataList[0].name);
                    }}
        >
          Save
        </button>
        </div>
        
      </form>
    </div>
              </div>
            :<>
            <div className="mainsection__btn">
              <button
                className="mainsection__btn__edit"
                style={{
                  backgroundColor: APP_CONFIG.colors.header.backgroundColor,
                  color: APP_CONFIG.colors.header.textColor,
                }}
                onClick={() => {
                  // APP_CONFIG.dataList[1].name="name";
                  setEdit(!edit)
                  console.log("data", APP_CONFIG.dataList[0].name);
                }}
              >
                Edit
              </button>
            </div>
  
            <div className="mainsection__container">
              <div>
                <img
                  style={{ width: "300px", height: "400px" }}
                  src={props.dataList.image}
                />
              </div>
              <div>
                <h1 style={{ color: props.style.textColor }}>
                  {props.keys[0]} : {props.dataList[props.keys[0]]}
                </h1>
                <h1 style={{ color: props.style.textColor }}>
                  {props.keys[1]} : {props.dataList[props.keys[1]]}
                </h1>
                {/* <h2>Description : {dataList[0].description}</h2> */}
              </div>
            </div>
            </>
          }
          
        </div>
      
    </>
  );
};

export default MainSection;
