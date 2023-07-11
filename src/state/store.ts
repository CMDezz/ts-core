import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  // middleware: ['array of middlewares'],
  //   devTools: process.env.NODE_ENV !== "development" ? false : true,
});

export type AppDispatch = typeof store.dispatch;

export default store;
