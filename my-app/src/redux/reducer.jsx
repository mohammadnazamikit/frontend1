import { initialState } from "./store";
import { dataInState, Loading, Search, ITEMS, SIGN_UP_DATA } from "./actions";

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
    case SIGN_UP_DATA:
      return {
        ...state,
        SIGN_UP_DATA_IN_STORE: action.payload,
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
