import React from 'react'

import { styles,logos,titles, keys } from "../../constants/utils";
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
const Layout = (props)=> {
    console.log(props.childern);
  return <>
  <Header dataList={APP_CONFIG.dataList} logo={APP_CONFIG.logo} style={APP_CONFIG.colors.header}/>
  {props.children}
 <Footer style={APP_CONFIG.colors.footer}/>
  </>
}

export default Layout