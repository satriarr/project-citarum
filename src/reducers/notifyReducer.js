import { NOTIFY_ACTION } from "../actions/actionTypes";

export default (state = { hasNotify: false, message: null }, action) => {
  switch (action.type) {
    case NOTIFY_ACTION.ADD:
      return {
        hasNotify: true,
        message: action.payload.message
      };
    case NOTIFY_ACTION.REMOVE:
      return {
        hasNotify: false,
        message: null
      };
    default:
      return state;
  }
};
