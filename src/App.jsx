import React, { useEffect } from "react";
import { Route, Routes,Link } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ceoDataList from "./constants/ceoData.jsx";

import { styles,logos,titles, keys } from "./constants/utils.jsx";
import pokemonDataList from "./constants/pokemonData.jsx";
import celebrityDataList from "./constants/celebrityData.jsx";
import MainSection from "./components/MainSection/MainSection.jsx";


const App = () => {
   const i=0;
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
    <Header dataList={dataList[i]} logo={logos[i]} style={styles[i].header}/>
    <Routes>
       {dataList[i].map((data,index) =>
         index==0?
         <Route key={`${titles[i]}_${index}`} exact path={`/`} element={<MainSection dataList={dataList[i][index]} style={styles[i].main} keys={keys[i]}/> } />
         :<Route key={`${titles[i]}_${index}`} exact path={`/${index}`} element={<MainSection dataList={dataList[i][index]} style={styles[i].main} keys={keys[i]}/>} />
       )}
       <Route exact path="/about-us" element={<div>About Us</div>}/>
       <Route exact path="/contact-us" element={<div>Contact Us</div>}/>
    </Routes>
 <Footer style={styles[i].footer}/>
 </>
};

export default App;