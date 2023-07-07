import Slice from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { SliceName } from "./reducer";
import { RootState } from "../rootReducer";
import { bindActionCreators } from "@reduxjs/toolkit";
import * as sliceActions from "./actions";

export const useActStates = () => {
  return useSelector((state: RootState) => state[SliceName]);
};

export const useActActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(sliceActions, dispatch);
};

export default Slice;
