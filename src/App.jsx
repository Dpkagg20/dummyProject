import React from "react";
import { Route, Routes,Link } from "react-router-dom";
import DummyContainer from "./components/dummyContainer/dummyContainer.jsx";

const App = () => {
 return <>
    <Routes>
    <Route path="/" exact element={<div>Hello World <Link to="/dummy">About</Link></div>} />
    <Route path="/dummy" exact element={<DummyContainer />} />
  
    </Routes>
 </>
};

export default App;