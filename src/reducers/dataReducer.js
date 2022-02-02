import { FETCH_ALL, SEND_FEEDBACK } from "../actions/types";
import _ from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case SEND_FEEDBACK:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    default:
      return state;
  }
};
