import React, { useEffect } from "react";
import { Route, Routes,Link } from "react-router-dom";
import DummyContainer from "./components/dummyContainer/dummyContainer.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import dataList from "./constants/ceoData.jsx";

const App = () => {
  useEffect(()=>{
   document.title="CEO";
  },[])
 return <>
    <Header/>
    <Routes>
       {dataList.map((data,index) =>
          <Route exact path={`/${index}`} element={<div>{data.name}</div>} />
       )}
       <Route exact path="/about-us" element={<div>About Us</div>}/>
       <Route exact path="/contact-us" element={<div>Contact Us</div>}/>
    </Routes>
 <Footer/>
 </>
};

export default App;