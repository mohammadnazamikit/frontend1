import { initialState } from "./store";
import {
  dataInState,
  Loading,
  Search,
  ITEMS,
  SIGN_UP_DATA,
  ITEM_CLICKED,
} from "./actions";

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
    case ITEM_CLICKED:
      return {
        ...state,
        item_Clicked: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
