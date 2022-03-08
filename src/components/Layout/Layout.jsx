import React, { useState, useEffect } from "react";
// import {  } from 'react/cjs/react.development';

import { styles, logos, titles, keys } from "../../constants/utils";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

import { v4 as uuidv4 } from "uuid";

const Layout = (props) => {
  // console.log("layout", props);
  // useEffect(() => {
  //   console.log("l-chnaged");
  //   console.log("lap", props);
  // }, [props]);

  return (
    <>
      <Header
        key={uuidv4()}
        dataList={props.dataList}
        logo={APP_CONFIG.logo}
        style={APP_CONFIG.colors.header}
      />
      {props.children}
      <Footer key={uuidv4()} style={APP_CONFIG.colors.footer} />
    </>
  );
};

export default Layout;
