import { UPDATE_PROFILE } from "./actions";

const dataListReducer = (state ={}, {type, payload}) => {
      console.log("reducer",payload);
      switch(type) {
             case UPDATE_PROFILE :
             return payload
             default :
     return state
};
};
export default dataListReducer;