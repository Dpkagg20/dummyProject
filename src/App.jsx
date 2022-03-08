import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Link,
  BrowserRouter,
  HashRouter,
  Router,
} from "react-router-dom";
import MainSection from "./components/MainSection/MainSection.jsx";
import Layout from "./components/Layout/Layout.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import { connect } from "react-redux";
import updateProfile from "./store/actions.jsx";
import store from "./store";
import { v4 as uuidv4 } from "uuid";

const App = (props) => {
  const [dataList,setDataList]= useState(APP_CONFIG.dataList);
  console.log("appp", props);
  console.log("change data",dataList);
  const changeDataList=(index,data)=>{
    let datalists = dataList;
    datalists[index]=data;
    setDataList(datalists);
    console.log("change da",dataList);
    // return datalists;
  }
  console.log("changed");
  // useEffect(() => {
   
  // }, [dataList]);

  if (dataList) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            {dataList?.map((data, index) => (
              <Route
                key={`${APP_CONFIG.title}_${uuidv4()}`}
                exact
                path={`/${index == 0 ? "" : index}`}
                element={
                  <Layout key={uuidv4()} dataList={dataList}>
                    <MainSection
                      key={uuidv4()}
                      // updateDataProfile={props.updateDataProfile}
                      changeDataList={changeDataList}
                      dataList={data}
                      style={APP_CONFIG.colors.main}
                      keys={APP_CONFIG.keys}
                      i={index}
                    />
                  </Layout>
                }
              />
            ))}
            <Route
              exact
              path="/about-us"
              element={
                <Layout key={uuidv4()} dataList={dataList}>
                  <AboutUs key={uuidv4()} style={APP_CONFIG.colors.main} />
                </Layout>
              }
            />
            <Route
              exact
              path="/contact-us"
              element={
                <Layout key={uuidv4()} dataList={dataList}>
                  <ContactUs key={uuidv4()} style={APP_CONFIG.colors.main} />
                </Layout>
              }
            />
            <Route path="/*" element={<div>Uni</div>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  return <div>h2</div>;
};

// const MapStateToProps = (state) => {
//   return {
//     dataList: state.dataList,
//   };
// };

// const MapDispatchToProps = (dispatch) => {
//   console.log("store", store.getState());
//   let dataList = store.getState().dataList;

//   return {
//     updateDataProfile: (index, data) => {
//       dataList[index] = data;
//       console.log("up", dataList);
//       return dispatch(updateProfile(dataList));
//     },
//   };
// };

// export default connect(MapStateToProps, MapDispatchToProps)(App);
export default App;
