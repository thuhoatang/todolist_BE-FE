// import history from "../history";
import { types } from "./types";
export const editInput = (value) => {
  const { status, term, id } = value;
  return {
    type: types.EDIT,
    payload: { status, term, id },
  };
};

export const cleanInput = () => {
  return {
    type: types.CLEAN,
  };
};

export const changeToEditInput = (value) => async (dispatch, getState) => {
  const { list } = getState();
  const item = list.listToDo.find((item) => item._id == value);
  dispatch({
    type: types.CHANGE_TO_EDIT,
    payload: item,
  });
};
