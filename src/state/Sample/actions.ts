import { updateSampleName } from "./reducer";
import { Dispatch } from "redux";

export const actUpdateSampleName = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch(updateSampleName(data));
  };
};
