import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import notifyReducer from "./notifyReducer";
import fetchReducer from "./fetchReducer";

export default combineReducers({
  error: errorReducer,
  user: userReducer,
  auth: authReducer,
  notify: notifyReducer,
  users: fetchReducer
});
