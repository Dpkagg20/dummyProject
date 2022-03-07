import { createStore, combineReducers , compose, applyMiddleware} from "redux";
import dataListReducer from "./reducers";
const reducer = combineReducers({ dataList: dataListReducer });

import thunk from 'redux-thunk';
const middleware = [thunk];

const initialState = {
  dataList: APP_CONFIG.dataList,
};
const store = createStore(
  reducer,
  initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
