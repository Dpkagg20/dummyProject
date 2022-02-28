import React, { useEffect } from "react";
import { Route, Routes,Link } from "react-router-dom";
import DummyContainer from "./components/dummyContainer/dummyContainer.jsx";
import Header from "./components/Header/Header.jsx";
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
    </Routes>
    {/* <Routes>
    <Route path="/" exact element={<div>Hello World <Link to="/dummy">About</Link></div>} />
    <Route path="/dummy" exact element={<DummyContainer />} />
  
    </Routes> */}
 </>
};

export default App;