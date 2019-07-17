import { AUTH_ACTION } from "../actions/actionTypes";

export default (state = { isAuth: false }, action) => {
  switch (action.type) {
    case AUTH_ACTION.LOGIN:
      return {
        isAuth: true
      };
    case AUTH_ACTION.LOGOUT:
      return {
        isAuth: false
      };
    default:
      return state;
  }
};
