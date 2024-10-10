import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./someSlice"; //

export const store = configureStore({
  reducer: rootReducer,
});
