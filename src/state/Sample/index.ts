import Slice from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { SliceName } from "./reducer";
import { RootState } from "../rootReducer";
import { bindActionCreators } from "@reduxjs/toolkit";
// import * as sliceActions from "./thunks";
import { SampleActions } from "./reducer";
import * as ThunkActions from "./thunks";
import { useAppDispatch } from "../store";

export const useActStates = () => {
  return useSelector((state: RootState) => state[SliceName]);
};

export const useActActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ ...SampleActions, ...ThunkActions }, dispatch);
};

export default Slice;
