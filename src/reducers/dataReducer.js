import { FETCH_ALL } from "../actions/types";
import _ from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    default:
      return state;
  }
};
