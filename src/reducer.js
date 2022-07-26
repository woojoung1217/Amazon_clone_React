import { type } from "@testing-library/user-event/dist/type";
import { act } from "react-dom/test-utils";

export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch ((action, type)) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
