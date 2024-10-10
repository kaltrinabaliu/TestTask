import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import contactReducer from "./contact/contactSlice";

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware: () => string | any[]) => getDefaultMiddleware().concat(thunk),
});

export default store;
