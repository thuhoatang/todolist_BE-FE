// import history from "../history";
import axios from "axios";
import { toDoListService } from "../service";
import { cleanInput } from "./inputAction";
import { modalToFalse, modalToTrue } from "./modalAction";
import { snipperToFalse, snipperToTrue } from "./spinnerAction";
import { types } from "./types";

export const fetchList = (value) => async (dispatch) => {
  dispatch(snipperToTrue());
  const dt = await toDoListService.fetchData();
  dispatch(snipperToFalse());

  dispatch({
    type: types.FETCH,
    payload: dt,
  });
};

export const addList = (value) => async (dispatch) => {
  dispatch(snipperToTrue());

  const dt = await toDoListService.create(value);
  dispatch(snipperToFalse());
  dispatch(modalToTrue());
  setTimeout(() => {
    dispatch(modalToFalse());
  }, 1000);
  dispatch({
    type: types.APPEND,
    payload: dt,
  });
  dispatch(cleanInput());
};

export const deleteList = (value) => async (dispatch) => {
  dispatch(snipperToTrue());

  const dt = await toDoListService.delete(value);
  dispatch(snipperToFalse());
  dispatch(modalToTrue());
  setTimeout(() => {
    dispatch(modalToFalse());
  }, 1000);
  if (dt === 200)
    dispatch({
      type: types.DELETE,
      payload: value,
    });
};

export const updateList = async (_id, term) => async (dispatch) => {
  dispatch(snipperToTrue());

  const dt = await toDoListService.update(_id, term);
  dispatch(snipperToFalse());

  dispatch(modalToTrue());
  setTimeout(() => {
    dispatch(modalToFalse());
  }, 1000);
  dispatch({
    type: types.UPDATE,
    payload: dt,
  });
};
