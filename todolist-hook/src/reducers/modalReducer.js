import { types } from "../actions/types";

const modalReduce = (state = { showModal: false }, action) => {
  switch (action.type) {
    case types.TRUE_MODAL:
      return {
        showModal: true,
      };

    case types.FALSE_MODAL:
      return {
        showModal: false,
      };

    default:
      return state;
  }
};

export default modalReduce;
