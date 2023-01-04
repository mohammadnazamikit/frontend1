import { initialState } from "./store";
import { dataInState, Loading, Search, ITEMS } from "./actions";

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
    case dataInState:
      return {
        ...state,
        query: action.payload,
      };
    case ITEMS:
      return {
        ...state,
        itemsData: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
