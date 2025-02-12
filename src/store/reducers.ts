import { combineReducers } from "redux";
import serviceSlice from "./slices/serviceSlice";
import customerSlice from "./slices/customerSlice";

const rootReducer = combineReducers({
  customer: customerSlice,
  service: serviceSlice,
});

export default rootReducer;
