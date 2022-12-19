import { initialState } from "./store";
import { Loading, Search, SET_USER_INFO } from "./actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Loading:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Search:
      return {
        ...state,
        query: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
