import React, { useEffect, useState } from "react";
import "./Header.scss";
import dataList from "../../constants/ceoData";
("../../constants/ceoData.jsx");
import CeoLogo from "../../assets/ceo_logo.jpeg";
import { Link } from "react-router-dom";
import store from "../../store";
import { v4 as uuidv4 } from "uuid";

const Header = (props) => {
  // const [dataList,setDataList]= useState(props.dataList)
  // console.log("Header", store.getState());

  // useEffect(() => {
  //   setDataList(props.dataList);
  //   console.log("h-changed");
  // }, [props]);

  return (
    <div
      className="header"
      style={{ backgroundColor: props.style.backgroundColor }}
    >
      <img src={props.logo} className="header__logo" />

      <div className="header__list">
        {props.dataList.map((data, index) => {
          return (
            <Link
              key={uuidv4()}
              to={`/${index == 0 ? "" : index}`}
              className=""
            >
              <span
                className="header__list__title"
                style={{ color: props.style.textColor }}
              >
                {data.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
