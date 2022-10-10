import { types } from "./types";

export const snipperToTrue = () => {
  return {
    type: types.TRUE_SPINNER,
  };
};

export const snipperToFalse = () => {
  return {
    type: types.FALSE_SPINNER,
  };
};
