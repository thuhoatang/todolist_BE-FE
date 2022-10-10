import _ from "lodash";
import { types } from "../actions/types";
import { statusInput } from "../data/data";

const inputReduce = (
  state = { status: "CREATE", term: "", id: null },
  action
) => {
  switch (action.type) {
    case types.EDIT:
      return { ...state, term: action.payload.term };

    case types.CLEAN:
      return { status: statusInput.CREATE, term: "", id: null };
    case types.CHANGE_TO_EDIT:
      return {
        status: statusInput.EDIT,
        term: action.payload.title,
        id: action.payload._id,
      };
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

export default inputReduce;
