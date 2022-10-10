import { combineReducers } from "redux";
import inputReduce from "./inputReducer";
import listReduce from "./listReducer";
import modalReduce from "./modalReducer";
import spinnerReduce from "./snipperReducer";

export default combineReducers({
  input: inputReduce,
  list: listReduce,
  spinner: spinnerReduce,
  modal: modalReduce,
});
