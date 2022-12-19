import { initialState } from "./store";
import { Loading, Search } from "./actions";

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
    default:
      return state;
  }
};
export default reducer;
