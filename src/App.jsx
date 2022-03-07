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
  console.log("appp", props);

  useEffect(() => {
   console.log("appp1", props);
  }, [props.dataList]);

  if (props.dataList) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            {props.dataList?.map((data, index) => (
              <Route
                key={`${APP_CONFIG.title}_${uuidv4()}`}
                exact
                path={`/${index == 0 ? "" : index}`}
                element={
                  <Layout dataList={props.dataList}>
                    <MainSection
                      key={uuidv4()}
                      updateDataProfile={props.updateDataProfile}
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
                <Layout dataList={props.dataList}>
                  <AboutUs style={APP_CONFIG.colors.main} />
                </Layout>
              }
            />
            <Route
              exact
              path="/contact-us"
              element={
                <Layout dataList={props.dataList}>
                  <ContactUs style={APP_CONFIG.colors.main} />
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

const MapStateToProps = (state) => {
  return {
    dataList: state.dataList,
  };
};

const MapDispatchToProps = (dispatch) => {
  console.log("store", store.getState());
  let dataList = store.getState().dataList;

  return {
    updateDataProfile: (index, data) => {
      dataList[index] = data;
      console.log("up", dataList);
      return dispatch(updateProfile(dataList));
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
