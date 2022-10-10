import { types } from "./types";

export const modalToTrue = () => {
  return {
    type: types.TRUE_MODAL,
  };
};

export const modalToFalse = () => (dispatch) => {
  dispatch({
    type: types.FALSE_MODAL,
  });
};
