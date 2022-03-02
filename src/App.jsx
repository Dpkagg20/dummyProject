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


const App = () => {
   let i=0;
   const dataList=[
      ceoDataList,
      pokemonDataList,
      celebrityDataList
   ];
   console.log(titles);
  useEffect(()=>{
   document.title=titles[i];
  },[])
 return <>
 <BrowserRouter>
    <Routes>
       {dataList[i]?.map((data,index) =>
        <Route key={`${titles[i]}_${index}`} exact path={`/${index==0?"":index}`} element={<Layout dataList={dataList[i]} i={i}>
       <MainSection dataList={data} style={styles[i].main} keys={keys[i]}/>
        </Layout> } />
       )}
       <Route exact path="/about-us" element={<Layout dataList={dataList[i]} i={i}>
       <div>About Us</div>
       </Layout>}/>
       <Route exact path="/contact-us" element={<Layout dataList={dataList[i]} i={i}>
       <div>Contact Us</div>
       </Layout>}/>
       <Route path="/*" element={<div>Uni</div>}/>
    </Routes>
    </BrowserRouter>
 </>
};

export default App;