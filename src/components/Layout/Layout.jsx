import React from 'react'

import { styles,logos,titles, keys } from "../../constants/utils";
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
const Layout = (props)=> {
    console.log(props.childern);
  return <>
  <Header dataList={props.dataList} logo={logos[props.i]} style={styles[props.i].header}/>
  {props.children}
 <Footer style={styles[props.i].footer}/>
  </>
}

export default Layout