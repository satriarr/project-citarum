import { ERROR_ACTION } from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ERROR_ACTION.ADD:
      return {
        hasError: true,
        message: action.payload.message
      };
    case ERROR_ACTION.REMOVE:
      return {
        hasError: false
      };
    default:
      return state;
  }
};
