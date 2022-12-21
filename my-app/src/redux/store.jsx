import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducer";

export const initialState = {
  isLoading: false,
  JsonVarible: {
    _id: "",
  },
};

const Store = configureStore({
  reducer: reducer,
  middleware: [thunk],
});

export default Store;