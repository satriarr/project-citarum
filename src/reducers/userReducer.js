import { USER_ACTION } from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case USER_ACTION.CREATE:
      return action.payload;
    case USER_ACTION.VERIFY:
      return action.payload;
    case USER_ACTION.UPDATE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
