// import _ from "lodash";
import { types } from "../actions/types";

const spinnerReduce = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case types.TRUE_SPINNER:
      return { isLoading: true };
    case types.FALSE_SPINNER:
      return { isLoading: false };

    default:
      return state;
  }
};

// switch (action.type) {
//     case FETCH_STREAMS:
//       return { ...state, ..._.mapKeys(action.payload, "id") };

//     case FETCH_STREAM:
//       return { ...state, [action.payload.id]: action.payload };
//     case CREATE_STREAM:
//       return { ...state, [action.payload.id]: action.payload };
//     case EDIT_STREAM:
//       return { ...state, [action.payload.id]: action.payload };
//     case DELETE_STREAM:
//       return _.omit(state, action.payload);

//     default:
//       return state;
//   }

export default spinnerReduce;
