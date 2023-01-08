import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducer";

export const initialState = {
  isLoading: false,
  itemsData: {},
  JsonVarible: {
    _id: "",
  },
  SIGN_UP_DATA_IN_STORE: "",
};

const Store = configureStore({
  reducer: reducer,
  middleware: [thunk],
});

export default Store;
