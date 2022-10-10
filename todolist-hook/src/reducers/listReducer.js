import { types } from "../actions/types";

const listReduce = (state = { listToDo: [] }, action) => {
  switch (action.type) {
    case types.APPEND:
      return {
        listToDo: [...state.listToDo, action.payload],
      };

    case types.FETCH:
      return {
        listToDo: action.payload,
      };
    case types.DELETE:
      return {
        listToDo: state.listToDo.filter((item) => {
          return item._id != action.payload;
        }),
      };

    case types.UPDATE:
      const item = state.listToDo.find(
        (item) => item._id == action.payload._id
      );
      item.title = action.payload.title;

      return {
        listToDo: [...state.listToDo],
      };
    default:
      return state;
  }
};

export default listReduce;
