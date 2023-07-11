import Slice from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { SliceName } from "./reducer";
import { RootState } from "../rootReducer";
import { bindActionCreators } from "@reduxjs/toolkit";
// import * as sliceActions from "./thunks";
import { SampleActions } from "./reducer";
import ThunkActions from "./thunks";
import { AppDispatch } from "../store";
import { useMemo, useCallback } from "react";
import { ThunkActionMap } from "../commons";
export const useActStates = () => {
  return useSelector((state: RootState) => state[SliceName]);
};

export const useActActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useCallback(
    () => bindActionCreators({ ...SampleActions }, dispatch),
    [dispatch]
  );
};

export const useActActionsThunk = () => {
  const dispatch = useDispatch<AppDispatch>();
  return useMemo(() => {
    const actionCreators = Object.keys(ThunkActions).reduce(
      (actions: ThunkActionMap, key) => {
        const action = ThunkActions[key];
        if (typeof action === "function") {
          actions[key] = (...args: any[]) => dispatch(action(...args));
        }
        return actions;
      },
      {}
    );
    return actionCreators;
  }, [dispatch]);
};

export default Slice;
