import { combineReducers } from "@reduxjs/toolkit";
import SampleSlice from "./Sample";
const rootReducer = combineReducers({ SampleSlice });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
