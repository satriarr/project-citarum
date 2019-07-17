import { FETCH_ACTION } from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ACTION.ALL:
      return action.payload;
    case FETCH_ACTION.REMOVE:
      return state.filter(val => {
        return val._id !== action.payload._id;
      });
    default:
      return state;
  }
};
