import React, { useEffect } from "react";
import { Route, Routes,Link, BrowserRouter, HashRouter, Router } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ceoDataList from "./constants/ceoData.jsx";

import { styles,logos,titles, keys } from "./constants/utils.jsx";
import pokemonDataList from "./constants/pokemonData.jsx";
import celebrityDataList from "./constants/celebrityData.jsx";
import MainSection from "./components/MainSection/MainSection.jsx";
import Layout from "./components/Layout/Layout.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";


const App = () => {
   let i=0;
   const dataList=[
      ceoDataList,
      pokemonDataList,
      celebrityDataList
   ];
   console.log(titles);
//   useEffect(()=>{
//    document.title=titles[i];
//   },[])
 return <>
 <BrowserRouter>
    <Routes>
       {APP_CONFIG.dataList?.map((data,index) =>
        <Route key={`${APP_CONFIG.title}_${index}`} exact path={`/${index==0?"":index}`} element={<Layout dataList={APP_CONFIG.dataList} i={i}>
       <MainSection dataList={data} style={APP_CONFIG.colors.main} keys={APP_CONFIG.keys}/>
        </Layout> } />
       )}
       <Route exact path="/about-us" element={<Layout dataList={APP_CONFIG.dataList} i={i}>
      <AboutUs style={APP_CONFIG.colors.main}/>
       </Layout>}/>
       <Route exact path="/contact-us" element={<Layout dataList={APP_CONFIG.dataList} i={i}>
      <ContactUs style={APP_CONFIG.colors.main}/>
       </Layout>}/>
       <Route path="/*" element={<div>Uni</div>}/>
    </Routes>
    </BrowserRouter>
 </>
};

export default App;